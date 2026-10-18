// =====================================================================
//  BANCO DE PREGUNTAS
//  Este es el ÚNICO archivo que tienes que tocar para añadir preguntas.
//
//  Cada pregunta va entre llaves { } y separada de la siguiente por una coma.
//  Copia una pregunta entera, pégala al final (antes del ] ) y cambia el texto.
//
//  Campos:
//    tema:        nombre del tema. Escríbelo siempre igual para que se agrupen.
//    enunciado:   la pregunta.
//    opciones:    las 4 respuestas, en orden A, B, C, D.
//    correcta:    la letra de la respuesta buena: "A", "B", "C" o "D".
//    explicacion: una frase corta que se muestra después de responder.
//
//  Ojo: si un texto lleva comillas dobles dentro, usa comillas simples ' '.
// =====================================================================

const PREGUNTAS = [
  {
    tema: "Constitución Española",
    enunciado: "¿Qué artículo de la Constitución Española reconoce el derecho a la protección de la salud?",
    opciones: ["Artículo 14", "Artículo 27", "Artículo 43", "Artículo 103"],
    correcta: "C",
    explicacion: "El artículo 43 reconoce el derecho a la protección de la salud y encarga a los poderes públicos organizar y tutelar la salud pública."
  },
  {
    tema: "Estatuto de Autonomía de Galicia",
    enunciado: "¿Qué norma aprueba el Estatuto de Autonomía de Galicia?",
    opciones: [
      "Ley Orgánica 1/1981, de 6 de abril",
      "Ley Orgánica 3/1979, de 18 de diciembre",
      "Ley 1/1989, de 2 de enero",
      "Ley Orgánica 6/1981, de 30 de diciembre"
    ],
    correcta: "A",
    explicacion: "El Estatuto de Autonomía de Galicia se aprobó por la Ley Orgánica 1/1981, de 6 de abril."
  },
  {
    tema: "Estatuto Marco",
    enunciado: "¿Qué ley aprueba el Estatuto Marco del personal estatutario de los servicios de salud?",
    opciones: [
      "Ley 14/1986, General de Sanidad",
      "Ley 55/2003, de 16 de diciembre",
      "Ley 31/1995, de 8 de noviembre",
      "Ley 41/2002, de 14 de noviembre"
    ],
    correcta: "B",
    explicacion: "El Estatuto Marco del personal estatutario es la Ley 55/2003, de 16 de diciembre."
  },
  {
    tema: "Prevención de riesgos laborales",
    enunciado: "¿Cuál es la ley de Prevención de Riesgos Laborales?",
    opciones: [
      "Ley 55/2003, de 16 de diciembre",
      "Ley 14/1986, de 25 de abril",
      "Ley 41/2002, de 14 de noviembre",
      "Ley 31/1995, de 8 de noviembre"
    ],
    correcta: "D",
    explicacion: "La Ley de Prevención de Riesgos Laborales es la Ley 31/1995, de 8 de noviembre."
  },
  {
    tema: "Movilización de pacientes",
    enunciado: "En la posición de Trendelenburg, el paciente está:",
    opciones: [
      "Sentado con la espalda a 45 grados",
      "Tumbado boca arriba con la cabeza más baja que los pies",
      "Tumbado boca abajo con la cabeza girada",
      "Tumbado de lado con las piernas flexionadas"
    ],
    correcta: "B",
    explicacion: "Trendelenburg: decúbito supino (boca arriba) con la cama inclinada de forma que la cabeza queda más baja que los pies."
  }
];
