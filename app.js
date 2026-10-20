// =====================================================================
//  LÓGICA DE LA APP
//  No hace falta tocar este archivo para añadir preguntas (eso va en preguntas.js).
// =====================================================================

const PREGUNTAS_POR_TEST = 10;   // modo estudio
const LETRAS = ["A", "B", "C", "D"];

// Puntuación del examen del Sergas
const PUNTOS_ACIERTO = 0.5;
const PUNTOS_FALLO = -0.125;
const MINUTOS_POR_PREGUNTA_REAL = 150 / 110;   // el examen real: 150 minutos para 110 preguntas

// Tu progreso se guarda en el navegador (localStorage) con estos nombres.
const CLAVE_ESTADISTICAS = "celador_estadisticas"; // { tema: { aciertos, total } }
const CLAVE_REPASO = "celador_repaso";             // preguntas que repasar: { clave: { caja, proxima: "AAAA-MM-DD" } }
const CLAVE_VISTAS = "celador_vistas";             // preguntas respondidas al menos una vez (ver claveDe)
const CLAVE_LEIDOS = "celador_leidos";             // ids de los temas del temario marcados como leídos
const CLAVE_ULTIMA_COPIA = "celador_ultima_copia"; // fecha de la última copia de seguridad
const CLAVE_NOTAS = "celador_notas";               // notas sobre preguntas: { clave: { tipo, texto, fecha, tema, origen, enunciado, correcta } }
const CLAVE_FALLOS = "celador_fallos";             // versión anterior de la lista de fallos (solo para pasarla al repaso)

// Repaso espaciado: días que pasan hasta volver a preguntar una pregunta según su "caja".
// Al fallarla vuelve a la caja 0 (repasar hoy). Cada acierto la pasa a la siguiente caja;
// si se acierta en la última (a los 30 días), se da por dominada y sale del repaso.
const DIAS_REPASO = [0, 1, 3, 7, 15, 30];
const DIAS_AVISO_COPIA = 14;   // días sin copia de seguridad a partir de los que se avisa en el inicio
const TIPOS_NOTA = { duda: "❓ Duda", error: "⚠️ Posible error", observacion: "💬 Observación" };

// Estado del test que se está haciendo ahora mismo
let modo = "estudio";        // "estudio" (corrige al momento) o "examen" (corrige al final)
let preguntasDelTest = [];
let posicion = 0;
let aciertosDelTest = 0;     // modo estudio
let respuestasExamen = [];   // modo examen: la letra elegida en cada pregunta, o null si está en blanco
let inicioExamen = 0;        // modo examen: hora a la que empezó (para el cronómetro)
let cronometro = null;
let temaAbierto = -1;        // temario: posición del tema que se está leyendo
let volverTrasTest = null;   // si el test se empezó desde el temario o los puntos conflictivos: { texto, accion }

// Atajo para buscar un elemento de la página por su id
function $(id) {
  return document.getElementById(id);
}

// ---------- Guardar y leer el progreso ----------

function leer(clave, valorPorDefecto) {
  try {
    const texto = localStorage.getItem(clave);
    return texto ? JSON.parse(texto) : valorPorDefecto;
  } catch (e) {
    return valorPorDefecto;
  }
}

function guardar(clave, valor) {
  try {
    localStorage.setItem(clave, JSON.stringify(valor));
  } catch (e) {
    // Si el navegador no deja guardar (modo incógnito, por ejemplo), seguimos sin guardar.
  }
}

// ---------- Comprobar que preguntas.js está bien escrito ----------

function comprobarPreguntas() {
  if (typeof PREGUNTAS === "undefined") {
    return ["No se pudo leer preguntas.js. Suele ser una coma, llave o comilla que falta. " +
            "Revisa el último cambio que hiciste en ese archivo."];
  }
  const problemas = [];
  PREGUNTAS.forEach(function (p, i) {
    const n = "Pregunta " + (i + 1);
    if (!p.tema) problemas.push(n + ": le falta el tema.");
    if (!p.enunciado) problemas.push(n + ": le falta el enunciado.");
    if (!Array.isArray(p.opciones) || p.opciones.length !== 4) problemas.push(n + ": debe tener exactamente 4 opciones.");
    if (!LETRAS.includes(p.correcta)) problemas.push(n + ': "correcta" debe ser "A", "B", "C" o "D".');
    if (!p.explicacion) problemas.push(n + ": le falta la explicación.");
  });
  return problemas;
}

// ---------- Utilidades ----------

function mostrarPantalla(id) {
  ["pantalla-inicio", "pantalla-pregunta", "pantalla-resultado", "pantalla-estadisticas",
   "pantalla-temario", "pantalla-lectura", "pantalla-conflictivos", "pantalla-notas"].forEach(function (p) {
    $(p).classList.toggle("oculto", p !== id);
  });
  window.scrollTo(0, 0);
}

