// =====================================================================
//  LÓGICA DE LA APP
//  No hace falta tocar este archivo para añadir preguntas (eso va en preguntas.js).
// =====================================================================

const PREGUNTAS_POR_TEST = 10;
const LETRAS = ["A", "B", "C", "D"];

// Tu progreso se guarda en el navegador (localStorage) con estos nombres.
const CLAVE_FALLOS = "celador_fallos";           // lista de enunciados fallados
const CLAVE_ESTADISTICAS = "celador_estadisticas"; // { tema: { aciertos, total } }

// Estado del test que se está haciendo ahora mismo
let preguntasDelTest = [];
let posicion = 0;
let aciertosDelTest = 0;

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

// Lista de temas sin repetir, en orden alfabético
function listaDeTemas() {
  const temas = PREGUNTAS.map(function (p) { return p.tema; });
  return Array.from(new Set(temas)).sort();
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
  const fallos = leer(CLAVE_FALLOS, []);
  return PREGUNTAS.filter(function (p) { return fallos.includes(p.enunciado); });
}

function actualizarBotonFallos() {
  const cuantos = preguntasFalladas().length;
  $("boton-fallos").textContent = "Test de fallos (" + cuantos + ")";
  $("boton-fallos").disabled = cuantos === 0;
}

// ---------- El test ----------

function empezarTest(preguntas) {
  preguntasDelTest = barajar(preguntas).slice(0, PREGUNTAS_POR_TEST);
  posicion = 0;
  aciertosDelTest = 0;
  mostrarPregunta();
  mostrarPantalla("pantalla-pregunta");
}

function mostrarPregunta() {
  const p = preguntasDelTest[posicion];
  $("contador").textContent = "Pregunta " + (posicion + 1) + " de " + preguntasDelTest.length;
  $("tema-pregunta").textContent = p.tema;
  $("enunciado").textContent = p.enunciado;
  $("feedback").classList.add("oculto");
  $("boton-siguiente").classList.add("oculto");

  const contenedor = $("opciones");
  contenedor.innerHTML = "";
  p.opciones.forEach(function (texto, i) {
    const boton = document.createElement("button");
    boton.className = "opcion";
    boton.textContent = LETRAS[i] + ") " + texto;
    boton.addEventListener("click", function () { responder(LETRAS[i]); });
    contenedor.appendChild(boton);
  });
}

function responder(letraElegida) {
  const p = preguntasDelTest[posicion];
  const acertada = letraElegida === p.correcta;

  // Colorear las opciones y bloquearlas para no responder dos veces
  const botones = $("opciones").querySelectorAll("button");
  botones.forEach(function (boton, i) {
    boton.disabled = true;
    if (LETRAS[i] === p.correcta) boton.classList.add("acierto");
    else if (LETRAS[i] === letraElegida) boton.classList.add("error-opcion");
  });

  // Mostrar si has acertado y la explicación
  const feedback = $("feedback");
  feedback.className = acertada ? "bien" : "mal";
  feedback.innerHTML = "";
  const titulo = document.createElement("strong");
  titulo.textContent = acertada ? "¡Correcto!" : "Incorrecto. La respuesta buena es la " + p.correcta + ".";
  const explicacion = document.createElement("p");
  explicacion.textContent = p.explicacion;
  feedback.append(titulo, explicacion);

  registrarRespuesta(p, acertada);
  if (acertada) aciertosDelTest++;

  const esLaUltima = posicion === preguntasDelTest.length - 1;
  $("boton-siguiente").textContent = esLaUltima ? "Ver resultado" : "Siguiente";
  $("boton-siguiente").classList.remove("oculto");
}

// Apunta el acierto/fallo en las estadísticas y en la lista de fallos
function registrarRespuesta(p, acertada) {
  const estadisticas = leer(CLAVE_ESTADISTICAS, {});
  if (!estadisticas[p.tema]) estadisticas[p.tema] = { aciertos: 0, total: 0 };
  estadisticas[p.tema].total++;
  if (acertada) estadisticas[p.tema].aciertos++;
  guardar(CLAVE_ESTADISTICAS, estadisticas);

  // Si la fallas, entra en la lista de fallos. Si la aciertas, sale de ella.
  let fallos = leer(CLAVE_FALLOS, []);
  fallos = fallos.filter(function (e) { return e !== p.enunciado; });
  if (!acertada) fallos.push(p.enunciado);
  guardar(CLAVE_FALLOS, fallos);
}

function siguiente() {
  posicion++;
  if (posicion < preguntasDelTest.length) {
    mostrarPregunta();
    window.scrollTo(0, 0);
  } else {
    const total = preguntasDelTest.length;
    const porcentaje = Math.round((aciertosDelTest / total) * 100);
    $("texto-resultado").textContent = "Has acertado " + aciertosDelTest + " de " + total + " (" + porcentaje + "%).";
    mostrarPantalla("pantalla-resultado");
  }
}

// ---------- Estadísticas ----------

function mostrarEstadisticas() {
  const estadisticas = leer(CLAVE_ESTADISTICAS, {});
  const temas = Object.keys(estadisticas).sort();
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
    const tema = $("selector-tema").value;
    const elegidas = tema ? PREGUNTAS.filter(function (p) { return p.tema === tema; }) : PREGUNTAS;
    empezarTest(elegidas);
  });
  $("boton-fallos").addEventListener("click", function () { empezarTest(preguntasFalladas()); });
  $("boton-estadisticas").addEventListener("click", mostrarEstadisticas);
  $("boton-siguiente").addEventListener("click", siguiente);
  $("boton-borrar").addEventListener("click", borrarProgreso);
  document.querySelectorAll(".boton-volver").forEach(function (b) {
    b.addEventListener("click", volverAlInicio);
  });
}
