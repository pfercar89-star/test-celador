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
const CLAVE_FALLOS = "celador_fallos";           // lista de preguntas falladas (ver claveDe)
const CLAVE_ESTADISTICAS = "celador_estadisticas"; // { tema: { aciertos, total } }

// Estado del test que se está haciendo ahora mismo
let modo = "estudio";        // "estudio" (corrige al momento) o "examen" (corrige al final)
let preguntasDelTest = [];
let posicion = 0;
let aciertosDelTest = 0;     // modo estudio
let respuestasExamen = [];   // modo examen: la letra elegida en cada pregunta, o null si está en blanco
let inicioExamen = 0;        // modo examen: hora a la que empezó (para el cronómetro)
let cronometro = null;

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
  ["pantalla-inicio", "pantalla-pregunta", "pantalla-resultado", "pantalla-estadisticas"].forEach(function (p) {
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
}

function preguntasFalladas() {
  const fallos = new Set(leer(CLAVE_FALLOS, []));
  // Las versiones anteriores guardaban solo el enunciado; también se reconocen
  return PREGUNTAS.filter(function (p) { return fallos.has(claveDe(p)) || fallos.has(p.enunciado); });
}

// Preguntas del tema elegido en el selector (o todas)
function preguntasDelTema() {
  const tema = $("selector-tema").value;
  return tema ? PREGUNTAS.filter(function (p) { return p.tema === tema; }) : PREGUNTAS;
}

function actualizarBotonFallos() {
  const cuantos = preguntasFalladas().length;
  $("boton-fallos").textContent = "Estudiar mis fallos (" + cuantos + ")";
  $("boton-fallos").disabled = cuantos === 0;
}

// ---------- El test (los dos modos) ----------

function empezarTest(preguntas, modoElegido, cantidad) {
  modo = modoElegido;
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
      anadirAFallos(p);   // en blanco: no cuenta en estadísticas, pero va a tus fallos para repasarla
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

  // Si la fallas, entra en la lista de fallos. Si la aciertas, sale de ella.
  if (acertada) quitarDeFallos(p);
  else anadirAFallos(p);
}

function quitarDeFallos(p) {
  const fallos = leer(CLAVE_FALLOS, []).filter(function (e) { return e !== claveDe(p) && e !== p.enunciado; });
  guardar(CLAVE_FALLOS, fallos);
}

function anadirAFallos(p) {
  quitarDeFallos(p);
  const fallos = leer(CLAVE_FALLOS, []);
  fallos.push(claveDe(p));
  guardar(CLAVE_FALLOS, fallos);
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

// ---------- Estadísticas ----------

function mostrarEstadisticas() {
  const estadisticas = leer(CLAVE_ESTADISTICAS, {});
  // Primero los temas actuales en orden del temario; después, los que ya no existen (de versiones anteriores)
  const actuales = listaDeTemas().filter(function (t) { return estadisticas[t]; });
  const antiguos = Object.keys(estadisticas).filter(function (t) { return !actuales.includes(t); }).sort();
  const temas = actuales.concat(antiguos);
  const zona = $("tabla-estadisticas");
  zona.innerHTML = "";

  if (temas.length === 0) {
    zona.textContent = "Todavía no has respondido ninguna pregunta.";
  } else {
    const tabla = document.createElement("table");
    tabla.innerHTML = '<tr><th>Tema</th><th class="numero">Aciertos</th><th class="numero">%</th></tr>';
    let aciertosTotales = 0, respuestasTotales = 0;
    temas.forEach(function (tema) {
      const d = estadisticas[tema];
      aciertosTotales += d.aciertos;
      respuestasTotales += d.total;
      tabla.appendChild(filaEstadistica(tema, d.aciertos, d.total));
    });
    const filaTotal = filaEstadistica("TOTAL", aciertosTotales, respuestasTotales);
    filaTotal.style.fontWeight = "bold";
    tabla.appendChild(filaTotal);
    zona.appendChild(tabla);
  }
  mostrarPantalla("pantalla-estadisticas");
}

function filaEstadistica(nombre, aciertos, total) {
  const fila = document.createElement("tr");
  const porcentaje = total ? Math.round((aciertos / total) * 100) : 0;
  [nombre, aciertos + " / " + total, porcentaje + "%"].forEach(function (texto, i) {
    const celda = document.createElement("td");
    celda.textContent = texto;
    if (i > 0) celda.className = "numero";
    fila.appendChild(celda);
  });
  return fila;
}

function borrarProgreso() {
  if (!confirm("¿Seguro que quieres borrar tus estadísticas y tu lista de fallos?")) return;
  guardar(CLAVE_ESTADISTICAS, {});
  guardar(CLAVE_FALLOS, []);
  mostrarEstadisticas();
}

// ---------- Arranque: conectar los botones ----------

function volverAlInicio() {
  if (cronometro && !confirm("¿Salir del examen? No se guardará nada de este examen.")) return;
  pararCronometro();
  actualizarBotonFallos();
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

  $("boton-empezar").addEventListener("click", function () {
    empezarTest(preguntasDelTema(), "estudio", PREGUNTAS_POR_TEST);
  });
  $("boton-examen").addEventListener("click", function () {
    empezarTest(preguntasDelTema(), "examen", Number($("selector-cantidad").value));
  });
  $("boton-fallos").addEventListener("click", function () {
    empezarTest(preguntasFalladas(), "estudio", PREGUNTAS_POR_TEST);
  });
  $("boton-anterior").addEventListener("click", anterior);
  $("boton-terminar").addEventListener("click", terminarAntes);
  $("boton-estadisticas").addEventListener("click", mostrarEstadisticas);
  $("boton-siguiente").addEventListener("click", siguiente);
  $("boton-borrar").addEventListener("click", borrarProgreso);
  document.querySelectorAll(".boton-volver").forEach(function (b) {
    b.addEventListener("click", volverAlInicio);
  });
}