// Devuelve una copia de la lista desordenada al azar
function barajar(lista) {
  const copia = lista.slice();
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

// Lista de temas sin repetir, en el mismo orden en que aparecen en preguntas.js (el del temario)
function listaDeTemas() {
  const temas = PREGUNTAS.map(function (p) { return p.tema; });
  return Array.from(new Set(temas));
}

// Identificador de una pregunta para la lista de fallos.
// Usa enunciado y opciones porque hay preguntas distintas con el mismo enunciado.
function claveDe(p) {
  return p.enunciado + " | " + p.opciones.join(" | ");
}

// ---------- Pantalla de inicio ----------

function prepararInicio() {
  const selector = $("selector-tema");
  selector.innerHTML = "";
  selector.add(new Option("Todos los temas (" + PREGUNTAS.length + " preguntas)", ""));
  listaDeTemas().forEach(function (tema) {
    const cuantas = PREGUNTAS.filter(function (p) { return p.tema === tema; }).length;
    selector.add(new Option(tema + " (" + cuantas + ")", tema));
  });
  actualizarBotonFallos();
  actualizarBotonNotas();
}

// ----- Repaso espaciado de fallos -----

// Fecha de hoy (o dentro de unos días) como texto "AAAA-MM-DD", que se puede comparar directamente
function fecha(diasDesdeHoy) {
  const d = new Date();
  d.setDate(d.getDate() + (diasDesdeHoy || 0));
  return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
}

function leerRepaso() {
  const repaso = leer(CLAVE_REPASO, null);
  if (repaso) return repaso;
  // Primera vez con esta versión: la lista de fallos antigua pasa al repaso, para repasar hoy
  const antiguos = new Set(leer(CLAVE_FALLOS, []));
  const nuevo = {};
  PREGUNTAS.forEach(function (p) {
    if (antiguos.has(claveDe(p)) || antiguos.has(p.enunciado)) nuevo[claveDe(p)] = { caja: 0, proxima: fecha() };
  });
  guardar(CLAVE_REPASO, nuevo);
  return nuevo;
}

// Preguntas en repaso; con soloHoy, solo las que toca repasar hoy (o que se quedaron atrasadas)
function preguntasEnRepaso(soloHoy) {
  const repaso = leerRepaso();
  const hoy = fecha();
  return PREGUNTAS.filter(function (p) {
    const r = repaso[claveDe(p)];
    return r && (!soloHoy || r.proxima <= hoy);
  });
}

// Preguntas del tema elegido en el selector (o todas)
function preguntasDelTema() {
  const tema = $("selector-tema").value;
  return tema ? PREGUNTAS.filter(function (p) { return p.tema === tema; }) : PREGUNTAS;
}

function actualizarBotonFallos() {
  const paraHoy = preguntasEnRepaso(true).length;
  const total = preguntasEnRepaso(false).length;
  $("boton-fallos").textContent = paraHoy ? "Repaso de hoy (" + paraHoy + " preguntas)" : "Repaso de hoy: nada pendiente ✓";
  $("boton-fallos").disabled = paraHoy === 0;
  $("info-repaso").textContent = total
    ? total + " preguntas falladas en seguimiento. Cada vez que aciertas una, vuelve a salir más tarde: a los 1, 3, 7, 15 y 30 días."
    : "Las preguntas que falles aparecerán aquí para repasarlas los días siguientes.";
}

// Para estudiar: primero las preguntas que aún no has respondido nunca, al azar
function priorizarNoVistas(preguntas, cantidad) {
  const vistas = new Set(leer(CLAVE_VISTAS, []));
  const nuevas = preguntas.filter(function (p) { return !vistas.has(claveDe(p)); });
  const yaVistas = preguntas.filter(function (p) { return vistas.has(claveDe(p)); });
  return barajar(nuevas).concat(barajar(yaVistas)).slice(0, cantidad);
}

// ---------- El test (los dos modos) ----------

function empezarTest(preguntas, modoElegido, cantidad, volverA) {
  modo = modoElegido;
  volverTrasTest = volverA || null;
  $("boton-volver-al-tema").classList.toggle("oculto", !volverTrasTest);
  if (volverTrasTest) $("boton-volver-al-tema").textContent = volverTrasTest.texto;
  preguntasDelTest = barajar(preguntas).slice(0, cantidad);
  posicion = 0;
  aciertosDelTest = 0;
  respuestasExamen = preguntasDelTest.map(function () { return null; });

  const esExamen = modo === "examen";
  $("cronometro").classList.toggle("oculto", !esExamen);
  $("boton-terminar").classList.toggle("oculto", !esExamen);
  if (esExamen) {
    inicioExamen = Date.now();
    actualizarCronometro();
    cronometro = setInterval(actualizarCronometro, 1000);
  }
  mostrarPregunta();
  mostrarPantalla("pantalla-pregunta");
}

function mostrarPregunta() {
  const p = preguntasDelTest[posicion];
  $("contador").textContent = "Pregunta " + (posicion + 1) + " de " + preguntasDelTest.length;
  // Si la pregunta tiene origen (por ejemplo, de un examen oficial), se muestra junto al tema
  $("tema-pregunta").textContent = p.origen ? p.tema + " · " + p.origen : p.tema;
  $("enunciado").textContent = p.enunciado;
  $("feedback").classList.add("oculto");

  const contenedor = $("opciones");
  contenedor.innerHTML = "";
  p.opciones.forEach(function (texto, i) {
    const boton = document.createElement("button");
    boton.className = "opcion";
    boton.textContent = LETRAS[i] + ") " + texto;
    boton.addEventListener("click", function () {
      if (modo === "examen") elegirEnExamen(LETRAS[i]);
      else responder(LETRAS[i]);
    });
    contenedor.appendChild(boton);
  });

  $("panel-nota").classList.add("oculto");
  pintarBotonNota();

  if (modo === "examen") {
    marcarElegida();
    $("boton-anterior").classList.toggle("oculto", posicion === 0);
  } else {
    $("boton-siguiente").classList.add("oculto");
    $("boton-anterior").classList.add("oculto");
  }
}

// ----- Modo estudio: corrige en cuanto respondes -----

function responder(letraElegida) {
  const p = preguntasDelTest[posicion];
  const acertada = letraElegida === p.correcta;

  // Colorear las opciones (verde la buena, rojo la tuya si fallas) y bloquearlas
  const botones = $("opciones").querySelectorAll("button");
  botones.forEach(function (boton, i) {
    boton.disabled = true;
    if (LETRAS[i] === p.correcta) {
      boton.classList.add("acierto");
      boton.textContent += "  ✓";
    } else if (LETRAS[i] === letraElegida) {
      boton.classList.add("error-opcion");
      boton.textContent += "  ✗";
    }
  });

  // Mostrar si has acertado y, debajo, la explicación en el cuadro beige
  const feedback = $("feedback");
  feedback.innerHTML = "";
  const veredicto = document.createElement("p");
  veredicto.className = "veredicto " + (acertada ? "bien" : "mal");
  veredicto.textContent = acertada ? "✓ ¡Correcto!" : "✗ Incorrecto. La respuesta buena es la " + p.correcta + ".";
  feedback.append(veredicto, cuadroExplicacion(p));
  feedback.classList.remove("oculto");

  registrarRespuesta(p, acertada);
  if (acertada) aciertosDelTest++;

  const esLaUltima = posicion === preguntasDelTest.length - 1;
  $("boton-siguiente").textContent = esLaUltima ? "Ver resultado" : "Siguiente";
  $("boton-siguiente").classList.remove("oculto");
}

function cuadroExplicacion(p) {
  const cuadro = document.createElement("div");
  cuadro.className = "explicacion";
  const texto = document.createElement("p");
  texto.textContent = p.explicacion;
  cuadro.appendChild(texto);
  return cuadro;
}

// ----- Modo examen: solo marca tu respuesta; se corrige al final -----

function elegirEnExamen(letra) {
  // Pulsar otra vez la misma opción la desmarca (vuelve a quedar en blanco)
  respuestasExamen[posicion] = respuestasExamen[posicion] === letra ? null : letra;
  marcarElegida();
}

function marcarElegida() {
  const elegida = respuestasExamen[posicion];
  $("opciones").querySelectorAll("button").forEach(function (boton, i) {
    boton.classList.toggle("elegida", LETRAS[i] === elegida);
  });
  const esLaUltima = posicion === preguntasDelTest.length - 1;
  let texto;
  if (elegida) texto = esLaUltima ? "Terminar y corregir" : "Siguiente";
  else texto = esLaUltima ? "Dejar en blanco y corregir" : "Dejar en blanco y seguir";
  $("boton-siguiente").textContent = texto;
  $("boton-siguiente").classList.remove("oculto");
}

function anterior() {
  if (posicion > 0) {
    posicion--;
    mostrarPregunta();
    window.scrollTo(0, 0);
  }
}

function terminarAntes() {
  const sinResponder = respuestasExamen.filter(function (r) { return r === null; }).length;
  if (!confirm("¿Terminar el examen ahora? Las " + sinResponder + " preguntas sin responder contarán en blanco.")) return;
  corregirExamen();
}

function formatoTiempo(milisegundos) {
  const segundos = Math.floor(milisegundos / 1000);
  const mm = String(Math.floor(segundos / 60)).padStart(2, "0");
  const ss = String(segundos % 60).padStart(2, "0");
  return mm + ":" + ss;
}

function actualizarCronometro() {
  $("cronometro").textContent = "⏱ " + formatoTiempo(Date.now() - inicioExamen);
}

function pararCronometro() {
  clearInterval(cronometro);
  cronometro = null;
}

// Escribe un número con coma decimal, como en España (2,375)
function numero(n) {
  return n.toLocaleString("es-ES", { maximumFractionDigits: 3 });
}

function corregirExamen() {
  pararCronometro();
  const tiempo = Date.now() - inicioExamen;
  let aciertos = 0, fallos = 0, enBlanco = 0;
  const revision = $("revision");
  revision.innerHTML = "";

  preguntasDelTest.forEach(function (p, i) {
    const elegida = respuestasExamen[i];
    if (elegida === null) {
      enBlanco++;
      marcarVista(p);
      anadirAFallos(p);   // en blanco: no cuenta en estadísticas, pero va al repaso
    } else {
      const acertada = elegida === p.correcta;
      if (acertada) aciertos++; else fallos++;
      registrarRespuesta(p, acertada);
    }
    if (elegida !== p.correcta) revision.appendChild(tarjetaRevision(p, i, elegida));
  });

  const total = preguntasDelTest.length;
  const puntos = aciertos * PUNTOS_ACIERTO + fallos * PUNTOS_FALLO;
  const notaSobre10 = (puntos / (total * PUNTOS_ACIERTO)) * 10;
  const minutosReales = Math.round(total * MINUTOS_POR_PREGUNTA_REAL);

  $("titulo-resultado").textContent = "Examen corregido";
  const resumen = document.createElement("div");
  resumen.className = "resumen";
  [
    ["nota", "Nota: " + numero(Math.round(notaSobre10 * 100) / 100) + " sobre 10"],
    ["", "Puntos: " + numero(puntos) + " de " + numero(total * PUNTOS_ACIERTO)],
    ["", "✓ Aciertos: " + aciertos],
    ["", "✗ Fallos: " + fallos],
    ["", "○ En blanco: " + enBlanco],
    ["pequeno", "Tiempo: " + formatoTiempo(tiempo) + " (en el examen real tendrías unos " + minutosReales + " minutos para " + total + " preguntas)"]
  ].forEach(function (linea) {
    const p = document.createElement("p");
    p.className = linea[0];
    p.textContent = linea[1];
    resumen.appendChild(p);
  });
  $("texto-resultado").innerHTML = "";
  $("texto-resultado").appendChild(resumen);

  const tituloRevision = document.createElement("h2");
  tituloRevision.textContent = revision.children.length ? "Repasa estas preguntas" : "¡Todas correctas!";
  revision.prepend(tituloRevision);

  mostrarPantalla("pantalla-resultado");
}

// Tarjeta con una pregunta fallada o en blanco: tu respuesta, la buena y la explicación
function tarjetaRevision(p, indice, elegida) {
  const tarjeta = document.createElement("div");
  tarjeta.className = "revision-item";

  const cabecera = document.createElement("p");
  cabecera.className = "pequeno";
  cabecera.textContent = "Pregunta " + (indice + 1) + " · " + p.tema + (p.origen ? " · " + p.origen : "");
  const enunciado = document.createElement("h3");
  enunciado.textContent = p.enunciado;
  tarjeta.append(cabecera, enunciado);

  const tuya = document.createElement("div");
  if (elegida === null) {
    tuya.className = "respuesta blanco";
    tuya.textContent = "○ La dejaste en blanco";
  } else {
    tuya.className = "respuesta mal";
    tuya.textContent = "✗ Tu respuesta: " + elegida + ") " + p.opciones[LETRAS.indexOf(elegida)];
  }
  const buena = document.createElement("div");
  buena.className = "respuesta bien";
  buena.textContent = "✓ Correcta: " + p.correcta + ") " + p.opciones[LETRAS.indexOf(p.correcta)];
  tarjeta.append(tuya, buena, cuadroExplicacion(p));
  return tarjeta;
}

// ----- Común a los dos modos -----

// Apunta el acierto/fallo en las estadísticas y en la lista de fallos
function registrarRespuesta(p, acertada) {
  const estadisticas = leer(CLAVE_ESTADISTICAS, {});
  if (!estadisticas[p.tema]) estadisticas[p.tema] = { aciertos: 0, total: 0 };
  estadisticas[p.tema].total++;
  if (acertada) estadisticas[p.tema].aciertos++;
  guardar(CLAVE_ESTADISTICAS, estadisticas);

  marcarVista(p);
  // Si la fallas, entra en el repaso. Si la aciertas y estaba en repaso, avanza de caja.
  if (acertada) acertadaEnRepaso(p);
  else anadirAFallos(p);
}

function marcarVista(p) {
  const vistas = leer(CLAVE_VISTAS, []);
  const clave = claveDe(p);
  if (!vistas.includes(clave)) {
    vistas.push(clave);
    guardar(CLAVE_VISTAS, vistas);
  }
}

// Fallada o en blanco: vuelve a la primera caja y toca repasarla hoy mismo
function anadirAFallos(p) {
  const repaso = leerRepaso();
  repaso[claveDe(p)] = { caja: 0, proxima: fecha() };
  guardar(CLAVE_REPASO, repaso);
}

// Acertada: si estaba en repaso y le tocaba, pasa a la siguiente caja (o se da por dominada)
function acertadaEnRepaso(p) {
  const repaso = leerRepaso();
  const actual = repaso[claveDe(p)];
  if (!actual || actual.proxima > fecha()) return;   // si aún no le tocaba, no adelanta el calendario
  const caja = actual.caja + 1;
  if (caja >= DIAS_REPASO.length) delete repaso[claveDe(p)];
  else repaso[claveDe(p)] = { caja: caja, proxima: fecha(DIAS_REPASO[caja]) };
  guardar(CLAVE_REPASO, repaso);
}

function siguiente() {
  if (modo === "examen" && posicion === preguntasDelTest.length - 1) {
    corregirExamen();
    return;
  }
  posicion++;
  if (posicion < preguntasDelTest.length) {
    mostrarPregunta();
    window.scrollTo(0, 0);
  } else {
    const total = preguntasDelTest.length;
    const porcentaje = Math.round((aciertosDelTest / total) * 100);
    $("titulo-resultado").textContent = "Test terminado";
    $("texto-resultado").textContent = "Has acertado " + aciertosDelTest + " de " + total + " (" + porcentaje + "%).";
    $("revision").innerHTML = "";
    mostrarPantalla("pantalla-resultado");
  }
}

// ---------- Mi progreso ----------

function mostrarEstadisticas() {
  const estadisticas = leer(CLAVE_ESTADISTICAS, {});
  const vistas = new Set(leer(CLAVE_VISTAS, []));
  const leidos = leer(CLAVE_LEIDOS, []);

  // Resumen general
  let aciertosTotales = 0, respuestasTotales = 0;
  Object.keys(estadisticas).forEach(function (t) {
    aciertosTotales += estadisticas[t].aciertos;
    respuestasTotales += estadisticas[t].total;
  });
  const vistasActuales = PREGUNTAS.filter(function (p) { return vistas.has(claveDe(p)); }).length;
  const resumen = $("resumen-progreso");
  resumen.innerHTML = "";
  lineaConBarra(resumen, "Preguntas vistas: " + vistasActuales + " de " + PREGUNTAS.length, vistasActuales / PREGUNTAS.length);
  if (hayTemario()) lineaConBarra(resumen, "Temas del temario leídos: " + leidos.length + " de " + TEMARIO.length, leidos.length / TEMARIO.length);
  parrafo(resumen, "Aciertos: " + (respuestasTotales ? Math.round((aciertosTotales / respuestasTotales) * 100) : 0) + " % (" + aciertosTotales + " de " + respuestasTotales + " respuestas)");
  parrafo(resumen, "En repaso: " + preguntasEnRepaso(false).length + " preguntas (" + preguntasEnRepaso(true).length + " para hoy)");

  // Temas más flojos: los de peor porcentaje, con al menos 10 respuestas
  const flojos = $("temas-flojos");
  flojos.innerHTML = "";
  const candidatos = listaDeTemas().filter(function (t) { return estadisticas[t] && estadisticas[t].total >= 10; })
    .map(function (t) { return { tema: t, porcentaje: Math.round((estadisticas[t].aciertos / estadisticas[t].total) * 100) }; })
    .sort(function (a, b) { return a.porcentaje - b.porcentaje; })
    .slice(0, 3);
  if (candidatos.length) {
    const titulo = document.createElement("h3");
    titulo.className = "bloque-titulo";
    titulo.textContent = "Tus temas más flojos";
    flojos.appendChild(titulo);
    candidatos.forEach(function (c) {
      const boton = document.createElement("button");
      boton.className = "tema-flojo";
      [["", c.tema + " · " + c.porcentaje + " % de aciertos"], ["info-tema", "Tocar para practicar 10 preguntas de este tema"]].forEach(function (parte) {
        const span = document.createElement("span");
        span.className = parte[0];
        span.textContent = parte[1];
        boton.appendChild(span);
      });
      boton.addEventListener("click", function () {
        const delTema = PREGUNTAS.filter(function (p) { return p.tema === c.tema; });
        empezarTest(priorizarNoVistas(delTema, PREGUNTAS_POR_TEST), "estudio", PREGUNTAS_POR_TEST, {
          texto: "Volver a mi progreso",
          accion: mostrarEstadisticas
        });
      });
      flojos.appendChild(boton);
    });
  }

  // Tabla por tema: preguntas vistas y porcentaje de aciertos.
  // Al final, los temas que ya no existen (de versiones anteriores), si los hay.
  const antiguos = Object.keys(estadisticas).filter(function (t) { return !listaDeTemas().includes(t); }).sort();
  const zona = $("tabla-estadisticas");
  zona.innerHTML = "";
  const tabla = document.createElement("table");
  tabla.innerHTML = '<tr><th>Tema</th><th class="numero">Vistas</th><th class="numero">Aciertos</th></tr>';
  listaDeTemas().concat(antiguos).forEach(function (tema) {
    const delTema = PREGUNTAS.filter(function (p) { return p.tema === tema; });
    const vistasTema = delTema.filter(function (p) { return vistas.has(claveDe(p)); }).length;
    const d = estadisticas[tema];
    const fila = document.createElement("tr");
    [
      tema + (temaLeido(tema) ? " ✓" : ""),
      delTema.length ? vistasTema + "/" + delTema.length : "–",
      d && d.total ? Math.round((d.aciertos / d.total) * 100) + " %" : "–"
    ].forEach(function (texto, i) {
      const celda = document.createElement("td");
      celda.textContent = texto;
      if (i > 0) celda.className = "numero";
      fila.appendChild(celda);
    });
    tabla.appendChild(fila);
  });
  zona.appendChild(tabla);
  parrafo(zona, "✓ = has marcado como leído el tema del temario correspondiente.").className = "pequeno";

  const ultima = leer(CLAVE_ULTIMA_COPIA, null);
  $("info-copia").textContent = ultima ? "Última copia guardada: " + fechaLegible(ultima) + "." : "Todavía no has guardado ninguna copia.";
  mostrarPantalla("pantalla-estadisticas");
}

function parrafo(contenedor, texto) {
  const p = document.createElement("p");
  p.textContent = texto;
  contenedor.appendChild(p);
  return p;
}

function lineaConBarra(contenedor, texto, proporcion) {
  parrafo(contenedor, texto);
  const barra = document.createElement("div");
  barra.className = "barra";
  const relleno = document.createElement("span");
  relleno.style.width = Math.round(Math.min(1, proporcion) * 100) + "%";
  barra.appendChild(relleno);
  contenedor.appendChild(barra);
}

// "2026-10-20" → "20/10/2026"
function fechaLegible(texto) {
  const partes = texto.split("-");
  return partes[2] + "/" + partes[1] + "/" + partes[0];
}

// ¿Está marcado como leído el tema del temario que usa este tema de preguntas?
function temaLeido(temaPreguntas) {
  if (!hayTemario()) return false;
  const leidos = leer(CLAVE_LEIDOS, []);
  return TEMARIO.some(function (t) { return t.temaTest === temaPreguntas && leidos.includes(t.id); });
}

function borrarProgreso() {
  if (!confirm("¿Seguro que quieres borrar TODO tu progreso: estadísticas, repaso, preguntas vistas, temas leídos y notas? Si no tienes una copia guardada, no se podrá recuperar.")) return;
  [CLAVE_ESTADISTICAS, CLAVE_REPASO, CLAVE_VISTAS, CLAVE_LEIDOS, CLAVE_NOTAS, CLAVE_FALLOS].forEach(function (clave) {
    try { localStorage.removeItem(clave); } catch (e) { /* sin almacenamiento: nada que borrar */ }
  });
  guardar(CLAVE_REPASO, {});
  mostrarEstadisticas();
}

// ---------- Copia de seguridad ----------

const CLAVES_COPIA = [CLAVE_ESTADISTICAS, CLAVE_REPASO, CLAVE_VISTAS, CLAVE_LEIDOS, CLAVE_NOTAS];

// Descarga un archivo con todo el progreso
function guardarCopia() {
  const copia = { app: "test-celador", version: 1, fecha: fecha(), datos: {} };
  CLAVES_COPIA.forEach(function (clave) { copia.datos[clave] = leer(clave, null); });
  const archivo = new Blob([JSON.stringify(copia)], { type: "application/json" });
  const enlace = document.createElement("a");
  enlace.href = URL.createObjectURL(archivo);
  enlace.download = "progreso-celador-" + fecha() + ".json";
  document.body.appendChild(enlace);
  enlace.click();
  enlace.remove();
  setTimeout(function () { URL.revokeObjectURL(enlace.href); }, 2000);
  guardar(CLAVE_ULTIMA_COPIA, fecha());
  actualizarAvisoCopia();
  if (!$("pantalla-estadisticas").classList.contains("oculto")) mostrarEstadisticas();
}

// Lee un archivo de copia elegido por el usuario y recupera el progreso
function recuperarCopia(archivo) {
  const lector = new FileReader();
  lector.onload = function () {
    let copia;
    try { copia = JSON.parse(lector.result); } catch (e) { copia = null; }
    if (!copia || copia.app !== "test-celador" || !copia.datos) {
      alert("Ese archivo no es una copia de esta app. Elige el archivo progreso-celador-….json que descargaste.");
      return;
    }
    if (!confirm("¿Recuperar la copia del " + fechaLegible(copia.fecha) + "? Sustituirá el progreso que tienes ahora en este navegador.")) return;
    CLAVES_COPIA.forEach(function (clave) {
      if (copia.datos[clave] !== null && copia.datos[clave] !== undefined) guardar(clave, copia.datos[clave]);
    });
    guardar(CLAVE_ULTIMA_COPIA, copia.fecha);
    alert("Copia recuperada.");
    actualizarBotonFallos();
    actualizarBotonNotas();
    actualizarAvisoCopia();
    mostrarEstadisticas();
  };
  lector.readAsText(archivo);
}

// En el inicio, avisa si hay progreso y hace más de DIAS_AVISO_COPIA días que no se guarda una copia
function actualizarAvisoCopia() {
  const ultima = leer(CLAVE_ULTIMA_COPIA, null);
  const hayProgreso = leer(CLAVE_VISTAS, []).length > 0;
  const atrasada = !ultima || ultima <= fecha(-DIAS_AVISO_COPIA);
  $("aviso-copia").classList.toggle("oculto", !(hayProgreso && atrasada));
  $("texto-aviso-copia").textContent = ultima
    ? "💾 Tu última copia de seguridad es del " + fechaLegible(ultima) + ". Guarda otra para no perder tu progreso."
    : "💾 Aún no has guardado ninguna copia de tu progreso. Si cambias de móvil o se borran los datos del navegador, lo perderías.";
}

// ---------- Notas sobre las preguntas ----------

function notaDe(p) {
  return leer(CLAVE_NOTAS, {})[claveDe(p)] || null;
}

function pintarBotonNota() {
  const abierto = !$("panel-nota").classList.contains("oculto");
  const nota = notaDe(preguntasDelTest[posicion]);
  $("boton-nota").textContent = abierto ? "✕ Cerrar nota"
    : nota ? "📝 Ver o cambiar mi nota (" + TIPOS_NOTA[nota.tipo] + ")" : "📝 Añadir nota";
}

// Abre o cierra el cuadro de la nota de la pregunta que se está viendo
function abrirCerrarNota() {
  const panel = $("panel-nota");
  panel.classList.toggle("oculto");
  if (!panel.classList.contains("oculto")) {
    const nota = notaDe(preguntasDelTest[posicion]);
    $("texto-nota").value = nota ? nota.texto : "";
    document.querySelector('input[name="tipo-nota"][value="' + (nota ? nota.tipo : "duda") + '"]').checked = true;
    $("boton-borrar-nota").classList.toggle("oculto", !nota);
    $("texto-nota").focus();
  }
  pintarBotonNota();
}

function guardarNota() {
  const p = preguntasDelTest[posicion];
  const texto = $("texto-nota").value.trim();
  if (!texto) { borrarNota(); return; }
  const notas = leer(CLAVE_NOTAS, {});
  // Se guarda también el texto de la pregunta, por si luego se corrige y cambia
  notas[claveDe(p)] = {
    tipo: document.querySelector('input[name="tipo-nota"]:checked').value,
    texto: texto,
    fecha: fecha(),
    tema: p.tema,
    origen: p.origen || "",
    enunciado: p.enunciado,
    correcta: p.correcta + ") " + p.opciones[LETRAS.indexOf(p.correcta)]
  };
  guardar(CLAVE_NOTAS, notas);
  $("panel-nota").classList.add("oculto");
  pintarBotonNota();
}

function borrarNota() {
  const notas = leer(CLAVE_NOTAS, {});
  delete notas[claveDe(preguntasDelTest[posicion])];
  guardar(CLAVE_NOTAS, notas);
  $("panel-nota").classList.add("oculto");
  pintarBotonNota();
}

function actualizarBotonNotas() {
  const cuantas = Object.keys(leer(CLAVE_NOTAS, {})).length;
  $("boton-notas").textContent = "📝 Mis notas" + (cuantas ? " (" + cuantas + ")" : "");
}

// Notas que se ven con el filtro elegido, de la más reciente a la más antigua
function notasFiltradas() {
  const notas = leer(CLAVE_NOTAS, {});
  const tipo = $("filtro-notas").value;
  return Object.keys(notas)
    .map(function (clave) { return Object.assign({ clave: clave }, notas[clave]); })
    .filter(function (n) { return !tipo || n.tipo === tipo; })
    .sort(function (a, b) { return a.fecha < b.fecha ? 1 : a.fecha > b.fecha ? -1 : 0; });
}

// Preguntas del banco que tienen nota (las que se hayan corregido ya no coinciden)
function preguntasConNota(lista) {
  const claves = new Set(lista.map(function (n) { return n.clave; }));
  return PREGUNTAS.filter(function (p) { return claves.has(claveDe(p)); });
}

function mostrarNotas() {
  const lista = notasFiltradas();
  const contenedor = $("lista-notas");
  contenedor.innerHTML = "";
  $("texto-copiar-notas").classList.add("oculto");
  if (lista.length === 0) {
    parrafo(contenedor, $("filtro-notas").value
      ? "No tienes notas de este tipo."
      : "Aún no tienes notas. Mientras haces un test, toca «📝 Añadir nota» debajo de la pregunta.").className = "pequeno";
  }
  const existentes = new Set(PREGUNTAS.map(claveDe));
  lista.forEach(function (n) {
    const item = document.createElement("div");
    item.className = "nota-item";
    const cabecera = parrafo(item, TIPOS_NOTA[n.tipo] + " · " + fechaLegible(n.fecha));
    cabecera.className = "nota-tipo";
    parrafo(item, n.tema + (n.origen ? " · " + n.origen : "")).className = "pequeno";
    const enunciado = document.createElement("h3");
    enunciado.textContent = n.enunciado;
    item.appendChild(enunciado);
    parrafo(item, "Respuesta de la app: " + n.correcta).className = "pequeno";
    if (!existentes.has(n.clave)) parrafo(item, "✓ Esta pregunta ya se ha cambiado o corregido en la app.").className = "pequeno";
    parrafo(item, n.texto).className = "nota-texto";
    const borrar = document.createElement("button");
    borrar.className = "peligro";
    borrar.textContent = "Borrar esta nota";
    borrar.addEventListener("click", function () {
      if (!confirm("¿Borrar esta nota?")) return;
      const notas = leer(CLAVE_NOTAS, {});
      delete notas[n.clave];
      guardar(CLAVE_NOTAS, notas);
      actualizarBotonNotas();
      mostrarNotas();
    });
    item.appendChild(borrar);
    contenedor.appendChild(item);
  });
  const practicables = preguntasConNota(lista).length;
  $("boton-practicar-notas").classList.toggle("oculto", practicables === 0);
  $("boton-practicar-notas").textContent = "Practicar estas preguntas (" + practicables + ")";
  $("boton-copiar-notas").classList.toggle("oculto", lista.length === 0);
  mostrarPantalla("pantalla-notas");
}

// Copia las notas como texto para pegarlas en un chat o un correo
function copiarNotas() {
  const texto = "MIS NOTAS · Test Celador Sergas\n\n" + notasFiltradas().map(function (n, i) {
    return (i + 1) + ". [" + TIPOS_NOTA[n.tipo].replace(/^\S+ /, "") + "] " + n.tema + (n.origen ? " · " + n.origen : "") + "\n" +
      "Pregunta: " + n.enunciado + "\n" +
      "Respuesta de la app: " + n.correcta + "\n" +
      "Mi nota: " + n.texto;
  }).join("\n\n");
  const aMano = function () {
    const caja = $("texto-copiar-notas");
    caja.value = texto;
    caja.classList.remove("oculto");
    caja.focus();
    caja.select();
    alert("No se ha podido copiar solo. El texto está seleccionado en el cuadro: mantén pulsado y elige «Copiar».");
  };
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(texto).then(function () {
      alert("Notas copiadas. Ahora pégalas donde quieras (mantén pulsado y «Pegar»).");
    }, aMano);
  } else {
    aMano();
  }
}

// ---------- Temario ----------

function hayTemario() {
  return typeof TEMARIO !== "undefined" && Array.isArray(TEMARIO) && TEMARIO.length > 0;
}

// Lista de temas agrupada por bloque (Parte específica / Parte común)
function mostrarListaTemario() {
  const lista = $("lista-temario");
  lista.innerHTML = "";
  const bloques = Array.from(new Set(TEMARIO.map(function (t) { return t.bloque; })));
  bloques.forEach(function (bloque) {
    const titulo = document.createElement("h3");
    titulo.className = "bloque-titulo";
    titulo.textContent = bloque;
    lista.appendChild(titulo);

    TEMARIO.forEach(function (t, i) {
      if (t.bloque !== bloque) return;
      const boton = document.createElement("button");
      boton.className = "tema-item";
      [
        ["numero-tema", "Tema " + t.numero],
        ["titulo-tema", t.titulo],
        ["info-tema", (leer(CLAVE_LEIDOS, []).includes(t.id) ? "✓ Leído · " : "") + minutosDeLectura(t) + " min de lectura · " + preguntasDeTemaTest(t).length + " preguntas de test"]
      ].forEach(function (parte) {
        const span = document.createElement("span");
        span.className = parte[0];
        span.textContent = parte[1];
        boton.appendChild(span);
      });
      boton.addEventListener("click", function () { abrirTema(i); });
      lista.appendChild(boton);
    });
  });
  mostrarPantalla("pantalla-temario");
}

function minutosDeLectura(t) {
  return Math.max(1, Math.round((t.palabras || 0) / 200));   // unas 200 palabras por minuto
}

function preguntasDeTemaTest(t) {
  return PREGUNTAS.filter(function (p) { return p.tema === t.temaTest; });
}

function abrirTema(i) {
  temaAbierto = i;
  const t = TEMARIO[i];
  $("lectura-cabecera").textContent = t.bloque + " · Tema " + t.numero;
  $("lectura-titulo").textContent = t.titulo;
  $("lectura-tiempo").textContent = "⏱ " + minutosDeLectura(t) + " min de lectura";
  $("lectura-contenido").innerHTML = markdownAHtml(t.contenido || "");

  const cuantas = preguntasDeTemaTest(t).length;
  $("boton-test-tema").textContent = "Hacer el test de este tema (" + Math.min(cuantas, PREGUNTAS_POR_TEST) + " preguntas)";
  $("boton-test-tema").classList.toggle("oculto", cuantas === 0);
  $("boton-tema-siguiente").classList.toggle("oculto", i === TEMARIO.length - 1);
  pintarBotonLeido();
  mostrarPantalla("pantalla-lectura");
}

function pintarBotonLeido() {
  const leido = leer(CLAVE_LEIDOS, []).includes(TEMARIO[temaAbierto].id);
  $("boton-leido").textContent = leido ? "✓ Leído (tocar para desmarcar)" : "Marcar como leído";
  $("boton-leido").classList.toggle("leido", leido);
}

function cambiarLeido() {
  const id = TEMARIO[temaAbierto].id;
  let leidos = leer(CLAVE_LEIDOS, []);
  leidos = leidos.includes(id) ? leidos.filter(function (x) { return x !== id; }) : leidos.concat(id);
  guardar(CLAVE_LEIDOS, leidos);
  pintarBotonLeido();
}

// ----- Convertir el texto Markdown del temario en HTML -----

// Evita que un < o un & del texto se interprete como código de la página
function escaparHtml(texto) {
  return texto.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// **negrita** y *cursiva* dentro de una línea
function formatoEnLinea(texto) {
  return escaparHtml(texto)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*\s][^*]*?)\*/g, "<em>$1</em>");
}

function markdownAHtml(texto) {
  const lineas = texto.split("\n");
  let html = "";
  let listas = [];          // listas abiertas, de fuera a dentro: "ul" o "ol"
  let enTrampas = false;    // dentro del apartado "Trampas típicas"

  function cerrarListas(hasta) {
    while (listas.length > hasta) html += "</li></" + listas.pop() + ">";
  }
  function cerrarTrampas() {
    if (enTrampas) { html += "</section>"; enTrampas = false; }
  }

  for (let i = 0; i < lineas.length; i++) {
    const linea = lineas[i];
    const item = linea.match(/^(\s*)(-|\d+\.)\s+(.*)$/);

    if (item) {
      // Punto de lista. Cada 2 espacios delante = un nivel más de profundidad.
      let nivel = Math.floor(item[1].length / 2);
      const tipo = item[2] === "-" ? "ul" : "ol";
      if (nivel > listas.length) nivel = listas.length;
      if (nivel === listas.length) {
        const inicio = tipo === "ol" && parseInt(item[2], 10) !== 1 ? ' start="' + parseInt(item[2], 10) + '"' : "";
        html += "<" + tipo + inicio + ">";
        listas.push(tipo);
      } else {
        cerrarListas(nivel + 1);
        if (listas[nivel] !== tipo) {
          cerrarListas(nivel);
          html += "<" + tipo + ">";
          listas.push(tipo);
        } else {
          html += "</li>";
        }
      }
      html += "<li>" + formatoEnLinea(item[3]);
      continue;
    }

    cerrarListas(0);
    if (linea.trim() === "") continue;

    if (linea.startsWith("### ")) {
      html += "<h4>" + formatoEnLinea(linea.slice(4)) + "</h4>";
    } else if (linea.startsWith("## ")) {
      cerrarTrampas();
      const titulo = linea.slice(3);
      if (/^trampas/i.test(titulo.trim())) {
        html += '<section class="trampas">';
        enTrampas = true;
        html += "<h3>⚠️ " + formatoEnLinea(titulo) + "</h3>";
      } else {
        html += "<h3>" + formatoEnLinea(titulo) + "</h3>";
      }
    } else if (linea.startsWith(">")) {
      html += "<blockquote>" + formatoEnLinea(linea.replace(/^>\s?/, "")) + "</blockquote>";
    } else if (linea.trim().startsWith("|")) {
      // Tabla: se juntan todas las líneas seguidas que empiezan por |
      const filas = [];
      while (i < lineas.length && lineas[i].trim().startsWith("|")) filas.push(lineas[i++].trim());
      i--;
      html += tablaAHtml(filas);
    } else {
      html += "<p>" + formatoEnLinea(linea) + "</p>";
    }
  }
  cerrarListas(0);
  cerrarTrampas();
  return html;
}

function tablaAHtml(filas) {
  const celdas = function (fila) {
    return fila.replace(/^\|/, "").replace(/\|$/, "").split("|").map(function (c) { return c.trim(); });
  };
  let html = '<div class="tabla-scroll"><table>';
  filas.forEach(function (fila, n) {
    if (/^\|?\s*:?-{2,}/.test(fila)) return;   // la línea |---|---| solo separa la cabecera
    const etiqueta = n === 0 ? "th" : "td";
    html += "<tr>" + celdas(fila).map(function (c) {
      return "<" + etiqueta + ">" + formatoEnLinea(c) + "</" + etiqueta + ">";
    }).join("") + "</tr>";
  });
  return html + "</table></div>";
}

// ---------- Puntos conflictivos ----------

const CLASE_ESTADO = {
  "Comprobado": "estado-comprobado",
  "Probable": "estado-probable",
  "Dudoso": "estado-dudoso",
  "Norma cambiada": "estado-norma"
};

// Código de una pregunta del examen (por ejemplo "E105") a partir de su origen
function codigoExamen(p) {
  const encontrado = (p.origen || "").match(/\b[CE]\d+\b/);
  return encontrado ? encontrado[0] : null;
}

function mostrarConflictivos(posicionScroll) {
  const lista = $("lista-conflictivos");
  lista.innerHTML = "";
  const grupos = Array.from(new Set(CONFLICTIVOS.map(function (c) { return c.grupo; })));
  grupos.forEach(function (grupo) {
    const titulo = document.createElement("h3");
    titulo.className = "bloque-titulo";
    titulo.textContent = grupo;
    lista.appendChild(titulo);
    CONFLICTIVOS.forEach(function (c) {
      if (c.grupo === grupo) lista.appendChild(tarjetaConflicto(c));
    });
  });
  mostrarPantalla("pantalla-conflictivos");
  if (posicionScroll) window.scrollTo(0, posicionScroll);
}

function tarjetaConflicto(c) {
  const tarjeta = document.createElement("div");
  tarjeta.className = "conflicto";

  const etiqueta = document.createElement("span");
  etiqueta.className = "estado " + (CLASE_ESTADO[c.estado] || "");
  etiqueta.textContent = c.estado;
  const titulo = document.createElement("h3");
  titulo.textContent = c.titulo;
  const info = document.createElement("p");
  info.className = "pequeno";
  info.textContent = c.tema + (c.preguntas.length ? " · Examen 2024: " + c.preguntas.join(", ") : "");
  const texto = document.createElement("div");
  texto.className = "lectura";
  texto.innerHTML = markdownAHtml(c.contenido || "");
  tarjeta.append(etiqueta, titulo, info, texto);

  if (c.fuentes && c.fuentes.length) {
    const fuentes = document.createElement("div");
    fuentes.className = "fuentes";
    fuentes.textContent = "Fuentes consultadas:";
    const ul = document.createElement("ul");
    c.fuentes.forEach(function (f) {
      if (!/^https:\/\//.test(f.url)) return;   // solo enlaces seguros
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = f.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.textContent = f.titulo;
      li.appendChild(a);
      ul.appendChild(li);
    });
    fuentes.appendChild(ul);
    tarjeta.appendChild(fuentes);
  }

  // Botón para practicar las preguntas del examen relacionadas
  const relacionadas = PREGUNTAS.filter(function (p) { return c.preguntas.includes(codigoExamen(p)); });
  if (relacionadas.length) {
    const boton = document.createElement("button");
    boton.className = "secundario";
    boton.textContent = relacionadas.length === 1 ? "Practicar esta pregunta" : "Practicar estas " + relacionadas.length + " preguntas";
    boton.addEventListener("click", function () {
      const scroll = window.scrollY;
      empezarTest(relacionadas, "estudio", relacionadas.length, {
        texto: "Volver a puntos conflictivos",
        accion: function () { mostrarConflictivos(scroll); }
      });
    });
    tarjeta.appendChild(boton);
  }
  return tarjeta;
}

// ---------- Arranque: conectar los botones ----------

function volverAlInicio() {
  if (cronometro && !confirm("¿Salir del examen? No se guardará nada de este examen.")) return;
  pararCronometro();
  actualizarBotonFallos();
  actualizarBotonNotas();
  actualizarAvisoCopia();
  mostrarPantalla("pantalla-inicio");
}

const problemas = comprobarPreguntas();
if (problemas.length > 0) {
  $("error").innerHTML = "<strong>Hay un problema en preguntas.js:</strong>";
  const lista = document.createElement("ul");
  problemas.forEach(function (texto) {
    const li = document.createElement("li");
    li.textContent = texto;
    lista.appendChild(li);
  });
  $("error").appendChild(lista);
  $("error").classList.remove("oculto");
  $("pantalla-inicio").classList.add("oculto");
} else {
  prepararInicio();
  actualizarAvisoCopia();

  $("boton-empezar").addEventListener("click", function () {
    empezarTest(priorizarNoVistas(preguntasDelTema(), PREGUNTAS_POR_TEST), "estudio", PREGUNTAS_POR_TEST);
  });
  $("boton-examen").addEventListener("click", function () {
    empezarTest(preguntasDelTema(), "examen", Number($("selector-cantidad").value));
  });
  $("boton-fallos").addEventListener("click", function () {
    empezarTest(preguntasEnRepaso(true), "estudio", PREGUNTAS_POR_TEST);
  });
  $("boton-leido").addEventListener("click", cambiarLeido);
  $("boton-copia").addEventListener("click", guardarCopia);
  $("boton-copia-aviso").addEventListener("click", guardarCopia);
  $("boton-recuperar").addEventListener("click", function () { $("archivo-copia").click(); });
  $("archivo-copia").addEventListener("change", function () {
    if (this.files[0]) recuperarCopia(this.files[0]);
    this.value = "";   // permite volver a elegir el mismo archivo
  });
  $("boton-anterior").addEventListener("click", anterior);
  if (hayTemario()) {
    $("boton-temario").addEventListener("click", mostrarListaTemario);
  } else {
    $("boton-temario").disabled = true;
    $("boton-temario").textContent = "Temario no disponible (revisa temario.js)";
  }
  document.querySelectorAll(".boton-ir-temario").forEach(function (b) {
    b.addEventListener("click", mostrarListaTemario);
  });
  $("boton-tema-siguiente").addEventListener("click", function () { abrirTema(temaAbierto + 1); });
  $("boton-test-tema").addEventListener("click", function () {
    empezarTest(preguntasDeTemaTest(TEMARIO[temaAbierto]), "estudio", PREGUNTAS_POR_TEST, {
      texto: "Volver al tema",
      accion: function () { abrirTema(temaAbierto); }
    });
  });
  $("boton-volver-al-tema").addEventListener("click", function () { volverTrasTest.accion(); });
  if (typeof CONFLICTIVOS !== "undefined" && Array.isArray(CONFLICTIVOS)) {
    $("boton-conflictivos").textContent = "Ver puntos conflictivos (" + CONFLICTIVOS.length + ")";
    $("boton-conflictivos").addEventListener("click", function () { mostrarConflictivos(); });
  } else {
    $("boton-conflictivos").disabled = true;
    $("boton-conflictivos").textContent = "No disponible (revisa conflictivos.js)";
  }
  $("boton-terminar").addEventListener("click", terminarAntes);
  $("boton-estadisticas").addEventListener("click", mostrarEstadisticas);
  $("boton-notas").addEventListener("click", mostrarNotas);
  $("filtro-notas").addEventListener("change", mostrarNotas);
  $("boton-nota").addEventListener("click", abrirCerrarNota);
  $("boton-guardar-nota").addEventListener("click", guardarNota);
  $("boton-borrar-nota").addEventListener("click", function () {
    if (confirm("¿Borrar la nota de esta pregunta?")) borrarNota();
  });
  $("boton-practicar-notas").addEventListener("click", function () {
    const preguntas = preguntasConNota(notasFiltradas());
    empezarTest(preguntas, "estudio", preguntas.length, { texto: "Volver a mis notas", accion: mostrarNotas });
  });
  $("boton-copiar-notas").addEventListener("click", copiarNotas);
  $("boton-siguiente").addEventListener("click", siguiente);
  $("boton-borrar").addEventListener("click", borrarProgreso);
  document.querySelectorAll(".boton-volver").forEach(function (b) {
    b.addEventListener("click", volverAlInicio);
  });
}
