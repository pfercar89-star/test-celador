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
//    origen:      (opcional) de dónde sale la pregunta, p. ej. "Examen 2024 · Común C1".
//
//  Ojo: si un texto lleva comillas dobles dentro, usa comillas simples ' '.
//
//  Las preguntas están agrupadas por tema, en el orden del temario.
//  Las que vienen de exámenes oficiales (Sergas 2024, SAS 2025) llevan "origen"
//  y van al final de su tema. De los exámenes de otras comunidades solo se han
//  copiado las preguntas que valen en toda España.
//  Las que dependen de la convocatoria 2025 (plazas, fechas, formato) llevan
//  origen "Convocatoria 2025 (dato que cambiará)": revísalas con cada convocatoria nueva.
// =====================================================================

const PREGUNTAS = [
  // ===================================================================
  //  CONSTITUCIÓN ESPAÑOLA (95 preguntas)
  // ===================================================================
  {
    tema: "Constitución Española",
    enunciado: "Según el artículo 1.1 de la Constitución, ¿cuál de los siguientes NO es uno de los valores superiores del ordenamiento jurídico?",
    opciones: ["La seguridad jurídica", "La libertad", "La justicia", "El pluralismo político"],
    correcta: "A",
    explicacion: "Los valores superiores son cuatro: libertad, justicia, igualdad y pluralismo político. La seguridad jurídica es un principio que garantiza el art. 9.3, no un valor superior. (Art. 1.1 CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "Según la Constitución, la soberanía nacional reside en:",
    opciones: ["El Rey", "El pueblo español", "Las Cortes Generales", "El Gobierno de la Nación"],
    correcta: "B",
    explicacion: "«La soberanía nacional reside en el pueblo español, del que emanan los poderes del Estado.» (Art. 1.2 CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "La forma política del Estado español es:",
    opciones: ["La Monarquía parlamentaria", "La Monarquía constitucional", "El Estado de las Autonomías", "La Monarquía hereditaria"],
    correcta: "A",
    explicacion: "El art. 1.3 dice literalmente «Monarquía parlamentaria». Las otras opciones son trampas habituales. (Art. 1.3 CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "El artículo 2 de la Constitución reconoce y garantiza el derecho a la autonomía de:",
    opciones: ["Las comunidades autónomas y los municipios", "Las provincias y las islas", "Las nacionalidades y regiones que integran la Nación española", "Los pueblos de España"],
    correcta: "C",
    explicacion: "Reconoce la autonomía de «las nacionalidades y regiones» y la solidaridad entre todas ellas. (Art. 2 CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "Respecto al castellano, la Constitución establece que todos los españoles tienen:",
    opciones: ["El derecho a conocerlo y a usarlo", "El derecho a conocerlo y el deber de usarlo", "El deber de conocerlo y de usarlo", "El deber de conocerlo y el derecho a usarlo"],
    correcta: "D",
    explicacion: "Deber de CONOCERLO y derecho a USARLO. Es una de las preguntas más repetidas: fíjate en qué es deber y qué es derecho. (Art. 3.1 CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "En la bandera de España, la franja amarilla es:",
    opciones: ["De la mitad de anchura que cada una de las rojas", "De doble anchura que cada una de las rojas", "De triple anchura que cada una de las rojas", "De la misma anchura que cada una de las rojas"],
    correcta: "B",
    explicacion: "Tres franjas horizontales, roja, amarilla y roja, «siendo la amarilla de doble anchura que cada una de las rojas». (Art. 4.1 CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "Según el artículo 6, los partidos políticos expresan:",
    opciones: ["El pluralismo político", "Los intereses económicos y sociales", "La voluntad del Estado", "La soberanía nacional"],
    correcta: "A",
    explicacion: "Los partidos expresan el pluralismo político. Los «intereses económicos y sociales» son los que defienden los sindicatos y asociaciones empresariales (art. 7). (Art. 6 CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "Según el artículo 8, las Fuerzas Armadas están constituidas por:",
    opciones: ["El Ejército de Tierra, la Armada y la Guardia Civil", "El Ejército de Tierra, la Armada y el Ejército del Aire", "El Ejército de Tierra y la Armada", "El Ejército de Tierra, el Ejército del Aire y la Policía Nacional"],
    correcta: "B",
    explicacion: "Ejército de Tierra, Armada y Ejército del Aire. La Guardia Civil y la Policía son Fuerzas y Cuerpos de Seguridad (art. 104), no Fuerzas Armadas. (Art. 8.1 CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "¿Cuál de estos principios NO aparece entre los que garantiza el artículo 9.3?",
    opciones: ["La publicidad de las normas", "La gratuidad de la justicia", "La interdicción de la arbitrariedad de los poderes públicos", "La jerarquía normativa"],
    correcta: "B",
    explicacion: "El 9.3 garantiza legalidad, jerarquía normativa, publicidad de las normas, irretroactividad de las disposiciones sancionadoras no favorables, seguridad jurídica, responsabilidad e interdicción de la arbitrariedad. La gratuidad de la justicia está en el art. 119. (Art. 9.3 CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "Según el artículo 10.1, ¿qué es el «fundamento del orden político y de la paz social»?",
    opciones: ["La soberanía nacional y la unidad de España", "La dignidad de la persona, los derechos inviolables que le son inherentes, el libre desarrollo de la personalidad, el respeto a la ley y a los derechos de los demás", "La igualdad de todos los españoles ante la ley", "El Estado social y democrático de Derecho"],
    correcta: "B",
    explicacion: "El art. 10.1 abre el Título I con la dignidad de la persona como fundamento del orden político y la paz social. (Art. 10.1 CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "Según la Constitución, los españoles son mayores de edad a los:",
    opciones: ["Lo que disponga el Código Civil", "21 años", "18 años", "16 años"],
    correcta: "C",
    explicacion: "«Los españoles son mayores de edad a los dieciocho años.» (Art. 12 CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "Según el artículo 11.2, ningún español de origen podrá ser privado de:",
    opciones: ["Su libertad", "Su derecho al voto", "Su nacionalidad", "Su domicilio"],
    correcta: "C",
    explicacion: "«Ningún español de origen podrá ser privado de su nacionalidad.» (Art. 11.2 CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "El artículo 14 establece que los españoles son iguales ante la ley sin que pueda prevalecer discriminación alguna por razón de:",
    opciones: ["Raza, sexo y religión exclusivamente", "Ideología y creencias, únicamente", "Nacimiento y nacionalidad", "Nacimiento, raza, sexo, religión, opinión o cualquier otra condición o circunstancia personal o social"],
    correcta: "D",
    explicacion: "La lista termina con una cláusula abierta: «o cualquier otra condición o circunstancia personal o social». (Art. 14 CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "El derecho a la vida y a la integridad física y moral se recoge en el artículo:",
    opciones: ["14", "15", "16", "17"],
    correcta: "B",
    explicacion: "El art. 15 es el primero de la Sección 1.ª del Capítulo II (derechos fundamentales). Prohíbe además la tortura y las penas o tratos inhumanos o degradantes. (Art. 15 CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "La detención preventiva no podrá durar más del tiempo estrictamente necesario y, en todo caso, el detenido deberá ser puesto en libertad o a disposición judicial en un plazo máximo de:",
    opciones: ["24 horas", "48 horas", "72 horas", "96 horas"],
    correcta: "C",
    explicacion: "Plazo máximo de setenta y dos horas. (Art. 17.2 CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "Según el artículo 18.2, el domicilio es inviolable y no podrá hacerse ninguna entrada o registro en él sin:",
    opciones: ["Presencia de un notario", "Consentimiento del titular o resolución judicial, salvo en caso de flagrante delito", "Autorización del Ministerio Fiscal", "Orden de la autoridad gubernativa"],
    correcta: "B",
    explicacion: "Solo con consentimiento del titular o resolución judicial, salvo flagrante delito. (Art. 18.2 CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "Según el artículo 18.4, la ley limitará el uso de la informática para garantizar:",
    opciones: ["La libertad de expresión", "El secreto de las comunicaciones", "La seguridad del Estado", "El honor y la intimidad personal y familiar de los ciudadanos y el pleno ejercicio de sus derechos"],
    correcta: "D",
    explicacion: "Es la base constitucional de la protección de datos personales, que entra en el tema 7 del programa. (Art. 18.4 CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "Para ejercer el derecho de reunión pacífica y sin armas:",
    opciones: ["No es necesaria autorización previa; en lugares de tránsito público hay que comunicarlo previamente a la autoridad", "No hace falta ningún trámite, ni siquiera en lugares de tránsito público", "Es necesaria autorización judicial", "Es necesaria autorización previa en todo caso"],
    correcta: "A",
    explicacion: "No necesita autorización, pero las reuniones en lugares de tránsito público y las manifestaciones requieren comunicación previa a la autoridad. (Art. 21 CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "Según el artículo 27.4, la enseñanza básica es:",
    opciones: ["Obligatoria y gratuita", "Obligatoria, gratuita y laica", "Gratuita", "Obligatoria"],
    correcta: "A",
    explicacion: "«La enseñanza básica es obligatoria y gratuita.» (Art. 27.4 CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "Los derechos fundamentales y libertades públicas de la Sección 1.ª del Capítulo II del Título I comprenden los artículos:",
    opciones: ["15 a 29", "10 a 55", "15 a 38", "14 a 29"],
    correcta: "A",
    explicacion: "La Sección 1.ª va del 15 al 29. El art. 14 (igualdad) está antes, al inicio del Capítulo II, y la Sección 2.ª va del 30 al 38. (Título I, Cap. II, Secc. 1.ª CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "El recurso de amparo ante el Tribunal Constitucional protege:",
    opciones: ["Los principios rectores de la política social y económica", "Solo los derechos de la Sección 1.ª del Capítulo II", "Todos los derechos del Título I", "El art. 14, los derechos de la Sección 1.ª del Capítulo II y la objeción de conciencia del art. 30"],
    correcta: "D",
    explicacion: "Amparo: art. 14 + arts. 15 a 29 + objeción de conciencia (art. 30). (Art. 53.2 CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "Según el artículo 30.1, los españoles tienen respecto a la defensa de España:",
    opciones: ["El derecho y el deber de defenderla", "El deber de defenderla", "La obligación de hacer el servicio militar", "El derecho de defenderla"],
    correcta: "A",
    explicacion: "«Los españoles tienen el derecho y el deber de defender a España.» (Art. 30.1 CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "El sistema tributario, según el artículo 31.1, se inspirará en los principios de:",
    opciones: ["Igualdad y progresividad, y en ningún caso tendrá alcance confiscatorio", "Capacidad económica y solidaridad", "Igualdad y universalidad", "Proporcionalidad y suficiencia"],
    correcta: "A",
    explicacion: "Sistema tributario justo, inspirado en igualdad y progresividad, que «en ningún caso tendrá alcance confiscatorio». (Art. 31.1 CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "El artículo 35.1 establece que todos los españoles tienen:",
    opciones: ["El derecho a un empleo público", "El derecho al trabajo", "El deber de trabajar y el derecho al trabajo", "El deber de trabajar"],
    correcta: "C",
    explicacion: "Deber de trabajar y derecho al trabajo, a la libre elección de profesión u oficio y a una remuneración suficiente, sin discriminación por razón de sexo. (Art. 35.1 CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "¿En qué artículo de la Constitución se reconoce el derecho a la protección de la salud?",
    opciones: ["Art. 41", "Art. 43", "Art. 45", "Art. 49"],
    correcta: "B",
    explicacion: "Art. 43: protección de la salud. El 41 es la Seguridad Social, el 45 el medio ambiente y el 49 las personas con discapacidad. Es la pregunta estrella del tema. (Art. 43.1 CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "El derecho a la protección de la salud (art. 43) se encuentra en:",
    opciones: ["La Sección 2.ª del Capítulo II del Título I", "El Título VIII", "El Capítulo III del Título I: de los principios rectores de la política social y económica", "La Sección 1.ª del Capítulo II del Título I"],
    correcta: "C",
    explicacion: "Está entre los principios rectores (arts. 39 a 52). Por eso no tiene recurso de amparo. (Título I, Cap. III CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "Según el artículo 43.2, compete a los poderes públicos organizar y tutelar la salud pública a través de:",
    opciones: ["Los colegios profesionales sanitarios", "Medidas preventivas y de las prestaciones y servicios necesarios", "Las mutuas y la sanidad privada", "El Sistema Nacional de Salud exclusivamente"],
    correcta: "B",
    explicacion: "«…a través de medidas preventivas y de las prestaciones y servicios necesarios. La ley establecerá los derechos y deberes de todos al respecto.» (Art. 43.2 CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "Según el artículo 43.3, los poderes públicos fomentarán:",
    opciones: ["La sanidad privada y los seguros médicos", "La educación sanitaria, la educación física y el deporte, y facilitarán la adecuada utilización del ocio", "La medicina preventiva y la vacunación", "La investigación científica y técnica"],
    correcta: "B",
    explicacion: "Educación sanitaria, educación física y deporte, y adecuada utilización del ocio. (Art. 43.3 CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "Los principios reconocidos en el Capítulo III del Título I (como el derecho a la protección de la salud):",
    opciones: ["Solo pueden alegarse ante la jurisdicción ordinaria de acuerdo con las leyes que los desarrollen", "Solo pueden regularse por ley orgánica", "Pueden recurrirse en amparo ante el Tribunal Constitucional", "No vinculan a los poderes públicos"],
    correcta: "A",
    explicacion: "Informan la legislación, la práctica judicial y la actuación de los poderes públicos, pero solo pueden alegarse ante la jurisdicción ordinaria según las leyes que los desarrollen. (Art. 53.3 CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "Tras la reforma de 2024, el artículo 49 de la Constitución se refiere a:",
    opciones: ["Los minusválidos", "Las personas con discapacidad", "Los disminuidos físicos, sensoriales y psíquicos", "Las personas dependientes"],
    correcta: "B",
    explicacion: "La reforma de febrero de 2024 sustituyó el término «disminuidos» por «personas con discapacidad». Ojo con los temarios antiguos. (Art. 49 CE (reforma de 15/02/2024))"
  },
  {
    tema: "Constitución Española",
    enunciado: "Según el artículo 41, los poderes públicos mantendrán un régimen público de Seguridad Social:",
    opciones: ["Para quienes hayan cotizado", "Para todos los ciudadanos", "Para los trabajadores por cuenta ajena", "Para los españoles residentes en España"],
    correcta: "B",
    explicacion: "«…un régimen público de Seguridad Social para todos los ciudadanos, que garantice la asistencia y prestaciones sociales suficientes ante situaciones de necesidad, especialmente en caso de desempleo.» (Art. 41 CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "El Defensor del Pueblo es, según el artículo 54:",
    opciones: ["Un órgano dependiente del Gobierno", "Un alto comisionado de las Cortes Generales", "Un órgano del Poder Judicial", "Un miembro del Tribunal Constitucional"],
    correcta: "B",
    explicacion: "Alto comisionado de las Cortes Generales, designado por estas para la defensa de los derechos del Título I. (Art. 54 CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "La Constitución Española entró en vigor:",
    opciones: ["El 6 de diciembre de 1978, día del referéndum", "El 1 de enero de 1979", "El 29 de diciembre de 1978, día de su publicación en el BOE", "El 27 de diciembre de 1978, día de su sanción por el Rey"],
    correcta: "C",
    explicacion: "Entró en vigor el mismo día de su publicación en el BOE: 29/12/1978. Referéndum el 6/12 y sanción el 27/12. (Disposición final CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "¿Cuántos artículos tiene la Constitución Española?",
    opciones: ["139", "159", "169", "179"],
    correcta: "C",
    explicacion: "169 artículos, repartidos en un Título Preliminar y diez títulos, más disposiciones adicionales, transitorias, derogatoria y final. (Estructura CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "Según el artículo 3.2, las demás lenguas españolas serán también oficiales:",
    opciones: ["Solo en el ámbito educativo", "Cuando lo decidan las Cortes Generales", "En todo el territorio nacional", "En las respectivas comunidades autónomas, de acuerdo con sus Estatutos"],
    correcta: "D",
    explicacion: "Oficiales en sus comunidades según sus Estatutos. En Galicia, el gallego (art. 5 del Estatuto, tema 2). (Art. 3.2 CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "Las banderas propias de las comunidades autónomas, según el artículo 4.2:",
    opciones: ["Solo pueden usarse en actos privados", "Se utilizarán junto a la bandera de España en sus edificios públicos y actos oficiales", "Sustituyen a la bandera de España en sus edificios públicos", "Requieren autorización de las Cortes"],
    correcta: "B",
    explicacion: "Los Estatutos pueden reconocer banderas propias, que se usan junto a la de España. (Art. 4.2 CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "Según el artículo 5, la capital del Estado es:",
    opciones: ["La villa de Madrid", "La ciudad de Madrid", "Madrid y su área metropolitana", "La que determine una ley orgánica"],
    correcta: "A",
    explicacion: "Dice literalmente «la villa de Madrid». (Art. 5 CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "Los sindicatos de trabajadores y las asociaciones empresariales, según el artículo 7:",
    opciones: ["Expresan el pluralismo político", "Dependen del Ministerio de Trabajo", "Contribuyen a la defensa y promoción de los intereses económicos y sociales que les son propios", "Son órganos de participación en la Administración"],
    correcta: "C",
    explicacion: "Su estructura interna y funcionamiento deben ser democráticos, igual que los partidos políticos. (Art. 7 CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "Según el artículo 9.1, están sujetos a la Constitución y al resto del ordenamiento jurídico:",
    opciones: ["Los ciudadanos y los poderes públicos", "Solo los poderes públicos", "Solo los ciudadanos", "Los funcionarios públicos"],
    correcta: "A",
    explicacion: "Ambos: ciudadanos y poderes públicos. (Art. 9.1 CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "Según el artículo 9.2, corresponde a los poderes públicos promover las condiciones para que sean reales y efectivas:",
    opciones: ["La unidad y la solidaridad", "La seguridad y la paz social", "La justicia y el pluralismo", "La libertad y la igualdad del individuo y de los grupos en que se integra"],
    correcta: "D",
    explicacion: "Libertad e igualdad reales y efectivas, removiendo los obstáculos que impidan o dificulten su plenitud. (Art. 9.2 CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "Las normas sobre derechos fundamentales se interpretarán de conformidad con:",
    opciones: ["El Derecho de la Unión Europea exclusivamente", "La Declaración Universal de Derechos Humanos y los tratados y acuerdos internacionales ratificados por España", "La jurisprudencia del Tribunal Supremo", "Las leyes orgánicas que los desarrollen"],
    correcta: "B",
    explicacion: "Interpretación conforme a la Declaración Universal de Derechos Humanos y a los tratados ratificados por España. (Art. 10.2 CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "Los extranjeros, según el artículo 13.2, pueden ser titulares del derecho de sufragio:",
    opciones: ["En ningún caso", "Activo y pasivo en todas las elecciones", "Solo activo en las elecciones autonómicas", "Activo y pasivo en las elecciones municipales, atendiendo a criterios de reciprocidad"],
    correcta: "D",
    explicacion: "Solo los españoles son titulares de los derechos del art. 23, salvo el sufragio activo y pasivo en elecciones municipales según reciprocidad. (Art. 13.2 CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "En materia de extradición, según el artículo 13.3, quedan excluidos:",
    opciones: ["Los delitos cometidos por ciudadanos de la UE", "Los delitos de terrorismo", "Los delitos castigados con pena inferior a un año", "Los delitos políticos, sin que se consideren como tales los actos de terrorismo"],
    correcta: "D",
    explicacion: "Se excluyen los delitos políticos, pero el terrorismo nunca se considera delito político. (Art. 13.3 CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "Según el artículo 16.2, nadie podrá ser obligado a declarar sobre:",
    opciones: ["Sus antecedentes penales", "Su situación económica", "Su ideología, religión o creencias", "Su domicilio"],
    correcta: "C",
    explicacion: "Garantía de la libertad ideológica y religiosa. (Art. 16.2 CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "Según el artículo 16.3:",
    opciones: ["La religión católica es la oficial del Estado", "El Estado es laico y no coopera con ninguna confesión", "Solo se reconocen las confesiones inscritas", "Ninguna confesión tendrá carácter estatal"],
    correcta: "D",
    explicacion: "Ninguna confesión es estatal, aunque los poderes públicos mantendrán relaciones de cooperación con la Iglesia católica y las demás confesiones. (Art. 16.3 CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "Toda persona detenida, según el artículo 17.3, debe ser informada de sus derechos y de las razones de su detención:",
    opciones: ["Por escrito y en presencia de su abogado", "Antes de pasar a disposición judicial", "De forma inmediata y de modo que le sea comprensible", "En un plazo máximo de 24 horas"],
    correcta: "C",
    explicacion: "De forma inmediata y comprensible; no puede ser obligada a declarar y se le garantiza asistencia de abogado. (Art. 17.3 CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "El procedimiento para la inmediata puesta a disposición judicial de toda persona detenida ilegalmente se denomina:",
    opciones: ["Habeas corpus", "Recurso de inconstitucionalidad", "Recurso de amparo", "Habeas data"],
    correcta: "A",
    explicacion: "El habeas corpus está previsto en el art. 17.4 y regulado por ley orgánica. (Art. 17.4 CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "Según el artículo 18.3, se garantiza el secreto de las comunicaciones, en especial postales, telegráficas y telefónicas, salvo:",
    opciones: ["Orden del Ministerio del Interior", "Razones de seguridad nacional apreciadas por el Gobierno", "Consentimiento del Ministerio Fiscal", "Resolución judicial"],
    correcta: "D",
    explicacion: "Solo puede levantarse por resolución judicial. (Art. 18.3 CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "El derecho de los españoles a entrar y salir libremente de España, según el artículo 19:",
    opciones: ["Solo se reconoce a los mayores de edad", "Requiere pasaporte en vigor por mandato constitucional", "No podrá ser limitado por motivos políticos o ideológicos", "Puede limitarse por motivos políticos"],
    correcta: "C",
    explicacion: "Libertad de residencia y circulación; no puede limitarse por motivos políticos o ideológicos. (Art. 19 CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "Según el artículo 20.2, el ejercicio de la libertad de expresión e información:",
    opciones: ["Está sometido al control del Defensor del Pueblo", "Requiere autorización administrativa en los medios públicos", "No puede restringirse mediante ningún tipo de censura previa", "Puede restringirse mediante censura previa en casos graves"],
    correcta: "C",
    explicacion: "Prohibición de cualquier censura previa. (Art. 20.2 CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "El secuestro de publicaciones, grabaciones y otros medios de información solo podrá acordarse:",
    opciones: ["Por el Consejo de Estado", "Por el Ministerio del Interior", "En virtud de resolución judicial", "Por el Gobierno"],
    correcta: "C",
    explicacion: "Solo por resolución judicial. (Art. 20.5 CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "Según el artículo 22, están prohibidas:",
    opciones: ["Las asociaciones no inscritas en un registro", "Las asociaciones sin ánimo de lucro", "Las asociaciones profesionales", "Las asociaciones secretas y las de carácter paramilitar"],
    correcta: "D",
    explicacion: "Prohibidas las secretas y las paramilitares. Las asociaciones solo pueden disolverse o suspenderse por resolución judicial motivada (22.4). (Art. 22.5 CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "Según el artículo 23.2, los ciudadanos tienen derecho a acceder en condiciones de igualdad a las funciones y cargos públicos:",
    opciones: ["Siempre que superen una oposición", "Solo si tienen nacionalidad española de origen", "Sin ningún requisito", "Con los requisitos que señalen las leyes"],
    correcta: "D",
    explicacion: "Es la base constitucional del acceso al empleo público: igualdad, «con los requisitos que señalen las leyes». (Art. 23.2 CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "¿Cuál de los siguientes NO es un derecho recogido en el artículo 24.2?",
    opciones: ["Al juez ordinario predeterminado por la ley", "A la doble instancia penal en todo caso", "A no declarar contra sí mismos", "A la presunción de inocencia"],
    correcta: "B",
    explicacion: "El 24.2 recoge juez ordinario, defensa y asistencia de letrado, no declarar contra sí mismo, no confesarse culpable y presunción de inocencia, entre otros. La doble instancia no está en ese artículo. (Art. 24.2 CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "Según el artículo 25.2, las penas privativas de libertad estarán orientadas hacia:",
    opciones: ["El castigo proporcional del delito", "La protección de la víctima", "La prevención general", "La reeducación y reinserción social"],
    correcta: "D",
    explicacion: "Reeducación y reinserción social; no podrán consistir en trabajos forzados. (Art. 25.2 CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "Según el artículo 25.3, la Administración civil:",
    opciones: ["No podrá imponer sanciones que, directa o subsidiariamente, impliquen privación de libertad", "Solo puede imponer multas con autorización judicial", "No puede imponer ningún tipo de sanción", "Puede imponer arrestos de hasta 72 horas"],
    correcta: "A",
    explicacion: "La Administración civil no puede imponer sanciones que impliquen privación de libertad. (Art. 25.3 CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "Según el artículo 26, se prohíben los Tribunales de Honor:",
    opciones: ["En las Fuerzas Armadas", "En el ámbito de la Administración civil y de las organizaciones profesionales", "En todo el territorio nacional sin excepción", "Solo en los colegios profesionales"],
    correcta: "B",
    explicacion: "Prohibidos en la Administración civil y en las organizaciones profesionales. (Art. 26 CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "Según el artículo 28.1, la ley podrá limitar o exceptuar el derecho de sindicación para:",
    opciones: ["El personal estatutario de los servicios de salud", "Las Fuerzas o Institutos armados o los demás cuerpos sometidos a disciplina militar", "Todos los funcionarios públicos", "Los trabajadores de servicios esenciales"],
    correcta: "B",
    explicacion: "Puede limitarse o exceptuarse para Fuerzas o Institutos armados y cuerpos sometidos a disciplina militar; para funcionarios, la ley regulará sus peculiaridades. (Art. 28.1 CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "El derecho de petición, según el artículo 29, se ejerce:",
    opciones: ["Solo de forma individual", "Verbalmente o por escrito", "De forma individual y colectiva, por escrito", "Solo de forma colectiva"],
    correcta: "C",
    explicacion: "Petición individual y colectiva, por escrito, en la forma y con los efectos que determine la ley. (Art. 29 CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "El artículo 33 reconoce el derecho a:",
    opciones: ["La vivienda digna", "La propiedad privada y a la herencia", "La seguridad social", "La libertad de empresa"],
    correcta: "B",
    explicacion: "Propiedad privada y herencia. La vivienda es el art. 47 y la libertad de empresa el 38. (Art. 33.1 CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "Según el artículo 37.1, la ley garantizará el derecho a la negociación colectiva laboral y:",
    opciones: ["La libre fijación de salarios por el Gobierno", "La obligatoriedad de la afiliación sindical", "El arbitraje obligatorio", "La fuerza vinculante de los convenios"],
    correcta: "D",
    explicacion: "Negociación colectiva y fuerza vinculante de los convenios. (Art. 37.1 CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "¿En qué artículo se establece que los poderes públicos velarán por la seguridad e higiene en el trabajo?",
    opciones: ["Art. 35", "Art. 38", "Art. 40", "Art. 43"],
    correcta: "C",
    explicacion: "El 40.2: seguridad e higiene en el trabajo, descanso necesario, limitación de la jornada y vacaciones periódicas retribuidas. Conecta con la prevención de riesgos laborales (tema 8). (Art. 40.2 CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "Según el artículo 39, los poderes públicos aseguran la protección social, económica y jurídica de:",
    opciones: ["Los emigrantes", "La familia", "Los consumidores", "Los trabajadores"],
    correcta: "B",
    explicacion: "Protección de la familia. El 39.4 añade que los niños gozan de la protección de los acuerdos internacionales que velan por sus derechos. (Art. 39.1 CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "El artículo 45 reconoce el derecho a disfrutar de un medio ambiente adecuado para el desarrollo de la persona, así como:",
    opciones: ["El derecho a una indemnización por daños ambientales", "El derecho a explotar los recursos naturales", "El deber de conservarlo", "La obligación del Estado de restaurarlo"],
    correcta: "C",
    explicacion: "Derecho a disfrutarlo y deber de conservarlo. (Art. 45.1 CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "El derecho a disfrutar de una vivienda digna y adecuada se recoge en el artículo:",
    opciones: ["43", "45", "47", "50"],
    correcta: "C",
    explicacion: "Art. 47: vivienda. Está entre los principios rectores. (Art. 47 CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "Según el artículo 50, la suficiencia económica de los ciudadanos durante la tercera edad se garantiza mediante:",
    opciones: ["La asistencia sanitaria gratuita", "Pensiones adecuadas y periódicamente actualizadas", "Las ayudas de las comunidades autónomas", "Los planes de pensiones privados"],
    correcta: "B",
    explicacion: "Pensiones adecuadas y periódicamente actualizadas, además de un sistema de servicios sociales. (Art. 50 CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "Según el artículo 51, los poderes públicos garantizarán la defensa de los consumidores y usuarios protegiendo:",
    opciones: ["Su derecho a reclamar ante los tribunales", "La libre competencia", "La seguridad, la salud y los legítimos intereses económicos de los mismos", "Solo sus intereses económicos"],
    correcta: "C",
    explicacion: "Seguridad, salud y legítimos intereses económicos, mediante procedimientos eficaces. (Art. 51.1 CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "Según el artículo 53.1, el ejercicio de los derechos y libertades del Capítulo II solo podrá regularse:",
    opciones: ["Por ley, que en todo caso deberá respetar su contenido esencial", "Por real decreto", "Por las comunidades autónomas", "Por orden ministerial"],
    correcta: "A",
    explicacion: "Reserva de ley y respeto al contenido esencial. Vinculan a todos los poderes públicos. (Art. 53.1 CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "¿Cuál de los siguientes derechos NO puede suspenderse en los estados de excepción o de sitio?",
    opciones: ["El derecho a la huelga", "El derecho a la vida", "La libertad de circulación", "La inviolabilidad del domicilio"],
    correcta: "B",
    explicacion: "El 55.1 permite suspender, entre otros, los arts. 17, 18.2 y 3, 19, 20, 21, 28.2 y 37.2. El derecho a la vida (art. 15) nunca. (Art. 55.1 CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "¿Qué ley desarrolla el derecho a la protección de la salud del artículo 43 y crea el Sistema Nacional de Salud?",
    opciones: ["Ley 55/2003, del Estatuto Marco", "Ley 8/2008, de Salud de Galicia", "Ley 41/2002, de autonomía del paciente", "Ley 14/1986, General de Sanidad"],
    correcta: "D",
    explicacion: "La Ley General de Sanidad de 1986 desarrolla el art. 43. Es el tema 3 del programa. (Art. 43 CE y Ley 14/1986)"
  },
  {
    tema: "Constitución Española",
    enunciado: "El desarrollo de los derechos fundamentales y de las libertades públicas debe hacerse mediante:",
    opciones: ["Decreto legislativo", "Ley ordinaria", "Decreto-ley", "Ley orgánica"],
    correcta: "D",
    explicacion: "Son leyes orgánicas las relativas al desarrollo de los derechos fundamentales y libertades públicas. (Art. 81.1 CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "El Título I de la Constitución se denomina:",
    opciones: ["De los derechos y libertades", "De los principios fundamentales", "De las garantías constitucionales", "De los derechos y deberes fundamentales"],
    correcta: "D",
    explicacion: "«De los derechos y deberes fundamentales» (arts. 10 a 55). (Título I CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "El artículo 18.1 de la Constitución garantiza el derecho:",
    opciones: ["A la vivienda", "A la propiedad privada", "A la educación", "Al honor, a la intimidad personal y familiar y a la propia imagen"],
    correcta: "D",
    explicacion: "Muy relacionado con la confidencialidad en los centros sanitarios. (Art. 18.1 CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "Según el artículo 20.1, se reconoce y protege el derecho a comunicar o recibir libremente información:",
    opciones: ["Veraz por cualquier medio de difusión", "Solo con autorización previa", "De cualquier tipo, aunque sea falsa", "Solo a través de medios públicos"],
    correcta: "A",
    explicacion: "Información veraz; la ley regula la cláusula de conciencia y el secreto profesional. (Art. 20.1.d CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "Según el artículo 20.4, las libertades de expresión e información tienen su límite, especialmente, en:",
    opciones: ["Ninguno", "El derecho al honor, a la intimidad, a la propia imagen y a la protección de la juventud y de la infancia", "El interés de las empresas", "La opinión del Gobierno"],
    correcta: "B",
    explicacion: "Límites de las libertades del art. 20. (Art. 20.4 CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "La libertad de cátedra se reconoce en el artículo:",
    opciones: ["27", "16", "20", "35"],
    correcta: "C",
    explicacion: "Junto a las libertades de expresión, creación e información. (Art. 20.1.c CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "Según el artículo 22.3, las asociaciones deberán inscribirse en un registro:",
    opciones: ["Para poder existir legalmente", "A los solos efectos de publicidad", "Para recibir subvenciones obligatoriamente", "No es necesario inscribirse"],
    correcta: "B",
    explicacion: "La inscripción no es constitutiva. (Art. 22.3 CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "Según el artículo 24.1, todas las personas tienen derecho a obtener la tutela efectiva de jueces y tribunales:",
    opciones: ["Solo en materia penal", "Solo si tienen abogado propio", "Sin que, en ningún caso, pueda producirse indefensión", "Pagando las tasas"],
    correcta: "C",
    explicacion: "Tutela judicial efectiva. (Art. 24.1 CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "El principio de legalidad penal del artículo 25.1 significa que nadie puede ser condenado o sancionado por acciones u omisiones que:",
    opciones: ["Hayan sido denunciadas", "No hayan sido juzgadas", "Sean graves", "En el momento de producirse no constituyan delito, falta o infracción administrativa según la legislación vigente"],
    correcta: "D",
    explicacion: "Irretroactividad de las normas sancionadoras. (Art. 25.1 CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "Según el artículo 27.3, los poderes públicos garantizan el derecho de los padres a que sus hijos reciban:",
    opciones: ["Una educación privada gratuita", "La formación religiosa y moral que esté de acuerdo con sus propias convicciones", "Clases particulares", "Formación militar"],
    correcta: "B",
    explicacion: "Derecho de los padres. (Art. 27.3 CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "El derecho a la huelga de los trabajadores para la defensa de sus intereses se reconoce en el artículo:",
    opciones: ["35", "37", "40", "28.2"],
    correcta: "D",
    explicacion: "Con garantías para el mantenimiento de los servicios esenciales. (Art. 28.2 CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "La objeción de conciencia al servicio militar se mencionaba en el artículo:",
    opciones: ["20.1", "24.2", "16.1", "30.2"],
    correcta: "D",
    explicacion: "Hoy el servicio militar obligatorio está suspendido. (Art. 30.2 CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "Según el artículo 31.3, solo podrán establecerse prestaciones personales o patrimoniales de carácter público:",
    opciones: ["Por orden ministerial sin ley", "Con arreglo a la ley", "Por acuerdo privado", "Por decreto del alcalde"],
    correcta: "B",
    explicacion: "Reserva de ley. (Art. 31.3 CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "Según el artículo 32.1, el hombre y la mujer tienen derecho a contraer matrimonio:",
    opciones: ["Con plena igualdad jurídica", "A partir de los 21 años", "Solo con autorización paterna", "Solo por la Iglesia"],
    correcta: "A",
    explicacion: "Igualdad en el matrimonio. (Art. 32.1 CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "El derecho de fundación para fines de interés general se reconoce en el artículo:",
    opciones: ["33", "22", "34", "36"],
    correcta: "C",
    explicacion: "Fundaciones. (Art. 34 CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "Según el artículo 36, la ley regulará el régimen jurídico de:",
    opciones: ["Los colegios profesionales y el ejercicio de las profesiones tituladas", "Los sindicatos", "Las asociaciones juveniles", "Los partidos políticos"],
    correcta: "A",
    explicacion: "Su estructura y funcionamiento deben ser democráticos. (Art. 36 CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "La libertad de empresa en el marco de la economía de mercado se reconoce en el artículo:",
    opciones: ["33", "40", "35", "38"],
    correcta: "D",
    explicacion: "Libertad de empresa. (Art. 38 CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "Según el artículo 39.2, los poderes públicos aseguran la protección integral de los hijos:",
    opciones: ["Solo de los menores de 6 años", "Iguales estos ante la ley con independencia de su filiación, y de las madres, cualquiera que sea su estado civil", "Solo de los nacidos dentro del matrimonio", "Solo de los hijos de españoles"],
    correcta: "B",
    explicacion: "No discriminación por filiación. (Art. 39.2 CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "Según el artículo 42, el Estado velará especialmente por la salvaguardia de los derechos económicos y sociales de:",
    opciones: ["Los jubilados", "Los extranjeros en España", "Los empresarios", "Los trabajadores españoles en el extranjero"],
    correcta: "D",
    explicacion: "Emigrantes españoles; orientará su política hacia su retorno. (Art. 42 CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "El acceso a la cultura, al que todos tienen derecho, se recoge en el artículo:",
    opciones: ["46", "48", "27", "44"],
    correcta: "D",
    explicacion: "Los poderes públicos promoverán la ciencia y la investigación. (Art. 44 CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "Según el artículo 48, los poderes públicos promoverán las condiciones para la participación libre y eficaz en el desarrollo político, social, económico y cultural de:",
    opciones: ["Los funcionarios", "Las personas mayores", "La juventud", "Los extranjeros"],
    correcta: "C",
    explicacion: "Participación de la juventud. (Art. 48 CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "Según el artículo 52, la ley regulará las organizaciones profesionales que contribuyan a la defensa de los intereses económicos que les sean propios, y su estructura y funcionamiento deberán ser:",
    opciones: ["Secretos", "Jerárquicos", "Públicos estatales", "Democráticos"],
    correcta: "D",
    explicacion: "Organizaciones profesionales. (Art. 52 CE)"
  },
  {
    tema: "Constitución Española",
    enunciado: "La conservación y el enriquecimiento del patrimonio histórico, cultural y artístico de los pueblos de España se garantiza en el artículo:",
    opciones: ["44", "47", "46", "45"],
    correcta: "C",
    explicacion: "Patrimonio histórico. (Art. 46 CE)"
  },
  {
    tema: "Constitución Española",
    origen: "Examen SAS 2025 · P1",
    enunciado: "La Jefatura del Estado viene recogida en la Constitución Española en:",
    opciones: ["El Título V.", "El Título VI.", "El Título VII.", "El Título II."],
    correcta: "D",
    explicacion: "El Título II de la Constitución (arts. 56 a 65) se llama «De la Corona»: ahí está el Rey como Jefe del Estado."
  },
  {
    tema: "Constitución Española",
    origen: "Examen SAS 2025 aplazado · P1",
    enunciado: "¿En qué artículo de la Constitución se reconoce el derecho a la protección de la salud?",
    opciones: ["Art. 51.", "Art. 14.", "Art. 43.", "Art. 50."],
    correcta: "C",
    explicacion: "Art. 43 de la Constitución: se reconoce el derecho a la protección de la salud."
  },
  // ===================================================================
  //  ESTATUTO DE AUTONOMÍA DE GALICIA (68 preguntas)
  // ===================================================================
  {
    tema: "Estatuto de Autonomía de Galicia",
    enunciado: "El Estatuto de Autonomía de Galicia se aprobó por:",
    opciones: ["La Ley Orgánica 3/1979", "La Ley 1/1983", "La Ley Orgánica 1/1981, de 6 de abril", "El Real Decreto 1/1981"],
    correcta: "C",
    explicacion: "LO 1/1981, de 6 de abril. (Estatuto de Autonomía de Galicia)"
  },
  {
    tema: "Estatuto de Autonomía de Galicia",
    enunciado: "El Estatuto de Autonomía de Galicia fue aprobado en referéndum por el pueblo gallego el:",
    opciones: ["6 de diciembre de 1978", "21 de diciembre de 1980", "25 de julio de 1981", "6 de abril de 1981"],
    correcta: "B",
    explicacion: "Referéndum del 21 de diciembre de 1980. (Estatuto de Autonomía de Galicia)"
  },
  {
    tema: "Estatuto de Autonomía de Galicia",
    enunciado: "Según su artículo 1, Galicia se constituye en Comunidad Autónoma como:",
    opciones: ["Región administrativa del Estado", "Nacionalidad histórica, para acceder a su autogobierno", "Comunidad foral", "Provincia autónoma"],
    correcta: "B",
    explicacion: "«Galicia, nacionalidad histórica, se constituye en Comunidad Autónoma para acceder a su autogobierno». (EAG, art. 1)"
  },
  {
    tema: "Estatuto de Autonomía de Galicia",
    enunciado: "El territorio de Galicia, según el Estatuto, comprende:",
    opciones: ["Los municipios con lengua gallega", "Las cuatro ciudades principales", "Las provincias de A Coruña, Lugo, Ourense y Pontevedra", "Las comarcas gallegas"],
    correcta: "C",
    explicacion: "Las cuatro provincias. (EAG, art. 2)"
  },
  {
    tema: "Estatuto de Autonomía de Galicia",
    enunciado: "Según el Estatuto, la ley podrá reconocer personalidad jurídica a una entidad territorial típica de Galicia, que es:",
    opciones: ["El concejo abierto", "La parroquia rural", "El distrito", "La merindad"],
    correcta: "B",
    explicacion: "Además de la comarca, el Estatuto menciona la parroquia rural. (Estatuto de Autonomía de Galicia)"
  },
  {
    tema: "Estatuto de Autonomía de Galicia",
    enunciado: "Gozan de la condición política de gallegos:",
    opciones: ["Los descendientes de gallegos en el extranjero", "Todos los nacidos en Galicia, residan donde residan", "Los extranjeros residentes en Galicia", "Los españoles que tengan vecindad administrativa en cualquiera de los municipios de Galicia"],
    correcta: "D",
    explicacion: "La clave es la vecindad administrativa. (EAG, art. 3)"
  },
  {
    tema: "Estatuto de Autonomía de Galicia",
    enunciado: "Según el artículo 5 del Estatuto, la lengua propia de Galicia es:",
    opciones: ["El gallego-portugués", "El castellano", "El gallego y el castellano", "El gallego"],
    correcta: "D",
    explicacion: "Lengua propia: el gallego. Oficiales: gallego y castellano. (EAG, art. 5.1)"
  },
  {
    tema: "Estatuto de Autonomía de Galicia",
    enunciado: "Según el artículo 5.2 del Estatuto, respecto al gallego y al castellano, todos tienen:",
    opciones: ["El derecho a usarlos, pero solo el deber de conocer el castellano", "El derecho de conocerlos y usarlos", "El deber de conocerlos y usarlos", "El deber de conocerlos y el derecho a usarlos"],
    correcta: "B",
    explicacion: "El Estatuto habla del derecho de conocerlos y usarlos. Ojo: el deber de conocer es solo del castellano (art. 3 CE). (EAG, art. 5.2)"
  },
  {
    tema: "Estatuto de Autonomía de Galicia",
    enunciado: "La bandera de Galicia, según el Estatuto, es:",
    opciones: ["Blanca con una cruz azul", "Azul con una banda diagonal blanca", "Blanca con el escudo en el centro sin banda", "Blanca con una banda diagonal azul desde el ángulo superior izquierdo al inferior derecho"],
    correcta: "D",
    explicacion: "Banda azul de arriba a la izquierda hacia abajo a la derecha. (EAG, art. 6)"
  },
  {
    tema: "Estatuto de Autonomía de Galicia",
    enunciado: "El Estatuto reconoce a las comunidades gallegas asentadas fuera de Galicia:",
    opciones: ["El derecho de voto en todas las elecciones municipales gallegas", "Su derecho a colaborar y compartir la vida social y cultural del pueblo gallego (la galleguidad)", "La condición política de gallegos en todo caso", "Ningún derecho"],
    correcta: "B",
    explicacion: "Reconocimiento de la galleguidad. (Estatuto de Autonomía de Galicia)"
  },
  {
    tema: "Estatuto de Autonomía de Galicia",
    enunciado: "Los poderes de la Comunidad Autónoma de Galicia se ejercen a través de:",
    opciones: ["El Parlamento y los ayuntamientos", "La Xunta y las diputaciones", "El Parlamento, la Xunta y su Presidente", "El Presidente y el Tribunal Superior de Justicia"],
    correcta: "C",
    explicacion: "Instituciones de autogobierno. (EAG, art. 9)"
  },
  {
    tema: "Estatuto de Autonomía de Galicia",
    enunciado: "La sede de las instituciones autonómicas de Galicia está en:",
    opciones: ["Vigo", "A Coruña", "Lugo", "Santiago de Compostela"],
    correcta: "D",
    explicacion: "Santiago es la sede del Parlamento, la Xunta y la Presidencia. (Estatuto de Autonomía de Galicia)"
  },
  {
    tema: "Estatuto de Autonomía de Galicia",
    enunciado: "El Tribunal Superior de Justicia de Galicia tiene su sede en:",
    opciones: ["A Coruña", "Ourense", "Santiago de Compostela", "Pontevedra"],
    correcta: "A",
    explicacion: "Culmina la organización judicial en Galicia. (EAG; Ley Orgánica del Poder Judicial)"
  },
  {
    tema: "Estatuto de Autonomía de Galicia",
    enunciado: "El Parlamento de Galicia ejerce:",
    opciones: ["La potestad reglamentaria en exclusiva", "La potestad legislativa, aprueba los presupuestos e impulsa y controla la acción de la Xunta", "La dirección de la Administración de justicia", "La función jurisdiccional"],
    correcta: "B",
    explicacion: "Funciones del Parlamento. (Estatuto de Autonomía de Galicia)"
  },
  {
    tema: "Estatuto de Autonomía de Galicia",
    enunciado: "Los diputados del Parlamento de Galicia se eligen por:",
    opciones: ["Designación de las diputaciones", "Sufragio universal, igual, libre, directo y secreto", "Sufragio indirecto a través de los ayuntamientos", "Sufragio censitario"],
    correcta: "B",
    explicacion: "Con un sistema de representación proporcional. (EAG, art. 11)"
  },
  {
    tema: "Estatuto de Autonomía de Galicia",
    enunciado: "La circunscripción electoral para las elecciones al Parlamento de Galicia es:",
    opciones: ["La comarca", "La provincia", "El municipio", "Galicia entera"],
    correcta: "B",
    explicacion: "Cuatro circunscripciones. (EAG, art. 11)"
  },
  {
    tema: "Estatuto de Autonomía de Galicia",
    enunciado: "Según el Estatuto, el número de diputados del Parlamento de Galicia estará entre:",
    opciones: ["50 y 75", "60 y 80", "75 y 100", "40 y 60"],
    correcta: "B",
    explicacion: "Actualmente son 75. (EAG, art. 11.2)"
  },
  {
    tema: "Estatuto de Autonomía de Galicia",
    enunciado: "El número actual de diputados del Parlamento de Galicia es:",
    opciones: ["75", "60", "71", "80"],
    correcta: "A",
    explicacion: "A Coruña 25, Pontevedra 22, Lugo 14 y Ourense 14. (Ley 8/1985, de elecciones al Parlamento de Galicia)"
  },
  {
    tema: "Estatuto de Autonomía de Galicia",
    enunciado: "La duración del mandato de los diputados del Parlamento de Galicia es de:",
    opciones: ["5 años", "3 años", "4 años", "6 años"],
    correcta: "C",
    explicacion: "Cuatro años. (EAG, art. 11)"
  },
  {
    tema: "Estatuto de Autonomía de Galicia",
    enunciado: "Los diputados del Parlamento de Galicia son inviolables:",
    opciones: ["En cualquier circunstancia", "Solo dentro del Parlamento por cualquier acto", "Por los votos y opiniones que emitan en el ejercicio de su cargo", "Durante 4 años después de su mandato"],
    correcta: "C",
    explicacion: "Inviolabilidad por opiniones y votos. (EAG, art. 11.3)"
  },
  {
    tema: "Estatuto de Autonomía de Galicia",
    enunciado: "Durante su mandato, los diputados del Parlamento de Galicia no pueden ser detenidos ni retenidos salvo:",
    opciones: ["Por orden del Presidente de la Xunta", "Por orden del alcalde", "Nunca", "En caso de flagrante delito"],
    correcta: "D",
    explicacion: "Su enjuiciamiento corresponde al TSJ de Galicia (o al Supremo si es fuera de Galicia). (EAG, art. 11.3)"
  },
  {
    tema: "Estatuto de Autonomía de Galicia",
    enunciado: "El Valedor do Pobo es:",
    opciones: ["Un órgano judicial", "El alto comisionado del Parlamento de Galicia para la defensa de los derechos de los ciudadanos ante la Administración", "Un consejero de la Xunta", "El Defensor del Pueblo estatal en Galicia"],
    correcta: "B",
    explicacion: "Equivalente autonómico del Defensor del Pueblo. (EAG, art. 14; Ley 6/1984)"
  },
  {
    tema: "Estatuto de Autonomía de Galicia",
    enunciado: "El Presidente de la Xunta de Galicia es elegido:",
    opciones: ["Por el Parlamento de Galicia de entre sus miembros, y nombrado por el Rey", "Directamente por los ciudadanos", "Por los presidentes de las diputaciones", "Por el Gobierno de España"],
    correcta: "A",
    explicacion: "Elegido por el Parlamento y nombrado por el Rey. (EAG, art. 15)"
  },
  {
    tema: "Estatuto de Autonomía de Galicia",
    enunciado: "Si en Galicia, transcurridos dos meses desde la primera votación de investidura, ningún candidato ha obtenido la mayoría necesaria:",
    opciones: ["Queda designado Presidente el candidato del partido con mayor número de escaños", "Sigue en funciones el Presidente anterior indefinidamente", "Se convocan nuevas elecciones automáticamente", "Elige el Presidente el Rey"],
    correcta: "A",
    explicacion: "Es una peculiaridad del Estatuto gallego. (EAG, art. 15.3)"
  },
  {
    tema: "Estatuto de Autonomía de Galicia",
    enunciado: "El Presidente de la Xunta ostenta:",
    opciones: ["La más alta representación de la Comunidad Autónoma y la ordinaria del Estado en Galicia", "La representación de los ayuntamientos", "Solo la presidencia del Parlamento", "La jefatura del Poder Judicial en Galicia"],
    correcta: "A",
    explicacion: "Además dirige y coordina la acción de la Xunta. (EAG, art. 15.2)"
  },
  {
    tema: "Estatuto de Autonomía de Galicia",
    enunciado: "El Presidente de la Xunta es responsable políticamente ante:",
    opciones: ["El Gobierno de España", "El Tribunal Superior de Justicia", "El Rey", "El Parlamento de Galicia"],
    correcta: "D",
    explicacion: "Responsabilidad política ante el Parlamento. (Estatuto de Autonomía de Galicia)"
  },
  {
    tema: "Estatuto de Autonomía de Galicia",
    enunciado: "La Xunta de Galicia es:",
    opciones: ["El Parlamento de Galicia", "Un tribunal", "El órgano colegiado de gobierno de Galicia", "Un ayuntamiento"],
    correcta: "C",
    explicacion: "Integrada por el Presidente, en su caso vicepresidentes, y los conselleiros. (Estatuto de Autonomía de Galicia)"
  },
  {
    tema: "Estatuto de Autonomía de Galicia",
    enunciado: "La Xunta de Galicia ejerce:",
    opciones: ["La función jurisdiccional", "La función ejecutiva y la potestad reglamentaria", "La reforma del Estatuto en exclusiva", "La potestad legislativa"],
    correcta: "B",
    explicacion: "Gobierno y administración. (Estatuto de Autonomía de Galicia)"
  },
  {
    tema: "Estatuto de Autonomía de Galicia",
    enunciado: "La Xunta responde políticamente ante el Parlamento:",
    opciones: ["Ante el Gobierno de España", "De forma solidaria, sin perjuicio de la responsabilidad directa de cada conselleiro", "Solo a través del Presidente, nunca los conselleiros", "No responde ante el Parlamento"],
    correcta: "B",
    explicacion: "Responsabilidad solidaria. (Estatuto de Autonomía de Galicia)"
  },
  {
    tema: "Estatuto de Autonomía de Galicia",
    enunciado: "La moción de censura en el Parlamento de Galicia:",
    opciones: ["Debe incluir un candidato alternativo a la Presidencia (constructiva)", "No existe", "La presenta el Gobierno central", "Puede presentarse sin candidato"],
    correcta: "A",
    explicacion: "Modelo de moción de censura constructiva. (EAG; Ley 1/1983)"
  },
  {
    tema: "Estatuto de Autonomía de Galicia",
    enunciado: "Los miembros de la Xunta de Galicia (salvo el Presidente) se denominan:",
    opciones: ["Diputados", "Ministros", "Conselleiros", "Consejeros delegados"],
    correcta: "C",
    explicacion: "Cada uno dirige una consellería. (EAG; Ley 1/1983)"
  },
  {
    tema: "Estatuto de Autonomía de Galicia",
    enunciado: "La ley gallega que regula la Xunta y su Presidencia es:",
    opciones: ["La Ley 16/2010", "La Ley 8/2008", "La Ley 1/1983, de 22 de febrero", "La Ley 2/2015"],
    correcta: "C",
    explicacion: "Normas reguladoras de la Xunta y de su Presidencia. (Ley 1/1983)"
  },
  {
    tema: "Estatuto de Autonomía de Galicia",
    enunciado: "En materia de sanidad, el Estatuto atribuye a Galicia:",
    opciones: ["Solo la ejecución de la legislación sobre productos farmacéuticos", "Ninguna competencia", "La competencia exclusiva en sanidad exterior", "El desarrollo legislativo y la ejecución de la legislación básica del Estado en materia de sanidad interior"],
    correcta: "D",
    explicacion: "La sanidad exterior es competencia exclusiva del Estado. (EAG, art. 33.1)"
  },
  {
    tema: "Estatuto de Autonomía de Galicia",
    enunciado: "La competencia sobre sanidad exterior corresponde:",
    opciones: ["A los ayuntamientos", "A las diputaciones", "Al Estado en exclusiva", "A Galicia"],
    correcta: "C",
    explicacion: "Sanidad exterior, bases y coordinación general de la sanidad: Estado. (CE art. 149.1.16.ª)"
  },
  {
    tema: "Estatuto de Autonomía de Galicia",
    enunciado: "La organización de las instituciones de autogobierno es, según el Estatuto, una competencia:",
    opciones: ["Exclusiva de Galicia", "De los ayuntamientos", "Compartida con el Estado", "Exclusiva del Estado"],
    correcta: "A",
    explicacion: "Competencia exclusiva. (Estatuto de Autonomía de Galicia)"
  },
  {
    tema: "Estatuto de Autonomía de Galicia",
    enunciado: "El Título III del Estatuto de Autonomía de Galicia trata de:",
    opciones: ["La economía y la hacienda", "La Administración pública gallega", "El Parlamento", "La reforma del Estatuto"],
    correcta: "B",
    explicacion: "Título I: poder gallego; II: competencias; III: Administración pública; IV: economía y hacienda; V: reforma. (Estructura del EAG)"
  },
  {
    tema: "Estatuto de Autonomía de Galicia",
    enunciado: "El Título I del Estatuto de Autonomía de Galicia se denomina:",
    opciones: ["De la reforma del Estatuto", "Del poder gallego", "De las competencias de Galicia", "De la economía y hacienda"],
    correcta: "B",
    explicacion: "Incluye Parlamento, Xunta, Presidente y Administración de justicia. (Estructura del EAG)"
  },
  {
    tema: "Estatuto de Autonomía de Galicia",
    enunciado: "La reforma del Estatuto de Autonomía de Galicia requiere, entre otros requisitos:",
    opciones: ["Solo la aprobación del Parlamento de Galicia por mayoría simple", "Solo un decreto de la Xunta", "Solo una ley ordinaria de las Cortes", "Aprobación por el Parlamento de Galicia por mayoría de dos tercios, aprobación por las Cortes mediante ley orgánica y referéndum"],
    correcta: "D",
    explicacion: "Procedimiento reforzado. (Estatuto de Autonomía de Galicia)"
  },
  {
    tema: "Estatuto de Autonomía de Galicia",
    enunciado: "Pueden tomar la iniciativa de reforma del Estatuto de Galicia:",
    opciones: ["Los ciudadanos con 1.000 firmas", "La Xunta, el Parlamento a propuesta de una quinta parte de sus diputados, y las Cortes Generales", "Los ayuntamientos", "Solo el Presidente de la Xunta"],
    correcta: "B",
    explicacion: "Iniciativa de reforma. (Estatuto de Autonomía de Galicia)"
  },
  {
    tema: "Estatuto de Autonomía de Galicia",
    enunciado: "El Día Nacional de Galicia se celebra el:",
    opciones: ["25 de julio", "17 de mayo", "21 de diciembre", "6 de abril"],
    correcta: "A",
    explicacion: "El 17 de mayo es el Día das Letras Galegas. (Galicia)"
  },
  {
    tema: "Estatuto de Autonomía de Galicia",
    enunciado: "El Día das Letras Galegas se celebra el:",
    opciones: ["8 de marzo", "25 de julio", "17 de mayo", "12 de octubre"],
    correcta: "C",
    explicacion: "Lo instituyó la Real Academia Galega en 1963. (Galicia)"
  },
  {
    tema: "Estatuto de Autonomía de Galicia",
    enunciado: "El órgano que realiza el control externo de las cuentas del sector público gallego es:",
    opciones: ["El Consello de Contas de Galicia", "El Valedor do Pobo", "El Consello Consultivo", "El Tribunal Superior de Justicia"],
    correcta: "A",
    explicacion: "Depende del Parlamento de Galicia. (EAG; Ley 6/1985)"
  },
  {
    tema: "Estatuto de Autonomía de Galicia",
    enunciado: "El Consello Consultivo de Galicia es:",
    opciones: ["El órgano de control de cuentas", "El órgano superior consultivo de la Comunidad Autónoma", "El defensor de los ciudadanos", "El órgano de gobierno"],
    correcta: "B",
    explicacion: "Emite dictámenes sobre la legalidad de disposiciones y actuaciones. (Ley 3/2014)"
  },
  {
    tema: "Estatuto de Autonomía de Galicia",
    enunciado: "El Consello da Cultura Galega tiene como finalidad:",
    opciones: ["Elegir al Presidente", "Controlar las cuentas públicas", "Defender y promover los valores culturales del pueblo gallego", "Juzgar a los diputados"],
    correcta: "C",
    explicacion: "Institución cultural prevista en el Estatuto. (EAG, art. 32)"
  },
  {
    tema: "Estatuto de Autonomía de Galicia",
    enunciado: "La institución que tiene como fin principal el estudio de la cultura gallega y especialmente el idioma gallego, y es la autoridad en cuestiones normativas de la lengua, es:",
    opciones: ["La Xunta", "La Real Academia Galega", "El Valedor do Pobo", "El Consello Consultivo"],
    correcta: "B",
    explicacion: "Establece la norma del gallego. (Real Academia Galega)"
  },
  {
    tema: "Estatuto de Autonomía de Galicia",
    enunciado: "La Administración pública gallega, según el Estatuto, se rige en su organización por:",
    opciones: ["Las normas que dicte la Comunidad Autónoma, respetando la legislación básica del Estado", "Las normas de las diputaciones", "Las normas de cada ayuntamiento", "Exclusivamente las leyes estatales"],
    correcta: "A",
    explicacion: "Galicia crea y estructura su propia Administración. (Estatuto de Autonomía de Galicia)"
  },
  {
    tema: "Estatuto de Autonomía de Galicia",
    enunciado: "La ley gallega de organización y funcionamiento de la Administración general y del sector público autonómico es:",
    opciones: ["La Ley 1/1983", "La Ley 7/2008", "La Ley 2/2015", "La Ley 16/2010"],
    correcta: "D",
    explicacion: "Regula consellerías, órganos y entidades del sector público. (Ley 16/2010)"
  },
  {
    tema: "Estatuto de Autonomía de Galicia",
    enunciado: "La ley del empleo público de Galicia es:",
    opciones: ["La Ley 2/2015, de 29 de abril", "La Ley 55/2003", "La Ley 16/2010", "El Real Decreto Legislativo 5/2015"],
    correcta: "A",
    explicacion: "Regula el personal funcionario y laboral de la Administración gallega. El personal estatutario del Sergas se rige por el Estatuto Marco. (Ley 2/2015)"
  },
  {
    tema: "Estatuto de Autonomía de Galicia",
    enunciado: "La Administración autonómica gallega se estructura principalmente en:",
    opciones: ["Diputaciones", "Ministerios", "Delegaciones del Gobierno", "Consellerías"],
    correcta: "D",
    explicacion: "Cada consellería dirige un sector de la actividad. (Ley 16/2010)"
  },
  {
    tema: "Estatuto de Autonomía de Galicia",
    enunciado: "El Servizo Galego de Saúde está adscrito a:",
    opciones: ["El Parlamento de Galicia", "El Ministerio de Sanidad", "La Presidencia de la Xunta directamente", "La consellería competente en materia de sanidad"],
    correcta: "D",
    explicacion: "Es un organismo autónomo adscrito a la Consellería de Sanidade. (Ley 8/2008, de salud de Galicia)"
  },
  {
    tema: "Estatuto de Autonomía de Galicia",
    enunciado: "El Parlamento de Galicia tiene su sede en:",
    opciones: ["El Pazo do Hórreo, en Santiago de Compostela", "A Coruña", "San Caetano", "El Pazo de Raxoi"],
    correcta: "A",
    explicacion: "San Caetano es la sede de la Presidencia y de la Xunta. (Parlamento de Galicia)"
  },
  {
    tema: "Estatuto de Autonomía de Galicia",
    enunciado: "La sede de la Presidencia de la Xunta de Galicia está en:",
    opciones: ["Lugo", "María Pita, A Coruña", "San Caetano, Santiago de Compostela", "El Pazo do Hórreo"],
    correcta: "C",
    explicacion: "Complexo Administrativo de San Caetano. (Xunta de Galicia)"
  },
  {
    tema: "Estatuto de Autonomía de Galicia",
    enunciado: "Las elecciones al Parlamento de Galicia exigen para obtener escaño un mínimo de:",
    opciones: ["El 5 % de los votos válidos en la circunscripción", "El 3 % en toda Galicia", "El 10 % en la provincia", "No hay mínimo"],
    correcta: "A",
    explicacion: "Barrera electoral del 5 % por provincia. (Ley 8/1985, art. 10)"
  },
  {
    tema: "Estatuto de Autonomía de Galicia",
    enunciado: "Entre los órganos del Parlamento de Galicia se encuentran:",
    opciones: ["El Consello Consultivo", "Las consellerías", "El Tribunal Superior de Justicia", "El Presidente del Parlamento, la Mesa, la Junta de Portavoces, las comisiones y la Diputación Permanente"],
    correcta: "D",
    explicacion: "Órganos de gobierno y funcionamiento. (Reglamento del Parlamento de Galicia)"
  },
  {
    tema: "Estatuto de Autonomía de Galicia",
    enunciado: "La Diputación Permanente del Parlamento de Galicia actúa:",
    opciones: ["Cuando el Parlamento está disuelto o fuera de los periodos de sesiones", "Como tribunal", "En las elecciones municipales", "En lugar de la Xunta"],
    correcta: "A",
    explicacion: "Garantiza la continuidad del Parlamento. (Reglamento del Parlamento de Galicia)"
  },
  {
    tema: "Estatuto de Autonomía de Galicia",
    enunciado: "Los decretos legislativos en Galicia los dicta:",
    opciones: ["El Presidente del Parlamento", "La Xunta, por delegación del Parlamento", "El Valedor do Pobo", "El Tribunal Superior de Justicia"],
    correcta: "B",
    explicacion: "El Parlamento puede delegar en la Xunta la elaboración de normas con rango de ley. (EAG; Ley 1/1983)"
  },
  {
    tema: "Estatuto de Autonomía de Galicia",
    enunciado: "Las leyes de Galicia son promulgadas en nombre del Rey por:",
    opciones: ["El Delegado del Gobierno", "El Presidente de la Xunta", "El Presidente del Parlamento", "El conselleiro de Presidencia"],
    correcta: "B",
    explicacion: "Y se publican en el Diario Oficial de Galicia y en el BOE. (Estatuto de Autonomía de Galicia)"
  },
  {
    tema: "Estatuto de Autonomía de Galicia",
    enunciado: "Las leyes de Galicia se publican:",
    opciones: ["En el Diario Oficial de Galicia y en el Boletín Oficial del Estado", "Solo en el BOE", "Solo en la prensa", "En el Boletín de cada provincia"],
    correcta: "A",
    explicacion: "Entran en vigor según lo que dispongan. (Estatuto de Autonomía de Galicia)"
  },
  {
    tema: "Estatuto de Autonomía de Galicia",
    enunciado: "El Diario Oficial de Galicia se abrevia como:",
    opciones: ["BOE", "DOG", "BOG", "DOGA"],
    correcta: "B",
    explicacion: "Diario Oficial de Galicia. (Galicia)"
  },
  {
    tema: "Estatuto de Autonomía de Galicia",
    enunciado: "La iniciativa legislativa en Galicia corresponde, entre otros, a:",
    opciones: ["Solo el Presidente", "Solo los ciudadanos", "Solo la Xunta", "Los diputados, los grupos parlamentarios, la Xunta, los ciudadanos (iniciativa popular) y los ayuntamientos"],
    correcta: "D",
    explicacion: "Varias vías de iniciativa. (EAG; ley gallega de iniciativa legislativa popular)"
  },
  {
    tema: "Estatuto de Autonomía de Galicia",
    enunciado: "La competencia en materia de promoción y enseñanza de la lengua gallega es, según el Estatuto:",
    opciones: ["Exclusiva del Estado", "Exclusiva de Galicia", "De los ayuntamientos", "Compartida con Portugal"],
    correcta: "B",
    explicacion: "Competencia exclusiva. (Estatuto de Autonomía de Galicia)"
  },
  {
    tema: "Estatuto de Autonomía de Galicia",
    enunciado: "La lengua gallega se regula especialmente en la:",
    opciones: ["Ley 1/1983", "Ley 2/2015", "Ley 8/2008", "Ley 3/1983, de normalización lingüística"],
    correcta: "D",
    explicacion: "Desarrolla el art. 5 del Estatuto. (Ley 3/1983)"
  },
  {
    tema: "Estatuto de Autonomía de Galicia",
    enunciado: "Según la Ley 3/1983 de normalización lingüística, nadie podrá ser discriminado:",
    opciones: ["Por no conocer el gallego en ningún caso", "Por no hablar portugués", "Por razón de la lengua oficial que utilice", "Por usar el castellano en el Parlamento"],
    correcta: "C",
    explicacion: "Principio de no discriminación por razón de lengua. (Ley 3/1983)"
  },
  {
    tema: "Estatuto de Autonomía de Galicia",
    enunciado: "El órgano de representación ordinaria del Estado en Galicia, según el Estatuto, es:",
    opciones: ["El Presidente de la Xunta", "El Delegado del Gobierno", "El Presidente del Parlamento", "El Valedor do Pobo"],
    correcta: "A",
    explicacion: "El Delegado del Gobierno dirige la Administración del Estado en Galicia, pero la representación ordinaria del Estado la ostenta el Presidente de la Xunta. (EAG, art. 15.2)"
  },
  {
    tema: "Estatuto de Autonomía de Galicia",
    enunciado: "El Delegado del Gobierno en Galicia:",
    opciones: ["Preside la Xunta", "Dirige la Administración del Estado en el territorio de la Comunidad Autónoma", "Preside el Parlamento", "Es elegido por el Parlamento de Galicia"],
    correcta: "B",
    explicacion: "Coordina la Administración estatal con la autonómica cuando procede. (CE, art. 154)"
  },
  {
    tema: "Estatuto de Autonomía de Galicia",
    enunciado: "La Comunidad Autónoma de Galicia dispone de hacienda propia, regulada en el Estatuto en el título:",
    opciones: ["I, del poder gallego", "II, de las competencias", "V, de la reforma", "IV, de economía y hacienda"],
    correcta: "D",
    explicacion: "Título IV. (Estructura del EAG)"
  },
  {
    tema: "Estatuto de Autonomía de Galicia",
    enunciado: "El presupuesto de la Comunidad Autónoma de Galicia lo elabora y aprueba, respectivamente:",
    opciones: ["La Xunta lo elabora y el Parlamento lo aprueba", "Lo elabora el Estado y lo aprueba la Xunta", "El Parlamento lo elabora y la Xunta lo aprueba", "Lo elabora y aprueba la Xunta"],
    correcta: "A",
    explicacion: "Presupuesto anual. (Estatuto de Autonomía de Galicia)"
  },
  {
    tema: "Estatuto de Autonomía de Galicia",
    origen: "Examen 2024 · Común C6",
    enunciado: "Según el Estatuto de Autonomía de Galicia, la potestad legislativa corresponde al Parlamento de Galicia y esta función:",
    opciones: ["No podrá ser delegada en ningún caso", "Solo podrá ser delegada, con los requisitos legales, en el Presidente de la Xunta de Galicia", "Solo podrá ser delegada, con los requisitos legales, en la Xunta de Galicia", "Solo podrá ser delegada, con los requisitos legales, en las Cortes Generales"],
    correcta: "C",
    explicacion: "El Estatuto permite que el Parlamento delegue la potestad legislativa solo en la Xunta de Galicia."
  },
  // ===================================================================
  //  LEY GENERAL DE SANIDAD (69 preguntas)
  // ===================================================================
  {
    tema: "Ley General de Sanidad",
    enunciado: "La Ley General de Sanidad es:",
    opciones: ["La Ley 55/2003, de 16 de diciembre", "La Ley 14/1986, de 25 de abril", "La Ley 16/2003, de 28 de mayo", "La Ley 41/2002, de 14 de noviembre"],
    correcta: "B",
    explicacion: "Ley General de Sanidad. (Ley 14/1986)"
  },
  {
    tema: "Ley General de Sanidad",
    enunciado: "La Ley General de Sanidad desarrolla principalmente el artículo de la Constitución:",
    opciones: ["43", "45", "41", "49"],
    correcta: "A",
    explicacion: "Derecho a la protección de la salud. (LGS, art. 1)"
  },
  {
    tema: "Ley General de Sanidad",
    enunciado: "Según el artículo 1 de la Ley General de Sanidad, son titulares del derecho a la protección de la salud:",
    opciones: ["Solo los españoles", "Solo los mayores de edad", "Todos los españoles y los ciudadanos extranjeros que tengan establecida su residencia en el territorio nacional", "Solo los trabajadores cotizantes"],
    correcta: "C",
    explicacion: "Hoy el acceso se regula además por el RDL 7/2018 de acceso universal. (LGS, art. 1.2)"
  },
  {
    tema: "Ley General de Sanidad",
    enunciado: "Según la Ley General de Sanidad, los medios y actuaciones del sistema sanitario estarán orientados prioritariamente a:",
    opciones: ["La docencia", "La curación de las enfermedades", "La investigación", "La promoción de la salud y la prevención de las enfermedades"],
    correcta: "D",
    explicacion: "Prioridad de la promoción y prevención. (LGS, art. 3.1)"
  },
  {
    tema: "Ley General de Sanidad",
    enunciado: "Según la Ley General de Sanidad, el acceso y las prestaciones sanitarias se realizarán:",
    opciones: ["Según la comunidad autónoma de nacimiento", "Según la capacidad económica", "Según la antigüedad de cotización", "En condiciones de igualdad efectiva"],
    correcta: "D",
    explicacion: "Igualdad efectiva. (LGS, art. 3.2)"
  },
  {
    tema: "Ley General de Sanidad",
    enunciado: "La política de salud, según la Ley General de Sanidad, estará orientada a:",
    opciones: ["La superación de los desequilibrios territoriales y sociales", "La reducción del número de hospitales", "La privatización de la asistencia", "La concentración de recursos en las capitales"],
    correcta: "A",
    explicacion: "Equidad territorial y social. (LGS, art. 3.3)"
  },
  {
    tema: "Ley General de Sanidad",
    enunciado: "El Sistema Nacional de Salud es, según la Ley General de Sanidad:",
    opciones: ["La Seguridad Social", "El Ministerio de Sanidad", "El conjunto de hospitales privados", "El conjunto de los servicios de salud de la Administración del Estado y de los servicios de salud de las comunidades autónomas"],
    correcta: "D",
    explicacion: "Integra todas las funciones y prestaciones sanitarias responsabilidad de los poderes públicos. (LGS, art. 44)"
  },
  {
    tema: "Ley General de Sanidad",
    enunciado: "¿Cuál de las siguientes NO es una característica fundamental del Sistema Nacional de Salud según el artículo 46 de la LGS?",
    opciones: ["La financiación exclusiva mediante el pago directo de los usuarios", "La organización adecuada para prestar una atención integral a la salud", "La coordinación e integración de todos los recursos públicos en un dispositivo único", "La extensión de sus servicios a toda la población"],
    correcta: "A",
    explicacion: "Se financia con recursos de las administraciones públicas, cotizaciones y tasas. (LGS, art. 46)"
  },
  {
    tema: "Ley General de Sanidad",
    enunciado: "La atención integral de la salud que debe prestar el Sistema Nacional de Salud comprende:",
    opciones: ["La promoción de la salud, la prevención de la enfermedad, la asistencia sanitaria y la rehabilitación", "Solo la curación", "Solo la atención primaria", "Solo la asistencia hospitalaria"],
    correcta: "A",
    explicacion: "Atención integral. (LGS, art. 46.b)"
  },
  {
    tema: "Ley General de Sanidad",
    enunciado: "Según la Ley General de Sanidad, las comunidades autónomas crearán sus:",
    opciones: ["Juzgados sanitarios", "Servicios de Salud", "Mutuas de salud", "Ministerios de Sanidad"],
    correcta: "B",
    explicacion: "En Galicia, el Servizo Galego de Saúde. (LGS, arts. 49-50)"
  },
  {
    tema: "Ley General de Sanidad",
    enunciado: "Las Áreas de Salud son, según la Ley General de Sanidad:",
    opciones: ["Las consellerías", "Los departamentos de los hospitales", "Las estructuras fundamentales del sistema sanitario", "Las consultas de los centros de salud"],
    correcta: "C",
    explicacion: "Responsables de la gestión unitaria de los centros y prestaciones de su demarcación. (LGS, art. 56)"
  },
  {
    tema: "Ley General de Sanidad",
    enunciado: "Con carácter general, según la Ley General de Sanidad, el Área de Salud extenderá su acción a una población:",
    opciones: ["No inferior a 200.000 ni superior a 250.000 habitantes", "De más de 1.000.000 de habitantes", "De entre 5.000 y 25.000 habitantes", "De entre 50.000 y 100.000 habitantes"],
    correcta: "A",
    explicacion: "Con excepciones según factores geográficos y demográficos. Cada provincia tendrá al menos un Área. (LGS, art. 56.5)"
  },
  {
    tema: "Ley General de Sanidad",
    enunciado: "Según la Ley General de Sanidad, cada provincia tendrá como mínimo:",
    opciones: ["Un hospital universitario", "Dos zonas básicas", "Un Área de Salud", "Tres Áreas de Salud"],
    correcta: "C",
    explicacion: "Salvo casos especiales. (LGS, art. 56.5)"
  },
  {
    tema: "Ley General de Sanidad",
    enunciado: "Para conseguir la máxima operatividad, las Áreas de Salud se dividen en:",
    opciones: ["Distritos judiciales", "Provincias", "Zonas básicas de salud", "Consellerías"],
    correcta: "C",
    explicacion: "Marco territorial de la atención primaria. (LGS, art. 62)"
  },
  {
    tema: "Ley General de Sanidad",
    enunciado: "El centro de salud es:",
    opciones: ["Un hospital comarcal", "Una consulta privada", "La estructura física y funcional que permite el desarrollo de una atención primaria de salud coordinada globalmente", "Un servicio de urgencias hospitalarias"],
    correcta: "C",
    explicacion: "En la zona básica de salud. (LGS, art. 63)"
  },
  {
    tema: "Ley General de Sanidad",
    enunciado: "Según la Ley General de Sanidad, cada Área de Salud estará vinculada o dispondrá, al menos, de:",
    opciones: ["Una UCI", "Tres hospitales", "Un hospital general", "Un hospital universitario"],
    correcta: "C",
    explicacion: "Con los servicios que aconseje la población a asistir. (LGS, art. 65)"
  },
  {
    tema: "Ley General de Sanidad",
    enunciado: "Los órganos de las Áreas de Salud, según la LGS, son de:",
    opciones: ["Legislación y ejecución", "Gobierno, control y justicia", "Inspección y sanción", "Participación, dirección y gestión"],
    correcta: "D",
    explicacion: "Consejo de Salud de Área, Consejo de Dirección y Gerente. (LGS, art. 57)"
  },
  {
    tema: "Ley General de Sanidad",
    enunciado: "El órgano de coordinación, cooperación y comunicación entre los servicios de salud de las comunidades autónomas y el Estado es:",
    opciones: ["El Consejo de Ministros", "El Senado", "El Consejo Interterritorial del Sistema Nacional de Salud", "El Consello da Xunta"],
    correcta: "C",
    explicacion: "Formado por el Ministerio de Sanidad y los consejeros de sanidad de las comunidades autónomas. (LGS, art. 47; Ley 16/2003)"
  },
  {
    tema: "Ley General de Sanidad",
    enunciado: "La sanidad exterior es competencia:",
    opciones: ["Exclusiva del Estado", "De las comunidades autónomas", "De la Unión Europea en exclusiva", "De los ayuntamientos"],
    correcta: "A",
    explicacion: "Vigilancia sanitaria en puertos, aeropuertos y fronteras. (CE art. 149.1.16.ª; LGS, art. 38)"
  },
  {
    tema: "Ley General de Sanidad",
    enunciado: "Según el artículo 42 de la LGS, una responsabilidad mínima de los ayuntamientos en materia sanitaria es:",
    opciones: ["La gestión de los hospitales", "La formación de médicos especialistas", "La autorización de medicamentos", "El control sanitario de cementerios y la policía sanitaria mortuoria"],
    correcta: "D",
    explicacion: "También: control del medio ambiente, alimentos, edificios y actividades. (LGS, art. 42.3)"
  },
  {
    tema: "Ley General de Sanidad",
    enunciado: "Según la Ley General de Sanidad, el control sanitario de la distribución y suministro de alimentos es una responsabilidad mínima de:",
    opciones: ["Los ayuntamientos", "Los hospitales", "El Estado en exclusiva", "Las diputaciones"],
    correcta: "A",
    explicacion: "Sin perjuicio de las competencias de otras administraciones. (LGS, art. 42.3)"
  },
  {
    tema: "Ley General de Sanidad",
    enunciado: "La Ley General de Sanidad dispone, respecto a la salud mental, que:",
    opciones: ["La prestarán únicamente los servicios sociales", "Se prestará solo en hospitales psiquiátricos separados", "No forma parte del sistema sanitario", "Se integrará plenamente en el sistema sanitario general, con hospitalización en unidades psiquiátricas de hospitales generales"],
    correcta: "D",
    explicacion: "Integración de la salud mental. (LGS, art. 20)"
  },
  {
    tema: "Ley General de Sanidad",
    enunciado: "Según el artículo 10 de la LGS, todos tienen derecho, respecto a las administraciones públicas sanitarias, al respeto a:",
    opciones: ["Su capacidad económica", "Su personalidad, dignidad humana e intimidad, sin discriminación", "Su antigüedad como paciente", "Su afiliación sindical"],
    correcta: "B",
    explicacion: "Primer derecho del art. 10. (LGS, art. 10.1)"
  },
  {
    tema: "Ley General de Sanidad",
    enunciado: "Según la Ley General de Sanidad, los usuarios tienen derecho a la información sobre:",
    opciones: ["Los datos clínicos de otros pacientes", "Los servicios sanitarios a que pueden acceder y los requisitos para su uso", "Las cuentas de los hospitales", "Los salarios de los profesionales"],
    correcta: "B",
    explicacion: "Información sobre servicios. (LGS, art. 10.2)"
  },
  {
    tema: "Ley General de Sanidad",
    enunciado: "Según la LGS, el paciente tiene derecho a ser advertido de si los procedimientos que se le aplican pueden ser utilizados en:",
    opciones: ["Un proyecto docente o de investigación, que no podrá comportar peligro adicional para su salud", "Una película", "Un concurso", "Un anuncio publicitario"],
    correcta: "A",
    explicacion: "Siempre con su autorización previa por escrito. (LGS, art. 10.4)"
  },
  {
    tema: "Ley General de Sanidad",
    enunciado: "Según la LGS, el usuario tiene derecho a utilizar:",
    opciones: ["Cualquier quirófano que elija", "Las vías de reclamación y de propuesta de sugerencias", "Los datos de otros pacientes", "Los vehículos oficiales"],
    correcta: "B",
    explicacion: "Reclamaciones y sugerencias, recibiendo respuesta en los plazos establecidos. (LGS, art. 10.12)"
  },
  {
    tema: "Ley General de Sanidad",
    enunciado: "Según la LGS, el usuario tiene derecho a elegir:",
    opciones: ["El médico y los demás sanitarios titulados, en los términos que dispongan las normas", "El tratamiento sin intervención médica", "El horario de quirófano", "El hospital de cualquier país"],
    correcta: "A",
    explicacion: "Libre elección según la normativa. (LGS, art. 10.13)"
  },
  {
    tema: "Ley General de Sanidad",
    enunciado: "Según el artículo 11 de la LGS, es una obligación de los ciudadanos con las instituciones sanitarias:",
    opciones: ["Donar sangre", "Hacerse un chequeo anual", "Cuidar las instalaciones y colaborar en el mantenimiento de la habitabilidad de las instituciones sanitarias", "Pagar cada consulta"],
    correcta: "C",
    explicacion: "Deberes del usuario. (LGS, art. 11.2)"
  },
  {
    tema: "Ley General de Sanidad",
    enunciado: "Otro deber de los usuarios según la LGS es:",
    opciones: ["Cambiar de médico cada año", "Acudir siempre a urgencias", "Responsabilizarse del uso adecuado de las prestaciones del sistema sanitario", "Elegir el tratamiento"],
    correcta: "C",
    explicacion: "Especialmente en prestaciones farmacéuticas y de incapacidad laboral. (LGS, art. 11.3)"
  },
  {
    tema: "Ley General de Sanidad",
    enunciado: "Según la LGS, los usuarios deben cumplir:",
    opciones: ["Solo lo que les parezca bien", "Las órdenes de los celadores en materia clínica", "Las prescripciones generales de naturaleza sanitaria comunes a toda la población y las específicas de los servicios sanitarios", "Ninguna norma"],
    correcta: "C",
    explicacion: "Deber de cumplir las prescripciones sanitarias. (LGS, art. 11.1)"
  },
  {
    tema: "Ley General de Sanidad",
    enunciado: "La Ley 41/2002 derogó varios apartados de los artículos 10 y 11 de la Ley General de Sanidad. Esta ley regula:",
    opciones: ["El Estatuto Marco", "La prevención de riesgos laborales", "La autonomía del paciente y los derechos y obligaciones en materia de información y documentación clínica", "La cohesión del SNS"],
    correcta: "C",
    explicacion: "Ley básica de autonomía del paciente. (Ley 41/2002)"
  },
  {
    tema: "Ley General de Sanidad",
    enunciado: "Según la Ley 41/2002, el titular del derecho a la información asistencial es:",
    opciones: ["El médico", "El hospital", "El paciente", "La familia en todo caso"],
    correcta: "C",
    explicacion: "También se informa a las personas vinculadas en la medida en que el paciente lo permita. (Ley 41/2002, art. 5)"
  },
  {
    tema: "Ley General de Sanidad",
    enunciado: "Según la Ley 41/2002, el consentimiento informado será, como regla general:",
    opciones: ["No es necesario", "Ante notario", "Escrito siempre", "Verbal"],
    correcta: "D",
    explicacion: "Será por escrito en intervenciones quirúrgicas, procedimientos invasores y los que suponen riesgos notorios. (Ley 41/2002, art. 8.2)"
  },
  {
    tema: "Ley General de Sanidad",
    enunciado: "Según la Ley 41/2002, el consentimiento informado debe prestarse por escrito en los casos de:",
    opciones: ["Cualquier consulta", "Toma de tensión", "Intervención quirúrgica, procedimientos diagnósticos y terapéuticos invasores y procedimientos con riesgos notorios", "Extracciones de sangre rutinarias"],
    correcta: "C",
    explicacion: "Casos de consentimiento escrito. (Ley 41/2002, art. 8.2)"
  },
  {
    tema: "Ley General de Sanidad",
    enunciado: "El paciente puede revocar libremente su consentimiento:",
    opciones: ["Nunca, una vez dado", "Por escrito, en cualquier momento", "Solo con autorización judicial", "Solo antes de ingresar"],
    correcta: "B",
    explicacion: "Revocación por escrito en cualquier momento. (Ley 41/2002, art. 8.5)"
  },
  {
    tema: "Ley General de Sanidad",
    enunciado: "Si un paciente no acepta el tratamiento prescrito, según la Ley 41/2002:",
    opciones: ["Se le propondrá firmar el alta voluntaria", "Se avisa a la policía", "Se le expulsa sin documento", "Se le obliga a seguirlo"],
    correcta: "A",
    explicacion: "Si no la firma, la dirección del centro puede disponer el alta forzosa en las condiciones de la ley. (Ley 41/2002, art. 21)"
  },
  {
    tema: "Ley General de Sanidad",
    enunciado: "El documento por el que una persona mayor de edad manifiesta anticipadamente su voluntad sobre los cuidados y el tratamiento que desea recibir si no puede expresarse se denomina:",
    opciones: ["Alta voluntaria", "Historia clínica", "Consentimiento informado", "Documento de instrucciones previas"],
    correcta: "D",
    explicacion: "En Galicia se conoce también como voluntades anticipadas. (Ley 41/2002, art. 11)"
  },
  {
    tema: "Ley General de Sanidad",
    enunciado: "Según la Ley 41/2002, el derecho a la información puede limitarse por la existencia acreditada de:",
    opciones: ["La petición de un familiar", "La edad del paciente", "Falta de tiempo del médico", "Un estado de necesidad terapéutica"],
    correcta: "D",
    explicacion: "Cuando conocer su situación puede perjudicar gravemente su salud. (Ley 41/2002, art. 5.4)"
  },
  {
    tema: "Ley General de Sanidad",
    enunciado: "Toda persona tiene derecho a que se respete su voluntad de:",
    opciones: ["No ser informada", "Ver la historia clínica de otros", "Recibir cualquier tratamiento que pida", "No pagar impuestos sanitarios"],
    correcta: "A",
    explicacion: "Derecho a no saber. (Ley 41/2002, art. 4.1)"
  },
  {
    tema: "Ley General de Sanidad",
    enunciado: "Los menores de edad mayores de 16 años o emancipados, en general:",
    opciones: ["Consienten solo con presencia del celador", "Prestan por sí mismos el consentimiento, salvo en actuaciones de grave riesgo para su vida o salud, en que consiente su representante legal después de oír su opinión", "Necesitan autorización judicial", "No pueden consentir nunca"],
    correcta: "B",
    explicacion: "Mayoría de edad sanitaria a los 16 años. Desde la Ley 26/2015, en las actuaciones de grave riesgo consiente el representante legal, después de oír y tener en cuenta la opinión del menor. Ojo con los temarios antiguos, que dicen que los padres solo son informados. (Ley 41/2002, art. 9.4)"
  },
  {
    tema: "Ley General de Sanidad",
    enunciado: "La cartera común de servicios del Sistema Nacional de Salud se regula, principalmente, en:",
    opciones: ["La Ley 14/1986 exclusivamente", "El Real Decreto 1030/2006 y la Ley 16/2003", "El Estatuto Marco", "La Constitución"],
    correcta: "B",
    explicacion: "Conjunto de prestaciones comunes. (RD 1030/2006; Ley 16/2003)"
  },
  {
    tema: "Ley General de Sanidad",
    enunciado: "La Ley de cohesión y calidad del Sistema Nacional de Salud es:",
    opciones: ["La Ley 16/2003, de 28 de mayo", "La Ley 14/1986", "La Ley 41/2002", "La Ley 33/2011"],
    correcta: "A",
    explicacion: "Regula prestaciones, coordinación y calidad del SNS. (Ley 16/2003)"
  },
  {
    tema: "Ley General de Sanidad",
    enunciado: "La Ley General de Salud Pública es:",
    opciones: ["La Ley 8/2008", "La Ley 16/2003", "La Ley 33/2011, de 4 de octubre", "La Ley 14/1986"],
    correcta: "C",
    explicacion: "Salud pública, vigilancia y promoción. (Ley 33/2011)"
  },
  {
    tema: "Ley General de Sanidad",
    enunciado: "El acceso universal al Sistema Nacional de Salud se reforzó mediante:",
    opciones: ["La Ley 41/2002", "La Ley 55/2003", "El Real Decreto 137/1984", "El Real Decreto-ley 7/2018"],
    correcta: "D",
    explicacion: "Acceso universal al SNS. (RDL 7/2018)"
  },
  {
    tema: "Ley General de Sanidad",
    enunciado: "La tarjeta sanitaria individual sirve para:",
    opciones: ["Pagar en el hospital", "Acceder a la historia clínica de la familia", "Sustituir al DNI en todos los trámites", "Identificar a cada ciudadano como usuario del sistema sanitario público"],
    correcta: "D",
    explicacion: "Identificación del usuario. (Ley 16/2003, art. 57)"
  },
  {
    tema: "Ley General de Sanidad",
    enunciado: "La atención primaria es:",
    opciones: ["El primer nivel de acceso de los ciudadanos al sistema sanitario", "La atención privada", "Solo la atención de urgencias", "La atención en el hospital"],
    correcta: "A",
    explicacion: "Incluye asistencia, prevención, promoción y rehabilitación básicas. (Ley 16/2003, art. 12)"
  },
  {
    tema: "Ley General de Sanidad",
    enunciado: "La atención especializada se presta principalmente en:",
    opciones: ["Hospitales y centros de especialidades", "Domicilios exclusivamente", "Farmacias", "Centros de salud"],
    correcta: "A",
    explicacion: "Segundo nivel asistencial. (Ley 16/2003, art. 13)"
  },
  {
    tema: "Ley General de Sanidad",
    enunciado: "El Gobierno del Sistema Nacional de Salud en lo relativo a bases y coordinación general de la sanidad corresponde:",
    opciones: ["A las comunidades autónomas por separado", "Al Estado", "A los ayuntamientos", "A los colegios de médicos"],
    correcta: "B",
    explicacion: "Bases y coordinación general: Estado. (CE, art. 149.1.16.ª)"
  },
  {
    tema: "Ley General de Sanidad",
    enunciado: "Según la Ley General de Sanidad, la asistencia sanitaria pública se extenderá:",
    opciones: ["Solo a los menores", "Solo a quien pague", "Solo a los afiliados a la Seguridad Social", "A toda la población española"],
    correcta: "D",
    explicacion: "Universalidad. (LGS, art. 3.2)"
  },
  {
    tema: "Ley General de Sanidad",
    enunciado: "Entre las actuaciones sanitarias que la LGS encomienda a las administraciones públicas se encuentra:",
    opciones: ["La fabricación de medicamentos", "La educación sanitaria como elemento primordial para la mejora de la salud individual y comunitaria", "La gestión de las farmacias privadas", "La formación de abogados"],
    correcta: "B",
    explicacion: "Primera actuación del art. 18. (LGS, art. 18.1)"
  },
  {
    tema: "Ley General de Sanidad",
    enunciado: "La Ley General de Sanidad establece que la Seguridad Social se financiará, en lo relativo a la asistencia sanitaria, con:",
    opciones: ["Solo fondos europeos", "Solo pagos de los usuarios", "Solo donaciones", "Cotizaciones sociales, transferencias del Estado, tasas y otros ingresos"],
    correcta: "D",
    explicacion: "Hoy la asistencia sanitaria se financia principalmente con impuestos. (LGS, art. 79)"
  },
  {
    tema: "Ley General de Sanidad",
    enunciado: "La LGS establece que los servicios sanitarios, así como los administrativos, económicos y cualesquiera otros que sean precisos para el funcionamiento del Servicio de Salud, adecuarán su organización y funcionamiento a los principios de:",
    opciones: ["Jerarquía militar", "Eficacia, celeridad, economía y flexibilidad", "Rentabilidad económica exclusiva", "Antigüedad"],
    correcta: "B",
    explicacion: "Principios organizativos. (LGS, art. 7)"
  },
  {
    tema: "Ley General de Sanidad",
    enunciado: "Según la Ley General de Sanidad, las administraciones públicas sanitarias deben garantizar la tutela general de la salud pública a través de:",
    opciones: ["Medidas preventivas, de promoción y de las prestaciones necesarias", "Solo campañas publicitarias", "Solo multas", "Solo hospitales"],
    correcta: "A",
    explicacion: "Tutela de la salud pública. (LGS, art. 3; CE art. 43.2)"
  },
  {
    tema: "Ley General de Sanidad",
    enunciado: "El derecho a la intimidad del paciente incluye el respeto a:",
    opciones: ["Su derecho a recibir visitas sin límite", "Su elección de menú", "Su derecho a fumar en la habitación", "La confidencialidad de toda la información relacionada con su proceso y estancia"],
    correcta: "D",
    explicacion: "Confidencialidad. (LGS, art. 10.3; Ley 41/2002, art. 7)"
  },
  {
    tema: "Ley General de Sanidad",
    enunciado: "Según la Ley 41/2002, la historia clínica tiene como finalidad principal:",
    opciones: ["Facilitar la asistencia sanitaria del paciente", "Uso policial", "Hacer estadísticas exclusivamente", "Facturar al paciente"],
    correcta: "A",
    explicacion: "Instrumento para garantizar una asistencia adecuada. (Ley 41/2002, art. 16.1)"
  },
  {
    tema: "Ley General de Sanidad",
    enunciado: "El paciente tiene derecho de acceso a su historia clínica, con la excepción de:",
    opciones: ["Los datos de terceros y las anotaciones subjetivas de los profesionales, si estos se oponen", "Sus informes de alta", "Sus pruebas", "Sus diagnósticos"],
    correcta: "A",
    explicacion: "Límites del derecho de acceso. (Ley 41/2002, art. 18.3)"
  },
  {
    tema: "Ley General de Sanidad",
    enunciado: "Al finalizar el proceso asistencial, el paciente tiene derecho a recibir:",
    opciones: ["Una factura", "Un informe de alta", "Un certificado de buena conducta", "Las placas originales en todo caso"],
    correcta: "B",
    explicacion: "Informe de alta con los datos mínimos establecidos. (Ley 41/2002, art. 20)"
  },
  {
    tema: "Ley General de Sanidad",
    enunciado: "El Consejo Interterritorial del SNS está presidido por:",
    opciones: ["El presidente de una comunidad autónoma por turno", "El ministro o ministra de Sanidad", "El Presidente del Gobierno", "El Rey"],
    correcta: "B",
    explicacion: "Formado por el ministro y los consejeros autonómicos. (Ley 16/2003, art. 70)"
  },
  {
    tema: "Ley General de Sanidad",
    enunciado: "La Ley General de Sanidad dispone que la asistencia sanitaria se presta de manera integrada, de forma que la atención primaria y la especializada:",
    opciones: ["Solo existe la especializada", "Se coordinan, actuando el hospital como apoyo especializado a la atención primaria", "Se excluyen mutuamente", "Funcionan de forma totalmente independiente"],
    correcta: "B",
    explicacion: "Coordinación entre niveles. (LGS, arts. 56 y 65)"
  },
  {
    tema: "Ley General de Sanidad",
    enunciado: "Un usuario quiere presentar una queja sobre la atención recibida. Según la LGS tiene derecho a:",
    opciones: ["Utilizar las vías de reclamación y recibir respuesta por escrito en los plazos establecidos", "Recibir una indemnización inmediata", "Elegir al profesional que le atendió para sancionarlo", "Que se cierre el servicio"],
    correcta: "A",
    explicacion: "Derecho a reclamar y a obtener respuesta. (LGS, art. 10.12)"
  },
  {
    tema: "Ley General de Sanidad",
    enunciado: "El principio de no discriminación en la atención sanitaria implica que no se puede discriminar por:",
    opciones: ["Orden de llegada en urgencias", "Gravedad de la enfermedad", "Origen racial o étnico, sexo, religión, discapacidad, edad, orientación sexual o cualquier otra circunstancia", "Prioridad clínica"],
    correcta: "C",
    explicacion: "La prioridad clínica no es discriminación. (LGS, art. 10.1; Ley 15/2022)"
  },
  {
    tema: "Ley General de Sanidad",
    enunciado: "La Ley General de Sanidad establece la creación del Servicio de Salud de cada comunidad autónoma integrado por:",
    opciones: ["Todos los centros, servicios y establecimientos de la propia comunidad, diputaciones, ayuntamientos y otras administraciones territoriales", "Solo la consellería", "Solo los hospitales", "Solo los centros privados"],
    correcta: "A",
    explicacion: "Integración de recursos públicos. (LGS, art. 50)"
  },
  {
    tema: "Ley General de Sanidad",
    enunciado: "Según la Ley 41/2002, el consentimiento por representación se otorga cuando:",
    opciones: ["El paciente es mayor de 65 años", "El paciente lo prefiere así siempre", "El médico tiene prisa", "El paciente no es capaz de tomar decisiones, según criterio médico, o está incapacitado legalmente"],
    correcta: "D",
    explicacion: "Lo prestan las personas vinculadas o el representante legal. (Ley 41/2002, art. 9.3)"
  },
  {
    tema: "Ley General de Sanidad",
    enunciado: "Se puede actuar sin consentimiento del paciente, según la Ley 41/2002, cuando:",
    opciones: ["El paciente no habla castellano", "El paciente es extranjero", "Es fin de semana", "Existe riesgo para la salud pública o riesgo inmediato grave para la integridad del paciente y no es posible conseguir su autorización"],
    correcta: "D",
    explicacion: "Excepciones al consentimiento. (Ley 41/2002, art. 9.2)"
  },
  {
    tema: "Ley General de Sanidad",
    enunciado: "Según la Ley 41/2002, la información clínica forma parte de:",
    opciones: ["Solo las urgencias", "Solo los ingresos", "Solo las intervenciones quirúrgicas", "Todas las actuaciones asistenciales"],
    correcta: "D",
    explicacion: "Será verdadera, comprensible y adecuada a las necesidades del paciente. (Ley 41/2002, art. 4.2)"
  },
  {
    tema: "Ley General de Sanidad",
    enunciado: "El médico responsable del paciente es quien:",
    opciones: ["Asigna las camas", "Dirige el hospital", "Garantiza el cumplimiento de su derecho a la información", "Firma las nóminas"],
    correcta: "C",
    explicacion: "También informan los demás profesionales que le atienden. (Ley 41/2002, art. 4.3)"
  },
  {
    tema: "Ley General de Sanidad",
    enunciado: "Los centros sanitarios deben conservar la historia clínica, como mínimo:",
    opciones: ["Diez días", "Cinco años desde la fecha de alta de cada proceso asistencial", "Para siempre en todo caso", "Un año"],
    correcta: "B",
    explicacion: "En Galicia, la Ley 3/2001 y su normativa de desarrollo establecen plazos propios para determinados documentos. (Ley 41/2002, art. 17.1)"
  },
  {
    tema: "Ley General de Sanidad",
    enunciado: "El derecho a la segunda opinión médica permite al paciente:",
    opciones: ["Elegir quirófano", "No pagar los medicamentos", "Cambiar de hospital cuando quiera", "Obtener el criterio de otro médico sobre su diagnóstico o tratamiento en determinados supuestos"],
    correcta: "D",
    explicacion: "En Galicia está regulado por decreto autonómico. (Ley 16/2003; normativa autonómica)"
  },
  {
    tema: "Ley General de Sanidad",
    origen: "Examen 2024 · Común C5",
    enunciado: "Según lo establecido en la Ley General de Sanidad, indique el organismo que acreditará los servicios de referencia, a los que podrán acceder todos los usuarios del Sistema Nacional de Salud, una vez agotadas las posibilidades de diagnóstico y tratamiento de los servicios especializados de la Comunidad Autónoma donde residan:",
    opciones: ["El Ministerio de Sanidad", "El Consejo de Ministros", "El Consejo Interterritorial del Sistema Nacional de Salud", "La Consejería de Sanidad de la Comunidad Autónoma en la que residan"],
    correcta: "A",
    explicacion: "Según el artículo 15 de la Ley General de Sanidad, los servicios de referencia los acredita el Ministerio de Sanidad."
  },
  // ===================================================================
  //  LEY DE SALUD DE GALICIA Y SERGAS (68 preguntas)
  // ===================================================================
  {
    tema: "Ley de salud de Galicia y Sergas",
    enunciado: "La ley de salud de Galicia vigente es:",
    opciones: ["La Ley 7/2003, de 9 de diciembre", "La Ley 14/1986, de 25 de abril", "La Ley 1/1989, de 2 de enero", "La Ley 8/2008, de 10 de julio"],
    correcta: "D",
    explicacion: "Ley de salud de Galicia. (Ley 8/2008)"
  },
  {
    tema: "Ley de salud de Galicia y Sergas",
    enunciado: "El Servizo Galego de Saúde fue creado por:",
    opciones: ["La Ley 14/1986", "La Ley 1/1989, de 2 de enero", "El Estatuto de Autonomía", "La Ley 8/2008"],
    correcta: "B",
    explicacion: "Hoy su regulación principal está en la Ley 8/2008. (Ley 1/1989)"
  },
  {
    tema: "Ley de salud de Galicia y Sergas",
    enunciado: "El Servizo Galego de Saúde es:",
    opciones: ["Un organismo autónomo de naturaleza administrativa, con personalidad jurídica propia, adscrito a la consellería competente en sanidad", "Una empresa privada", "Una fundación privada", "Una dirección general sin personalidad jurídica"],
    correcta: "A",
    explicacion: "Organismo autónomo. (Ley 8/2008)"
  },
  {
    tema: "Ley de salud de Galicia y Sergas",
    enunciado: "La consellería a la que está adscrito el Servizo Galego de Saúde es la competente en materia de:",
    opciones: ["Hacienda", "Educación", "Sanidad", "Política social"],
    correcta: "C",
    explicacion: "Consellería de Sanidade. (Ley 8/2008)"
  },
  {
    tema: "Ley de salud de Galicia y Sergas",
    enunciado: "La Ley 8/2008 distingue entre el sistema sanitario de Galicia y el sistema público de salud de Galicia. El sistema público:",
    opciones: ["Incluye todos los centros privados", "Solo incluye la atención primaria", "Solo incluye los hospitales", "Está formado por los recursos, centros y servicios de las administraciones públicas y entidades públicas"],
    correcta: "D",
    explicacion: "El sistema sanitario de Galicia incluye también los centros privados. (Ley 8/2008)"
  },
  {
    tema: "Ley de salud de Galicia y Sergas",
    enunciado: "El sistema público de salud de Galicia forma parte de:",
    opciones: ["Ninguna estructura estatal", "La Seguridad Social privada", "El sistema de salud de Portugal", "El Sistema Nacional de Salud"],
    correcta: "D",
    explicacion: "Es uno de los servicios de salud autonómicos del SNS. (LGS, art. 44; Ley 8/2008)"
  },
  {
    tema: "Ley de salud de Galicia y Sergas",
    enunciado: "En Galicia, la competencia de desarrollo legislativo y ejecución de la legislación básica del Estado en sanidad interior corresponde a:",
    opciones: ["Las diputaciones", "El Estado exclusivamente", "La Comunidad Autónoma de Galicia", "Los ayuntamientos"],
    correcta: "C",
    explicacion: "Asumida en el Estatuto. (EAG, art. 33)"
  },
  {
    tema: "Ley de salud de Galicia y Sergas",
    enunciado: "En Galicia, ¿qué órgano ostenta la condición de autoridad sanitaria, entre otros?",
    opciones: ["Las empresas farmacéuticas", "Los celadores", "El Consello de la Xunta, el titular de la consellería de sanidad y los alcaldes en su ámbito", "Los directores de los colegios"],
    correcta: "C",
    explicacion: "Autoridades sanitarias autonómicas y locales. (Ley 8/2008)"
  },
  {
    tema: "Ley de salud de Galicia y Sergas",
    enunciado: "Los ayuntamientos gallegos, en materia de salud, tienen competencias en:",
    opciones: ["La gestión de los hospitales del Sergas", "La autorización de medicamentos", "La contratación del personal estatutario", "Control sanitario del medio ambiente, alimentos, edificios, actividades, cementerios y policía sanitaria mortuoria"],
    correcta: "D",
    explicacion: "Responsabilidades sanitarias municipales. (LGS, art. 42; Ley 8/2008)"
  },
  {
    tema: "Ley de salud de Galicia y Sergas",
    enunciado: "Actualmente el Servizo Galego de Saúde se organiza territorialmente en:",
    opciones: ["Una única área para toda Galicia", "Siete áreas sanitarias", "Doce áreas sanitarias", "Cuatro áreas, una por provincia"],
    correcta: "B",
    explicacion: "Áreas: A Coruña e Cee; Santiago de Compostela e Barbanza; Ferrol; Lugo, A Mariña e Monforte de Lemos; Ourense, Verín e O Barco de Valdeorras; Pontevedra e O Salnés; y Vigo. (Organización del Sergas)"
  },
  {
    tema: "Ley de salud de Galicia y Sergas",
    enunciado: "¿Cuál de las siguientes NO es un área sanitaria del Sergas?",
    opciones: ["Área sanitaria de Ferrol", "Área sanitaria de Tui", "Área sanitaria de Vigo", "Área sanitaria de Pontevedra e O Salnés"],
    correcta: "B",
    explicacion: "Tui y el Baixo Miño pertenecen al área sanitaria de Vigo. (Organización del Sergas)"
  },
  {
    tema: "Ley de salud de Galicia y Sergas",
    enunciado: "Los municipios del Baixo Miño (como Tomiño o Tui) pertenecen al área sanitaria de:",
    opciones: ["Pontevedra e O Salnés", "Vigo", "Ourense, Verín e O Barco", "Santiago de Compostela e Barbanza"],
    correcta: "B",
    explicacion: "Su hospital de referencia es el Álvaro Cunqueiro. (Organización del Sergas)"
  },
  {
    tema: "Ley de salud de Galicia y Sergas",
    enunciado: "Las áreas sanitarias del Sergas integran en una misma gestión:",
    opciones: ["Los centros privados de la zona", "La atención primaria, la hospitalaria y la sociosanitaria de su ámbito", "Solo los hospitales", "Solo los centros de salud"],
    correcta: "B",
    explicacion: "Gestión integrada de niveles asistenciales. (Organización del Sergas)"
  },
  {
    tema: "Ley de salud de Galicia y Sergas",
    enunciado: "Los procesos selectivos del personal estatutario del Sergas los convoca:",
    opciones: ["El Ministerio de Sanidad", "El Parlamento de Galicia", "Cada hospital por su cuenta", "La Dirección General de Recursos Humanos del Servizo Galego de Saúde"],
    correcta: "D",
    explicacion: "Por ejemplo, la Resolución de 21 de agosto de 2025. (Convocatorias OPE Sergas)"
  },
  {
    tema: "Ley de salud de Galicia y Sergas",
    enunciado: "El teléfono 061 en Galicia depende de:",
    opciones: ["El Ministerio del Interior", "Los ayuntamientos", "La Fundación Pública Urxencias Sanitarias de Galicia-061", "Una empresa privada sin relación con el Sergas"],
    correcta: "C",
    explicacion: "Coordina las urgencias y emergencias sanitarias extrahospitalarias. (Sistema público de salud de Galicia)"
  },
  {
    tema: "Ley de salud de Galicia y Sergas",
    enunciado: "La entidad del sistema público de salud de Galicia que coordina la donación de órganos y de sangre es:",
    opciones: ["El 061", "El Valedor do Pobo", "Galaria", "La Axencia Galega de Sangue, Órganos e Tecidos (ADOS)"],
    correcta: "D",
    explicacion: "Gestiona donaciones y trasplantes en Galicia. (Sistema público de salud de Galicia)"
  },
  {
    tema: "Ley de salud de Galicia y Sergas",
    enunciado: "El Servizo Galego de Saúde tiene como finalidad principal:",
    opciones: ["La prestación de la asistencia sanitaria pública en Galicia y la gestión de sus recursos", "La formación de médicos en exclusiva", "La inspección de empresas", "La gestión de las farmacias privadas"],
    correcta: "A",
    explicacion: "Provisión de servicios sanitarios públicos. (Ley 8/2008)"
  },
  {
    tema: "Ley de salud de Galicia y Sergas",
    enunciado: "El Sergas tiene adscrito el personal de sus centros, que es mayoritariamente:",
    opciones: ["Personal estatutario", "Personal militar", "Personal laboral de empresas privadas", "Personal funcionario de la Xunta"],
    correcta: "A",
    explicacion: "Se rige por el Estatuto Marco. (Ley 55/2003; Ley 8/2008)"
  },
  {
    tema: "Ley de salud de Galicia y Sergas",
    enunciado: "La Ley 8/2008 de salud de Galicia regula, entre otros contenidos:",
    opciones: ["El régimen de los partidos políticos", "El sistema educativo", "El tráfico", "Los derechos y deberes de los ciudadanos en el ámbito sanitario"],
    correcta: "D",
    explicacion: "Incluye un título dedicado a derechos y deberes. (Ley 8/2008)"
  },
  {
    tema: "Ley de salud de Galicia y Sergas",
    enunciado: "Según la Ley 8/2008, entre los principios que inspiran el sistema público de salud de Galicia se encuentra:",
    opciones: ["La rentabilidad económica", "La exclusión de los extranjeros", "La universalidad y la equidad en el acceso", "La privatización"],
    correcta: "C",
    explicacion: "Principios rectores. (Ley 8/2008)"
  },
  {
    tema: "Ley de salud de Galicia y Sergas",
    enunciado: "La planificación sanitaria en Galicia se concreta, principalmente, en:",
    opciones: ["El calendario escolar", "Los presupuestos de cada hospital", "El Plan General de Ordenación Municipal", "El Plan de Salud de Galicia"],
    correcta: "D",
    explicacion: "Instrumento básico de planificación. (Ley 8/2008)"
  },
  {
    tema: "Ley de salud de Galicia y Sergas",
    enunciado: "El portal web del Sergas que permite a los ciudadanos consultar su información sanitaria, citas y resultados se denomina:",
    opciones: ["E-Saúde", "SIGAP", "FIDES", "IANUS"],
    correcta: "A",
    explicacion: "IANUS es la historia clínica que usan los profesionales. (Sistemas de información del Sergas)"
  },
  {
    tema: "Ley de salud de Galicia y Sergas",
    enunciado: "La historia clínica electrónica utilizada por los profesionales del Sergas es:",
    opciones: ["Xade", "E-Saúde", "IANUS", "FIDES"],
    correcta: "C",
    explicacion: "Historia clínica electrónica única. (Sistemas de información del Sergas)"
  },
  {
    tema: "Ley de salud de Galicia y Sergas",
    enunciado: "La receta electrónica en el Sergas permite:",
    opciones: ["Que el paciente retire sus medicamentos en la farmacia sin receta en papel, con su tarjeta sanitaria", "Comprar medicamentos sin prescripción", "Que el celador dispense medicamentos", "Pagar los medicamentos con la tarjeta del hospital"],
    correcta: "A",
    explicacion: "Prescripción y dispensación electrónicas. (Sistemas de información del Sergas)"
  },
  {
    tema: "Ley de salud de Galicia y Sergas",
    enunciado: "El centro de salud forma parte de:",
    opciones: ["Los servicios sociales", "La atención primaria", "La atención hospitalaria", "La Administración de justicia"],
    correcta: "B",
    explicacion: "Primer nivel asistencial. (Organización sanitaria)"
  },
  {
    tema: "Ley de salud de Galicia y Sergas",
    enunciado: "Los Puntos de Atención Continuada (PAC) del Sergas:",
    opciones: ["Solo hacen vacunaciones", "Son hospitales de agudos", "Son consultas privadas", "Atienden las urgencias de atención primaria fuera del horario ordinario de los centros de salud"],
    correcta: "D",
    explicacion: "Tardes, noches, fines de semana y festivos. (Organización sanitaria en Galicia)"
  },
  {
    tema: "Ley de salud de Galicia y Sergas",
    enunciado: "La atención hospitalaria del Sergas se presta en:",
    opciones: ["Ayuntamientos", "Complejos hospitalarios, hospitales y hospitales comarcales", "Centros de salud exclusivamente", "Farmacias"],
    correcta: "B",
    explicacion: "Segundo nivel asistencial. (Organización sanitaria en Galicia)"
  },
  {
    tema: "Ley de salud de Galicia y Sergas",
    enunciado: "El órgano superior de la Xunta en materia sanitaria es:",
    opciones: ["El Valedor do Pobo", "La Diputación provincial", "El Parlamento de Galicia", "La Consellería de Sanidade"],
    correcta: "D",
    explicacion: "Ejerce la dirección de la política sanitaria. (Organización de la Xunta)"
  },
  {
    tema: "Ley de salud de Galicia y Sergas",
    enunciado: "El titular de la consellería con competencias en sanidad, respecto al Sergas:",
    opciones: ["Ejerce la presidencia del organismo y su alta dirección", "Es elegido por los trabajadores del Sergas", "No tiene ninguna relación", "Es un empleado más"],
    correcta: "A",
    explicacion: "El Sergas está adscrito a la consellería. (Ley 8/2008)"
  },
  {
    tema: "Ley de salud de Galicia y Sergas",
    enunciado: "El acceso a la asistencia sanitaria pública en Galicia se acredita, como regla general, mediante:",
    opciones: ["El pasaporte", "El carné de conducir", "La tarjeta sanitaria", "El libro de familia"],
    correcta: "C",
    explicacion: "Tarjeta sanitaria individual. (Ley 16/2003; Ley 8/2008)"
  },
  {
    tema: "Ley de salud de Galicia y Sergas",
    enunciado: "La inspección de servicios sanitarios en Galicia la ejerce:",
    opciones: ["La Administración sanitaria autonómica, a través de sus servicios de inspección", "Los colegios profesionales", "Los celadores", "Las asociaciones de pacientes"],
    correcta: "A",
    explicacion: "Función de control de la Administración. (Ley 8/2008)"
  },
  {
    tema: "Ley de salud de Galicia y Sergas",
    enunciado: "Los centros, servicios y establecimientos sanitarios privados en Galicia necesitan:",
    opciones: ["Ninguna autorización", "Autorización sanitaria de la Administración autonómica", "Autorización del Parlamento", "Solo licencia municipal de apertura"],
    correcta: "B",
    explicacion: "Autorización de funcionamiento. (Ley 8/2008; RD 1277/2003)"
  },
  {
    tema: "Ley de salud de Galicia y Sergas",
    enunciado: "Entre los derechos de los pacientes en Galicia está el de obtener una segunda opinión médica:",
    opciones: ["No existe ese derecho en Galicia", "En los supuestos y con el procedimiento que regula la normativa gallega", "En cualquier caso y de forma inmediata", "Solo en la sanidad privada"],
    correcta: "B",
    explicacion: "Regulada por decreto autonómico. (Normativa gallega de segunda opinión)"
  },
  {
    tema: "Ley de salud de Galicia y Sergas",
    enunciado: "Galicia regula garantías de tiempos máximos de acceso a la atención sanitaria en:",
    opciones: ["La Ley 3/2001", "No están reguladas", "La Ley 12/2013, de garantías de prestaciones sanitarias", "La Ley 2/2015"],
    correcta: "C",
    explicacion: "Establece tiempos máximos para determinadas intervenciones y consultas. (Ley 12/2013 de Galicia)"
  },
  {
    tema: "Ley de salud de Galicia y Sergas",
    enunciado: "La Ley gallega 3/2001 regula:",
    opciones: ["La violencia de género", "El consentimiento informado y la historia clínica de los pacientes", "El empleo público gallego", "La salud de Galicia en general"],
    correcta: "B",
    explicacion: "Se estudia en el tema 7. (Ley 3/2001)"
  },
  {
    tema: "Ley de salud de Galicia y Sergas",
    enunciado: "El personal estatutario del Sergas, en lo relativo a la selección y provisión de plazas, se rige además por:",
    opciones: ["El Código Civil", "El Decreto 206/2005 de Galicia, de provisión de plazas de personal estatutario", "Los convenios de empresas privadas", "La Ley 8/2008 exclusivamente"],
    correcta: "B",
    explicacion: "Se estudia en el tema 6. (Decreto 206/2005)"
  },
  {
    tema: "Ley de salud de Galicia y Sergas",
    enunciado: "La participación de los ciudadanos en el sistema público de salud de Galicia se realiza a través de:",
    opciones: ["Las urgencias", "Las listas de espera", "Órganos de participación como consejos de salud y asociaciones de pacientes", "Votaciones en cada hospital"],
    correcta: "C",
    explicacion: "Participación comunitaria. (Ley 8/2008; LGS)"
  },
  {
    tema: "Ley de salud de Galicia y Sergas",
    enunciado: "La atención sociosanitaria se dirige a:",
    opciones: ["Solo menores de edad", "Personas que necesitan a la vez atención sanitaria y social, como mayores dependientes o enfermos crónicos", "Solo turistas", "Solo profesionales sanitarios"],
    correcta: "B",
    explicacion: "Coordinación sanitaria y social. (Ley 8/2008; Ley 16/2003)"
  },
  {
    tema: "Ley de salud de Galicia y Sergas",
    enunciado: "La hospitalización a domicilio (HADO) consiste en:",
    opciones: ["Enviar al paciente a una residencia privada", "Cerrar camas del hospital", "Atender solo por teléfono", "Prestar cuidados de nivel hospitalario en el domicilio del paciente"],
    correcta: "D",
    explicacion: "Alternativa a la hospitalización convencional. (Organización sanitaria en Galicia)"
  },
  {
    tema: "Ley de salud de Galicia y Sergas",
    enunciado: "La Escola Galega de Administración Sanitaria (FEGAS) se dedica principalmente a:",
    opciones: ["Las urgencias", "La gestión de las farmacias", "La donación de órganos", "La formación de los profesionales del sistema sanitario público gallego"],
    correcta: "D",
    explicacion: "Fundación pública de formación. (Sistema público de salud de Galicia)"
  },
  {
    tema: "Ley de salud de Galicia y Sergas",
    enunciado: "La responsabilidad de garantizar el derecho a la protección de la salud en Galicia corresponde, según la Ley 8/2008, a:",
    opciones: ["Los ciudadanos individualmente", "Las empresas privadas", "Las ONG", "Las administraciones públicas sanitarias de Galicia"],
    correcta: "D",
    explicacion: "Responsabilidad pública. (Ley 8/2008)"
  },
  {
    tema: "Ley de salud de Galicia y Sergas",
    enunciado: "El servicio de atención al paciente (o al usuario) de un hospital del Sergas se encarga de:",
    opciones: ["Hacer el triaje de urgencias", "Informar, orientar y tramitar las reclamaciones, quejas y sugerencias de los usuarios", "Hacer las autopsias", "Dispensar medicación"],
    correcta: "B",
    explicacion: "Atención e información al usuario. (Organización hospitalaria)"
  },
  {
    tema: "Ley de salud de Galicia y Sergas",
    enunciado: "Las reclamaciones de los usuarios del Sergas deben ser respondidas:",
    opciones: ["Por escrito, en el plazo establecido por la normativa", "Nunca", "Verbalmente por el celador", "Solo si son graves"],
    correcta: "A",
    explicacion: "Derecho a obtener respuesta. (Normativa gallega de reclamaciones)"
  },
  {
    tema: "Ley de salud de Galicia y Sergas",
    enunciado: "La Ley 8/2008 reconoce el derecho de los usuarios a recibir información sobre:",
    opciones: ["Los servicios disponibles, sus requisitos y los derechos y deberes", "Las nóminas del personal", "Los datos de otros pacientes", "El presupuesto de cada servicio"],
    correcta: "A",
    explicacion: "Derecho a la información sobre servicios. (Ley 8/2008)"
  },
  {
    tema: "Ley de salud de Galicia y Sergas",
    enunciado: "Entre los deberes de los usuarios del sistema público de salud de Galicia está el de:",
    opciones: ["Pagar cada consulta", "Tratar con respeto al personal y a los demás usuarios y hacer buen uso de las instalaciones", "Acudir a urgencias en lugar de al centro de salud", "Donar sangre"],
    correcta: "B",
    explicacion: "Deberes de respeto y buen uso. (Ley 8/2008)"
  },
  {
    tema: "Ley de salud de Galicia y Sergas",
    enunciado: "En los centros del Sergas, el gallego:",
    opciones: ["Está prohibido", "Solo se usa en Santiago", "Es la única lengua permitida", "Es lengua oficial y los ciudadanos tienen derecho a ser atendidos en gallego o castellano"],
    correcta: "D",
    explicacion: "Cooficialidad. (EAG, art. 5; Ley 3/1983)"
  },
  {
    tema: "Ley de salud de Galicia y Sergas",
    enunciado: "El documento de instrucciones previas en Galicia se inscribe en:",
    opciones: ["El registro civil", "El registro gallego de instrucciones previas sobre cuidados y tratamiento de la salud", "El registro de la propiedad", "La historia clínica en papel exclusivamente"],
    correcta: "B",
    explicacion: "Conectado con el registro nacional. (Normativa gallega de instrucciones previas)"
  },
  {
    tema: "Ley de salud de Galicia y Sergas",
    enunciado: "En Galicia, el organismo encargado de la gestión de la logística y las compras centralizadas del Sergas forma parte de:",
    opciones: ["El Parlamento", "Los ayuntamientos", "La estructura del propio Servizo Galego de Saúde", "El Ministerio de Hacienda"],
    correcta: "C",
    explicacion: "Plataforma de compras y logística del Sergas. (Organización del Sergas)"
  },
  {
    tema: "Ley de salud de Galicia y Sergas",
    enunciado: "Las gerencias de las áreas sanitarias del Sergas dirigen:",
    opciones: ["Los servicios sociales municipales", "Los colegios", "Solo los hospitales de Santiago", "Los centros y servicios de atención primaria y hospitalaria de su área"],
    correcta: "D",
    explicacion: "Gestión integrada en cada área. (Organización del Sergas)"
  },
  {
    tema: "Ley de salud de Galicia y Sergas",
    enunciado: "La Consellería de Sanidade ejerce, además de la dirección del Sergas, funciones de:",
    opciones: ["Agricultura", "Educación primaria", "Salud pública, planificación, autorización, inspección y ordenación sanitaria", "Gestión de carreteras"],
    correcta: "C",
    explicacion: "Funciones de autoridad sanitaria. (Ley 8/2008)"
  },
  {
    tema: "Ley de salud de Galicia y Sergas",
    enunciado: "La vigilancia epidemiológica en Galicia corresponde a:",
    opciones: ["Los celadores", "La Dirección General de Salud Pública de la Consellería de Sanidade", "Los hospitales privados", "Los ayuntamientos en exclusiva"],
    correcta: "B",
    explicacion: "Función de salud pública. (Ley 8/2008; Ley 33/2011)"
  },
  {
    tema: "Ley de salud de Galicia y Sergas",
    enunciado: "Según la Ley 8/2008, el sistema público de salud de Galicia actúa conforme al principio de:",
    opciones: ["Competencia entre hospitales públicos sin coordinación", "Integración de todos los recursos sanitarios públicos", "Separación entre atención primaria y hospitalaria sin coordinación", "Pago por acto médico"],
    correcta: "B",
    explicacion: "Dispositivo único coordinado. (Ley 8/2008; LGS art. 46)"
  },
  {
    tema: "Ley de salud de Galicia y Sergas",
    enunciado: "En Galicia, la competencia en ordenación farmacéutica (autorización de oficinas de farmacia) corresponde a:",
    opciones: ["Los colegios de farmacéuticos en exclusiva", "Los ayuntamientos", "El Estado", "La Comunidad Autónoma"],
    correcta: "D",
    explicacion: "Galicia regula la planificación de oficinas de farmacia. (EAG; Ley 5/1999 de ordenación farmacéutica de Galicia)"
  },
  {
    tema: "Ley de salud de Galicia y Sergas",
    enunciado: "El Plan de Salud de Galicia lo aprueba:",
    opciones: ["El Valedor do Pobo", "El Ministerio de Sanidad", "Cada hospital", "El Consello de la Xunta, a propuesta de la Consellería de Sanidade"],
    correcta: "D",
    explicacion: "Instrumento estratégico de la política sanitaria. (Ley 8/2008)"
  },
  {
    tema: "Ley de salud de Galicia y Sergas",
    enunciado: "El Sergas, como organismo autónomo, dispone de:",
    opciones: ["Ingresos solo de los pacientes", "Presupuesto de la Unión Europea exclusivamente", "Presupuesto propio dentro de los presupuestos generales de la Comunidad Autónoma", "Ningún presupuesto"],
    correcta: "C",
    explicacion: "Gestión económica propia. (Ley 8/2008)"
  },
  {
    tema: "Ley de salud de Galicia y Sergas",
    enunciado: "Los hospitales del Sergas se clasifican, según su tamaño y complejidad, en:",
    opciones: ["Hospitales de día exclusivamente", "Hospitales militares y civiles", "Complejos hospitalarios universitarios, hospitales de área y hospitales comarcales", "Hospitales A, B y C de pago"],
    correcta: "C",
    explicacion: "Distintos niveles de complejidad. (Organización sanitaria en Galicia)"
  },
  {
    tema: "Ley de salud de Galicia y Sergas",
    enunciado: "El hospital de referencia del área sanitaria de Vigo es:",
    opciones: ["El Hospital de Montecelo", "El Hospital Arquitecto Marcide", "El Hospital Clínico de Santiago", "El Hospital Álvaro Cunqueiro"],
    correcta: "D",
    explicacion: "Montecelo (Gran Montecelo) es de Pontevedra; Marcide, de Ferrol. (Organización del Sergas)"
  },
  {
    tema: "Ley de salud de Galicia y Sergas",
    enunciado: "El sistema público de salud de Galicia garantiza la atención sanitaria en condiciones de:",
    opciones: ["Preferencia por residencia en la capital", "Igualdad efectiva, sin discriminación", "Preferencia de los funcionarios", "Preferencia según el nivel de renta"],
    correcta: "B",
    explicacion: "Equidad. (Ley 8/2008; LGS art. 3)"
  },
  {
    tema: "Ley de salud de Galicia y Sergas",
    enunciado: "En Galicia, la atención de urgencias hospitalarias se presta en:",
    opciones: ["Los centros de salud por la mañana exclusivamente", "Los ayuntamientos", "Las farmacias", "Los servicios de urgencias de los hospitales, abiertos las 24 horas"],
    correcta: "D",
    explicacion: "Urgencias hospitalarias. (Organización sanitaria en Galicia)"
  },
  {
    tema: "Ley de salud de Galicia y Sergas",
    enunciado: "Según la Ley 8/2008, las actuaciones de salud pública incluyen, entre otras:",
    opciones: ["La gestión de nóminas", "La seguridad ciudadana", "La contratación pública", "La vigilancia epidemiológica, la promoción de la salud y la prevención de enfermedades"],
    correcta: "D",
    explicacion: "Salud pública. (Ley 8/2008; Ley 33/2011)"
  },
  {
    tema: "Ley de salud de Galicia y Sergas",
    enunciado: "La autorización de centros y servicios sanitarios a nivel estatal se rige por las bases del:",
    opciones: ["Real Decreto 487/1997", "Real Decreto 836/2012", "Real Decreto 1030/2006", "Real Decreto 1277/2003"],
    correcta: "D",
    explicacion: "Bases generales sobre autorización de centros, servicios y establecimientos sanitarios. (RD 1277/2003)"
  },
  {
    tema: "Ley de salud de Galicia y Sergas",
    enunciado: "La cartera de servicios del Sergas incluye:",
    opciones: ["La cartera común del Sistema Nacional de Salud y, en su caso, una cartera complementaria propia de Galicia", "Solo los servicios que elija cada paciente", "Solo la atención urgente", "Solo servicios privados"],
    correcta: "A",
    explicacion: "Las comunidades pueden aprobar carteras complementarias. (Ley 16/2003; RD 1030/2006)"
  },
  {
    tema: "Ley de salud de Galicia y Sergas",
    enunciado: "La telemedicina y la telesalud en el Sergas permiten:",
    opciones: ["Recetar sin historia clínica", "Sustituir siempre la consulta presencial", "Dar el alta sin médico", "Atender o seguir a pacientes a distancia mediante tecnologías de la información"],
    correcta: "D",
    explicacion: "Consultas no presenciales y seguimiento remoto. (Organización sanitaria en Galicia)"
  },
  {
    tema: "Ley de salud de Galicia y Sergas",
    enunciado: "En Galicia, la atención primaria se organiza territorialmente en:",
    opciones: ["Comarcas judiciales", "Zonas sanitarias o zonas básicas de salud, con su centro de salud", "Parroquias eclesiásticas", "Distritos postales"],
    correcta: "B",
    explicacion: "Marco territorial de la atención primaria. (LGS, art. 62; Ley 8/2008)"
  },
  {
    tema: "Ley de salud de Galicia y Sergas",
    enunciado: "La coordinación entre atención primaria y hospitalaria en el Sergas tiene como objetivo:",
    opciones: ["Aumentar las listas de espera", "La continuidad asistencial del paciente", "Separar a los profesionales", "Reducir la información al paciente"],
    correcta: "B",
    explicacion: "Continuidad asistencial. (Ley 8/2008)"
  },
  {
    tema: "Ley de salud de Galicia y Sergas",
    enunciado: "El Consejo Interterritorial del Sistema Nacional de Salud cuenta con la participación de Galicia a través de:",
    opciones: ["El Presidente del Parlamento", "El titular de la consellería de sanidad", "Un celador elegido por sorteo", "El gerente de un hospital"],
    correcta: "B",
    explicacion: "Cada comunidad está representada por su consejero de sanidad. (Ley 16/2003)"
  },
  {
    tema: "Ley de salud de Galicia y Sergas",
    enunciado: "La Ley de salud de Galicia se aplica a:",
    opciones: ["Solo a los hospitales", "Todos los ciudadanos y al conjunto de actuaciones sanitarias en el territorio de Galicia", "Solo a los profesionales sanitarios", "Solo a los gallegos residentes fuera"],
    correcta: "B",
    explicacion: "Ámbito de aplicación territorial. (Ley 8/2008)"
  },
  {
    tema: "Ley de salud de Galicia y Sergas",
    origen: "Examen 2024 · Común C2",
    enunciado: "Según la Ley de Salud de Galicia, señale cuál de los/as siguientes no tendrá la condición de autoridad sanitaria:",
    opciones: ["Alcaldes o alcaldesas", "Gerente del hospital", "Persona titular de la consellería con competencias en materia de sanidad", "Consello de la Xunta de Galicia"],
    correcta: "B",
    explicacion: "La Ley de Salud de Galicia da condición de autoridad sanitaria al Consello da Xunta, a la persona titular de la consellería y a alcaldes y alcaldesas, pero no al gerente de un hospital."
  },
  // ===================================================================
  //  ESTATUTO MARCO (113 preguntas)
  // ===================================================================
  {
    tema: "Estatuto Marco",
    enunciado: "El Estatuto Marco del personal estatutario de los servicios de salud se aprobó por:",
    opciones: ["La Ley 2/2015, de 29 de abril", "La Ley 14/1986, de 25 de abril", "La Ley 55/2003, de 16 de diciembre", "El Real Decreto Legislativo 5/2015"],
    correcta: "C",
    explicacion: "Ojo: está en tramitación un nuevo Estatuto Marco; comprueba si se ha aprobado antes del examen. (Ley 55/2003)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "El objeto del Estatuto Marco es establecer las bases reguladoras de:",
    opciones: ["La relación laboral común de los trabajadores sanitarios privados", "El régimen de los funcionarios de la Xunta", "La relación funcionarial especial del personal estatutario de los servicios de salud", "Los colegios profesionales"],
    correcta: "C",
    explicacion: "Relación funcionarial especial. (Ley 55/2003, art. 1)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "El Estatuto Marco se aplica al personal estatutario que desempeña su función en:",
    opciones: ["Los hospitales privados", "Las mutuas de accidentes", "Los centros e instituciones sanitarias de los servicios de salud de las comunidades autónomas y de la Administración General del Estado", "Las residencias privadas"],
    correcta: "C",
    explicacion: "Ámbito de aplicación. (Ley 55/2003, art. 2)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "Según el Estatuto Marco, el personal estatutario se clasifica atendiendo a:",
    opciones: ["La función desarrollada, el nivel del título exigido y el tipo de nombramiento", "El salario y el turno", "El centro de trabajo", "La antigüedad y la edad"],
    correcta: "A",
    explicacion: "Tres criterios de clasificación. (Ley 55/2003, art. 5)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "Por la función desarrollada, el personal estatutario se clasifica en:",
    opciones: ["Personal estatutario sanitario y personal estatutario de gestión y servicios", "Personal directivo y no directivo", "Personal fijo y temporal", "Personal funcionario y laboral"],
    correcta: "A",
    explicacion: "Sanitario y de gestión y servicios. (Ley 55/2003, arts. 6 y 7)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "Los celadores pertenecen, según el Estatuto Marco, al personal estatutario:",
    opciones: ["De gestión y servicios, en el grupo de otro personal", "Sanitario de formación profesional", "De gestión y servicios de formación universitaria", "Sanitario de formación universitaria"],
    correcta: "A",
    explicacion: "«Otro personal»: categorías para las que se exige certificado de escolaridad o equivalente. (Ley 55/2003, art. 7)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "El personal estatutario sanitario de formación profesional comprende:",
    opciones: ["Personal administrativo", "Licenciados y diplomados", "Celadores y pinches", "Técnicos superiores y técnicos"],
    correcta: "D",
    explicacion: "Por ejemplo, técnicos en cuidados de enfermería. (Ley 55/2003, art. 6)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "Por el tipo de nombramiento, el personal estatutario se clasifica en:",
    opciones: ["Fijo y temporal", "Sanitario y no sanitario", "Interino y eventual exclusivamente", "Universitario y no universitario"],
    correcta: "A",
    explicacion: "Fijo y temporal. (Ley 55/2003, arts. 8 y 9)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "Es personal estatutario fijo el que:",
    opciones: ["Ha sido nombrado interino", "Tiene contrato indefinido laboral", "Una vez superado el correspondiente proceso selectivo, obtiene un nombramiento para el desempeño con carácter permanente de las funciones", "Trabaja más de 5 años en el mismo puesto"],
    correcta: "C",
    explicacion: "Superación del proceso selectivo y nombramiento. (Ley 55/2003, art. 8)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "El personal estatutario temporal puede ser nombrado:",
    opciones: ["Solo de interinidad", "De interinidad, de carácter eventual o de sustitución", "Solo eventual", "De prácticas o en formación exclusivamente"],
    correcta: "B",
    explicacion: "Tres modalidades. (Ley 55/2003, art. 9)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "El nombramiento de sustitución se expide:",
    opciones: ["Para cubrir una plaza vacante", "Para atender las funciones del personal fijo o temporal durante sus ausencias con derecho a reserva de plaza (vacaciones, permisos, bajas...)", "Para un programa temporal", "Para siempre"],
    correcta: "B",
    explicacion: "Cuando el titular vuelve, cesa el sustituto. (Ley 55/2003, art. 9)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "El nombramiento de interinidad se expide para:",
    opciones: ["Un programa de 6 meses", "El desempeño de una plaza vacante de los centros o servicios de salud, cuando sea necesario atender las funciones correspondientes", "Sustituir a un trabajador de vacaciones", "Cubrir una baja por maternidad"],
    correcta: "B",
    explicacion: "Plaza vacante. (Ley 55/2003, art. 9)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "El nombramiento eventual se expide, entre otros supuestos, para:",
    opciones: ["Cubrir una plaza vacante", "Ocupar un puesto directivo", "Sustituir a un trabajador en excedencia", "La prestación de servicios determinados de naturaleza temporal, coyuntural o extraordinaria"],
    correcta: "D",
    explicacion: "También para garantizar el funcionamiento permanente y continuado de los centros. (Ley 55/2003, art. 9)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "Según el Estatuto Marco, la condición de personal estatutario fijo se adquiere por:",
    opciones: ["Solo por firmar el contrato", "Solo por superar el examen", "Por antigüedad", "Superación del proceso selectivo, nombramiento por el órgano competente publicado en el diario oficial e incorporación a una plaza en el plazo establecido"],
    correcta: "D",
    explicacion: "Tres requisitos acumulativos. (Ley 55/2003, art. 20)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "El plazo de incorporación a la plaza tras el nombramiento como personal fijo es, salvo que la convocatoria establezca otro, de:",
    opciones: ["Diez días", "Un mes", "Un año", "Tres meses"],
    correcta: "B",
    explicacion: "Si no se incorpora sin causa justificada, decae su derecho. (Ley 55/2003, art. 20)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "¿Cuál de las siguientes es una causa de pérdida de la condición de personal estatutario fijo?",
    opciones: ["La sanción disciplinaria firme de separación del servicio", "Un traslado a otro centro", "Una excedencia por cuidado de hijos", "Una baja por enfermedad"],
    correcta: "A",
    explicacion: "Otras: renuncia, pérdida de la nacionalidad, inhabilitación, jubilación e incapacidad permanente. (Ley 55/2003, art. 21)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "La renuncia a la condición de personal estatutario debe solicitarse con una antelación mínima de:",
    opciones: ["Un mes", "15 días", "Tres meses", "Un año"],
    correcta: "B",
    explicacion: "La renuncia no impide volver a participar en procesos selectivos. (Ley 55/2003, art. 22)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "La jubilación forzosa del personal estatutario se declara, con carácter general, al cumplir:",
    opciones: ["60 años", "67 años", "70 años", "65 años"],
    correcta: "D",
    explicacion: "El Estatuto Marco fija 65 años, con posibilidad de prolongación voluntaria hasta los 70 si se tiene capacidad funcional. Ojo: puede cambiar con el nuevo Estatuto Marco. (Ley 55/2003, art. 26)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "La prolongación de la permanencia en servicio activo del personal estatutario puede llegar, como máximo, hasta los:",
    opciones: ["72 años", "67 años", "68 años", "70 años"],
    correcta: "D",
    explicacion: "Si el interesado la solicita y tiene capacidad funcional, según las necesidades de la organización. (Ley 55/2003, art. 26)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "¿Cuál de los siguientes es un derecho individual del personal estatutario según el Estatuto Marco?",
    opciones: ["El cambio de categoría sin proceso selectivo", "La formación continuada adecuada a la función desempeñada", "La percepción de pagas extraordinarias mensuales", "La libre elección del horario"],
    correcta: "B",
    explicacion: "Otros: estabilidad, carrera profesional, movilidad voluntaria, protección de la salud laboral... (Ley 55/2003, art. 17)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "La estabilidad en el empleo es un derecho del personal estatutario de carácter:",
    opciones: ["Ninguno, no está reconocido", "Individual", "Sindical", "Colectivo"],
    correcta: "B",
    explicacion: "Derecho individual. (Ley 55/2003, art. 17)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "¿Cuál de los siguientes es un derecho colectivo del personal estatutario?",
    opciones: ["El derecho de huelga, garantizando el mantenimiento de los servicios que resulten esenciales", "La movilidad voluntaria", "La carrera profesional", "La formación continuada"],
    correcta: "A",
    explicacion: "Derechos colectivos: libre sindicación, negociación colectiva, huelga, conflictos colectivos, reunión y representación. (Ley 55/2003, art. 18)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "La libre sindicación es un derecho del personal estatutario de carácter:",
    opciones: ["Individual", "Disciplinario", "Retributivo", "Colectivo"],
    correcta: "D",
    explicacion: "Derecho colectivo. (Ley 55/2003, art. 18)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "¿Cuál de los siguientes es un deber del personal estatutario?",
    opciones: ["Elegir sus funciones", "Informar a los medios de los datos de los pacientes", "Aceptar regalos de los pacientes", "Mantener la debida reserva y confidencialidad de la información y documentación relativa a los centros sanitarios y a los usuarios"],
    correcta: "D",
    explicacion: "Deber de confidencialidad. (Ley 55/2003, art. 19)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "Según el Estatuto Marco, ante situaciones de urgencia o catástrofe, el personal estatutario debe:",
    opciones: ["Prestar colaboración profesional cuando así sea requerido por las autoridades, aunque no sea su función habitual", "Esperar a la orden del sindicato", "Abandonar el centro", "Limitarse estrictamente a sus funciones"],
    correcta: "A",
    explicacion: "Deber de colaboración en situaciones extraordinarias. (Ley 55/2003, art. 19)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "Según el Estatuto Marco, el personal estatutario tiene el deber de:",
    opciones: ["Mantener debidamente actualizados los conocimientos y aptitudes necesarios para el correcto ejercicio de su profesión", "Pagar su formación obligatoriamente", "Hacer horas extra sin límite", "Cambiar de categoría cada 5 años"],
    correcta: "A",
    explicacion: "Deber de actualización. (Ley 55/2003, art. 19)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "Según el Estatuto Marco, el personal estatutario NO podrá:",
    opciones: ["Participar en la negociación colectiva", "Aceptar remuneraciones o gratificaciones de usuarios por servicios prestados", "Pedir la excedencia", "Recibir formación"],
    correcta: "B",
    explicacion: "Deber de no aceptar dádivas. (Ley 55/2003, art. 19)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "Otro deber del personal estatutario es:",
    opciones: ["Hacer guardias voluntarias", "Residir en la misma localidad del centro", "Afiliarse a un sindicato", "Respetar la Constitución, el Estatuto de Autonomía y el resto del ordenamiento jurídico"],
    correcta: "D",
    explicacion: "Primer deber del art. 19. (Ley 55/2003, art. 19)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "La selección del personal estatutario fijo se rige por los principios de:",
    opciones: ["Antigüedad y amistad", "Afiliación sindical", "Libre designación", "Igualdad, mérito, capacidad y publicidad"],
    correcta: "D",
    explicacion: "Principios constitucionales de acceso. (Ley 55/2003, art. 29; CE art. 103.3)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "Según el Estatuto Marco, el sistema de selección del personal estatutario fijo será, con carácter general:",
    opciones: ["La libre designación", "La oposición", "El concurso-oposición", "El concurso"],
    correcta: "C",
    explicacion: "Podrá usarse la oposición o el concurso cuando las características lo aconsejen. (Ley 55/2003, art. 31.1)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "En el sistema de concurso-oposición, la fase de concurso consiste en:",
    opciones: ["Hacer un examen tipo test", "Valorar los méritos de los aspirantes (experiencia, formación...)", "Sortear las plazas", "Hacer una entrevista personal"],
    correcta: "B",
    explicacion: "La fase de oposición son las pruebas. (Ley 55/2003, art. 31)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "La promoción interna del personal estatutario consiste en:",
    opciones: ["Cambiar de turno", "Acceder a nombramientos de otra categoría del mismo o superior nivel de titulación mediante proceso selectivo", "Cambiar de centro de trabajo", "Ascender por antigüedad sin proceso"],
    correcta: "B",
    explicacion: "Requiere estar en servicio activo con dos años de antigüedad en la categoría de procedencia, en general. (Ley 55/2003, art. 34)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "Para participar en la promoción interna, el personal estatutario debe, en general, tener una antigüedad mínima en la categoría de procedencia de:",
    opciones: ["Seis meses", "Dos años", "Cinco años", "Diez años"],
    correcta: "B",
    explicacion: "Además de ostentar la titulación requerida. (Ley 55/2003, art. 34)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "La provisión de plazas del personal estatutario fijo se realiza, entre otros, mediante:",
    opciones: ["Elección directa por el jefe de servicio", "Sorteo", "Concurso de traslados, libre designación, reingreso al servicio activo y movilidad por razón del servicio", "Herencia"],
    correcta: "C",
    explicacion: "Sistemas de provisión. (Ley 55/2003, art. 36)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "La libre designación se utiliza para proveer:",
    opciones: ["Puestos de carácter directivo o de jefatura que se determinen", "Todas las plazas de celador", "Los puestos de nuevo ingreso", "Las plazas de interinos"],
    correcta: "A",
    explicacion: "Con convocatoria pública. (Ley 55/2003, art. 36)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "El concurso de traslados en los servicios de salud se convoca, preferentemente:",
    opciones: ["Solo cuando lo pide un trabajador", "Cada diez años", "Con periodicidad bianual (cada dos años)", "Una sola vez en la vida laboral"],
    correcta: "C",
    explicacion: "Movilidad voluntaria del personal fijo. (Ley 55/2003, art. 37)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "Las retribuciones del personal estatutario se dividen en:",
    opciones: ["Fijas y voluntarias", "Mensuales y anuales exclusivamente", "Básicas y complementarias", "Brutas y en especie"],
    correcta: "C",
    explicacion: "Estructura retributiva. (Ley 55/2003, art. 41)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "Las retribuciones básicas del personal estatutario son:",
    opciones: ["Dietas y kilometraje", "Sueldo, trienios y pagas extraordinarias", "Complemento de destino, específico y productividad", "Atención continuada y carrera profesional"],
    correcta: "B",
    explicacion: "Iguales en todos los servicios de salud. (Ley 55/2003, art. 42)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "Los trienios consisten en una cantidad que se percibe por:",
    opciones: ["Cada guardia", "Cada noche trabajada", "Cada año de servicios", "Cada tres años de servicios"],
    correcta: "D",
    explicacion: "Según la categoría (grupo o subgrupo). (Ley 55/2003, art. 42)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "Las pagas extraordinarias del personal estatutario son:",
    opciones: ["Doce, una al mes", "Dos al año, que se perciben normalmente en junio y diciembre", "Cuatro al año", "Una al año"],
    correcta: "B",
    explicacion: "Dos pagas extraordinarias anuales. (Ley 55/2003, art. 42)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "¿Cuál de las siguientes es una retribución complementaria del personal estatutario?",
    opciones: ["El complemento de atención continuada", "Los trienios", "El sueldo", "Las pagas extraordinarias"],
    correcta: "A",
    explicacion: "Retribuciones complementarias: destino, específico, productividad, atención continuada y carrera. (Ley 55/2003, art. 43)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "El complemento de atención continuada retribuye:",
    opciones: ["La formación", "Los años de servicio", "La titulación", "La atención a los usuarios de forma permanente y continuada (guardias, noches, festivos...)"],
    correcta: "D",
    explicacion: "Atención continuada. (Ley 55/2003, art. 43)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "El complemento de productividad retribuye:",
    opciones: ["La antigüedad", "La jornada ordinaria", "El especial rendimiento, el interés o la iniciativa y la participación en programas o el cumplimiento de objetivos", "El nivel del puesto"],
    correcta: "C",
    explicacion: "Vinculado a objetivos. (Ley 55/2003, art. 43)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "El complemento de destino corresponde a:",
    opciones: ["La antigüedad", "Las guardias", "El nivel del puesto que se desempeña", "Los objetivos"],
    correcta: "C",
    explicacion: "Nivel del puesto. (Ley 55/2003, art. 43)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "El complemento específico retribuye:",
    opciones: ["Las horas extra", "La formación", "La antigüedad", "Las condiciones particulares de algunos puestos (dificultad técnica, responsabilidad, dedicación, peligrosidad, penosidad)"],
    correcta: "D",
    explicacion: "Condiciones especiales del puesto. (Ley 55/2003, art. 43)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "El complemento de carrera retribuye:",
    opciones: ["Los festivos", "El grado alcanzado en la carrera profesional", "Las noches", "La productividad del servicio"],
    correcta: "B",
    explicacion: "Carrera profesional. (Ley 55/2003, art. 43)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "Según el Estatuto Marco, la jornada de trabajo se clasifica en:",
    opciones: ["Mañana, tarde y noche", "Completa y parcial exclusivamente", "Laborable y festiva", "Jornada ordinaria, jornada complementaria y régimen de jornada especial"],
    correcta: "D",
    explicacion: "Tipos de jornada. (Ley 55/2003, arts. 47-49)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "La jornada complementaria se refiere a:",
    opciones: ["Las guardias, para garantizar la atención continuada", "Las vacaciones", "Las horas de formación", "Los permisos"],
    correcta: "A",
    explicacion: "Típica del personal facultativo y otros colectivos. (Ley 55/2003, art. 48)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "Según el Estatuto Marco, la duración máxima conjunta de la jornada ordinaria y complementaria es de:",
    opciones: ["40 horas semanales en todo caso", "35 horas semanales", "48 horas semanales de trabajo efectivo de promedio en cómputo semestral", "60 horas semanales"],
    correcta: "C",
    explicacion: "Salvo que se pacte el régimen de jornada especial. (Ley 55/2003, art. 48.2)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "Cuando la jornada de trabajo continuada supere las 6 horas, el personal tiene derecho a una pausa de al menos:",
    opciones: ["15 minutos, computable como trabajo efectivo", "5 minutos", "30 minutos no retribuidos", "1 hora"],
    correcta: "A",
    explicacion: "Pausa en el trabajo. (Ley 55/2003, art. 50)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "Según el Estatuto Marco, entre el fin de una jornada y el comienzo de la siguiente debe haber un descanso mínimo ininterrumpido de:",
    opciones: ["24 horas", "8 horas", "12 horas", "6 horas"],
    correcta: "C",
    explicacion: "Descanso diario, con excepciones compensables. (Ley 55/2003, art. 51)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "El descanso semanal del personal estatutario es, como mínimo, de un periodo ininterrumpido con una duración media de:",
    opciones: ["72 horas al mes", "12 horas semanales", "48 horas cada día", "24 horas semanales, más el descanso diario de 12 horas"],
    correcta: "D",
    explicacion: "Cómputo en periodos de referencia. (Ley 55/2003, art. 52)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "Según el Estatuto Marco, el periodo de vacaciones anuales retribuidas del personal estatutario no será inferior a:",
    opciones: ["30 días naturales", "45 días naturales", "15 días hábiles", "20 días naturales"],
    correcta: "A",
    explicacion: "Hoy suele disfrutarse en días hábiles según la normativa y los acuerdos de cada servicio de salud. (Ley 55/2003, art. 53)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "Las vacaciones anuales retribuidas:",
    opciones: ["Solo se disfrutan en agosto", "Se pierden si no se piden en enero", "No pueden sustituirse por una compensación económica, salvo en caso de finalización de la relación de servicios", "Pueden cambiarse siempre por dinero"],
    correcta: "C",
    explicacion: "Salvo cese. (Ley 55/2003, art. 53.2)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "¿Cuál de las siguientes es una situación administrativa del personal estatutario según el Estatuto Marco?",
    opciones: ["Situación de prácticas", "Servicios bajo otro régimen jurídico", "Situación de segunda actividad", "Situación de reserva activa"],
    correcta: "B",
    explicacion: "Situaciones: servicio activo, servicios especiales, servicios bajo otro régimen jurídico, excedencia por servicios en el sector público, excedencia voluntaria y suspensión de funciones. (Ley 55/2003, art. 62)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "Se encuentra en servicio activo el personal estatutario que:",
    opciones: ["Está en excedencia voluntaria", "Presta servicios en su condición de estatutario, o está de vacaciones, permisos o licencias", "Ha renunciado", "Ha sido suspendido"],
    correcta: "B",
    explicacion: "Situación ordinaria. (Ley 55/2003, art. 63)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "Para obtener la excedencia voluntaria por interés particular, el personal estatutario debe haber prestado servicios efectivos en cualquier Administración pública durante:",
    opciones: ["Los cinco años inmediatamente anteriores", "Un año", "Diez años", "No hay requisito"],
    correcta: "A",
    explicacion: "No devenga retribuciones ni computa a efectos de antigüedad. (Ley 55/2003, art. 67)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "Durante la excedencia voluntaria por interés particular, el personal estatutario:",
    opciones: ["No percibe retribuciones ni computa ese tiempo para trienios ni carrera", "Percibe la mitad del sueldo", "Acumula trienios", "Mantiene todas sus retribuciones"],
    correcta: "A",
    explicacion: "Situación sin retribución. (Ley 55/2003, art. 67)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "La excedencia por cuidado de familiares:",
    opciones: ["Está prohibida en el Sergas", "Es lo mismo que la excedencia voluntaria por interés particular", "Permite atender el cuidado de hijos o familiares dependientes, con reserva de puesto durante un tiempo", "Exige cinco años de servicios previos"],
    correcta: "C",
    explicacion: "Se aplica supletoriamente el régimen del EBEP. (Ley 55/2003; EBEP art. 89)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "La víctima de violencia de género que es personal estatutario tiene derecho a:",
    opciones: ["Solo a cambiar de turno", "Solo a una semana de permiso", "Una excedencia sin necesidad de tiempo mínimo de servicios, con reserva de puesto durante los primeros meses", "Ningún derecho especial"],
    correcta: "C",
    explicacion: "Para hacer efectiva su protección. (EBEP art. 89.5; LO 1/2004)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "La suspensión de funciones puede ser:",
    opciones: ["Temporal o indefinida a elección", "Provisional o firme", "Parcial o total", "Voluntaria o forzosa"],
    correcta: "B",
    explicacion: "La provisional se acuerda durante un expediente disciplinario o un proceso penal. (Ley 55/2003, art. 68)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "La suspensión provisional de funciones, como medida cautelar en un expediente disciplinario, no puede exceder, en general, de:",
    opciones: ["Un mes", "Seis meses", "Dos años", "Seis años"],
    correcta: "B",
    explicacion: "Salvo paralización del procedimiento imputable al interesado. (Ley 55/2003)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "Según el Estatuto Marco, las faltas disciplinarias se clasifican en:",
    opciones: ["Primera, segunda y tercera", "Muy graves, graves y leves", "Penales y administrativas", "Graves y leves"],
    correcta: "B",
    explicacion: "Tres tipos. (Ley 55/2003, art. 72)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "¿Cuál de las siguientes es una falta muy grave según el Estatuto Marco?",
    opciones: ["Una falta de puntualidad aislada", "El abandono del servicio", "Una incorrección leve con un compañero", "No llevar la tarjeta identificativa un día"],
    correcta: "B",
    explicacion: "Falta muy grave. (Ley 55/2003, art. 72.2)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "Toda actuación que suponga discriminación por razón de origen racial o étnico, religión, discapacidad, edad u orientación sexual es, según el Estatuto Marco, una falta:",
    opciones: ["Muy grave", "Leve", "Grave", "No es falta"],
    correcta: "A",
    explicacion: "Falta muy grave. (Ley 55/2003, art. 72.2)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "El notorio incumplimiento de sus funciones por parte del personal estatutario es una falta:",
    opciones: ["No es falta", "Leve", "Muy grave", "Grave en todo caso"],
    correcta: "C",
    explicacion: "Falta muy grave. (Ley 55/2003, art. 72.2)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "La sanción de separación del servicio solo puede imponerse por:",
    opciones: ["Faltas leves", "Faltas graves", "Faltas muy graves", "Cualquier falta"],
    correcta: "C",
    explicacion: "Es la sanción más grave. (Ley 55/2003, art. 73)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "La sanción de apercibimiento corresponde a:",
    opciones: ["Faltas leves", "Faltas graves", "Delitos", "Faltas muy graves"],
    correcta: "A",
    explicacion: "Sanción por faltas leves. (Ley 55/2003, art. 73)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "La suspensión de funciones como sanción por faltas muy graves tiene una duración de:",
    opciones: ["Hasta un mes", "Más de diez años", "Más de dos años y menos de seis", "Hasta seis meses"],
    correcta: "C",
    explicacion: "Por faltas graves, hasta dos años. (Ley 55/2003, art. 73)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "Las faltas muy graves prescriben, según el Estatuto Marco, a los:",
    opciones: ["Cuatro años", "Seis meses", "Dos años", "Un año"],
    correcta: "A",
    explicacion: "Muy graves: 4 años; graves: 2 años; leves: 6 meses. (Ley 55/2003, art. 74)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "Las faltas leves prescriben a los:",
    opciones: ["Seis meses", "Un mes", "Dos años", "Cuatro años"],
    correcta: "A",
    explicacion: "Faltas leves. (Ley 55/2003, art. 74)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "Las faltas graves prescriben a los:",
    opciones: ["Un año", "Cuatro años", "Dos años", "Seis meses"],
    correcta: "C",
    explicacion: "Faltas graves. (Ley 55/2003, art. 74)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "Las sanciones impuestas por faltas muy graves prescriben a los:",
    opciones: ["Un año", "Seis meses", "Cuatro años", "Dos años"],
    correcta: "C",
    explicacion: "Sanciones: muy graves 4 años, graves 2 años, leves 1 año. (Ley 55/2003, art. 74)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "Las sanciones impuestas por faltas leves prescriben al:",
    opciones: ["Mes", "Año", "Lustro", "Trimestre"],
    correcta: "B",
    explicacion: "Un año. (Ley 55/2003, art. 74)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "Para imponer sanciones por faltas graves o muy graves es necesario:",
    opciones: ["Solo la decisión del jefe inmediato", "Una denuncia de un paciente", "Nada especial", "Instruir el correspondiente procedimiento disciplinario"],
    correcta: "D",
    explicacion: "Con garantías para el interesado. (Ley 55/2003, art. 75)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "La traslación forzosa con cambio de localidad es una sanción por faltas:",
    opciones: ["Muy graves", "Leves", "No existe", "Graves"],
    correcta: "A",
    explicacion: "Sin derecho a indemnización y con prohibición temporal de concursar. (Ley 55/2003, art. 73)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "El régimen de incompatibilidades del personal estatutario es, con carácter general, el establecido para:",
    opciones: ["Los cargos electos", "Los trabajadores del sector privado", "Los trabajadores autónomos", "El personal al servicio de las administraciones públicas (Ley 53/1984)"],
    correcta: "D",
    explicacion: "Ley 53/1984 de incompatibilidades. (Ley 55/2003, art. 76)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "La negociación colectiva del personal estatutario se realiza en:",
    opciones: ["Cada planta del hospital", "Los tribunales", "Las mesas sectoriales de negociación de cada servicio de salud", "El Parlamento"],
    correcta: "C",
    explicacion: "En el Sergas, la Mesa Sectorial. (Ley 55/2003, art. 79)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "Los órganos unitarios de representación del personal estatutario son:",
    opciones: ["Las Juntas de Personal y los Delegados de Personal", "Los comités de empresa", "Los colegios profesionales", "Los consejos de administración"],
    correcta: "A",
    explicacion: "Representación unitaria. (Ley 55/2003, art. 78; EBEP)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "Los acuerdos alcanzados en la mesa sectorial que versen sobre materias competencia de los órganos de gobierno:",
    opciones: ["Solo valen para los sindicatos firmantes", "Necesitan su aprobación expresa y formal para ser válidos", "No tienen ningún valor", "Son válidos automáticamente"],
    correcta: "B",
    explicacion: "Diferencia entre pactos y acuerdos. (Ley 55/2003, art. 80)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "Los pactos alcanzados en la negociación colectiva versan sobre:",
    opciones: ["Materias que se correspondan con el ámbito competencial del órgano administrativo que los suscriba", "Materias reservadas a la ley", "Cualquier materia sin límite", "Solo salarios"],
    correcta: "A",
    explicacion: "Se aplican directamente al personal de su ámbito. (Ley 55/2003, art. 80)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "La carrera profesional del personal estatutario supone:",
    opciones: ["Acceder a puestos directivos", "Cambiar de categoría", "El derecho de los profesionales a progresar de forma individualizada como reconocimiento a su desarrollo profesional", "Cobrar horas extra"],
    correcta: "C",
    explicacion: "Se retribuye con el complemento de carrera. (Ley 55/2003, art. 40)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "El personal estatutario temporal:",
    opciones: ["Tiene los mismos derechos y deberes que el fijo, en lo que sea adecuado a la naturaleza de su condición", "No tiene ningún derecho", "No cobra trienios en ningún caso", "No puede afiliarse a un sindicato"],
    correcta: "A",
    explicacion: "Hoy también cobra trienios y accede a la carrera en muchos servicios de salud. (Ley 55/2003, art. 9; jurisprudencia)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "La movilidad por razón del servicio consiste en:",
    opciones: ["El cambio de puesto dentro del mismo centro o del ámbito que se determine, por necesidades del servicio", "Una sanción", "Un ascenso", "Un traslado a otro país"],
    correcta: "A",
    explicacion: "Se respeta la categoría y las retribuciones. (Ley 55/2003, art. 36)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "El reingreso al servicio activo del personal procedente de excedencia voluntaria se realiza:",
    opciones: ["Nunca, pierde la condición", "Mediante oposición", "Mediante su participación en concursos de traslados o, provisionalmente, en una plaza vacante si existe", "De forma automática a su antiguo puesto"],
    correcta: "C",
    explicacion: "Reingreso. (Ley 55/2003, art. 69)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "La situación de servicios especiales se aplica, por ejemplo, al personal estatutario que:",
    opciones: ["Está de vacaciones", "Es nombrado miembro del Gobierno o de los órganos de gobierno de las comunidades autónomas", "Está de baja médica", "Pide excedencia por interés particular"],
    correcta: "B",
    explicacion: "Con reserva de plaza y cómputo de antigüedad. (Ley 55/2003, art. 64; EBEP art. 87)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "La excedencia por servicios en el sector público se produce cuando el personal estatutario:",
    opciones: ["Pasa a prestar servicios en otra categoría o en otra administración pública", "Es sancionado", "Pide un permiso", "Se jubila"],
    correcta: "A",
    explicacion: "Por incompatibilidad con otro puesto público. (Ley 55/2003, art. 66)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "¿Cuál de las siguientes es una causa de pérdida de la condición de personal estatutario?",
    opciones: ["Una reducción de jornada", "Un cambio de domicilio", "La pena principal o accesoria de inhabilitación absoluta o especial para empleo o cargo público", "Un permiso sin sueldo"],
    correcta: "C",
    explicacion: "Causa de pérdida. (Ley 55/2003, art. 21)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "La incapacidad permanente que da lugar a la pérdida de la condición de personal estatutario es:",
    opciones: ["La incapacidad permanente total para la profesión, la absoluta o la gran invalidez", "La incapacidad parcial", "La incapacidad temporal", "Cualquier baja médica"],
    correcta: "A",
    explicacion: "Con posibilidad de recuperación si la incapacidad desaparece. (Ley 55/2003, art. 21)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "El derecho de huelga del personal estatutario está condicionado a:",
    opciones: ["La autorización del gerente", "El mantenimiento de los servicios esenciales para la comunidad", "Que no afecte a ningún paciente", "La aprobación del Parlamento"],
    correcta: "B",
    explicacion: "Servicios mínimos. (Ley 55/2003, art. 18; CE art. 28.2)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "Según el Estatuto Marco, la planificación de los recursos humanos en los servicios de salud se orienta a:",
    opciones: ["Eliminar la carrera profesional", "Contratar solo personal temporal", "Reducir el personal en todo caso", "Su adecuado dimensionamiento, distribución, estabilidad, desarrollo, formación y capacitación"],
    correcta: "D",
    explicacion: "Planificación de recursos humanos. (Ley 55/2003, art. 12)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "La creación, modificación y supresión de categorías de personal estatutario en cada servicio de salud se establece:",
    opciones: ["Por cada hospital libremente", "Por el servicio de salud, previa negociación en la mesa sectorial", "Por el Parlamento Europeo", "Por los sindicatos"],
    correcta: "B",
    explicacion: "Ordenación de categorías. (Ley 55/2003, art. 15)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "El personal estatutario tiene derecho a recibir protección eficaz en materia de:",
    opciones: ["Transporte privado", "Vivienda", "Seguridad y salud en el trabajo, así como sobre riesgos derivados del trabajo", "Inversiones financieras"],
    correcta: "C",
    explicacion: "Prevención de riesgos laborales. (Ley 55/2003, art. 17)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "El deber de informar a los usuarios corresponde al personal estatutario:",
    opciones: ["En el ámbito de sus funciones, respetando la confidencialidad y la normativa sobre información clínica", "Solo al personal administrativo", "Siempre, sobre cualquier dato clínico", "Nunca"],
    correcta: "A",
    explicacion: "Cada profesional informa dentro de sus competencias. (Ley 55/2003, art. 19)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "El personal estatutario debe cumplir con diligencia:",
    opciones: ["Solo las órdenes escritas", "Las órdenes de los pacientes", "Cualquier orden, aunque sea ilegal", "Las instrucciones recibidas de sus superiores jerárquicos en relación con las funciones propias de su nombramiento"],
    correcta: "D",
    explicacion: "Diligencia y obediencia debida dentro de sus funciones. (Ley 55/2003, art. 19)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "El Estatuto Marco se aplica supletoriamente, en lo no previsto, junto con:",
    opciones: ["El Estatuto Básico del Empleado Público y las normas de la función pública", "Ninguna otra norma", "El Código de Comercio", "El Estatuto de los Trabajadores exclusivamente"],
    correcta: "A",
    explicacion: "Aplicación supletoria. (Ley 55/2003, art. 2.2)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "La norma estatal básica sobre empleados públicos es:",
    opciones: ["El Estatuto de los Trabajadores", "El Real Decreto Legislativo 5/2015, texto refundido del Estatuto Básico del Empleado Público", "La Ley 55/2003", "La Ley 30/1984 en su totalidad"],
    correcta: "B",
    explicacion: "Se aplica al personal estatutario en lo que dispone expresamente. (RDL 5/2015 (EBEP))"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "El nombramiento del personal estatutario fijo se publica en:",
    opciones: ["La prensa local", "La web de cada hospital solamente", "El diario oficial correspondiente (en Galicia, el DOG)", "No se publica"],
    correcta: "C",
    explicacion: "Publicidad del nombramiento. (Ley 55/2003, art. 20)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "La relación del personal estatutario con el servicio de salud es de naturaleza:",
    opciones: ["Civil", "Funcionarial especial (estatutaria)", "Mercantil", "Laboral común"],
    correcta: "B",
    explicacion: "Por eso los conflictos se resuelven en la jurisdicción contencioso-administrativa. (Ley 55/2003, art. 1)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "La jornada del personal estatutario a turnos y su organización se establecen:",
    opciones: ["Mediante la programación funcional de cada centro, con negociación en los ámbitos correspondientes", "Por sorteo diario", "Por el paciente", "Libremente por cada trabajador"],
    correcta: "A",
    explicacion: "Organización del tiempo de trabajo. (Ley 55/2003, art. 46)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "El derecho a la movilidad voluntaria, promoviendo la cobertura de plazas mediante concursos abiertos y permanentes, es un derecho:",
    opciones: ["Disciplinario", "Colectivo", "Individual del personal estatutario", "Retributivo"],
    correcta: "C",
    explicacion: "Derecho individual. (Ley 55/2003, art. 17)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "El derecho de reunión del personal estatutario es un derecho:",
    opciones: ["Individual", "Colectivo", "Disciplinario", "Retributivo"],
    correcta: "B",
    explicacion: "Derecho colectivo. (Ley 55/2003, art. 18)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "Según el Estatuto Marco, el personal estatutario de gestión y servicios de formación universitaria incluye:",
    opciones: ["Celadores", "Licenciados o diplomados universitarios que desempeñan funciones de gestión o técnicas", "Técnicos en cuidados de enfermería", "Pinches"],
    correcta: "B",
    explicacion: "Por ejemplo, técnicos de la función administrativa. (Ley 55/2003, art. 7)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "El periodo de prueba, cuando lo prevea la convocatoria, se aplica al personal que:",
    opciones: ["Ha sido sancionado", "Está en excedencia", "Lleva más de 10 años", "Accede a la condición de fijo, para comprobar su aptitud"],
    correcta: "D",
    explicacion: "También puede aplicarse al personal temporal. (Ley 55/2003)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "Al personal estatutario que deja de prestar servicios por jubilación se le reconoce:",
    opciones: ["Nada", "El derecho a la pensión del régimen de Seguridad Social correspondiente", "Una plaza en el hospital", "Su sueldo íntegro de por vida a cargo del hospital"],
    correcta: "B",
    explicacion: "Protección de Seguridad Social. (Ley 55/2003, art. 17)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "El personal estatutario está encuadrado, a efectos de Seguridad Social, en:",
    opciones: ["MUFACE", "Un régimen privado", "El Régimen General de la Seguridad Social", "El Régimen de Autónomos"],
    correcta: "C",
    explicacion: "Régimen General. (Ley 55/2003, art. 17)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "El deber de cumplir el régimen de horarios y jornada del personal estatutario está recogido en:",
    opciones: ["Las disposiciones transitorias", "El artículo 1", "No existe", "El artículo 19 del Estatuto Marco (deberes)"],
    correcta: "D",
    explicacion: "Deber de cumplimiento horario. (Ley 55/2003, art. 19)"
  },
  {
    tema: "Estatuto Marco",
    enunciado: "Según el Estatuto Marco, ¿qué debe hacer el personal estatutario con los recursos y medios a su disposición?",
    opciones: ["Desperdiciarlos", "Utilizarlos de forma racional, con criterios de eficiencia", "Llevarlos a casa", "Usarlos para fines particulares"],
    correcta: "B",
    explicacion: "Uso eficiente de recursos. (Ley 55/2003, art. 19)"
  },
  {
    tema: "Estatuto Marco",
    origen: "Examen 2024 · Común C8",
    enunciado: "Según el Estatuto Marco, señale cuál de las siguientes opciones es falsa respecto a la situación de suspensión de funciones:",
    opciones: ["El personal declarado en situación de suspensión firme quedará privado, durante el tiempo de permanencia en la misma, del ejercicio de sus funciones y de todos los derechos inherentes a su condición", "La suspensión firme determinará la pérdida del puesto de trabajo cuando exceda de seis meses", "La suspensión firme se impondrá en virtud de sentencia dictada en causa criminal o en virtud de sanción disciplinaria", "El personal declarado en situación de suspensión firme de funciones podrá prestar servicios en otra administración pública distinta a la que le impuso la sanción"],
    correcta: "D",
    explicacion: "Es falsa: mientras dura la suspensión firme no se pueden prestar servicios en ninguna Administración pública."
  },
  {
    tema: "Estatuto Marco",
    origen: "Examen 2024 · Común C10",
    enunciado: "Según el Estatuto Marco, señale cuál de las siguientes materias queda excluida de la obligación de negociación entre la Administración y las Organizaciones Sindicales:",
    opciones: ["La determinación y aplicación de las retribuciones del personal estatutario", "La regulación de la jornada laboral, tiempo de trabajo y régimen de descansos", "Las decisiones del servicio de salud que afecten al procedimiento de formación de los actos y disposiciones administrativas", "Los sistemas de carrera profesional"],
    correcta: "C",
    explicacion: "Retribuciones, jornada y carrera profesional se negocian; las decisiones sobre el procedimiento de formación de actos y disposiciones administrativas quedan excluidas."
  },
  {
    tema: "Estatuto Marco",
    origen: "Examen 2024 · Común C12 (reserva)",
    enunciado: "Señale cuál de las siguientes opciones es verdadera sobre las pagas extraordinarias, según lo establecido en el Estatuto Marco:",
    opciones: ["Serán tres al año", "Se devengarán preferentemente en los meses de marzo, septiembre y diciembre", "El importe de cada una de ellas será, como máximo, una mensualidad del sueldo", "Al importe de cada una se le añadirá la catorceava parte del importe anual del complemento de destino"],
    correcta: "D",
    explicacion: "Son dos pagas al año (junio y diciembre), y a cada una se le suma la catorceava parte del complemento de destino anual."
  },
  {
    tema: "Estatuto Marco",
    origen: "Examen SAS 2025 aplazado · P11",
    enunciado: "Señale cuál de las siguientes opciones es un derecho individual que ostenta el personal estatutario de los Servicios de Salud:",
    opciones: ["Libre sindicación.", "Formación continuada.", "Actividad sindical.", "Negociación colectiva."],
    correcta: "B",
    explicacion: "Estatuto Marco, art. 17: la formación continuada es un derecho individual. La libre sindicación, la actividad sindical y la negociación colectiva son derechos colectivos (art. 18)."
  },
  {
    tema: "Estatuto Marco",
    origen: "Examen SAS 2025 aplazado · P46",
    enunciado: "Según Ley 55/2003, de 16 de diciembre, del Estatuto Marco del personal estatutario de los servicios de salud, las retribuciones básicas son:",
    opciones: ["El sueldo, los trienios, el complemento de destino y las pagas extraordinarias.", "El sueldo, los trienios, el complemento de carrera profesional y las pagas extraordinarias.", "El sueldo, los trienios, el complemento específico y las pagas extraordinarias.", "El sueldo, los trienios y las pagas extraordinarias."],
    correcta: "D",
    explicacion: "Estatuto Marco, art. 42: retribuciones básicas = sueldo, trienios y pagas extraordinarias. Los complementos son retribuciones complementarias."
  },
  // ===================================================================
  //  SELECCIÓN Y PROVISIÓN DE PLAZAS (57 preguntas)
  // ===================================================================
  {
    tema: "Selección y provisión de plazas",
    enunciado: "La norma gallega que regula la provisión de plazas de personal estatutario del Servizo Galego de Saúde es:",
    opciones: ["La Ley 3/2001", "El Decreto 206/2005, de 22 de julio", "El Decreto 151/2014", "La Ley 8/2008"],
    correcta: "B",
    explicacion: "Regula selección y provisión en el Sergas. (Decreto 206/2005)"
  },
  {
    tema: "Selección y provisión de plazas",
    enunciado: "Las normas básicas estatales sobre selección y provisión del personal estatutario se encuentran en:",
    opciones: ["El Código Civil", "El Estatuto Marco (Ley 55/2003) y, supletoriamente, el EBEP", "El Estatuto de los Trabajadores", "La Ley General de Sanidad"],
    correcta: "B",
    explicacion: "Marco básico. (Ley 55/2003, arts. 29-39)"
  },
  {
    tema: "Selección y provisión de plazas",
    enunciado: "La selección del personal estatutario fijo se rige por los principios constitucionales de:",
    opciones: ["Afiliación", "Libre designación", "Igualdad, mérito y capacidad, además de publicidad", "Antigüedad y proximidad"],
    correcta: "C",
    explicacion: "Principios de acceso al empleo público. (CE art. 103.3; Ley 55/2003, art. 29)"
  },
  {
    tema: "Selección y provisión de plazas",
    enunciado: "El sistema general de selección del personal estatutario fijo del Sergas es:",
    opciones: ["El concurso-oposición", "El concurso de méritos exclusivamente", "La entrevista personal", "La oposición libre sin méritos"],
    correcta: "A",
    explicacion: "La última convocatoria de celador fue por concurso-oposición. (Ley 55/2003, art. 31; Decreto 206/2005)"
  },
  {
    tema: "Selección y provisión de plazas",
    enunciado: "La Oferta Pública de Empleo (OPE) incluye:",
    opciones: ["Todas las plazas del Sergas", "Las plazas de las empresas privadas", "Las plazas vacantes con dotación presupuestaria que deban cubrirse con personal de nuevo ingreso", "Solo las plazas de interinos"],
    correcta: "C",
    explicacion: "Instrumento de planificación. (EBEP, art. 70; Ley 55/2003, art. 30)"
  },
  {
    tema: "Selección y provisión de plazas",
    enunciado: "La ejecución de la oferta de empleo público debe desarrollarse, según el EBEP, dentro de un plazo improrrogable de:",
    opciones: ["Cinco años", "Tres años", "Seis meses", "Un año"],
    correcta: "B",
    explicacion: "Plazo máximo para ejecutar la oferta. (EBEP, art. 70.1)"
  },
  {
    tema: "Selección y provisión de plazas",
    enunciado: "Para participar en los procesos selectivos, la edad mínima exigida con carácter general es:",
    opciones: ["Tener cumplidos 18 años", "Tener cumplidos 16 años", "No hay edad mínima", "Tener cumplidos 21 años"],
    correcta: "B",
    explicacion: "Y no exceder la edad máxima de jubilación forzosa. (EBEP, art. 56.1.c)"
  },
  {
    tema: "Selección y provisión de plazas",
    enunciado: "Respecto a la nacionalidad, pueden acceder a plazas de personal estatutario:",
    opciones: ["Solo los residentes en Galicia", "Cualquier persona sin requisitos", "Solo los españoles de origen", "Los españoles y los nacionales de otros Estados miembros de la UE, y otros supuestos legales"],
    correcta: "D",
    explicacion: "Con las excepciones de funciones de poder público. (EBEP, art. 57; Ley 55/2003, art. 30)"
  },
  {
    tema: "Selección y provisión de plazas",
    enunciado: "¿Cuál de los siguientes NO es un requisito general para participar en las pruebas selectivas del Sergas?",
    opciones: ["Poseer la capacidad funcional para el desempeño de las funciones", "Poseer la titulación exigida", "Residir en Galicia", "No haber sido separado del servicio mediante expediente disciplinario"],
    correcta: "C",
    explicacion: "No se exige residencia. (Ley 55/2003, art. 30.5)"
  },
  {
    tema: "Selección y provisión de plazas",
    enunciado: "Para la categoría de celador, la titulación exigida en el Sergas es:",
    opciones: ["Un grado universitario", "El título de bachiller", "El título de técnico en cuidados de enfermería", "Ninguna específica (agrupaciones profesionales), o el certificado de escolaridad según la convocatoria"],
    correcta: "D",
    explicacion: "Grupo AP. (Convocatoria Sergas 2025; Ley 55/2003, art. 7)"
  },
  {
    tema: "Selección y provisión de plazas",
    enunciado: "La reserva de plazas para personas con discapacidad en las ofertas de empleo público no puede ser inferior al:",
    opciones: ["7 % de las vacantes, con al menos un 2 % para personas con discapacidad intelectual", "No existe reserva", "15 % de las vacantes", "2 % de las vacantes"],
    correcta: "A",
    explicacion: "Por eso existe un turno de discapacidad intelectual en celador. (EBEP, art. 59)"
  },
  {
    tema: "Selección y provisión de plazas",
    enunciado: "En la última convocatoria de celador del Sergas, los turnos de acceso fueron:",
    opciones: ["Solo libre", "Libre, promoción interna, discapacidad general y discapacidad intelectual", "Libre y concurso de traslados", "Libre e interino"],
    correcta: "B",
    explicacion: "348 plazas en total. (Convocatoria Sergas (DOG 4/9/2025)) Ojo: dato de la convocatoria 2025; compruébalo cuando salga la tuya.",
    origen: "Convocatoria 2025 (dato que cambiará)"
  },
  {
    tema: "Selección y provisión de plazas",
    enunciado: "¿Cuántas plazas de celador se convocaron en la convocatoria del Sergas publicada en el DOG del 4 de septiembre de 2025?",
    opciones: ["620", "1.980", "135", "348"],
    correcta: "D",
    explicacion: "135 libre, 174 promoción interna, 10 discapacidad general y 29 discapacidad intelectual. (DOG núm. 170, 4/9/2025) Ojo: dato de la convocatoria 2025; compruébalo cuando salga la tuya.",
    origen: "Convocatoria 2025 (dato que cambiará)"
  },
  {
    tema: "Selección y provisión de plazas",
    enunciado: "En el concurso-oposición del Sergas para celador, la fase de oposición incluye un ejercicio sobre la parte específica con:",
    opciones: ["100 preguntas tipo test (50 teóricas y 50 de supuestos prácticos), en 150 minutos", "Un examen oral", "10 preguntas en 15 minutos", "Una entrevista"],
    correcta: "A",
    explicacion: "Primer ejercicio, eliminatorio. (Convocatoria Sergas) Ojo: dato de la convocatoria 2025; compruébalo cuando salga la tuya.",
    origen: "Convocatoria 2025 (dato que cambiará)"
  },
  {
    tema: "Selección y provisión de plazas",
    enunciado: "El ejercicio de la parte común en el concurso-oposición de celador del Sergas consiste en:",
    opciones: ["100 preguntas", "Un caso práctico", "10 preguntas tipo test sobre los temas 1 a 8 de la parte común, en 15 minutos", "Una redacción"],
    correcta: "C",
    explicacion: "Obligatorio pero no eliminatorio. (Convocatoria Sergas) Ojo: dato de la convocatoria 2025; compruébalo cuando salga la tuya.",
    origen: "Convocatoria 2025 (dato que cambiará)"
  },
  {
    tema: "Selección y provisión de plazas",
    enunciado: "El ejercicio de lengua gallega en los procesos del Sergas:",
    opciones: ["Es eliminatorio para todos", "Deben realizarlo quienes no acrediten el nivel de gallego exigido en la convocatoria (Celga o equivalente)", "Lo hacen todos los aspirantes sin excepción", "No existe"],
    correcta: "B",
    explicacion: "Quien acredita el Celga exigido queda exento. (Convocatoria Sergas; Ley 2/2015 de Galicia)"
  },
  {
    tema: "Selección y provisión de plazas",
    enunciado: "El conocimiento de la lengua gallega en el proceso selectivo:",
    opciones: ["Se acredita con el DNI", "No se valora", "Solo se valora por entrevista", "Se acredita mediante los certificados Celga o equivalentes, o superando el ejercicio correspondiente"],
    correcta: "D",
    explicacion: "Los Celga los expide la Secretaría Xeral de Política Lingüística. (Normativa gallega)"
  },
  {
    tema: "Selección y provisión de plazas",
    enunciado: "Los tribunales de selección deben actuar conforme a los principios de:",
    opciones: ["Imparcialidad, profesionalidad y, en lo posible, paridad entre mujeres y hombres", "Afinidad política", "Libre elección del aspirante", "Antigüedad de sus miembros"],
    correcta: "A",
    explicacion: "Órganos de selección. (EBEP, art. 60; Ley 55/2003, art. 31)"
  },
  {
    tema: "Selección y provisión de plazas",
    enunciado: "Un miembro del tribunal debe abstenerse de intervenir si:",
    opciones: ["Trabaja en el Sergas", "Conoce el temario", "Tiene parentesco o amistad íntima o enemistad manifiesta con algún aspirante, entre otras causas legales", "Es de otra provincia"],
    correcta: "C",
    explicacion: "Los aspirantes pueden recusarlo por las mismas causas (art. 24). (Ley 40/2015, art. 23)"
  },
  {
    tema: "Selección y provisión de plazas",
    enunciado: "La relación de aspirantes admitidos y excluidos se publica:",
    opciones: ["Nunca se publica", "Primero con carácter provisional, con plazo de reclamación, y después definitiva", "Solo a cada aspirante por carta", "Directamente definitiva sin reclamación"],
    correcta: "B",
    explicacion: "Hay plazo para subsanar errores. (Convocatorias Sergas)"
  },
  {
    tema: "Selección y provisión de plazas",
    enunciado: "Tras el examen, el Sergas publica:",
    opciones: ["Nada hasta un año después", "Solo la nota final", "Las respuestas de cada aspirante", "La plantilla provisional de respuestas, con plazo para reclamar, y después la definitiva"],
    correcta: "D",
    explicacion: "Plantillas provisional y definitiva. (Convocatorias Sergas)"
  },
  {
    tema: "Selección y provisión de plazas",
    enunciado: "La fase de concurso en el concurso-oposición valora:",
    opciones: ["La edad", "La entrevista", "Los méritos de experiencia profesional y formación, entre otros, según el baremo", "El resultado del examen"],
    correcta: "C",
    explicacion: "Baremo de méritos de la convocatoria. (Ley 55/2003, art. 31)"
  },
  {
    tema: "Selección y provisión de plazas",
    enunciado: "La fase de concurso del concurso-oposición del Sergas se realiza:",
    opciones: ["Una vez finalizada la fase de oposición, solo para quienes la superan", "No existe en el Sergas", "Antes del examen para todos", "Durante el examen"],
    correcta: "A",
    explicacion: "Se suman los méritos a la nota de oposición. (Convocatorias Sergas)"
  },
  {
    tema: "Selección y provisión de plazas",
    enunciado: "Los aspirantes seleccionados deben presentar la documentación acreditativa de los requisitos:",
    opciones: ["Cuando quieran", "Nunca", "Solo si lo pide el tribunal", "En el plazo establecido; si no lo hacen, salvo fuerza mayor, no pueden ser nombrados"],
    correcta: "D",
    explicacion: "Requerimiento de documentación. (Convocatorias Sergas)"
  },
  {
    tema: "Selección y provisión de plazas",
    enunciado: "Entre la documentación que suelen presentar los aspirantes seleccionados se incluye:",
    opciones: ["Un certificado de empadronamiento en Galicia", "Declaración de no haber sido separado del servicio y certificado negativo del Registro Central de Delincuentes Sexuales", "Una carta de recomendación", "El título de conducir"],
    correcta: "B",
    explicacion: "El certificado del registro de delincuentes sexuales es exigido para trabajos con contacto con menores. (Convocatoria Sergas; LO 1/1996 de protección del menor)"
  },
  {
    tema: "Selección y provisión de plazas",
    enunciado: "La elección de destino de los aspirantes seleccionados se realiza:",
    opciones: ["Por sorteo", "Por cercanía al domicilio", "Según el orden de puntuación obtenido en el proceso selectivo", "Por antigüedad en las listas"],
    correcta: "C",
    explicacion: "El que más puntuación tiene, elige antes. (Convocatorias Sergas)"
  },
  {
    tema: "Selección y provisión de plazas",
    enunciado: "La toma de posesión de la plaza obtenida debe realizarse, salvo que la convocatoria disponga otra cosa, en el plazo de:",
    opciones: ["Una semana", "Un año", "Un mes", "Seis meses"],
    correcta: "C",
    explicacion: "Si no se toma posesión sin causa justificada, se pierde el derecho. (Ley 55/2003, art. 20)"
  },
  {
    tema: "Selección y provisión de plazas",
    enunciado: "La provisión de plazas del personal estatutario fijo del Sergas se realiza, entre otros, por:",
    opciones: ["Elección directa del jefe de servicio", "Sorteo", "Concurso de traslados y libre designación", "Herencia"],
    correcta: "C",
    explicacion: "Sistemas de provisión. (Ley 55/2003, art. 36; Decreto 206/2005)"
  },
  {
    tema: "Selección y provisión de plazas",
    enunciado: "El concurso de traslados en el Sergas permite:",
    opciones: ["Acceder a una categoría superior", "Ingresar como fijo", "Al personal fijo cambiar voluntariamente de destino entre centros", "Pasar a ser funcionario de la Xunta"],
    correcta: "C",
    explicacion: "Movilidad voluntaria. (Decreto 206/2005)"
  },
  {
    tema: "Selección y provisión de plazas",
    enunciado: "La libre designación se usa en el Sergas para:",
    opciones: ["Puestos de jefatura o de especial responsabilidad que se determinen", "El acceso de nuevo ingreso", "Las sustituciones", "Todas las plazas de celador"],
    correcta: "A",
    explicacion: "Con convocatoria pública. (Ley 55/2003, art. 36; Decreto 206/2005)"
  },
  {
    tema: "Selección y provisión de plazas",
    enunciado: "La promoción interna temporal permite:",
    opciones: ["Cobrar doble sueldo", "Cambiar de hospital", "Que el personal fijo desempeñe temporalmente funciones de otra categoría de igual o superior nivel, percibiendo sus retribuciones", "Ascender definitivamente sin proceso"],
    correcta: "C",
    explicacion: "No consolida la categoría. (Ley 55/2003, art. 35)"
  },
  {
    tema: "Selección y provisión de plazas",
    enunciado: "Las comisiones de servicio son:",
    opciones: ["Una sanción", "Un tipo de excedencia", "Una forma provisional de cubrir un puesto por necesidades del servicio", "Un permiso retribuido"],
    correcta: "C",
    explicacion: "Provisión provisional. (Decreto 206/2005)"
  },
  {
    tema: "Selección y provisión de plazas",
    enunciado: "La selección del personal estatutario temporal del Sergas se realiza principalmente mediante:",
    opciones: ["Contratación directa por los jefes de servicio", "Empresas de trabajo temporal", "Sorteo", "Listas de contratación (listas de selección temporal) con baremo de méritos"],
    correcta: "D",
    explicacion: "Listas con orden según puntuación. (Pacto de selección de personal temporal del Sergas)"
  },
  {
    tema: "Selección y provisión de plazas",
    enunciado: "Los méritos para las listas de contratación temporal del Sergas se presentan a través de:",
    opciones: ["La receta electrónica", "El 061", "La oficina virtual del profesional FIDES/expedient-e", "IANUS"],
    correcta: "C",
    explicacion: "Se accede con certificado digital o Chave365. (Sergas)"
  },
  {
    tema: "Selección y provisión de plazas",
    enunciado: "En las listas de contratación del Sergas, entre los méritos que se valoran se encuentran:",
    opciones: ["La experiencia profesional, la formación, la superación de procesos selectivos y el conocimiento del gallego", "El lugar de nacimiento", "El número de hijos", "La edad y el estado civil"],
    correcta: "A",
    explicacion: "Baremo de las listas. (Pacto de listas del Sergas)"
  },
  {
    tema: "Selección y provisión de plazas",
    enunciado: "La experiencia profesional en la misma categoría en centros del sistema público de salud, en las listas del Sergas:",
    opciones: ["Resta puntos", "Se valora menos que la experiencia en cualquier empresa privada", "Es uno de los méritos de mayor peso", "No se valora"],
    correcta: "C",
    explicacion: "Por eso trabajar en sustituciones ayuda a subir en la lista. (Pacto de listas del Sergas)"
  },
  {
    tema: "Selección y provisión de plazas",
    enunciado: "Haber aprobado ejercicios de una OPE de la misma categoría, en las listas del Sergas:",
    opciones: ["No se valora nunca", "Suele valorarse como mérito", "Solo sirve para la siguiente OPE", "Excluye de las listas"],
    correcta: "B",
    explicacion: "Aprobar la oposición mejora la posición en la lista aunque no se obtenga plaza. (Pacto de listas del Sergas)"
  },
  {
    tema: "Selección y provisión de plazas",
    enunciado: "Las listas de contratación del Sergas son de carácter:",
    opciones: ["Abierto y permanente, con actualizaciones periódicas de méritos (cortes)", "Secreto", "Cerrado durante 10 años", "Anual sin actualización"],
    correcta: "A",
    explicacion: "Se pueden actualizar méritos en las fechas de corte. (Pacto de listas del Sergas)"
  },
  {
    tema: "Selección y provisión de plazas",
    enunciado: "El personal temporal del Sergas que es llamado de las listas y rechaza una oferta sin causa justificada:",
    opciones: ["Pasa a ser fijo", "No tiene ninguna consecuencia nunca", "Puede sufrir las consecuencias previstas en el pacto (por ejemplo, pasar a situación de no disponible o una penalización)", "Gana puntos"],
    correcta: "C",
    explicacion: "Las causas justificadas están tasadas en el pacto. (Pacto de listas del Sergas)"
  },
  {
    tema: "Selección y provisión de plazas",
    enunciado: "Los aspirantes a las listas del Sergas pueden elegir:",
    opciones: ["El hospital y el turno exacto en todo caso", "El jefe", "El salario", "Las áreas o ámbitos geográficos y los tipos de nombramiento en los que quieren estar disponibles"],
    correcta: "D",
    explicacion: "Ámbitos de disponibilidad. (Pacto de listas del Sergas)"
  },
  {
    tema: "Selección y provisión de plazas",
    enunciado: "La Mesa Sectorial del Sergas es:",
    opciones: ["Un órgano judicial", "El órgano de negociación entre la Administración sanitaria gallega y los sindicatos", "Un comité de pacientes", "Un tribunal de oposición"],
    correcta: "B",
    explicacion: "Negocia pactos y acuerdos como los de listas. (Ley 55/2003, art. 79)"
  },
  {
    tema: "Selección y provisión de plazas",
    enunciado: "El reingreso al servicio activo del personal procedente de excedencia se realiza:",
    opciones: ["No es posible", "Mediante oposición", "Automáticamente en su puesto anterior", "Mediante concurso de traslados o adjudicación provisional de plaza vacante, según el procedimiento establecido"],
    correcta: "D",
    explicacion: "Reingreso. (Ley 55/2003, art. 69; Decreto 206/2005)"
  },
  {
    tema: "Selección y provisión de plazas",
    enunciado: "La movilidad por razón de violencia de género permite a la víctima:",
    opciones: ["Cobrar una indemnización del hospital", "Pedir un ascenso", "Cambiar de categoría", "Trasladarse a otro puesto de su categoría en otra localidad, sin necesidad de concurso"],
    correcta: "D",
    explicacion: "Para hacer efectiva su protección. (EBEP, art. 82; LO 1/2004)"
  },
  {
    tema: "Selección y provisión de plazas",
    enunciado: "La movilidad por motivos de salud permite al personal:",
    opciones: ["No trabajar", "Cambiar de categoría sin requisitos", "Cambiar de puesto cuando su estado de salud le impida desempeñar el suyo, previo informe del servicio de prevención", "Elegir su horario"],
    correcta: "C",
    explicacion: "Adaptación o cambio de puesto. (Normativa de provisión; Ley 31/1995)"
  },
  {
    tema: "Selección y provisión de plazas",
    enunciado: "El nombramiento como personal estatutario fijo de los aspirantes que superan el proceso selectivo se publica en:",
    opciones: ["La web del hospital solamente", "El Diario Oficial de Galicia", "El BOE exclusivamente", "Ningún sitio"],
    correcta: "B",
    explicacion: "Publicidad. (Ley 55/2003, art. 20)"
  },
  {
    tema: "Selección y provisión de plazas",
    enunciado: "Las bases de la convocatoria de un proceso selectivo:",
    opciones: ["Solo vinculan a los aspirantes", "No son obligatorias", "Vinculan a la Administración, a los tribunales y a los aspirantes", "Pueden cambiarse libremente por el tribunal"],
    correcta: "C",
    explicacion: "«Las bases son la ley del concurso». (EBEP, art. 55)"
  },
  {
    tema: "Selección y provisión de plazas",
    enunciado: "Contra las resoluciones del tribunal calificador los aspirantes pueden interponer:",
    opciones: ["Ningún recurso", "Recurso de alzada ante la autoridad correspondiente", "Recurso de casación directamente", "Una queja verbal sin efectos"],
    correcta: "B",
    explicacion: "Los actos de trámite cualificados son recurribles. (Ley 39/2015, art. 121)"
  },
  {
    tema: "Selección y provisión de plazas",
    enunciado: "En la convocatoria de celador del Sergas de 2025, el examen está convocado en:",
    opciones: ["Santiago, en el Parlamento", "Silleda (Pontevedra), en el recinto de la Feira Internacional de Galicia ABANCA", "Cada hospital", "Online"],
    correcta: "B",
    explicacion: "El 14 de noviembre de 2026. (DOG núm. 197, 16/10/2026) Ojo: dato de la convocatoria 2025; compruébalo cuando salga la tuya.",
    origen: "Convocatoria 2025 (dato que cambiará)"
  },
  {
    tema: "Selección y provisión de plazas",
    enunciado: "El certificado de capacidad funcional que se exige para el nombramiento sirve para acreditar que:",
    opciones: ["El aspirante tiene antigüedad", "El aspirante no padece enfermedad ni limitación que le impida desempeñar las funciones de la categoría", "El aspirante vive en Galicia", "El aspirante sabe gallego"],
    correcta: "B",
    explicacion: "Requisito de capacidad. (Ley 55/2003, art. 30.5)"
  },
  {
    tema: "Selección y provisión de plazas",
    enunciado: "Un aspirante que ha sido separado del servicio de una administración pública mediante expediente disciplinario:",
    opciones: ["Solo puede acceder por promoción interna", "Puede acceder si pasan 6 meses", "Puede acceder sin problema", "No puede acceder a la condición de personal estatutario, salvo rehabilitación"],
    correcta: "D",
    explicacion: "Requisito negativo. (Ley 55/2003, art. 30.5)"
  },
  {
    tema: "Selección y provisión de plazas",
    enunciado: "La adaptación de tiempos y medios en el examen para personas con discapacidad:",
    opciones: ["Requiere autorización judicial", "Puede solicitarse en la solicitud de participación y la concede el tribunal", "Solo se concede el mismo día del examen", "No existe"],
    correcta: "B",
    explicacion: "Igualdad de oportunidades. (EBEP, art. 59.2; convocatorias Sergas)"
  },
  {
    tema: "Selección y provisión de plazas",
    enunciado: "Una persona que forma parte de las listas temporales del Sergas y obtiene un nombramiento de sustitución:",
    opciones: ["Cesa cuando se reincorpora el titular de la plaza", "Pasa a ser fija", "Cesa a los 7 días en todo caso", "Puede quedarse en la plaza indefinidamente"],
    correcta: "A",
    explicacion: "Naturaleza de la sustitución. (Ley 55/2003, art. 9)"
  },
  {
    tema: "Selección y provisión de plazas",
    enunciado: "El personal estatutario que obtiene plaza por concurso de traslados:",
    opciones: ["Puede elegir no incorporarse sin consecuencias", "Cambia de categoría", "Debe cesar en su destino anterior y tomar posesión del nuevo en los plazos establecidos", "Mantiene ambos destinos"],
    correcta: "C",
    explicacion: "Plazos de cese y toma de posesión. (Decreto 206/2005)"
  },
  {
    tema: "Selección y provisión de plazas",
    enunciado: "La categoría de celador pertenece a la agrupación de personal de:",
    opciones: ["Sanitario facultativo", "Directivo", "Gestión y servicios", "Sanitario técnico superior"],
    correcta: "C",
    explicacion: "Grupo AP. (Ley 55/2003, art. 7)"
  },
  {
    tema: "Selección y provisión de plazas",
    origen: "Examen 2024 · Común C3",
    enunciado: "Según el Decreto 206/2005, de provisión de plazas del personal estatutario del Servicio Gallego de Salud, ¿qué ocurre si, en un proceso de selección fija, tras la publicación de la relación de aspirantes seleccionados, uno de ellos no opta por uno de los destinos ofertados, en el plazo y según el procedimiento establecido?",
    opciones: ["Se le habilitará un nuevo plazo para poder elegir su destino", "Se le adjudicará uno de los destinos ofertados que otros aspirantes seleccionados no hayan solicitado", "Se le reservará su plaza hasta la siguiente convocatoria", "No podrá ser nombrado, y quedarán sin efecto todas sus actuaciones"],
    correcta: "D",
    explicacion: "Quien no elige destino en plazo pierde el derecho: no puede ser nombrado y quedan sin efecto sus actuaciones."
  },
  {
    tema: "Selección y provisión de plazas",
    origen: "Examen 2024 · Común C4",
    enunciado: "Según el Decreto 206/2005, de provisión de plazas de personal estatutario del Servicio Gallego de Salud, señale cuál de los siguientes no es requisito para el acceso a la promoción interna, en los procesos de selección de personal estatutario fijo que se convoquen para otras categorías:",
    opciones: ["Tener un mínimo de dos años de servicios prestados en la categoría a la que desea promocionar", "Tener la condición de personal estatutario fijo de otra categoría de nivel académico igual o inferior al de aquella a la que se pretende acceder", "Estar en servicio activo en instituciones sanitarias del Servicio Gallego de Salud", "Tener nombramiento como personal estatutario fijo durante, al menos, dos años en la categoría de procedencia"],
    correcta: "A",
    explicacion: "Los dos años se exigen en la categoría de procedencia (opción D), no en la categoría a la que se quiere promocionar."
  },
  {
    tema: "Selección y provisión de plazas",
    origen: "Examen SAS 2025 · P8",
    enunciado: "La provisión de plazas del personal estatutario se regirá, entre otros, por los principios básicos de:",
    opciones: ["Igualdad, mérito, capacidad y publicidad en la selección, promoción y movilidad del personal de los servicios de salud.", "Igualdad, eficacia, mérito y capacidad.", "Igualdad, mérito, publicidad, promoción e inamovilidad.", "Todas las respuestas son falsas."],
    correcta: "A",
    explicacion: "Estatuto Marco (Ley 55/2003), art. 29: igualdad, mérito, capacidad y publicidad en la selección, promoción y movilidad."
  },
  // ===================================================================
  //  PROTECCIÓN DE DATOS E HISTORIA CLÍNICA (77 preguntas)
  // ===================================================================
  {
    tema: "Protección de datos e historia clínica",
    enunciado: "La norma europea sobre protección de datos personales es:",
    opciones: ["La Directiva 95/46/CE, todavía vigente", "La Ley 3/2001", "La Ley 41/2002", "El Reglamento (UE) 2016/679, Reglamento General de Protección de Datos (RGPD)"],
    correcta: "D",
    explicacion: "Aplicable desde el 25 de mayo de 2018. (RGPD)"
  },
  {
    tema: "Protección de datos e historia clínica",
    enunciado: "El RGPD es de aplicación desde el:",
    opciones: ["25 de mayo de 2018", "25 de mayo de 2016", "1 de enero de 2016", "5 de diciembre de 2018"],
    correcta: "A",
    explicacion: "Entró en vigor en 2016, pero se aplica desde 2018. (RGPD, art. 99)"
  },
  {
    tema: "Protección de datos e historia clínica",
    enunciado: "La ley orgánica española de protección de datos vigente es:",
    opciones: ["La Ley 3/2001", "La Ley Orgánica 15/1999", "La Ley Orgánica 3/2018, de Protección de Datos Personales y garantía de los derechos digitales", "La Ley 41/2002"],
    correcta: "C",
    explicacion: "LO 3/2018, de 5 de diciembre. (LOPDGDD)"
  },
  {
    tema: "Protección de datos e historia clínica",
    enunciado: "Según el RGPD, un dato personal es:",
    opciones: ["Solo el nombre y los apellidos", "Cualquier información de una empresa", "Toda información sobre una persona física identificada o identificable", "Solo los datos de salud"],
    correcta: "C",
    explicacion: "Persona física identificada o identificable. (RGPD, art. 4.1)"
  },
  {
    tema: "Protección de datos e historia clínica",
    enunciado: "Los datos relativos a la salud son, según el RGPD:",
    opciones: ["Datos sin protección especial", "Datos públicos", "Una categoría especial de datos personales, con protección reforzada", "Datos de empresa"],
    correcta: "C",
    explicacion: "Su tratamiento está prohibido salvo excepciones. (RGPD, art. 9)"
  },
  {
    tema: "Protección de datos e historia clínica",
    enunciado: "¿Cuál de los siguientes NO es una categoría especial de datos según el RGPD?",
    opciones: ["La dirección postal", "Los datos de salud", "La afiliación sindical", "Los datos genéticos"],
    correcta: "A",
    explicacion: "Categorías especiales: origen étnico, opiniones políticas, religión, afiliación sindical, genéticos, biométricos, salud, vida u orientación sexual. (RGPD, art. 9)"
  },
  {
    tema: "Protección de datos e historia clínica",
    enunciado: "Uno de los principios del tratamiento de datos según el RGPD es el de minimización, que significa:",
    opciones: ["Que los datos se borren al día siguiente", "Que los datos sean adecuados, pertinentes y limitados a lo necesario para la finalidad", "Que los datos sean anónimos siempre", "Que se recojan todos los datos posibles"],
    correcta: "B",
    explicacion: "Solo los datos necesarios. (RGPD, art. 5.1.c)"
  },
  {
    tema: "Protección de datos e historia clínica",
    enunciado: "El principio de limitación de la finalidad implica que los datos:",
    opciones: ["Se recogen con fines determinados, explícitos y legítimos, y no se tratan después de forma incompatible con esos fines", "Pueden usarse para cualquier fin", "Solo pueden usarse una vez", "Deben destruirse tras su recogida"],
    correcta: "A",
    explicacion: "Finalidad concreta. (RGPD, art. 5.1.b)"
  },
  {
    tema: "Protección de datos e historia clínica",
    enunciado: "El principio de integridad y confidencialidad exige:",
    opciones: ["Tratar los datos con la seguridad adecuada frente a accesos no autorizados, pérdida o destrucción", "Publicar los datos", "Guardar los datos en papel exclusivamente", "Compartir los datos con quien los pida"],
    correcta: "A",
    explicacion: "Medidas de seguridad. (RGPD, art. 5.1.f)"
  },
  {
    tema: "Protección de datos e historia clínica",
    enunciado: "El principio de responsabilidad proactiva significa que el responsable del tratamiento:",
    opciones: ["No tiene responsabilidad", "Debe cumplir los principios y ser capaz de demostrarlo", "Traslada toda la responsabilidad al usuario", "Solo responde si hay una denuncia"],
    correcta: "B",
    explicacion: "Accountability. (RGPD, art. 5.2)"
  },
  {
    tema: "Protección de datos e historia clínica",
    enunciado: "El principio de exactitud exige que los datos sean:",
    opciones: ["Inventados si faltan", "Exactos y, si es necesario, actualizados", "Antiguos", "Aproximados"],
    correcta: "B",
    explicacion: "Se rectifican o suprimen los inexactos. (RGPD, art. 5.1.d)"
  },
  {
    tema: "Protección de datos e historia clínica",
    enunciado: "El principio de limitación del plazo de conservación significa que los datos:",
    opciones: ["Se conservan para siempre", "Se conservan solo durante el tiempo necesario para los fines del tratamiento", "Se conservan solo un día", "Se borran al mes"],
    correcta: "B",
    explicacion: "Con excepciones para archivo, investigación o estadística. (RGPD, art. 5.1.e)"
  },
  {
    tema: "Protección de datos e historia clínica",
    enunciado: "¿Cuál de los siguientes es un derecho de las personas según el RGPD?",
    opciones: ["El derecho a conocer los datos de otras personas", "El derecho a vender datos ajenos", "El derecho a modificar la historia clínica de otro", "El derecho a la portabilidad de los datos"],
    correcta: "D",
    explicacion: "Otros: acceso, rectificación, supresión, limitación, oposición y no ser objeto de decisiones automatizadas. (RGPD, art. 20)"
  },
  {
    tema: "Protección de datos e historia clínica",
    enunciado: "El derecho de supresión también se conoce como:",
    opciones: ["Derecho de oposición", "Derecho al olvido", "Derecho de portabilidad", "Derecho de acceso"],
    correcta: "B",
    explicacion: "Supresión de los datos cuando ya no son necesarios, entre otros supuestos. (RGPD, art. 17)"
  },
  {
    tema: "Protección de datos e historia clínica",
    enunciado: "El derecho de rectificación permite al interesado:",
    opciones: ["Corregir sus datos inexactos o completar los incompletos", "Transferir sus datos", "Ver los datos de otros", "Borrar todos sus datos"],
    correcta: "A",
    explicacion: "Rectificación. (RGPD, art. 16)"
  },
  {
    tema: "Protección de datos e historia clínica",
    enunciado: "El derecho de acceso permite al interesado:",
    opciones: ["Acceder a las instalaciones del hospital", "Cambiar los datos del hospital", "Ver los datos de su vecino", "Saber si se tratan sus datos y obtener una copia y la información sobre el tratamiento"],
    correcta: "D",
    explicacion: "Acceso. (RGPD, art. 15)"
  },
  {
    tema: "Protección de datos e historia clínica",
    enunciado: "El responsable del tratamiento debe responder a las solicitudes de ejercicio de derechos en el plazo de:",
    opciones: ["Diez días naturales sin prórroga", "Un mes, prorrogable dos meses más en casos complejos", "Un año", "Seis meses"],
    correcta: "B",
    explicacion: "Informando de la prórroga. (RGPD, art. 12.3)"
  },
  {
    tema: "Protección de datos e historia clínica",
    enunciado: "En España, la edad a partir de la cual un menor puede consentir por sí mismo el tratamiento de sus datos es de:",
    opciones: ["18 años", "12 años", "16 años", "14 años"],
    correcta: "D",
    explicacion: "Salvo que la ley exija la asistencia de los padres. (LOPDGDD, art. 7)"
  },
  {
    tema: "Protección de datos e historia clínica",
    enunciado: "La autoridad de control en materia de protección de datos en España es:",
    opciones: ["La Agencia Española de Protección de Datos (AEPD)", "El Defensor del Pueblo", "La Policía Nacional", "El Ministerio de Sanidad"],
    correcta: "A",
    explicacion: "Autoridad independiente. (LOPDGDD)"
  },
  {
    tema: "Protección de datos e historia clínica",
    enunciado: "Los centros sanitarios y las administraciones públicas deben designar:",
    opciones: ["Un responsable por planta", "Un abogado externo para cada paciente", "Un notario", "Un delegado de protección de datos (DPD)"],
    correcta: "D",
    explicacion: "Figura obligatoria. (RGPD, art. 37; LOPDGDD, art. 34)"
  },
  {
    tema: "Protección de datos e historia clínica",
    enunciado: "Una brecha de seguridad de datos personales debe notificarse a la autoridad de control:",
    opciones: ["En un plazo máximo de 72 horas desde que se tiene constancia, salvo que sea improbable que suponga un riesgo", "En un año", "Nunca", "Solo si la descubre un periodista"],
    correcta: "A",
    explicacion: "Notificación de violaciones de seguridad. (RGPD, art. 33)"
  },
  {
    tema: "Protección de datos e historia clínica",
    enunciado: "El deber de confidencialidad sobre los datos personales, según la LOPDGDD:",
    opciones: ["Solo afecta a los médicos", "Termina al acabar el turno", "Termina al dejar el trabajo", "Se mantiene aunque haya finalizado la relación del trabajador con el responsable"],
    correcta: "D",
    explicacion: "Deber permanente. (LOPDGDD, art. 5)"
  },
  {
    tema: "Protección de datos e historia clínica",
    enunciado: "Según la LOPDGDD, ante una infracción de protección de datos cometida por una administración pública:",
    opciones: ["Se cierra la administración", "No ocurre nada", "Se dicta resolución declarando la infracción y las medidas a adoptar, sin multa económica, sin perjuicio de responsabilidades disciplinarias", "Se impone siempre una multa de 20 millones"],
    correcta: "C",
    explicacion: "Régimen especial de las administraciones. (LOPDGDD, art. 77)"
  },
  {
    tema: "Protección de datos e historia clínica",
    enunciado: "La LOPDGDD reconoce, además de la protección de datos, los llamados:",
    opciones: ["Derechos de propiedad intelectual exclusivamente", "Derechos reales", "Derechos digitales (desconexión digital, intimidad frente a la videovigilancia en el trabajo, etc.)", "Derechos sucesorios"],
    correcta: "C",
    explicacion: "Garantía de los derechos digitales. (LOPDGDD, título X)"
  },
  {
    tema: "Protección de datos e historia clínica",
    enunciado: "El derecho a la desconexión digital del trabajador consiste en:",
    opciones: ["Trabajar sin internet", "Desconectar los ordenadores del hospital", "No usar el correo nunca", "No tener que atender comunicaciones de trabajo fuera de su tiempo de trabajo, respetando su descanso"],
    correcta: "D",
    explicacion: "Garantiza el descanso y la intimidad. (LOPDGDD, art. 88)"
  },
  {
    tema: "Protección de datos e historia clínica",
    enunciado: "Los herederos o personas vinculadas a un fallecido:",
    opciones: ["No pueden hacer nada", "Pueden acceder a los datos de cualquier paciente", "Solo pueden acceder pagando", "Pueden dirigirse al responsable para acceder a sus datos y solicitar su rectificación o supresión, salvo que el fallecido lo hubiera prohibido"],
    correcta: "D",
    explicacion: "Datos de las personas fallecidas. (LOPDGDD, art. 3)"
  },
  {
    tema: "Protección de datos e historia clínica",
    enunciado: "El celador que accede sin necesidad a los datos clínicos de un vecino ingresado en el sistema informático:",
    opciones: ["Solo comete falta si se lo dice al vecino", "No hace nada mal si no lo cuenta", "Comete una infracción de la normativa de protección de datos y puede incurrir en falta disciplinaria", "Está en su derecho como trabajador"],
    correcta: "C",
    explicacion: "Los accesos quedan registrados y se auditan. (RGPD; LOPDGDD; Ley 55/2003)"
  },
  {
    tema: "Protección de datos e historia clínica",
    enunciado: "Cada acceso a la historia clínica electrónica del Sergas:",
    opciones: ["Es anónimo", "No deja rastro", "Solo se registra si se modifica algo", "Queda registrado, con la identificación del usuario que accede"],
    correcta: "D",
    explicacion: "Trazabilidad de los accesos. (Normativa de la historia clínica electrónica en Galicia)"
  },
  {
    tema: "Protección de datos e historia clínica",
    enunciado: "La ley gallega que regula el consentimiento informado y la historia clínica es:",
    opciones: ["La Ley 8/2008, de 10 de julio", "La Ley 41/2002, de 14 de noviembre", "La Ley 3/2001, de 28 de mayo", "La Ley 1/1989"],
    correcta: "C",
    explicacion: "Modificada por la Ley 3/2005. (Ley 3/2001 de Galicia)"
  },
  {
    tema: "Protección de datos e historia clínica",
    enunciado: "El consentimiento informado es:",
    opciones: ["Una firma obligatoria para entrar en el hospital", "Un permiso del médico al paciente", "La conformidad libre, voluntaria y consciente del paciente, manifestada tras recibir la información adecuada, para una actuación sobre su salud", "Un documento para la familia"],
    correcta: "C",
    explicacion: "Definición. (Ley 3/2001; Ley 41/2002, art. 3)"
  },
  {
    tema: "Protección de datos e historia clínica",
    enunciado: "Según la normativa, el consentimiento informado debe darse por escrito, entre otros casos, en:",
    opciones: ["Un cambio postural", "Intervenciones quirúrgicas y procedimientos diagnósticos o terapéuticos invasivos", "Una consulta de revisión", "La toma de temperatura"],
    correcta: "B",
    explicacion: "Como regla general es verbal. (Ley 3/2001; Ley 41/2002, art. 8)"
  },
  {
    tema: "Protección de datos e historia clínica",
    enunciado: "Se puede prescindir del consentimiento informado cuando:",
    opciones: ["El paciente es mayor de 70 años", "El paciente no habla gallego", "Hay riesgo para la salud pública o una urgencia que no permite demoras por riesgo de lesiones irreversibles o de muerte", "El médico tiene prisa"],
    correcta: "C",
    explicacion: "Excepciones legales. (Ley 3/2001; Ley 41/2002, art. 9.2)"
  },
  {
    tema: "Protección de datos e historia clínica",
    enunciado: "El consentimiento por representación (o sustitución) se presta cuando:",
    opciones: ["Siempre en urgencias", "El paciente es extranjero", "El paciente no es capaz de decidir según el criterio del médico, está incapacitado legalmente o es un menor sin madurez suficiente", "El paciente prefiere que decida su familia en todo caso"],
    correcta: "C",
    explicacion: "Representación. (Ley 3/2001; Ley 41/2002, art. 9.3)"
  },
  {
    tema: "Protección de datos e historia clínica",
    enunciado: "Los mayores de 16 años o menores emancipados, en general:",
    opciones: ["Pueden prestar el consentimiento por sí mismos, salvo actuaciones de grave riesgo", "No pueden consentir nada", "Necesitan autorización judicial", "Necesitan siempre a sus padres"],
    correcta: "A",
    explicacion: "En actuaciones de grave riesgo para su vida o salud, consiente el representante legal, después de oír la opinión del menor (redacción vigente desde la Ley 26/2015). (Ley 41/2002, art. 9.4)"
  },
  {
    tema: "Protección de datos e historia clínica",
    enunciado: "El paciente puede revocar el consentimiento informado:",
    opciones: ["Solo con permiso del médico", "Solo antes de ingresar", "Nunca una vez firmado", "Libremente y por escrito en cualquier momento"],
    correcta: "D",
    explicacion: "Revocación. (Ley 41/2002, art. 8.5)"
  },
  {
    tema: "Protección de datos e historia clínica",
    enunciado: "El documento en el que una persona expresa anticipadamente sus deseos sobre los cuidados y tratamientos para cuando no pueda expresarlos se denomina en Galicia:",
    opciones: ["Instrucciones previas (antes llamadas voluntades anticipadas)", "Consentimiento verbal", "Alta voluntaria", "Testamento ológrafo"],
    correcta: "A",
    explicacion: "Se inscribe en el registro correspondiente. (Ley 3/2001 (mod. Ley 3/2005); Ley 41/2002, art. 11)"
  },
  {
    tema: "Protección de datos e historia clínica",
    enunciado: "La historia clínica es:",
    opciones: ["Una carpeta personal del médico", "El informe de alta exclusivamente", "El conjunto de documentos con los datos, valoraciones e informaciones sobre la situación y la evolución clínica del paciente a lo largo de su proceso asistencial", "Un documento solo para la factura"],
    correcta: "C",
    explicacion: "Definición. (Ley 3/2001; Ley 41/2002, art. 14)"
  },
  {
    tema: "Protección de datos e historia clínica",
    enunciado: "La finalidad principal de la historia clínica es:",
    opciones: ["Facilitar la asistencia sanitaria al paciente", "Elaborar estadísticas", "Servir de prueba en juicios", "Controlar al personal"],
    correcta: "A",
    explicacion: "Otras finalidades son secundarias. (Ley 41/2002, art. 16.1)"
  },
  {
    tema: "Protección de datos e historia clínica",
    enunciado: "La custodia de la historia clínica corresponde a:",
    opciones: ["El celador", "El centro sanitario", "La familia", "El paciente"],
    correcta: "B",
    explicacion: "El centro garantiza su conservación y seguridad. (Ley 3/2001; Ley 41/2002, art. 17)"
  },
  {
    tema: "Protección de datos e historia clínica",
    enunciado: "La historia clínica debe ser, como mínimo:",
    opciones: ["Única por paciente en cada centro sanitario", "Una por cada servicio", "Una por cada visita", "Una por cada médico"],
    correcta: "A",
    explicacion: "En el Sergas, además, es electrónica y única (IANUS). (Ley 41/2002, art. 14.1)"
  },
  {
    tema: "Protección de datos e historia clínica",
    enunciado: "La norma gallega que regula el uso y acceso a la historia clínica electrónica es:",
    opciones: ["El Decreto 206/2005", "El Decreto 151/2014", "El Decreto 29/2009", "La Ley 2/2015"],
    correcta: "C",
    explicacion: "Uso y acceso a la historia clínica electrónica. (Decreto 29/2009 de Galicia)"
  },
  {
    tema: "Protección de datos e historia clínica",
    enunciado: "El personal de administración y gestión de los centros sanitarios puede acceder a la historia clínica:",
    opciones: ["Solo con permiso del paciente por escrito cada vez", "Solo a los datos relacionados con sus propias funciones", "A toda la historia sin límites", "A ningún dato nunca"],
    correcta: "B",
    explicacion: "Acceso limitado a lo necesario. (Ley 41/2002, art. 16.4)"
  },
  {
    tema: "Protección de datos e historia clínica",
    enunciado: "El acceso a la historia clínica con fines judiciales, epidemiológicos, de investigación o docencia obliga, en general, a:",
    opciones: ["Publicar los datos", "Enviar la historia completa a cualquiera", "Pedir permiso al celador", "Preservar los datos de identificación personal del paciente separados de los clínicos (anonimización o seudonimización), salvo excepciones legales"],
    correcta: "D",
    explicacion: "Separación de datos identificativos. (Ley 41/2002, art. 16.3)"
  },
  {
    tema: "Protección de datos e historia clínica",
    enunciado: "El paciente puede acceder a su historia clínica, salvo:",
    opciones: ["Sus diagnósticos", "Sus resultados de pruebas", "Los datos de terceros y las anotaciones subjetivas de los profesionales que estos reserven", "Sus informes"],
    correcta: "C",
    explicacion: "Límites al acceso. (Ley 41/2002, art. 18)"
  },
  {
    tema: "Protección de datos e historia clínica",
    enunciado: "La información a los familiares sobre el estado del paciente:",
    opciones: ["Se da en la medida en que el paciente lo permita expresa o tácitamente", "Se da siempre a cualquier familiar", "No se da nunca", "La da el celador"],
    correcta: "A",
    explicacion: "El titular es el paciente. (Ley 41/2002, art. 5.1)"
  },
  {
    tema: "Protección de datos e historia clínica",
    enunciado: "Ante una llamada telefónica de alguien que dice ser familiar y pide información de un paciente, el celador:",
    opciones: ["Informa del diagnóstico", "No da información clínica y deriva la llamada según el protocolo del centro", "Le dice el número de habitación sin comprobar", "Le pasa directamente con el paciente sin preguntar"],
    correcta: "B",
    explicacion: "No se puede verificar la identidad por teléfono. (Protección de datos)"
  },
  {
    tema: "Protección de datos e historia clínica",
    enunciado: "Los listados de pacientes con datos personales en los controles de enfermería:",
    opciones: ["Deben estar fuera de la vista del público", "Se tiran a la papelera al final del turno", "Se dan a las visitas que los pidan", "Pueden colgarse en el pasillo"],
    correcta: "A",
    explicacion: "Integridad y confidencialidad. (RGPD, art. 5.1.f)"
  },
  {
    tema: "Protección de datos e historia clínica",
    enunciado: "Un celador encuentra en una papelera de la sala de espera un informe clínico con nombre del paciente. ¿Qué hace?",
    opciones: ["Lo recoge y lo entrega para su destrucción segura o custodia, y comunica la incidencia", "Lo deja ahí", "Lo lee y lo vuelve a tirar", "Se lo da a otro paciente"],
    correcta: "A",
    explicacion: "Puede ser una brecha de seguridad. (Protección de datos)"
  },
  {
    tema: "Protección de datos e historia clínica",
    enunciado: "El tratamiento de datos de salud por los centros sanitarios para la asistencia sanitaria se basa en:",
    opciones: ["El consentimiento por escrito para cada dato", "La autorización judicial", "Ninguna base legal", "Las excepciones previstas en el RGPD para fines de medicina preventiva, diagnóstico y asistencia, por profesionales sujetos a secreto"],
    correcta: "D",
    explicacion: "Base legal del tratamiento asistencial. (RGPD, art. 9.2.h; LOPDGDD, art. 9)"
  },
  {
    tema: "Protección de datos e historia clínica",
    enunciado: "La videovigilancia en los centros de trabajo:",
    opciones: ["Solo puede verla el celador", "Está prohibida en todo caso", "Debe informarse a los trabajadores y usuarios, y no puede instalarse en vestuarios, aseos o zonas de descanso", "Puede instalarse en cualquier lugar sin avisar"],
    correcta: "C",
    explicacion: "Con carteles informativos. (LOPDGDD, arts. 22 y 89)"
  },
  {
    tema: "Protección de datos e historia clínica",
    enunciado: "Las imágenes de videovigilancia se deben suprimir, como regla general, en el plazo máximo de:",
    opciones: ["Un día", "Un mes desde su captación, salvo que deban conservarse para acreditar hechos", "Un año", "Cinco años"],
    correcta: "B",
    explicacion: "Plazo de conservación. (LOPDGDD, art. 22.3)"
  },
  {
    tema: "Protección de datos e historia clínica",
    enunciado: "El derecho de oposición permite al interesado:",
    opciones: ["Oponerse a que se traten sus datos en determinadas circunstancias", "Oponerse a una oposición", "Oponerse a pagar impuestos", "Borrar los datos de otros"],
    correcta: "A",
    explicacion: "Oposición. (RGPD, art. 21)"
  },
  {
    tema: "Protección de datos e historia clínica",
    enunciado: "El derecho a la limitación del tratamiento permite:",
    opciones: ["Que se publiquen", "Que se transfieran", "Que se borren automáticamente", "Que los datos se conserven pero no se traten mientras, por ejemplo, se comprueba su exactitud"],
    correcta: "D",
    explicacion: "Limitación. (RGPD, art. 18)"
  },
  {
    tema: "Protección de datos e historia clínica",
    enunciado: "El responsable del tratamiento es:",
    opciones: ["Quien determina los fines y medios del tratamiento de los datos", "El paciente", "El informático que repara el ordenador", "El trabajador que introduce los datos"],
    correcta: "A",
    explicacion: "En el Sergas, el propio organismo. (RGPD, art. 4.7)"
  },
  {
    tema: "Protección de datos e historia clínica",
    enunciado: "El encargado del tratamiento es:",
    opciones: ["La AEPD", "Quien trata los datos por cuenta del responsable", "El paciente", "El delegado de protección de datos"],
    correcta: "B",
    explicacion: "Por ejemplo, una empresa que presta un servicio al hospital. (RGPD, art. 4.8)"
  },
  {
    tema: "Protección de datos e historia clínica",
    enunciado: "La seudonimización consiste en:",
    opciones: ["Cambiar el nombre del paciente en su historia", "Publicar los datos con un alias", "Tratar los datos de forma que no puedan atribuirse a una persona sin usar información adicional que se guarda por separado", "Borrar todos los datos"],
    correcta: "C",
    explicacion: "Medida de seguridad. (RGPD, art. 4.5)"
  },
  {
    tema: "Protección de datos e historia clínica",
    enunciado: "Los datos genéticos y biométricos son:",
    opciones: ["Datos sin importancia", "Categorías especiales de datos", "Datos públicos", "Datos de empresa"],
    correcta: "B",
    explicacion: "Protección reforzada. (RGPD, art. 9)"
  },
  {
    tema: "Protección de datos e historia clínica",
    enunciado: "El consentimiento para el tratamiento de datos, cuando sea la base legal, debe ser:",
    opciones: ["Tácito por silencio", "Obligatorio", "General para cualquier uso", "Libre, específico, informado e inequívoco"],
    correcta: "D",
    explicacion: "Requisitos del consentimiento. (RGPD, art. 4.11)"
  },
  {
    tema: "Protección de datos e historia clínica",
    enunciado: "El consentimiento para el tratamiento de datos se puede retirar:",
    opciones: ["Solo pasados 5 años", "Nunca", "En cualquier momento, siendo tan fácil retirarlo como darlo", "Solo por escrito ante notario"],
    correcta: "C",
    explicacion: "Retirada del consentimiento. (RGPD, art. 7.3)"
  },
  {
    tema: "Protección de datos e historia clínica",
    enunciado: "La información clínica que se da al paciente debe ser:",
    opciones: ["Solo por escrito", "Resumida en una palabra", "Lo más técnica posible", "Verdadera, comprensible y adecuada a sus necesidades"],
    correcta: "D",
    explicacion: "Calidad de la información. (Ley 41/2002, art. 4.2)"
  },
  {
    tema: "Protección de datos e historia clínica",
    enunciado: "La información asistencial, como regla general, se proporciona:",
    opciones: ["Verbalmente, dejando constancia en la historia clínica", "Por carta certificada", "Por correo electrónico", "Siempre por escrito"],
    correcta: "A",
    explicacion: "Información verbal. (Ley 41/2002, art. 4.1)"
  },
  {
    tema: "Protección de datos e historia clínica",
    enunciado: "El derecho a no ser informado:",
    opciones: ["Lo decide el celador", "No existe", "Lo decide la familia", "Debe respetarse, salvo que la información sea necesaria por interés de la salud del propio paciente, de terceros o de la colectividad"],
    correcta: "D",
    explicacion: "Renuncia a la información. (Ley 41/2002, art. 9.1)"
  },
  {
    tema: "Protección de datos e historia clínica",
    enunciado: "La Ley 3/2001 de Galicia fue modificada en 2005 por:",
    opciones: ["La Ley 41/2002", "La Ley 8/2008", "La Ley 3/2005, de 7 de marzo", "La Ley 2/2015"],
    correcta: "C",
    explicacion: "Adaptación a la Ley 41/2002. (Ley 3/2005)"
  },
  {
    tema: "Protección de datos e historia clínica",
    enunciado: "El celador que traslada una historia clínica en papel y la pierde debe:",
    opciones: ["Comunicarlo inmediatamente a su responsable, porque puede ser una brecha de seguridad", "Esperar a que aparezca", "Fotocopiar otra", "Callar"],
    correcta: "A",
    explicacion: "Comunicación inmediata. (RGPD, art. 33; protección de datos)"
  },
  {
    tema: "Protección de datos e historia clínica",
    enunciado: "La información sobre el estado de salud de un trabajador del Sergas que conoce un compañero:",
    opciones: ["Puede comentarse libremente", "Es confidencial y no debe divulgarse", "Se debe contar al jefe en todo caso", "Debe publicarse en el tablón"],
    correcta: "B",
    explicacion: "Los datos de salud de los trabajadores también son especialmente protegidos. (RGPD; LOPDGDD)"
  },
  {
    tema: "Protección de datos e historia clínica",
    enunciado: "El derecho a la intimidad en el uso de dispositivos digitales en el trabajo implica que:",
    opciones: ["No hay ninguna norma", "El empleador solo puede acceder a los dispositivos que facilita para controlar el cumplimiento laboral, con criterios establecidos e informando", "El trabajador puede usar los equipos para cualquier fin", "El empleador puede leer el móvil personal del trabajador"],
    correcta: "B",
    explicacion: "Intimidad digital. (LOPDGDD, art. 87)"
  },
  {
    tema: "Protección de datos e historia clínica",
    enunciado: "La firma del consentimiento informado no exime al profesional de:",
    opciones: ["Informar", "Respetar la intimidad", "Su responsabilidad por una mala práctica", "Nada"],
    correcta: "C",
    explicacion: "El consentimiento no ampara la negligencia. (Ley 41/2002)"
  },
  {
    tema: "Protección de datos e historia clínica",
    enunciado: "Los documentos con datos personales que ya no se necesitan deben:",
    opciones: ["Tirarse a la basura común", "Reutilizarse como borrador", "Guardarse en casa", "Destruirse de forma segura (destructora o contenedores de destrucción confidencial)"],
    correcta: "D",
    explicacion: "Destrucción confidencial. (RGPD, art. 5.1.f)"
  },
  {
    tema: "Protección de datos e historia clínica",
    enunciado: "El sistema informático del Sergas exige, para acceder a los datos de pacientes:",
    opciones: ["El DNI del paciente", "Una contraseña común del servicio", "Credenciales personales y acceso limitado a lo necesario para cada perfil profesional", "Ninguna identificación"],
    correcta: "C",
    explicacion: "Perfiles de acceso. (Normativa de seguridad del Sergas)"
  },
  {
    tema: "Protección de datos e historia clínica",
    origen: "Examen 2024 · Común C1",
    enunciado: "Según la Ley Orgánica 3/2018, de 5 de diciembre, de protección de datos personales y garantía de los derechos digitales, el tratamiento de datos personales de un menor de edad únicamente podrá fundarse en su consentimiento cuando sea:",
    opciones: ["Mayor de 13 años", "Mayor de 14 años", "Mayor de 15 años", "Mayor de 16 años"],
    correcta: "B",
    explicacion: "El artículo 7 de la LO 3/2018 permite que el menor consienta por sí mismo a partir de los 14 años."
  },
  {
    tema: "Protección de datos e historia clínica",
    origen: "Examen 2024 · Común C11 (reserva)",
    enunciado: "Respecto al acceso a la historia clínica, según lo establecido en la Ley 3/2001, reguladora del consentimiento informado y de la historia clínica de los pacientes, señale cuál de las siguientes afirmaciones es falsa:",
    opciones: ["El paciente tiene derecho de acceso a la documentación de la historia clínica y a obtener copia de los datos que figuran en ella", "Los órganos competentes para tramitar y resolver los procedimientos de responsabilidad patrimonial por el funcionamiento de la administración sanitaria tendrán derecho de acceso a la documentación de la historia clínica", "Estará permitido el acceso a la historia clínica completa a los familiares del paciente, cualquiera que sea su relación de parentesco", "El acceso a la historia clínica con fines judiciales, epidemiológicos, de salud pública, de investigación o docencia obliga a reservar los datos de identificación personal del paciente, de modo que quede asegurado su anonimato"],
    correcta: "C",
    explicacion: "Es falsa: los familiares no tienen acceso libre a la historia clínica completa solo por ser familiares."
  },
  {
    tema: "Protección de datos e historia clínica",
    origen: "Examen SAS 2025 · P5",
    enunciado: "Los responsables y encargados del tratamiento de datos, así como todas las personas que intervengan en cualquier fase de éste, estarán sujetas al deber de:",
    opciones: ["Sigilo.", "Custodia.", "Confidencialidad.", "Cuidado."],
    correcta: "C",
    explicacion: "La LO 3/2018 (art. 5) impone a todos los que tratan datos el deber de confidencialidad, y sigue aunque termine la relación."
  },
  {
    tema: "Protección de datos e historia clínica",
    origen: "Examen SAS 2025 · P11",
    enunciado: "La información previa al consentimiento por escrito deberá incluir:",
    opciones: ["Las consecuencias relevantes o de importancia que la intervención origina con seguridad.", "Los riesgos relacionados con las circunstancias personales o profesionales del paciente.", "Los riesgos probables en condiciones normales, conforme a la experiencia y al estado de la ciencia o directamente relacionados con el tipo de intervención.", "Todas las respuestas anteriores son correctas."],
    correcta: "D",
    explicacion: "Ley 41/2002, art. 10: la información previa al consentimiento escrito incluye las consecuencias seguras, los riesgos personales y los riesgos probables. Por eso son todas."
  },
  {
    tema: "Protección de datos e historia clínica",
    origen: "Examen SAS 2025 · P35",
    enunciado: "Para preservar la intimidad a lo largo de todo acto clínico, indique la respuesta correcta:",
    opciones: ["En la historia clínica no se incluirán datos que reflejen aspectos íntimos del paciente y no tengan relación con la naturaleza clínica del resto de la historia.", "No se realizarán de manera conjunta consultas con distintos pacientes.", "La presencia de profesionales en formación, se valorará en casos particulares.", "Todas las respuestas anteriores son correctas."],
    correcta: "D",
    explicacion: "Para proteger la intimidad: nada de datos íntimos que no tengan que ver con la clínica, nada de consultas conjuntas y la presencia de alumnos se valora caso a caso. Por eso son todas."
  },
  {
    tema: "Protección de datos e historia clínica",
    origen: "Examen SAS 2025 aplazado · P6",
    enunciado: "Según el Art. 7 de la Ley Orgánica 3/2018, de Protección de Datos personales y garantía de los derechos digitales, el tratamiento de los datos personales de un menor de edad únicamente podrá fundarse en su consentimiento:",
    opciones: ["Cuando sea mayor de quince años.", "Cuando sea mayor de veinte años.", "Cuando sea mayor de dieciocho años.", "Cuando sea mayor de catorce años."],
    correcta: "D",
    explicacion: "LO 3/2018, art. 7: un menor puede consentir el tratamiento de sus datos si es mayor de 14 años."
  },
  {
    tema: "Protección de datos e historia clínica",
    origen: "Examen SAS 2025 aplazado · P12",
    enunciado: "Según la Ley 41/2002, de 14 de noviembre, una de las medidas que deben tomar los Centros Sanitarios para proteger el derecho a la intimidad de los datos de salud del usuario es:",
    opciones: ["Se publicarán sus datos en internet para mayor trasparencia.", "Se adaptarán las medidas para garantizar los derechos de confidencialidad.", "Se permitirá el acceso libre a los datos para agilizar los procesos.", "No se registrará ningún dato de salud."],
    correcta: "B",
    explicacion: "Ley 41/2002, art. 7: los centros deben adoptar medidas para garantizar la confidencialidad de los datos de salud."
  },
  {
    tema: "Protección de datos e historia clínica",
    origen: "Examen SAS 2025 aplazado · P13",
    enunciado: "La regulación de los derechos y obligaciones de los pacientes, usuarios y profesionales, así como de los centros y servicios sanitarios, públicos y privados, en materia de autonomía del paciente y de información y documentación clínica, es objeto recogido en:",
    opciones: ["El Real Decreto Legislativo 5/2015, de 30 de octubre.", "La Ley 41/2002, de 14 de noviembre.", "La Ley 55/2003, de 16 de diciembre.", "La Ley 12/2007, de 26 de noviembre."],
    correcta: "B",
    explicacion: "La Ley 41/2002 es la ley de autonomía del paciente y de información y documentación clínica."
  },
  // ===================================================================
  //  PREVENCIÓN DE RIESGOS, VIOLENCIA DE GÉNERO E IGUALDAD (113 preguntas)
  // ===================================================================
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "La Ley de Prevención de Riesgos Laborales es:",
    opciones: ["La Ley 55/2003", "El Real Decreto 487/1997", "La Ley 14/1986", "La Ley 31/1995, de 8 de noviembre"],
    correcta: "D",
    explicacion: "LPRL. (Ley 31/1995)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "La Ley de Prevención de Riesgos Laborales se aplica también:",
    opciones: ["Solo a los trabajadores autónomos", "Solo a la construcción", "Solo a las empresas privadas", "Al personal al servicio de las administraciones públicas, incluido el personal estatutario"],
    correcta: "D",
    explicacion: "Con algunas exclusiones (policía, protección civil en determinadas funciones...). (LPRL, art. 3)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "Según la LPRL, el riesgo laboral es:",
    opciones: ["La posibilidad de que un trabajador sufra un determinado daño derivado del trabajo", "Un accidente ya ocurrido", "Una sanción laboral", "Una enfermedad común"],
    correcta: "A",
    explicacion: "La gravedad se valora por la probabilidad y la severidad del daño. (LPRL, art. 4.2)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "Según la LPRL, se consideran daños derivados del trabajo:",
    opciones: ["Las enfermedades, patologías o lesiones sufridas con motivo u ocasión del trabajo", "Solo los accidentes in itinere", "Los daños en el coche particular", "Solo las enfermedades profesionales listadas"],
    correcta: "A",
    explicacion: "Definición legal. (LPRL, art. 4.3)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "Un riesgo grave e inminente es, según la LPRL:",
    opciones: ["Un riesgo solo psicológico", "Cualquier riesgo leve", "El que resulta probable racionalmente que se materialice en un futuro inmediato y pueda suponer un daño grave para la salud", "Un riesgo que se producirá dentro de diez años"],
    correcta: "C",
    explicacion: "Ante él, el trabajador puede interrumpir su actividad. (LPRL, art. 4.4)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "Ante un riesgo grave e inminente, el trabajador tiene derecho a:",
    opciones: ["Esperar la orden escrita del gerente", "Seguir trabajando obligatoriamente", "Interrumpir su actividad y abandonar el lugar de trabajo, si es necesario", "Nada"],
    correcta: "C",
    explicacion: "Sin sufrir perjuicio por ello, salvo mala fe o negligencia grave. (LPRL, art. 21)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "El equipo de protección individual (EPI) es, según la LPRL:",
    opciones: ["El extintor", "Cualquier equipo destinado a ser llevado o sujetado por el trabajador para protegerle de uno o varios riesgos", "Las barandillas de las escaleras", "La ventilación del edificio"],
    correcta: "B",
    explicacion: "Guantes, mascarillas, gafas, delantales plomados... (LPRL, art. 4.8)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "Según los principios de la acción preventiva, se deben adoptar medidas que antepongan:",
    opciones: ["La protección colectiva a la individual", "La rapidez a la seguridad", "El ahorro económico a la protección", "La protección individual a la colectiva"],
    correcta: "A",
    explicacion: "Los EPI son el último recurso. (LPRL, art. 15.1.h)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "El primer principio de la acción preventiva según el artículo 15 de la LPRL es:",
    opciones: ["Usar EPI", "Evaluar los riesgos", "Evitar los riesgos", "Formar al trabajador"],
    correcta: "C",
    explicacion: "Después: evaluar los que no se puedan evitar y combatirlos en su origen. (LPRL, art. 15.1.a)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "Otro principio de la acción preventiva es:",
    opciones: ["Adaptar la persona al trabajo en todo caso", "Aumentar la jornada", "Adaptar el trabajo a la persona", "Reducir la formación"],
    correcta: "C",
    explicacion: "Diseño de puestos, equipos y métodos. (LPRL, art. 15.1.d)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "Sustituir lo peligroso por lo que entrañe poco o ningún peligro es:",
    opciones: ["Una obligación del trabajador", "Un principio de la acción preventiva", "Una opción prohibida", "Una sanción"],
    correcta: "B",
    explicacion: "Principio preventivo. (LPRL, art. 15.1.f)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "El derecho de los trabajadores a una protección eficaz en materia de seguridad y salud en el trabajo supone:",
    opciones: ["Nada", "Que solo se protege a los fijos", "Un deber correlativo del empresario (o la Administración) de protegerlos frente a los riesgos laborales", "Que el trabajador paga su protección"],
    correcta: "C",
    explicacion: "Derecho y deber correlativo. (LPRL, art. 14)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "El coste de las medidas de seguridad y salud en el trabajo:",
    opciones: ["Lo paga el trabajador", "Lo paga la mutua del trabajador", "Se reparte a medias", "No debe recaer en ningún caso sobre los trabajadores"],
    correcta: "D",
    explicacion: "Coste empresarial. (LPRL, art. 14.5)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "La formación en prevención que debe recibir el trabajador:",
    opciones: ["La paga el trabajador", "Solo se da una vez en la vida", "Debe ser teórica y práctica, suficiente y adecuada, dentro de la jornada o descontando el tiempo, y sin coste para él", "Es voluntaria y fuera de horario"],
    correcta: "C",
    explicacion: "También cuando cambian las funciones o se introducen nuevas tecnologías. (LPRL, art. 19)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "La vigilancia de la salud de los trabajadores es, como regla general:",
    opciones: ["Pública", "Voluntaria, con excepciones (por ejemplo, cuando sea imprescindible para evaluar el riesgo o proteger a terceros)", "Prohibida", "Obligatoria siempre"],
    correcta: "B",
    explicacion: "Con respeto a la intimidad y confidencialidad. (LPRL, art. 22)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "Los resultados de la vigilancia de la salud:",
    opciones: ["Son confidenciales y no pueden usarse para discriminar al trabajador", "Se publican en el tablón", "Los conoce todo el servicio", "Se entregan a los compañeros"],
    correcta: "A",
    explicacion: "El empresario solo conoce las conclusiones sobre aptitud. (LPRL, art. 22.4)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "La evaluación de riesgos laborales sirve para:",
    opciones: ["Estimar la magnitud de los riesgos que no se han podido evitar y decidir las medidas preventivas", "Elegir vacaciones", "Sancionar a los trabajadores", "Calcular salarios"],
    correcta: "A",
    explicacion: "Base de la planificación preventiva. (LPRL, art. 16)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "¿Cuál es una obligación del trabajador según el artículo 29 de la LPRL?",
    opciones: ["Comprar sus propios EPI", "Elaborar el plan de prevención", "Usar adecuadamente los equipos y los EPI, y no inutilizar los dispositivos de seguridad", "Realizar la evaluación de riesgos"],
    correcta: "C",
    explicacion: "Obligaciones de los trabajadores. (LPRL, art. 29)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "El trabajador que detecta una situación de riesgo en su trabajo debe:",
    opciones: ["Informar de inmediato a su superior y a los responsables de prevención", "Arreglarlo él aunque no sepa", "Esperar a que alguien se lesione", "Callar para no tener problemas"],
    correcta: "A",
    explicacion: "Deber de informar. (LPRL, art. 29.2.4)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "El incumplimiento de las obligaciones de prevención por parte del personal estatutario:",
    opciones: ["No tiene consecuencias", "Puede constituir una falta disciplinaria", "Solo afecta a los médicos", "Es un delito en todo caso"],
    correcta: "B",
    explicacion: "Incumplimiento según su régimen disciplinario. (LPRL, art. 29.3)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "Los trabajadores especialmente sensibles a determinados riesgos (por sus características personales o estado biológico) deben:",
    opciones: ["Ser despedidos", "Asumir los mismos riesgos", "Ser protegidos de forma específica, sin ser destinados a puestos que les supongan un peligro", "Firmar una renuncia"],
    correcta: "C",
    explicacion: "Protección específica. (LPRL, art. 25)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "Cuando un puesto supone riesgo para una trabajadora embarazada, la primera medida es:",
    opciones: ["Despedirla", "Adaptar las condiciones o el tiempo de trabajo", "Mandarla a casa sin sueldo", "Ignorarlo"],
    correcta: "B",
    explicacion: "Si no es posible, cambio de puesto y, en último término, suspensión por riesgo durante el embarazo. (LPRL, art. 26)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "El organismo científico-técnico de la Administración General del Estado especializado en prevención es:",
    opciones: ["La Inspección de Hacienda", "El SEPE", "El INSS", "El Instituto Nacional de Seguridad y Salud en el Trabajo (INSST)"],
    correcta: "D",
    explicacion: "Elabora guías técnicas. (LPRL, art. 8)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "El organismo gallego en materia de seguridad y salud laboral es:",
    opciones: ["El Sergas", "El Instituto Galego de Seguridade e Saúde Laboral (ISSGA)", "La FEGAS", "El 061"],
    correcta: "B",
    explicacion: "Organismo autonómico de prevención. (Galicia)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "El órgano colegiado asesor de las administraciones públicas en la formulación de las políticas de prevención es:",
    opciones: ["El Comité de Empresa", "El Consejo de Ministros", "El Consello da Xunta", "La Comisión Nacional de Seguridad y Salud en el Trabajo"],
    correcta: "D",
    explicacion: "Con participación de administraciones, sindicatos y organizaciones empresariales. (LPRL, art. 13)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "La vigilancia y control del cumplimiento de la normativa de prevención corresponde a:",
    opciones: ["La Policía Local", "Los propios trabajadores", "La Inspección de Trabajo y Seguridad Social", "Los colegios profesionales"],
    correcta: "C",
    explicacion: "Función inspectora. (LPRL, art. 9)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "Los delegados de prevención son:",
    opciones: ["Médicos del trabajo", "Inspectores de trabajo", "Los representantes de los trabajadores con funciones específicas en prevención de riesgos", "Técnicos de la empresa"],
    correcta: "C",
    explicacion: "Designados por y entre los representantes del personal. (LPRL, art. 35)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "El Comité de Seguridad y Salud debe constituirse en las empresas o centros con:",
    opciones: ["Cualquier número", "10 o más trabajadores", "100 o más trabajadores", "50 o más trabajadores"],
    correcta: "D",
    explicacion: "Órgano paritario de participación. (LPRL, art. 38)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "El Comité de Seguridad y Salud está formado por:",
    opciones: ["Los médicos del centro", "Solo la dirección", "Solo los delegados de prevención", "Los delegados de prevención y representantes del empresario (o la Administración) en igual número"],
    correcta: "D",
    explicacion: "Composición paritaria. (LPRL, art. 38.2)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "El Comité de Seguridad y Salud se reúne, como mínimo:",
    opciones: ["Trimestralmente", "Cada semana", "Una vez al año", "Cada cinco años"],
    correcta: "A",
    explicacion: "Y siempre que lo solicite alguna de las representaciones. (LPRL, art. 38.3)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "El capítulo V de la LPRL regula:",
    opciones: ["Las definiciones", "Los servicios de prevención", "La consulta y participación de los trabajadores", "Las responsabilidades y sanciones"],
    correcta: "C",
    explicacion: "Cap. I: objeto y definiciones; II: política; III: derechos y obligaciones; IV: servicios de prevención; V: consulta y participación. (Estructura de la LPRL)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "El capítulo III de la LPRL regula:",
    opciones: ["La consulta y participación", "El objeto y las definiciones", "Los derechos y obligaciones en materia de prevención", "La política de prevención"],
    correcta: "C",
    explicacion: "Arts. 14-29. (Estructura de la LPRL)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "El riesgo laboral más característico del trabajo en instituciones sanitarias por contacto con sangre y fluidos es:",
    opciones: ["El riesgo por vibraciones", "El riesgo biológico", "El ruido", "El riesgo eléctrico"],
    correcta: "B",
    explicacion: "Hepatitis B y C, VIH, tuberculosis... (Riesgos en instituciones sanitarias)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "La norma que regula la protección frente a los agentes biológicos en el trabajo es:",
    opciones: ["El Real Decreto 664/1997", "La Ley 3/2001", "El Real Decreto 487/1997", "El Real Decreto 836/2012"],
    correcta: "A",
    explicacion: "Riesgo biológico. (RD 664/1997)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "Para prevenir los pinchazos accidentales con agujas usadas, NO se debe:",
    opciones: ["Desecharlas inmediatamente tras su uso", "Usar contenedores rígidos", "Reencapuchar las agujas", "Usar dispositivos con mecanismo de seguridad"],
    correcta: "C",
    explicacion: "Reencapuchar es la causa típica de pinchazos. (RD 664/1997; Orden ESS/1451/2013)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "Los contenedores de objetos punzantes y cortantes deben:",
    opciones: ["Ser rígidos, resistentes y no llenarse por encima de su límite (unas tres cuartas partes)", "Llenarse hasta rebosar", "Vaciarse a mano para reutilizarlos", "Ser bolsas de plástico"],
    correcta: "A",
    explicacion: "Seguridad en la eliminación. (Prevención del riesgo biológico)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "Si el celador se pincha con una aguja usada que encuentra en una camilla, debe:",
    opciones: ["Chupar la herida", "Esperar al día siguiente", "Dejar sangrar la herida, lavarla con agua y jabón, desinfectarla y comunicarlo de inmediato al servicio de prevención o urgencias", "No hacer nada si no sangra mucho"],
    correcta: "C",
    explicacion: "Hay tratamientos que deben empezarse en pocas horas. (Protocolo de accidente biológico)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "La vacuna recomendada al personal sanitario y no sanitario con riesgo de exposición a sangre es, entre otras, la de:",
    opciones: ["El cólera", "La hepatitis B", "La fiebre amarilla", "La rabia"],
    correcta: "B",
    explicacion: "Se ofrece gratuitamente. (Vigilancia de la salud del personal)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "Un riesgo químico en los hospitales lo constituyen, por ejemplo:",
    opciones: ["Las camillas", "Los citostáticos, el formaldehído y algunos desinfectantes y gases esterilizantes", "Los ordenadores", "El ruido de los pasillos"],
    correcta: "B",
    explicacion: "Requieren medidas específicas. (Riesgos en instituciones sanitarias)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "La alergia al látex en el personal sanitario está relacionada con:",
    opciones: ["El uso de calzado", "El ordenador", "El uso de mascarillas de papel", "El uso de guantes de látex"],
    correcta: "D",
    explicacion: "Se usan alternativas sin látex. (Riesgos en instituciones sanitarias)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "Las zonas con riesgo de radiaciones ionizantes se señalizan con:",
    opciones: ["Una calavera", "Un triángulo verde", "Una cruz roja", "El trébol radiactivo"],
    correcta: "D",
    explicacion: "Zonas vigiladas y controladas. (Normativa de protección radiológica)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "Al personal que trabaja de forma habitual en zonas controladas con radiaciones ionizantes se le controla la dosis mediante:",
    opciones: ["Un dosímetro personal", "Un tensiómetro", "Un termómetro", "Un pulsioxímetro"],
    correcta: "A",
    explicacion: "Dosimetría personal. (Normativa de protección radiológica)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "El principal riesgo ergonómico del celador es:",
    opciones: ["La manipulación manual de cargas y la movilización de pacientes", "El ruido", "El frío", "Las radiaciones"],
    correcta: "A",
    explicacion: "Lesiones de espalda. (Riesgos en instituciones sanitarias)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "La norma sobre manipulación manual de cargas es:",
    opciones: ["El Real Decreto 1030/2006", "El Real Decreto 487/1997", "La Ley 3/2001", "El Real Decreto 664/1997"],
    correcta: "B",
    explicacion: "Riesgos dorsolumbares. (RD 487/1997)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "El trabajo a turnos y nocturno es un factor de riesgo:",
    opciones: ["Eléctrico", "Psicosocial, que puede alterar el sueño, la alimentación y la vida social y familiar", "Biológico", "Químico"],
    correcta: "B",
    explicacion: "Requiere vigilancia de la salud. (Riesgos psicosociales)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "El síndrome de estar quemado por el trabajo (burnout) se caracteriza por:",
    opciones: ["Una alergia", "Agotamiento emocional, despersonalización y baja realización personal", "Una lesión de espalda", "Una infección"],
    correcta: "B",
    explicacion: "Frecuente en profesiones asistenciales. (Riesgos psicosociales)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "Las agresiones al personal de los centros sanitarios son un riesgo:",
    opciones: ["Biológico", "Psicosocial y de seguridad, frente al que el Sergas tiene un protocolo", "Solo de los médicos", "Inexistente"],
    correcta: "B",
    explicacion: "Se deben comunicar siempre. (Riesgos psicosociales; protocolo del Sergas)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "En el plan de autoprotección de un centro sanitario se establecen:",
    opciones: ["Los salarios", "Las dietas", "Las medidas y la organización para prevenir emergencias y responder a ellas (incendio, evacuación...)", "Los turnos de vacaciones"],
    correcta: "C",
    explicacion: "Medidas de emergencia. (LPRL, art. 20; RD 393/2007)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "La Ley Orgánica de Medidas de Protección Integral contra la Violencia de Género es:",
    opciones: ["La LO 10/2022", "La LO 3/2007", "La LO 1/2004, de 28 de diciembre", "La Ley 11/2007 de Galicia"],
    correcta: "C",
    explicacion: "Violencia de género. (LO 1/2004)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "La LO 1/2004 establece medidas de sensibilización, prevención y detección en el ámbito:",
    opciones: ["Solo empresarial", "Solo militar", "Educativo, publicitario y de los medios de comunicación, y sanitario", "Solo deportivo"],
    correcta: "C",
    explicacion: "Ámbitos de actuación. (LO 1/2004, título I)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "En el ámbito sanitario, la LO 1/2004 encomienda a las administraciones sanitarias:",
    opciones: ["Dictar órdenes de alejamiento", "Promover la detección precoz de la violencia de género y el apoyo asistencial a las víctimas", "Juzgar a los agresores", "Detener a los agresores"],
    correcta: "B",
    explicacion: "Detección y atención. (LO 1/2004, art. 15)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "La LO 1/2004 reconoce a las víctimas de violencia de género el derecho a:",
    opciones: ["Una vivienda en propiedad", "Un empleo público directo", "La información, la asistencia social integral y la asistencia jurídica gratuita", "La custodia automática de los hijos"],
    correcta: "C",
    explicacion: "Derechos de las víctimas. (LO 1/2004, arts. 18-20)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "Las faltas de asistencia de una funcionaria víctima de violencia de género motivadas por su situación física o psicológica:",
    opciones: ["Se descuentan siempre del sueldo", "No se permiten", "Se consideran justificadas cuando así lo determinen los servicios sociales o de salud", "Se sancionan"],
    correcta: "C",
    explicacion: "Faltas justificadas. (LO 1/2004, art. 25; EBEP, art. 49)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "Entre los derechos laborales de la funcionaria víctima de violencia de género están:",
    opciones: ["El ascenso automático", "La jubilación anticipada inmediata", "El cambio de categoría sin proceso", "La reducción o reordenación de su jornada, la movilidad geográfica y la excedencia"],
    correcta: "D",
    explicacion: "Derechos de las funcionarias. (LO 1/2004, art. 24)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "Los órganos judiciales especializados en violencia de género son:",
    opciones: ["Los Juzgados de Violencia sobre la Mujer", "Los Juzgados de Paz", "Los Juzgados de lo Social", "Los Tribunales de Honor"],
    correcta: "A",
    explicacion: "Tutela judicial. (LO 1/2004, título V)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "El organismo estatal que analiza y evalúa la situación de la violencia sobre la mujer es:",
    opciones: ["El Tribunal de Cuentas", "El Observatorio Estatal de Violencia sobre la Mujer", "El INSST", "El Consejo de Estado"],
    correcta: "B",
    explicacion: "Tutela institucional. (LO 1/2004, art. 30)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "La situación de violencia de género, a efectos de los derechos laborales y de Seguridad Social, se acredita, entre otros medios, con:",
    opciones: ["La declaración de un vecino", "Nada", "Una orden de protección, una sentencia, un informe del Ministerio Fiscal o un informe de los servicios sociales o especializados", "Un certificado de empadronamiento"],
    correcta: "C",
    explicacion: "Medios de acreditación. (LO 1/2004, art. 23)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "La ley gallega para la prevención y el tratamiento integral de la violencia de género es:",
    opciones: ["La Ley 11/2007, de 27 de julio", "La Ley 8/2008", "La Ley 3/2001", "El Decreto 206/2005"],
    correcta: "A",
    explicacion: "Concepto amplio de violencia de género. (Ley 11/2007 de Galicia)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "La Ley gallega 11/2007 considera violencia de género:",
    opciones: ["Solo la violencia física", "Solo la que se denuncia", "Cualquier acto violento o agresión, basados en una situación de desigualdad, que tengan como resultado un daño físico, sexual o psicológico a las mujeres, en cualquier ámbito", "Solo la violencia en la pareja con convivencia"],
    correcta: "C",
    explicacion: "Ámbito más amplio que la ley estatal. (Ley 11/2007 de Galicia, art. 1)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "Según la Ley 11/2007, son formas de violencia de género:",
    opciones: ["La física, la psicológica, la sexual y la económica", "Solo la psicológica", "Solo la verbal", "Solo la física y la sexual"],
    correcta: "A",
    explicacion: "Formas de violencia. (Ley 11/2007 de Galicia, art. 3)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "La Ley Orgánica para la igualdad efectiva de mujeres y hombres es:",
    opciones: ["La LO 3/2018", "La LO 1/2004", "La LO 3/2007, de 22 de marzo", "La Ley 11/2007"],
    correcta: "C",
    explicacion: "Igualdad. (LO 3/2007)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "La discriminación directa por razón de sexo es, según la LO 3/2007:",
    opciones: ["Una medida de acción positiva", "Un trato igual a todos", "Cualquier diferencia de sueldo justificada", "La situación en que se encuentra una persona que sea, haya sido o pudiera ser tratada, en atención a su sexo, de manera menos favorable que otra en situación comparable"],
    correcta: "D",
    explicacion: "Discriminación directa. (LO 3/2007, art. 6.1)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "La discriminación indirecta por razón de sexo es:",
    opciones: ["Un error administrativo", "La situación en que una disposición, criterio o práctica aparentemente neutros pone a personas de un sexo en desventaja particular respecto de las del otro, sin justificación objetiva", "Un insulto sexista", "La acción positiva"],
    correcta: "B",
    explicacion: "Discriminación indirecta. (LO 3/2007, art. 6.2)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "Todo trato desfavorable a las mujeres relacionado con el embarazo o la maternidad constituye:",
    opciones: ["Una acción positiva", "Una discriminación indirecta en todo caso", "Discriminación directa por razón de sexo", "Una práctica legal"],
    correcta: "C",
    explicacion: "Protección de la maternidad. (LO 3/2007, art. 8)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "Las acciones positivas son:",
    opciones: ["Medidas específicas a favor de las mujeres para corregir situaciones de desigualdad de hecho, razonables y proporcionadas", "Discriminaciones prohibidas", "Medidas permanentes sin límite", "Sanciones a los hombres"],
    correcta: "A",
    explicacion: "Mientras subsistan las situaciones de desigualdad. (LO 3/2007, art. 11)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "Según la LO 3/2007, existe composición equilibrada cuando las personas de cada sexo:",
    opciones: ["Superan el 70 %", "Son exactamente el 50 %", "No superan el 60 % ni son menos del 40 %", "No hay porcentaje"],
    correcta: "C",
    explicacion: "Presencia equilibrada. (LO 3/2007, disp. adicional 1.ª)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "La LO 3/2007 establece que el acoso sexual y el acoso por razón de sexo:",
    opciones: ["Son conductas leves", "Se consideran en todo caso discriminatorios", "Solo son relevantes si hay denuncia penal", "No están regulados"],
    correcta: "B",
    explicacion: "Discriminación. (LO 3/2007, art. 7.3)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "El principio de indemnidad frente a represalias de la LO 3/2007 protege a quien:",
    opciones: ["Rechaza un ascenso", "Comete acoso", "Presenta una queja o reclamación para exigir el cumplimiento del principio de igualdad", "Llega tarde"],
    correcta: "C",
    explicacion: "Prohibición de represalias. (LO 3/2007, art. 9)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "Las administraciones públicas deben aprobar, al inicio de cada legislatura, un plan para la igualdad y, además, deben contar con:",
    opciones: ["Una cuota de despidos", "Un protocolo de actuación frente al acoso sexual y por razón de sexo", "Un servicio de seguridad privada", "Nada"],
    correcta: "B",
    explicacion: "Medidas en el empleo público. (LO 3/2007, arts. 51 y 62)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "Las disposiciones normativas de las administraciones deben ir acompañadas de:",
    opciones: ["Un informe de impacto de género", "Nada", "Un informe de la Policía", "Un informe de impacto económico privado"],
    correcta: "A",
    explicacion: "Evaluación del impacto de género. (LO 3/2007, art. 19)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "En Galicia, la normativa autonómica sobre igualdad se recoge en:",
    opciones: ["El Decreto Legislativo 2/2015, texto refundido de las disposiciones legales de Galicia en materia de igualdad", "La Ley 3/2001", "La Ley 8/2008", "El Decreto 206/2005"],
    correcta: "A",
    explicacion: "Igualdad en Galicia. (Decreto Legislativo 2/2015 de Galicia)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "El permiso por nacimiento y cuidado de menor de los empleados públicos:",
    opciones: ["Corresponde a ambos progenitores en condiciones de igualdad y es intransferible", "Solo corresponde al padre", "No existe en el empleo público", "Solo corresponde a la madre"],
    correcta: "A",
    explicacion: "Equiparación de permisos. (EBEP, art. 49)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "La reducción de jornada por guarda legal de un menor:",
    opciones: ["Es un derecho de mujeres y hombres por igual, con la reducción proporcional de retribuciones", "Solo pueden pedirla las mujeres", "No existe en el Sergas", "No reduce el sueldo"],
    correcta: "A",
    explicacion: "Conciliación. (EBEP, art. 48)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "Según la LO 3/2007, el lenguaje no sexista en el ámbito administrativo:",
    opciones: ["Solo se aplica en las leyes", "Debe implantarse en el ámbito administrativo y fomentarse en las relaciones sociales, culturales y artísticas", "Es irrelevante", "Está prohibido"],
    correcta: "B",
    explicacion: "Criterio general de actuación de los poderes públicos. (LO 3/2007, art. 14.11)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "La LPRL fue aprobada para trasponer al derecho español, principalmente:",
    opciones: ["La Directiva de servicios", "La Directiva Marco 89/391/CEE sobre seguridad y salud de los trabajadores", "El Tratado de Lisboa", "El RGPD"],
    correcta: "B",
    explicacion: "Directiva Marco. (LPRL, exposición de motivos)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "La empresa o Administración debe informar a cada trabajador:",
    opciones: ["De los riesgos de su puesto, de las medidas de protección y de las medidas de emergencia", "Solo de su sueldo", "Solo de sus vacaciones", "De nada"],
    correcta: "A",
    explicacion: "Información a los trabajadores. (LPRL, art. 18)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "Los servicios de prevención pueden ser:",
    opciones: ["Solo de la Inspección", "Propios, ajenos o mancomunados, entre otras modalidades", "Solo privados", "Solo de la Policía"],
    correcta: "B",
    explicacion: "El Sergas cuenta con servicios de prevención propios. (LPRL, arts. 30-32; RD 39/1997)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "El Reglamento de los Servicios de Prevención se aprobó por:",
    opciones: ["El Real Decreto 39/1997", "El Real Decreto 487/1997", "El Real Decreto 664/1997", "La Ley 31/1995"],
    correcta: "A",
    explicacion: "Reglamento de los Servicios de Prevención. (RD 39/1997)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "Los equipos de protección individual deben:",
    opciones: ["Compartirse sin limpiar", "Usarse solo si el trabajador quiere", "Ser proporcionados gratuitamente por el empleador, y el trabajador debe usarlos y cuidarlos correctamente", "Comprarlos el trabajador"],
    correcta: "C",
    explicacion: "EPI. (LPRL, arts. 17 y 29; RD 773/1997)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "Un ejemplo de EPI para el celador frente a riesgo biológico es:",
    opciones: ["El extintor", "Los guantes desechables", "La barandilla de la cama", "La señalización"],
    correcta: "B",
    explicacion: "Protección individual. (RD 773/1997)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "Un ejemplo de medida de protección colectiva es:",
    opciones: ["Los guantes", "La mascarilla", "La ventilación general o los sistemas de extracción", "Las gafas"],
    correcta: "C",
    explicacion: "Protege a todos los trabajadores a la vez. (LPRL, art. 15)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "El accidente de trabajo in itinere es el que ocurre:",
    opciones: ["En casa un día festivo", "Durante las vacaciones", "Dentro del quirófano", "Al ir o volver del lugar de trabajo"],
    correcta: "D",
    explicacion: "Se considera accidente de trabajo. (Ley General de la Seguridad Social, art. 156)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "Ante cualquier accidente de trabajo, aunque sea leve, el trabajador debe:",
    opciones: ["Comunicarlo a su responsable y al servicio de prevención según el procedimiento", "Esperar a ver si empeora", "No decir nada", "Contarlo solo a su familia"],
    correcta: "A",
    explicacion: "Notificación de accidentes. (LPRL; procedimiento del Sergas)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "La señalización de seguridad de color rojo indica:",
    opciones: ["Prohibición, peligro-alarma o material de lucha contra incendios", "Advertencia", "Obligación", "Salvamento o socorro"],
    correcta: "A",
    explicacion: "Verde: salvamento; amarillo: advertencia; azul: obligación. (RD 485/1997)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "La señal de seguridad de color azul indica:",
    opciones: ["Peligro", "Obligación (por ejemplo, uso obligatorio de guantes)", "Prohibición", "Salida de emergencia"],
    correcta: "B",
    explicacion: "Señal de obligación. (RD 485/1997)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "Las señales de salida de emergencia y primeros auxilios son de color:",
    opciones: ["Amarillo", "Azul", "Rojo", "Verde"],
    correcta: "D",
    explicacion: "Salvamento o socorro. (RD 485/1997)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "La señal de advertencia (por ejemplo, riesgo eléctrico o biológico) tiene forma triangular y color:",
    opciones: ["Blanco y rojo", "Azul", "Amarillo con borde negro", "Verde"],
    correcta: "C",
    explicacion: "Advertencia. (RD 485/1997)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "Para apagar un fuego de origen eléctrico NO se debe usar:",
    opciones: ["Cortar la corriente si es posible", "Agua", "Extintor de CO2", "Extintor de polvo"],
    correcta: "B",
    explicacion: "El agua conduce la electricidad. (Prevención de incendios)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "Al usar un extintor, se debe dirigir el chorro a:",
    opciones: ["La base de las llamas", "El humo", "El techo", "La parte alta de las llamas"],
    correcta: "A",
    explicacion: "Se ataca el combustible. (Prevención de incendios)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "El extintor más adecuado para fuegos en equipos eléctricos es:",
    opciones: ["Una manta mojada", "El de agua", "El de CO2 (dióxido de carbono)", "El de espuma"],
    correcta: "C",
    explicacion: "No conduce la electricidad ni deja residuos. (Prevención de incendios)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "Las puertas cortafuegos de un hospital deben:",
    opciones: ["Bloquearse abiertas con cuñas para facilitar el paso", "Mantenerse cerradas o con sus sistemas de cierre automático operativos, nunca bloqueadas abiertas con cuñas", "Quitarse", "Cerrarse con llave"],
    correcta: "B",
    explicacion: "Impiden la propagación del fuego y el humo. (Prevención de incendios)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "El protocolo de prevención y actuación frente al acoso laboral en el Sergas tiene como objetivo:",
    opciones: ["Prevenir y resolver las situaciones de acoso entre trabajadores", "Controlar los horarios", "Aumentar la productividad", "Sancionar a los pacientes"],
    correcta: "A",
    explicacion: "Riesgo psicosocial. (Normativa interna del Sergas)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "El acoso laboral (mobbing) es:",
    opciones: ["Un conflicto puntual", "Una conducta de violencia psicológica reiterada y prolongada en el tiempo contra un trabajador", "Una crítica constructiva", "Una orden de trabajo"],
    correcta: "B",
    explicacion: "Se diferencia del conflicto ocasional por su reiteración y finalidad. (Riesgos psicosociales)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "La pantalla de visualización de datos (ordenador) es un riesgo:",
    opciones: ["Biológico", "Químico", "Ergonómico, que puede causar fatiga visual y trastornos musculoesqueléticos", "Radiactivo"],
    correcta: "C",
    explicacion: "Trabajo con pantallas. (RD 488/1997)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "Según la LO 1/2004, la violencia de género comprende:",
    opciones: ["Todo acto de violencia física y psicológica, incluidas las agresiones a la libertad sexual, las amenazas, las coacciones o la privación arbitraria de libertad", "Solo la violencia con armas", "Solo las lesiones graves", "Solo los insultos"],
    correcta: "A",
    explicacion: "Concepto amplio de violencia. (LO 1/2004, art. 1.3)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    enunciado: "La Delegación del Gobierno contra la Violencia de Género:",
    opciones: ["Es un juzgado", "Juzga a los agresores", "Formula las políticas públicas en esta materia y coordina las actuaciones", "Es un hospital"],
    correcta: "C",
    explicacion: "Tutela institucional. (LO 1/2004, art. 29)"
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    origen: "Examen 2024 · Común C7",
    enunciado: "Según la Ley 31/1995, de prevención de riesgos laborales, la función de vigilancia y control de la normativa sobre prevención de riesgos laborales corresponde a:",
    opciones: ["La Inspección de Trabajo y Seguridad Social", "El Instituto Nacional de Seguridad e Higiene en el Trabajo", "El Instituto Español de Prevención de Riesgos Laborales", "La Inspección Nacional de Prevención de Riesgos Laborales"],
    correcta: "A",
    explicacion: "El artículo 9 de la Ley 31/1995 atribuye la vigilancia y control de la normativa a la Inspección de Trabajo y Seguridad Social."
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    origen: "Examen SAS 2025 · P6",
    enunciado: "Se constituirá un Comité de Seguridad y Salud en todas las empresas o centros de trabajo que:",
    opciones: ["Cuenten con 25 trabajadores.", "Cuenten con al menos 10 trabajadores.", "Cuenten con 50 o más trabajadores.", "Cuenten con al menos más de 100 trabajadores."],
    correcta: "C",
    explicacion: "Ley 31/1995, art. 38: el Comité de Seguridad y Salud se constituye en empresas o centros con 50 o más trabajadores."
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    origen: "Examen SAS 2025 · P37",
    enunciado: "El síndrome de mobbing puede presentar una serie de trastornos en la salud. Señale la respuesta correcta:",
    opciones: ["Esquizofrenia.", "Ansiedad y/o depresión.", "Epilepsia.", "Alzheimer."],
    correcta: "B",
    explicacion: "El mobbing (acoso laboral) suele provocar ansiedad y depresión."
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    origen: "Examen SAS 2025 · P39",
    enunciado: "Entre las patologías más frecuentes en el puesto de trabajo, debido a la manipulación de cargas, está:",
    opciones: ["La osteoporosis.", "La infección.", "La lumbalgia.", "La quemadura."],
    correcta: "C",
    explicacion: "Manipular cargas mal es la causa típica de lumbalgia (dolor en la zona baja de la espalda)."
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    origen: "Examen SAS 2025 · P41",
    enunciado: "Ante una situación de emergencia producida por un incendio debemos usar un extintor portátil y, ¿qué es lo primero que debemos hacer?",
    opciones: ["Realizar una pequeña descarga (corto disparo) del extintor para comprobar su funcionamiento.", "Comprobar que el extintor está en el lugar adecuado.", "Comprobar las fechas de las inspecciones.", "Ninguna de las respuestas anteriores es correcta."],
    correcta: "A",
    explicacion: "Lo primero con un extintor es hacer un disparo corto de prueba para comprobar que funciona."
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    origen: "Examen SAS 2025 · P42",
    enunciado: "¿Qué tipo de fuego es el que, dada la situación de poca gravedad, puede ser neutralizado con los medios materiales y humanos disponibles en el lugar de trabajo y próximos al lugar del accidente?",
    opciones: ["Emergencia final.", "Emergencia parcial.", "Emergencia general.", "Conato de emergencia."],
    correcta: "D",
    explicacion: "Conato de emergencia: un incidente pequeño que se controla con los medios y el personal del propio lugar."
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    origen: "Examen SAS 2025 · P43",
    enunciado: "Ante un incendio usamos el extintor para intentar sofocar el mismo. ¿Hacia dónde debe dirigir la boquilla del extintor?",
    opciones: ["A la parte superior de las llamas.", "A la base del incendio, moviendo la boquilla en zig-zag.", "A cualquier parte del incendio, es indiferente el lugar donde dirigiremos la boquilla.", "Ninguna de las respuestas anteriores es correcta."],
    correcta: "B",
    explicacion: "El extintor se dirige a la base de las llamas, moviendo la boquilla en zigzag."
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    origen: "Examen SAS 2025 · P44",
    enunciado: "El Plan de Emergencias ante un posible incendio, tiene como finalidad:",
    opciones: ["Que no se materialice la situación que da origen al siniestro.", "Si se origina el siniestro, organizar los recursos tanto humanos como técnicos, necesarios para la prevención y lucha contra el riesgo.", "Garantizar la evacuación de forma coordinada, así como evitar pérdidas o daños a personas y/o bienes.", "Todas las respuestas anteriores son correctas."],
    correcta: "D",
    explicacion: "El Plan de Emergencias sirve para todo: evitar el siniestro, organizar los recursos y evacuar de forma coordinada."
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    origen: "Examen SAS 2025 aplazado · P8",
    enunciado: "El derecho a la protección frente a los riesgos laborales, recogido en la Ley 31/1995, de 8 de noviembre, de Prevención de Riesgos Laborales, establece que:",
    opciones: ["El empresario, a veces, deberá cumplir las obligaciones establecidas en la normativa sobre prevención de riesgos laborales.", "Los trabajadores tienen derecho a una protección eficaz en materia de seguridad y salud en el trabajo.", "Los derechos de información, consulta y participación, formación en materia preventiva, paralización de la actividad en caso de riesgo grave e inminente y vigilancia de su estado de salud, forman parte del derecho de los trabajadores a una protección eficaz en materia de seguridad y salud en el trabajo.", "Las respuestas B) y C) son correctas."],
    correcta: "D",
    explicacion: "Ley 31/1995, art. 14: los trabajadores tienen derecho a una protección eficaz, y ese derecho incluye información, consulta, formación, paralizar la actividad y vigilancia de la salud. B y C son correctas."
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    origen: "Examen SAS 2025 aplazado · P38",
    enunciado: "Como Celador/a de un centro sanitario, son necesarias unas condiciones de higiene en su puesto de trabajo. Señale una de las medidas de precaución de higiene que debe aplicar:",
    opciones: ["Lavar las manos con jabón, únicamente al entrar y salir del trabajo.", "Debe usar siempre el uniforme reglamentario, así como los equipos de protección individual.", "Ignorar los protocolos a seguir en caso de pinchazo.", "No usar los equipos de protección individual."],
    correcta: "B",
    explicacion: "Higiene del celador: uniforme reglamentario y equipos de protección individual siempre."
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    origen: "Examen SAS 2025 aplazado · P39",
    enunciado: "¿Qué es un “conato de emergencia”?",
    opciones: ["Una situación que puede ser controlada y solucionada de forma sencilla y rápida por el personal y medios de protección del local, dependencia o sector.", "Una situación que, para ser dominada, requiere la actuación de equipos especiales del sector. No es previsible que afecte a sectores colindantes.", "Una situación para cuyo control se precisa de todos los equipos y medios de protección propios y de la ayuda de medios de socorro y salvamento externos. Generalmente comportará evacuaciones totales o parciales.", "Se refiere al documento que compila el conjunto de medidas de prevención-protección previstas e implantadas, así como la secuencia de actuaciones a realizar ante la aparición de un siniestro, que deben estar normalizadas por escrito y ser conocidas."],
    correcta: "A",
    explicacion: "Conato de emergencia: se controla de forma sencilla y rápida con el personal y los medios del lugar. La B es la emergencia parcial y la C, la general."
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    origen: "Examen SAS 2025 aplazado · P40",
    enunciado: "¿Cuál de las siguientes afirmaciones sobre el Plan de Autoprotección es la correcta?",
    opciones: ["En el Plan de Autoprotección se detallan las actuaciones pertinentes a realizar por los trabajadores de una empresa en caso de que ocurriera una emergencia.", "El Plan de Autoprotección tiene como objetivo la protección de todas las personas del centro, tanto usuarios como trabajadores.", "El Plan de Autoprotección se confecciona para la prevención y reducción de las consecuencias de posibles emergencias, tales como incendios, amenazas de bombas, amenazas ambientales, etc.", "Todas las respuestas anteriores son correctas."],
    correcta: "D",
    explicacion: "El Plan de Autoprotección detalla qué hacer en una emergencia, protege a usuarios y trabajadores y prevé incendios, amenazas de bomba, etc. Por eso son todas."
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    origen: "Examen SAS 2025 aplazado · P41",
    enunciado: "En el Plan de Emergencias ante un posible incendio, se indican los distintos equipos que actuarán en caso de producirse la emergencia. Alguno de estos equipos es:",
    opciones: ["Equipo de alarma y evacuación o equipos de primeros auxilios.", "Equipo de primera intervención.", "Equipo de segunda intervención.", "Todas las respuestas anteriores son correctas."],
    correcta: "D",
    explicacion: "Equipos del Plan de Emergencias: alarma y evacuación, primeros auxilios, primera intervención y segunda intervención. Por eso son todas."
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    origen: "Examen SAS 2025 aplazado · P44",
    enunciado: "Las señales relativas a la lucha contra incendios deben mantener el siguiente formato:",
    opciones: ["Forma rectangular. Pictograma blanco sobre fondo azul.", "Forma cuadrada. Pictograma blanco sobre fondo verde.", "Forma cuadrada o rectangular. Pictograma blanco sobre fondo rojo.", "Ninguna es correcta."],
    correcta: "C",
    explicacion: "Señales contra incendios: forma cuadrada o rectangular, pictograma blanco sobre fondo rojo."
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    origen: "Examen SAS 2025 aplazado · P47",
    enunciado: "Los Delegados de Prevención son los representantes de los trabajadores con funciones específicas en materia de prevención de riesgos en el trabajo, y serán designados por y entre los representantes del personal. ¿Cuántos Delegados de Prevención corresponde a una empresa que tiene de 2.001 a 3.000 trabajadores?",
    opciones: ["Ninguno.", "6 Delegados de Prevención.", "3 Delegados de Prevención.", "8 Delegados de Prevención."],
    correcta: "B",
    explicacion: "Ley 31/1995, art. 35: de 2.001 a 3.000 trabajadores corresponden 6 delegados de prevención."
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    origen: "Examen SAS 2025 aplazado · P48",
    enunciado: "El documento que establece las medidas y procedimientos para prevenir y controlar situaciones de emergencia, con el objetivo de proteger a las personas y los bienes, se denomina:",
    opciones: ["Normativa básica contra incendios.", "Plan de autoprotección.", "Manual del Servicio Andaluz de Salud.", "Todas son correctas."],
    correcta: "B",
    explicacion: "El Plan de Autoprotección es el documento que fija las medidas para prevenir y controlar emergencias."
  },
  {
    tema: "Prevención de riesgos, violencia de género e igualdad",
    origen: "Examen SAS 2025 aplazado · P50",
    enunciado: "Señale cuál de las siguientes afirmaciones sobre lo dispuesto en el articulado de la Ley de Prevención de Riesgos Laborales (LPRL) es INCORRECTA:",
    opciones: ["La LPRL no es de aplicación en el ámbito de la Policía.", "El principal derecho que poseen los trabajadores en materia de prevención de riesgos laborales es una protección eficaz en materia de seguridad y salud en el trabajo.", "La LPRL no es de aplicación en el ámbito de resguardo aduanero.", "Los trabajadores no tienen la obligación de velar por su propia seguridad y salud en el trabajo, ni tampoco por la de sus compañeros."],
    correcta: "D",
    explicacion: "Es incorrecta la D: la Ley 31/1995 (art. 29) obliga a cada trabajador a velar por su seguridad y por la de los demás afectados por su trabajo."
  },
  // ===================================================================
  //  FUNCIONES DEL CELADOR (139 preguntas)
  // ===================================================================
  {
    tema: "Funciones del celador",
    enunciado: "La norma que recoge las funciones de los celadores en las instituciones sanitarias es:",
    opciones: ["La Ley 14/1986, General de Sanidad", "La Ley 55/2003, del Estatuto Marco", "El Estatuto de Personal No Sanitario de las Instituciones Sanitarias de la Seguridad Social (Orden de 5 de julio de 1971)", "El Real Decreto 137/1984, de estructuras básicas de salud"],
    correcta: "C",
    explicacion: "Las funciones del celador siguen recogidas en el art. 14.2 del Estatuto de Personal No Sanitario de 1971, vigente en lo que no se oponga al Estatuto Marco (disposición transitoria sexta de la Ley 55/2003). (EPNS, art. 14.2)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "¿En qué artículo del Estatuto de Personal No Sanitario se enumeran las funciones de los celadores?",
    opciones: ["Art. 12", "Art. 13", "Art. 14", "Art. 15"],
    correcta: "C",
    explicacion: "Art. 14, apartado 2. El apartado 1 se refiere al Jefe de Personal Subalterno. (EPNS, art. 14.2)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "El Estatuto de Personal No Sanitario de 1971 sigue aplicándose hoy:",
    opciones: ["En lo relativo a las funciones de las categorías, mientras no se regulen de otro modo", "En su totalidad, sin excepciones", "Solo en Galicia", "No, fue derogado íntegramente por el Estatuto Marco"],
    correcta: "A",
    explicacion: "El Estatuto Marco derogó los estatutos antiguos, pero mantuvo vigentes las normas sobre funciones de las categorías hasta que se regulen de nuevo. (Ley 55/2003, disp. derogatoria y transitoria 6.ª)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "Según el Estatuto Marco, los celadores son personal estatutario:",
    opciones: ["Sanitario técnico", "De gestión y servicios", "Sanitario de formación profesional", "Funcionario de carrera"],
    correcta: "B",
    explicacion: "El celador es personal estatutario de gestión y servicios, en el grupo de otro personal (agrupaciones profesionales, AP). (Ley 55/2003, art. 7)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "Una de las funciones del celador es tramitar o conducir sin tardanza:",
    opciones: ["Las recetas médicas de los pacientes", "Las comunicaciones verbales, documentos, correspondencia u objetos que le sean confiados por sus superiores", "Las historias clínicas a los familiares", "Los resultados de laboratorio a los pacientes"],
    correcta: "B",
    explicacion: "Primera función del art. 14.2: tramitar o conducir sin tardanza comunicaciones, documentos, correspondencia u objetos confiados por los superiores. (EPNS, art. 14.2)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "El traslado de aparatos o mobiliario de unos servicios a otros corresponde:",
    opciones: ["Al personal de enfermería", "Al pinche", "Al celador", "Al personal de mantenimiento exclusivamente"],
    correcta: "C",
    explicacion: "El celador traslada de unos servicios a otros los aparatos o mobiliario que se requiera. (EPNS, art. 14.2)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "Respecto a la limpieza, el celador:",
    opciones: ["Realizará excepcionalmente aquellas labores de limpieza que se le encomienden por la dificultad, el peso o el emplazamiento de lo que hay que limpiar", "Es el responsable habitual de la limpieza de las plantas", "No realizará nunca tareas de limpieza", "Solo limpia el quirófano"],
    correcta: "A",
    explicacion: "La limpieza es una función excepcional del celador, cuando por la situación, emplazamiento, dificultad o peso no sea idóneo que la haga otro personal. (EPNS, art. 14.2)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "Cuidar de que los enfermos no hagan uso indebido de los enseres y ropas de la institución es una función que el celador realiza:",
    opciones: ["Solo en turno de noche", "Al igual que el resto del personal", "En exclusiva", "Solo si lo ordena el médico"],
    correcta: "B",
    explicacion: "Dice el Estatuto: «cuidar, al igual que el resto del personal, de que los enfermos no hagan uso indebido de los enseres y ropas». (EPNS, art. 14.2)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "El celador servirá de ascensorista:",
    opciones: ["Nunca, no es función suya", "Solo en el turno de mañana", "Siempre que haya un paciente en el ascensor", "Cuando se le asigne especialmente ese cometido o las necesidades del servicio lo requieran"],
    correcta: "D",
    explicacion: "Servir de ascensorista cuando se le asigne o las necesidades lo requieran. (EPNS, art. 14.2)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "Vigilar las entradas de la institución, no permitiendo el acceso más que a las personas autorizadas, es función:",
    opciones: ["Del celador", "Del personal de enfermería", "Del supervisor de guardia", "Del médico de guardia"],
    correcta: "A",
    explicacion: "Control de accesos: es una de las funciones de vigilancia del celador. (EPNS, art. 14.2)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "La vigilancia nocturna del interior y exterior del edificio corresponde:",
    opciones: ["Al jefe de servicio", "Al celador", "A la Policía Local", "Al supervisor de noche"],
    correcta: "B",
    explicacion: "El celador tiene a su cargo la vigilancia nocturna, cuidando de que estén cerradas las puertas de servicios complementarios. (EPNS, art. 14.2)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "Durante la vigilancia nocturna, el celador cuidará especialmente de que estén cerradas:",
    opciones: ["Las puertas de urgencias", "Los controles de enfermería", "Las habitaciones de los pacientes", "Las puertas de los servicios complementarios"],
    correcta: "D",
    explicacion: "El Estatuto habla de las puertas de los servicios complementarios. Urgencias permanece siempre abierta. (EPNS, art. 14.2)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "El Estatuto encomienda al celador velar continuamente por conseguir:",
    opciones: ["La correcta medicación de los pacientes", "La puntualidad del personal", "El mayor orden y silencio posible en todas las dependencias", "El cumplimiento de los horarios de comidas"],
    correcta: "C",
    explicacion: "Velar por el mayor orden y silencio posible en todas las dependencias. (EPNS, art. 14.2)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "Si el celador encuentra desperfectos o anomalías en la limpieza y conservación del edificio, debe:",
    opciones: ["Avisar directamente a la empresa de mantenimiento", "Comunicarlo al Gerente", "Repararlos él mismo", "Dar cuenta a sus inmediatos superiores"],
    correcta: "D",
    explicacion: "Dará cuenta a sus inmediatos superiores de los desperfectos o anomalías. (EPNS, art. 14.2)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "En relación con las visitas, el celador vigilará que no se introduzcan en las habitaciones:",
    opciones: ["Flores", "Ningún objeto personal", "Más paquetes que los expresamente autorizados por la Dirección", "Prensa"],
    correcta: "C",
    explicacion: "Solo se permiten los paquetes expresamente autorizados por la Dirección de la institución. (EPNS, art. 14.2)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "¿Cuál de las siguientes conductas de los visitantes debe evitar el celador según el Estatuto?",
    opciones: ["Que hablen con el personal de enfermería", "Que pregunten por el horario de visitas", "Que se sienten en las camas de los enfermos", "Que acompañen al paciente"],
    correcta: "C",
    explicacion: "El celador evita que los visitantes fumen en las habitaciones, traigan alimentos o se sienten en las camas. (EPNS, art. 14.2)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "El traslado de los enfermos, tanto dentro de la institución como en el servicio de ambulancias, corresponde:",
    opciones: ["Al celador", "Al técnico de transporte sanitario exclusivamente", "Al enfermero", "Al técnico en cuidados de enfermería"],
    correcta: "A",
    explicacion: "Tiene a su cargo el traslado de los enfermos dentro de la institución y en el servicio de ambulancias. (EPNS, art. 14.2)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "El celador ayudará a las enfermeras y ayudantes de planta en el movimiento y traslado de los enfermos encamados:",
    opciones: ["En todos los casos, sin excepción", "Solo en el quirófano", "Solo si el paciente lo solicita", "Que requieran un trato especial en razón de sus dolencias, para hacerles las camas"],
    correcta: "D",
    explicacion: "Ayuda en la movilización de encamados que requieran trato especial para hacerles la cama. (EPNS, art. 14.2)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "El aseo de enfermos por parte del celador:",
    opciones: ["Está totalmente prohibido", "Es excepcional, para enfermos masculinos encamados o que no puedan hacerlo por sí mismos, según indicaciones de la supervisora", "Solo se hace en urgencias", "Es una función habitual con todos los pacientes"],
    correcta: "B",
    explicacion: "Excepcionalmente lavarán y asearán a los enfermos masculinos encamados o que no puedan hacerlo por sí mismos. (EPNS, art. 14.2)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "Las indicaciones para que el celador asee excepcionalmente a un enfermo las da:",
    opciones: ["La supervisora de planta o servicio, o quien la sustituya", "El médico de guardia", "El propio paciente", "El jefe de personal subalterno"],
    correcta: "A",
    explicacion: "Atendiendo a las indicaciones de las supervisoras de planta o servicio o personas que las sustituyan. (EPNS, art. 14.2)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "En las autopsias, el celador ayuda en aquellas funciones auxiliares:",
    opciones: ["Que no requieran por su parte hacer uso de instrumental alguno sobre el cadáver", "De toma de muestras", "De extracción de órganos", "Que el patólogo le encomiende, incluidas las incisiones"],
    correcta: "A",
    explicacion: "Ayudará en las autopsias sin usar instrumental sobre el cadáver. (EPNS, art. 14.2)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "El amortajamiento de los enfermos fallecidos:",
    opciones: ["Lo realiza el personal de enfermería con la ayuda del celador", "Lo realiza el celador en solitario", "Corresponde al médico que certifica la defunción", "Lo realiza el personal de la funeraria dentro de la planta"],
    correcta: "A",
    explicacion: "El celador ayuda a las enfermeras en el amortajamiento y le corresponde el traslado del cadáver al mortuorio. (EPNS, art. 14.2)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "El traslado de los cadáveres al mortuorio corresponde:",
    opciones: ["Al celador", "Al personal de la funeraria", "Al TCAE", "Al personal de seguridad"],
    correcta: "A",
    explicacion: "Corre a cargo del celador el traslado de los cadáveres al mortuorio. (EPNS, art. 14.2)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "¿Cuál de las siguientes NO es una función del celador?",
    opciones: ["Vigilar el acceso de visitas", "Administrar medicación oral a los pacientes", "Trasladar documentos entre servicios", "Trasladar pacientes a rayos"],
    correcta: "B",
    explicacion: "Administrar medicación es una tarea sanitaria; el celador nunca la realiza. (EPNS, art. 14.2)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "¿Cuál de las siguientes NO es una función del celador?",
    opciones: ["Vigilar las entradas", "Ayudar a movilizar a un paciente encamado", "Servir de ascensorista", "Tomar la temperatura a los pacientes"],
    correcta: "D",
    explicacion: "Las constantes vitales son tarea del personal sanitario. (EPNS, art. 14.2)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "¿Cuál de las siguientes NO es una función del celador?",
    opciones: ["Acompañar al familiar a la sala de espera", "Controlar el horario de visitas", "Informar al familiar sobre el diagnóstico del paciente", "Indicar al familiar dónde está la consulta"],
    correcta: "C",
    explicacion: "La información clínica la da el médico. El celador informa de aspectos generales: ubicación, horarios, trámites. (EPNS, art. 14.2; Ley 41/2002)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "Los celadores dependen directamente, dentro del personal subalterno, de:",
    opciones: ["El Jefe de Personal Subalterno", "El jefe de servicio clínico", "El Director Médico", "El supervisor de enfermería"],
    correcta: "A",
    explicacion: "El Jefe de Personal Subalterno (o encargado de turno) organiza y dirige a los celadores, y depende de la Dirección de Gestión. (EPNS, art. 14.1)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "Al Jefe de Personal Subalterno le corresponde, entre otras funciones:",
    opciones: ["Elaborar los turnos de enfermería", "Asignar las camas de hospitalización", "Autorizar las intervenciones quirúrgicas", "Organizar y distribuir el trabajo de los celadores y vigilar su cumplimiento"],
    correcta: "D",
    explicacion: "Organiza el servicio de celadores, distribuye el trabajo y vela por su cumplimiento. (EPNS, art. 14.1)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "Orgánicamente, el servicio de celadores de un hospital suele depender de:",
    opciones: ["La Gerencia de Atención Primaria", "La Dirección de Enfermería", "La Dirección de Gestión y Servicios Generales", "La Dirección Médica"],
    correcta: "C",
    explicacion: "El personal subalterno depende orgánicamente de la Dirección de Gestión, aunque funcionalmente reciba indicaciones de la supervisión de la unidad donde trabaja. (Organización hospitalaria)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "Cuando un celador está asignado a una planta de hospitalización, recibe indicaciones funcionales de:",
    opciones: ["Los familiares de los pacientes", "El celador más antiguo", "El jefe de cocina", "La supervisora o el supervisor de la unidad"],
    correcta: "D",
    explicacion: "Funcionalmente atiende las indicaciones de la supervisión de la unidad. (Organización hospitalaria)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "La categoría de celador pertenece, según su clasificación profesional, al grupo:",
    opciones: ["C2", "A2", "AP (agrupaciones profesionales, sin requisito de titulación)", "C1"],
    correcta: "C",
    explicacion: "El celador está en las agrupaciones profesionales (antiguo grupo E), sin exigencia de titulación específica. (EBEP, disp. adicional 6.ª; Ley 55/2003)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "La apertura y cierre de las instalaciones del centro es una tarea que se encuadra en las funciones de:",
    opciones: ["Admisión", "Vigilancia del celador", "Mantenimiento", "Enfermería"],
    correcta: "B",
    explicacion: "Forma parte de las funciones de vigilancia: abrir y cerrar dependencias según los horarios establecidos. (Programa Sergas, tema 1)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "Al cerrar una dependencia al final de la jornada, el celador debe comprobar especialmente:",
    opciones: ["Que los pacientes han cenado", "Que no queda nadie dentro y que puertas y ventanas quedan cerradas", "Que las historias clínicas están firmadas", "Que el material quirúrgico está esterilizado"],
    correcta: "B",
    explicacion: "Antes de cerrar se comprueba que no hay personas dentro, que puertas y ventanas están cerradas y que no hay anomalías (luces, grifos, aparatos encendidos). (Funciones de vigilancia)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "En los centros sanitarios, la puerta del servicio de urgencias:",
    opciones: ["Se cierra durante la noche", "Solo abre con cita previa", "Se cierra los festivos", "Permanece abierta las 24 horas"],
    correcta: "D",
    explicacion: "Urgencias funciona las 24 horas; el celador controla el acceso pero no la cierra. (Funciones de vigilancia)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "Si durante la ronda nocturna el celador detecta una persona no autorizada en una zona restringida, debe:",
    opciones: ["Retenerla por la fuerza hasta que llegue la policía", "Llamar directamente a sus familiares", "Identificarla con educación, invitarla a salir y, si no colabora, avisar a seguridad y al superior", "Ignorarlo si no hay daños"],
    correcta: "C",
    explicacion: "El celador actúa con corrección y avisa a seguridad o al superior; no debe usar la fuerza. (Funciones de vigilancia)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "Las llaves de las dependencias del centro deben:",
    opciones: ["Dejarse puestas en las puertas para facilitar el acceso", "Guardarlas cada celador en su casa", "Darse a cualquier trabajador que las pida", "Custodiarse en un lugar controlado y entregarse solo a personas autorizadas"],
    correcta: "D",
    explicacion: "Las llaves se custodian y se registra su entrega. (Funciones de vigilancia)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "El control de acceso en un centro sanitario tiene como objetivo principal:",
    opciones: ["Cobrar las visitas", "Controlar la puntualidad del personal", "Impedir la entrada de todos los familiares", "Garantizar la seguridad de pacientes, personal e instalaciones permitiendo el paso solo a personas autorizadas"],
    correcta: "D",
    explicacion: "Busca seguridad y orden, no impedir las visitas autorizadas. (Programa Sergas, tema 1)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "A una persona que quiere acceder a una zona de acceso restringido, el celador debe solicitarle:",
    opciones: ["Su identificación y el motivo de la visita", "Un justificante de pago", "Su historia clínica", "Nada, si va acompañada de un niño"],
    correcta: "A",
    explicacion: "Identificación y motivo: así decide si puede pasar o a quién debe avisar. (Control de acceso)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "Los trabajadores del centro deben identificarse mediante:",
    opciones: ["La tarjeta identificativa visible", "El uniforme solamente", "La llave de su taquilla", "Su número de teléfono"],
    correcta: "A",
    explicacion: "La identificación visible permite a pacientes y compañeros saber quién es cada profesional. (Control de acceso)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "¿Cuál es la zona de acceso más restringido de un hospital de entre las siguientes?",
    opciones: ["La sala de espera de consultas", "La cafetería", "El vestíbulo principal", "El bloque quirúrgico"],
    correcta: "D",
    explicacion: "El bloque quirúrgico tiene acceso restringido al personal autorizado y con indumentaria adecuada. (Control de acceso)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "Si un periodista se presenta en una planta pidiendo información sobre un paciente ingresado, el celador:",
    opciones: ["Le informará del estado del paciente", "Le dará el número de habitación", "No facilitará ninguna información y le remitirá al servicio de comunicación o a la Dirección", "Le dejará pasar a la habitación"],
    correcta: "C",
    explicacion: "La información de pacientes es confidencial. Se remite a quien corresponda. (Ley 41/2002; protección de datos)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "La información que el celador puede dar a un usuario en el punto de información se refiere a:",
    opciones: ["Diagnósticos y tratamientos", "Resultados de pruebas", "Ubicación de servicios, horarios, normas del centro y trámites", "Pronóstico de los pacientes"],
    correcta: "C",
    explicacion: "Información general y administrativa; nunca clínica. (Funciones de información)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "El deber de secreto del celador sobre lo que conoce de los pacientes:",
    opciones: ["Termina al acabar el turno", "Solo afecta a los diagnósticos", "Se mantiene incluso después de dejar de trabajar en el centro", "Solo afecta a los pacientes de psiquiatría"],
    correcta: "C",
    explicacion: "El deber de confidencialidad es permanente. (Ley 55/2003, art. 19; Ley 41/2002)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "Cuando un usuario llega desorientado a la entrada del hospital, el celador debe:",
    opciones: ["Ignorarlo si no es paciente", "Pedirle que espere a que llegue el supervisor", "Recibirlo con amabilidad, preguntarle qué necesita y orientarle o acompañarle si es necesario", "Indicarle que pregunte en admisión sin más"],
    correcta: "C",
    explicacion: "Recepción y acogida: la primera imagen del centro la suele dar el celador. (Atención al usuario)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "En la atención al usuario, la escucha activa consiste en:",
    opciones: ["Hablar más que el usuario para orientarle", "Escuchar mientras se hacen otras tareas", "Responder antes de que termine para ahorrar tiempo", "Prestar atención completa, mostrar interés y comprobar que se ha entendido lo que el usuario dice"],
    correcta: "D",
    explicacion: "Escuchar con atención, mirar, no interrumpir y confirmar lo entendido. (Comunicación)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "Ante un usuario que se dirige al celador de forma agresiva, lo más adecuado es:",
    opciones: ["Expulsarlo del centro inmediatamente", "Responder en el mismo tono para que se calme", "Mantener la calma, hablar en tono sereno, escuchar y, si la situación empeora, pedir ayuda", "Darle la espalda"],
    correcta: "C",
    explicacion: "No entrar en la confrontación; escuchar y pedir apoyo si hace falta. (Atención al usuario)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "La comunicación no verbal incluye:",
    opciones: ["Las señales de tráfico del aparcamiento", "Solo las palabras escritas", "Los gestos, la postura, la mirada y la expresión facial", "Solo el tono de voz por teléfono"],
    correcta: "C",
    explicacion: "Gestos, postura, mirada, distancia y expresión: transmiten tanto como las palabras. (Comunicación)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "Al atender una llamada telefónica en la portería, el celador debe:",
    opciones: ["Contestar con un simple «¿sí?»", "Dar información clínica si la persona dice ser familiar", "Dejar sonar el teléfono si está ocupado con otra cosa", "Identificar el centro o servicio, atender con amabilidad y, si no puede resolver, transferir o tomar nota"],
    correcta: "D",
    explicacion: "Identificarse, ser amable y resolver o derivar. (Atención telefónica)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "Si una persona reclama por escrito sobre la atención recibida, el celador debe:",
    opciones: ["Decirle que no sirve de nada", "Intentar disuadirle", "Recoger la queja y guardarla en su taquilla", "Indicarle el lugar donde puede presentar la reclamación (servicio de atención al paciente)"],
    correcta: "D",
    explicacion: "Le orienta al Servicio de Atención al Paciente o al procedimiento de reclamaciones. (Atención al usuario)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "En la recepción de pacientes, ¿quién debe acompañar al paciente que ingresa en planta desde admisión?",
    opciones: ["Normalmente el celador, llevando también la documentación", "Nadie, el paciente va solo", "El médico de guardia", "El administrativo de admisión"],
    correcta: "A",
    explicacion: "El celador acompaña o traslada al paciente y su documentación a la unidad. (Funciones de traslado)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "Los objetos de valor que porta un paciente al ingresar y que no se los pueda quedar deben:",
    opciones: ["Dejarlos en la mesilla sin control", "Guardarlos el celador en su taquilla", "Tirarse si no se reclaman en el día", "Entregarse a la familia o depositarse según el procedimiento del centro, dejando constancia"],
    correcta: "D",
    explicacion: "Siempre con constancia escrita y según el protocolo del centro. (Atención al usuario)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "Los objetos perdidos encontrados por el celador en el centro deben:",
    opciones: ["Quedárselos si nadie los reclama en una hora", "Entregarse en el lugar establecido por el centro (portería, seguridad o servicio designado), dejando constancia", "Dejarlos donde se encontraron", "Entregarse a la primera persona que los reclame sin comprobación"],
    correcta: "B",
    explicacion: "Se depositan donde indique el centro y se registran. (Funciones de vigilancia)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "En el turno de noche, el celador de puerta controlará especialmente:",
    opciones: ["El acceso al edificio, ya que las entradas se reducen y solo se permite el paso a personas autorizadas", "La dispensación de medicamentos", "La limpieza de los quirófanos", "La preparación de los desayunos"],
    correcta: "A",
    explicacion: "De noche se limitan los accesos y se refuerza el control. (Funciones de vigilancia)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "Un acompañante quiere pasar a ver a un paciente fuera del horario de visitas. El celador:",
    opciones: ["Le dejará pasar sin consultar", "Aplicará las normas del centro y consultará con la supervisión de la unidad si hay alguna excepción autorizada", "Le pedirá dinero", "Le negará la entrada aunque esté autorizado por la supervisora"],
    correcta: "B",
    explicacion: "Las excepciones las autoriza la supervisión; el celador aplica las normas. (Control de visitas)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "Respecto al número de acompañantes por paciente en planta, el celador debe:",
    opciones: ["Velar por que se cumpla lo establecido en las normas del centro", "Dejar entrar solo a hombres", "Decidirlo según su criterio personal", "Permitir todos los que quieran pasar"],
    correcta: "A",
    explicacion: "Aplica las normas del centro sobre número de acompañantes. (Control de visitas)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "Ante un niño pequeño que quiere entrar a visitar a un paciente, el celador debe:",
    opciones: ["Permitirle la entrada siempre", "Dejarle solo en la sala de espera", "Impedírsela siempre", "Aplicar las normas del centro sobre visitas de menores"],
    correcta: "D",
    explicacion: "Depende de las normas de cada centro y unidad. (Control de visitas)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "El celador que realiza la ronda de vigilancia y detecta un grifo abierto o una fuga de agua debe:",
    opciones: ["Ignorarlo", "Intentar cortar el agua si es seguro y avisar al servicio de mantenimiento", "Esperar al turno siguiente", "Llamar a los bomberos en todo caso"],
    correcta: "B",
    explicacion: "Actúa para evitar daños si es seguro y avisa a mantenimiento. (Funciones de vigilancia)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "Si durante la vigilancia el celador detecta humo en una dependencia, lo primero es:",
    opciones: ["Continuar la ronda", "Abrir todas las ventanas", "Dar la alarma según el plan de emergencia del centro", "Usar el ascensor para avisar en otra planta"],
    correcta: "C",
    explicacion: "Ante un posible incendio se da la alarma según el plan de emergencia. (Plan de autoprotección)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "En caso de evacuación por incendio, ¿se pueden usar los ascensores?",
    opciones: ["Sí, solo para el personal", "No, salvo los ascensores de emergencia específicos y bajo indicación de los equipos de emergencia", "Sí, siempre que no haya humo en el pasillo", "Sí, son la vía más rápida"],
    correcta: "B",
    explicacion: "Los ascensores normales no se usan en un incendio. (Plan de autoprotección)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "Dentro del plan de autoprotección del centro, los celadores suelen formar parte de:",
    opciones: ["La comisión de calidad", "Los equipos de intervención y evacuación", "El comité de dirección", "El servicio de prevención de riesgos"],
    correcta: "B",
    explicacion: "Por su conocimiento del edificio y su presencia continua, suelen integrar los equipos de intervención o evacuación. (Plan de autoprotección)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "En una evacuación horizontal, los pacientes se trasladan:",
    opciones: ["A otra zona o sector de la misma planta protegido del incendio", "Al exterior del edificio directamente", "A la azotea", "A la planta superior"],
    correcta: "A",
    explicacion: "La evacuación horizontal lleva a los pacientes a un sector seguro de la misma planta; es la primera opción en hospitales. (Plan de autoprotección)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "En una evacuación, ¿qué pacientes se suelen evacuar primero?",
    opciones: ["Los que pueden caminar, para despejar rápido la zona y dedicar luego los recursos a los que no pueden moverse", "Los que estén más cerca del ascensor", "Los más graves siempre", "Los de más edad"],
    correcta: "A",
    explicacion: "Habitualmente: primero los que deambulan, luego los que van en silla y después los encamados (salvo riesgo inminente). (Plan de autoprotección)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "El celador destinado en la puerta principal, ante un aviso de amenaza de bomba, debe:",
    opciones: ["No hacer caso hasta que llegue la policía", "Desalojar por su cuenta todo el hospital", "Seguir el plan de emergencia y las instrucciones del jefe de emergencia, sin tocar objetos sospechosos", "Buscar y retirar el objeto sospechoso"],
    correcta: "C",
    explicacion: "Nunca se manipulan objetos sospechosos; se sigue el plan de emergencia. (Plan de autoprotección)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "El trato que el celador debe dar a los pacientes y usuarios ha de ser:",
    opciones: ["Familiar y con tuteo en todo caso", "Correcto, respetuoso y amable, respetando su intimidad y dignidad", "Distante para evitar problemas", "Diferente según el nivel social del paciente"],
    correcta: "B",
    explicacion: "Respeto a la dignidad, la intimidad y sin discriminación. (Ley 14/1986, art. 10; Ley 55/2003, art. 19)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "Mientras traslada a un paciente, el celador debe evitar:",
    opciones: ["Hablar con el paciente", "Hacer comentarios sobre el estado del paciente con otros compañeros delante de él", "Cubrirle con una sábana", "Explicarle a dónde le lleva"],
    correcta: "B",
    explicacion: "Hay que respetar la intimidad y la confidencialidad en todo momento. (Atención al paciente)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "Antes de trasladar a un paciente, el celador debe:",
    opciones: ["Comprobar su identidad (pulsera identificativa) y el destino", "Esperar a que el paciente se lo pida", "Preguntar solo el número de habitación", "Llamar a la familia"],
    correcta: "A",
    explicacion: "La identificación inequívoca del paciente es una medida básica de seguridad. (Seguridad del paciente)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "La pulsera identificativa de un paciente ingresado sirve para:",
    opciones: ["Identificarle de forma inequívoca en todos los procedimientos y traslados", "Abrir su habitación", "Pagar en la cafetería", "Controlar sus visitas"],
    correcta: "A",
    explicacion: "Evita errores de identificación en traslados, pruebas y tratamientos. (Seguridad del paciente)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "El celador recibe en portería una carta dirigida a un paciente ingresado. Debe:",
    opciones: ["Hacerla llegar a la unidad donde está el paciente según el procedimiento del centro", "Devolverla al remitente", "Abrirla para ver si es urgente", "Guardarla hasta el alta"],
    correcta: "A",
    explicacion: "Se tramita la correspondencia según el procedimiento interno. (Funciones de tramitación)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "La información sobre si un paciente está ingresado y en qué habitación:",
    opciones: ["Nunca se puede dar a nadie", "Se da a cualquier persona que pregunte", "Solo se da por teléfono", "Solo se facilita según los protocolos del centro y respetando la voluntad del paciente"],
    correcta: "D",
    explicacion: "Algunos pacientes piden que no se informe de su ingreso; se siguen los protocolos. (Protección de datos)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "Un paciente ingresado pide al celador que le compre tabaco. El celador:",
    opciones: ["Debe negarse, explicando las normas del centro, que es un espacio sin humo", "Avisa a la familia para que se lo traiga", "Se lo compra y le acompaña a fumar a la habitación", "Se lo compra si le da el dinero"],
    correcta: "A",
    explicacion: "Está prohibido fumar en centros sanitarios y el celador debe velar por el cumplimiento de las normas. (Ley 28/2005 (tabaco); EPNS art. 14.2)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "Según la normativa antitabaco, en los centros sanitarios:",
    opciones: ["Solo está prohibido en quirófanos", "Está prohibido fumar en todo el recinto, incluidos los espacios al aire libre del recinto", "Se puede fumar en las habitaciones individuales", "Se puede fumar en zonas habilitadas dentro del edificio"],
    correcta: "B",
    explicacion: "En centros sanitarios está prohibido fumar en todo el recinto. (Ley 28/2005, art. 7)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "¿Quién puede autorizar la salida de un paciente ingresado del hospital?",
    opciones: ["El médico, mediante el alta (o el paciente con alta voluntaria firmada)", "La familia", "El celador de la puerta", "El supervisor de noche"],
    correcta: "A",
    explicacion: "El celador no autoriza salidas; si un paciente ingresado intenta salir, avisa a la unidad. (Ley 41/2002, art. 21)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "Si el celador de la puerta ve salir a un paciente con pijama y pulsera que parece desorientado, debe:",
    opciones: ["Dejarle salir, es su derecho", "Llamar a la policía sin más", "Intentar retenerlo con amabilidad, sin forzarle, y avisar inmediatamente a la unidad", "Cerrar todas las puertas del hospital"],
    correcta: "C",
    explicacion: "Puede ser una fuga de un paciente desorientado; se avisa a la unidad y se actúa con prudencia. (Funciones de vigilancia)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "El vestuario del celador durante el trabajo:",
    opciones: ["Solo es obligatorio en quirófano", "Puede ser ropa de calle", "Lo elige cada celador", "Debe ser el uniforme facilitado por el centro, limpio, y con la identificación visible"],
    correcta: "D",
    explicacion: "Uniforme e identificación visible. (Normas del centro)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "Los celadores destinados en una unidad de hospitalización psiquiátrica:",
    opciones: ["Administran la medicación si el paciente se niega", "Ayudan al personal sanitario en la vigilancia y, cuando se les requiere, en la contención de pacientes agitados", "Deciden las salidas de los pacientes", "Pueden decidir la contención mecánica de un paciente"],
    correcta: "B",
    explicacion: "La contención la indica el médico; el celador colabora bajo indicación del personal sanitario. (Funciones del celador; tema 4)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "En la recepción de un hospital, el celador debe ofrecer al usuario:",
    opciones: ["Prioridad según la edad del usuario", "Su opinión sobre los médicos", "Una actitud de disponibilidad, información clara y trato respetuoso", "Información sobre los pacientes ingresados a cualquiera"],
    correcta: "C",
    explicacion: "Disponibilidad, claridad y respeto. (Atención al usuario)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "Una persona sorda llega al mostrador de información. El celador debe:",
    opciones: ["Atenderla después de los demás", "Hablarle más alto", "Mirarle de frente, hablar despacio y con claridad, y apoyarse en la escritura si hace falta", "Dirigirse solo a su acompañante"],
    correcta: "C",
    explicacion: "Adaptar la comunicación: de frente para que pueda leer los labios, despacio y por escrito si es necesario. (Atención al usuario)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "Un usuario solo habla portugués y no entiende al celador. Lo más adecuado es:",
    opciones: ["Hablarle más alto", "No atenderle", "Pedirle que vuelva con un traductor", "Intentar comunicarse de forma sencilla y recurrir a los recursos del centro (traductores, intérpretes)"],
    correcta: "D",
    explicacion: "Los centros suelen tener servicios de interpretación; se busca la forma de entenderse. (Atención al usuario)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "El celador que atiende el mostrador de información no sabe responder a una pregunta. Debe:",
    opciones: ["Hacerle esperar sin decirle nada", "Decirle que no es su problema", "Reconocerlo, intentar averiguarlo o derivar al usuario a quien pueda responder", "Inventarse una respuesta"],
    correcta: "C",
    explicacion: "Mejor reconocerlo y derivar que dar información errónea. (Atención al usuario)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "Ante una aglomeración de familiares en el pasillo de una planta, el celador:",
    opciones: ["Llama a seguridad inmediatamente", "Les pide que se vayan del hospital", "No interviene", "Les invita con educación a esperar en la sala de espera para mantener el orden y el silencio"],
    correcta: "D",
    explicacion: "Velar por el orden y silencio de las dependencias es función del celador. (EPNS, art. 14.2)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "En los centros de salud de atención primaria, el celador realiza habitualmente:",
    opciones: ["Citaciones médicas por teléfono exclusivamente", "Funciones de información, control de accesos, apertura y cierre, y traslado de documentación", "Curas de enfermería", "Extracciones de sangre"],
    correcta: "B",
    explicacion: "En primaria predominan la información, la vigilancia y el movimiento de documentos y material. (Funciones del celador en primaria)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "La documentación clínica que el celador traslada de un servicio a otro debe:",
    opciones: ["Entregarse al paciente para que la lleve", "Dejarse en cualquier mostrador", "Llevarse a la vista para que se lea el nombre", "Ir protegida para garantizar la confidencialidad y entregarse a la persona responsable"],
    correcta: "D",
    explicacion: "La confidencialidad de la historia clínica obliga también al celador que la transporta. (Ley 3/2001 gallega; Ley 41/2002)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "El celador puede consultar la historia clínica de un paciente:",
    opciones: ["Sí, si se lo pide un familiar", "No, salvo lo estrictamente necesario para sus funciones; no puede leer su contenido clínico", "Sí, si el paciente es conocido suyo", "Sí, siempre que la traslade"],
    correcta: "B",
    explicacion: "Acceso limitado a lo necesario para su función; leerla por curiosidad es una falta. (Ley 41/2002, art. 16)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "Un compañero comenta en la cafetería datos de salud de un paciente famoso ingresado. Esa conducta:",
    opciones: ["Solo es falta si se publica en prensa", "Está permitida entre trabajadores del centro", "Es normal si no hay pacientes delante", "Vulnera el deber de confidencialidad y puede ser sancionada"],
    correcta: "D",
    explicacion: "Revelar información confidencial puede ser falta disciplinaria muy grave. (Ley 55/2003, art. 72; LOPDGDD)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "Si se produce una agresión a un trabajador en el centro, el celador presente debe:",
    opciones: ["Marcharse para no verse implicado", "Responder con violencia", "Esperar a que termine", "Avisar a seguridad y al responsable, ayudar al compañero sin ponerse en riesgo y seguir el protocolo de agresiones"],
    correcta: "D",
    explicacion: "El Sergas tiene protocolo frente a agresiones; se avisa y se protege al compañero. (Protocolo de agresiones (Sergas))"
  },
  {
    tema: "Funciones del celador",
    enunciado: "El celador que acompaña a un paciente a otro servicio para una prueba debe:",
    opciones: ["Esperar dentro de la sala de exploración", "Dejar la documentación en la planta", "Entregarlo al personal del servicio de destino junto con la documentación", "Dejarlo en el pasillo y volver a planta"],
    correcta: "C",
    explicacion: "El traslado acaba cuando entrega al paciente y su documentación al personal responsable. (Funciones de traslado)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "Cuando el traslado de un paciente puede hacerse en silla de ruedas o en camilla, ¿quién decide el medio?",
    opciones: ["El familiar", "El paciente", "El personal sanitario responsable del paciente", "El celador"],
    correcta: "C",
    explicacion: "La indicación del medio de traslado es sanitaria; el celador la ejecuta. (Funciones de traslado)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "En el área de consultas externas, el celador suele encargarse de:",
    opciones: ["Dar citas médicas sin consultar", "Pasar consulta", "Orientar a los pacientes, distribuir historias y material y trasladar pacientes cuando lo necesiten", "Realizar electrocardiogramas"],
    correcta: "C",
    explicacion: "Información, movimiento de documentación y traslados. (Funciones del celador)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "En el servicio de rehabilitación, el celador:",
    opciones: ["Prescribe el tratamiento", "Aplica las corrientes eléctricas", "Realiza los ejercicios de rehabilitación", "Ayuda a trasladar y movilizar a los pacientes según las indicaciones del fisioterapeuta"],
    correcta: "D",
    explicacion: "Colabora en traslados y movilizaciones. (Funciones del celador)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "En radiodiagnóstico, el celador puede:",
    opciones: ["Decidir la proyección radiológica", "Disparar el equipo de rayos", "Interpretar las placas", "Ayudar a movilizar y colocar al paciente siguiendo las indicaciones del técnico, protegiéndose de la radiación"],
    correcta: "D",
    explicacion: "Ayuda en la movilización; si debe permanecer en la sala durante el disparo, usa protección (delantal plomado). (Funciones del celador; radioprotección)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "Si el celador debe sujetar a un paciente durante una radiografía, debe:",
    opciones: ["Hacerlo sin protección si es rápido", "Usar delantal plomado y guantes plomados, y evitar exponerse al haz directo", "Negarse en todo caso", "Ponerse delante del paciente"],
    correcta: "B",
    explicacion: "Protección plomada y nunca en el haz directo. Las embarazadas no deben hacerlo. (Radioprotección)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "Las mujeres embarazadas que trabajan como celadoras:",
    opciones: ["Pueden sujetar pacientes con doble delantal", "No pueden trabajar en ningún servicio", "No tienen ninguna limitación", "No deben permanecer en salas de radiología durante los disparos ni sujetar pacientes en exposiciones"],
    correcta: "D",
    explicacion: "Se protege especialmente a la trabajadora embarazada frente a la radiación. (Radioprotección; PRL (art. 26 LPRL))"
  },
  {
    tema: "Funciones del celador",
    enunciado: "¿Qué celador debe atender la llamada de un timbre de habitación en planta?",
    opciones: ["El celador no la atiende directamente; avisa al personal de enfermería si es el primero en oírla", "Solo el jefe de turno", "El celador de puerta", "Cualquier celador que pase"],
    correcta: "A",
    explicacion: "Las llamadas de los pacientes las atiende enfermería; el celador colabora avisando. (Organización de la planta)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "Durante una huelga, los celadores designados en servicios mínimos:",
    opciones: ["Solo trabajan si quieren", "Pueden negarse si secundan la huelga", "Cobran doble", "Están obligados a prestar esos servicios"],
    correcta: "D",
    explicacion: "Los servicios mínimos garantizan los servicios esenciales y son obligatorios para el personal designado. (Ley 55/2003; CE art. 28.2)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "El celador que trabaja en el área de admisión de urgencias recibe al paciente que llega en ambulancia y:",
    opciones: ["Le hace el triaje", "Le toma la tensión", "Le da el alta", "Ayuda a pasarlo de la camilla de la ambulancia a la del hospital y lo traslada al box indicado"],
    correcta: "D",
    explicacion: "Recepción, transferencia y traslado; el triaje es tarea de enfermería. (Funciones del celador en urgencias (tema 8))"
  },
  {
    tema: "Funciones del celador",
    enunciado: "Si en la entrada se presenta un paciente muy grave caminando por su propio pie, el celador debe:",
    opciones: ["Preguntarle sus datos antes de nada", "Indicarle el camino a urgencias", "Proporcionarle inmediatamente una silla o camilla y avisar al personal sanitario", "Pedirle que haga cola en admisión"],
    correcta: "C",
    explicacion: "Prioridad a la asistencia: medio de transporte y aviso inmediato. (Funciones del celador en urgencias)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "La función de vigilancia del celador NO incluye:",
    opciones: ["Controlar los accesos", "Hacer rondas", "Comprobar el cierre de dependencias", "Realizar cacheos a los visitantes"],
    correcta: "D",
    explicacion: "El celador no tiene funciones de seguridad privada ni de policía. (Funciones de vigilancia)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "Cuando hay vigilantes de seguridad privada en el hospital, el celador:",
    opciones: ["Asume sus funciones de seguridad", "Colabora con ellos en el control de accesos dentro de sus propias funciones", "Les da órdenes", "Deja de controlar accesos"],
    correcta: "B",
    explicacion: "Cada colectivo tiene sus funciones y colaboran. (Funciones de vigilancia)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "El Estatuto de Personal No Sanitario de 1971 también establece que los celadores, cuando sean requeridos:",
    opciones: ["Realizarán la autopsia", "Informarán a la familia del fallecimiento", "Firmarán el certificado de defunción", "Ayudarán a las enfermeras en el amortajamiento de los fallecidos"],
    correcta: "D",
    explicacion: "Ayudan en el amortajamiento y trasladan el cadáver. (EPNS, art. 14.2)"
  },
  {
    tema: "Funciones del celador",
    enunciado: "Según el Estatuto, el celador debe instruir a los enfermos en:",
    opciones: ["El uso de los equipos de oxígeno", "El uso de su medicación", "Las técnicas de rehabilitación", "El uso y manejo de persianas, cortinas y útiles de servicio en general"],
    correcta: "D",
    explicacion: "Instrucción sobre el uso de persianas, cortinas y útiles de servicio, para evitar su deterioro. (EPNS, art. 14.2)"
  },
  {
    tema: "Funciones del celador",
    origen: "Examen 2024 · Específico E5",
    enunciado: "¿Cuál no es una barrera en la comunicación debida a la transmisión?",
    opciones: ["La distorsión.", "El filtrado.", "El efecto halo.", "La sobrecarga de los canales."],
    correcta: "C",
    explicacion: "El efecto halo es una barrera de percepción del receptor, no de la transmisión del mensaje."
  },
  {
    tema: "Funciones del celador",
    origen: "Examen 2024 · Específico E11",
    enunciado: "¿A quién corresponde la custodia de pertenencias?",
    opciones: ["Al Servicio de Admisión.", "A la Jefatura de personal subalterno.", "Al celador de la entrada principal.", "Al Servicio de Atención al Paciente."],
    correcta: "A",
    explicacion: "La custodia de las pertenencias de los pacientes corresponde al Servicio de Admisión."
  },
  {
    tema: "Funciones del celador",
    origen: "Examen 2024 · Específico E13",
    enunciado: "¿Cuáles no son elementos necesarios en la escucha activa?",
    opciones: ["Empatizar.", "Tener una postura activa.", "Retroalimentar.", "Ofrecer ayuda prematuramente."],
    correcta: "D",
    explicacion: "Ofrecer ayuda antes de tiempo interrumpe la escucha; empatizar, postura activa y retroalimentar sí forman parte de ella."
  },
  {
    tema: "Funciones del celador",
    origen: "Examen 2024 · Específico E16",
    enunciado: "Según el Estatuto de Personal no Sanitario al servicio de las instituciones sanitarias de la Seguridad Social de 1971, el jefe de personal subalterno:",
    opciones: ["Ejercerá, por delegación del Director, la jefatura del personal de celadores.", "Mantendrá el régimen establecido por la dirección respecto a la limpieza de la Institución.", "Cuidará de la compostura y aseo del personal a sus órdenes, revisando y exigiendo que vistan el uniforme reglamentario.", "Vigilará el acceso de los enfermos, visitantes y personal a las distintas dependencias de la Institución."],
    correcta: "C",
    explicacion: "Entre las funciones del jefe de personal subalterno está cuidar la compostura y el aseo del personal a sus órdenes y exigir el uniforme."
  },
  {
    tema: "Funciones del celador",
    origen: "Examen 2024 · Específico E28",
    enunciado: "¿Cuál no es una característica del paralenguaje?",
    opciones: ["Tono.", "Gestos.", "Volumen.", "Articulación."],
    correcta: "B",
    explicacion: "El paralenguaje es cómo suena la voz (tono, volumen, articulación). Los gestos son comunicación no verbal corporal (kinesia)."
  },
  {
    tema: "Funciones del celador",
    origen: "Examen 2024 · Específico E29",
    enunciado: "¿Cuál no es una característica que facilita la comprensión por parte del receptor?",
    opciones: ["La actitud negativa hacia el interlocutor.", "Concretar la idea que se quiere transmitir.", "Cuidar la comunicación no verbal.", "La adecuación del tono."],
    correcta: "A",
    explicacion: "Una actitud negativa hacia el interlocutor dificulta la comprensión."
  },
  {
    tema: "Funciones del celador",
    origen: "Examen 2024 · Específico E31",
    enunciado: "¿Cuál de las siguientes es una función del celador?",
    opciones: ["Movilizar al paciente dentro de su medio teniendo en cuenta su estado y la posición anatómica recomendada.", "Acompañar a las madres y recién nacidos a los servicios y plantas que les sean asignados.", "Aplicar técnicas de oxigenoterapia.", "Ayudarán a las enfermeras y ayudantes de planta al movimiento y traslado de los enfermos encamados que requieran un trato especial en razón de sus dolencias para hacerles la cama."],
    correcta: "D",
    explicacion: "Es literal del art. 14.2.13.ª del Estatuto de Personal No Sanitario de 1971: los celadores ayudan a enfermeras y ayudantes de planta a mover y trasladar a los encamados que necesitan un trato especial para hacerles las camas. Aplicar oxigenoterapia o valorar el estado y la posición del paciente es tarea sanitaria."
  },
  {
    tema: "Funciones del celador",
    origen: "Examen 2024 · Específico E32",
    enunciado: "Según el Estatuto de Personal Sanitario no Facultativo de 26 de abril de 1973, ¿a quién corresponde atender a la higiene de los enfermos graves y hacer sus camas con la ayuda de las auxiliares?",
    opciones: ["A los enfermeros y ayudantes técnicos sanitarios.", "A las auxiliares con ayuda del celador.", "A las enfermeras con ayuda de las auxiliares, cuando se trate de pacientes femeninas.", "Al celador en caso de pacientes masculinos, siguiendo las instrucciones de la supervisora."],
    correcta: "A",
    explicacion: "Art. 59.7 del Estatuto de 1973: atender a la higiene de los enfermos graves y hacer sus camas con la ayuda de las Auxiliares de Clínica es función de las Enfermeras y ATS. El celador solo asea excepcionalmente a enfermos masculinos, por indicación de la supervisora."
  },
  {
    tema: "Funciones del celador",
    origen: "Examen 2024 · Específico E48",
    enunciado: "El número máximo de camas por habitación hospitalaria no debe ser superior a:",
    opciones: ["Tres camas.", "Cuatro camas.", "Cinco camas.", "Seis camas."],
    correcta: "B",
    explicacion: "Según la respuesta oficial, una habitación hospitalaria no debe tener más de cuatro camas."
  },
  {
    tema: "Funciones del celador",
    origen: "Examen 2024 · Específico E60",
    enunciado: "Estando destinado en la puerta de entrada de visitas, un usuario intenta acceder con un niño que dice tener seis años. ¿Cómo debe actuar?",
    opciones: ["Le dirá educadamente que los menores de doce años no pueden pasar.", "Dejaría pasar a uno, al presentar un solo pase de visita.", "Haría una excepción, pero le informaría de los riesgos que conlleva para el pequeño.", "Les dejaría pasar porque el pase indica que van a la planta de paliativos."],
    correcta: "D",
    explicacion: "Según la respuesta oficial, en la planta de paliativos se permite la entrada del menor."
  },
  {
    tema: "Funciones del celador",
    origen: "Examen 2024 · Específico E62",
    enunciado: "Trabajando un domingo en el turno de mañana, oye desde el control de la planta voces y risas procedentes de una habitación. Al acercarse, ve que con el paciente de la cama dos hay cinco acompañantes. ¿Qué debería hacer?",
    opciones: ["Llamar inmediatamente a seguridad, ya que es función suya vigilar el comportamiento de enfermos y familiares.", "Explicarles educadamente que las normas del hospital solo permiten un acompañante por paciente fuera del horario de visita y que tienen que abandonar la habitación.", "Al ser fin de semana, hacer un poco la vista gorda y cerrar la puerta para que no molesten.", "Pedirles que hablen más bajo."],
    correcta: "B",
    explicacion: "El celador vigila el comportamiento de visitantes y les explica con educación las normas del centro."
  },
  {
    tema: "Funciones del celador",
    origen: "Examen 2024 · Específico E63",
    enunciado: "El facultativo responsable de un paciente en la UCI nos ordena que avisemos a sus familiares para poder informarles sobre su estado. Nosotros, como celadores de esa unidad:",
    opciones: ["No es función nuestra avisar a la familia.", "Haremos lo que nos han ordenado.", "Le diremos que, como celadores de UCI, tenemos mucho trabajo y no podemos salir a avisar a la familia.", "Ninguna respuesta es correcta."],
    correcta: "B",
    explicacion: "Avisar a los familiares cuando lo pide el médico es una función del celador."
  },
  {
    tema: "Funciones del celador",
    origen: "Examen 2024 · Específico E73",
    enunciado: "Usted trabaja como celador/a en el área psiquiátrica del hospital. Por su experiencia, sabe cómo actuar ante un paciente que profiere insultos y hace gestos agresivos. ¿Cómo se debe responder ante tal situación?",
    opciones: ["Se notifica la situación al médico y a la enfermera responsables.", "Se busca disminuir los estímulos externos que inciden en el enfermo: luz, voces, ruidos...", "Si fuese preciso, colaboraría en el aislamiento y la sujeción mecánica del paciente, siempre bajo prescripción médica.", "Todas son correctas."],
    correcta: "D",
    explicacion: "Se avisa a médico y enfermera, se reducen los estímulos y, si hace falta, se colabora en la sujeción, siempre con prescripción médica."
  },
  {
    tema: "Funciones del celador",
    origen: "Examen 2024 · Específico E74",
    enunciado: "Estando en el servicio de urgencias, es necesario contener a un paciente psiquiátrico que está agitado. ¿Cuál de las siguientes opciones no es correcta?",
    opciones: ["Intentar hacerle ver al paciente lo que le está pasando.", "Despejar la zona de curiosos, haciendo que enfermos y acompañantes permanezcan en sus boxes o cubículos.", "A la hora de la reducción, se intentará sujetarlo por cada una de sus cuatro extremidades.", "En la inmovilización no son necesarias más de cuatro o cinco personas."],
    correcta: "D",
    explicacion: "Según la respuesta oficial, es incorrecta la D, la que limita a cuatro o cinco el número de personas para inmovilizar."
  },
  {
    tema: "Funciones del celador",
    origen: "Examen 2024 · Específico E79",
    enunciado: "Estando destinado en la planta de pediatría, le encargan que desaloje las habitaciones para la visita médica. Usted debe:",
    opciones: ["Acatar la orden porque, además de ser una de sus funciones, es una norma impuesta por la Dirección del hospital que durante la visita médica no se permita la estancia de los acompañantes en las habitaciones.", "Acatar la orden, dejando que se queden solo los que tengan el debido pase permanente.", "Decir educadamente que es función de seguridad.", "Llamar al encargado de celadores, ya que lo que me piden incumple la norma del hospital de que los niños pueden estar acompañados en todo momento."],
    correcta: "B",
    explicacion: "Se desalojan las habitaciones, pero pueden quedarse quienes tengan pase permanente."
  },
  {
    tema: "Funciones del celador",
    origen: "Examen 2024 · Específico E81",
    enunciado: "Antonio es un celador que trabaja de forma eventual desde el año 2022. Con su primer contrato le entregaron sus uniformes; pasado el tiempo, Antonio duda de cuánto tiempo tiene que transcurrir, de forma ordinaria, para que le entreguen un uniforme nuevo. ¿Cuál sería este plazo?",
    opciones: ["365 días de trabajo efectivo.", "464 jornadas de trabajo efectivo.", "720 días de trabajo efectivo.", "486 días de trabajo efectivo."],
    correcta: "B",
    explicacion: "Según la respuesta oficial, el uniforme se renueva cada 464 jornadas de trabajo efectivo. El Estatuto de 1971 (art. 62) solo dice que la duración de las prendas la fija la Delegación General; la cifra no aparece en él."
  },
  {
    tema: "Funciones del celador",
    origen: "Examen 2024 · Específico E85",
    enunciado: "Trabajando en la planta de Traumatología, se da cuenta de que el grifo de una habitación gotea. ¿Qué debería hacer?",
    opciones: ["Llamar al servicio de mantenimiento y decirles que suban inmediatamente.", "Avisar al encargado de turno, por ser su inmediato superior.", "Decírselo a la supervisora de planta, para que sea ella quien dé parte a mantenimiento.", "Intentar arreglarlo, en caso de que se lo encargase la supervisora."],
    correcta: "C",
    explicacion: "En planta, el celador avisa a la supervisora, que es quien da el parte a mantenimiento."
  },
  {
    tema: "Funciones del celador",
    origen: "Examen 2024 · Específico E90",
    enunciado: "La enfermera de urgencias pide a un celador que ayude a colocar y después retirar una cuña a uno de los pacientes que está en camilla en la sala de observación y que requiere un tratamiento especial debido a sus dolencias. El celador:",
    opciones: ["Se negará a hacer ese cometido por no ser de su competencia.", "Informará a la enfermera de que es función del auxiliar de enfermería.", "Hará lo que le encargaron solo por ser una función exclusiva del celador.", "Dada la excepcionalidad y las circunstancias especiales del paciente, el celador deberá colaborar con el personal sanitario en su colocación y retirada."],
    correcta: "D",
    explicacion: "Con pacientes que necesitan un trato especial por su dolencia, el celador colabora con el personal sanitario en la colocación de la cuña."
  },
  {
    tema: "Funciones del celador",
    origen: "Examen 2024 · Específico E94",
    enunciado: "Hoy está destinado en el área de Salud Mental del hospital. El personal facultativo le pide desempeñar una serie de funciones, entre las que no se puede encontrar:",
    opciones: ["Vigilar el orden y la armonía entre los pacientes.", "Recoger medicación y otros productos de la farmacia en carros de unidosis.", "Ayudar al personal sanitario en la administración de inyectables y el tratamiento de pacientes incapaces que se niegan a colaborar.", "Reducir a los pacientes agitados aplicando sujeción mecánica a su criterio."],
    correcta: "D",
    explicacion: "La sujeción mecánica nunca se aplica a criterio del celador: requiere prescripción médica."
  },
  {
    tema: "Funciones del celador",
    origen: "Examen 2024 · Específico E98",
    enunciado: "Una persona acude al servicio de urgencias y avisa al celador de que en el exterior del centro hay una persona en el suelo que necesita ayuda urgente. En este caso, el celador:",
    opciones: ["Le dirá a la persona que lo acerque para que lo vea el médico.", "Le pedirá que se acerque al servicio de admisión de urgencias para que sea este quien avise al médico.", "Le facilitará una camilla para que traslade al enfermo.", "Se asegurará de los hechos e informará de inmediato al personal sanitario, siguiendo sus instrucciones para trasladar al paciente."],
    correcta: "D",
    explicacion: "El celador comprueba lo que pasa, avisa enseguida al personal sanitario y sigue sus instrucciones para el traslado."
  },
  {
    tema: "Funciones del celador",
    origen: "Examen 2024 · Específico E101",
    enunciado: "Los familiares que acuden al servicio de urgencias del hospital acompañando a un paciente le dicen al celador de la puerta que este tiene dolor en el pecho y antecedentes de infarto. ¿Cómo deberá actuar dicho celador?",
    opciones: ["Lo llevará rápidamente en silla de ruedas al servicio de admisión de urgencias para que facilite los datos y después lo pasará a la zona de triaje.", "Dados los antecedentes del paciente y la alta posibilidad de que se trate de un infarto, lo llevará directamente al servicio de cardiología.", "Lo trasladará de inmediato a la sala de triaje para que lo valore el personal sanitario y, al final, informará a la familia de su estado.", "Lo trasladará de inmediato a la sala de triaje para que lo valore el personal sanitario mientras la familia facilita los datos del paciente en admisión de urgencias."],
    correcta: "D",
    explicacion: "El paciente va directo a triaje mientras la familia da los datos en admisión. Informar del estado del paciente no es tarea del celador."
  },
  {
    tema: "Funciones del celador",
    origen: "Examen 2024 · Específico E102",
    enunciado: "Terminado el horario de visitas, aparece una persona que le enseña la tarjeta identificativa de personal de una institución sanitaria dependiente del SERGAS. Le dice que quiere entrar a ver a un amigo que está ingresado. ¿Qué tendría que hacer usted?",
    opciones: ["Dejarlo pasar porque es compañero.", "Dejarlo pasar porque la tarjeta identificativa de personal del SERGAS es válida como pase de visita.", "Explicarle que esa tarjeta no es válida como pase de visita.", "Informarle educadamente del horario de visitas, instándole a venir otro día."],
    correcta: "D",
    explicacion: "La tarjeta de empleado del Sergas no sirve como pase de visita. Fuera del horario, lo correcto es informarle con educación del horario de visitas e invitarle a volver otro día."
  },
  {
    tema: "Funciones del celador",
    origen: "Examen 2024 · Específico E106 (reserva)",
    enunciado: "Le encargan bajar unas gasometrías al laboratorio de urgencias. Son unos capilares y le dan un imán para que los vaya moviendo, evitando su coagulación. Señale la opción correcta sobre lo que tendría que hacer en este supuesto:",
    opciones: ["Acatar la orden.", "Dejar la muestra en el área de recepción de muestras, porque no es función suya distribuir las muestras por los distintos laboratorios.", "Decirle educadamente que le corresponde al TCAE trasladar muestras que necesiten manipulación.", "Pondrá la muestra en una batea y la bajará al laboratorio de urgencias."],
    correcta: "C",
    explicacion: "Una muestra que hay que manipular durante el trayecto (mover el imán) la tiene que trasladar el TCAE, no el celador."
  },
  {
    tema: "Funciones del celador",
    origen: "Examen SAS 2025 · P12",
    enunciado: "En el trabajo en equipo podemos diferenciar entre grupos y equipos. Señale la función propia de un equipo de trabajo:",
    opciones: ["La toma de decisiones a través de órdenes.", "El conjunto de personas relacionadas entre sí, que trabajan para conseguir objetivos comunes.", "Que las personas de una unidad se lleven bien entre ellas.", "El conjunto de personas que desarrolla su labor, respondiendo individualmente de su trabajo."],
    correcta: "B",
    explicacion: "Un equipo es más que un grupo: personas relacionadas que trabajan juntas para conseguir objetivos comunes."
  },
  {
    tema: "Funciones del celador",
    origen: "Examen SAS 2025 · P14",
    enunciado: "En los centros sanitarios, un aspecto que condiciona negativamente el trabajo en equipo, es:",
    opciones: ["Comunicación.", "Confianza.", "Motivación.", "Irresponsabilidad."],
    correcta: "D",
    explicacion: "Comunicación, confianza y motivación ayudan al equipo. La irresponsabilidad lo perjudica."
  },
  {
    tema: "Funciones del celador",
    origen: "Examen SAS 2025 · P15",
    enunciado: "¿Cuál es la actitud correcta cuando nos encontramos con un usuario prepotente?",
    opciones: ["No discutir, mostrar interés, pedir consejo y su opinión.", "Discutir, tomar la decisión por el usuario.", "Argumentar en su contra.", "No mostrar interés."],
    correcta: "A",
    explicacion: "Con un usuario prepotente: no discutir, mostrar interés y tener en cuenta su opinión."
  },
  {
    tema: "Funciones del celador",
    origen: "Examen SAS 2025 · P16",
    enunciado: "En relación a la información durante la estancia del usuario en un centro sanitario, el/la celador/a NO puede asumir la tarea de informar sobre:",
    opciones: ["Ubicación de los servicios y unidades del centro.", "Horarios de visita.", "Horario de información médica.", "Diagnósticos y/o tratamientos que se le estén realizando a los pacientes."],
    correcta: "D",
    explicacion: "El celador puede orientar sobre ubicación y horarios, pero NUNCA informa de diagnósticos ni tratamientos: eso es del personal sanitario."
  },
  {
    tema: "Funciones del celador",
    origen: "Examen SAS 2025 · P17",
    enunciado: "Señale los factores de la comunicación interpersonal que facilitan la relación entre el/la celador/a con pacientes y familiares:",
    opciones: ["Hablar demasiado deprisa.", "Usar terminología científica.", "Las frases han de ser cortas, precisas, claras.", "Hablar al paciente en momentos inoportunos."],
    correcta: "C",
    explicacion: "Ayudan a comunicarse las frases cortas, precisas y claras. Hablar deprisa o con términos científicos lo dificulta."
  },
  {
    tema: "Funciones del celador",
    origen: "Examen SAS 2025 · P151",
    enunciado: "Indique los factores que obstaculizan la comunicación interpersonal entre el/la celador/a con pacientes y familiares:",
    opciones: ["Saber escuchar para después hablar.", "Evitar comentarios improcedentes o innecesarios.", "Hablar demasiado deprisa o lentamente.", "Mostrar interés."],
    correcta: "C",
    explicacion: "Hablar demasiado deprisa o demasiado despacio dificulta la comunicación. Escuchar, evitar comentarios innecesarios y mostrar interés la facilitan."
  },
  {
    tema: "Funciones del celador",
    origen: "Examen SAS 2025 · P153",
    enunciado: "Para que un equipo pueda ser efectivo, aprovechando al máximo los beneficios del trabajo en equipo, tiene que cumplir unas determinadas características:",
    opciones: ["El individualismo, egoísmo, desacuerdo.", "La imprudencia, apatía, diversidad.", "La cohesión, compromiso, comunicación.", "La soberbia, mentira, incertidumbre."],
    correcta: "C",
    explicacion: "Un equipo eficaz necesita cohesión, compromiso y comunicación."
  },
  {
    tema: "Funciones del celador",
    origen: "Examen SAS 2025 aplazado · P17",
    enunciado: "Señale las características que tiene el “Rol del Empatizador” en un equipo de trabajo:",
    opciones: ["Es una persona destructiva, que no aporta soluciones.", "Es una persona con visión negativa.", "Es una persona creativa y siempre está dispuesta a innovar.", "Es una persona que sabe ponerse en el lugar de los demás y facilita las relaciones humanas."],
    correcta: "D",
    explicacion: "El empatizador sabe ponerse en el lugar de los demás y facilita las relaciones en el equipo."
  },
  {
    tema: "Funciones del celador",
    origen: "Examen SAS 2025 aplazado · P18",
    enunciado: "¿Cuál NO es una función a realizar por los/las Celadores/as en su puesto base en la Unidad o Servicio de Urgencias?",
    opciones: ["Cuidarán de la compostura y aseo del personal a sus órdenes, revisando y exigiendo que vistan el uniforme reglamentario.", "Tendrán a su cargo la vigilancia nocturna, tanto del interior como del exterior del edificio, del que cuidarán estén cerradas las puertas de servicios complementarios.", "Velarán continuamente por conseguir el mayor orden y silencio posible en todas las dependencias de la Institución.", "Tendrán a su cargo el traslado de los enfermos, tanto dentro de la institución como en el servicio de ambulancias."],
    correcta: "A",
    explicacion: "Cuidar de la compostura y aseo del personal a sus órdenes es función del jefe de personal subalterno, no del celador. Las demás sí son funciones del celador (Estatuto de 1971, art. 14.2)."
  },
  {
    tema: "Funciones del celador",
    origen: "Examen SAS 2025 aplazado · P19",
    enunciado: "¿Cuál de las siguientes funciones es propia del/de la Celador/a?",
    opciones: ["Hará los servicios de guardia que correspondan dentro de los turnos que se establezcan.", "Vigilará las entradas de la institución, sin permitir el acceso a sus dependencias más que a las personas no autorizadas para ello.", "Ayudará a los facultativos a amortajar a los enfermos fallecidos, corriendo a su cargo el traslado de los cadáveres al mortuorio.", "Todas las respuestas anteriores son correctas."],
    correcta: "A",
    explicacion: "Solo la A es literal. La B tiene trampa (dice «no autorizadas») y la C también: el celador ayuda a las enfermeras, no a los facultativos, a amortajar."
  },
  {
    tema: "Funciones del celador",
    origen: "Examen SAS 2025 aplazado · P20",
    enunciado: "Según el Estatuto de Personal no Sanitario al Servicio de las Instituciones Sanitarias de la Seguridad Social, NO es una función del/de la Celador/a:",
    opciones: ["Hacer los servicios de guardia que correspondan dentro de los turnos que se establezca.", "Vigilar el comportamiento de los enfermos y visitantes, evitando que éstos últimos fumen en las habitaciones.", "Velar continuamente por conseguir el mayor orden y silencio posible en todas las dependencias de la institución.", "Recepción, puesta en batería y sustitución de las botellas de oxígeno en el lugar que sea preciso."],
    correcta: "D",
    explicacion: "Las botellas de oxígeno no aparecen entre las funciones del celador del art. 14.2 del Estatuto de 1971. Las otras tres sí."
  },
  {
    tema: "Funciones del celador",
    origen: "Examen SAS 2025 aplazado · P21",
    enunciado: "¿Cuáles son las cualidades, en el estilo de comunicación oral, recomendado en la atención con los usuarios en Centros Sanitarios?",
    opciones: ["Autoritario y técnico, para mostrar conocimiento.", "Distante y formal, sin implicarse.", "Claro y coherente, siendo sencillo.", "Rápido y contradictorio, sin dejar tiempo para contestar preguntas."],
    correcta: "C",
    explicacion: "Con los usuarios: comunicación clara, coherente y sencilla."
  },
  {
    tema: "Funciones del celador",
    origen: "Examen SAS 2025 aplazado · P22",
    enunciado: "En la comunicación interpersonal, se recomienda:",
    opciones: ["No aceptar quejas si las considera injustas.", "No importa el tono de voz.", "Sólo interviene el contacto visual.", "No interrumpir al que habla."],
    correcta: "D",
    explicacion: "Escuchar bien empieza por no interrumpir al que habla."
  },
  {
    tema: "Funciones del celador",
    origen: "Examen SAS 2025 aplazado · P23",
    enunciado: "En el proceso de la comunicación del/la Celador/a con el usuario, el conjunto de signos que le permite al emisor trasmitir el mensaje, se denomina:",
    opciones: ["Emisor.", "Mensaje.", "Receptor.", "Código."],
    correcta: "D",
    explicacion: "El código es el conjunto de signos (por ejemplo, el idioma) con el que el emisor construye el mensaje."
  },
  {
    tema: "Funciones del celador",
    origen: "Examen SAS 2025 aplazado · P151",
    enunciado: "El/la Celador/a, con respecto al usuario durante su estancia en el Centro Sanitario, NO puede:",
    opciones: ["Informar sobre horarios de visita.", "Informar sobre las pruebas o tratamientos que se le están realizando al paciente.", "Informar sobre la ubicación de los servicios y unidades del centro.", "Informar sobre los horarios de información médica."],
    correcta: "B",
    explicacion: "El celador no informa sobre pruebas ni tratamientos: eso es del personal sanitario."
  },
  {
    tema: "Funciones del celador",
    origen: "Examen SAS 2025 aplazado · P153",
    enunciado: "¿Cuál de las siguientes respuestas se considera una barrera para la comunicación?",
    opciones: ["Evitar términos clínicos.", "Mirar a la cara.", "Hablar deprisa.", "Ser empático."],
    correcta: "C",
    explicacion: "Hablar deprisa es una barrera para la comunicación. Las otras opciones la facilitan."
  },
  // ===================================================================
  //  MOBILIARIO Y UTENSILIOS (70 preguntas)
  // ===================================================================
  {
    tema: "Mobiliario y utensilios",
    enunciado: "El armazón metálico que se coloca sobre la cama, generalmente en traumatología, para sujetar poleas, pesas y el triángulo de incorporación se llama:",
    opciones: ["Marco de Stryker", "Cama circoeléctrica", "Cuadro balcánico", "Trapecio de Bradford"],
    correcta: "C",
    explicacion: "El cuadro o marco balcánico permite colocar tracciones y el triángulo para que el paciente se incorpore. (Mobiliario hospitalario)"
  },
  {
    tema: "Mobiliario y utensilios",
    enunciado: "El triángulo o trapecio que cuelga sobre la cama sirve para:",
    opciones: ["Colgar los sueros", "Sujetar al paciente agitado", "Colgar la bolsa de orina", "Que el paciente se ayude con los brazos para incorporarse o moverse"],
    correcta: "D",
    explicacion: "Facilita que el propio paciente colabore en su movilización. (Mobiliario hospitalario)"
  },
  {
    tema: "Mobiliario y utensilios",
    enunciado: "La cama formada por dos bastidores que permite girar al paciente de decúbito supino a prono sin movilizar su columna es:",
    opciones: ["La cama articulada", "La cama o marco de Stryker", "La cama libro", "La cama de levitación"],
    correcta: "B",
    explicacion: "El marco de Stryker se usa en lesionados medulares y grandes traumatismos. (Mobiliario hospitalario)"
  },
  {
    tema: "Mobiliario y utensilios",
    enunciado: "La cama circoeléctrica permite:",
    opciones: ["Hacer radiografías sin mover al paciente", "Pesar al paciente", "Girar al paciente en sentido vertical mediante dos grandes aros", "Calentar al paciente"],
    correcta: "C",
    explicacion: "Gira al paciente verticalmente mediante aros con motor eléctrico. Hoy está en desuso. (Mobiliario hospitalario)"
  },
  {
    tema: "Mobiliario y utensilios",
    enunciado: "La cama de aire fluidificado o de levitación (tipo Clinitron) se usa especialmente en:",
    opciones: ["Grandes quemados y pacientes con úlceras extensas", "Pacientes pediátricos", "Partos", "Pacientes psiquiátricos"],
    correcta: "A",
    explicacion: "Reparte la presión al máximo; indicada en grandes quemados y úlceras por presión extensas. (Mobiliario hospitalario)"
  },
  {
    tema: "Mobiliario y utensilios",
    enunciado: "El colchón de aire alternante tiene como finalidad principal:",
    opciones: ["Prevenir las úlceras por presión cambiando los puntos de apoyo", "Mantener al paciente inmovilizado", "Calentar al paciente", "Facilitar las radiografías"],
    correcta: "A",
    explicacion: "Sus celdas se inflan y desinflan alternativamente, variando los puntos de presión. (Material de prevención de úlceras)"
  },
  {
    tema: "Mobiliario y utensilios",
    enunciado: "La cama hospitalaria articulada permite:",
    opciones: ["Modificar la posición del somier (cabecera, piecero y altura)", "Solo subir y bajar la cabecera", "Girar al paciente sobre sí mismo", "Pesar al paciente"],
    correcta: "A",
    explicacion: "Sus planos articulados permiten adoptar distintas posiciones: Fowler, Trendelenburg, etc. (Mobiliario hospitalario)"
  },
  {
    tema: "Mobiliario y utensilios",
    enunciado: "Las ruedas de las camas hospitalarias deben tener:",
    opciones: ["Un único freno central sin posibilidad de bloqueo", "Frenos, que se mantendrán puestos cuando la cama esté parada", "Ruedas fijas sin giro", "Siempre las ruedas libres"],
    correcta: "B",
    explicacion: "La cama debe estar frenada salvo durante el traslado. (Mobiliario hospitalario)"
  },
  {
    tema: "Mobiliario y utensilios",
    enunciado: "Las barandillas laterales de la cama sirven para:",
    opciones: ["Evitar caídas del paciente", "Apoyar las bandejas de comida", "Colgar la ropa", "Sujetar al paciente agitado"],
    correcta: "A",
    explicacion: "Previenen caídas en pacientes desorientados, sedados o con riesgo. (Mobiliario hospitalario)"
  },
  {
    tema: "Mobiliario y utensilios",
    enunciado: "El soporte metálico con ganchos donde se cuelgan los sueros se denomina:",
    opciones: ["Pie de gotero o portasueros", "Cuadro balcánico", "Trapecio", "Riñonera"],
    correcta: "A",
    explicacion: "El pie de gotero suele llevar ruedas para que el paciente pueda desplazarse con él. (Material hospitalario)"
  },
  {
    tema: "Mobiliario y utensilios",
    enunciado: "La cuña o bacinilla se utiliza para:",
    opciones: ["Lavar la cara del paciente", "Que el paciente encamado pueda defecar u orinar en la cama", "Recoger vómitos", "Guardar el instrumental"],
    correcta: "B",
    explicacion: "La cuña es para la eliminación del paciente encamado. La botella es para orinar (hombres). (Material de higiene)"
  },
  {
    tema: "Mobiliario y utensilios",
    enunciado: "La botella de orina (orinal masculino) sirve para:",
    opciones: ["Que el paciente varón orine en la cama", "Administrar líquidos", "Recoger vómitos", "Recoger muestras de sangre"],
    correcta: "A",
    explicacion: "Recipiente para la micción de pacientes varones encamados. (Material de higiene)"
  },
  {
    tema: "Mobiliario y utensilios",
    enunciado: "La batea con forma de riñón (riñonera) se usa para:",
    opciones: ["Lavar al paciente", "Que el paciente orine", "Transportar historias clínicas", "Recoger pequeños residuos, vómitos o depositar material durante curas"],
    correcta: "D",
    explicacion: "Recipiente arriñonado para pequeños residuos, secreciones o material. (Material hospitalario)"
  },
  {
    tema: "Mobiliario y utensilios",
    enunciado: "¿Cuál de los siguientes elementos NO forma parte de una silla de ruedas?",
    opciones: ["Nivel de burbuja para pendientes pronunciadas", "Aros propulsores", "Mangos de empuje", "Reposapiés"],
    correcta: "A",
    explicacion: "Partes de la silla: chasis, ruedas traseras con aros propulsores, ruedas delanteras, frenos, reposabrazos, reposapiés y empuñaduras. No lleva nivel de burbuja (pregunta del examen Sergas de 2019). (Silla de ruedas)"
  },
  {
    tema: "Mobiliario y utensilios",
    enunciado: "Los aros propulsores de la silla de ruedas sirven para:",
    opciones: ["Plegar la silla", "Que el propio usuario impulse la silla con las manos", "Frenar la silla en pendientes", "Sujetar el reposapiés"],
    correcta: "B",
    explicacion: "Son los aros unidos a las ruedas grandes que el usuario empuja. (Silla de ruedas)"
  },
  {
    tema: "Mobiliario y utensilios",
    enunciado: "Las ruedas pequeñas delanteras de la silla de ruedas son:",
    opciones: ["Giratorias y permiten dirigir la silla", "Las que llevan el freno principal", "Las que llevan los aros propulsores", "Fijas y sin giro"],
    correcta: "A",
    explicacion: "Las delanteras son pequeñas y giratorias; las traseras, grandes, con los aros. (Silla de ruedas)"
  },
  {
    tema: "Mobiliario y utensilios",
    enunciado: "Antes de sentar a un paciente en una silla de ruedas, el celador debe:",
    opciones: ["Frenar la silla y retirar o plegar los reposapiés", "Quitar los reposabrazos siempre", "Inclinar la silla hacia atrás", "Dejar las ruedas libres para facilitar el movimiento"],
    correcta: "A",
    explicacion: "Frenos puestos y reposapiés apartados para evitar tropiezos. (Silla de ruedas)"
  },
  {
    tema: "Mobiliario y utensilios",
    enunciado: "Las ruedas antivuelco de una silla de ruedas sirven para:",
    opciones: ["Girar en espacios estrechos", "Subir escaleras", "Evitar que la silla vuelque hacia atrás", "Frenar en rampas"],
    correcta: "C",
    explicacion: "Pequeñas ruedas traseras que impiden el vuelco hacia atrás. (Silla de ruedas)"
  },
  {
    tema: "Mobiliario y utensilios",
    enunciado: "La grúa de movilización se utiliza para:",
    opciones: ["Mover las camas entre plantas", "Transportar material pesado del almacén", "Trasladar a pacientes que no colaboran o son muy pesados, por ejemplo de la cama al sillón", "Subir camillas a la ambulancia"],
    correcta: "C",
    explicacion: "Reduce el esfuerzo del personal y el riesgo de lesiones de espalda. (Ayudas técnicas)"
  },
  {
    tema: "Mobiliario y utensilios",
    enunciado: "La tabla de transferencia (o de deslizamiento) sirve para:",
    opciones: ["Inmovilizar fracturas", "Deslizar al paciente de una superficie a otra (cama, camilla, silla) con menos esfuerzo", "Hacer la cama", "Transportar historias"],
    correcta: "B",
    explicacion: "Facilita transferencias horizontales o de la cama a la silla. (Ayudas técnicas)"
  },
  {
    tema: "Mobiliario y utensilios",
    enunciado: "La camilla de traslado debe tener, como elementos de seguridad:",
    opciones: ["Un motor eléctrico", "Asientos para acompañantes", "Frenos y barandillas laterales", "Solo ruedas grandes"],
    correcta: "C",
    explicacion: "Frenos para las transferencias y barandillas para evitar caídas durante el traslado. (Mobiliario hospitalario)"
  },
  {
    tema: "Mobiliario y utensilios",
    enunciado: "La camilla de tijera o cuchara se utiliza para:",
    opciones: ["Recoger del suelo a un paciente politraumatizado sin moverlo, separándose en dos mitades", "Trasladar pacientes que pueden caminar", "Hacer radiografías", "Pesar al paciente"],
    correcta: "A",
    explicacion: "Se separa en dos palas que se introducen bajo el paciente sin girarlo. (Material de urgencias)"
  },
  {
    tema: "Mobiliario y utensilios",
    enunciado: "El colchón de vacío se utiliza para:",
    opciones: ["Calentar al paciente", "Prevenir úlceras en encamados de larga duración", "Transportar material estéril", "Inmovilizar a pacientes politraumatizados adaptándose a su forma"],
    correcta: "D",
    explicacion: "Al extraer el aire se vuelve rígido y adaptado al cuerpo, inmovilizando al paciente. (Material de urgencias)"
  },
  {
    tema: "Mobiliario y utensilios",
    enunciado: "La mesa de Mayo es:",
    opciones: ["Una mesa de comer para pacientes encamados", "Una mesa de despacho", "Una mesa auxiliar de quirófano sobre la que se coloca el instrumental", "La mesa de autopsias"],
    correcta: "C",
    explicacion: "Mesa auxiliar regulable en altura que se sitúa sobre el paciente para el instrumental. (Mobiliario quirúrgico)"
  },
  {
    tema: "Mobiliario y utensilios",
    enunciado: "La lámpara de quirófano que ilumina sin producir sombras se llama:",
    opciones: ["Lámpara de Wood", "Lámpara de infrarrojos", "Lámpara cialítica (escialítica)", "Negatoscopio"],
    correcta: "C",
    explicacion: "Cialítica: varios focos que eliminan las sombras en el campo quirúrgico. (Mobiliario quirúrgico)"
  },
  {
    tema: "Mobiliario y utensilios",
    enunciado: "El negatoscopio sirve para:",
    opciones: ["Medir la tensión arterial", "Ver el fondo de ojo", "Ver las radiografías por transparencia", "Esterilizar el instrumental"],
    correcta: "C",
    explicacion: "Pantalla iluminada para leer placas radiográficas. (Material hospitalario)"
  },
  {
    tema: "Mobiliario y utensilios",
    enunciado: "El esfigmomanómetro sirve para:",
    opciones: ["Medir la saturación de oxígeno", "Medir la tensión arterial", "Medir la temperatura", "Escuchar los ruidos cardiacos"],
    correcta: "B",
    explicacion: "Tensiómetro: manguito y manómetro. (Material sanitario)"
  },
  {
    tema: "Mobiliario y utensilios",
    enunciado: "El fonendoscopio sirve para:",
    opciones: ["Medir la tensión arterial por sí solo", "Ver el oído", "Escuchar sonidos internos del cuerpo (corazón, pulmones)", "Medir la glucosa"],
    correcta: "C",
    explicacion: "Instrumento de auscultación. (Material sanitario)"
  },
  {
    tema: "Mobiliario y utensilios",
    enunciado: "El pulsioxímetro mide:",
    opciones: ["La temperatura", "La saturación de oxígeno en sangre y la frecuencia del pulso", "La glucosa", "La tensión arterial"],
    correcta: "B",
    explicacion: "Se coloca normalmente en un dedo. (Material sanitario)"
  },
  {
    tema: "Mobiliario y utensilios",
    enunciado: "El balón de reanimación autoinflable (ambú) sirve para:",
    opciones: ["Aspirar secreciones", "Medir el oxígeno", "Inmovilizar el cuello", "Ventilar manualmente al paciente"],
    correcta: "D",
    explicacion: "Se usa con mascarilla para insuflar aire u oxígeno. (Material de reanimación)"
  },
  {
    tema: "Mobiliario y utensilios",
    enunciado: "El carro de paradas contiene:",
    opciones: ["Historias clínicas", "El material y la medicación necesarios para una reanimación cardiopulmonar", "Ropa de cama", "Material de limpieza"],
    correcta: "B",
    explicacion: "Desfibrilador, material de vía aérea, medicación de urgencia, etc. (Material de reanimación)"
  },
  {
    tema: "Mobiliario y utensilios",
    enunciado: "Respecto al carro de paradas, el celador debe saber:",
    opciones: ["Dónde está ubicado en su unidad, para llevarlo rápidamente si se le pide", "Usar el desfibrilador manual en modo no automático", "Cómo administrar sus fármacos", "Revisar y reponer su medicación"],
    correcta: "A",
    explicacion: "El celador debe conocer su ubicación; su revisión corresponde a enfermería. (Material de reanimación)"
  },
  {
    tema: "Mobiliario y utensilios",
    enunciado: "El laringoscopio se utiliza para:",
    opciones: ["Explorar el oído", "Medir la presión ocular", "Ver el fondo de ojo", "Visualizar la laringe y realizar la intubación"],
    correcta: "D",
    explicacion: "Instrumento para la intubación endotraqueal. (Material sanitario)"
  },
  {
    tema: "Mobiliario y utensilios",
    enunciado: "El otoscopio sirve para explorar:",
    opciones: ["La garganta", "El oído", "La nariz exclusivamente", "El ojo"],
    correcta: "B",
    explicacion: "Oto- significa oído. (Material sanitario)"
  },
  {
    tema: "Mobiliario y utensilios",
    enunciado: "El oftalmoscopio sirve para explorar:",
    opciones: ["La piel", "El fondo de ojo", "El oído", "La laringe"],
    correcta: "B",
    explicacion: "Oftalmo- significa ojo. (Material sanitario)"
  },
  {
    tema: "Mobiliario y utensilios",
    enunciado: "Las botellas de oxígeno medicinal se identifican por:",
    opciones: ["El cuerpo y la ojiva (parte superior) de color blanco", "El cuerpo rojo y la ojiva blanca", "El cuerpo negro y la ojiva azul", "El cuerpo verde"],
    correcta: "A",
    explicacion: "Los gases medicinales llevan cuerpo blanco; el oxígeno tiene además la ojiva blanca. (Norma UNE-EN 1089-3)"
  },
  {
    tema: "Mobiliario y utensilios",
    enunciado: "Las botellas de oxígeno se deben transportar:",
    opciones: ["En un carro adecuado, sujetas y en posición vertical", "Tumbadas en una camilla sin sujeción", "Rodándolas por el suelo", "Cogidas por la válvula"],
    correcta: "A",
    explicacion: "Nunca rodando ni cogidas por la válvula; siempre sujetas. (Manipulación de gases medicinales)"
  },
  {
    tema: "Mobiliario y utensilios",
    enunciado: "En las válvulas y conexiones de las botellas de oxígeno NO se debe aplicar:",
    opciones: ["Una funda protectora", "Etiquetas identificativas", "Agua", "Grasa ni aceite"],
    correcta: "D",
    explicacion: "El oxígeno a presión con grasas puede provocar inflamación o explosión. (Manipulación de gases medicinales)"
  },
  {
    tema: "Mobiliario y utensilios",
    enunciado: "Las botellas de oxígeno deben almacenarse:",
    opciones: ["Tumbadas en el suelo", "En cualquier pasillo", "Junto a los radiadores para que no se enfríen", "Lejos de fuentes de calor y de materiales combustibles, en lugar ventilado"],
    correcta: "D",
    explicacion: "Lugar ventilado, protegido del calor y sujetas. (Manipulación de gases medicinales)"
  },
  {
    tema: "Mobiliario y utensilios",
    enunciado: "El manómetro de una botella de oxígeno indica:",
    opciones: ["El flujo que recibe el paciente", "La presión del gas que queda en la botella", "La temperatura del gas", "La concentración de oxígeno"],
    correcta: "B",
    explicacion: "El manómetro mide la presión (contenido); el caudalímetro regula el flujo en litros por minuto. (Material de oxigenoterapia)"
  },
  {
    tema: "Mobiliario y utensilios",
    enunciado: "El caudalímetro sirve para:",
    opciones: ["Humidificar el oxígeno", "Medir la saturación", "Medir la presión de la botella", "Regular los litros por minuto de oxígeno que recibe el paciente"],
    correcta: "D",
    explicacion: "Regula el flujo. (Material de oxigenoterapia)"
  },
  {
    tema: "Mobiliario y utensilios",
    enunciado: "El humidificador de oxígeno sirve para:",
    opciones: ["Aumentar la presión del oxígeno", "Medir el oxígeno", "Calentar la habitación", "Evitar que el oxígeno seque las mucosas del paciente"],
    correcta: "D",
    explicacion: "El oxígeno es un gas seco; se humidifica haciéndolo pasar por agua estéril. (Material de oxigenoterapia)"
  },
  {
    tema: "Mobiliario y utensilios",
    enunciado: "El aspirador de secreciones sirve para:",
    opciones: ["Extraer secreciones de las vías respiratorias del paciente", "Aspirar el polvo de los equipos", "Limpiar el suelo de la habitación", "Extraer sangre"],
    correcta: "A",
    explicacion: "Se usa para mantener libre la vía aérea. (Material sanitario)"
  },
  {
    tema: "Mobiliario y utensilios",
    enunciado: "El celador detecta que la silla de ruedas que va a usar tiene un freno roto. Debe:",
    opciones: ["Usarla con cuidado", "No utilizarla, retirarla y comunicar la avería para su reparación", "Arreglarla él mismo", "Dejarla en el pasillo sin avisar"],
    correcta: "B",
    explicacion: "No se usa material defectuoso; se comunica la avería (EPNS art. 14.2). (Cuidado y conservación del material)"
  },
  {
    tema: "Mobiliario y utensilios",
    enunciado: "Después de trasladar a un paciente con una infección transmisible, la silla o camilla:",
    opciones: ["Se puede usar de inmediato con otro paciente", "Solo se cambia la sábana", "Se tira", "Se limpia y desinfecta según el protocolo antes de volver a usarla"],
    correcta: "D",
    explicacion: "Prevención de infecciones: limpieza y desinfección según protocolo. (Cuidado y conservación del material)"
  },
  {
    tema: "Mobiliario y utensilios",
    enunciado: "Las sillas de ruedas que no se usan deben guardarse:",
    opciones: ["En la escalera", "Plegadas o recogidas en el lugar destinado, sin obstaculizar pasillos ni salidas", "En las habitaciones de los pacientes", "En los pasillos de evacuación"],
    correcta: "B",
    explicacion: "Nunca deben obstaculizar las vías de evacuación. (Cuidado y conservación del material)"
  },
  {
    tema: "Mobiliario y utensilios",
    enunciado: "El celador que observa que un paciente está deteriorando el mobiliario de la habitación debe:",
    opciones: ["Retirarle todo el mobiliario", "Indicarle con educación el uso correcto y, si persiste, comunicarlo al superior", "Ignorarlo", "Llamar a la policía"],
    correcta: "B",
    explicacion: "Cuidar de que los enfermos no hagan uso indebido de los enseres e instruirles en su manejo. (EPNS, art. 14.2)"
  },
  {
    tema: "Mobiliario y utensilios",
    enunciado: "El colchón viscoelástico sirve para:",
    opciones: ["Repartir la presión adaptándose al cuerpo y prevenir úlceras", "Inmovilizar fracturas", "Transportar al paciente", "Hacer radiografías"],
    correcta: "A",
    explicacion: "Se adapta a la forma del cuerpo y reparte el peso. (Material de prevención de úlceras)"
  },
  {
    tema: "Mobiliario y utensilios",
    enunciado: "Las taloneras y coderas de material blando se usan para:",
    opciones: ["Proteger talones y codos de úlceras por presión", "Sujetar al paciente", "Calentar las extremidades", "Inmovilizar fracturas"],
    correcta: "A",
    explicacion: "Protegen las prominencias óseas. (Material de prevención de úlceras)"
  },
  {
    tema: "Mobiliario y utensilios",
    enunciado: "La mesa auxiliar regulable que se coloca sobre la cama para que el paciente coma se denomina:",
    opciones: ["Mesa de Mayo", "Mesa de quirófano", "Mesilla de noche", "Mesa de cama (mesa puente)"],
    correcta: "D",
    explicacion: "Mesa de altura regulable que pasa por encima de la cama. (Mobiliario hospitalario)"
  },
  {
    tema: "Mobiliario y utensilios",
    enunciado: "La bomba de infusión sirve para:",
    opciones: ["Inflar colchones", "Aspirar secreciones", "Medir la tensión", "Administrar fluidos o medicación intravenosa a un ritmo controlado"],
    correcta: "D",
    explicacion: "Controla con precisión la velocidad de infusión. El celador no la manipula. (Material sanitario)"
  },
  {
    tema: "Mobiliario y utensilios",
    enunciado: "Si durante el traslado de un paciente con bomba de infusión suena una alarma, el celador debe:",
    opciones: ["Avisar al personal de enfermería, sin manipular la bomba", "Apagar la bomba", "Desconectar el suero", "Cambiar el ritmo de infusión"],
    correcta: "A",
    explicacion: "El manejo de la bomba es competencia de enfermería. (Funciones del celador)"
  },
  {
    tema: "Mobiliario y utensilios",
    enunciado: "El desfibrilador externo automático (DEA):",
    opciones: ["Analiza el ritmo cardiaco y, si procede, indica la descarga, guiando al usuario con mensajes de voz", "Sirve para medir la tensión arterial", "Se usa para ventilar al paciente", "Solo puede usarlo un médico"],
    correcta: "A",
    explicacion: "Está pensado para que pueda usarlo personal no sanitario formado. (Material de reanimación)"
  },
  {
    tema: "Mobiliario y utensilios",
    enunciado: "El carro de lencería sirve para:",
    opciones: ["Transportar la ropa limpia de cama y pacientes", "Transportar comida", "Transportar cadáveres", "Transportar residuos"],
    correcta: "A",
    explicacion: "La ropa limpia y la sucia deben ir siempre en carros o bolsas separados. (Material hospitalario)"
  },
  {
    tema: "Mobiliario y utensilios",
    enunciado: "La ropa sucia de los pacientes debe transportarse:",
    opciones: ["En bolsas cerradas y separada de la ropa limpia", "En los brazos para ir más rápido", "En el mismo carro que la limpia", "Arrastrándola en una sábana"],
    correcta: "A",
    explicacion: "Separación limpio/sucio para evitar contaminación cruzada. (Prevención de infecciones)"
  },
  {
    tema: "Mobiliario y utensilios",
    enunciado: "La ropa de un paciente con infección debe introducirse en:",
    opciones: ["Cualquier bolsa de basura", "El carro de ropa limpia", "La papelera de la habitación", "Bolsas específicas identificadas según el protocolo del centro"],
    correcta: "D",
    explicacion: "Se usan bolsas identificadas para ropa contaminada. (Prevención de infecciones)"
  },
  {
    tema: "Mobiliario y utensilios",
    enunciado: "Las sábanas sucias deben manipularse:",
    opciones: ["Pegadas al uniforme", "Sin sacudirlas, plegándolas hacia dentro", "Dejándolas en el suelo", "Sacudiéndolas para quitar restos"],
    correcta: "B",
    explicacion: "Sacudirlas dispersa microorganismos. (Prevención de infecciones)"
  },
  {
    tema: "Mobiliario y utensilios",
    enunciado: "La silla de ruedas eléctrica:",
    opciones: ["No tiene frenos", "Se maneja con un mando o joystick y la usan personas que no pueden autopropulsarse", "Solo se usa en exteriores", "Solo se usa en quirófano"],
    correcta: "B",
    explicacion: "Motorizada, manejada con mando. (Silla de ruedas)"
  },
  {
    tema: "Mobiliario y utensilios",
    enunciado: "El andador sirve para:",
    opciones: ["Ayudar a caminar a personas con problemas de equilibrio o fuerza", "Transportar material", "Inmovilizar fracturas", "Hacer ejercicio de brazos"],
    correcta: "A",
    explicacion: "Ayuda técnica para la marcha. (Ayudas técnicas)"
  },
  {
    tema: "Mobiliario y utensilios",
    enunciado: "El cinturón de sujeción (contención mecánica) de una cama:",
    opciones: ["Se pone a todos los pacientes de noche", "Lo puede colocar el celador cuando lo considere", "Solo se coloca por indicación médica y siguiendo el protocolo de contención", "Lo deciden los familiares"],
    correcta: "C",
    explicacion: "Es una medida terapéutica excepcional que requiere indicación médica. (Protocolo de contención)"
  },
  {
    tema: "Mobiliario y utensilios",
    origen: "Examen 2024 · Específico E4",
    enunciado: "Un reposapiés es:",
    opciones: ["Un taburete pequeño para apoyar los pies cuando se está sentado.", "Una silla traumatológica para mantener la alineación del cuerpo.", "Un sillón traumatológico para pacientes intervenidos de prótesis total de cadera.", "Ninguna es correcta."],
    correcta: "A",
    explicacion: "Un reposapiés es un taburete pequeño para apoyar los pies estando sentado."
  },
  {
    tema: "Mobiliario y utensilios",
    origen: "Examen 2024 · Específico E27",
    enunciado: "¿Qué es un optotipo?",
    opciones: ["Aparato usado en oftalmología para medir la agudeza visual.", "Fuente de luz utilizada por el cirujano o el otorrinolaringólogo para realizar exploraciones.", "Permiten amplificar los impulsos eléctricos que se derivan del cerebro para su estudio.", "Ninguna es correcta."],
    correcta: "A",
    explicacion: "El optotipo es el panel de letras o símbolos con el que se mide la agudeza visual."
  },
  {
    tema: "Mobiliario y utensilios",
    origen: "Examen 2024 · Específico E40",
    enunciado: "¿Qué es un estetoscopio de Pinard?",
    opciones: ["Un amplificador de sonidos.", "Es un estetoscopio biauricular.", "Se usa para la auscultación cardíaca fetal.", "Todas son correctas."],
    correcta: "D",
    explicacion: "La respuesta oficial se corrigió a la D: todas son correctas. El de Pinard se usa sobre todo para auscultar el corazón fetal."
  },
  {
    tema: "Mobiliario y utensilios",
    origen: "Examen 2024 · Específico E92",
    enunciado: "En la planta de hospitalización, al colaborar en el aseo de un paciente, el personal de enfermería pide cambiarle el colchón con el fin de prevenir las úlceras por decúbito. ¿Qué tipo de colchón deberíamos buscar?",
    opciones: ["Colchón de muelles.", "Colchón alternating.", "Colchón de espuma.", "Colchón bariátrico."],
    correcta: "B",
    explicacion: "El colchón alternating (de presión alterna) va cambiando los puntos de apoyo y previene las úlceras."
  },
  {
    tema: "Mobiliario y utensilios",
    origen: "Examen 2024 · Específico E93",
    enunciado: "En la planta en la que trabaja solicitan una cama especial para un paciente con obesidad mórbida. Usted llevará a la unidad una:",
    opciones: ["Cama bariátrica.", "Cama de Judet.", "Cama electrocircular.", "Cama de Sanders."],
    correcta: "A",
    explicacion: "La cama bariátrica está pensada para pacientes con obesidad mórbida."
  },
  {
    tema: "Mobiliario y utensilios",
    origen: "Examen 2024 · Específico E97",
    enunciado: "Le ordenan ir al almacén de camas del hospital a buscar una cama con somier metálico formado por dos o tres segmentos móviles y adaptables a las necesidades del paciente. ¿Qué cama estamos buscando?",
    opciones: ["Cama articulada.", "Cama ortopédica.", "Cama de Klondike.", "Cama Clinitron."],
    correcta: "A",
    explicacion: "La cama articulada tiene el somier dividido en dos o tres segmentos móviles."
  },
  {
    tema: "Mobiliario y utensilios",
    origen: "Examen 2024 · Específico E109 (reserva)",
    enunciado: "Durante su jornada laboral en una planta de hospitalización, oye al personal de enfermería pedir una 'sentinela' al personal técnico en cuidados auxiliares de enfermería. ¿A qué se refieren?",
    opciones: ["A una luz piloto que se encuentra en la parte baja de la pared y que permite circular sin tropezar.", "A un timbre conectado a un enchufe de la pared que permite pedir ayuda y servicios al personal de turno.", "A una almohada utilizada para prevenir lesiones y caídas.", "Ninguna es correcta."],
    correcta: "C",
    explicacion: "La sentinela es una almohada que se usa para prevenir lesiones y caídas."
  },
  {
    tema: "Mobiliario y utensilios",
    origen: "Examen SAS 2025 · P18",
    enunciado: "La cama articulada eléctrica, que permite la incorporación del paciente de decúbito supino a posición de sentado (y son muy utilizadas en UCI), ¿cómo se denomina?",
    opciones: ["Cama roto-rest.", "Cama de Gatch.", "Cama rígida.", "Cama de exploración ginecológica."],
    correcta: "B",
    explicacion: "La cama de Gatch es articulada (en 3 planos) y permite incorporar al paciente hasta sentarlo."
  },
  {
    tema: "Mobiliario y utensilios",
    origen: "Examen SAS 2025 aplazado · P28",
    enunciado: "¿Qué dispositivo se usa generalmente, en las camas hospitalarias, para que el paciente pueda ayudarse a cambiar de posición?",
    opciones: ["Aspirador.", "Desfibrilador.", "Triángulo de suspensión o trapecio.", "Nebulizador."],
    correcta: "C",
    explicacion: "El triángulo de suspensión (trapecio) cuelga sobre la cama para que el paciente se agarre y se mueva."
  },
  {
    tema: "Mobiliario y utensilios",
    origen: "Examen SAS 2025 aplazado · P35",
    enunciado: "La cama de levitación:",
    opciones: ["Está indicada para pacientes con fracturas.", "Mantiene al paciente en giro continuo.", "Utiliza un flujo de aire que permite que el paciente permanezca en suspensión.", "Ninguna de las anteriores respuestas es correcta."],
    correcta: "C",
    explicacion: "La cama de levitación mantiene al paciente suspendido sobre un flujo de aire. Se usa en grandes quemados."
  },
  // ===================================================================
  //  MOVILIZACIÓN Y TRASLADO DE PACIENTES (132 preguntas)
  // ===================================================================
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "En la posición de decúbito supino el paciente está:",
    opciones: ["Tumbado boca arriba", "Tumbado boca abajo", "Sentado", "Tumbado de lado"],
    correcta: "A",
    explicacion: "Supino = dorsal = boca arriba. (Posiciones del paciente)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "El decúbito prono es la posición en la que el paciente está:",
    opciones: ["Tumbado boca arriba", "Sentado con las piernas colgando", "Tumbado boca abajo, con la cabeza girada hacia un lado", "De rodillas"],
    correcta: "C",
    explicacion: "Prono = ventral = boca abajo. (Posiciones del paciente)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "Otro nombre del decúbito supino es:",
    opciones: ["Decúbito dorsal", "Posición de Sims", "Decúbito ventral", "Posición de Roser"],
    correcta: "A",
    explicacion: "Dorsal porque apoya la espalda. (Posiciones del paciente)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "Otro nombre del decúbito prono es:",
    opciones: ["Posición de Fowler", "Decúbito ventral", "Decúbito dorsal", "Posición genupectoral"],
    correcta: "B",
    explicacion: "Ventral porque apoya el vientre. (Posiciones del paciente)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "En el decúbito lateral, para dar estabilidad al paciente:",
    opciones: ["Se eleva la cabecera 90°", "Se cruzan los brazos sobre el pecho", "Se estiran las dos piernas", "Se flexiona la pierna que queda arriba"],
    correcta: "D",
    explicacion: "La pierna superior flexionada da estabilidad y alivia la presión. (Posiciones del paciente)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "La posición de Sims o semiprona es:",
    opciones: ["Semisentado con la cabecera a 45°", "Boca arriba con la cabeza más baja que los pies", "Intermedia entre el decúbito lateral y el prono, con el brazo inferior hacia atrás y la pierna superior flexionada", "De rodillas con el pecho apoyado"],
    correcta: "C",
    explicacion: "Pregunta de examen Sergas 2019: «decúbito lateral y el brazo inferior se coloca hacia atrás» es la de Sims. (Posiciones del paciente)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "La posición de Sims se utiliza especialmente para:",
    opciones: ["Administrar enemas y realizar exploraciones rectales, y en pacientes inconscientes", "Intubar al paciente", "Pacientes con disnea grave", "Pacientes en shock"],
    correcta: "A",
    explicacion: "Facilita el acceso al recto y el drenaje de secreciones en inconscientes. (Posiciones del paciente)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "En la posición de Fowler el paciente está:",
    opciones: ["Con la cabeza más baja que los pies", "Tumbado boca abajo", "Semisentado, con la cabecera elevada unos 45° y las rodillas ligeramente flexionadas", "De lado con el brazo atrás"],
    correcta: "C",
    explicacion: "Pregunta de examen Sergas 2019: semisentado con rodillas flexionadas y respaldo a 45°. (Posiciones del paciente)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "La posición de semi-Fowler supone elevar la cabecera aproximadamente:",
    opciones: ["30°", "45°", "60°", "90°"],
    correcta: "A",
    explicacion: "Semi-Fowler unos 30°; Fowler unos 45°; Fowler alta unos 90°. (Posiciones del paciente)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "La posición de Fowler alta o de sentado supone elevar la cabecera aproximadamente:",
    opciones: ["30°", "45°", "60°", "90°"],
    correcta: "D",
    explicacion: "En Fowler alta el paciente queda prácticamente sentado (unos 90°). (Posiciones del paciente)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "La posición de Fowler está indicada, entre otros, en pacientes con:",
    opciones: ["Shock hipovolémico", "Problemas respiratorios o cardiacos y para comer en la cama", "Lesión medular aguda", "Hipotensión grave"],
    correcta: "B",
    explicacion: "Facilita la respiración, la alimentación y el descanso. (Posiciones del paciente)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "En la posición de Trendelenburg:",
    opciones: ["El paciente está en decúbito supino con la cabeza más baja que los pies", "El paciente está boca abajo", "El paciente está semisentado", "La cabeza está más alta que los pies"],
    correcta: "A",
    explicacion: "Plano inclinado con la cabeza abajo. (Posiciones del paciente)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "La posición de Trendelenburg está indicada en:",
    opciones: ["Traumatismo craneoencefálico", "Lipotimias, shock y cirugía de la pelvis", "Disnea", "Hernia de hiato"],
    correcta: "B",
    explicacion: "Favorece el riego cerebral. Está contraindicada si hay hipertensión intracraneal o dificultad respiratoria. (Posiciones del paciente)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "La posición de anti-Trendelenburg (o de Morestin) consiste en:",
    opciones: ["Boca arriba con la cabeza colgando", "Sentado con el tronco hacia delante", "Decúbito supino con la cabeza más alta que los pies, con la cama inclinada en un solo plano", "Decúbito prono con los pies elevados"],
    correcta: "C",
    explicacion: "Plano inclinado contrario al Trendelenburg. (Posiciones del paciente)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "La posición de anti-Trendelenburg se indica en pacientes con:",
    opciones: ["Hernia de hiato o reflujo gastroesofágico", "Hemorragia en las piernas", "Shock", "Lipotimia"],
    correcta: "A",
    explicacion: "Evita el reflujo y favorece la respiración. (Posiciones del paciente)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "La posición genupectoral o mahometana consiste en:",
    opciones: ["Paciente de rodillas, con el pecho y la cara apoyados sobre la cama", "De pie inclinado hacia delante", "Sentado con las piernas cruzadas", "Boca arriba con las piernas flexionadas"],
    correcta: "A",
    explicacion: "Se usa en exploraciones rectales y vaginales. (Posiciones del paciente)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "La posición ginecológica o de litotomía consiste en:",
    opciones: ["Decúbito prono con las piernas separadas", "De lado con las piernas flexionadas", "Decúbito supino con las piernas flexionadas y separadas, apoyadas en estribos o perneras", "Sentado con las piernas cruzadas"],
    correcta: "C",
    explicacion: "Para exploraciones ginecológicas, partos y cirugía perineal o urológica. (Posiciones del paciente)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "En la posición de Roser (o Proetz):",
    opciones: ["El paciente está en decúbito supino con la cabeza colgando fuera del borde de la cama, en hiperextensión", "El paciente está de rodillas", "El paciente está sentado inclinado hacia delante", "La cabeza está más alta que los pies"],
    correcta: "A",
    explicacion: "Se usa para intubación, exploración de faringe y lavado de cabeza. (Posiciones del paciente)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "La posición ortopneica consiste en:",
    opciones: ["Paciente sentado, con el tronco inclinado hacia delante apoyado sobre una almohada en la mesa de cama", "Tumbado boca arriba sin almohada", "De rodillas", "De lado con las piernas estiradas"],
    correcta: "A",
    explicacion: "Facilita la respiración en pacientes con disnea grave. (Posiciones del paciente)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "La posición de Kraske o en navaja es:",
    opciones: ["Decúbito supino con la cabeza colgando", "Sentado con el tronco recto", "Decúbito prono con las caderas elevadas y la cabeza y los pies más bajos", "Decúbito lateral con el brazo atrás"],
    correcta: "C",
    explicacion: "Posición quirúrgica para cirugía rectal y anal (hemorroides, fístulas). (Posiciones quirúrgicas)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "La posición lateral de seguridad (PLS) se utiliza en:",
    opciones: ["Pacientes en parada cardiorrespiratoria", "Pacientes con lesión de columna confirmada", "Pacientes inconscientes que respiran, para evitar que se ahoguen con vómitos o con la lengua", "Pacientes que van a comer"],
    correcta: "C",
    explicacion: "Mantiene la vía aérea abierta y permite drenar secreciones. En parada se hace RCP en supino. (Primeros auxilios)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "Para hacer la reanimación cardiopulmonar, el paciente debe estar:",
    opciones: ["En posición lateral de seguridad", "En Trendelenburg", "En decúbito supino sobre una superficie dura", "En Fowler"],
    correcta: "C",
    explicacion: "Boca arriba sobre un plano duro para que las compresiones sean eficaces. (Primeros auxilios)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "Un principio básico de la mecánica corporal al levantar un peso es:",
    opciones: ["Separar la carga del cuerpo", "Flexionar las rodillas y mantener la espalda recta", "Doblar la espalda y mantener las piernas rectas", "Girar el tronco mientras se levanta"],
    correcta: "B",
    explicacion: "La fuerza la hacen las piernas, no la espalda. (Mecánica corporal)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "Para tener una base de sustentación amplia y estable, el celador debe:",
    opciones: ["Ponerse de puntillas", "Juntar los pies", "Separar los pies, uno ligeramente adelantado respecto al otro", "Apoyarse en un solo pie"],
    correcta: "C",
    explicacion: "Pies separados aumentan la estabilidad. (Mecánica corporal)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "Durante una movilización, la carga (o el paciente) debe mantenerse:",
    opciones: ["Lo más cerca posible del cuerpo del celador", "Alejada para no golpearse", "Con los brazos extendidos", "A la altura de la cabeza"],
    correcta: "A",
    explicacion: "Cuanto más lejos la carga, mayor esfuerzo en la columna. (Mecánica corporal)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "Para cambiar de dirección cuando se transporta una carga, hay que:",
    opciones: ["Lanzar la carga", "Torcer el tronco manteniendo los pies fijos", "Girar solo la cabeza", "Girar todo el cuerpo moviendo los pies, sin torcer el tronco"],
    correcta: "D",
    explicacion: "Los giros de tronco con carga son una causa frecuente de lesiones lumbares. (Mecánica corporal)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "Es preferible, para mover a un paciente o una carga:",
    opciones: ["Tirar antes que empujar", "Hacerlo siempre solo para ir más rápido", "Levantar antes que deslizar", "Empujar o deslizar antes que levantar o tirar"],
    correcta: "D",
    explicacion: "Deslizar y empujar exige menos esfuerzo que levantar o tirar. (Mecánica corporal)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "Según la Guía técnica del INSST sobre manipulación manual de cargas, se considera que puede haber riesgo dorsolumbar a partir de cargas de:",
    opciones: ["3 kg", "5 kg", "10 kg", "25 kg"],
    correcta: "A",
    explicacion: "Cargas de más de 3 kg pueden entrañar riesgo dorsolumbar en condiciones desfavorables. (RD 487/1997; Guía técnica INSST)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "En condiciones ideales, el peso máximo recomendado para manipular una carga, con carácter general, es de:",
    opciones: ["15 kg", "25 kg", "40 kg", "50 kg"],
    correcta: "B",
    explicacion: "25 kg en general; 15 kg para proteger a la mayoría de la población (mujeres, jóvenes, mayores); 40 kg solo para trabajadores entrenados y de forma esporádica. (Guía técnica INSST (RD 487/1997))"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "En postura sentada, no deberían manipularse cargas de más de:",
    opciones: ["3 kg", "4 kg", "5 kg", "6 kg"],
    correcta: "C",
    explicacion: "Pregunta del examen Sergas 2019: en postura sentada, máximo 5 kg. (Guía técnica INSST (RD 487/1997))"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "Si el celador tiene que movilizar a un paciente que pesa mucho y no colabora, debe:",
    opciones: ["Esperar al día siguiente", "Pedir al paciente que se esfuerce más", "Hacerlo solo con rapidez", "Pedir ayuda o usar ayudas técnicas como la grúa"],
    correcta: "D",
    explicacion: "Nunca forzar: más personal o ayudas técnicas. (Mecánica corporal)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "Antes de cualquier movilización, el celador debe:",
    opciones: ["Pedir permiso a la familia", "Explicar al paciente lo que va a hacer y pedir su colaboración si puede", "Hacerlo por sorpresa para que no se resista", "Esperar a que el paciente esté dormido"],
    correcta: "B",
    explicacion: "Informar al paciente reduce su ansiedad y facilita su colaboración. (Movilización del paciente)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "Al movilizar a un paciente en la cama, la altura de la cama debe estar:",
    opciones: ["En la posición más baja", "En la posición más alta", "Da igual", "A una altura cómoda para el celador, aproximadamente a la altura de la cadera"],
    correcta: "D",
    explicacion: "Evita flexionar la espalda en exceso. (Mecánica corporal)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "Para subir hacia la cabecera a un paciente que colabora, se le pide que:",
    opciones: ["Estire las piernas y se deje caer", "Se agarre a las barandillas y tire", "Se ponga de lado", "Flexione las rodillas, apoye los pies en la cama y empuje mientras el celador le ayuda"],
    correcta: "D",
    explicacion: "El paciente empuja con los pies; puede ayudarse del trapecio si lo hay. (Movilización del paciente)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "Al subir a un paciente hacia la cabecera de la cama, la almohada:",
    opciones: ["Se coloca bajo las rodillas", "Se tira al suelo", "Se retira y se coloca contra el cabecero para proteger la cabeza", "Se deja debajo de la cabeza"],
    correcta: "C",
    explicacion: "Protege la cabeza de golpes contra el cabecero. (Movilización del paciente)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "Para subir a la cabecera a un paciente que no colabora entre dos celadores, se suele utilizar:",
    opciones: ["Las piernas del paciente para tirar", "El colchón entero", "Los brazos del paciente como agarre", "La entremetida (sábana travesera) para deslizarlo"],
    correcta: "D",
    explicacion: "La entremetida permite deslizar al paciente sin fricción en la piel. (Movilización del paciente)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "Al pasar a un paciente de decúbito supino a decúbito lateral, el celador:",
    opciones: ["Tira de su brazo", "Lo levanta en peso", "Cruza el brazo del paciente sobre el pecho y la pierna más alejada sobre la otra, y lo gira hacia sí", "Lo empuja desde su mismo lado para alejarlo"],
    correcta: "C",
    explicacion: "Se gira al paciente hacia el celador, con la barandilla del otro lado subida. (Movilización del paciente)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "Antes de girar al paciente a decúbito lateral, conviene:",
    opciones: ["Sentarlo", "Quitar todas las sábanas", "Ponerlo en el borde del lado hacia el que se va a girar", "Desplazarlo primero hacia el lado contrario de la cama, para que al girar quede centrado"],
    correcta: "D",
    explicacion: "Así queda en el centro de la cama tras el giro. (Movilización del paciente)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "Para sentar a un paciente en el borde de la cama, el celador:",
    opciones: ["Le sienta de golpe sin girarlo", "Le levanta tirando de los brazos", "Le ayuda a ponerse de lado, pasa sus piernas fuera de la cama y eleva el tronco a la vez", "Le empuja por los pies"],
    correcta: "C",
    explicacion: "Movimiento coordinado de piernas y tronco, girando sobre la cadera. (Movilización del paciente)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "Al sentar a un paciente que lleva tiempo encamado, hay que hacerlo poco a poco para evitar:",
    opciones: ["Una úlcera por presión", "Un mareo por hipotensión ortostática", "Una infección", "Una fractura"],
    correcta: "B",
    explicacion: "Al incorporarse, la tensión puede bajar bruscamente; se deja unos minutos sentado antes de levantarle. (Movilización del paciente)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "Para pasar a un paciente de la cama a la camilla, la camilla se coloca:",
    opciones: ["Más alta que la cama", "Perpendicular a la cama", "Paralela y pegada a la cama, a la misma altura y con ambas frenadas", "A los pies de la cama"],
    correcta: "C",
    explicacion: "Paralela, a la misma altura y frenada. (Transferencias)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "Cuando tres personas pasan a un paciente de la cama a la camilla, se reparten:",
    opciones: ["Dos en la cabeza y una en los pies", "Una en la cabeza y hombros, otra en la cadera y otra en las piernas", "Las tres en las piernas", "Solo una tira de la sábana"],
    correcta: "B",
    explicacion: "Reparto del peso: tronco superior, cadera (la zona más pesada) y piernas. (Transferencias)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "En una transferencia entre varias personas, ¿quién debe dar la orden para moverse a la vez?",
    opciones: ["Cada uno cuando esté listo", "El familiar presente", "El paciente", "Una sola persona, normalmente la que sujeta la cabeza"],
    correcta: "D",
    explicacion: "La coordinación evita movimientos bruscos; la orden la da quien controla la cabeza. (Transferencias)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "Para pasar a un paciente de la cama a la silla de ruedas, la silla se sitúa:",
    opciones: ["Detrás del celador", "Sin frenar para poder ajustarla", "Frente a la cama a un metro", "Junto a la cama, paralela o formando un ángulo de unos 45°, frenada y sin reposapiés"],
    correcta: "D",
    explicacion: "Cerca, frenada y con los reposapiés retirados. (Transferencias)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "En un paciente hemipléjico, la silla de ruedas se coloca para la transferencia:",
    opciones: ["En el lado sano del paciente", "A los pies de la cama", "En el lado afectado", "Da igual"],
    correcta: "A",
    explicacion: "El paciente pivota y se apoya sobre su pierna sana. (Transferencias)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "Al ayudar a caminar a un paciente con debilidad en un lado del cuerpo, el celador se coloca:",
    opciones: ["Detrás sin tocarle", "En el lado sano", "Delante del paciente", "En el lado afectado (débil)"],
    correcta: "D",
    explicacion: "Así puede sujetarle si cede el lado débil. (Deambulación) ⚠️ Ojo: en el examen del Sergas de 2024 (E76) el tribunal dio por buena la contraria: ponerse en el lado sano (en una hemiplejía derecha, el izquierdo). Las fuentes no se ponen de acuerdo; si vuelve a salir, la respuesta oficial es el lado sano."
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "Si un paciente que camina con ayuda empieza a caerse, el celador debe:",
    opciones: ["Soltarlo y apartarse", "Tirar de su brazo", "Sujetarlo en peso a toda costa", "Acompañarle en la caída deslizándolo suavemente hacia el suelo, protegiendo su cabeza"],
    correcta: "D",
    explicacion: "Intentar frenar en seco una caída suele lesionar al paciente y al celador. (Deambulación)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "El traslado de un paciente en camilla por un pasillo se hace habitualmente:",
    opciones: ["Con el celador a los pies tirando", "De lado", "Con los pies del paciente por delante y el celador en la cabecera", "Con la cabeza del paciente por delante"],
    correcta: "C",
    explicacion: "Pies en el sentido de la marcha; el celador, en la cabecera, vigila la cara del paciente. (Traslado en camilla)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "En las rampas, la camilla debe ir de forma que la cabeza del paciente quede:",
    opciones: ["Indistintamente", "Fuera de la camilla", "Siempre en la parte más baja", "Siempre en la parte más alta"],
    correcta: "D",
    explicacion: "Se sube con la cabeza por delante y se baja con los pies por delante. (Traslado en camilla)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "Al bajar una rampa con un paciente en silla de ruedas, se hace:",
    opciones: ["Con la silla inclinada hacia delante", "Con el paciente de pie", "De espaldas (marcha atrás), con el celador por delante controlando la silla", "De frente, dejando que la silla ruede"],
    correcta: "C",
    explicacion: "Marcha atrás evita que el paciente se caiga hacia delante. (Traslado en silla de ruedas)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "Al subir una rampa con un paciente en silla de ruedas, se hace:",
    opciones: ["De frente, empujando la silla con el celador detrás", "Sin el paciente", "De espaldas", "Con el paciente de pie"],
    correcta: "A",
    explicacion: "Se sube empujando de frente. (Traslado en silla de ruedas)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "Al entrar en el ascensor con un paciente en silla de ruedas, ¿quién entra primero?",
    opciones: ["Es indiferente", "El paciente, de frente", "El celador, de espaldas, tirando de la silla", "Solo si el ascensor está vacío entra primero el paciente"],
    correcta: "C",
    explicacion: "Pregunta del examen Sergas 2019: entra primero el celador. Así el paciente queda mirando a la puerta. (Traslado en silla de ruedas)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "Para subir un bordillo con una silla de ruedas, el celador:",
    opciones: ["Inclina la silla hacia atrás para levantar las ruedas delanteras, las apoya y después sube las traseras", "Levanta la silla en peso", "Pide al paciente que se levante", "Sube primero las ruedas traseras"],
    correcta: "A",
    explicacion: "Se usa el apoyo de los pies en la barra trasera para inclinar la silla. (Traslado en silla de ruedas)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "Para bajar un bordillo con una silla de ruedas, se hace:",
    opciones: ["Levantando la silla en peso", "Con el paciente de pie", "Marcha atrás, bajando primero las ruedas traseras", "De frente, dejando caer las ruedas delanteras"],
    correcta: "C",
    explicacion: "Marcha atrás para que el paciente no salga despedido hacia delante. (Traslado en silla de ruedas)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "Al entrar en el ascensor con una camilla, entra primero:",
    opciones: ["El acompañante", "Los pies del paciente", "La cabecera de la camilla (la cabeza del paciente)", "Es indiferente"],
    correcta: "C",
    explicacion: "Habitualmente entra primero la cabecera, de modo que al salir el paciente salga con los pies por delante. (Traslado en camilla)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "Durante el traslado de un paciente con sonda vesical, la bolsa de orina debe ir:",
    opciones: ["Pinzada y en el regazo", "Encima del paciente", "Por encima de la cabeza", "Siempre por debajo del nivel de la vejiga"],
    correcta: "D",
    explicacion: "Evita el reflujo de orina hacia la vejiga y las infecciones. (Traslado con dispositivos)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "Durante el traslado de un paciente con suero, el gotero debe ir:",
    opciones: ["Por debajo del paciente", "Por encima del nivel del punto de inserción", "Desconectado", "En el suelo de la camilla"],
    correcta: "B",
    explicacion: "Si baja, la sangre puede refluir y el suero deja de pasar. (Traslado con dispositivos)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "El frasco de un drenaje torácico durante el traslado debe:",
    opciones: ["Elevarse por encima de la cabeza", "Tumbarse en la camilla", "Mantenerse siempre por debajo del tórax del paciente y en posición vertical", "Colocarse sobre el pecho del paciente"],
    correcta: "C",
    explicacion: "Si se eleva, el líquido o el aire pueden volver al tórax. (Traslado con dispositivos)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "Si durante el traslado se sale accidentalmente una vía o un drenaje, el celador debe:",
    opciones: ["Continuar el traslado sin decir nada", "Esconderlo", "Avisar inmediatamente al personal de enfermería", "Volver a colocarlo él mismo"],
    correcta: "C",
    explicacion: "El celador no manipula vías ni drenajes; avisa de inmediato. (Traslado con dispositivos)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "El paciente con sospecha de lesión de columna debe movilizarse:",
    opciones: ["Sentándolo primero", "Levantándolo por los brazos", "Girándole la cabeza para ver si siente dolor", "En bloque, manteniendo alineados cabeza, cuello y tronco"],
    correcta: "D",
    explicacion: "Movilización en bloque coordinada por quien sujeta la cabeza. (Movilización del paciente traumatizado)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "En la movilización en bloque de un paciente con lesión medular, la persona que sujeta la cabeza:",
    opciones: ["Se limita a observar", "Gira la cabeza hacia un lado", "Suelta la cabeza durante el giro", "Mantiene el eje cabeza-cuello-tronco y da las órdenes"],
    correcta: "D",
    explicacion: "Quien controla la cabeza dirige la maniobra. (Movilización del paciente traumatizado)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "En un paciente operado de prótesis de cadera, hay que evitar:",
    opciones: ["Juntar o cruzar las piernas (aducción) y la rotación interna de la cadera", "Separar las piernas", "Colocar una almohada entre las piernas", "Elevar ligeramente la cabecera"],
    correcta: "A",
    explicacion: "Riesgo de luxación de la prótesis. Se coloca una almohada entre las piernas para mantenerlas separadas. (Movilización en traumatología)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "En un paciente con prótesis de cadera, al girarle de lado se coloca:",
    opciones: ["Una almohada entre las piernas", "La pierna operada por debajo sin protección", "Las piernas cruzadas", "Un peso en el pie"],
    correcta: "A",
    explicacion: "Mantiene la abducción y evita la luxación. (Movilización en traumatología)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "Un paciente con tracción esquelética en la pierna:",
    opciones: ["Debe tener las pesas sobre la pierna", "No debe tener las pesas apoyadas en el suelo ni en la cama; deben colgar libremente", "Puede quitarse las pesas para hacer la cama", "Puede tener las pesas en el suelo durante el traslado"],
    correcta: "B",
    explicacion: "La tracción solo funciona si las pesas cuelgan libres; no se retiran sin indicación. (Movilización en traumatología)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "Los cambios posturales en un paciente encamado con riesgo de úlceras se realizan, con carácter general:",
    opciones: ["Cada 2-3 horas", "Solo cuando el paciente lo pida", "Una vez al día", "Cada 12 horas"],
    correcta: "A",
    explicacion: "Rotación programada cada 2-3 horas, adaptándola al riesgo de cada paciente. (Prevención de úlceras por presión)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "En decúbito supino, las zonas con más riesgo de úlceras por presión son:",
    opciones: ["Trocánter y orejas", "Rodillas y mejillas", "Sacro, talones, codos, escápulas y occipital", "Mamas y genitales"],
    correcta: "C",
    explicacion: "Las zonas de apoyo de la espalda. (Prevención de úlceras por presión)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "En decúbito lateral, las zonas con más riesgo de úlceras por presión son:",
    opciones: ["Mejillas y mamas", "Trocánter, maléolos, hombro y oreja", "Rodillas y dedos de los pies", "Sacro y occipital"],
    correcta: "B",
    explicacion: "Las prominencias óseas del costado. (Prevención de úlceras por presión)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "En decúbito prono, las zonas con más riesgo de úlceras por presión son:",
    opciones: ["Trocánter", "Occipital y escápulas", "Sacro y talones", "Rodillas, dedos de los pies, mamas, genitales, mejillas y orejas"],
    correcta: "D",
    explicacion: "Las zonas de apoyo anteriores. (Prevención de úlceras por presión)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "Las úlceras por presión se producen principalmente por:",
    opciones: ["La presión mantenida sobre la piel entre una prominencia ósea y una superficie", "Una mala alimentación únicamente", "Los rayos X", "Las infecciones de la piel"],
    correcta: "A",
    explicacion: "La presión prolongada impide el riego de los tejidos; influyen además la fricción, la humedad y la nutrición. (Prevención de úlceras por presión)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "Para evitar lesiones por fricción al movilizar a un paciente en la cama, hay que:",
    opciones: ["Moverlo sin sábana", "Tirar de sus brazos", "Levantarlo o deslizarlo con una entremetida, sin arrastrarlo sobre la sábana", "Arrastrarlo rápidamente"],
    correcta: "C",
    explicacion: "El arrastre produce fricción y cizalla que dañan la piel. (Prevención de úlceras por presión)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "La unidad de cuidados intensivos (UCI) es:",
    opciones: ["Una consulta externa", "Una unidad de acceso restringido para pacientes críticos que necesitan vigilancia y soporte continuo", "Una zona de espera de urgencias", "Una planta de hospitalización convencional"],
    correcta: "B",
    explicacion: "Pacientes graves con monitorización y soporte de funciones vitales. (Unidades de críticos)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "En las unidades de críticos, las funciones del celador incluyen:",
    opciones: ["Decidir los horarios de visita", "Retirar la monitorización cuando moleste", "Ajustar los parámetros del respirador", "Ayudar en la movilización y cambios posturales y trasladar pacientes a pruebas, bajo indicación de enfermería"],
    correcta: "D",
    explicacion: "Movilización, traslados y apoyo; nunca manipula los equipos. (Unidades de críticos)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "Al movilizar a un paciente intubado y conectado a ventilación mecánica, el celador debe:",
    opciones: ["Coordinarse con enfermería, que controla el tubo y las conexiones, y evitar tirones", "Desconectar el respirador para moverlo mejor", "Sujetar el tubo él solo", "Mover al paciente sin avisar"],
    correcta: "A",
    explicacion: "Una extubación accidental es una complicación grave. (Unidades de críticos)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "El traslado de un paciente crítico a otro servicio (por ejemplo, a radiología):",
    opciones: ["Se hace acompañado del personal sanitario y con monitorización portátil cuando es necesario", "Lo hace el celador solo", "Se hace siempre en silla de ruedas", "Se hace sin monitorización para ir más rápido"],
    correcta: "A",
    explicacion: "Paciente crítico: traslado acompañado y monitorizado. (Unidades de críticos)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "Para entrar en una UCI, el celador debe:",
    opciones: ["Entrar sin avisar", "No lavarse las manos si lleva guantes", "Entrar con la ropa de calle", "Seguir las normas de la unidad, incluida la higiene de manos y las medidas de aislamiento si las hay"],
    correcta: "D",
    explicacion: "Pacientes inmunodeprimidos y con alto riesgo de infección. (Unidades de críticos)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "La maniobra de colocar en decúbito prono a un paciente crítico ventilado:",
    opciones: ["Está prohibida", "Requiere varias personas coordinadas, con una de ellas controlando la cabeza y el tubo", "Se hace sin desconectar ni controlar ningún dispositivo", "La hace un celador solo"],
    correcta: "B",
    explicacion: "Es una maniobra de equipo; el celador aporta fuerza y coordinación. (Unidades de críticos)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "En la unidad de quemados, la movilización del paciente debe hacerse:",
    opciones: ["Con máxima asepsia y suavidad, por el riesgo de infección y dolor", "Arrastrándolo sobre la sábana", "Con rapidez y sin guantes", "Solo por familiares"],
    correcta: "A",
    explicacion: "Piel dañada: alto riesgo de infección. (Unidades de críticos)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "En una unidad de cuidados coronarios, el celador debe tener en cuenta que el paciente:",
    opciones: ["Debe mantenerse en Trendelenburg", "Debe caminar al servicio de rayos", "Puede movilizarse solo", "Debe evitar esfuerzos, por lo que se le moviliza sin que haga fuerza"],
    correcta: "D",
    explicacion: "Se evita que el paciente cardiaco haga esfuerzos. (Unidades de críticos)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "La entremetida es:",
    opciones: ["Un tipo de colchón", "Un cinturón de sujeción", "Una camilla", "Una sábana doblada que se coloca transversalmente bajo el tronco del paciente para movilizarlo y proteger la cama"],
    correcta: "D",
    explicacion: "También llamada sábana travesera. (Material de movilización)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "Para pasar a un paciente de la silla de ruedas a la cama, el celador debe:",
    opciones: ["Pedirle que salte", "Inclinar la silla hacia delante para que caiga en la cama", "Levantarlo en peso sin frenar", "Frenar la silla, retirar los reposapiés y ayudar al paciente a ponerse de pie y girar hacia la cama"],
    correcta: "D",
    explicacion: "Silla frenada, reposapiés fuera y giro controlado. (Transferencias)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "La transferencia de un paciente con la grúa requiere:",
    opciones: ["Quitar los frenos de la cama", "Que el paciente se sujete solo del arnés", "Elegir el arnés adecuado, frenar la cama o silla y no dejar nunca al paciente solo suspendido", "Mover la grúa con el paciente a gran altura"],
    correcta: "C",
    explicacion: "Se eleva lo justo y siempre con el paciente vigilado. (Ayudas técnicas)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "Ante un paciente que no colabora y pesa mucho, la ayuda técnica más adecuada para pasarlo de la cama al sillón es:",
    opciones: ["Un andador", "Un bastón", "Una muleta", "La grúa"],
    correcta: "D",
    explicacion: "La grúa evita sobreesfuerzos. (Ayudas técnicas)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "Al colocar a un paciente en decúbito supino, se puede poner una almohada pequeña bajo:",
    opciones: ["El sacro", "El cuello en hiperextensión", "Las rodillas o las pantorrillas para liberar los talones", "Los pies apoyados"],
    correcta: "C",
    explicacion: "Liberar los talones previene úlceras. (Posiciones del paciente)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "Cuando el celador movilice a un paciente, debe preservar su intimidad:",
    opciones: ["Solo si el paciente lo pide", "Cubriéndolo y cerrando puertas o cortinas", "No es necesario", "Únicamente en quirófano"],
    correcta: "B",
    explicacion: "La intimidad es un derecho del paciente en cualquier movilización. (Derechos del paciente)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "El paciente con traumatismo craneoencefálico suele colocarse con la cabecera:",
    opciones: ["En prono", "Totalmente plana con la cabeza colgando", "En Trendelenburg", "Elevada unos 30°, salvo contraindicación"],
    correcta: "D",
    explicacion: "Favorece el drenaje venoso cerebral. Nunca Trendelenburg. (Posiciones del paciente)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "La posición de Trendelenburg está contraindicada en pacientes con:",
    opciones: ["Shock", "Cirugía pélvica", "Lipotimia", "Traumatismo craneoencefálico o dificultad respiratoria"],
    correcta: "D",
    explicacion: "Aumenta la presión intracraneal y dificulta la respiración. (Posiciones del paciente)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "Para que un paciente que va a usar muletas o andador se levante de la silla, el celador debe:",
    opciones: ["Levantarle tirando de los brazos", "Levantarle sin frenar la silla", "Frenar la silla, pedirle que adelante el cuerpo y se impulse con los brazos en los reposabrazos", "Dejarle solo"],
    correcta: "C",
    explicacion: "Impulso con los brazos desde una silla frenada. (Deambulación)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "Ante una posible fractura de una extremidad, antes de mover al paciente hay que:",
    opciones: ["Comprobar si se mueve doblándola", "Masajear la zona", "Tirar de ella para alinearla", "Inmovilizar la extremidad según indique el personal sanitario"],
    correcta: "D",
    explicacion: "Inmovilizar antes de movilizar. (Movilización del paciente traumatizado)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "Al trasladar a un paciente en camilla por pasillos con puertas, el celador debe:",
    opciones: ["Empujar la puerta con la camilla", "Pasar a toda velocidad", "Abrir la puerta antes y pasar la camilla controlándola, sin usarla para empujar la puerta", "Dejar la camilla sola mientras abre"],
    correcta: "C",
    explicacion: "Se abre primero la puerta para no golpear al paciente. (Traslado en camilla)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "El celador debe trasladar a un paciente en camilla con las barandillas:",
    opciones: ["Bajadas", "Retiradas", "Solo una subida", "Subidas"],
    correcta: "D",
    explicacion: "Previenen caídas durante el traslado. (Traslado en camilla)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "Durante un traslado en camilla, el celador debe vigilar especialmente:",
    opciones: ["Los otros pasillos", "El reloj", "Su teléfono móvil", "El estado del paciente (cara, respiración, color) y los dispositivos que lleve"],
    correcta: "D",
    explicacion: "Por eso va en la cabecera, viendo la cara del paciente. (Traslado en camilla)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "Si durante un traslado el paciente se marea o empeora, el celador debe:",
    opciones: ["Volver a la planta sin avisar", "Acelerar para llegar antes", "Darle agua", "Parar, poner al paciente en posición segura y pedir ayuda sanitaria inmediatamente"],
    correcta: "D",
    explicacion: "La seguridad del paciente es lo primero. (Traslado en camilla)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "La movilización de un paciente con un catéter venoso central requiere:",
    opciones: ["Tirar del catéter para alinearlo", "No tiene ningún cuidado especial", "Retirar el catéter antes de moverlo", "Cuidado para no traccionar el catéter y mantener las conexiones"],
    correcta: "D",
    explicacion: "Un tirón puede salirlo o dañar el vaso. (Traslado con dispositivos)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "El paciente amputado de una pierna, al estar en la cama, debe evitar:",
    opciones: ["Tener barandillas", "Moverse", "Estar tumbado boca arriba", "Mantener el muñón flexionado sobre una almohada mucho tiempo"],
    correcta: "D",
    explicacion: "La flexión mantenida produce contracturas que dificultan la prótesis. (Movilización en traumatología)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "Al realizar un cambio postural, el celador debe comprobar después que:",
    opciones: ["El paciente queda en el borde de la cama", "El timbre queda lejos del paciente", "La cama queda en la posición más alta", "El paciente queda cómodo, alineado, sin arrugas en la sábana y con la barandilla subida si es necesario"],
    correcta: "D",
    explicacion: "Comodidad, alineación, ausencia de arrugas y seguridad. (Movilización del paciente)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "El timbre de llamada debe quedar, tras movilizar al paciente:",
    opciones: ["Guardado en el cajón", "En el control de enfermería", "Al alcance de su mano", "Fuera de la habitación"],
    correcta: "C",
    explicacion: "El paciente debe poder pedir ayuda. (Seguridad del paciente)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "La posición en la que se coloca a un paciente con dificultad respiratoria grave que no tolera estar tumbado es:",
    opciones: ["Roser", "Trendelenburg", "Ortopneica o Fowler alta", "Decúbito prono"],
    correcta: "C",
    explicacion: "Sentado facilita la expansión del tórax. (Posiciones del paciente)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "Para levantar un objeto del suelo, el celador debe:",
    opciones: ["Girar el tronco mientras lo levanta", "Agacharse flexionando las rodillas, acercarse al objeto y levantarse con las piernas", "Doblarse por la cintura con las piernas rectas", "Levantarlo con un solo brazo estirado"],
    correcta: "B",
    explicacion: "Las piernas trabajan; la espalda se mantiene recta. (Mecánica corporal)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "La faja lumbar, como medida preventiva para el celador:",
    opciones: ["Es obligatoria por ley en todos los centros", "No sustituye a una buena técnica de manipulación ni a las ayudas técnicas", "Sustituye a la formación en movilización", "Permite levantar cualquier peso"],
    correcta: "B",
    explicacion: "La prevención se basa en técnica correcta, ayudas técnicas y formación. (Prevención de riesgos)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "Un paciente en silla de ruedas debe llevar, durante el traslado:",
    opciones: ["Los pies arrastrando por el suelo", "La silla sin frenos en las paradas", "Los pies apoyados en los reposapiés y los brazos dentro de la silla", "Los brazos fuera para equilibrarse"],
    correcta: "C",
    explicacion: "Evita golpes en pies y manos con puertas y paredes. (Traslado en silla de ruedas)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "Al dejar a un paciente en silla de ruedas esperando en un pasillo, el celador debe:",
    opciones: ["Dejarla en una rampa", "Dejarla sin frenos", "Dejarla junto a la escalera", "Frenar la silla y no dejarla en una zona de paso o pendiente"],
    correcta: "D",
    explicacion: "Silla frenada y en lugar seguro. (Traslado en silla de ruedas)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "La incubadora de transporte se utiliza para trasladar:",
    opciones: ["Pacientes adultos aislados", "Recién nacidos, sobre todo prematuros o enfermos", "Medicamentos refrigerados", "Muestras de laboratorio"],
    correcta: "B",
    explicacion: "Mantiene la temperatura y las condiciones del neonato. (Traslado de neonatos)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "En la movilización de un paciente con un yeso reciente en la pierna, hay que:",
    opciones: ["Cogerlo con la punta de los dedos", "Apoyar el yeso en el borde de la camilla", "Sujetar el yeso con la palma de la mano, no con los dedos, para no dejar marcas", "Golpearlo para comprobar si está duro"],
    correcta: "C",
    explicacion: "Un yeso húmedo se deforma con la presión de los dedos. (Movilización en traumatología)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "En la unidad de reanimación postanestésica (URPA o despertar), el paciente:",
    opciones: ["Recibe visitas sin limitación", "Está en vigilancia tras la cirugía hasta recuperarse de la anestesia", "Ya puede caminar solo", "Está esperando para entrar a quirófano"],
    correcta: "B",
    explicacion: "Vigilancia postquirúrgica inmediata. (Unidades de críticos)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "Ante una parada cardiorrespiratoria en la planta, el celador que la detecta debe:",
    opciones: ["Esperar a que el paciente se recupere", "Moverlo a su cama", "Ir a buscar a un médico a otra planta sin avisar a nadie", "Pedir ayuda inmediatamente, avisar al personal sanitario y, si está formado, iniciar la RCP básica"],
    correcta: "D",
    explicacion: "Lo primero es pedir ayuda y activar el sistema de emergencia. (Soporte vital básico)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "En la RCP básica de un adulto, la relación entre compresiones y ventilaciones es:",
    opciones: ["15:2", "10:1", "30:2", "5:1"],
    correcta: "C",
    explicacion: "30 compresiones y 2 ventilaciones. (Recomendaciones ERC de soporte vital)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "La frecuencia de las compresiones torácicas en la RCP de un adulto debe ser de:",
    opciones: ["40 por minuto", "Más de 150 por minuto", "60 a 80 por minuto", "100 a 120 por minuto"],
    correcta: "D",
    explicacion: "Entre 100 y 120 por minuto, con una profundidad de 5 a 6 cm. (Recomendaciones ERC de soporte vital)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    enunciado: "En la RCP de un adulto, las compresiones se realizan:",
    opciones: ["En el centro del pecho (mitad inferior del esternón), con los brazos rectos", "Sobre las costillas", "Sobre el abdomen", "En el lado izquierdo del pecho"],
    correcta: "A",
    explicacion: "Centro del pecho, brazos estirados y perpendiculares. (Recomendaciones ERC de soporte vital)"
  },
  {
    tema: "Movilización y traslado de pacientes",
    origen: "Examen 2024 · Específico E23",
    enunciado: "¿Cuál es la finalidad de los cambios frecuentes de postura en los pacientes encamados?",
    opciones: ["Que la ropa que cubre la cama del paciente roce la piel y produzca lesiones.", "Prevenir la aparición de úlceras por decúbito.", "La aparición de isquemia en los puntos de presión.", "Todas las respuestas anteriores son correctas."],
    correcta: "B",
    explicacion: "Los cambios posturales sirven para prevenir las úlceras por presión (por decúbito)."
  },
  {
    tema: "Movilización y traslado de pacientes",
    origen: "Examen 2024 · Específico E33",
    enunciado: "Posición de decúbito dorsal en la que el paciente está tumbado sobre su espalda, con los miembros superiores extendidos junto al cuerpo, las extremidades inferiores ligeramente flexionadas por las rodillas y las plantas de los pies apoyadas sobre la cama. Señale la respuesta correcta:",
    opciones: ["Es una variante de la posición anatómica.", "No existe esta posición.", "Se utiliza para relajar las paredes musculares abdominales.", "Son correctas las respuestas a y c."],
    correcta: "D",
    explicacion: "Es el decúbito supino con rodillas flexionadas: una variante de la posición anatómica que relaja la musculatura abdominal."
  },
  {
    tema: "Movilización y traslado de pacientes",
    origen: "Examen 2024 · Específico E36",
    enunciado: "¿A qué denominamos polígono de sustentación?",
    opciones: ["A la estructura metálica utilizada para evitar que la ropa de cama roce la piel del paciente.", "Este término no existe.", "Al polígono formado por el contorno de los pies.", "Al triángulo que permite al paciente incorporarse en la cama."],
    correcta: "C",
    explicacion: "La base de sustentación es la superficie delimitada por los pies; ampliarla da más estabilidad al mover pacientes."
  },
  {
    tema: "Movilización y traslado de pacientes",
    origen: "Examen 2024 · Específico E45",
    enunciado: "Indique la posición más adecuada para el lavado del cabello en pacientes encamados:",
    opciones: ["Proetz.", "Kraske.", "Fowler.", "Jackknife (navaja)."],
    correcta: "A",
    explicacion: "En la posición de Proetz el paciente está boca arriba con la cabeza fuera del borde de la cama, lo que permite lavarle el pelo."
  },
  {
    tema: "Movilización y traslado de pacientes",
    origen: "Examen 2024 · Específico E59",
    enunciado: "Usted está destinado como celador en una UCI y debe trasladar a un paciente en estado crítico a otra unidad para realizarle una prueba complementaria. Ante la orden de traslado, deberá:",
    opciones: ["Trasladarlo lo más rápidamente posible en compañía de un auxiliar y otro celador.", "Trasladarlo en compañía de un facultativo y un enfermero.", "Trasladarlo con la mayor rapidez posible junto a un facultativo, comprobando que llevamos todo el material necesario para el transporte.", "Trasladarlo en compañía de un facultativo y un auxiliar."],
    correcta: "B",
    explicacion: "Un paciente crítico se traslada acompañado de un médico y de una enfermera."
  },
  {
    tema: "Movilización y traslado de pacientes",
    origen: "Examen 2024 · Específico E68",
    enunciado: "En el supuesto de que tengamos que trasladar a un paciente para que le realicen una prueba complementaria:",
    opciones: ["Dejaremos al paciente abrigado con una manta cerca de la consulta del médico para que el TCAE pueda reconocerlo.", "Dejaremos al paciente abrigado con una manta y le entregaremos la documentación clínica para que él se la entregue a la persona responsable del servicio.", "No estamos obligados a permanecer junto al enfermo y regresaremos a la unidad en la que estamos trabajando.", "Permaneceremos junto al enfermo hasta que la persona responsable de la prueba se haga cargo de él."],
    correcta: "D",
    explicacion: "El celador no deja solo al paciente hasta que el responsable de la prueba se hace cargo de él."
  },
  {
    tema: "Movilización y traslado de pacientes",
    origen: "Examen 2024 · Específico E70",
    enunciado: "Si la supervisora de urgencias le pide al celador que acompañe a uno de los pacientes de este servicio en la ambulancia para que le realicen una prueba complementaria en un centro perteneciente al mismo complejo hospitalario, el celador:",
    opciones: ["Se negará, puesto que no puede abandonar su puesto de trabajo.", "Acompañará al paciente, pero solo hasta la ambulancia.", "Cumplirá lo encomendado.", "Le dirá a la supervisora que no es función suya acompañar a los pacientes en las ambulancias."],
    correcta: "C",
    explicacion: "Acompañar al paciente en la ambulancia a otro centro del mismo complejo, si se lo encargan, es tarea del celador."
  },
  {
    tema: "Movilización y traslado de pacientes",
    origen: "Examen 2024 · Específico E76",
    enunciado: "Nos piden que ayudemos a caminar a un paciente con hemiplejía derecha. ¿Cómo lo haríamos?",
    opciones: ["Nos colocaríamos en el lado no afectado.", "Le ayudaríamos por el lado afectado, como si se apoyase en un bastón.", "Nos situaríamos en el lado izquierdo.", "Son correctas las respuestas a y c."],
    correcta: "D",
    explicacion: "Según la respuesta oficial, nos colocamos en el lado sano, que en una hemiplejia derecha es el izquierdo."
  },
  {
    tema: "Movilización y traslado de pacientes",
    origen: "Examen 2024 · Específico E83",
    enunciado: "¿Para qué utilizaremos el método de trabazón de brazos?",
    opciones: ["Para ayudar al paciente a levantarse de la cama.", "Para ayudar a caminar al paciente.", "Para cambiar las almohadas y acomodar al paciente.", "Esta técnica no se utiliza en el hospital."],
    correcta: "C",
    explicacion: "La trabazón de brazos sirve para incorporar al paciente en la cama y así cambiarle la almohada o acomodarlo."
  },
  {
    tema: "Movilización y traslado de pacientes",
    origen: "Examen 2024 · Específico E86",
    enunciado: "Al preparar la transferencia de un paciente de la cama a la camilla, deberemos:",
    opciones: ["Colocar la camilla perpendicular a la cama, con la cabecera de la camilla a los pies de la cama, y frenar ambas.", "Colocar la camilla perpendicular a la cama, con la cabecera de la camilla formando un ángulo de 90° con la cabecera de la cama, y frenar ambas.", "Colocar la camilla a continuación de la cama y frenar ambas.", "Son correctas las opciones a y c."],
    correcta: "D",
    explicacion: "La camilla puede ponerse perpendicular a la cama, con su cabecera a los pies de la cama, o a continuación de ella. Siempre con las dos frenadas."
  },
  {
    tema: "Movilización y traslado de pacientes",
    origen: "Examen 2024 · Específico E88",
    enunciado: "El facultativo que va a realizar una punción lumbar en el servicio de urgencias le pide al celador que acuda a ayudarle. ¿Qué deberá hacer?",
    opciones: ["No acudirá, alegando que es función del personal sanitario.", "Ayudará al facultativo y, siguiendo sus indicaciones, colocará al paciente en decúbito lateral con las rodillas flexionadas hacia el abdomen y la cabeza flexionada hacia las rodillas.", "Solo ayudará suministrándole el material necesario.", "Ninguna de las respuestas anteriores es correcta."],
    correcta: "B",
    explicacion: "Para la punción lumbar el paciente se coloca en decúbito lateral, en posición fetal, para abrir los espacios entre vértebras."
  },
  {
    tema: "Movilización y traslado de pacientes",
    origen: "Examen 2024 · Específico E89",
    enunciado: "Estamos trabajando en la planta de traumatología y nos piden ayuda para movilizar a un paciente con tracción en la pierna izquierda. Señale la respuesta incorrecta:",
    opciones: ["Con ayuda del paciente serán necesarias un mínimo de dos personas.", "La enfermera retirará la tracción para evitar que nos moleste.", "El movimiento se realizará de forma sincronizada.", "Si se utiliza sábana de arrastre serán necesarias al menos tres personas."],
    correcta: "B",
    explicacion: "La tracción no se retira para movilizar al paciente: se mueve con ella puesta."
  },
  {
    tema: "Movilización y traslado de pacientes",
    origen: "Examen 2024 · Específico E91",
    enunciado: "Si tenemos que trasladar a un paciente al servicio de radiología en silla de ruedas y para ello debemos bajar un piso:",
    opciones: ["Empujaremos la silla desde la parte de atrás por la empuñadura.", "Para entrar y salir del ascensor, el celador entra y sale siempre primero tirando de la silla.", "Si el ascensor ha quedado ligeramente elevado con respecto al suelo de la planta, entraremos de frente.", "Son correctas las respuestas a y c."],
    correcta: "D",
    explicacion: "Según la respuesta oficial, son correctas la A y la C: la silla se empuja por la empuñadura y, si el ascensor queda un poco elevado, se entra de frente."
  },
  {
    tema: "Movilización y traslado de pacientes",
    origen: "Examen 2024 · Específico E95",
    enunciado: "Hay que trasladar a un paciente ingresado en la planta de psiquiatría, donde usted está de turno, a una consulta que está en otro hospital del mismo complejo. El paciente tendrá que ir en ambulancia. Señale cuál de las siguientes opciones es incorrecta:",
    opciones: ["Llevará al paciente en camilla desde la planta hasta la ambulancia.", "Transferirá al paciente a la camilla de la ambulancia con ayuda del técnico de esta.", "Ayudará a subir la camilla a la ambulancia.", "Acompañará al paciente hasta su regreso a la planta, como le han encargado."],
    correcta: "C",
    explicacion: "Según la respuesta oficial, subir la camilla a la ambulancia no le corresponde al celador."
  },
  {
    tema: "Movilización y traslado de pacientes",
    origen: "Examen 2024 · Específico E96",
    enunciado: "¿Cuál sería la forma correcta de subir a un paciente colaborador hacia la cabecera de la cama?",
    opciones: ["Poner la cama en horizontal o en ligero Trendelenburg.", "Comprobar que la cama no esté frenada.", "Pediremos al paciente que estire las rodillas.", "Las respuestas a y b son correctas."],
    correcta: "A",
    explicacion: "Se pone la cama horizontal o en ligero Trendelenburg, siempre frenada, y el paciente flexiona las rodillas para ayudar."
  },
  {
    tema: "Movilización y traslado de pacientes",
    origen: "Examen 2024 · Específico E100",
    enunciado: "La supervisora de la planta en la que trabajamos nos pide que ayudemos al auxiliar de enfermería a pasar a un paciente no colaborador al sillón. Señale la respuesta incorrecta:",
    opciones: ["Explicaremos al paciente el procedimiento a seguir.", "Elevaremos la cabecera de la cama si es posible.", "Nos colocaremos de forma que el auxiliar esté a un lado de la cama y nosotros en el contrario.", "Nos colocaremos ambos en el mismo lado de la cama."],
    correcta: "C",
    explicacion: "Para pasar al paciente al sillón, las dos personas se colocan en el mismo lado de la cama, no en lados opuestos."
  },
  {
    tema: "Movilización y traslado de pacientes",
    origen: "Examen SAS 2025 · P29",
    enunciado: "Uno de los principios de la mecánica corporal para la correcta manipulación de personas inmovilizadas, es proteger la espalda. ¿Cómo debemos protegerla?",
    opciones: ["No doblarla incorrectamente.", "Hacer uso de los músculos de las piernas para moverse y levantarse.", "Considerando exclusivamente la fuerza, el ángulo de tracción óptimo para cualquier músculo es de 90 grados.", "Todas las respuestas anteriores son correctas."],
    correcta: "D",
    explicacion: "Para proteger la espalda: no doblarla mal, hacer la fuerza con las piernas y aprovechar bien el ángulo de tracción. Por eso son todas."
  },
  {
    tema: "Movilización y traslado de pacientes",
    origen: "Examen SAS 2025 · P30",
    enunciado: "¿Cuál es el dispositivo mecánico más importante para la movilización de pacientes encamados, que presentan un grado de movilización escaso o nulo, debido a su estado de salud?",
    opciones: ["Arnés.", "Eslinga.", "Grúa.", "Cojines antiescaras."],
    correcta: "C",
    explicacion: "La grúa es el dispositivo principal para mover pacientes con movilidad escasa o nula. La eslinga y el arnés son piezas de la grúa."
  },
  {
    tema: "Movilización y traslado de pacientes",
    origen: "Examen SAS 2025 · P31",
    enunciado: "¿Qué evitamos con una sistemática de cambios posturales frecuentes y buenas posiciones del paciente imposibilitado en la cama?",
    opciones: ["Frenar la cama.", "Las úlceras por presión.", "Alinear al paciente.", "Incidencias con el gotero."],
    correcta: "B",
    explicacion: "Los cambios posturales frecuentes evitan las úlceras por presión."
  },
  {
    tema: "Movilización y traslado de pacientes",
    origen: "Examen SAS 2025 · P33",
    enunciado: "¿Cómo se llama la posición en la cual el paciente se halla en decúbito supino con la cabeza colgando, con el objetivo de mantener el cuello en hiperextensión?",
    opciones: ["Posición de Morestin.", "Posición de Sims.", "Posición de Fowler.", "Posición de Roser."],
    correcta: "D",
    explicacion: "Posición de Roser (o de Proetz): boca arriba con la cabeza colgando, para hiperextender el cuello."
  },
  {
    tema: "Movilización y traslado de pacientes",
    origen: "Examen SAS 2025 aplazado · P32",
    enunciado: "¿Cómo se denomina la posición, en la que el plano del cuerpo está inclinado 45 grados respecto al plano del suelo, pero la cabeza está más elevada que los pies?",
    opciones: ["Posición de decúbito prono.", "Posición de Sims.", "Posición de Morestin.", "Posición de Fowler."],
    correcta: "C",
    explicacion: "Posición de Morestin (antitrendelenburg): inclinada unos 45° con la cabeza más alta que los pies."
  },
  {
    tema: "Movilización y traslado de pacientes",
    origen: "Examen SAS 2025 aplazado · P33",
    enunciado: "¿Dónde debe colocarse el/la Celador/a, cuando se cambia de posición a un paciente con hemiplejía?",
    opciones: ["Del lado del paciente que conserva la movilidad.", "Del lado del paciente que no tiene movilidad.", "A los pies de la cama.", "En el cabecero de la cama."],
    correcta: "A",
    explicacion: "La respuesta oficial es el lado que conserva la movilidad (el sano). Es el mismo criterio que dio el Sergas en el examen de 2024 (E76). Mira «Puntos conflictivos»."
  },
  {
    tema: "Movilización y traslado de pacientes",
    origen: "Examen SAS 2025 aplazado · P34",
    enunciado: "En el traslado de un paciente en camilla a un servicio cuyo acceso tiene una pendiente que debe de subir, el/la Celador/a debe:",
    opciones: ["Tirar de la cabecera.", "Empujar la camilla desde la cabecera para que el paciente suba en el sentido de la marcha.", "Tirar de la camilla por los pies.", "Empujar la camilla por los pies."],
    correcta: "D",
    explicacion: "Al subir una rampa, la cabecera va delante y el celador empuja desde los pies. Así la cabeza del paciente queda más alta."
  },
  {
    tema: "Movilización y traslado de pacientes",
    origen: "Examen SAS 2025 aplazado · P45",
    enunciado: "Señale una de las indicaciones por la que se usa la posición de Trendelenburg, en una cama hospitalaria:",
    opciones: ["Facilitar la digestión.", "Favorecer el retorno venoso.", "Favorecer la oxigenación pulmonar.", "Todas las respuestas son correctas."],
    correcta: "B",
    explicacion: "Trendelenburg (cabeza más baja que los pies) favorece el retorno de la sangre venosa hacia el corazón."
  },
  // ===================================================================
  //  QUIRÓFANO, HOSPITALIZACIÓN Y SALUD MENTAL (111 preguntas)
  // ===================================================================
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "El área quirúrgica se divide habitualmente en tres zonas según su grado de restricción. La zona más restringida es:",
    opciones: ["La zona estéril (quirófanos y zona de lavado quirúrgico)", "El pasillo de acceso exterior", "La zona de vestuarios", "La sala de espera de familiares"],
    correcta: "A",
    explicacion: "Zonas: sin restricción (negra), semirrestringida (gris o limpia) y restringida (blanca o estéril). (Área quirúrgica)"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "La zona sin restricción (o negra) del área quirúrgica incluye:",
    opciones: ["La zona de lavado quirúrgico", "Vestuarios, zona de recepción y pasillos de acceso desde el exterior", "El almacén de material estéril", "Los quirófanos"],
    correcta: "B",
    explicacion: "Es la zona de contacto con el resto del hospital; se puede circular con ropa de calle hasta los vestuarios. (Área quirúrgica)"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "La zona semirrestringida (gris o limpia) del área quirúrgica comprende:",
    opciones: ["La cafetería", "La sala de espera de familiares", "Pasillos internos, almacenes de material estéril y zonas de preparación", "Los vestuarios"],
    correcta: "C",
    explicacion: "Se exige pijama quirúrgico, gorro y calzado o calzas. (Área quirúrgica)"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "Para acceder a la zona restringida (quirófano) es obligatorio llevar, además del pijama quirúrgico:",
    opciones: ["Solo los guantes estériles", "Bata estéril siempre, aunque no se participe en la intervención", "Gorro que cubra todo el pelo, mascarilla y calzado exclusivo o calzas", "Solo el gorro"],
    correcta: "C",
    explicacion: "La mascarilla es obligatoria en la zona estéril. La bata y los guantes estériles solo los lleva el equipo que interviene. (Normas de higiene en quirófano)"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "El gorro quirúrgico debe:",
    opciones: ["Cubrir solo la parte superior de la cabeza", "Ser opcional para quien lleva el pelo corto", "Cubrir completamente el pelo", "Ponerse después de la mascarilla"],
    correcta: "C",
    explicacion: "El pelo es fuente de contaminación. (Normas de higiene en quirófano)"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "Las puertas del quirófano durante una intervención deben permanecer:",
    opciones: ["Abiertas para ventilar", "Cerradas", "Entreabiertas", "Abiertas solo si hace calor"],
    correcta: "B",
    explicacion: "Abrirlas altera la presión y la ventilación, aumentando el riesgo de infección. (Normas de higiene en quirófano)"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "En los quirófanos, la presión del aire respecto a las zonas contiguas es:",
    opciones: ["Negativa", "Positiva, para que el aire salga y no entre aire contaminado", "Igual", "Variable según la cirugía"],
    correcta: "B",
    explicacion: "La presión positiva impide la entrada de aire de zonas menos limpias. (Normas de higiene en quirófano)"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "En el quirófano, el celador NO debe:",
    opciones: ["Ayudar a pasar al paciente a la mesa de quirófano", "Colaborar en la colocación del paciente", "Trasladar muestras a anatomía patológica", "Tocar el material o el campo estéril, ni pasar entre el campo estéril y la mesa de instrumental"],
    correcta: "D",
    explicacion: "El celador no está estéril; debe mantener distancia con el campo estéril. (Funciones del celador en quirófano)"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "Una función del celador en el área quirúrgica es:",
    opciones: ["Preparar la medicación anestésica", "Trasladar al paciente desde la planta y pasarlo a la mesa de operaciones", "Realizar el lavado quirúrgico del paciente", "Instrumentar en la intervención"],
    correcta: "B",
    explicacion: "Traslados, transferencias, colaboración en la colocación y transporte de muestras y material. (Funciones del celador en quirófano)"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "Las piezas o muestras de biopsia intraoperatoria deben trasladarse:",
    opciones: ["Al final de la jornada", "De inmediato a anatomía patológica, porque el cirujano espera el resultado para continuar", "Junto con el paciente a la planta", "Al laboratorio de urgencias"],
    correcta: "B",
    explicacion: "La biopsia intraoperatoria condiciona la cirugía en curso. (Funciones del celador en quirófano)"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "La colocación del paciente en la mesa de quirófano en la posición quirúrgica se hace:",
    opciones: ["Por decisión del celador", "Antes de que llegue el equipo, sin indicaciones", "Por el propio paciente", "Bajo las indicaciones del cirujano, el anestesista o enfermería, con la colaboración del celador"],
    correcta: "D",
    explicacion: "El celador colabora; la posición la indica el equipo quirúrgico. (Funciones del celador en quirófano)"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "Antes de trasladar al paciente a quirófano, el celador debe comprobar:",
    opciones: ["Que el paciente lleva sus joyas", "Que el paciente ha desayunado", "La identidad del paciente y que va con su historia clínica y documentación", "Que el paciente lleva sus gafas puestas"],
    correcta: "C",
    explicacion: "Identificación inequívoca. El paciente va sin joyas ni prótesis removibles según el protocolo. (Funciones del celador en quirófano)"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "El paciente que va a quirófano debe ir, en general:",
    opciones: ["Con el reloj puesto", "Con su ropa de calle", "Con todas sus pertenencias", "Sin joyas, maquillaje, esmalte de uñas ni prótesis dentales removibles, según indique el protocolo"],
    correcta: "D",
    explicacion: "Su preparación es responsabilidad de enfermería; el celador comprueba la identidad y la documentación. (Preparación preoperatoria)"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "Al pasar al paciente de la cama a la mesa de quirófano, ambas superficies deben estar:",
    opciones: ["A distinta altura", "Separadas para que el paciente salte", "Sin frenar", "Juntas, a la misma altura y frenadas"],
    correcta: "D",
    explicacion: "Mismas normas que cualquier transferencia. (Funciones del celador en quirófano)"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "La zona de transferencia (o transfer) del área quirúrgica es:",
    opciones: ["La consulta preanestésica", "La sala de despertar", "El almacén estéril", "El lugar donde el paciente pasa de la cama de planta a la camilla del bloque quirúrgico"],
    correcta: "D",
    explicacion: "Evita que las camas de planta entren en zonas limpias. (Área quirúrgica)"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "Durante la intervención, el celador puede ser requerido para:",
    opciones: ["Administrar anestesia", "Abrir paquetes estériles y pasarlos al campo", "Traer material, sangre del banco o llevar muestras, y colocar aparatos como el equipo portátil de rayos", "Sustituir al cirujano"],
    correcta: "C",
    explicacion: "Tareas de apoyo fuera del campo estéril. (Funciones del celador en quirófano)"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "Una vez terminada la intervención, el celador colabora en:",
    opciones: ["Retirar los puntos", "Pasar al paciente a la cama o camilla y trasladarlo a la unidad de reanimación (URPA)", "Retirar la anestesia", "Dar el alta al paciente"],
    correcta: "B",
    explicacion: "Traslado postoperatorio acompañado según el estado del paciente. (Funciones del celador en quirófano)"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "El lavado quirúrgico de manos lo realiza:",
    opciones: ["Todo el personal del hospital", "El equipo que va a participar estérilmente en la intervención", "El celador antes de entrar al área quirúrgica", "Solo el anestesista"],
    correcta: "B",
    explicacion: "El celador realiza higiene de manos (lavado o solución hidroalcohólica), no el lavado quirúrgico. (Normas de higiene en quirófano)"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "Si el celador toca accidentalmente un objeto estéril del campo quirúrgico, debe:",
    opciones: ["Devolverlo a su sitio", "Limpiarlo con una gasa", "Avisar inmediatamente para que se sustituya", "Callar si no se ha caído"],
    correcta: "C",
    explicacion: "Cualquier contaminación debe comunicarse. (Normas de higiene en quirófano)"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "En el área quirúrgica, la circulación de personas debe:",
    opciones: ["No tener ninguna norma", "Aumentar durante las intervenciones", "Reducirse al mínimo imprescindible", "Ser libre"],
    correcta: "C",
    explicacion: "Menos personas y movimientos, menos riesgo de infección. (Normas de higiene en quirófano)"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "Si el celador tiene que salir del área quirúrgica a otra zona del hospital con el pijama quirúrgico, debe:",
    opciones: ["Volver a entrar sin cambiarse", "Quitarse solo el gorro", "Cumplir el protocolo del centro (cambiarse o cubrirse con una bata) y cambiar gorro y calzas al volver", "No hay ninguna norma"],
    correcta: "C",
    explicacion: "Evita introducir contaminación en el bloque quirúrgico. (Normas de higiene en quirófano)"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "La placa neutra (o de retorno) del bisturí eléctrico:",
    opciones: ["La coloca el celador al llegar", "No tiene importancia", "La coloca el personal de enfermería; el celador debe tener cuidado de no desplazarla al mover al paciente", "Se coloca sobre las joyas"],
    correcta: "C",
    explicacion: "Si se desplaza, puede producir quemaduras. (Seguridad en quirófano)"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "Las intervenciones de cirugía mayor ambulatoria (CMA) se caracterizan porque:",
    opciones: ["Se realizan en el domicilio", "El paciente ingresa al menos 3 días", "Son siempre urgentes", "El paciente vuelve a su domicilio el mismo día de la intervención"],
    correcta: "D",
    explicacion: "Cirugía sin ingreso hospitalario. (Área quirúrgica)"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "La unidad del paciente en una planta de hospitalización es:",
    opciones: ["El control de enfermería", "La sala de espera", "El almacén de la planta", "El espacio físico y el mobiliario que ocupa cada paciente (cama, mesilla, sillón, armario, timbre, tomas)"],
    correcta: "D",
    explicacion: "El conjunto de espacio, mobiliario y material que usa el paciente durante el ingreso. (Hospitalización)"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "Las tomas de oxígeno y de vacío de la habitación se encuentran normalmente:",
    opciones: ["En el control de enfermería", "En el pasillo", "En el baño", "En el cabecero de la cama, en la pared"],
    correcta: "D",
    explicacion: "En la columna o panel de cabecera. (Hospitalización)"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "En el ingreso de un paciente en la planta, el celador:",
    opciones: ["Le asigna la cama", "Le informa del diagnóstico", "Le hace la entrevista de enfermería", "Le traslada desde admisión o urgencias y le acompaña hasta su unidad con la documentación"],
    correcta: "D",
    explicacion: "La asignación de cama corresponde a admisión y la acogida clínica a enfermería. (Hospitalización)"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "Cuando un paciente recibe el alta y no puede salir por su propio pie, el celador:",
    opciones: ["Le firma el informe de alta", "Le acompaña en silla de ruedas hasta la salida o hasta la ambulancia", "Le deja en la puerta de la habitación", "Le da instrucciones sobre su medicación"],
    correcta: "B",
    explicacion: "Traslado hasta la salida o el transporte. (Hospitalización)"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "El traslado de un paciente a otra unidad del hospital debe ir acompañado de:",
    opciones: ["Nada, la documentación va después", "El alta médica", "Su historia clínica y documentación, y en su caso sus pertenencias", "Solo sus pertenencias"],
    correcta: "C",
    explicacion: "El paciente siempre va con su documentación. (Hospitalización)"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "Las estancias comunes de un hospital (salas de espera, pasillos, salas de estar) deben mantenerse:",
    opciones: ["Abiertas al tabaco", "Con material almacenado", "Con camillas aparcadas", "Ordenadas, en silencio y sin obstáculos"],
    correcta: "D",
    explicacion: "El celador vela por el orden, el silencio y que no haya obstáculos. (Estancias comunes)"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "Los pasillos y las salidas de emergencia deben estar:",
    opciones: ["Cerrados con llave", "Siempre libres de obstáculos", "Ocupados por camillas si hay mucha actividad", "Ocupados por material de limpieza"],
    correcta: "B",
    explicacion: "Son vías de evacuación. (Estancias comunes; plan de autoprotección)"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "El aislamiento hospitalario tiene como objetivo:",
    opciones: ["Castigar al paciente", "Ahorrar espacio", "Evitar la transmisión de microorganismos entre pacientes, personal y visitantes", "Separar a los pacientes por edad"],
    correcta: "C",
    explicacion: "Barreras para cortar la cadena de transmisión. (Aislamientos)"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "Las precauciones estándar se aplican:",
    opciones: ["A todos los pacientes, independientemente de su diagnóstico", "Solo en quirófano", "Solo a pacientes con infección conocida", "Solo a pacientes con VIH"],
    correcta: "A",
    explicacion: "Se considera que cualquier sangre o fluido puede ser infeccioso. (Precauciones estándar)"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "La medida más importante para prevenir las infecciones relacionadas con la asistencia sanitaria es:",
    opciones: ["El uso de mascarilla", "El uso de guantes", "La higiene de manos", "La limpieza del suelo"],
    correcta: "C",
    explicacion: "Es la medida más sencilla y eficaz. (Higiene de manos (OMS))"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "Según la OMS, son cinco los momentos para la higiene de manos. ¿Cuál de estos NO es uno de ellos?",
    opciones: ["Después del contacto con el entorno del paciente", "Antes del contacto con el paciente", "Después del contacto con el paciente", "Antes de entrar en el ascensor"],
    correcta: "D",
    explicacion: "Los cinco momentos: antes del contacto, antes de una tarea aséptica, después del riesgo de exposición a fluidos, después del contacto y después del contacto con el entorno. (Higiene de manos (OMS))"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "La higiene de manos con solución hidroalcohólica debe durar aproximadamente:",
    opciones: ["2 minutos", "5 segundos", "20-30 segundos", "5 minutos"],
    correcta: "C",
    explicacion: "Fricción de 20-30 segundos hasta que las manos se sequen. El lavado con agua y jabón dura 40-60 segundos. (Higiene de manos (OMS))"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "El lavado de manos con agua y jabón debe durar aproximadamente:",
    opciones: ["10 segundos", "40-60 segundos", "Lo que se tarde en mojarlas", "5 minutos"],
    correcta: "B",
    explicacion: "40-60 segundos según la OMS. (Higiene de manos (OMS))"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "¿Cuándo hay que lavarse las manos con agua y jabón en lugar de usar solución hidroalcohólica?",
    opciones: ["Siempre, el alcohol no sirve", "Cuando estén visiblemente sucias y con pacientes con Clostridium difficile", "Nunca", "Solo al empezar el turno"],
    correcta: "B",
    explicacion: "El alcohol no elimina la suciedad visible ni las esporas de C. difficile. (Higiene de manos (OMS))"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "El uso de guantes:",
    opciones: ["Solo es necesario en quirófano", "Permite atender a varios pacientes con los mismos guantes", "Hace innecesario lavarse las manos", "No sustituye a la higiene de manos, que debe hacerse antes de ponerlos y después de quitarlos"],
    correcta: "D",
    explicacion: "Los guantes se cambian entre pacientes y se hace higiene de manos. (Precauciones estándar)"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "En el aislamiento de contacto, el personal debe usar:",
    opciones: ["Guantes y bata al entrar en contacto con el paciente o su entorno", "Solo calzas", "Nada en especial", "Solo mascarilla FFP2"],
    correcta: "A",
    explicacion: "Para microorganismos multirresistentes, C. difficile, sarna, etc. (Aislamientos)"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "En el aislamiento respiratorio por gotas (por ejemplo, gripe), el personal debe usar:",
    opciones: ["Mascarilla quirúrgica cuando esté cerca del paciente", "Solo guantes", "Nada", "Mascarilla FFP2 obligatoriamente y habitación con presión negativa"],
    correcta: "A",
    explicacion: "Las gotas grandes viajan distancias cortas; basta mascarilla quirúrgica. (Aislamientos)"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "En el aislamiento aéreo (por ejemplo, tuberculosis pulmonar), el personal debe usar:",
    opciones: ["Solo guantes", "Solo bata", "Mascarilla quirúrgica", "Mascarilla de alta protección (FFP2 o FFP3)"],
    correcta: "D",
    explicacion: "Los núcleos de gotitas permanecen en el aire; requieren protección respiratoria de alta eficacia. (Aislamientos)"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "La habitación de un paciente en aislamiento aéreo debe tener:",
    opciones: ["Las ventanas al pasillo abiertas", "Presión positiva", "La puerta abierta para ventilar", "Presión negativa y puerta cerrada"],
    correcta: "D",
    explicacion: "La presión negativa impide que el aire contaminado salga al pasillo. (Aislamientos)"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "El aislamiento protector (o inverso) se aplica a:",
    opciones: ["Pacientes con tuberculosis", "Pacientes psiquiátricos", "Pacientes con sarna", "Pacientes inmunodeprimidos, para protegerles de infecciones del exterior"],
    correcta: "D",
    explicacion: "Trasplantados, neutropénicos, grandes quemados... Habitación con presión positiva. (Aislamientos)"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "Si el celador tiene que trasladar a un paciente en aislamiento aéreo a otro servicio, el paciente debe llevar:",
    opciones: ["Mascarilla quirúrgica, y el celador mascarilla FFP2", "Nada", "Una sábana sobre la cara", "Mascarilla FFP2 con válvula"],
    correcta: "A",
    explicacion: "El paciente con mascarilla quirúrgica reduce la emisión; el personal se protege con FFP2. (Aislamientos)"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "Antes de trasladar a un paciente en aislamiento, debe avisarse:",
    opciones: ["Solo a la familia", "A nadie", "Al servicio de limpieza exclusivamente", "Al servicio de destino, para que tome las precauciones necesarias"],
    correcta: "D",
    explicacion: "El servicio de destino prepara las medidas. (Aislamientos)"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "El orden correcto para quitarse el equipo de protección tras atender a un paciente en aislamiento de contacto suele ser:",
    opciones: ["Guantes al final, después de salir al pasillo", "Guantes, higiene de manos, bata y nueva higiene de manos", "Bata, gorro y después guantes, sin higiene de manos", "Da igual el orden"],
    correcta: "B",
    explicacion: "Los guantes, más contaminados, se retiran primero; después la bata, con higiene de manos al final. (Aislamientos)"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "La sarna (escabiosis) requiere aislamiento:",
    opciones: ["Aéreo", "Por gotas", "De contacto", "Protector"],
    correcta: "C",
    explicacion: "Se transmite por contacto directo y con ropa y objetos. (Aislamientos)"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "La varicela y el sarampión requieren aislamiento:",
    opciones: ["Por gotas", "Protector", "De contacto exclusivamente", "Aéreo"],
    correcta: "D",
    explicacion: "Se transmiten por vía aérea. (Aislamientos)"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "La meningitis meningocócica requiere aislamiento:",
    opciones: ["No requiere aislamiento", "De contacto exclusivamente", "Por gotas (las primeras 24 horas de tratamiento)", "Aéreo"],
    correcta: "C",
    explicacion: "Gotas durante las primeras 24 horas de tratamiento antibiótico. (Aislamientos)"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "La unidad de hospitalización psiquiátrica atiende a pacientes:",
    opciones: ["Con fracturas", "Con enfermedades infecciosas", "Con trastornos mentales en fase aguda que necesitan ingreso", "En recuperación de cirugía"],
    correcta: "C",
    explicacion: "Atiende crisis y descompensaciones que requieren ingreso. (Unidades de salud mental)"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "En la unidad de salud mental, el celador ayuda al personal sanitario principalmente en:",
    opciones: ["La vigilancia de los pacientes, su acompañamiento y, cuando se indica, en la contención de pacientes agitados", "Realizar las entrevistas clínicas", "Pautar el tratamiento", "Decidir el alta"],
    correcta: "A",
    explicacion: "Apoyo bajo indicación del personal sanitario. (Funciones del celador en salud mental)"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "La contención mecánica de un paciente agitado debe ser indicada por:",
    opciones: ["El celador", "El vigilante de seguridad", "El médico (en urgencia puede iniciarla enfermería, informando al médico)", "La familia"],
    correcta: "C",
    explicacion: "Es una medida terapéutica; el celador colabora. (Protocolo de contención mecánica)"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "La contención mecánica debe utilizarse:",
    opciones: ["Como último recurso, cuando han fallado otras medidas y hay riesgo para el paciente o para otros", "Para que el paciente no moleste", "Como castigo", "A todos los pacientes de noche"],
    correcta: "A",
    explicacion: "Excepcional, proporcionada y el menor tiempo posible. (Protocolo de contención mecánica)"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "Durante una contención mecánica, se recomienda que intervengan:",
    opciones: ["Una sola persona", "Los familiares", "Varias personas (habitualmente cinco: una por extremidad y otra para la cabeza), coordinadas por un responsable", "Solo el celador"],
    correcta: "C",
    explicacion: "Así la maniobra es más segura y rápida. (Protocolo de contención mecánica)"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "El paciente con contención mecánica debe estar:",
    opciones: ["Sin acceso a agua ni comida", "Solo en la habitación sin control", "Con la puerta cerrada con llave sin vigilancia", "Bajo vigilancia y supervisión periódica del personal según el protocolo"],
    correcta: "D",
    explicacion: "Se vigila de forma estrecha por los riesgos que conlleva. (Protocolo de contención mecánica)"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "Ante un paciente agitado, la actitud adecuada del celador es:",
    opciones: ["Mantener la calma, hablar con tono tranquilo, no discutir y guardar una distancia de seguridad", "Elevar la voz para imponerse", "Reírse de sus ideas", "Encerrarse con él para calmarle"],
    correcta: "A",
    explicacion: "Contención verbal y seguridad. (Funciones del celador en salud mental)"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "Al atender a un paciente potencialmente agresivo, el celador debe:",
    opciones: ["Darle la espalda para no provocarle", "Ponerse entre el paciente y la pared", "Situarse de forma que tenga una salida accesible y no darle la espalda", "Quedarse a solas en una habitación cerrada"],
    correcta: "C",
    explicacion: "Medidas básicas de seguridad. (Funciones del celador en salud mental)"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "Ante un paciente con ideas delirantes, el celador:",
    opciones: ["Debe darle la razón", "No debe discutirlas ni seguirle la corriente; se mantiene neutral y respetuoso", "Debe burlarse", "Debe convencerle de que está equivocado"],
    correcta: "B",
    explicacion: "Discutirlas genera conflicto; reforzarlas no ayuda. (Funciones del celador en salud mental)"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "En las unidades de salud mental se suelen retirar a los pacientes objetos como:",
    opciones: ["Los libros", "Cinturones, cordones y objetos cortantes, por su peligrosidad", "Las gafas en todo caso", "Las zapatillas"],
    correcta: "B",
    explicacion: "Se retiran los objetos que puedan usarse para hacerse daño o dañar a otros. (Unidades de salud mental)"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "El ingreso involuntario por razón de trastorno psíquico requiere:",
    opciones: ["Solo la firma de la familia", "Autorización judicial, previa o, si es urgente, posterior (comunicando el ingreso al juez en 24 horas)", "La autorización del alcalde", "Solo la decisión del celador de puerta"],
    correcta: "B",
    explicacion: "Por urgencia se ingresa y se comunica al juez en 24 horas; el juez debe ratificarlo en 72 horas. (Ley de Enjuiciamiento Civil, art. 763)"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "Si un paciente ingresado en psiquiatría intenta salir de la unidad sin autorización, el celador:",
    opciones: ["Le golpea para detenerle", "Cierra todas las puertas del hospital", "Le deja salir", "Avisa inmediatamente al personal de la unidad e intenta disuadirle con calma"],
    correcta: "D",
    explicacion: "Prevención de fugas sin violencia. (Funciones del celador en salud mental)"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "Las visitas en una unidad de salud mental:",
    opciones: ["Siguen las normas de la unidad y pueden limitarse por indicación terapéutica", "Son libres en todo momento", "Las decide el celador", "Están prohibidas siempre"],
    correcta: "A",
    explicacion: "El equipo terapéutico puede restringirlas. (Unidades de salud mental)"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "Los paquetes que traen los visitantes a una unidad de salud mental:",
    opciones: ["Se entregan sin más", "Se tiran", "Se revisan según el protocolo de la unidad antes de entregarlos", "Los abre el paciente delante de todos"],
    correcta: "C",
    explicacion: "Para evitar objetos peligrosos o sustancias no permitidas. (Unidades de salud mental)"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "El paciente psiquiátrico tiene, como cualquier otro paciente:",
    opciones: ["Derecho a ser tuteado", "Los mismos derechos de dignidad, intimidad y confidencialidad", "Ningún derecho a la información", "Menos derechos"],
    correcta: "B",
    explicacion: "La enfermedad mental no reduce sus derechos. (Ley 41/2002; Ley 14/1986)"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "En una unidad de pediatría, el celador debe tener en cuenta que:",
    opciones: ["No hay normas especiales", "Los niños suelen ir acompañados de sus padres, que pueden permanecer con ellos", "Los niños nunca pueden estar acompañados", "Los niños se trasladan siempre en silla de ruedas"],
    correcta: "B",
    explicacion: "El acompañamiento de los padres es un derecho del menor hospitalizado. (Hospitalización pediátrica)"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "En la unidad de neonatología, el acceso:",
    opciones: ["Solo es para los abuelos", "Está muy restringido y exige estrictas medidas de higiene", "No tiene ninguna norma", "Es libre"],
    correcta: "B",
    explicacion: "Recién nacidos muy vulnerables a infecciones. (Hospitalización)"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "En el paritorio, el celador colabora en:",
    opciones: ["El traslado de la parturienta y del recién nacido cuando se le indica", "Administrar la epidural", "Cortar el cordón umbilical", "Atender el parto"],
    correcta: "A",
    explicacion: "Traslados y apoyo, nunca tareas sanitarias. (Funciones del celador)"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "La habitación de un paciente aislado debe tener en la puerta:",
    opciones: ["El nombre del médico", "Un cartel que indique el tipo de aislamiento y las medidas necesarias", "Nada", "El diagnóstico completo del paciente"],
    correcta: "B",
    explicacion: "Informa al personal y visitas de las precauciones sin revelar el diagnóstico. (Aislamientos)"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "Las mascarillas FFP2 deben:",
    opciones: ["Reutilizarse indefinidamente", "Usarse con barba larga sin problema", "Llevarse por debajo de la nariz", "Ajustarse bien a la cara, sin fugas"],
    correcta: "D",
    explicacion: "Su eficacia depende del ajuste. (Equipos de protección)"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "El material desechable usado en una habitación de aislamiento se elimina:",
    opciones: ["Dentro de la habitación, en el contenedor de residuos que corresponda", "En el control de enfermería", "En la papelera de la sala de espera", "En el pasillo"],
    correcta: "A",
    explicacion: "Los residuos no salen de la habitación sin el contenedor adecuado. (Aislamientos)"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "En el bloque quirúrgico, las camillas y camas de la planta:",
    opciones: ["Se usan como mesa de operaciones", "No deben pasar más allá de la zona de transferencia", "Pueden entrar hasta el quirófano", "Se guardan en el quirófano"],
    correcta: "B",
    explicacion: "Por eso existe la zona de transferencia. (Área quirúrgica)"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "En el quirófano, la mascarilla debe cubrir:",
    opciones: ["Solo la boca", "La barbilla únicamente", "La nariz y la boca", "Solo la nariz"],
    correcta: "C",
    explicacion: "Nariz y boca en todo momento. (Normas de higiene en quirófano)"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "El calzado utilizado en el área quirúrgica debe ser:",
    opciones: ["Cualquiera", "Exclusivo del área o cubierto con calzas, cerrado, antideslizante y lavable", "El de la calle", "Abierto para mayor comodidad"],
    correcta: "B",
    explicacion: "Evita la contaminación y los accidentes. (Normas de higiene en quirófano)"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "El celador que está resfriado o con una infección de piel en las manos y trabaja en quirófano debe:",
    opciones: ["Trabajar con normalidad", "Ocultarlo con guantes", "Ponerse dos mascarillas y no decir nada", "Comunicarlo a su responsable, ya que puede suponer un riesgo para los pacientes"],
    correcta: "D",
    explicacion: "Protección del paciente quirúrgico. (Normas de higiene en quirófano)"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "En el área quirúrgica, el celador puede tener que trasladar cadáveres o piezas de amputación:",
    opciones: ["Sin identificación", "Siguiendo el protocolo del centro, debidamente identificados y embalados", "En la camilla de otro paciente", "En una bolsa de basura común"],
    correcta: "B",
    explicacion: "Correcta identificación y embalaje. (Funciones del celador en quirófano)"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "La sala de reanimación postanestésica (URPA) se sitúa normalmente:",
    opciones: ["Dentro del bloque quirúrgico, cerca de los quirófanos", "En consultas externas", "En la planta de hospitalización", "En urgencias"],
    correcta: "A",
    explicacion: "Permite atender rápidamente cualquier complicación. (Área quirúrgica)"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "El celador, al trasladar a un paciente desde la URPA a la planta, debe:",
    opciones: ["Llevarlo en cuanto sale de quirófano", "Llevarlo sin documentación", "Esperar a que el personal sanitario indique que el paciente puede ser trasladado y llevar su documentación", "Llevarlo andando"],
    correcta: "C",
    explicacion: "El alta de la URPA es una decisión sanitaria. (Funciones del celador en quirófano)"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "En una planta de hospitalización, el control de enfermería es:",
    opciones: ["La habitación del supervisor", "Un almacén", "El lugar de trabajo del personal de enfermería, desde donde se vigila la planta y se atienden las llamadas", "Una sala de espera"],
    correcta: "C",
    explicacion: "Centro de coordinación de la planta. (Hospitalización)"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "El office de planta es:",
    opciones: ["La zona donde se prepara y distribuye la comida de los pacientes", "El despacho médico", "El almacén de medicación", "La sala de visitas"],
    correcta: "A",
    explicacion: "Zona de distribución de dietas. (Hospitalización)"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "El paciente desorientado ingresado en planta:",
    opciones: ["Debe estar siempre sujeto", "No necesita ninguna medida", "Puede necesitar barandillas, vigilancia frecuente y medidas de prevención de caídas y fugas", "Debe ser trasladado a psiquiatría"],
    correcta: "C",
    explicacion: "Las medidas las decide el equipo sanitario; el celador colabora en la vigilancia. (Hospitalización; seguridad del paciente)"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "La higiene de manos del celador debe realizarse, entre otros momentos:",
    opciones: ["Solo si lleva guantes", "Solo en quirófano", "Antes y después de movilizar o trasladar a un paciente", "Solo al final del turno"],
    correcta: "C",
    explicacion: "El celador tiene contacto frecuente con pacientes y su entorno. (Higiene de manos (OMS))"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "Las uñas del personal que trabaja con pacientes deben ser:",
    opciones: ["Indiferentes", "Cortas, limpias y sin uñas artificiales", "Con uñas postizas", "Largas y pintadas"],
    correcta: "B",
    explicacion: "Las uñas largas o artificiales acumulan microorganismos. (Higiene de manos (OMS))"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "Respecto a anillos, relojes y pulseras, el personal que atiende a pacientes debe:",
    opciones: ["Llevarlos solo en quirófano", "Llevarlos debajo de los guantes", "Evitarlos, porque dificultan la higiene de manos", "Llevarlos siempre"],
    correcta: "C",
    explicacion: "Dificultan la higiene y acumulan microorganismos. (Higiene de manos (OMS))"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "Las precauciones estándar incluyen, entre otras medidas:",
    opciones: ["Uso de FFP3 con todos los pacientes", "Higiene de manos, uso de guantes ante fluidos, protección ocular si hay riesgo de salpicaduras y manejo seguro de objetos punzantes", "Aislamiento de todos los pacientes", "Habitación individual para todos"],
    correcta: "B",
    explicacion: "Se aplican a todos los pacientes. (Precauciones estándar)"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "Ante salpicaduras de sangre o fluidos en la cara o los ojos, el equipo de protección adecuado es:",
    opciones: ["Calzas", "Solo guantes", "Solo gorro", "Pantalla facial o gafas protectoras, además de mascarilla"],
    correcta: "D",
    explicacion: "Pregunta parecida al examen Sergas 2019. (Equipos de protección)"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "Las zonas de limpieza de un hospital se clasifican por su riesgo. Una zona de alto riesgo es:",
    opciones: ["La cafetería", "El quirófano y las unidades de críticos", "Los despachos", "El vestíbulo"],
    correcta: "B",
    explicacion: "Zonas de alto riesgo: quirófanos, UCI, neonatos, aislamientos, hemodiálisis... (Limpieza hospitalaria)"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    enunciado: "En la clasificación de zonas por riesgo de infección a efectos de limpieza, una zona de bajo riesgo es:",
    opciones: ["La unidad de quemados", "El quirófano", "Los despachos y zonas administrativas", "La UCI"],
    correcta: "C",
    explicacion: "Zonas sin pacientes ni procedimientos invasivos. (Limpieza hospitalaria)"
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    origen: "Examen 2024 · Específico E9",
    enunciado: "Cuando hablamos de quirófanos de tipo A, nos referimos a:",
    opciones: ["Quirófanos especializados, con un sistema de climatización de alto coste de implantación y de explotación.", "Quirófanos de muy altas prestaciones, aptos para neurocirugía y cirugía traumatológica.", "Quirófanos con instalación de difusión de aire laminar en el interior de la sala.", "Todas son correctas."],
    correcta: "D",
    explicacion: "Los quirófanos tipo A son los de muy altas prestaciones: flujo laminar, climatización costosa y aptos para neurocirugía y traumatología."
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    origen: "Examen 2024 · Específico E14",
    enunciado: "Dentro de la aparatología de uso frecuente que se encuentra en los quirófanos, el instrumento que corta el tejido y/o cauteriza se denomina:",
    opciones: ["Bisturí de acero no fungible.", "Bisturí electrónico.", "Bisturí quirúrgico.", "Bisturí eléctrico."],
    correcta: "D",
    explicacion: "El bisturí eléctrico corta y además cauteriza (coagula) el tejido."
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    origen: "Examen 2024 · Específico E18",
    enunciado: "¿Cómo se llama el accesorio quirúrgico que se fija a la mesa, se sitúa encima del paciente y permite separar la zona de anestesia de la de incisión?",
    opciones: ["Separador de Farabeuf.", "Separador de Kocher.", "Marco de Balkan.", "Arco de narcosis."],
    correcta: "D",
    explicacion: "El arco de narcosis se fija a la mesa y separa la zona de anestesia del campo quirúrgico."
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    origen: "Examen 2024 · Específico E19",
    enunciado: "Terminada una intervención quirúrgica, y antes del cierre de la incisión, ¿quién verifica el recuento de compresas realizado por el personal de enfermería circulante?",
    opciones: ["El personal técnico en cuidados auxiliares de enfermería.", "El/la anestesista.", "El/la propio/a cirujano/a.", "El personal de enfermería instrumentista."],
    correcta: "D",
    explicacion: "El recuento de compresas lo verifica la enfermera instrumentista junto con la circulante."
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    origen: "Examen 2024 · Específico E37",
    enunciado: "La clasificación de Altemeier nos permite:",
    opciones: ["Clasificar las intervenciones quirúrgicas según el grado de limpieza y contaminación.", "Clasificar las intervenciones quirúrgicas según su grado de complejidad.", "Clasificar las intervenciones quirúrgicas según su finalidad.", "Clasificar las intervenciones quirúrgicas según la necesidad de ingreso o no."],
    correcta: "A",
    explicacion: "Altemeier clasifica las cirugías en limpia, limpia-contaminada, contaminada y sucia."
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    origen: "Examen 2024 · Específico E44",
    enunciado: "¿Cómo se define el conjunto de dependencias donde están situados los quirófanos, vestuarios, pasillos, almacén de aparatos, zona de lavado...?",
    opciones: ["Zona quirúrgica.", "Espacio de operatoria quirúrgica.", "Área quirúrgica.", "Todas son correctas."],
    correcta: "C",
    explicacion: "El conjunto de quirófanos y dependencias anexas se llama área quirúrgica."
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    origen: "Examen 2024 · Específico E47",
    enunciado: "¿A qué nos referimos cuando hablamos de una zorra en el quirófano?",
    opciones: ["Se utiliza para adoptar la posición de laminectomía. Sirve para acomodar al paciente y evitarle lesiones por una postura mal alineada del cuerpo.", "Se utiliza para adoptar la posición de prono. Se fija a la mesa y expone distintas partes del cuerpo.", "Se utiliza para adoptar la posición de prono. Es un accesorio metálico, forrado con almohadillas para proteger al paciente y evitarle lesiones.", "Se utiliza para adoptar la posición de laminectomía. Consiste en un accesorio metálico con la parte superior almohadillada que sirve para elevar la zona lumbar del paciente."],
    correcta: "D",
    explicacion: "La zorra es un accesorio metálico acolchado que eleva la zona lumbar para la posición de laminectomía."
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    origen: "Examen 2024 · Específico E52 (reserva)",
    enunciado: "Cuando nos referimos a los recursos asistenciales en salud mental que están integrados en el área de salud, distinguimos entre dispositivos sanitarios y dispositivos intermedios o rehabilitadores. Entre estos últimos no se encuentra:",
    opciones: ["Centros de media estancia.", "Centros de larga estancia.", "Pisos protegidos.", "Unidad de rehabilitación."],
    correcta: "D",
    explicacion: "Según la respuesta oficial, la unidad de rehabilitación no está entre los dispositivos intermedios o rehabilitadores."
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    origen: "Examen 2024 · Específico E56",
    enunciado: "Usted, como celador/a de quirófano, conoce la existencia de una serie de limitaciones y recomendaciones a la hora de usar el teléfono móvil dentro del área quirúrgica:",
    opciones: ["Se recomienda no usarlo a menos de 1,5 metros del campo quirúrgico por sus interferencias con los aparatos.", "Se recomienda no usarlo a menos de 2,5 metros del campo quirúrgico por sus interferencias con los aparatos.", "Se recomienda usarlo en la sala destinada a ese efecto dentro del área quirúrgica.", "Todas son correctas."],
    correcta: "C",
    explicacion: "La respuesta oficial se corrigió a la C: el móvil se usa en la sala destinada a ello dentro del área quirúrgica."
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    origen: "Examen 2024 · Específico E64",
    enunciado: "¿Cuál de las siguientes posiciones considera que sería la más adecuada para una intervención de colecistectomía?",
    opciones: ["Prono.", "Semi-Fowler.", "Trendelenburg.", "Supino."],
    correcta: "D",
    explicacion: "La colecistectomía (extirpar la vesícula) se hace con el paciente en decúbito supino."
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    origen: "Examen 2024 · Específico E65",
    enunciado: "Los celadores en el servicio de quirófano realizan diversas funciones. Entre ellas no se encuentra:",
    opciones: ["Trasladar desde sus habitaciones a los usuarios que van a ser intervenidos en el quirófano.", "Colocar al paciente en la mesa de quirófano de acuerdo con la intervención a realizar.", "Para coordinarse con el personal sanitario del bloque quirúrgico, el celador trasladará a los pacientes de acuerdo con el orden preestablecido.", "Después de cada traslado, comprobará que la historia clínica corresponde con la identidad del paciente trasladado."],
    correcta: "D",
    explicacion: "Comprobar la historia clínica no le corresponde al celador; él traslada y coloca al paciente."
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    origen: "Examen 2024 · Específico E66",
    enunciado: "Usted es celadora en el bloque quirúrgico de un hospital del SERGAS. Durante su jornada laboral, al terminar una intervención, le piden trasladar al paciente a la unidad de reanimación postanestésica. Durante el traslado, ¿quién la acompaña?",
    opciones: ["Su compañera de turno, junto con la anestesista.", "Su compañera de turno, la anestesista y la enfermera instrumentista.", "Su compañera de turno, la anestesista y la enfermera circulante.", "Todas ellas."],
    correcta: "C",
    explicacion: "A reanimación acompañan otra celadora, la anestesista y la enfermera circulante. La instrumentista se queda en el quirófano."
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    origen: "Examen 2024 · Específico E75",
    enunciado: "A la hora de colocar las extremidades inferiores del paciente en las perneras, se debe proceder de la siguiente manera:",
    opciones: ["Se deben elevar ambas extremidades simultáneamente para compensar el retorno venoso y prevenir daños en las articulaciones.", "Se deben elevar ambas extremidades evitando hacerlo al mismo tiempo para compensar el retorno venoso y prevenir daños en las articulaciones.", "Se deben elevar ambas articulaciones al mismo tiempo para contrarrestar el retorno venoso y prevenir daños en ellas.", "Se deben elevar ambas articulaciones evitando hacerlo al mismo tiempo para contrarrestar el retorno venoso y prevenir daños en ellas."],
    correcta: "A",
    explicacion: "Las dos piernas se suben a las perneras a la vez, para compensar el retorno venoso y no dañar las articulaciones."
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    origen: "Examen 2024 · Específico E77",
    enunciado: "Terminada la intervención quirúrgica, usted prestará especial atención a:",
    opciones: ["La colocación del material para su esterilización.", "La retirada del aparato de rayos portátil de la sala antes de la limpieza del quirófano.", "Guardar los accesorios de la mesa para que no entren en contacto con material de limpieza húmedo que pudiera dañarlos.", "La recogida y el traslado al servicio correspondiente de las muestras o tejidos extirpados para su estudio."],
    correcta: "D",
    explicacion: "Al acabar la operación, el celador presta especial atención a llevar las muestras extirpadas al servicio que las estudiará."
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    origen: "Examen 2024 · Específico E110 (reserva)",
    enunciado: "A usted, como celador/a de quirófano, le piden su colaboración para acomodar a un paciente en la mesa. Para ello, deberá prestar atención a:",
    opciones: ["Preservar la intimidad del paciente.", "Evitar que, durante la movilización, el paciente tenga el instrumental en su campo de visión.", "Colocar con seguridad los accesorios de la mesa, evitando que se desprendan accidentalmente.", "Debemos prestar atención a todas ellas."],
    correcta: "D",
    explicacion: "Al colocar al paciente en la mesa hay que cuidar su intimidad, que no vea el instrumental y que los accesorios estén bien sujetos."
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    origen: "Examen SAS 2025 · P13",
    enunciado: "Señale quién NO forma parte del equipo de trabajo en el área de quirófano:",
    opciones: ["El personal de enfermería.", "El personal de mantenimiento.", "El personal de celadores.", "El personal médico de Cirugía."],
    correcta: "B",
    explicacion: "El equipo de quirófano lo forman médicos, enfermería, auxiliares y celadores. Mantenimiento acude cuando se le avisa, pero no forma parte del equipo."
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    origen: "Examen SAS 2025 · P19",
    enunciado: "¿Qué nombre reciben las áreas de internamiento que están en las unidades especializadas identificadas según las patologías que presentan los pacientes en la UCI?",
    opciones: ["Habitación.", "Módulo.", "Sala.", "Box o boxes."],
    correcta: "D",
    explicacion: "En la UCI los pacientes están en boxes: espacios individuales que permiten vigilarlos de cerca."
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    origen: "Examen SAS 2025 · P21",
    enunciado: "El periodo de tiempo que transcurre desde que un paciente va a ser intervenido, se prepara la intervención, se realiza la misma y hasta que es dado de alta en el hospital, se le conoce con el nombre de:",
    opciones: ["Preoperatorio.", "Transoperatorio.", "Perioperatorio.", "Postoperatorio."],
    correcta: "C",
    explicacion: "Perioperatorio = todo el proceso: antes (preoperatorio), durante (intraoperatorio) y después (postoperatorio)."
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    origen: "Examen SAS 2025 · P22",
    enunciado: "¿Cómo se llama el accesorio metálico, que se fija a la mesa quirúrgica encima del paciente, y permite separar la zona de anestesia de la zona de intervención o campo quirúrgico?",
    opciones: ["Aparato de anestesia.", "Lámpara quirúrgica.", "Carro de parada.", "Arco de anestesia."],
    correcta: "D",
    explicacion: "El arco de anestesia se fija a la mesa y separa con un paño la zona del anestesista del campo quirúrgico."
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    origen: "Examen SAS 2025 · P28",
    enunciado: "En la Unidad de Agudos de Salud Mental de un hospital, ¿cuál de las siguientes funciones NO corresponde al/la celador/a?",
    opciones: ["Cuidar del entorno ambiental de los pacientes.", "Prevenir agresiones o autolesiones.", "Administrar medicamentos orales.", "Ayudar al aseo personal de los pacientes que lo precisen."],
    correcta: "C",
    explicacion: "Los medicamentos los administra el personal de enfermería, nunca el celador. El celador sí vigila, ayuda en el aseo y previene agresiones."
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    origen: "Examen SAS 2025 aplazado · P24",
    enunciado: "¿Cuál de las siguientes tareas es propia de el/la Celador/a en el Bloque Quirúrgico?",
    opciones: ["Realización de las pruebas diagnósticas provisionales.", "Traslado y preparación de pacientes en la mesa de quirófano.", "Esterilización de los instrumentos quirúrgicos.", "Limpieza y desinfección de las áreas comunes en quirófano."],
    correcta: "B",
    explicacion: "En quirófano el celador traslada al paciente y le ayuda a pasar a la mesa. Esterilizar y hacer pruebas no son tareas suyas."
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    origen: "Examen SAS 2025 aplazado · P26",
    enunciado: "Durante el turno de trabajo en UCI, el/la Celador/a, ¿qué debe de tener controlado para realizar su trabajo?",
    opciones: ["La configuración de las bombas de infusión.", "El material de sondaje vesical.", "El respirador en caso de fallo.", "Las camas, que estén en buen estado, para transportar pacientes."],
    correcta: "D",
    explicacion: "Lo que el celador controla en la UCI son las camas, para que estén en buen estado para los traslados. Bombas, sondas y respiradores son cosa del personal sanitario."
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    origen: "Examen SAS 2025 aplazado · P27",
    enunciado: "Un/a Celador/a de UCI deberá saber:",
    opciones: ["Administrar sedantes a un paciente en caso de necesidad urgente.", "Intubar a los pacientes en caso de necesidad urgente.", "Hacer la reparación de las camas o camillas del servicio.", "Ayudar en los cambios posturales de las pacientes."],
    correcta: "D",
    explicacion: "El celador de UCI ayuda en los cambios posturales. Sedar e intubar es del personal sanitario y reparar camas, de mantenimiento."
  },
  {
    tema: "Quirófano, hospitalización y salud mental",
    origen: "Examen SAS 2025 aplazado · P30",
    enunciado: "¿A quién corresponde realizar las maniobras de contención mecánica a un paciente que actúa de forma violenta en la Unidad de Salud Mental?",
    opciones: ["Al Personal de Seguridad.", "Exclusivamente al Celador de la Unidad.", "Al Personal Sanitario.", "A todo el personal de la Unidad, independientemente de la categoría."],
    correcta: "D",
    explicacion: "Según la plantilla oficial, la contención mecánica es tarea de todo el personal de la unidad, sea cual sea su categoría, siguiendo el protocolo."
  },
  // ===================================================================
  //  FALLECIDOS Y AUTOPSIAS (56 preguntas)
  // ===================================================================
  {
    tema: "Fallecidos y autopsias",
    enunciado: "El término «exitus» en el ámbito hospitalario significa:",
    opciones: ["Traslado a otro hospital", "Fallecimiento del paciente", "Alta voluntaria", "Salida del quirófano"],
    correcta: "B",
    explicacion: "Exitus o éxitus letalis: fallecimiento. (Terminología)"
  },
  {
    tema: "Fallecidos y autopsias",
    enunciado: "¿Quién certifica la muerte de un paciente en el hospital?",
    opciones: ["El celador", "El supervisor de enfermería", "El juez en todos los casos", "El médico"],
    correcta: "D",
    explicacion: "El certificado médico de defunción lo firma un médico. (Certificación de la defunción)"
  },
  {
    tema: "Fallecidos y autopsias",
    enunciado: "El traslado del cadáver al mortuorio corresponde, según el Estatuto de Personal No Sanitario:",
    opciones: ["Al personal de limpieza", "Al celador", "Al TCAE", "A la funeraria dentro del hospital"],
    correcta: "B",
    explicacion: "Corre a cargo de los celadores el traslado de los cadáveres al mortuorio. (EPNS, art. 14.2)"
  },
  {
    tema: "Fallecidos y autopsias",
    enunciado: "En el amortajamiento del paciente fallecido, el celador:",
    opciones: ["Lo realiza en solitario", "Lo realiza la familia", "Ayuda al personal de enfermería", "No participa nunca"],
    correcta: "C",
    explicacion: "Ayuda a las enfermeras o personas encargadas del amortajamiento. (EPNS, art. 14.2)"
  },
  {
    tema: "Fallecidos y autopsias",
    enunciado: "El cadáver no debe trasladarse al mortuorio hasta que:",
    opciones: ["Llegue la funeraria", "Lo autorice el celador", "Pasen 48 horas", "El médico haya constatado y certificado el fallecimiento"],
    correcta: "D",
    explicacion: "Primero la constatación médica de la muerte. (Procedimiento ante un fallecimiento)"
  },
  {
    tema: "Fallecidos y autopsias",
    enunciado: "Durante el amortajamiento, el cadáver se coloca normalmente en:",
    opciones: ["Posición fetal", "Decúbito prono", "Posición de Fowler", "Decúbito supino, alineado, con los brazos a lo largo del cuerpo"],
    correcta: "D",
    explicacion: "Posición anatómica antes de que aparezca la rigidez. (Amortajamiento)"
  },
  {
    tema: "Fallecidos y autopsias",
    enunciado: "El amortajamiento conviene hacerlo:",
    opciones: ["Al día siguiente", "24 horas después del fallecimiento", "Antes de que aparezca la rigidez cadavérica", "Cuando llegue la funeraria"],
    correcta: "C",
    explicacion: "Con la rigidez es más difícil colocar el cuerpo. (Amortajamiento)"
  },
  {
    tema: "Fallecidos y autopsias",
    enunciado: "La rigidez cadavérica (rigor mortis) suele comenzar:",
    opciones: ["A los 3 días", "A las pocas horas del fallecimiento (aproximadamente entre 2 y 4 horas)", "A las 24 horas", "Inmediatamente"],
    correcta: "B",
    explicacion: "Empieza en la mandíbula y se generaliza en unas 12 horas. (Signos de muerte)"
  },
  {
    tema: "Fallecidos y autopsias",
    enunciado: "Las livideces cadavéricas son:",
    opciones: ["Úlceras por presión", "Manchas violáceas por acumulación de sangre en las zonas más bajas del cuerpo", "Signos de infección", "Heridas producidas en el traslado"],
    correcta: "B",
    explicacion: "La sangre se acumula por gravedad en las zonas declives. (Signos de muerte)"
  },
  {
    tema: "Fallecidos y autopsias",
    enunciado: "El enfriamiento del cadáver (algor mortis) se produce a un ritmo aproximado de:",
    opciones: ["No se enfría hasta las 24 horas", "10 °C en la primera hora", "Alrededor de 1 °C por hora en las primeras horas", "5 °C por hora"],
    correcta: "C",
    explicacion: "Varía según la temperatura ambiente y la ropa. (Signos de muerte)"
  },
  {
    tema: "Fallecidos y autopsias",
    enunciado: "Durante el amortajamiento, ¿quién retira las sondas, vías y drenajes?",
    opciones: ["La familia", "La funeraria", "El celador", "El personal de enfermería, salvo en casos judiciales"],
    correcta: "D",
    explicacion: "Es una tarea de enfermería. (Amortajamiento)"
  },
  {
    tema: "Fallecidos y autopsias",
    enunciado: "Si la muerte es violenta o sospechosa de criminalidad (caso judicial):",
    opciones: ["No se retiran sondas, vías ni objetos, y se espera a las instrucciones de la autoridad judicial", "Se amortaja normalmente", "Se entrega el cuerpo a la familia de inmediato", "Se lava el cadáver para que la familia lo vea"],
    correcta: "A",
    explicacion: "El cuerpo puede ser una prueba; no se manipula. (Procedimiento en casos judiciales)"
  },
  {
    tema: "Fallecidos y autopsias",
    enunciado: "El cadáver debe identificarse antes de trasladarlo al mortuorio mediante:",
    opciones: ["Una etiqueta o pulsera identificativa, según el protocolo", "Su DNI en la mano", "Nada, ya se sabe quién es", "El nombre escrito en la sábana con bolígrafo"],
    correcta: "A",
    explicacion: "La identificación inequívoca evita errores graves. (Procedimiento ante un fallecimiento)"
  },
  {
    tema: "Fallecidos y autopsias",
    enunciado: "Los objetos personales del paciente fallecido:",
    opciones: ["Se dejan en la habitación", "Se los queda el celador", "Se tiran", "Se entregan a la familia dejando constancia, según el protocolo"],
    correcta: "D",
    explicacion: "Con registro de la entrega. (Procedimiento ante un fallecimiento)"
  },
  {
    tema: "Fallecidos y autopsias",
    enunciado: "El traslado del cadáver al mortuorio debe hacerse:",
    opciones: ["Por el vestíbulo principal", "En silla de ruedas", "Descubierto", "Cubierto completamente, por circuitos poco transitados y en ascensores de servicio cuando sea posible"],
    correcta: "D",
    explicacion: "Discreción y respeto a la dignidad del fallecido. (Traslado de cadáveres)"
  },
  {
    tema: "Fallecidos y autopsias",
    enunciado: "Para el traslado del cadáver dentro del hospital se utiliza normalmente:",
    opciones: ["La cama del paciente con otros pacientes en la habitación", "Una silla de ruedas", "Un carro de lencería", "Una camilla o carro específico, con el cuerpo cubierto o dentro de una bolsa"],
    correcta: "D",
    explicacion: "Medio adecuado y cubierto. (Traslado de cadáveres)"
  },
  {
    tema: "Fallecidos y autopsias",
    enunciado: "Si el paciente fallecido estaba en aislamiento por una infección, el celador:",
    opciones: ["Mantiene las mismas medidas de protección durante la manipulación y el traslado", "Ya no necesita protección", "Usa solo una bata de papel", "Lo traslada sin bolsa"],
    correcta: "A",
    explicacion: "El riesgo de transmisión persiste. (Traslado de cadáveres)"
  },
  {
    tema: "Fallecidos y autopsias",
    enunciado: "El mortuorio del hospital es:",
    opciones: ["El tanatorio municipal", "La capilla", "La sala de autopsias exclusivamente", "La dependencia donde se depositan los cadáveres hasta su entrega a la funeraria o su traslado"],
    correcta: "D",
    explicacion: "Suele tener cámaras frigoríficas. (Mortuorio)"
  },
  {
    tema: "Fallecidos y autopsias",
    enunciado: "Los cadáveres en el mortuorio se conservan en:",
    opciones: ["El almacén general", "Cámaras frigoríficas", "La sala de espera", "Una habitación sin refrigeración"],
    correcta: "B",
    explicacion: "El frío retrasa la descomposición. (Mortuorio)"
  },
  {
    tema: "Fallecidos y autopsias",
    enunciado: "La entrada y salida de cadáveres del mortuorio debe:",
    opciones: ["No registrarse", "Registrarse según el procedimiento del centro", "Comunicarse solo a la familia", "Registrarse solo si hay autopsia"],
    correcta: "B",
    explicacion: "Control y trazabilidad. (Mortuorio)"
  },
  {
    tema: "Fallecidos y autopsias",
    enunciado: "La entrega del cadáver a la empresa funeraria se realiza:",
    opciones: ["A cualquier persona que lo pida", "Solo de noche", "Sin comprobar nada", "Comprobando la identidad del cadáver y la documentación necesaria, según el protocolo"],
    correcta: "D",
    explicacion: "Comprobar identidad y documentación evita errores. (Mortuorio)"
  },
  {
    tema: "Fallecidos y autopsias",
    enunciado: "La autopsia clínica tiene como finalidad:",
    opciones: ["Investigar un delito", "Cobrar un seguro", "Preparar el cadáver para el velatorio", "Conocer o confirmar la causa de la muerte y estudiar la enfermedad con fines diagnósticos y científicos"],
    correcta: "D",
    explicacion: "La clínica es médica; la judicial investiga delitos o muertes violentas. (Ley 29/1980, de autopsias clínicas)"
  },
  {
    tema: "Fallecidos y autopsias",
    enunciado: "La autopsia judicial (o médico-legal) la ordena:",
    opciones: ["El juez", "El gerente del hospital", "El médico de la planta", "La familia"],
    correcta: "A",
    explicacion: "Se practica en casos de muerte violenta o sospechosa. (Autopsias judiciales)"
  },
  {
    tema: "Fallecidos y autopsias",
    enunciado: "La autopsia judicial la realiza:",
    opciones: ["El anatomopatólogo en todo caso", "El celador", "El médico de familia", "El médico forense"],
    correcta: "D",
    explicacion: "En Galicia, a través del Instituto de Medicina Legal (IMELGA). (Autopsias judiciales)"
  },
  {
    tema: "Fallecidos y autopsias",
    enunciado: "La norma que regula las autopsias clínicas en España es:",
    opciones: ["La Ley 41/2002", "La Ley 29/1980, de autopsias clínicas, desarrollada por el Real Decreto 2230/1982", "La Ley 14/1986, General de Sanidad", "La Ley 55/2003"],
    correcta: "B",
    explicacion: "Regula los requisitos de las autopsias clínicas. (Ley 29/1980; RD 2230/1982)"
  },
  {
    tema: "Fallecidos y autopsias",
    enunciado: "En la sala de autopsias, el celador ayuda:",
    opciones: ["En las funciones auxiliares que no requieran hacer uso de instrumental sobre el cadáver", "Tomando muestras", "Realizando la apertura del cadáver", "Extrayendo órganos"],
    correcta: "A",
    explicacion: "Nunca usa instrumental sobre el cadáver. (EPNS, art. 14.2)"
  },
  {
    tema: "Fallecidos y autopsias",
    enunciado: "Una función del celador en la sala de autopsias es:",
    opciones: ["Redactar el informe", "Realizar las incisiones", "Trasladar el cadáver a la mesa de autopsias y ayudar a movilizarlo", "Pesar los órganos"],
    correcta: "C",
    explicacion: "Traslados y movilización. (Funciones del celador en autopsias)"
  },
  {
    tema: "Fallecidos y autopsias",
    enunciado: "En la sala de autopsias, el celador debe utilizar como protección:",
    opciones: ["Guantes, bata impermeable, mascarilla y protección ocular", "Solo guantes", "Ninguna protección especial", "Solo calzas"],
    correcta: "A",
    explicacion: "Riesgo biológico y de salpicaduras. (Prevención de riesgos)"
  },
  {
    tema: "Fallecidos y autopsias",
    enunciado: "Las piezas o muestras obtenidas en una autopsia se trasladan al laboratorio:",
    opciones: ["Sin identificar", "Correctamente identificadas y en recipientes cerrados", "En bolsas abiertas", "En la mano"],
    correcta: "B",
    explicacion: "Identificación y seguridad biológica. (Funciones del celador en autopsias)"
  },
  {
    tema: "Fallecidos y autopsias",
    enunciado: "El traslado del cadáver desde la planta hasta la sala de autopsias corresponde:",
    opciones: ["Al celador", "Al anatomopatólogo", "Al juez", "A la familia"],
    correcta: "A",
    explicacion: "Es un traslado de cadáver más. (Funciones del celador en autopsias)"
  },
  {
    tema: "Fallecidos y autopsias",
    enunciado: "Cuando fallece un paciente, ¿quién informa a la familia del fallecimiento y sus circunstancias?",
    opciones: ["El vigilante de seguridad", "El celador", "El médico", "El administrativo de admisión"],
    correcta: "C",
    explicacion: "La información clínica corresponde al médico. (Procedimiento ante un fallecimiento)"
  },
  {
    tema: "Fallecidos y autopsias",
    enunciado: "Ante una familia que acaba de perder a un ser querido, el celador debe:",
    opciones: ["Meterles prisa para liberar la habitación", "Evitar hablarles", "Darles detalles médicos", "Mostrar respeto, discreción y empatía, facilitando un lugar tranquilo si es posible"],
    correcta: "D",
    explicacion: "Trato humano en un momento difícil. (Atención a familiares)"
  },
  {
    tema: "Fallecidos y autopsias",
    enunciado: "Si un paciente fallece en una habitación compartida, se debe:",
    opciones: ["Dejar el cuerpo descubierto", "Preservar la intimidad del fallecido y del otro paciente (cortina, biombo) y trasladar el cuerpo cuanto antes tras los trámites", "No hacer nada especial", "Trasladar antes al otro paciente sin explicación"],
    correcta: "B",
    explicacion: "Respeto a ambos pacientes. (Procedimiento ante un fallecimiento)"
  },
  {
    tema: "Fallecidos y autopsias",
    enunciado: "La habitación tras el fallecimiento de un paciente debe:",
    opciones: ["Cerrarse durante una semana", "Ocuparse inmediatamente", "Limpiarse y desinfectarse antes de que ingrese otro paciente", "Desinfectarse solo si era infeccioso"],
    correcta: "C",
    explicacion: "Limpieza terminal tras el alta o el fallecimiento. (Limpieza hospitalaria)"
  },
  {
    tema: "Fallecidos y autopsias",
    enunciado: "Los ojos y la boca del cadáver durante el amortajamiento:",
    opciones: ["Se cierran", "Se tapan con esparadrapo siempre", "No se tocan", "Se dejan abiertos"],
    correcta: "A",
    explicacion: "Mejora la presentación del cuerpo para la familia. (Amortajamiento)"
  },
  {
    tema: "Fallecidos y autopsias",
    enunciado: "La dentadura postiza del fallecido, según la práctica habitual:",
    opciones: ["Se la queda el hospital", "Se tira", "Se coloca en la boca si es posible, o se entrega a la familia, según el protocolo", "Se guarda en el mortuorio para siempre"],
    correcta: "C",
    explicacion: "Mejora el aspecto del rostro. (Amortajamiento)"
  },
  {
    tema: "Fallecidos y autopsias",
    enunciado: "El sudario o la bolsa de cadáver se utiliza para:",
    opciones: ["Recoger la ropa del fallecido", "Envolver el cuerpo para su traslado y conservación", "Transportar los órganos", "Cubrir la camilla vacía"],
    correcta: "B",
    explicacion: "Envolver y proteger el cuerpo. (Amortajamiento)"
  },
  {
    tema: "Fallecidos y autopsias",
    enunciado: "La donación de órganos de un fallecido:",
    opciones: ["No existe en Galicia", "La decide el celador", "La autoriza el juez siempre", "La coordina el equipo de trasplantes del hospital"],
    correcta: "D",
    explicacion: "El celador solo colabora en los traslados que se le indiquen. (Donación y trasplantes)"
  },
  {
    tema: "Fallecidos y autopsias",
    enunciado: "En caso de muerte encefálica de un posible donante, el paciente:",
    opciones: ["Se mantiene con soporte en la UCI hasta la extracción, según decida el equipo de trasplantes", "Se entrega a la funeraria", "Se lleva a la sala de autopsias", "Se traslada al mortuorio inmediatamente"],
    correcta: "A",
    explicacion: "El soporte mantiene los órganos viables. (Donación y trasplantes)"
  },
  {
    tema: "Fallecidos y autopsias",
    enunciado: "Los restos humanos procedentes de una amputación se trasladan:",
    opciones: ["A la familia en una bolsa", "Con la basura común", "Identificados y según el protocolo del centro y la normativa de policía sanitaria mortuoria", "Al mortuorio sin identificar"],
    correcta: "C",
    explicacion: "Requieren tratamiento específico. (Sanidad mortuoria (Galicia: Decreto 129/2023))"
  },
  {
    tema: "Fallecidos y autopsias",
    enunciado: "En Galicia, la norma que regula la policía sanitaria mortuoria es:",
    opciones: ["La Ley 3/2001", "La Ley 8/2008", "El Decreto 129/2023", "El Decreto 206/2005"],
    correcta: "C",
    explicacion: "Decreto 129/2023, de 31 de agosto, de sanidad mortuoria de Galicia, en vigor desde el 18/10/2023. Sustituye al Decreto 151/2014. Regula cadáveres, traslados, tanatorios y restos humanos."
  },
  {
    tema: "Fallecidos y autopsias",
    enunciado: "El acceso a la sala de autopsias y al mortuorio debe estar:",
    opciones: ["Abierto a las familias en todo momento", "Restringido al personal autorizado", "Sin ningún control", "Abierto al público"],
    correcta: "B",
    explicacion: "Zona restringida. (Mortuorio)"
  },
  {
    tema: "Fallecidos y autopsias",
    enunciado: "Tras una autopsia, el celador puede colaborar en:",
    opciones: ["La firma del certificado", "La redacción del informe", "El traslado del cadáver de vuelta al mortuorio", "El cierre de las incisiones"],
    correcta: "C",
    explicacion: "Traslados, sin instrumental. Ojo: en el examen del Sergas de 2024 (E105) también se dio por función del celador volver a amortajar el cadáver al terminar la autopsia. (Funciones del celador en autopsias)"
  },
  {
    tema: "Fallecidos y autopsias",
    enunciado: "Antes de manipular un cadáver, el celador debe:",
    opciones: ["Firmar el certificado", "Ponerse guantes y el equipo de protección adecuado", "No usar protección", "Lavar el cadáver"],
    correcta: "B",
    explicacion: "Precauciones estándar también con cadáveres. (Prevención de riesgos)"
  },
  {
    tema: "Fallecidos y autopsias",
    enunciado: "Si al trasladar un cadáver un familiar pide verlo en el pasillo, el celador:",
    opciones: ["Le enseña el cuerpo en el pasillo", "Le dice que vaya a la funeraria", "Se niega sin dar explicaciones", "Le acompaña a un lugar adecuado y lo consulta con el responsable, evitando hacerlo en zonas públicas"],
    correcta: "D",
    explicacion: "Respeto y discreción; se busca un espacio adecuado. (Atención a familiares)"
  },
  {
    tema: "Fallecidos y autopsias",
    origen: "Examen 2024 · Específico E17",
    enunciado: "Señale la temperatura a la que tiene que estar la cámara de refrigeración para la conservación de un cadáver:",
    opciones: ["Entre -3 °C y 5 °C.", "Entre -2 °C y 6 °C.", "Entre -2 °C y 5 °C.", "Entre -2 °C y 4 °C."],
    correcta: "C",
    explicacion: "Art. 3.y del Decreto 129/2023 de sanidad mortuoria de Galicia: la refrigeración se hace a una temperatura entre -2 °C y 5 °C. La congelación, a -18 °C o menos."
  },
  {
    tema: "Fallecidos y autopsias",
    origen: "Examen 2024 · Específico E20",
    enunciado: "Lo que queda del cuerpo humano, terminados los fenómenos de putrefacción, una vez transcurridos los cinco años siguientes a la muerte, se denomina:",
    opciones: ["Restos cadavéricos.", "Restos humanos de entidad suficiente.", "Cadáver.", "Restos óseos."],
    correcta: "A",
    explicacion: "Pasados cinco años desde la muerte y terminada la putrefacción, se habla de restos cadavéricos."
  },
  {
    tema: "Fallecidos y autopsias",
    origen: "Examen 2024 · Específico E24",
    enunciado: "Una persona fallecida por viruela, ¿a qué grupo pertenece según la clasificación sanitaria de los cadáveres?",
    opciones: ["Grupo I.", "Grupo II.", "Grupo III.", "Ninguna es correcta."],
    correcta: "A",
    explicacion: "El grupo I incluye a los fallecidos por enfermedades infecciosas de especial riesgo, como la viruela."
  },
  {
    tema: "Fallecidos y autopsias",
    origen: "Examen 2024 · Específico E38",
    enunciado: "¿Qué instrumento no se usa en una sala de autopsias?",
    opciones: ["Escalpelo.", "Costótomo.", "Sonda acanalada.", "Todos se usan en una sala de autopsias."],
    correcta: "D",
    explicacion: "Escalpelo, costótomo (para cortar costillas) y sonda acanalada se usan todos en las autopsias."
  },
  {
    tema: "Fallecidos y autopsias",
    origen: "Examen 2024 · Específico E71",
    enunciado: "A.S.V. trabaja como celadora en la sala de autopsias. De las siguientes tareas, indique cuál no realizará:",
    opciones: ["Instrumentar al médico durante la realización de la autopsia.", "Colocar el cadáver en la mesa y quitarle la mortaja si fuese necesario.", "Introducir en botes herméticos los restos cadavéricos que le indiquen.", "Realizará todas las anteriores."],
    correcta: "D",
    explicacion: "Según la respuesta oficial, el celador de autopsias realiza todas esas tareas. Ojo: el art. 14.2 le prohíbe usar instrumental sobre el cadáver. Pasarle el instrumental al médico (instrumentar) no es usarlo él, pero la pregunta es discutible."
  },
  {
    tema: "Fallecidos y autopsias",
    origen: "Examen 2024 · Específico E84",
    enunciado: "J.M.T. empieza a trabajar hoy como celador auxiliar de autopsias. Con carácter general, ¿cuál no es una característica de la sala de autopsias?",
    opciones: ["Dispone de mecanismos antirretorno.", "Posee un sistema de aspiración.", "Tiene refrigeradores con capacidad para dos cadáveres por cada cien camas de hospitalización.", "Está habilitada con extractores de aire directos al exterior."],
    correcta: "C",
    explicacion: "Según la respuesta oficial, la proporción de dos cadáveres por cada cien camas no es una característica de la sala de autopsias."
  },
  {
    tema: "Fallecidos y autopsias",
    origen: "Examen 2024 · Específico E103",
    enunciado: "La celadora de la unidad de cuidados paliativos está ayudando a preparar un cadáver para llevarlo al mortuorio. Un familiar comenta que le van a realizar una conservación química. Indique la respuesta incorrecta:",
    opciones: ["Será obligatoria cuando el cadáver vaya a ser expuesto en un lugar público hasta un máximo de 72 horas.", "Puede realizarla un profesional graduado en Medicina.", "Se realiza en salas de tanatopraxia.", "Se puede efectuar una vez transcurridas 8 horas desde el fallecimiento."],
    correcta: "A",
    explicacion: "Art. 10.c del Decreto 129/2023: la conservación transitoria es obligatoria cuando el cadáver se expone en un lugar público hasta un máximo de 48 horas, no 72. Lo de las 8 horas es correcto (art. 8.1)."
  },
  {
    tema: "Fallecidos y autopsias",
    origen: "Examen 2024 · Específico E105",
    enunciado: "Al finalizar una autopsia clínica, el médico le indica que amortaje el cadáver. ¿Cuál será su forma correcta de proceder?",
    opciones: ["Avisará al encargado de turno para que localice al enfermero encargado.", "El celador ayudará a los enfermeros o personas encargadas a amortajar a los enfermos fallecidos. Por lo tanto, no es función del celador.", "En el mortuorio amortaja el anatomopatólogo. El celador ayudaría en la movilización.", "Todas son incorrectas."],
    correcta: "D",
    explicacion: "Fíjate en el lugar. En la planta, enfermería amortaja y el celador ayuda (art. 14.2 del Estatuto de 1971). Pero aquí la escena es la sala de autopsias: al terminar la autopsia, el celador recompone el cadáver y lo vuelve a amortajar. Por eso todas las opciones son incorrectas; la B es la trampa, porque aplica la regla de la planta."
  },
  {
    tema: "Fallecidos y autopsias",
    origen: "Examen 2024 · Específico E108 (reserva)",
    enunciado: "Se dispone a preparar un cadáver para una autopsia y observa que tiene manchas cutáneas de color rojo violáceo. Marque la respuesta correcta:",
    opciones: ["Su lugar de aparición depende de la posición del cadáver.", "Este proceso se denomina algor mortis.", "Es un fenómeno cadavérico tardío.", "Se inicia con una mancha verde."],
    correcta: "A",
    explicacion: "Son las livideces (livor mortis): aparecen pronto y en las zonas más bajas según la posición del cadáver. El algor mortis es el enfriamiento y la mancha verde es de la putrefacción."
  },
  {
    tema: "Fallecidos y autopsias",
    origen: "Examen SAS 2025 · P32",
    enunciado: "Cuando un paciente fallece en el hospital, ¿cómo se denomina al conjunto de atenciones que se presta a la persona fallecida para su posterior traslado al mortuorio o al tanatorio?",
    opciones: ["Rigor mortis.", "Tanatopsia.", "Tanatología.", "Cuidados post mortem."],
    correcta: "D",
    explicacion: "Los cuidados post mortem son las atenciones al fallecido antes de llevarlo al mortuorio. Rigor mortis es la rigidez del cadáver."
  },
  {
    tema: "Fallecidos y autopsias",
    origen: "Examen SAS 2025 aplazado · P31",
    enunciado: "La limpieza de la mesa y de la Sala de Autopsia corresponde a:",
    opciones: ["Los Celadores/as.", "El Personal de Limpieza.", "La mesa al Celador/a, y la Sala al Personal de Limpieza.", "La Sala al Celador/a, y la mesa al Personal de Limpieza."],
    correcta: "A",
    explicacion: "Según la plantilla oficial, la limpieza de la mesa y de la sala de autopsias corresponde a los celadores."
  },
  // ===================================================================
  //  SUMINISTROS Y ALMACÉN (68 preguntas)
  // ===================================================================
  {
    tema: "Suministros y almacén",
    enunciado: "Los suministros externos de una institución sanitaria son:",
    opciones: ["Los que se envían a otros hospitales", "Los que llegan de los proveedores al centro", "Los que el almacén distribuye a las unidades", "Los que los pacientes traen de casa"],
    correcta: "B",
    explicacion: "Externo: proveedor → centro. Interno: almacén → unidades. (Suministros)"
  },
  {
    tema: "Suministros y almacén",
    enunciado: "Los suministros internos son:",
    opciones: ["Los que llegan de los proveedores", "Los que llegan a la farmacia desde laboratorios", "Las compras por internet", "Los que el almacén del centro distribuye a los distintos servicios y unidades"],
    correcta: "D",
    explicacion: "Distribución dentro del centro. (Suministros)"
  },
  {
    tema: "Suministros y almacén",
    enunciado: "La adquisición de bienes y suministros por parte del Servicio Gallego de Salud se rige por:",
    opciones: ["El Estatuto Marco", "El Código de Comercio", "La Ley 14/1986, General de Sanidad", "La Ley 9/2017, de Contratos del Sector Público"],
    correcta: "D",
    explicacion: "Las administraciones compran mediante contratación pública. (Ley 9/2017, de Contratos del Sector Público)"
  },
  {
    tema: "Suministros y almacén",
    enunciado: "El documento que acompaña a la mercancía cuando la entrega el proveedor y que acredita la entrega es:",
    opciones: ["La factura", "El albarán", "El presupuesto", "El vale interno"],
    correcta: "B",
    explicacion: "El albarán detalla lo entregado; la factura es el documento de cobro. (Recepción de mercancías)"
  },
  {
    tema: "Suministros y almacén",
    enunciado: "Al recibir una mercancía, lo primero que debe comprobarse es:",
    opciones: ["Que lo recibido coincide con el albarán y con el pedido (cantidad, referencia y estado)", "El precio de la factura", "El nombre del transportista", "La hora de llegada"],
    correcta: "A",
    explicacion: "Comprobación cuantitativa y cualitativa. (Recepción de mercancías)"
  },
  {
    tema: "Suministros y almacén",
    enunciado: "Si al recibir la mercancía se detecta que un bulto llega dañado, se debe:",
    opciones: ["Devolverlo sin dejar constancia", "Anotar la incidencia en el albarán antes de firmarlo y comunicarlo", "Tirar el bulto", "Firmar sin decir nada"],
    correcta: "B",
    explicacion: "La firma sin reservas da por buena la entrega. (Recepción de mercancías)"
  },
  {
    tema: "Suministros y almacén",
    enunciado: "En la recepción de mercancías, los productos que necesitan refrigeración deben:",
    opciones: ["Abrirse para comprobar su temperatura", "Guardarse con el resto de productos", "Dejarse para el final", "Colocarse en primer lugar en las cámaras o frigoríficos para no romper la cadena de frío"],
    correcta: "D",
    explicacion: "La cadena de frío no puede interrumpirse. (Recepción de mercancías)"
  },
  {
    tema: "Suministros y almacén",
    enunciado: "Al recibir mercancía, también se comprueba:",
    opciones: ["El horario del proveedor", "El color del camión", "La fecha de caducidad y el estado de los envases", "La marca del palé"],
    correcta: "C",
    explicacion: "Productos caducados o dañados no se aceptan. (Recepción de mercancías)"
  },
  {
    tema: "Suministros y almacén",
    enunciado: "El método FIFO de gestión de almacén significa:",
    opciones: ["Lo primero que entra es lo primero que sale", "Lo más caro sale primero", "Lo último que entra es lo primero que sale", "Lo más pesado sale primero"],
    correcta: "A",
    explicacion: "First In, First Out. (Organización del almacén)"
  },
  {
    tema: "Suministros y almacén",
    enunciado: "El método FEFO significa:",
    opciones: ["Lo que está más alto sale primero", "Lo más barato sale primero", "Lo primero que entra es lo último que sale", "Lo primero que caduca es lo primero que sale"],
    correcta: "D",
    explicacion: "First Expired, First Out. Muy importante con productos sanitarios y medicamentos. (Organización del almacén)"
  },
  {
    tema: "Suministros y almacén",
    enunciado: "Para aplicar correctamente el FIFO o el FEFO, los productos nuevos se colocan:",
    opciones: ["Detrás de los que ya había (o donde salgan después)", "En otro almacén", "Delante de los antiguos", "Encima de los antiguos"],
    correcta: "A",
    explicacion: "Así se consumen antes los antiguos o próximos a caducar. (Organización del almacén)"
  },
  {
    tema: "Suministros y almacén",
    enunciado: "En el almacén, los productos más pesados se colocan:",
    opciones: ["En las estanterías altas", "En cualquier lugar", "En las estanterías bajas", "Colgados"],
    correcta: "C",
    explicacion: "Por seguridad y para facilitar su manipulación. (Organización del almacén)"
  },
  {
    tema: "Suministros y almacén",
    enunciado: "Los productos de mayor rotación (los que más se usan) deben ubicarse:",
    opciones: ["En las estanterías más altas", "En las zonas más accesibles, cerca de la zona de salida", "En el fondo del almacén", "En otro almacén"],
    correcta: "B",
    explicacion: "Reduce desplazamientos y tiempos. (Organización del almacén)"
  },
  {
    tema: "Suministros y almacén",
    enunciado: "La mercancía en el almacén no debe apoyarse directamente:",
    opciones: ["En los armarios", "En el suelo; se colocan sobre palés o estanterías", "En las estanterías", "En los palés"],
    correcta: "B",
    explicacion: "Por higiene, humedad y limpieza. (Organización del almacén)"
  },
  {
    tema: "Suministros y almacén",
    enunciado: "El material estéril debe almacenarse:",
    opciones: ["En zonas de paso", "Junto a los productos de limpieza", "En un lugar limpio, seco, cerrado y protegido, sin dañar el envoltorio", "En el suelo"],
    correcta: "C",
    explicacion: "Si el envoltorio se daña o se moja, pierde la esterilidad. (Organización del almacén)"
  },
  {
    tema: "Suministros y almacén",
    enunciado: "Los productos inflamables del almacén deben:",
    opciones: ["Guardarse en la zona de recepción", "Mezclarse con el resto", "Guardarse separados, en zonas o armarios específicos", "Colocarse junto a las fuentes de calor"],
    correcta: "C",
    explicacion: "Prevención de incendios. (Organización del almacén)"
  },
  {
    tema: "Suministros y almacén",
    enunciado: "El stock mínimo o de seguridad es:",
    opciones: ["La cantidad que se pide cada mes", "El producto que no se usa", "La cantidad máxima que cabe en el almacén", "La cantidad mínima de un producto que debe haber para evitar quedarse sin existencias"],
    correcta: "D",
    explicacion: "Margen ante retrasos o aumentos de consumo. (Gestión de existencias)"
  },
  {
    tema: "Suministros y almacén",
    enunciado: "El punto de pedido es:",
    opciones: ["El nivel de existencias en el que hay que hacer un nuevo pedido", "El lugar donde se recibe la mercancía", "El stock máximo", "La fecha de caducidad"],
    correcta: "A",
    explicacion: "Cuando se alcanza, se pide para no bajar del stock de seguridad. (Gestión de existencias)"
  },
  {
    tema: "Suministros y almacén",
    enunciado: "El stock máximo es:",
    opciones: ["La cantidad mínima", "El consumo diario", "El precio máximo", "La cantidad máxima de un producto que conviene tener almacenada"],
    correcta: "D",
    explicacion: "Evita el exceso de almacenamiento, caducidades y coste inmovilizado. (Gestión de existencias)"
  },
  {
    tema: "Suministros y almacén",
    enunciado: "El inventario es:",
    opciones: ["La factura del mes", "La lista de proveedores", "El recuento y la relación detallada de las existencias del almacén en un momento dado", "El plan de compras anual"],
    correcta: "C",
    explicacion: "Permite comprobar que las existencias reales coinciden con las registradas. (Gestión de existencias)"
  },
  {
    tema: "Suministros y almacén",
    enunciado: "El inventario permanente consiste en:",
    opciones: ["Contar el almacén una vez al año", "No registrar nada", "Hacer un recuento cada hora", "Registrar de forma continua todas las entradas y salidas, de modo que se conocen las existencias en cada momento"],
    correcta: "D",
    explicacion: "Se apoya en sistemas informáticos. (Gestión de existencias)"
  },
  {
    tema: "Suministros y almacén",
    enunciado: "El inventario periódico o físico consiste en:",
    opciones: ["Revisar las facturas", "Contar las existencias reales en fechas determinadas", "Registrar cada movimiento en tiempo real", "Pedir mercancía cada mes"],
    correcta: "B",
    explicacion: "El celador puede colaborar en estos recuentos. (Gestión de existencias)"
  },
  {
    tema: "Suministros y almacén",
    enunciado: "En la clasificación ABC de existencias, los productos del grupo A son:",
    opciones: ["Productos sin movimiento", "Pocos productos que suponen la mayor parte del valor", "Productos caducados", "Muchos productos de poco valor"],
    correcta: "B",
    explicacion: "Se controlan con más detalle porque concentran el valor. (Gestión de existencias)"
  },
  {
    tema: "Suministros y almacén",
    enunciado: "El sistema de doble cajón para reponer material en las unidades consiste en:",
    opciones: ["Dos compartimentos con el mismo material; cuando se vacía el primero, se usa el segundo y se pide la reposición del vacío", "Pedir siempre el doble", "Tener dos cerraduras", "Guardar el material en dos almacenes"],
    correcta: "A",
    explicacion: "Evita roturas de stock en las unidades. (Distribución de pedidos)"
  },
  {
    tema: "Suministros y almacén",
    enunciado: "El sistema de reposición por pacto (o stock pactado) consiste en:",
    opciones: ["Acordar con cada unidad una cantidad fija de cada producto, que el almacén repone periódicamente hasta ese nivel", "Que el almacén decida sin consultar", "Que cada unidad pida lo que quiera cuando quiera", "Comprar directamente al proveedor"],
    correcta: "A",
    explicacion: "Se repone hasta el nivel pactado. (Distribución de pedidos)"
  },
  {
    tema: "Suministros y almacén",
    enunciado: "El sistema de carros de intercambio consiste en:",
    opciones: ["Usar un carro por paciente", "Cambiar los carros de limpieza", "Sustituir el carro con el material gastado por otro carro completo preparado en el almacén", "Intercambiar material entre plantas"],
    correcta: "C",
    explicacion: "Muy usado en ropa y material fungible. (Distribución de pedidos)"
  },
  {
    tema: "Suministros y almacén",
    enunciado: "Las zonas habituales de un almacén son:",
    opciones: ["Consulta, sala de espera y recepción", "Recepción, almacenamiento, preparación de pedidos y expedición", "Cocina y lencería", "Quirófano, UCI y planta"],
    correcta: "B",
    explicacion: "Recorrido lógico de la mercancía. (Organización del almacén)"
  },
  {
    tema: "Suministros y almacén",
    enunciado: "La preparación de pedidos en el almacén (picking) consiste en:",
    opciones: ["Hacer el inventario anual", "Recoger de las estanterías los productos solicitados por cada unidad", "Recibir la mercancía del proveedor", "Pagar a los proveedores"],
    correcta: "B",
    explicacion: "Preparación de lo que se va a enviar. (Distribución de pedidos)"
  },
  {
    tema: "Suministros y almacén",
    enunciado: "El sistema de ubicación fija en un almacén consiste en:",
    opciones: ["Cambiar los productos de sitio cada semana", "No ordenar los productos", "Colocar cada producto en el primer hueco libre", "Asignar a cada producto un lugar determinado y siempre el mismo"],
    correcta: "D",
    explicacion: "Facilita encontrar los productos. (Organización del almacén)"
  },
  {
    tema: "Suministros y almacén",
    enunciado: "El sistema de ubicación caótica (o de hueco libre) consiste en:",
    opciones: ["No registrar la ubicación", "Colocar el producto en el primer hueco libre, registrando dónde está", "Tirar los productos sin orden", "Colocar cada producto siempre en el mismo lugar"],
    correcta: "B",
    explicacion: "Aprovecha mejor el espacio, pero exige un buen registro informático. (Organización del almacén)"
  },
  {
    tema: "Suministros y almacén",
    enunciado: "Una función del celador en el almacén es:",
    opciones: ["Cargar, descargar, colocar y transportar la mercancía a las unidades", "Decidir qué se compra", "Firmar los contratos de suministro", "Negociar los precios con los proveedores"],
    correcta: "A",
    explicacion: "Tareas de manipulación y distribución. (Funciones del celador en el almacén)"
  },
  {
    tema: "Suministros y almacén",
    enunciado: "El vale o documento de pedido interno sirve para:",
    opciones: ["Pagar al proveedor", "Dar de baja productos caducados", "Que las unidades soliciten material al almacén", "Registrar la entrada de pacientes"],
    correcta: "C",
    explicacion: "Documento de solicitud interna. (Distribución de pedidos)"
  },
  {
    tema: "Suministros y almacén",
    enunciado: "Los productos caducados encontrados en el almacén o en una unidad deben:",
    opciones: ["Mezclarse con los nuevos", "Usarse primero", "Retirarse y comunicarse para su baja, según el procedimiento", "Ignorarse"],
    correcta: "C",
    explicacion: "Nunca se utilizan productos caducados. (Gestión de existencias)"
  },
  {
    tema: "Suministros y almacén",
    enunciado: "La transpaleta es:",
    opciones: ["Una estantería", "Un carro de lencería", "Un equipo para levantar y desplazar palés", "Un tipo de camilla"],
    correcta: "C",
    explicacion: "Manual o eléctrica. Requiere formación para su uso. (Equipos de almacén)"
  },
  {
    tema: "Suministros y almacén",
    enunciado: "Al manipular cajas pesadas en el almacén, el celador debe:",
    opciones: ["Aplicar las normas de manipulación manual de cargas y usar medios mecánicos cuando sea posible", "Lanzar las cajas a las estanterías altas", "Cargar todo lo que pueda de una vez", "Levantar las cajas con la espalda doblada"],
    correcta: "A",
    explicacion: "Prevención de lesiones dorsolumbares. (RD 487/1997)"
  },
  {
    tema: "Suministros y almacén",
    enunciado: "Para alcanzar productos en estanterías altas, el celador debe usar:",
    opciones: ["Una silla con ruedas", "Las propias baldas de la estantería como escalones", "Una caja vacía", "Una escalera adecuada y estable"],
    correcta: "D",
    explicacion: "Prevención de caídas. (Prevención de riesgos)"
  },
  {
    tema: "Suministros y almacén",
    enunciado: "Las estanterías del almacén deben:",
    opciones: ["Apoyarse unas en otras sin fijar", "Cargarse al máximo", "Moverse con frecuencia", "Estar bien ancladas y no sobrecargarse por encima de su capacidad"],
    correcta: "D",
    explicacion: "Prevención de vuelcos y derrumbes. (Prevención de riesgos)"
  },
  {
    tema: "Suministros y almacén",
    enunciado: "El material fungible es:",
    opciones: ["Los equipos de electromedicina", "El que se consume o se desecha con su uso (gasas, jeringas, guantes)", "Los edificios", "El mobiliario"],
    correcta: "B",
    explicacion: "Material de un solo uso o que se gasta. (Tipos de material)"
  },
  {
    tema: "Suministros y almacén",
    enunciado: "El material inventariable es:",
    opciones: ["Los guantes desechables", "Las gasas", "Los sueros", "El que tiene una duración prolongada y se controla de forma individual (camas, equipos, mobiliario)"],
    correcta: "D",
    explicacion: "Bienes duraderos con número de inventario. (Tipos de material)"
  },
  {
    tema: "Suministros y almacén",
    enunciado: "La rotura de stock significa:",
    opciones: ["Que hay exceso de existencias", "Que se han roto los envases", "Que no hay existencias de un producto cuando se necesita", "Que el almacén se ha caído"],
    correcta: "C",
    explicacion: "Lo que se trata de evitar con el stock de seguridad y el punto de pedido. (Gestión de existencias)"
  },
  {
    tema: "Suministros y almacén",
    enunciado: "La rotación de un producto indica:",
    opciones: ["La temperatura de conservación", "El giro del palé", "El número de veces que se cambia de estantería", "La frecuencia con que se consume y se renueva en el almacén"],
    correcta: "D",
    explicacion: "Alta rotación: se consume rápido. (Gestión de existencias)"
  },
  {
    tema: "Suministros y almacén",
    enunciado: "El celador que transporta el pedido a una unidad debe entregarlo:",
    opciones: ["En la sala de espera", "En la habitación de un paciente", "En el pasillo sin avisar", "A la persona responsable de la unidad, que comprueba lo recibido"],
    correcta: "D",
    explicacion: "Entrega con comprobación. (Distribución de pedidos)"
  },
  {
    tema: "Suministros y almacén",
    enunciado: "Los medicamentos estupefacientes:",
    opciones: ["Se dejan en el almacén general", "Los distribuye el celador sin control", "Se guardan en las habitaciones", "Tienen un circuito especial de control y no se distribuyen como el material general"],
    correcta: "D",
    explicacion: "Custodia especial en farmacia y registro. (Farmacia (relación con el tema 7))"
  },
  {
    tema: "Suministros y almacén",
    enunciado: "La mercancía en el almacén debe mantener una separación:",
    opciones: ["Ninguna", "Respecto del suelo, de las paredes y del techo, para facilitar la limpieza y la ventilación", "Solo de la puerta", "Solo del techo"],
    correcta: "B",
    explicacion: "Higiene, ventilación y seguridad. (Organización del almacén)"
  },
  {
    tema: "Suministros y almacén",
    enunciado: "Las condiciones ambientales del almacén (temperatura, humedad, luz) deben:",
    opciones: ["Ser las del exterior", "Controlarse según lo que exijan los productos almacenados", "Ser siempre de calor", "No tener importancia"],
    correcta: "B",
    explicacion: "Algunos productos se deterioran con el calor, la humedad o la luz. (Organización del almacén)"
  },
  {
    tema: "Suministros y almacén",
    enunciado: "Si un pedido llega incompleto, se debe:",
    opciones: ["Rechazarlo entero sin anotar nada", "Firmar como completo", "Anotarlo en el albarán y comunicarlo para que se complete o se reclame", "Esperar a que el proveedor se dé cuenta"],
    correcta: "C",
    explicacion: "Constancia documental de la incidencia. (Recepción de mercancías)"
  },
  {
    tema: "Suministros y almacén",
    enunciado: "Los carros de transporte de material limpio y de material sucio deben:",
    opciones: ["Ser distintos y no mezclarse", "Ser el mismo carro", "Lavarse una vez al año", "Guardarse juntos"],
    correcta: "A",
    explicacion: "Evita la contaminación cruzada. (Distribución de pedidos)"
  },
  {
    tema: "Suministros y almacén",
    enunciado: "La etiqueta o código de barras de los productos sirve para:",
    opciones: ["Decorar", "Calcular el peso", "Indicar el color", "Identificarlos y registrar sus movimientos de forma rápida"],
    correcta: "D",
    explicacion: "Facilita el control informático. (Gestión de existencias)"
  },
  {
    tema: "Suministros y almacén",
    enunciado: "La gestión informatizada del almacén permite:",
    opciones: ["Prescindir de los proveedores", "Eliminar la necesidad de almacén", "Conocer las existencias, los consumos y generar pedidos de forma automática", "Dejar de recibir mercancía"],
    correcta: "C",
    explicacion: "Control en tiempo real. (Gestión de existencias)"
  },
  {
    tema: "Suministros y almacén",
    enunciado: "Las devoluciones de material de las unidades al almacén deben:",
    opciones: ["Dejarse en la puerta del almacén", "Hacerse sin registrar", "Tirarse a la basura", "Hacerse con el documento correspondiente para su registro"],
    correcta: "D",
    explicacion: "Trazabilidad del material. (Distribución de pedidos)"
  },
  {
    tema: "Suministros y almacén",
    enunciado: "En la recepción de mercancías, ¿quién firma el albarán?",
    opciones: ["Cualquier trabajador del hospital", "El proveedor", "La persona autorizada del almacén tras comprobar la mercancía", "El transportista"],
    correcta: "C",
    explicacion: "La firma acredita la conformidad. (Recepción de mercancías)"
  },
  {
    tema: "Suministros y almacén",
    enunciado: "Los pasillos del almacén deben:",
    opciones: ["Estar a oscuras", "Mantenerse libres de obstáculos y con anchura suficiente para los equipos de transporte", "Usarse para almacenar mercancía", "Estar cerrados"],
    correcta: "B",
    explicacion: "Seguridad y circulación. (Prevención de riesgos)"
  },
  {
    tema: "Suministros y almacén",
    enunciado: "El sistema de distribución de medicamentos en dosis unitarias lo gestiona:",
    opciones: ["La planta", "El almacén general", "El celador", "El servicio de farmacia"],
    correcta: "D",
    explicacion: "Lo prepara farmacia; el celador puede transportar los carros. (Farmacia (relación con el tema 7))"
  },
  {
    tema: "Suministros y almacén",
    enunciado: "El sistema de reposición de material por consumo consiste en:",
    opciones: ["Que la unidad compre directamente", "No reponer", "Reponer lo que la unidad ha gastado, según registro o recuento", "Enviar lo mismo cada día sin comprobar"],
    correcta: "C",
    explicacion: "Se repone lo consumido. (Distribución de pedidos)"
  },
  {
    tema: "Suministros y almacén",
    origen: "Examen 2024 · Específico E6",
    enunciado: "Señale la opción incorrecta en relación con los contratos de suministros:",
    opciones: ["La baja temeraria genera dudas sobre el cumplimiento del contrato.", "El material en depósito está inventariado.", "El plazo de aprovisionamiento es el tiempo que tarda el proveedor en suministrar un producto.", "El stock de seguridad es el que se constituye para hacer frente a situaciones excepcionales."],
    correcta: "B",
    explicacion: "El material en depósito sigue siendo del proveedor hasta que se usa, por eso no está inventariado por el centro."
  },
  {
    tema: "Suministros y almacén",
    origen: "Examen 2024 · Específico E21",
    enunciado: "Señale la opción incorrecta según las Instrucciones Generales de Recepción de la Plataforma Logística Sanitaria de Galicia, Versión 2019.02:",
    opciones: ["Toda expedición que no presente albarán del proveedor no se recogerá.", "Cuando de un único pedido se realicen varias entregas en el mismo transporte, se recomienda incluir toda la mercancía en un único albarán.", "A un pedido le corresponde un único albarán de entrega.", "Se recomienda que no se repita el mismo número de albarán en un año."],
    correcta: "C",
    explicacion: "Es incorrecta: un pedido puede tener varios albaranes si se entrega en varias veces."
  },
  {
    tema: "Suministros y almacén",
    origen: "Examen 2024 · Específico E34",
    enunciado: "Señale la opción correcta respecto al inventario permanente:",
    opciones: ["El inventario permanente se hace una vez al año.", "El recuento del inventario permanente lo hace el celador de suministros.", "El inventario permanente se hace mediante una aplicación informática.", "El inventario permanente se realiza sobre pequeñas cantidades de producto."],
    correcta: "C",
    explicacion: "El inventario permanente registra cada entrada y salida en el momento en que se produce, con una aplicación informática; así se conocen las existencias en todo momento. El que se hace una vez al año es el inventario periódico."
  },
  {
    tema: "Suministros y almacén",
    origen: "Examen 2024 · Específico E49",
    enunciado: "Señale la opción correcta en relación con el uso de la transpaleta:",
    opciones: ["Si se encuentra en un pasillo con gente caminando, usted tiene preferencia por llevar la transpaleta.", "Entra en el ascensor tirando de la transpaleta.", "Al bajar una rampa bastante empinada, se colocará detrás de la transpaleta.", "Solo cuando la carga descanse sobre el chasis se puede conducir la transpaleta."],
    correcta: "D",
    explicacion: "La transpaleta solo se conduce con la carga bien asentada sobre el chasis (las horquillas). Según la plantilla oficial, las demás opciones no son correctas: tampoco la de entrar en el ascensor tirando de ella."
  },
  {
    tema: "Suministros y almacén",
    origen: "Examen 2024 · Específico E50",
    enunciado: "Señale la opción incorrecta respecto a la jaula de transporte:",
    opciones: ["El celador sale primero del ascensor.", "Para cruzar una puerta de vaivén abierta hay que tirar de la jaula.", "Cuando se sube una rampa inclinada se va detrás de la jaula empujando.", "Como norma general, las jaulas se empujan."],
    correcta: "B",
    explicacion: "Es incorrecta: según la respuesta oficial, la puerta de vaivén no se cruza tirando de la jaula."
  },
  {
    tema: "Suministros y almacén",
    origen: "Examen 2024 · Específico E57",
    enunciado: "Tiene que subir un material de tránsito a un almacén periférico que no está gestionado por el almacén central. ¿En qué consistiría su trabajo?",
    opciones: ["Lo coloca en su lugar correspondiente dentro del almacén periférico.", "Se lo da en mano a la persona responsable de la unidad.", "Lo coloca en su lugar correspondiente dentro del almacén periférico y pide que le firmen conforme lo han recibido.", "Se lo da en mano a alguien del servicio, que tendrá que firmar conforme lo ha recibido."],
    correcta: "D",
    explicacion: "El material de tránsito se entrega en mano a alguien del servicio, que firma que lo ha recibido."
  },
  {
    tema: "Suministros y almacén",
    origen: "Examen 2024 · Específico E61",
    enunciado: "Le encargan llevar una jaula de transporte con material para el laboratorio de microbiología. ¿Cuál de las siguientes acciones es correcta?",
    opciones: ["Al entrar en el ascensor, meter la jaula primero.", "Bajar la rampa detrás de la jaula, tirando de ella para frenarla.", "Negarse a hacerlo solo porque tiene que subir una rampa y es obligatorio hacerlo entre dos personas.", "Empujar la jaula para salir del ascensor."],
    correcta: "A",
    explicacion: "Al ascensor se entra con la jaula primero. Para salir, el celador sale delante tirando de ella."
  },
  {
    tema: "Suministros y almacén",
    origen: "Examen 2024 · Específico E67",
    enunciado: "Estando de celador en suministros, le toca recibir un pedido. Señale la opción incorrecta en cuanto al trabajo que debe realizar:",
    opciones: ["Comprobar el pedido.", "Comprobar el albarán.", "Comprobar que coinciden los precios del albarán con los del pedido del centro.", "Sellar el albarán al proveedor, en caso de que todo esté correcto."],
    correcta: "C",
    explicacion: "Al recibir un pedido el celador comprueba la mercancía y el albarán; revisar los precios no es su tarea."
  },
  {
    tema: "Suministros y almacén",
    origen: "Examen 2024 · Específico E82",
    enunciado: "La supervisora hizo un pedido urgente de un artículo que se necesitaba en planta. ¿Quién debería subirlo?",
    opciones: ["El celador de la estafeta.", "El celador de planta, por ser un pedido urgente.", "El celador del correo interno, cuando haga el recorrido.", "El celador que está en el retén, porque no es función de ninguno de los anteriores."],
    correcta: "A",
    explicacion: "Según la respuesta oficial, los pedidos urgentes los sube el celador de la estafeta."
  },
  {
    tema: "Suministros y almacén",
    origen: "Examen SAS 2025 · P25",
    enunciado: "¿Cuál de las siguientes tareas en el almacén de fungible, no corresponden al/la celador/a?",
    opciones: ["Recepcionar el suministro mediante cotejo del albarán de entrega.", "Cargar y descargar los productos del almacén.", "Distribuir los productos en las estanterías.", "Hacer los pedidos del material al proveedor."],
    correcta: "D",
    explicacion: "Los pedidos al proveedor los hace el personal de gestión de suministros. El celador recibe, carga, descarga y coloca."
  },
  {
    tema: "Suministros y almacén",
    origen: "Examen SAS 2025 · P26",
    enunciado: "¿Cómo se denomina al conjunto de operaciones que se llevan a cabo para conocer las cantidades existentes en el almacén de cada producto en un momento determinado?",
    opciones: ["Principio de Pareto.", "FIFO.", "LIFO.", "Inventario."],
    correcta: "D",
    explicacion: "El inventario es el recuento de las existencias de cada producto en un momento dado."
  },
  {
    tema: "Suministros y almacén",
    origen: "Examen SAS 2025 · P27",
    enunciado: "¿Cuáles son las fases de la recepción de la mercancía en el almacén por el/la celador/a?",
    opciones: ["Etiquetado y guardado.", "Dictamen, devolución y entrada a rotos.", "Control de unidades, control de lotes y devoluciones al proveedor.", "Control de pedido, control de bultos y transportista."],
    correcta: "D",
    explicacion: "Según la plantilla oficial, las fases de recepción son: control del pedido, control de bultos y control del transportista."
  },
  {
    tema: "Suministros y almacén",
    origen: "Examen SAS 2025 · P49",
    enunciado: "La Clasificación de Pareto, ordena los artículos en las estanterías en clase \"A\",\"B\" y \"C\". Si decimos que los artículos que más se consumen, se guardarán de forma más próximos y de fácil acceso, ¿de qué clase serían estos artículos?",
    opciones: ["Clase \"A\".", "Clase \"B\".", "Clase \"C\".", "Los artículos no tienen clasificación Pareto."],
    correcta: "A",
    explicacion: "Clasificación de Pareto (ABC): los artículos A son los que más se mueven y se colocan en el sitio más cercano y accesible."
  },
  {
    tema: "Suministros y almacén",
    origen: "Examen SAS 2025 aplazado · P29",
    enunciado: "Señale, cuál de los siguientes artículos de almacén, NO es considerado material no sanitario:",
    opciones: ["Mobiliario y enseres de oficina.", "Material de papelería.", "Material de informática.", "Material fungible."],
    correcta: "D",
    explicacion: "El material fungible (gasas, jeringas…) es material sanitario. Mobiliario, papelería e informática son material no sanitario."
  },
  // ===================================================================
  //  FARMACIA, ESTERILIZACIÓN Y REPROGRAFÍA (97 preguntas)
  // ===================================================================
  {
    tema: "Farmacia, esterilización y reprografía",
    enunciado: "El sistema de distribución de medicamentos en dosis unitarias (SDMDU) consiste en:",
    opciones: ["Que farmacia prepare la medicación de cada paciente, normalmente para 24 horas, en cajetines individuales identificados", "Que el paciente traiga su medicación de casa", "Que cada planta tenga un gran almacén de medicamentos", "Que el celador prepare la medicación"],
    correcta: "A",
    explicacion: "Reduce errores y facilita el control. El celador transporta los carros. (Farmacia hospitalaria)"
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    enunciado: "En el sistema de dosis unitarias, la función del celador es:",
    opciones: ["Rellenar los cajetines", "Administrar la medicación", "Revisar las prescripciones", "Transportar los carros de medicación entre farmacia y las unidades"],
    correcta: "D",
    explicacion: "Solo traslado, nunca manipulación del contenido. (Funciones del celador en farmacia)"
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    enunciado: "El botiquín o stock de planta es:",
    opciones: ["La medicación que traen los pacientes", "Una reserva de medicamentos de uso frecuente o urgente en la unidad, que farmacia repone", "Un almacén de material de limpieza", "El armario personal del celador"],
    correcta: "B",
    explicacion: "Se repone periódicamente desde farmacia. (Farmacia hospitalaria)"
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    enunciado: "Los medicamentos estupefacientes en el hospital:",
    opciones: ["Se dejan en la mesilla del paciente", "Puede transportarlos cualquiera sin registro", "Se guardan con el resto de medicación sin control", "Se custodian bajo llave y su movimiento se registra de forma especial"],
    correcta: "D",
    explicacion: "Control especial y registro de entradas y salidas. (Farmacia hospitalaria)"
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    enunciado: "Los medicamentos termolábiles son:",
    opciones: ["Los que se toman en caliente", "Los que deben conservarse refrigerados (normalmente entre 2 y 8 °C)", "Los que deben calentarse", "Los que no caducan"],
    correcta: "B",
    explicacion: "Vacunas, insulinas, algunos antibióticos... (Farmacia hospitalaria)"
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    enunciado: "Al transportar medicamentos termolábiles, el celador debe:",
    opciones: ["Dejarlos en el pasillo hasta que alguien los recoja", "Meterlos en el congelador", "Mantener la cadena de frío usando contenedores isotérmicos y entregarlos sin demora", "Llevarlos en la mano"],
    correcta: "C",
    explicacion: "Una rotura de la cadena de frío puede inutilizarlos. (Farmacia hospitalaria)"
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    enunciado: "Los medicamentos citostáticos (de quimioterapia) deben transportarse:",
    opciones: ["Sin ninguna precaución", "En contenedores cerrados, rígidos y señalizados, con material para actuar ante un derrame", "Junto con la comida", "En bolsas de plástico normales"],
    correcta: "B",
    explicacion: "Son peligrosos para quien los manipula. (Farmacia hospitalaria; riesgo químico)"
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    enunciado: "Si durante el transporte se rompe un envase de citostáticos, el celador debe:",
    opciones: ["Aislar la zona, avisar y seguir el protocolo de derrames, usando el kit específico y el equipo de protección", "Limpiarlo con una fregona normal", "Recogerlo con las manos", "Dejarlo y seguir"],
    correcta: "A",
    explicacion: "Hay protocolo y kit de derrames de citostáticos. (Riesgo químico)"
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    enunciado: "Los residuos de medicamentos citostáticos se eliminan:",
    opciones: ["En contenedores específicos para residuos citotóxicos", "En el contenedor de papel", "En la basura normal", "Por el desagüe"],
    correcta: "A",
    explicacion: "Residuos peligrosos con contenedor propio. (Gestión de residuos sanitarios)"
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    enunciado: "La norma que regula los medicamentos en España es:",
    opciones: ["El Real Decreto Legislativo 1/2015, texto refundido de la Ley de garantías y uso racional de los medicamentos y productos sanitarios", "La Ley 31/1995", "La Ley 55/2003", "La Ley 14/1986"],
    correcta: "A",
    explicacion: "Ley de garantías y uso racional de los medicamentos. (RDL 1/2015)"
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    enunciado: "La historia clínica, según la Ley 3/2001 de Galicia, es:",
    opciones: ["Un documento que se entrega al paciente al alta", "Un documento propiedad del celador", "El informe de alta únicamente", "El conjunto de documentos sobre el proceso asistencial de cada paciente, con la identificación de los profesionales que intervienen"],
    correcta: "D",
    explicacion: "Es un documento confidencial. (Ley 3/2001 de Galicia)"
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    enunciado: "Al trasladar historias clínicas, el celador debe:",
    opciones: ["Dejarlas en cualquier mostrador", "Llevarlas protegidas (en carpetas o sobres cerrados) y entregarlas a la persona responsable", "Entregarlas al paciente", "Llevarlas abiertas para leer los nombres"],
    correcta: "B",
    explicacion: "Confidencialidad durante todo el traslado. (Ley 3/2001 de Galicia; protección de datos)"
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    enunciado: "El archivo de historias clínicas es:",
    opciones: ["El servicio donde se custodian y desde donde se distribuyen las historias clínicas", "Una habitación cualquiera", "El despacho del médico", "El mortuorio"],
    correcta: "A",
    explicacion: "El celador puede colaborar en el traslado de historias entre el archivo y los servicios. (Documentación clínica)"
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    enunciado: "Las muestras biológicas que traslada el celador al laboratorio deben ir:",
    opciones: ["En el bolsillo", "En recipientes cerrados, identificados, en posición vertical y con la petición separada de la muestra", "En la mano y destapadas", "Mezcladas con la documentación"],
    correcta: "B",
    explicacion: "Seguridad biológica y para evitar errores. (Traslado de muestras)"
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    enunciado: "Las muestras biológicas urgentes:",
    opciones: ["Se envían con el correo interno ordinario", "Se dejan para el final", "Se guardan en el frigorífico de planta", "Se trasladan con prioridad y se entregan directamente al personal del laboratorio"],
    correcta: "D",
    explicacion: "La urgencia condiciona el tratamiento del paciente. (Traslado de muestras)"
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    enunciado: "El tubo neumático en un hospital sirve para:",
    opciones: ["Llevar comida", "Ventilar las habitaciones", "Enviar muestras, documentos o medicación de forma rápida entre servicios", "Transportar pacientes"],
    correcta: "C",
    explicacion: "Sistema de cápsulas impulsadas por aire. (Traslado de documentos y objetos)"
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    enunciado: "Al recoger sangre del banco de sangre para un paciente, el celador debe:",
    opciones: ["Calentarla en el microondas", "Transportarla en el contenedor adecuado y entregarla directamente al personal de enfermería responsable", "Guardarla en el frigorífico de la planta", "Dejarla en el control sin avisar"],
    correcta: "B",
    explicacion: "La transfusión requiere comprobaciones de seguridad; la entrega es directa. (Traslado de hemoderivados)"
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    enunciado: "La esterilización es:",
    opciones: ["El proceso que destruye todas las formas de vida microbiana, incluidas las esporas", "El proceso que elimina solo las bacterias patógenas", "La aplicación de antisépticos sobre la piel", "El proceso que elimina solo la suciedad visible"],
    correcta: "A",
    explicacion: "Es el nivel máximo de eliminación de microorganismos. (Esterilización)"
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    enunciado: "La desinfección es:",
    opciones: ["La eliminación de la mayoría de los microorganismos patógenos de los objetos inanimados, pero no necesariamente de las esporas", "La limpieza con agua", "La aplicación de antisépticos sobre la piel", "La destrucción de todas las formas de vida"],
    correcta: "A",
    explicacion: "Las esporas resisten muchos desinfectantes. (Esterilización)"
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    enunciado: "La antisepsia es:",
    opciones: ["La limpieza del suelo", "La esterilización del instrumental", "La aplicación de sustancias para eliminar o inhibir microorganismos sobre tejidos vivos (piel, mucosas)", "La desinfección de superficies inertes"],
    correcta: "C",
    explicacion: "Antiséptico: sobre tejidos vivos. Desinfectante: sobre objetos. (Esterilización)"
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    enunciado: "La asepsia es:",
    opciones: ["El lavado de manos con jabón", "La eliminación de esporas", "El conjunto de procedimientos para evitar que lleguen microorganismos a una zona o un material", "La limpieza de suelos"],
    correcta: "C",
    explicacion: "Técnica aséptica: prevenir la contaminación. (Esterilización)"
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    enunciado: "El paso previo e imprescindible a cualquier desinfección o esterilización es:",
    opciones: ["La caducidad", "La limpieza", "El secado al sol", "El empaquetado"],
    correcta: "B",
    explicacion: "La suciedad protege a los microorganismos e impide que actúe el agente esterilizante. (Esterilización)"
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    enunciado: "El método de esterilización más utilizado en los hospitales es:",
    opciones: ["El óxido de etileno", "La ebullición", "Las radiaciones ionizantes", "El vapor de agua a presión (autoclave)"],
    correcta: "D",
    explicacion: "Es eficaz, rápido, barato y no tóxico. (Métodos de esterilización)"
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    enunciado: "El autoclave esteriliza mediante:",
    opciones: ["Calor seco", "Radiaciones", "Gas tóxico", "Calor húmedo (vapor de agua a presión)"],
    correcta: "D",
    explicacion: "Vapor saturado a presión. (Métodos de esterilización)"
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    enunciado: "Ciclos habituales del autoclave de vapor son:",
    opciones: ["200 °C durante 2 horas", "100 °C durante 1 minuto", "121 °C durante unos 15-20 minutos o 134 °C durante unos 3-5 minutos", "50 °C durante 1 hora"],
    correcta: "C",
    explicacion: "A más temperatura, menos tiempo. (Métodos de esterilización)"
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    enunciado: "El Poupinel o estufa esteriliza mediante:",
    opciones: ["Vapor de agua", "Óxido de etileno", "Calor seco", "Plasma"],
    correcta: "C",
    explicacion: "Calor seco a 160-180 °C durante más tiempo. Hoy se usa poco. (Métodos de esterilización)"
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    enunciado: "El óxido de etileno se utiliza para esterilizar:",
    opciones: ["Material sensible al calor (termosensible), a baja temperatura", "Líquidos", "Instrumental metálico de forma preferente", "Ropa quirúrgica exclusivamente"],
    correcta: "A",
    explicacion: "Es tóxico y necesita un tiempo de aireación posterior. (Métodos de esterilización)"
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    enunciado: "El material esterilizado con óxido de etileno necesita:",
    opciones: ["Nada especial", "Exponerse al sol", "Un periodo de aireación para eliminar los restos de gas, que es tóxico", "Enfriarse en agua"],
    correcta: "C",
    explicacion: "Los residuos del gas son tóxicos. (Métodos de esterilización)"
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    enunciado: "El plasma de peróxido de hidrógeno es un método de esterilización:",
    opciones: ["Por radiación gamma", "A baja temperatura, para material termosensible, sin residuos tóxicos", "Por vapor", "Por calor seco"],
    correcta: "B",
    explicacion: "Alternativa al óxido de etileno. (Métodos de esterilización)"
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    enunciado: "Las radiaciones ionizantes (rayos gamma) se utilizan para esterilizar:",
    opciones: ["Ropa de cama", "Material desechable a escala industrial", "Pacientes", "Instrumental en el hospital a diario"],
    correcta: "B",
    explicacion: "Se aplican en la industria; el material llega ya estéril. (Métodos de esterilización)"
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    enunciado: "Los indicadores químicos de esterilización (como las cintas que cambian de color):",
    opciones: ["Miden la temperatura exacta", "Sustituyen a los controles biológicos", "Garantizan la esterilidad absoluta", "Indican que el paquete ha pasado por el proceso, pero no garantizan por sí solos la esterilidad"],
    correcta: "D",
    explicacion: "Diferencian lo procesado de lo no procesado. (Controles de esterilización)"
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    enunciado: "Los controles más fiables para comprobar la eficacia de la esterilización son:",
    opciones: ["Los biológicos (con esporas de microorganismos resistentes)", "Los manuales", "Los químicos", "Los visuales"],
    correcta: "A",
    explicacion: "Si las esporas mueren, el proceso ha sido eficaz. (Controles de esterilización)"
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    enunciado: "La prueba de Bowie-Dick sirve para comprobar en el autoclave:",
    opciones: ["El peso de la carga", "Que el aire se elimina correctamente y el vapor penetra bien", "La temperatura del agua de red", "La caducidad del material"],
    correcta: "B",
    explicacion: "Se realiza a diario, con el autoclave vacío, al inicio de la jornada. (Controles de esterilización)"
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    enunciado: "La central de esterilización se organiza en zonas con un circuito:",
    opciones: ["Unidireccional: de la zona sucia a la limpia y de esta a la estéril", "Aleatorio", "De la zona estéril a la sucia", "Circular sin separación"],
    correcta: "A",
    explicacion: "El material nunca vuelve atrás; se evita la contaminación. (Central de esterilización)"
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    enunciado: "En la central de esterilización, la zona sucia es donde:",
    opciones: ["Se almacena el material estéril", "Se recibe y se lava el material usado", "Se esteriliza", "Se empaqueta el material"],
    correcta: "B",
    explicacion: "Recepción y lavado. (Central de esterilización)"
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    enunciado: "El material estéril se transporta desde la central:",
    opciones: ["En bolsas de basura", "En el mismo carro que el sucio", "En la mano", "En carros cerrados y limpios, separados de los del material sucio"],
    correcta: "D",
    explicacion: "Separación limpio-sucio. (Central de esterilización)"
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    enunciado: "Un paquete estéril con el envoltorio roto o mojado:",
    opciones: ["Se considera no estéril y no debe usarse", "Se seca y se usa", "Se puede usar si está dentro de fecha", "Se usa en urgencias"],
    correcta: "A",
    explicacion: "La integridad del envoltorio es imprescindible. (Material estéril)"
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    enunciado: "Según la clasificación de Spaulding, el material crítico es el que:",
    opciones: ["Toca las mucosas", "No toca al paciente", "Toca la piel intacta", "Entra en contacto con tejidos estériles o el sistema vascular, y debe esterilizarse"],
    correcta: "D",
    explicacion: "Ejemplo: instrumental quirúrgico. (Clasificación de Spaulding)"
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    enunciado: "Según la clasificación de Spaulding, el material semicrítico es el que:",
    opciones: ["Entra en contacto con mucosas o piel no intacta, y requiere desinfección de alto nivel", "Penetra en tejidos estériles", "No toca al paciente", "Solo toca la piel intacta"],
    correcta: "A",
    explicacion: "Ejemplo: endoscopios. (Clasificación de Spaulding)"
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    enunciado: "Según la clasificación de Spaulding, el material no crítico es el que:",
    opciones: ["Solo entra en contacto con la piel intacta, y requiere limpieza o desinfección de bajo nivel", "Toca mucosas", "Penetra en tejidos estériles", "Se implanta en el paciente"],
    correcta: "A",
    explicacion: "Ejemplo: fonendoscopio, manguito de tensión. (Clasificación de Spaulding)"
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    enunciado: "Al trasladar material contaminado a la central de esterilización, el celador debe:",
    opciones: ["Llevarlo en la mano", "Mezclarlo con el material limpio", "Usar contenedores o carros cerrados y guantes", "Lavarlo antes él mismo"],
    correcta: "C",
    explicacion: "Prevención del riesgo biológico. (Central de esterilización)"
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    enunciado: "El aseo del paciente por parte del celador está previsto en el Estatuto:",
    opciones: ["Nunca", "Para todos los pacientes", "Excepcionalmente, para enfermos masculinos encamados o que no puedan hacerlo por sí mismos, según indicaciones de la supervisora", "Solo para mujeres"],
    correcta: "C",
    explicacion: "Es una función excepcional. (EPNS, art. 14.2)"
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    enunciado: "En el aseo de un paciente encamado, se comienza por:",
    opciones: ["La cara, y se avanza de las zonas más limpias a las más sucias", "La espalda", "Los genitales", "Los pies"],
    correcta: "A",
    explicacion: "De lo limpio a lo sucio; genitales y zona anal al final. (Higiene del paciente)"
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    enunciado: "Al lavar los ojos del paciente, se hace:",
    opciones: ["Desde el externo hacia el interno", "Desde el ángulo interno hacia el externo", "Con jabón abundante", "Con la misma zona de la esponja para los dos"],
    correcta: "B",
    explicacion: "Se evita arrastrar suciedad hacia el lagrimal; se usa una zona distinta para cada ojo. (Higiene del paciente)"
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    enunciado: "La temperatura del agua para el aseo del paciente debe ser:",
    opciones: ["Templada, aproximadamente entre 37 y 40 °C, comprobándola antes", "La que salga del grifo", "Muy caliente para desinfectar", "Fría"],
    correcta: "A",
    explicacion: "Evita quemaduras y enfriamiento. (Higiene del paciente)"
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    enunciado: "Tras el aseo del paciente, es especialmente importante:",
    opciones: ["Secar bien la piel, sobre todo los pliegues", "Frotar con fuerza", "Aplicar alcohol en todo el cuerpo", "Dejar la piel húmeda"],
    correcta: "A",
    explicacion: "La humedad en los pliegues favorece lesiones e infecciones. (Higiene del paciente)"
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    enunciado: "Durante el aseo del paciente, el agua debe cambiarse:",
    opciones: ["Nunca", "Solo al terminar", "Cuando esté sucia o fría, y siempre antes de lavar los genitales si se va a seguir con otras zonas", "Cada hora"],
    correcta: "C",
    explicacion: "Higiene y comodidad. (Higiene del paciente)"
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    enunciado: "Durante el aseo del paciente, hay que respetar su intimidad:",
    opciones: ["Haciéndolo con la puerta abierta", "Dejándolo descubierto todo el tiempo", "Descubriendo solo la zona que se lava en cada momento y cerrando puertas o cortinas", "Pidiendo a las visitas que miren"],
    correcta: "C",
    explicacion: "Intimidad y evitar el enfriamiento. (Higiene del paciente)"
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    enunciado: "El servicio de reprografía de un hospital se encarga de:",
    opciones: ["Atender a los pacientes", "Fotocopiar, imprimir, encuadernar y reproducir documentos", "Archivar historias clínicas", "Hacer radiografías"],
    correcta: "B",
    explicacion: "Reproducción de documentos. (Reprografía)"
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    enunciado: "Las funciones del celador en reprografía incluyen:",
    opciones: ["Firmar documentos", "Decidir qué documentos se publican", "Manejar las fotocopiadoras y otras máquinas de reproducción, y recoger y entregar los trabajos", "Diseñar folletos"],
    correcta: "C",
    explicacion: "Manejo de equipos y circulación de los trabajos. (Reprografía)"
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    enunciado: "El tamaño de papel DIN A4 mide:",
    opciones: ["297 × 420 mm", "210 × 297 mm", "250 × 353 mm", "148 × 210 mm"],
    correcta: "B",
    explicacion: "A4: 210 × 297 mm. Es el formato estándar de oficina. (Formatos de papel (UNE/DIN))"
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    enunciado: "El tamaño de papel DIN A3 es:",
    opciones: ["El doble del A4 (297 × 420 mm)", "El formato de los sobres", "Igual que el A4", "La mitad del A4"],
    correcta: "A",
    explicacion: "Cada formato A es la mitad del anterior: A3 = 2 × A4; A5 = la mitad del A4. (Formatos de papel (UNE/DIN))"
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    enunciado: "El tamaño de papel DIN A5 es:",
    opciones: ["El doble del A4", "La mitad del A4 (148 × 210 mm)", "Igual que el A3", "Mayor que el A3"],
    correcta: "B",
    explicacion: "A5: 148 × 210 mm. (Formatos de papel (UNE/DIN))"
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    enunciado: "Al fotocopiar documentos con datos de pacientes, el celador debe:",
    opciones: ["Dejar las copias en una bandeja de acceso público", "Hacer copias de más por si acaso", "Leer los documentos", "Mantener su confidencialidad y no dejar copias ni originales olvidados en la máquina"],
    correcta: "D",
    explicacion: "El deber de secreto incluye la reprografía. (Protección de datos)"
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    enunciado: "Las copias defectuosas de documentos con datos personales deben:",
    opciones: ["Tirarse a la papelera normal", "Darse a los pacientes", "Destruirse de forma segura (destructora de papel)", "Reutilizarse como papel de notas"],
    correcta: "C",
    explicacion: "Destrucción confidencial. (Protección de datos)"
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    enunciado: "La encuadernación en espiral consiste en:",
    opciones: ["Grapar las hojas", "Coser las hojas", "Pegar las hojas con cola caliente", "Perforar el borde de las hojas e insertar una espiral de plástico o metal"],
    correcta: "D",
    explicacion: "Permite abrir el documento por completo. (Reprografía)"
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    enunciado: "La guillotina de reprografía sirve para:",
    opciones: ["Cortar papel en grandes cantidades", "Perforar el papel", "Encuadernar", "Plastificar documentos"],
    correcta: "A",
    explicacion: "Debe usarse con las protecciones activadas. (Reprografía)"
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    enunciado: "La plastificadora sirve para:",
    opciones: ["Cortar papel", "Fotocopiar a color", "Proteger documentos con una lámina de plástico mediante calor", "Encuadernar libros"],
    correcta: "C",
    explicacion: "Protección de documentos de uso frecuente. (Reprografía)"
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    enunciado: "Si la fotocopiadora se atasca, el celador debe:",
    opciones: ["Meter la mano sin apagarla", "Golpearla", "Dejarla así para el turno siguiente sin avisar", "Seguir las instrucciones del equipo, apagarlo si es necesario y tener cuidado con las zonas calientes"],
    correcta: "D",
    explicacion: "La zona del fusor está muy caliente. (Reprografía; prevención de riesgos)"
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    enunciado: "El tóner de la fotocopiadora usado debe:",
    opciones: ["Gestionarse como residuo según indique el centro, no en la basura común", "Guardarse en el almacén indefinidamente", "Vaciarse en el lavabo", "Tirarse en la papelera"],
    correcta: "A",
    explicacion: "Se recoge selectivamente para su tratamiento. (Gestión de residuos)"
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    enunciado: "Entre los documentos que el celador traslada habitualmente están:",
    opciones: ["Medicación personal de los pacientes", "Recetas firmadas en blanco", "Historias clínicas, peticiones de pruebas, resultados, correspondencia y documentación administrativa", "Dinero de la cafetería"],
    correcta: "C",
    explicacion: "EPNS art. 14.2: tramitar o conducir documentos, correspondencia u objetos. (Traslado de documentos y objetos)"
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    enunciado: "El correo interno del hospital lo distribuye habitualmente:",
    opciones: ["Los pacientes", "Los proveedores", "El celador", "El personal médico"],
    correcta: "C",
    explicacion: "Circulación interna de documentación. (Traslado de documentos y objetos)"
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    enunciado: "Los resultados de pruebas diagnósticas que traslada el celador:",
    opciones: ["Se pueden leer para informar al paciente", "Se entregan al servicio o persona destinataria, nunca al paciente o a la familia directamente", "Se dejan en la habitación", "Se entregan a la familia que los pida"],
    correcta: "B",
    explicacion: "La información clínica la da el médico. (Protección de datos)"
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    enunciado: "El celador que traslada pruebas de imagen (radiografías) debe:",
    opciones: ["Mirarlas para comprobar que son correctas", "Llevarlas en su sobre y entregarlas al destinatario", "Dejarlas en la sala de espera", "Doblarlas para que ocupen menos"],
    correcta: "B",
    explicacion: "Hoy son en su mayoría digitales, pero aún se manejan algunas físicas. (Traslado de documentos y objetos)"
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    enunciado: "La medicación devuelta de las unidades a farmacia:",
    opciones: ["Se tira a la basura", "Se reparte entre otros pacientes", "Se transporta en el contenedor previsto y se entrega en farmacia", "Se la queda la planta sin control"],
    correcta: "C",
    explicacion: "Farmacia la revisa y gestiona. (Farmacia hospitalaria)"
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    enunciado: "La dispensación de medicamentos a pacientes externos (ambulatorios) en el hospital la realiza:",
    opciones: ["Admisión", "La planta de hospitalización", "El servicio de farmacia hospitalaria", "El celador de puerta"],
    correcta: "C",
    explicacion: "Medicamentos de uso hospitalario para pacientes no ingresados. (Farmacia hospitalaria)"
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    enunciado: "La limpieza del instrumental antes de esterilizarlo:",
    opciones: ["No es necesaria si se esteriliza en autoclave", "Es imprescindible, porque los restos orgánicos impiden que el agente esterilizante actúe", "Es opcional", "Se hace después de esterilizar"],
    correcta: "B",
    explicacion: "Sin limpieza no hay esterilización eficaz. (Esterilización)"
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    enunciado: "La caducidad del material estéril depende principalmente de:",
    opciones: ["El tipo de envoltorio y las condiciones de almacenamiento y manipulación", "El día de la semana", "El peso del paquete", "El color del paquete"],
    correcta: "A",
    explicacion: "La esterilidad se pierde con la manipulación incorrecta, la humedad o la rotura. (Material estéril)"
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    enunciado: "Para el transporte de muestras de anatomía patológica (biopsias), se usan normalmente:",
    opciones: ["Recipientes cerrados con fijador (formol), identificados", "Bolsas de basura", "Recipientes abiertos", "Sobres de papel"],
    correcta: "A",
    explicacion: "El formol es tóxico; el recipiente debe ir bien cerrado. (Traslado de muestras)"
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    enunciado: "El formaldehído (formol) es una sustancia:",
    opciones: ["Que sirve para conservar alimentos", "Inocua", "Que se usa para limpiar suelos", "Tóxica e irritante, por lo que los recipientes deben estar bien cerrados"],
    correcta: "D",
    explicacion: "Se usa para fijar tejidos; exige precauciones. (Riesgo químico)"
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    enunciado: "Las muestras de orina, heces o esputo que traslada el celador deben ir:",
    opciones: ["En la mano", "En recipientes estériles cerrados, identificados y dentro de bolsas con la petición en un compartimento aparte", "En el bolsillo del uniforme", "En vasos de plástico abiertos"],
    correcta: "B",
    explicacion: "Seguridad biológica e identificación. (Traslado de muestras)"
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    enunciado: "El autoclave puede esterilizar:",
    opciones: ["Material óptico delicado", "Instrumental metálico, textiles y material resistente al calor y la humedad", "Plásticos que se deforman con el calor", "Material electrónico sensible"],
    correcta: "B",
    explicacion: "El material termosensible requiere métodos de baja temperatura. (Métodos de esterilización)"
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    enunciado: "La desinfección de alto nivel se aplica, por ejemplo, a:",
    opciones: ["Endoscopios (material semicrítico)", "Mesillas de noche", "Instrumental quirúrgico de cirugía abierta", "Suelos"],
    correcta: "A",
    explicacion: "Material que toca mucosas. (Clasificación de Spaulding)"
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    enunciado: "En la manipulación de material estéril, la regla básica es:",
    opciones: ["Lo estéril se toca sin guantes", "Lo estéril se puede abrir antes de tiempo", "Lo estéril puede tocar cualquier cosa si es rápido", "Lo estéril solo puede tocar lo estéril"],
    correcta: "D",
    explicacion: "El celador no manipula el contenido estéril. (Material estéril)"
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    enunciado: "Los equipos de reprografía deben estar en lugares:",
    opciones: ["Dentro de las habitaciones de pacientes", "Ventilados, porque algunos emiten ozono y calor", "En los quirófanos", "Cerrados y sin ventilación"],
    correcta: "B",
    explicacion: "Las fotocopiadoras láser pueden emitir ozono y partículas. (Reprografía; prevención de riesgos)"
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    enunciado: "El celador recibe en farmacia un pedido para una planta con un medicamento estupefaciente. Debe:",
    opciones: ["Dejarlo en el mostrador de la planta", "Seguir el procedimiento especial del centro (firma, entrega en mano a enfermería) y no dejarlo sin custodia", "Guardarlo en su taquilla", "Entregarlo al paciente"],
    correcta: "B",
    explicacion: "Custodia y entrega controlada. (Farmacia hospitalaria)"
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    enunciado: "La higiene bucal del paciente encamado inconsciente:",
    opciones: ["La realiza el celador habitualmente", "No se hace", "La hace la familia obligatoriamente", "La realiza el personal de enfermería"],
    correcta: "D",
    explicacion: "Es un cuidado de enfermería por el riesgo de aspiración. (Higiene del paciente)"
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    enunciado: "La ropa de cama limpia, una vez en la planta, debe guardarse:",
    opciones: ["En el armario o carro de lencería limpia, cerrado", "En el suelo del pasillo", "En la habitación de un paciente", "Junto a la ropa sucia"],
    correcta: "A",
    explicacion: "Separación limpio-sucio. (Higiene hospitalaria)"
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    enunciado: "El material de un solo uso:",
    opciones: ["Se reutiliza si parece limpio", "Puede reesterilizarse en el autoclave", "No debe reutilizarse ni reesterilizarse", "Se lava y se vuelve a usar"],
    correcta: "C",
    explicacion: "El fabricante no garantiza su seguridad si se reutiliza. (Material sanitario)"
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    origen: "Examen 2024 · Específico E1",
    enunciado: "Los medicamentos que se obtienen mediante técnicas de ingeniería genética se denominan:",
    opciones: ["Radiofármacos.", "Fórmulas magistrales.", "Biotecnológicos.", "Biológicos."],
    correcta: "C",
    explicacion: "Los medicamentos obtenidos por ingeniería genética se llaman biotecnológicos."
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    origen: "Examen 2024 · Específico E2",
    enunciado: "Según su peligrosidad infectiva, el material semicrítico es aquel que:",
    opciones: ["Requiere total asepsia. Es instrumental que temporal o definitivamente va a quedar introducido en el organismo.", "Está rigurosamente limpio y, en lo posible, desinfectado. No está en contacto con cavidades internas del organismo ni con vías de entrada al mismo.", "Debe estar desinfectado. No es imprescindible su esterilización.", "Ninguna es correcta."],
    correcta: "C",
    explicacion: "Material crítico: estéril. Semicrítico: desinfectado, sin necesidad de esterilizar. No crítico: limpio."
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    origen: "Examen 2024 · Específico E3",
    enunciado: "Uno de los siguientes no es uno de los considerados cinco momentos para el lavado de manos:",
    opciones: ["Antes de tocar a un paciente.", "Después de estar expuestos a líquidos corporales.", "Después de realizar una tarea aséptica.", "Después de estar en contacto con el entorno del paciente."],
    correcta: "C",
    explicacion: "Los 5 momentos de la OMS incluyen lavarse ANTES de una tarea aséptica, no después."
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    origen: "Examen 2024 · Específico E7",
    enunciado: "¿Qué orden se debe seguir para colocarse las prendas necesarias en la asepsia quirúrgica cuando se corre riesgo de contaminación por gotas?",
    opciones: ["Calzas, gorro, gafas, bata, guantes, mascarilla.", "Calzas, gorro, mascarilla, gafas, bata, guantes.", "Gorro, calzas, mascarilla, bata, guantes, gafas.", "Gorro, calzas, bata, guantes, mascarilla, gafas."],
    correcta: "B",
    explicacion: "Orden: calzas, gorro, mascarilla, gafas, bata y, por último, guantes."
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    origen: "Examen 2024 · Específico E10",
    enunciado: "En relación con el lavado de manos antiséptico, marque la respuesta correcta:",
    opciones: ["Se realiza antes del aseo de los pacientes.", "Se realizará después de trasladar o manipular muestras biológicas.", "Con este método se reduce sensiblemente la flora bacteriana.", "Todas son correctas."],
    correcta: "C",
    explicacion: "El lavado antiséptico usa un jabón antiséptico y reduce de forma notable la flora bacteriana."
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    origen: "Examen 2024 · Específico E12",
    enunciado: "No es un método químico de esterilización por gas:",
    opciones: ["Óxido de etileno.", "Formaldehído.", "Formol.", "Peróxido de hidrógeno."],
    correcta: "C",
    explicacion: "El formol es formaldehído disuelto en agua, es decir, un líquido, no un gas. (La respuesta oficial se corrigió a la C)."
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    origen: "Examen 2024 · Específico E35",
    enunciado: "Indique cuál no es un elemento básico de una fotocopiadora:",
    opciones: ["Impulsor de imagen.", "Fusor.", "Tambor.", "Lámpara de exposición."],
    correcta: "A",
    explicacion: "Fusor, tambor y lámpara de exposición son piezas básicas de una fotocopiadora; el impulsor de imagen no existe como tal."
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    origen: "Examen 2024 · Específico E42",
    enunciado: "Las zonas de preparación de citostáticos deben reunir una serie de características. Indique la respuesta incorrecta:",
    opciones: ["Están aisladas físicamente del resto del servicio.", "Disponen de recirculación del aire ambiental.", "Las habitaciones deberán tener presión negativa.", "Están equipadas con campana de flujo laminar vertical."],
    correcta: "B",
    explicacion: "En las zonas de citostáticos el aire no se recircula, para no dispersar sustancias tóxicas."
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    origen: "Examen 2024 · Específico E58",
    enunciado: "En la institución en la que trabaja como celador se usa el autoclave para la esterilización del material. Indique la respuesta incorrecta:",
    opciones: ["Los materiales de vidrio se pueden esterilizar en el autoclave.", "Una de sus ventajas es que no contamina ni deja residuos.", "Para la correcta esterilización del material quirúrgico, la temperatura debe ser superior a 120 °C.", "El test de Bowie-Dick nos permite verificar la eficacia de la esterilización."],
    correcta: "D",
    explicacion: "El test de Bowie-Dick comprueba que el aire se elimina y el vapor penetra bien. La eficacia de la esterilización se verifica con indicadores biológicos."
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    origen: "Examen 2024 · Específico E72",
    enunciado: "Nada más empezar su turno de mañana como celador en la planta de Neurología, tiene que ayudar a la TCAE en el aseo de un paciente. Señale la respuesta correcta:",
    opciones: ["Si tiene venoclisis, se debe cubrir la zona con un apósito impermeable.", "El orden del lavado será: enjabonado, aclarado, enjuagado y secado.", "Una vez terminado el aseo, y antes de pasar al siguiente paciente, se le ofrece la cuña.", "La temperatura del agua, al aplicarla al paciente, estará entre 40 °C y 42 °C."],
    correcta: "A",
    explicacion: "La vía venosa (venoclisis) se protege con un apósito impermeable durante el aseo. La cuña se ofrece antes del aseo, no después."
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    origen: "Examen 2024 · Específico E80",
    enunciado: "La supervisora de farmacia le ordena trasladar una fórmula magistral a la 4.ª planta. Marque la respuesta correcta:",
    opciones: ["Realizará la tarea.", "El celador no traslada fórmulas magistrales. Corresponde a la supervisora de la planta ir a recogerla.", "Llamará al encargado de turno para que la lleve o decida a quién manda a recogerla.", "La farmacia de un hospital no prepara fórmulas magistrales."],
    correcta: "A",
    explicacion: "Trasladar medicación y fórmulas magistrales entre servicios es una tarea del celador."
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    origen: "Examen 2024 · Específico E99",
    enunciado: "Le ordenan hacer fotocopias, pero la máquina está estropeada y solo dispone de una pequeña fotocopiadora cuya bandeja no admite un ancho de papel superior a 210 mm. ¿Qué formato de papel puede usar?",
    opciones: ["DIN A4.", "DIN A5.", "DIN A6.", "Todos los anteriores."],
    correcta: "D",
    explicacion: "A4 mide 210 mm de ancho, y A5 y A6 son más estrechos, así que caben todos."
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    origen: "Examen 2024 · Específico E104",
    enunciado: "A.C.R. es celadora en el servicio de farmacia. En el almacén observa que una caja está rotulada como 'medicamentos fotosensibles'. ¿Dónde se guardan este tipo de medicamentos?",
    opciones: ["Son sensibles al calor; por lo tanto, en cámaras frigoríficas.", "En armarios de seguridad a los que solo tienen acceso los farmacéuticos.", "En lugares protegidos de la luz.", "Ninguna es correcta."],
    correcta: "C",
    explicacion: "Fotosensible significa sensible a la luz, así que se guardan protegidos de ella."
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    origen: "Examen 2024 · Específico E107 (reserva)",
    enunciado: "Está haciendo fotocopias y su multifunción muestra un icono con dos círculos pequeños y una línea en zigzag. Señale la respuesta correcta:",
    opciones: ["Reponer el tóner.", "Desatascar la máquina.", "Reiniciar la multifunción.", "Ninguna es correcta."],
    correcta: "B",
    explicacion: "Ese icono (los rodillos con el papel en zigzag) avisa de un atasco de papel."
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    origen: "Examen SAS 2025 · P23",
    enunciado: "¿Cómo se denomina al conjunto de técnicas que garantizan la ausencia de materia séptica o microorganismos infecciosos, tanto en superficie como en profundidad, de los materiales expuestos o de los seres vivos?",
    opciones: ["Asepsia.", "Infección.", "Agentes infecciosos.", "Infestación."],
    correcta: "A",
    explicacion: "Asepsia = ausencia de gérmenes. Es el conjunto de técnicas que la consiguen y la mantienen."
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    origen: "Examen SAS 2025 · P47",
    enunciado: "¿Cuál es la norma reconocida internacionalmente para los sistemas de gestión ambiental?",
    opciones: ["ISO 14001:2015.", "ISO 5001.", "ISO 9000.", "ISO 14001:2020."],
    correcta: "A",
    explicacion: "La ISO 14001 es la norma internacional de gestión ambiental; la versión vigente es la de 2015. (La ISO 9000 es de calidad)."
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    origen: "Examen SAS 2025 · P48",
    enunciado: "¿Qué se entiende por \"valorización de un residuo\"?",
    opciones: ["Todo procedimiento que permita el aprovechamiento de los recursos contenidos en los residuos sin poner en peligro la salud humana y sin utilizar métodos que puedan causar perjuicios al medio ambiente.", "Toda operación consistente en recoger, clasificar, agrupar o preparar residuos para su transporte.", "La transformación de los residuos dentro de un proceso de producción para el compostaje y biometanización.", "Ninguna de las respuestas anteriores es correcta."],
    correcta: "A",
    explicacion: "Valorizar un residuo es aprovechar sus recursos sin dañar la salud ni el medio ambiente (por ejemplo, reciclarlo)."
  },
  {
    tema: "Farmacia, esterilización y reprografía",
    origen: "Examen SAS 2025 aplazado · P49",
    enunciado: "En relación con la gestión de los residuos sanitarios, señale de las siguientes respuestas cuál es la correcta:",
    opciones: ["Tiene como fin garantizar la protección de la salud pública.", "Tiene como fin la defensa del medio ambiente.", "Garantizar y proteger a los trabajadores del sector sanitario.", "Todas las respuestas anteriores son correctas."],
    correcta: "D",
    explicacion: "La gestión de residuos sanitarios protege la salud pública, el medio ambiente y a los trabajadores. Por eso son todas."
  },
  // ===================================================================
  //  URGENCIAS Y AMBULANCIAS (78 preguntas)
  // ===================================================================
  {
    tema: "Urgencias y ambulancias",
    enunciado: "El triaje en un servicio de urgencias consiste en:",
    opciones: ["Asignar la habitación de ingreso", "Atender a los pacientes por orden de llegada", "Clasificar a los pacientes según su gravedad para decidir la prioridad de atención", "Registrar los datos administrativos del paciente"],
    correcta: "C",
    explicacion: "Se atiende primero al más grave, no al que llega antes. (Organización de urgencias)"
  },
  {
    tema: "Urgencias y ambulancias",
    enunciado: "¿Quién realiza habitualmente el triaje en los servicios de urgencias hospitalarios?",
    opciones: ["El celador de puerta", "El personal de enfermería formado en triaje", "El administrativo de admisión", "El vigilante de seguridad"],
    correcta: "B",
    explicacion: "El celador nunca clasifica a los pacientes. (Organización de urgencias)"
  },
  {
    tema: "Urgencias y ambulancias",
    enunciado: "El sistema de triaje utilizado en los hospitales del Sergas es:",
    opciones: ["El sistema por orden alfabético", "El triaje de Glasgow", "El sistema START", "El Sistema de Triaje Manchester"],
    correcta: "D",
    explicacion: "Manchester: cinco niveles de prioridad identificados por colores. (Organización de urgencias)"
  },
  {
    tema: "Urgencias y ambulancias",
    enunciado: "En el Sistema de Triaje Manchester, el color rojo significa:",
    opciones: ["Urgente, en 60 minutos", "No urgente", "Atención inmediata", "Normal, en 120 minutos"],
    correcta: "C",
    explicacion: "Rojo: inmediato; naranja: muy urgente; amarillo: urgente; verde: normal; azul: no urgente. (Triaje Manchester)"
  },
  {
    tema: "Urgencias y ambulancias",
    enunciado: "En el Sistema de Triaje Manchester, el color azul corresponde a:",
    opciones: ["Los casos no urgentes", "Los casos muy urgentes", "Los fallecidos", "Los casos de atención inmediata"],
    correcta: "A",
    explicacion: "El azul es el nivel de menor prioridad. (Triaje Manchester)"
  },
  {
    tema: "Urgencias y ambulancias",
    enunciado: "¿Cuántos niveles de prioridad tiene el Sistema de Triaje Manchester?",
    opciones: ["3", "4", "5", "6"],
    correcta: "C",
    explicacion: "Cinco niveles: rojo, naranja, amarillo, verde y azul. (Triaje Manchester)"
  },
  {
    tema: "Urgencias y ambulancias",
    enunciado: "En el Sistema Manchester, el color naranja corresponde a:",
    opciones: ["Inmediato", "Normal", "No urgente", "Muy urgente (atención en unos 10 minutos)"],
    correcta: "D",
    explicacion: "Segundo nivel de prioridad. (Triaje Manchester)"
  },
  {
    tema: "Urgencias y ambulancias",
    enunciado: "La función principal del celador en la entrada de urgencias es:",
    opciones: ["Clasificar a los pacientes por gravedad", "Decidir qué paciente pasa primero", "Recibir a los pacientes, facilitarles silla o camilla, acompañarlos a admisión o triaje y trasladarlos dentro del servicio", "Tomar las constantes vitales"],
    correcta: "C",
    explicacion: "Recepción, transporte y control de accesos. (Funciones del celador en urgencias)"
  },
  {
    tema: "Urgencias y ambulancias",
    enunciado: "Cuando llega a la puerta de urgencias un paciente en un vehículo particular sin poder caminar, el celador:",
    opciones: ["Sale con una silla de ruedas o camilla y le ayuda a pasar a ella", "Le pide que entre andando", "Llama a una ambulancia", "Espera a que la familia lo traiga en brazos"],
    correcta: "A",
    explicacion: "Facilita el medio de transporte adecuado. (Funciones del celador en urgencias)"
  },
  {
    tema: "Urgencias y ambulancias",
    enunciado: "Ante un paciente que llega a urgencias en estado aparentemente muy grave, el celador debe:",
    opciones: ["Mandarle hacer cola en admisión", "Esperar a que llegue un familiar", "Pedirle la tarjeta sanitaria primero", "Avisar inmediatamente al personal sanitario y trasladarlo donde le indiquen, sin esperar a los trámites administrativos"],
    correcta: "D",
    explicacion: "La asistencia es prioritaria; los datos se recogen después. (Funciones del celador en urgencias)"
  },
  {
    tema: "Urgencias y ambulancias",
    enunciado: "El área de críticos o sala de reanimación (vital) de urgencias se destina a:",
    opciones: ["Pacientes con riesgo vital inmediato", "Pacientes leves", "Familiares en espera", "Pacientes pendientes de alta"],
    correcta: "A",
    explicacion: "Atención inmediata y soporte vital. (Organización de urgencias)"
  },
  {
    tema: "Urgencias y ambulancias",
    enunciado: "La sala de observación de urgencias se destina a:",
    opciones: ["Pacientes que necesitan vigilancia o tratamiento durante unas horas antes de decidir su alta o ingreso", "Familiares", "Pacientes ya ingresados en planta", "Pacientes fallecidos"],
    correcta: "A",
    explicacion: "Estancia corta en urgencias. (Organización de urgencias)"
  },
  {
    tema: "Urgencias y ambulancias",
    enunciado: "En urgencias, los acompañantes de los pacientes:",
    opciones: ["Pueden entrar todos en los boxes", "No pueden estar nunca", "Deciden dónde se coloca el paciente", "Deben seguir las normas del servicio, que suelen limitar su número"],
    correcta: "D",
    explicacion: "El celador controla el acceso y el número de acompañantes. (Funciones del celador en urgencias)"
  },
  {
    tema: "Urgencias y ambulancias",
    enunciado: "El celador de urgencias traslada a los pacientes, entre otros lugares, a:",
    opciones: ["Rayos, observación, quirófano y plantas de hospitalización", "El aparcamiento para que esperen", "La farmacia de la calle", "Su domicilio en coche particular"],
    correcta: "A",
    explicacion: "Traslados internos según indicación. (Funciones del celador en urgencias)"
  },
  {
    tema: "Urgencias y ambulancias",
    enunciado: "La documentación administrativa del paciente que llega a urgencias la recoge:",
    opciones: ["El servicio de admisión", "El celador", "El médico", "El vigilante"],
    correcta: "A",
    explicacion: "Admisión registra los datos; el celador acompaña. (Organización de urgencias)"
  },
  {
    tema: "Urgencias y ambulancias",
    enunciado: "Cuando un paciente llega custodiado por la policía (detenido), el celador:",
    opciones: ["Asume su custodia", "Le impide la entrada", "Le deja salir si lo pide", "Colabora en su traslado, mientras la custodia corresponde a la policía"],
    correcta: "D",
    explicacion: "La custodia es policial; el celador realiza sus funciones habituales. (Funciones del celador en urgencias)"
  },
  {
    tema: "Urgencias y ambulancias",
    enunciado: "Las pertenencias de un paciente que llega inconsciente a urgencias:",
    opciones: ["Se tiran", "Se recogen, se registran y se custodian según el protocolo, con testigos si es posible", "Se las queda el celador", "Se dejan en la sala de espera"],
    correcta: "B",
    explicacion: "Registro y custodia para entregarlas al paciente o la familia. (Funciones del celador en urgencias)"
  },
  {
    tema: "Urgencias y ambulancias",
    enunciado: "En Galicia, el teléfono 061 corresponde a:",
    opciones: ["La policía local", "La central de coordinación de urgencias sanitarias de Galicia (Fundación Pública Urxencias Sanitarias de Galicia-061)", "Los bomberos", "Información del Sergas para citas"],
    correcta: "B",
    explicacion: "Coordina la asistencia sanitaria urgente y el transporte sanitario urgente. (Urgencias extrahospitalarias en Galicia)"
  },
  {
    tema: "Urgencias y ambulancias",
    enunciado: "El teléfono único de emergencias en toda la Unión Europea es:",
    opciones: ["091", "112", "061", "080"],
    correcta: "B",
    explicacion: "En Galicia lo gestiona el Centro de Atención de Emergencias 112 Galicia. (Emergencias)"
  },
  {
    tema: "Urgencias y ambulancias",
    enunciado: "Los Puntos de Atención Continuada (PAC) en Galicia son:",
    opciones: ["Centros de atención primaria que atienden urgencias fuera del horario ordinario de los centros de salud", "Hospitales comarcales", "Unidades de cuidados intensivos", "Farmacias de guardia"],
    correcta: "A",
    explicacion: "Atienden urgencias por la tarde, noche, fines de semana y festivos. (Urgencias en atención primaria)"
  },
  {
    tema: "Urgencias y ambulancias",
    enunciado: "La norma estatal que regula las características técnicas, el equipamiento y el personal de las ambulancias es:",
    opciones: ["La Ley 14/1986", "El Real Decreto 836/2012", "La Ley 55/2003", "El Real Decreto 1030/2006 exclusivamente"],
    correcta: "B",
    explicacion: "Clasifica las ambulancias y fija su dotación. (RD 836/2012)"
  },
  {
    tema: "Urgencias y ambulancias",
    enunciado: "Según el RD 836/2012, las ambulancias no asistenciales son las de:",
    opciones: ["Clase D", "Clase C", "Clase A", "Clase B"],
    correcta: "C",
    explicacion: "Clase A: transporte de pacientes sin necesidad de asistencia sanitaria en ruta. (RD 836/2012)"
  },
  {
    tema: "Urgencias y ambulancias",
    enunciado: "La ambulancia de clase A1 es:",
    opciones: ["De soporte vital avanzado", "De soporte vital básico", "Convencional, para pacientes en camilla", "Colectiva, para varios pacientes sentados"],
    correcta: "C",
    explicacion: "A1: convencional; A2: colectiva (transporte programado de varios pacientes). (RD 836/2012)"
  },
  {
    tema: "Urgencias y ambulancias",
    enunciado: "La ambulancia de clase A2 es:",
    opciones: ["Convencional con camilla", "Un helicóptero sanitario", "Colectiva, para el transporte de varios pacientes no urgentes", "De soporte vital avanzado"],
    correcta: "C",
    explicacion: "Transporte colectivo, por ejemplo a rehabilitación o diálisis. (RD 836/2012)"
  },
  {
    tema: "Urgencias y ambulancias",
    enunciado: "La ambulancia de soporte vital básico es la de:",
    opciones: ["Clase B", "Clase A1", "Clase A2", "Clase C"],
    correcta: "A",
    explicacion: "Clase B: asistencial, con dos técnicos en emergencias sanitarias. (RD 836/2012)"
  },
  {
    tema: "Urgencias y ambulancias",
    enunciado: "La ambulancia de soporte vital avanzado (UVI móvil) es la de:",
    opciones: ["Clase A2", "Clase C", "Clase B", "Clase A"],
    correcta: "B",
    explicacion: "Clase C: conductor TES, enfermero y, cuando se requiera, médico. (RD 836/2012)"
  },
  {
    tema: "Urgencias y ambulancias",
    enunciado: "La dotación mínima de una ambulancia de clase C incluye:",
    opciones: ["Solo un conductor", "Un celador y un conductor", "Dos conductores", "Un conductor técnico en emergencias sanitarias, un enfermero y, cuando la asistencia lo requiera, un médico"],
    correcta: "D",
    explicacion: "Personal para asistencia avanzada. (RD 836/2012)"
  },
  {
    tema: "Urgencias y ambulancias",
    enunciado: "La dotación mínima de personal de una ambulancia de clase B es:",
    opciones: ["Un médico y un enfermero", "Un celador y un enfermero", "Dos técnicos en emergencias sanitarias, uno de ellos conductor", "Un conductor solo"],
    correcta: "C",
    explicacion: "Soporte vital básico. (RD 836/2012)"
  },
  {
    tema: "Urgencias y ambulancias",
    enunciado: "Durante el transporte en ambulancia, el paciente en camilla debe ir:",
    opciones: ["Correctamente sujeto con los cinturones de la camilla", "Sin sujeción para mayor comodidad", "Sujeto solo de los pies", "Sentado en el suelo"],
    correcta: "A",
    explicacion: "Seguridad ante frenazos o accidentes. (Transporte en ambulancia)"
  },
  {
    tema: "Urgencias y ambulancias",
    enunciado: "En el transporte en ambulancia, el paciente suele colocarse en la camilla:",
    opciones: ["Con los pies hacia la cabina en todos los casos", "De pie", "En decúbito supino con la cabeza en el sentido de la marcha (hacia la cabina), salvo indicación", "Siempre sentado"],
    correcta: "C",
    explicacion: "Habitualmente la cabeza va hacia delante; la posición final depende de la patología. (Fisiopatología del transporte)"
  },
  {
    tema: "Urgencias y ambulancias",
    enunciado: "Entre los efectos del transporte sobre el paciente se encuentran:",
    opciones: ["Las aceleraciones y desaceleraciones, las vibraciones, el ruido y los cambios de temperatura", "Solo el ruido de la sirena", "Ninguno, el paciente va tumbado", "Solo el mareo de los acompañantes"],
    correcta: "A",
    explicacion: "Por eso se recomienda una conducción suave y a velocidad constante. (Fisiopatología del transporte)"
  },
  {
    tema: "Urgencias y ambulancias",
    enunciado: "Para reducir los efectos negativos del transporte en ambulancia, la conducción debe ser:",
    opciones: ["Con frenazos para llegar antes", "Indiferente", "Suave, con velocidad constante y evitando frenazos y aceleraciones bruscas", "Lo más rápida posible siempre"],
    correcta: "C",
    explicacion: "La velocidad excesiva puede empeorar al paciente. (Fisiopatología del transporte)"
  },
  {
    tema: "Urgencias y ambulancias",
    enunciado: "El celador, en relación con las ambulancias, se encarga de:",
    opciones: ["Atender al paciente durante el traslado como sanitario", "Ayudar a sacar o introducir al paciente y transferirlo entre la camilla de la ambulancia y la del hospital", "Conducir la ambulancia", "Decidir el tipo de ambulancia"],
    correcta: "B",
    explicacion: "Transferencias en la puerta del hospital. (Funciones del celador en urgencias)"
  },
  {
    tema: "Urgencias y ambulancias",
    enunciado: "Según el Estatuto de Personal No Sanitario, el celador tiene a su cargo el traslado de los enfermos:",
    opciones: ["Solo en quirófano", "Tanto dentro de la institución como en el servicio de ambulancias", "Solo dentro de la planta", "Nunca en ambulancias"],
    correcta: "B",
    explicacion: "Literal del Estatuto. (EPNS, art. 14.2)"
  },
  {
    tema: "Urgencias y ambulancias",
    enunciado: "Al pasar a un paciente de la camilla de la ambulancia a la camilla del hospital, ambas deben estar:",
    opciones: ["A distinta altura", "Juntas, a la misma altura y frenadas", "Separadas", "Sin frenar"],
    correcta: "B",
    explicacion: "Las mismas normas de toda transferencia. (Funciones del celador en urgencias)"
  },
  {
    tema: "Urgencias y ambulancias",
    enunciado: "Un paciente politraumatizado llega a urgencias inmovilizado con collarín y tablero espinal. El celador:",
    opciones: ["Le pide que se baje andando", "Le quita el collarín para que esté más cómodo", "No retira la inmovilización y lo moviliza en bloque siguiendo las indicaciones del personal sanitario", "Le sienta en una silla de ruedas"],
    correcta: "C",
    explicacion: "La inmovilización solo la retira el personal sanitario. (Funciones del celador en urgencias)"
  },
  {
    tema: "Urgencias y ambulancias",
    enunciado: "El collarín cervical se coloca para:",
    opciones: ["Calentar el cuello", "Facilitar la respiración", "Sujetar la cabeza en el sueño", "Inmovilizar la columna cervical ante sospecha de lesión"],
    correcta: "D",
    explicacion: "Ante sospecha de lesión de columna. (Material de urgencias)"
  },
  {
    tema: "Urgencias y ambulancias",
    enunciado: "En una situación de múltiples víctimas o catástrofe, el hospital activa:",
    opciones: ["Su plan de catástrofes, en el que cada colectivo tiene asignadas sus funciones", "El cierre de urgencias", "Un horario especial de visitas", "Las vacaciones del personal"],
    correcta: "A",
    explicacion: "Los celadores tienen funciones asignadas en estos planes. (Organización de urgencias)"
  },
  {
    tema: "Urgencias y ambulancias",
    enunciado: "En un incidente con múltiples víctimas, los celadores suelen encargarse de:",
    opciones: ["Clasificar a las víctimas", "Trasladar a los pacientes según la prioridad asignada y preparar camillas y sillas", "Informar a los medios de comunicación", "Atender a los pacientes graves"],
    correcta: "B",
    explicacion: "Traslados y logística. (Plan de catástrofes)"
  },
  {
    tema: "Urgencias y ambulancias",
    enunciado: "Los pacientes que llegan a urgencias por una intoxicación con productos químicos pueden requerir:",
    opciones: ["Descontaminación antes de entrar en el servicio, siguiendo el protocolo", "Pasar directamente a la sala de espera", "Ducharse en el baño público", "Ningún cuidado especial"],
    correcta: "A",
    explicacion: "Evita contaminar al personal y a otros pacientes. (Organización de urgencias)"
  },
  {
    tema: "Urgencias y ambulancias",
    enunciado: "Si un paciente en la sala de espera de urgencias empeora visiblemente, el celador debe:",
    opciones: ["Pedirle que vuelva a hacer el triaje", "Llevarlo a casa", "Esperar a que le llamen", "Avisar inmediatamente al personal sanitario"],
    correcta: "D",
    explicacion: "La vigilancia de la sala de espera también es importante. (Funciones del celador en urgencias)"
  },
  {
    tema: "Urgencias y ambulancias",
    enunciado: "El celador de urgencias, ante un familiar alterado que exige ser atendido antes, debe:",
    opciones: ["Discutir con él", "Explicarle con calma que el orden lo marca la gravedad y pedir ayuda si la situación empeora", "Darle prioridad para que se calme", "Ignorarle"],
    correcta: "B",
    explicacion: "Calma y explicación; protocolo de agresiones si es necesario. (Atención al usuario)"
  },
  {
    tema: "Urgencias y ambulancias",
    enunciado: "Los boxes de urgencias son:",
    opciones: ["Salas de espera", "Almacenes", "Espacios individuales de exploración y tratamiento", "Despachos administrativos"],
    correcta: "C",
    explicacion: "Zonas de atención. (Organización de urgencias)"
  },
  {
    tema: "Urgencias y ambulancias",
    enunciado: "El paciente que llega a urgencias y debe ser ingresado se traslada a la planta:",
    opciones: ["Sin documentación, que se manda después", "Por su propio pie siempre", "Con su documentación, una vez asignada la cama por admisión y cuando lo indique el personal sanitario", "Cuando el celador lo decida"],
    correcta: "C",
    explicacion: "Traslado con documentación y autorización. (Funciones del celador en urgencias)"
  },
  {
    tema: "Urgencias y ambulancias",
    enunciado: "Las ambulancias de transporte programado se utilizan para:",
    opciones: ["Traslados no urgentes, como a consultas, rehabilitación, diálisis o altas", "Rescates en montaña", "Transporte de órganos exclusivamente", "Emergencias vitales"],
    correcta: "A",
    explicacion: "Transporte no urgente. (Transporte sanitario)"
  },
  {
    tema: "Urgencias y ambulancias",
    enunciado: "El transporte sanitario aéreo (helicóptero) en Galicia lo coordina:",
    opciones: ["El celador de puerta", "Cada hospital por su cuenta", "El 061", "El 112 sin participación sanitaria"],
    correcta: "C",
    explicacion: "El 061 coordina los recursos sanitarios urgentes, incluidos los helicópteros. (Urgencias extrahospitalarias en Galicia)"
  },
  {
    tema: "Urgencias y ambulancias",
    enunciado: "Cuando un helicóptero sanitario aterriza en el helipuerto del hospital, el celador:",
    opciones: ["Se acerca por la parte trasera", "Sigue el protocolo del centro y solo se acerca al aparato cuando se lo indique la tripulación", "No colabora nunca", "Se acerca corriendo con las palas en marcha"],
    correcta: "B",
    explicacion: "Seguridad: nunca acercarse por detrás ni sin indicación. (Transporte sanitario)"
  },
  {
    tema: "Urgencias y ambulancias",
    enunciado: "La puerta de urgencias destinada a ambulancias:",
    opciones: ["Es para el público general", "Puede usarse como aparcamiento", "Debe mantenerse libre de vehículos y obstáculos", "Se cierra de noche"],
    correcta: "C",
    explicacion: "Acceso rápido de las ambulancias. (Funciones de vigilancia)"
  },
  {
    tema: "Urgencias y ambulancias",
    enunciado: "Si un paciente quiere irse de urgencias antes de ser atendido o dado de alta, el celador:",
    opciones: ["Llama a la policía", "Le deja ir sin decir nada", "Le impide salir por la fuerza", "Avisa al personal sanitario, que le informará y, en su caso, le hará firmar el alta voluntaria"],
    correcta: "D",
    explicacion: "El paciente puede negarse; el alta voluntaria se documenta. (Ley 41/2002, art. 21)"
  },
  {
    tema: "Urgencias y ambulancias",
    enunciado: "El celador en urgencias puede tener que ayudar a sujetar a un paciente durante:",
    opciones: ["La admisión", "La consulta médica de cualquier paciente", "El triaje", "Procedimientos como suturas o lavados gástricos, cuando se lo indique el personal sanitario"],
    correcta: "D",
    explicacion: "Colaboración bajo indicación (pregunta parecida al examen Sergas 2019). (Funciones del celador en urgencias)"
  },
  {
    tema: "Urgencias y ambulancias",
    enunciado: "Ante una víctima de violencia de género que acude a urgencias, el celador:",
    opciones: ["La trata con respeto y discreción y facilita su atención según el protocolo del Sergas", "La deja en la sala de espera general sin más", "Le pregunta los detalles de la agresión", "Llama a su pareja"],
    correcta: "A",
    explicacion: "Discreción y derivación según protocolo. (Tema 10; protocolo de violencia de género)"
  },
  {
    tema: "Urgencias y ambulancias",
    enunciado: "Los menores que llegan a urgencias:",
    opciones: ["Deben ir acompañados de sus padres o tutores, salvo situaciones especiales", "Se quedan solos en la sala de espera", "Pueden ser atendidos sin ningún control", "No se atienden sin cita"],
    correcta: "A",
    explicacion: "La responsabilidad recae en los padres o tutores. (Atención a menores)"
  },
  {
    tema: "Urgencias y ambulancias",
    enunciado: "La camilla de urgencias que se usa para recibir pacientes debe estar:",
    opciones: ["Ocupando el pasillo de salida", "Usada del paciente anterior", "Sin frenos", "Preparada, limpia y con sábana limpia para el siguiente paciente"],
    correcta: "D",
    explicacion: "Preparación del material de transporte. (Funciones del celador en urgencias)"
  },
  {
    tema: "Urgencias y ambulancias",
    enunciado: "Las sillas de ruedas y camillas de la entrada de urgencias:",
    opciones: ["Deben estar disponibles, en buen estado y en el lugar asignado", "Solo se usan de día", "Se guardan bajo llave", "Pueden estar en cualquier sitio"],
    correcta: "A",
    explicacion: "Disponibilidad inmediata. (Funciones del celador en urgencias)"
  },
  {
    tema: "Urgencias y ambulancias",
    enunciado: "En el transporte de un paciente con oxígeno, el celador debe comprobar:",
    opciones: ["Que el caudal está al máximo", "Que la botella tiene oxígeno suficiente para todo el trayecto", "Que la botella va tumbada sobre el paciente", "Que el paciente no lo necesita"],
    correcta: "B",
    explicacion: "Una botella vacía en mitad del traslado es un riesgo grave. El caudal lo fija enfermería. (Transporte de pacientes con oxígeno)"
  },
  {
    tema: "Urgencias y ambulancias",
    enunciado: "En urgencias, los objetos de valor de un paciente:",
    opciones: ["Se guardan en la mesa del celador", "Se entregan a sus familiares o se depositan según el protocolo, con registro", "Se entregan a cualquier persona que diga ser familiar sin comprobar", "Se dejan en el box"],
    correcta: "B",
    explicacion: "Siempre con registro y comprobación. (Funciones del celador en urgencias)"
  },
  {
    tema: "Urgencias y ambulancias",
    enunciado: "El celador en urgencias, ante un paciente que llega con una herida sangrante, debe:",
    opciones: ["Hacerle un torniquete en todo caso", "Avisar al personal sanitario y protegerse con guantes si tiene que ayudar", "Curarle la herida", "Pedirle que espere su turno"],
    correcta: "B",
    explicacion: "Protección frente al riesgo biológico y aviso. (Funciones del celador en urgencias)"
  },
  {
    tema: "Urgencias y ambulancias",
    enunciado: "Un paciente llega a urgencias en silla de ruedas y está mareado. Al trasladarlo, el celador:",
    opciones: ["Le acompaña sin dejarle solo y avisa si empeora", "Le deja en un pasillo", "Le pide que se levante", "Le lleva a la cafetería"],
    correcta: "A",
    explicacion: "Vigilancia durante el traslado. (Funciones del celador en urgencias)"
  },
  {
    tema: "Urgencias y ambulancias",
    enunciado: "La atención de urgencias en el domicilio o en la vía pública la prestan principalmente:",
    opciones: ["Los celadores del hospital", "Los servicios de urgencias extrahospitalarias (061, PAC, ambulancias)", "Las farmacias", "Los ayuntamientos"],
    correcta: "B",
    explicacion: "El celador trabaja en el ámbito del centro. (Urgencias extrahospitalarias)"
  },
  {
    tema: "Urgencias y ambulancias",
    enunciado: "En la clasificación de los pacientes por colores en un incidente con múltiples víctimas, el color negro indica:",
    opciones: ["Fallecido o con lesiones incompatibles con la vida", "Paciente grave inmediato", "Paciente que puede esperar", "Paciente leve"],
    correcta: "A",
    explicacion: "Rojo: inmediato; amarillo: urgente; verde: leve; negro: fallecido. (Triaje de múltiples víctimas)"
  },
  {
    tema: "Urgencias y ambulancias",
    enunciado: "En un triaje de múltiples víctimas, los pacientes con color verde son:",
    opciones: ["Los que necesitan quirófano inmediato", "Los críticos", "Los fallecidos", "Los leves, que pueden caminar y esperar"],
    correcta: "D",
    explicacion: "Pueden demorar su atención. (Triaje de múltiples víctimas)"
  },
  {
    tema: "Urgencias y ambulancias",
    enunciado: "Si llega a urgencias un paciente con sospecha de enfermedad infecciosa transmisible por vía aérea, el celador debe:",
    opciones: ["Mandarle a casa", "Facilitarle una mascarilla quirúrgica, protegerse y seguir el circuito que indique el servicio", "Dejarle en la sala de espera general", "No hacer nada especial"],
    correcta: "B",
    explicacion: "Circuitos diferenciados para evitar contagios. (Organización de urgencias; aislamientos)"
  },
  {
    tema: "Urgencias y ambulancias",
    enunciado: "El celador que traslada a un paciente desde urgencias a la UCI debe ir:",
    opciones: ["Con la familia en lugar del personal sanitario", "Sin la documentación", "Acompañado del personal sanitario si el paciente es crítico", "Solo y lo más rápido posible"],
    correcta: "C",
    explicacion: "Paciente crítico: traslado acompañado. (Traslado de pacientes críticos)"
  },
  {
    tema: "Urgencias y ambulancias",
    enunciado: "En la entrada de urgencias, el celador puede orientar a los usuarios sobre:",
    opciones: ["El médico que les atenderá", "El tiempo exacto que tardarán en atenderles según su enfermedad", "El circuito del servicio: admisión, triaje y sala de espera", "El diagnóstico probable"],
    correcta: "C",
    explicacion: "Información general, nunca clínica. (Funciones de información)"
  },
  {
    tema: "Urgencias y ambulancias",
    origen: "Examen 2024 · Específico E8",
    enunciado: "No se consideran prestaciones sanitarias obligatorias:",
    opciones: ["El traslado por alta.", "El traslado de pacientes, órganos o personal sanitario para la realización de trasplantes.", "El traslado por asistencia continuada.", "Todas las respuestas anteriores son correctas."],
    correcta: "D",
    explicacion: "La respuesta oficial es que ninguno de los tres traslados se considera prestación sanitaria obligatoria."
  },
  {
    tema: "Urgencias y ambulancias",
    origen: "Examen 2024 · Específico E15",
    enunciado: "Para abrir la vía aérea a una persona que ha sufrido un accidente y de la que se sospecha que tiene lesión cervical, realizaremos la siguiente maniobra:",
    opciones: ["Maniobra de Heimlich.", "Maniobra de inclinación de cabeza y elevación del mentón.", "Maniobra mandibular.", "Maniobra frente-mentón."],
    correcta: "C",
    explicacion: "Con sospecha de lesión cervical se usa la tracción mandibular, que abre la vía aérea sin mover el cuello."
  },
  {
    tema: "Urgencias y ambulancias",
    origen: "Examen 2024 · Específico E25",
    enunciado: "Para administrar oxígeno a un bebé se utiliza:",
    opciones: ["Una sonda o catéter nasal pediátrico.", "Un halo.", "Una mascarilla oronasal pediátrica.", "Todas las respuestas anteriores son correctas."],
    correcta: "D",
    explicacion: "En bebés se puede usar sonda nasal pediátrica, halo (campana) o mascarilla pediátrica. (La respuesta oficial se corrigió a la D)."
  },
  {
    tema: "Urgencias y ambulancias",
    origen: "Examen 2024 · Específico E26",
    enunciado: "¿A qué denominamos transporte terciario?",
    opciones: ["Al transporte del paciente desde un centro sanitario a otro para que le realicen una prueba diagnóstica o para que permanezca en ese centro.", "Al transporte del paciente desde un servicio a otro dentro del mismo hospital para que le realicen una prueba o lo cambien de unidad.", "Al transporte que se realiza desde el lugar donde se produce la necesidad asistencial hasta el hospital o centro de atención de referencia del paciente.", "Al transporte que se realiza utilizando medios especiales de transporte, como un helicóptero."],
    correcta: "B",
    explicacion: "Primario: del lugar del suceso al hospital. Secundario: entre centros. Terciario: dentro del mismo hospital."
  },
  {
    tema: "Urgencias y ambulancias",
    origen: "Examen 2024 · Específico E30",
    enunciado: "¿Cuál es la diferencia entre esguince y luxación?",
    opciones: ["Son lo mismo, no existe diferencia.", "El esguince es la separación momentánea de las superficies articulares y la luxación es la separación permanente.", "El esguince es la separación de las superficies articulares de las extremidades inferiores y la luxación, la de las extremidades superiores.", "Ninguna respuesta es correcta."],
    correcta: "B",
    explicacion: "En el esguince la separación de la articulación es momentánea; en la luxación es permanente."
  },
  {
    tema: "Urgencias y ambulancias",
    origen: "Examen 2024 · Específico E39",
    enunciado: "La aproximación es una de las fases del decálogo prehospitalario. Señale la opción correcta:",
    opciones: ["Acceso al lugar del siniestro por el camino más rápido, más seguro y más corto.", "Acceso al lugar del siniestro por el camino más seguro, más rápido y más corto.", "Acceso al lugar del siniestro por el camino más seguro, más corto y más rápido.", "Acceso al lugar del siniestro por el camino más corto, más seguro y más rápido."],
    correcta: "B",
    explicacion: "Por orden de prioridad: el camino más seguro, luego el más rápido y luego el más corto."
  },
  {
    tema: "Urgencias y ambulancias",
    origen: "Examen 2024 · Específico E41",
    enunciado: "El orden de los eslabones de la llamada cadena de supervivencia es:",
    opciones: ["RCP básica; traslado; RCP avanzada.", "RCP básica; desfibrilación; traslado.", "Activación precoz de los servicios de emergencia sanitaria; RCP básica; desfibrilación precoz; RCP avanzada; traslado.", "RCP básica; RCP avanzada; traslado."],
    correcta: "C",
    explicacion: "La cadena empieza por avisar pronto a emergencias, sigue con RCP básica y desfibrilación precoz, y termina con soporte avanzado y traslado."
  },
  {
    tema: "Urgencias y ambulancias",
    origen: "Examen 2024 · Específico E54 (reserva)",
    enunciado: "Señale la respuesta incorrecta respecto a la oxigenoterapia:",
    opciones: ["La oxigenoterapia se realiza en situaciones de hipoxia.", "La falta total de oxígeno se conoce como anoxia.", "En oxigenoterapia se aplica oxígeno en concentraciones superiores al 21 %.", "El aire en condiciones normales está compuesto, entre otros gases, por un 78 % de nitrógeno, un 23 % de oxígeno y un 0,02 % de monóxido de carbono."],
    correcta: "D",
    explicacion: "El aire tiene un 21% de oxígeno y una pequeña parte de dióxido de carbono, no de monóxido."
  },
  {
    tema: "Urgencias y ambulancias",
    origen: "Examen 2024 · Específico E55 (reserva)",
    enunciado: "Señale la respuesta incorrecta en relación con la certificación técnico-sanitaria de los vehículos de transporte sanitario:",
    opciones: ["Para su obtención, el vehículo no podrá superar una antigüedad de 10 años, contados desde la última matriculación.", "Se otorga por un plazo de 2 años en vehículos nuevos y anual a partir del segundo año de antigüedad.", "El vehículo deberá estar matriculado y habilitado para circular.", "La empresa certificará que dispone del personal adecuado y con la cualificación o habilitación necesarias para el servicio del tipo de vehículo de que se trate."],
    correcta: "A",
    explicacion: "Según la respuesta oficial, la incorrecta es la A, la del límite de antigüedad del vehículo."
  },
  {
    tema: "Urgencias y ambulancias",
    origen: "Examen 2024 · Específico E69",
    enunciado: "Un paciente que se encuentra en la sala de observación sufre una parada cardiorrespiratoria. El facultativo a cargo le pide al celador su colaboración. ¿Cómo deberá proceder?",
    opciones: ["Retirará el cabecero de la cama.", "Colocará al paciente en posición de Fowler.", "Ayudará al personal sanitario a colocar al paciente en posición de Roser si es necesario realizar una intubación endotraqueal.", "Las respuestas a y c son correctas."],
    correcta: "D",
    explicacion: "En una parada se retira el cabecero para acceder a la cabeza y, si hay que intubar, se ayuda a colocar al paciente en posición de Roser (cabeza en hiperextensión)."
  },
  {
    tema: "Urgencias y ambulancias",
    origen: "Examen 2024 · Específico E78",
    enunciado: "¿En qué servicio del hospital podría encontrar una 'cámara cefálica' y para qué serviría?",
    opciones: ["En quirófano, para acomodar al paciente en prono.", "En traumatología, para sujetar tracciones cervicales.", "En el área de neonatología, para la administración de oxígeno a bebés.", "Ninguna es correcta."],
    correcta: "C",
    explicacion: "La cámara cefálica (o halo) se usa en neonatología para dar oxígeno a bebés."
  },
  {
    tema: "Urgencias y ambulancias",
    origen: "Examen 2024 · Específico E87",
    enunciado: "Estando en una habitación, se da cuenta de que uno de los pacientes empieza a encontrarse mal. Señale la opción incorrecta sobre lo que usted, como celador, haría:",
    opciones: ["Avisará al personal sanitario.", "Retirará el cabecero de la cama, en caso de que se lo pidan.", "Ayudará en el masaje cardíaco si fuese necesario.", "Ayudará en la RCP avanzada."],
    correcta: "D",
    explicacion: "La RCP avanzada la hace el personal sanitario; el celador puede avisar, retirar el cabecero y ayudar en el masaje cardíaco."
  },
  {
    tema: "Urgencias y ambulancias",
    origen: "Examen SAS 2025 · P20",
    enunciado: "Las compresiones torácicas realizadas por un reanimador, o mediante dispositivos mecánicos, durante la RCP para intentar restablecer la circulación espontánea, se denomina:",
    opciones: ["Parada cardíaca.", "Soporte vital.", "Masaje cardíaco.", "Ritmo desfibrilable."],
    correcta: "C",
    explicacion: "Las compresiones torácicas de la RCP se llaman masaje cardíaco (externo)."
  },
  {
    tema: "Urgencias y ambulancias",
    origen: "Examen SAS 2025 aplazado · P25",
    enunciado: "Si un/a Celador/a tiene encomendada la tarea de traslado de pacientes a la Sala de Triaje, ¿dónde presta servicio?",
    opciones: ["En quirófano.", "En consultas externas.", "En urgencias.", "En unidades de hospitalización."],
    correcta: "C",
    explicacion: "La sala de triaje está en Urgencias: allí se clasifica a los pacientes según su gravedad."
  },
  // ===================================================================
  //  INFORMÁTICA (94 preguntas)
  // ===================================================================
  {
    tema: "Informática",
    enunciado: "El hardware de un ordenador es:",
    opciones: ["El conjunto de componentes físicos (lo que se puede tocar)", "El conjunto de programas", "El sistema operativo", "Los datos guardados"],
    correcta: "A",
    explicacion: "Hardware: físico. Software: programas. (Informática básica)"
  },
  {
    tema: "Informática",
    enunciado: "El software de un ordenador es:",
    opciones: ["La caja del ordenador", "La pantalla y el teclado", "Los cables", "El conjunto de programas e instrucciones"],
    correcta: "D",
    explicacion: "Sistema operativo y aplicaciones. (Informática básica)"
  },
  {
    tema: "Informática",
    enunciado: "La CPU o unidad central de proceso es:",
    opciones: ["El disco duro", "La impresora", "La pantalla", "El componente que ejecuta las instrucciones de los programas (el procesador)"],
    correcta: "D",
    explicacion: "Es el «cerebro» del ordenador. (Informática básica)"
  },
  {
    tema: "Informática",
    enunciado: "La memoria RAM se caracteriza por ser:",
    opciones: ["Permanente", "Un periférico de salida", "Solo de lectura", "Volátil: su contenido se pierde al apagar el ordenador"],
    correcta: "D",
    explicacion: "Guarda temporalmente los datos y programas en uso. (Informática básica)"
  },
  {
    tema: "Informática",
    enunciado: "La memoria ROM es:",
    opciones: ["Volátil", "Un tipo de impresora", "Un disco externo", "De solo lectura y no se borra al apagar el equipo"],
    correcta: "D",
    explicacion: "Contiene instrucciones básicas de arranque. (Informática básica)"
  },
  {
    tema: "Informática",
    enunciado: "Un byte equivale a:",
    opciones: ["8 bits", "10 bits", "16 bits", "1.000 bits"],
    correcta: "A",
    explicacion: "El bit es la unidad mínima (0 o 1). (Unidades de información)"
  },
  {
    tema: "Informática",
    enunciado: "Un kilobyte (KB) equivale, en informática tradicional, a:",
    opciones: ["1.024 bytes", "1.000 bits", "8 bytes", "100 bytes"],
    correcta: "A",
    explicacion: "Por ser potencias de 2 (2 elevado a 10). (Unidades de información)"
  },
  {
    tema: "Informática",
    enunciado: "Ordenadas de menor a mayor, las unidades de almacenamiento son:",
    opciones: ["Megabyte, kilobyte, terabyte, gigabyte", "Kilobyte, megabyte, gigabyte, terabyte", "Gigabyte, megabyte, kilobyte, terabyte", "Terabyte, gigabyte, megabyte, kilobyte"],
    correcta: "B",
    explicacion: "KB < MB < GB < TB. (Unidades de información)"
  },
  {
    tema: "Informática",
    enunciado: "¿Cuál de los siguientes es un periférico de entrada?",
    opciones: ["La impresora", "El monitor", "El teclado", "Los altavoces"],
    correcta: "C",
    explicacion: "Entrada: teclado, ratón, escáner, micrófono, webcam. (Periféricos)"
  },
  {
    tema: "Informática",
    enunciado: "¿Cuál de los siguientes es un periférico de salida?",
    opciones: ["La impresora", "El escáner", "El ratón", "El micrófono"],
    correcta: "A",
    explicacion: "Salida: monitor, impresora, altavoces. (Periféricos)"
  },
  {
    tema: "Informática",
    enunciado: "La pantalla táctil es un periférico:",
    opciones: ["Solo de entrada", "De almacenamiento únicamente", "Solo de salida", "De entrada y salida"],
    correcta: "D",
    explicacion: "Muestra información y recibe órdenes al tocarla. (Periféricos)"
  },
  {
    tema: "Informática",
    enunciado: "El escáner es un periférico:",
    opciones: ["De salida", "De almacenamiento", "De entrada", "De comunicación únicamente"],
    correcta: "C",
    explicacion: "Digitaliza documentos e imágenes. (Periféricos)"
  },
  {
    tema: "Informática",
    enunciado: "El sistema operativo es:",
    opciones: ["Un antivirus", "El programa principal que gestiona el hardware y permite ejecutar las demás aplicaciones", "Un procesador de textos", "Un navegador"],
    correcta: "B",
    explicacion: "Ejemplos: Windows, Linux, macOS, Android. (Software)"
  },
  {
    tema: "Informática",
    enunciado: "¿Cuál de los siguientes es un sistema operativo?",
    opciones: ["Google Chrome", "Excel", "Linux", "Word"],
    correcta: "C",
    explicacion: "Word y Excel son aplicaciones ofimáticas; Chrome es un navegador. (Software)"
  },
  {
    tema: "Informática",
    enunciado: "La ofimática es:",
    opciones: ["La gestión de redes", "El conjunto de programas informáticos para tareas de oficina (textos, hojas de cálculo, presentaciones...)", "La reparación de ordenadores", "La programación de páginas web"],
    correcta: "B",
    explicacion: "Paquetes: Microsoft Office, LibreOffice... (Ofimática)"
  },
  {
    tema: "Informática",
    enunciado: "LibreOffice es:",
    opciones: ["Un navegador de internet", "Un sistema operativo", "Un antivirus", "Un paquete ofimático de software libre"],
    correcta: "D",
    explicacion: "Incluye Writer (textos), Calc (hojas de cálculo) e Impress (presentaciones). (Ofimática)"
  },
  {
    tema: "Informática",
    enunciado: "En LibreOffice, el procesador de textos se llama:",
    opciones: ["Impress", "Writer", "Base", "Calc"],
    correcta: "B",
    explicacion: "Writer equivale a Word; Calc a Excel; Impress a PowerPoint. (Ofimática)"
  },
  {
    tema: "Informática",
    enunciado: "En LibreOffice, la hoja de cálculo se llama:",
    opciones: ["Calc", "Writer", "Draw", "Impress"],
    correcta: "A",
    explicacion: "Calc es la hoja de cálculo. (Ofimática)"
  },
  {
    tema: "Informática",
    enunciado: "La extensión de un documento de Microsoft Word actual es:",
    opciones: [".docx", ".xlsx", ".pptx", ".odt"],
    correcta: "A",
    explicacion: "Word: .docx; Excel: .xlsx; PowerPoint: .pptx; Writer: .odt. (Archivos)"
  },
  {
    tema: "Informática",
    enunciado: "La extensión .odt corresponde a:",
    opciones: ["Un documento de texto de LibreOffice (formato abierto)", "Una hoja de cálculo de Excel", "Una imagen", "Un archivo comprimido"],
    correcta: "A",
    explicacion: "OpenDocument Text. (Archivos)"
  },
  {
    tema: "Informática",
    enunciado: "La extensión .xlsx corresponde a:",
    opciones: ["Un PDF", "Una hoja de cálculo de Excel", "Un documento de Word", "Una presentación"],
    correcta: "B",
    explicacion: "Libro de Excel. (Archivos)"
  },
  {
    tema: "Informática",
    enunciado: "Un archivo .pdf es:",
    opciones: ["Un programa ejecutable", "Una base de datos", "Un documento en formato portable que mantiene su aspecto en cualquier equipo", "Una hoja de cálculo editable"],
    correcta: "C",
    explicacion: "Muy usado para documentos definitivos. (Archivos)"
  },
  {
    tema: "Informática",
    enunciado: "Un archivo .zip es:",
    opciones: ["Un archivo comprimido que puede contener uno o varios archivos", "Un vídeo", "Una imagen", "Un documento de texto"],
    correcta: "A",
    explicacion: "Ocupa menos espacio y facilita el envío. (Archivos)"
  },
  {
    tema: "Informática",
    enunciado: "En la mayoría de los programas, el atajo de teclado para copiar es:",
    opciones: ["Ctrl + V", "Ctrl + Z", "Ctrl + X", "Ctrl + C"],
    correcta: "D",
    explicacion: "Ctrl+C copiar, Ctrl+X cortar, Ctrl+V pegar. (Atajos de teclado)"
  },
  {
    tema: "Informática",
    enunciado: "El atajo de teclado Ctrl + V sirve para:",
    opciones: ["Pegar", "Deshacer", "Copiar", "Cortar"],
    correcta: "A",
    explicacion: "Pega lo copiado o cortado. (Atajos de teclado)"
  },
  {
    tema: "Informática",
    enunciado: "El atajo de teclado Ctrl + X sirve para:",
    opciones: ["Pegar", "Cortar", "Copiar", "Cerrar"],
    correcta: "B",
    explicacion: "Elimina el texto del sitio original y lo guarda para pegarlo. (Atajos de teclado)"
  },
  {
    tema: "Informática",
    enunciado: "El atajo de teclado Ctrl + Z sirve para:",
    opciones: ["Guardar", "Deshacer la última acción", "Imprimir", "Rehacer"],
    correcta: "B",
    explicacion: "Deshacer. (Atajos de teclado)"
  },
  {
    tema: "Informática",
    enunciado: "En Microsoft Word en español, el atajo para poner un texto en negrita es:",
    opciones: ["Ctrl + K", "Ctrl + N", "Ctrl + B", "Ctrl + G"],
    correcta: "B",
    explicacion: "Ctrl+N negrita, Ctrl+K cursiva, Ctrl+S subrayado. (Atajos de teclado (Word en español))"
  },
  {
    tema: "Informática",
    enunciado: "En Microsoft Word en español, el atajo Ctrl + G sirve para:",
    opciones: ["Buscar", "Guardar", "Negrita", "Imprimir"],
    correcta: "B",
    explicacion: "Ctrl+G guardar; Ctrl+P imprimir; Ctrl+B buscar. (Atajos de teclado (Word en español))"
  },
  {
    tema: "Informática",
    enunciado: "En Microsoft Word en español, el atajo para poner texto en cursiva es:",
    opciones: ["Ctrl + C", "Ctrl + U", "Ctrl + K", "Ctrl + I"],
    correcta: "C",
    explicacion: "K de «cursiva» en la versión española. (Atajos de teclado (Word en español))"
  },
  {
    tema: "Informática",
    enunciado: "El atajo de teclado Ctrl + P sirve para:",
    opciones: ["Imprimir", "Pegar", "Guardar", "Pantalla completa"],
    correcta: "A",
    explicacion: "Abre el cuadro de impresión. (Atajos de teclado)"
  },
  {
    tema: "Informática",
    enunciado: "En Word en español, el atajo Ctrl + E sirve para:",
    opciones: ["Eliminar", "Centrar el texto", "Enviar el documento", "Seleccionar todo el documento"],
    correcta: "D",
    explicacion: "Selecciona todo el contenido. (Atajos de teclado (Word en español))"
  },
  {
    tema: "Informática",
    enunciado: "La tecla F7 en Microsoft Word sirve para:",
    opciones: ["Insertar una tabla", "Guardar", "Imprimir", "Revisar la ortografía y la gramática"],
    correcta: "D",
    explicacion: "Corrector ortográfico. (Atajos de teclado (Word))"
  },
  {
    tema: "Informática",
    enunciado: "En un procesador de textos, el encabezado es:",
    opciones: ["La primera línea de cada párrafo", "El texto que aparece en la parte superior de todas las páginas", "El nombre del archivo", "El título del documento"],
    correcta: "B",
    explicacion: "El pie de página aparece en la parte inferior. (Procesador de textos)"
  },
  {
    tema: "Informática",
    enunciado: "La sangría en un procesador de textos es:",
    opciones: ["El desplazamiento del texto respecto al margen", "El espacio entre líneas", "El tipo de letra", "El tamaño del papel"],
    correcta: "A",
    explicacion: "Por ejemplo, la sangría de primera línea. (Procesador de textos)"
  },
  {
    tema: "Informática",
    enunciado: "El interlineado es:",
    opciones: ["El tamaño de la letra", "El margen superior", "El espacio entre las líneas de un párrafo", "El espacio entre palabras"],
    correcta: "C",
    explicacion: "Sencillo, 1,5 líneas, doble... (Procesador de textos)"
  },
  {
    tema: "Informática",
    enunciado: "Para que un texto quede alineado tanto a la izquierda como a la derecha, se utiliza la alineación:",
    opciones: ["A la derecha", "Justificada", "Centrada", "A la izquierda"],
    correcta: "B",
    explicacion: "La justificada reparte los espacios para igualar ambos márgenes. (Procesador de textos)"
  },
  {
    tema: "Informática",
    enunciado: "La función «combinar correspondencia» de un procesador de textos sirve para:",
    opciones: ["Unir dos documentos", "Crear cartas o etiquetas personalizadas a partir de una lista de datos", "Enviar correos electrónicos sin internet", "Corregir la ortografía"],
    correcta: "B",
    explicacion: "Útil para envíos masivos personalizados. (Procesador de textos)"
  },
  {
    tema: "Informática",
    enunciado: "Para forzar que el texto continúe en la página siguiente, se inserta:",
    opciones: ["Un salto de página", "Un interlineado doble", "Un encabezado", "Una tabulación"],
    correcta: "A",
    explicacion: "Salto de página (Ctrl+Intro). (Procesador de textos)"
  },
  {
    tema: "Informática",
    enunciado: "En una hoja de cálculo, una celda se identifica por:",
    opciones: ["La letra de la columna y el número de la fila (por ejemplo, B3)", "El número de la columna y la letra de la fila", "Su contenido", "Su color"],
    correcta: "A",
    explicacion: "Columnas con letras, filas con números. (Hoja de cálculo)"
  },
  {
    tema: "Informática",
    enunciado: "En una hoja de cálculo, las fórmulas empiezan por el signo:",
    opciones: ["=", "#", "*", "&"],
    correcta: "A",
    explicacion: "El signo igual indica que lo que sigue es una fórmula. (Hoja de cálculo)"
  },
  {
    tema: "Informática",
    enunciado: "La expresión A1:A10 en una hoja de cálculo indica:",
    opciones: ["Un error", "Una división", "Un rango de celdas desde A1 hasta A10", "Las celdas A1 y A10 solamente"],
    correcta: "C",
    explicacion: "Los dos puntos indican rango. (Hoja de cálculo)"
  },
  {
    tema: "Informática",
    enunciado: "La función que suma un rango de celdas en una hoja de cálculo en español es:",
    opciones: ["PROMEDIO", "MAX", "CONTAR", "SUMA"],
    correcta: "D",
    explicacion: "=SUMA(A1:A10). (Hoja de cálculo)"
  },
  {
    tema: "Informática",
    enunciado: "La función PROMEDIO calcula:",
    opciones: ["La media aritmética de los valores", "El número de celdas", "El valor máximo", "La suma"],
    correcta: "A",
    explicacion: "=PROMEDIO(A1:A10). (Hoja de cálculo)"
  },
  {
    tema: "Informática",
    enunciado: "La función MAX devuelve:",
    opciones: ["La suma", "El valor más alto de un rango", "La media", "El valor más bajo"],
    correcta: "B",
    explicacion: "MIN devuelve el más bajo. (Hoja de cálculo)"
  },
  {
    tema: "Informática",
    enunciado: "La función CONTAR devuelve:",
    opciones: ["La suma de los números", "El número de celdas de un rango que contienen números", "La media", "El valor más alto"],
    correcta: "B",
    explicacion: "CONTARA cuenta las celdas no vacías de cualquier tipo. (Hoja de cálculo)"
  },
  {
    tema: "Informática",
    enunciado: "En una hoja de cálculo, la referencia $A$1 es:",
    opciones: ["Una referencia absoluta, que no cambia al copiar la fórmula", "Una moneda", "Una referencia relativa", "Un error"],
    correcta: "A",
    explicacion: "El signo $ fija la columna, la fila o ambas. (Hoja de cálculo)"
  },
  {
    tema: "Informática",
    enunciado: "Si al copiar una fórmula la referencia A1 cambia a A2, se trata de una referencia:",
    opciones: ["Fija", "Absoluta", "Relativa", "Mixta"],
    correcta: "C",
    explicacion: "Las referencias relativas se adaptan a la nueva posición. (Hoja de cálculo)"
  },
  {
    tema: "Informática",
    enunciado: "Si en una celda aparecen almohadillas (#####), normalmente significa que:",
    opciones: ["La fórmula tiene un error de división", "No hay datos", "La columna es demasiado estrecha para mostrar el número", "El archivo está dañado"],
    correcta: "C",
    explicacion: "Basta con ensanchar la columna. (Hoja de cálculo)"
  },
  {
    tema: "Informática",
    enunciado: "El error #¡DIV/0! en una hoja de cálculo indica que:",
    opciones: ["La columna es estrecha", "Falta un paréntesis", "Se está dividiendo entre cero", "El texto es demasiado largo"],
    correcta: "C",
    explicacion: "División entre cero o entre una celda vacía. (Hoja de cálculo)"
  },
  {
    tema: "Informática",
    enunciado: "Un archivo de Excel con varias hojas se denomina:",
    opciones: ["Libro", "Presentación", "Documento", "Carpeta"],
    correcta: "A",
    explicacion: "Un libro contiene una o varias hojas. (Hoja de cálculo)"
  },
  {
    tema: "Informática",
    enunciado: "En una hoja de cálculo, la función de filtrar sirve para:",
    opciones: ["Mostrar solo las filas que cumplen determinadas condiciones", "Sumar columnas", "Borrar datos", "Cambiar el color"],
    correcta: "A",
    explicacion: "Los datos ocultos no se borran. (Hoja de cálculo)"
  },
  {
    tema: "Informática",
    enunciado: "Internet es:",
    opciones: ["Un único ordenador central", "Un programa de Microsoft", "Una red interna de un hospital", "Una red mundial de redes de ordenadores interconectados"],
    correcta: "D",
    explicacion: "Red de redes. (Internet)"
  },
  {
    tema: "Informática",
    enunciado: "Una intranet es:",
    opciones: ["Internet completo", "Un tipo de correo", "Una red interna de una organización, de acceso restringido a sus miembros", "Un antivirus"],
    correcta: "C",
    explicacion: "El Sergas tiene su propia intranet para los profesionales. (Internet)"
  },
  {
    tema: "Informática",
    enunciado: "Un navegador web es:",
    opciones: ["Un procesador de textos", "Un buscador como Google", "Un sistema operativo", "El programa que permite visitar páginas web, como Chrome, Firefox o Edge"],
    correcta: "D",
    explicacion: "El navegador muestra las páginas; el buscador es una web que encuentra otras webs. (Internet)"
  },
  {
    tema: "Informática",
    enunciado: "Google, como página web, es principalmente:",
    opciones: ["Un navegador", "Un buscador", "Un sistema operativo", "Un antivirus"],
    correcta: "B",
    explicacion: "Google Chrome sí es un navegador. (Internet)"
  },
  {
    tema: "Informática",
    enunciado: "La URL es:",
    opciones: ["Un programa de correo", "El nombre del ordenador", "Un tipo de virus", "La dirección de una página o recurso en internet"],
    correcta: "D",
    explicacion: "Por ejemplo, https://www.sergas.gal. (Internet)"
  },
  {
    tema: "Informática",
    enunciado: "La «s» de https indica que:",
    opciones: ["La conexión está cifrada y es segura", "La página está en español", "La página es de un servicio de salud", "La página es gratuita"],
    correcta: "A",
    explicacion: "HyperText Transfer Protocol Secure. (Internet)"
  },
  {
    tema: "Informática",
    enunciado: "En la dirección www.sergas.gal, «.gal» es:",
    opciones: ["La carpeta", "El protocolo", "El dominio de nivel superior, en este caso el dominio para la comunidad gallega", "El nombre del servidor"],
    correcta: "C",
    explicacion: "Hay dominios de país (.es), genéricos (.com) y de comunidad (.gal). (Internet)"
  },
  {
    tema: "Informática",
    enunciado: "Los marcadores o favoritos de un navegador sirven para:",
    opciones: ["Bloquear virus", "Descargar archivos", "Borrar el historial", "Guardar las direcciones de las páginas que se quieren visitar con frecuencia"],
    correcta: "D",
    explicacion: "Acceso rápido a páginas habituales. (Internet)"
  },
  {
    tema: "Informática",
    enunciado: "Las cookies son:",
    opciones: ["Pequeños archivos que las páginas web guardan en el navegador para recordar información del usuario", "Virus informáticos", "Programas de correo", "Páginas web falsas"],
    correcta: "A",
    explicacion: "Sirven, por ejemplo, para recordar el inicio de sesión. (Internet)"
  },
  {
    tema: "Informática",
    enunciado: "El phishing es:",
    opciones: ["Un tipo de navegador", "Un programa de ofimática", "Una copia de seguridad", "Un fraude que suplanta a una entidad de confianza para robar datos (contraseñas, datos bancarios)"],
    correcta: "D",
    explicacion: "Correos o webs falsas que piden datos. (Seguridad informática)"
  },
  {
    tema: "Informática",
    enunciado: "Si el celador recibe un correo que dice ser del Sergas pidiéndole su contraseña, debe:",
    opciones: ["Enviar la contraseña", "Abrir el archivo adjunto para comprobarlo", "Reenviarlo a sus compañeros", "No responder ni hacer clic, y comunicarlo al servicio de informática"],
    correcta: "D",
    explicacion: "Ninguna organización pide la contraseña por correo. (Seguridad informática)"
  },
  {
    tema: "Informática",
    enunciado: "Un virus informático es:",
    opciones: ["Un programa malicioso que se propaga y daña o altera el funcionamiento del equipo", "Una actualización", "Un tipo de cable", "Un fallo del monitor"],
    correcta: "A",
    explicacion: "Forma parte del malware. (Seguridad informática)"
  },
  {
    tema: "Informática",
    enunciado: "El cortafuegos (firewall) sirve para:",
    opciones: ["Apagar el ordenador", "Controlar y filtrar las conexiones de red, bloqueando accesos no autorizados", "Imprimir de forma segura", "Enfriar el procesador"],
    correcta: "B",
    explicacion: "Barrera entre el equipo o la red e internet. (Seguridad informática)"
  },
  {
    tema: "Informática",
    enunciado: "Una contraseña segura debe:",
    opciones: ["Ser la fecha de nacimiento", "Ser la misma para todo", "Ser larga y combinar mayúsculas, minúsculas, números y símbolos, sin datos personales evidentes", "Compartirse con los compañeros"],
    correcta: "C",
    explicacion: "Y no apuntarse a la vista. (Seguridad informática)"
  },
  {
    tema: "Informática",
    enunciado: "Las credenciales de acceso a los sistemas informáticos del Sergas son:",
    opciones: ["Personales e intransferibles", "Compartidas por todo el servicio", "Públicas", "Las mismas para todos los celadores"],
    correcta: "A",
    explicacion: "Cada acceso queda registrado a nombre del usuario. (Seguridad informática; protección de datos)"
  },
  {
    tema: "Informática",
    enunciado: "Al terminar de usar un ordenador compartido del hospital, el celador debe:",
    opciones: ["Dejar su sesión abierta", "Apagar la pantalla solamente", "Escribir su contraseña en un pósit", "Cerrar su sesión"],
    correcta: "D",
    explicacion: "Evita que otro use su identidad. (Seguridad informática)"
  },
  {
    tema: "Informática",
    enunciado: "La historia clínica electrónica del Servicio Gallego de Salud se denomina:",
    opciones: ["FIDES", "XERAL", "SIGAP", "IANUS"],
    correcta: "D",
    explicacion: "IANUS es la historia clínica electrónica del Sergas. FIDES es la oficina virtual del profesional. (Sistemas de información del Sergas)"
  },
  {
    tema: "Informática",
    enunciado: "La oficina virtual del profesional del Sergas, donde se consultan los datos laborales y se presentan méritos, se denomina:",
    opciones: ["IANUS", "SIAC", "XADE", "FIDES"],
    correcta: "D",
    explicacion: "FIDES/expedient-e. (Sistemas de información del Sergas)"
  },
  {
    tema: "Informática",
    enunciado: "En el correo electrónico, el campo «CC» sirve para:",
    opciones: ["Enviar una copia oculta", "Escribir el asunto", "Adjuntar archivos", "Enviar una copia a otros destinatarios, que todos los receptores pueden ver"],
    correcta: "D",
    explicacion: "CC: con copia. (Correo electrónico)"
  },
  {
    tema: "Informática",
    enunciado: "En el correo electrónico, el campo «CCO» sirve para:",
    opciones: ["Poner el asunto", "Enviar una copia oculta: los demás destinatarios no ven a quién se ha enviado", "Marcar el correo como urgente", "Enviar una copia visible"],
    correcta: "B",
    explicacion: "Con copia oculta; protege las direcciones de los destinatarios. (Correo electrónico)"
  },
  {
    tema: "Informática",
    enunciado: "La opción «Reenviar» en el correo electrónico sirve para:",
    opciones: ["Enviar un correo recibido a otra persona distinta", "Guardar el correo", "Borrar el correo", "Responder solo al remitente"],
    correcta: "A",
    explicacion: "«Responder» contesta al remitente; «Responder a todos», a todos los destinatarios. (Correo electrónico)"
  },
  {
    tema: "Informática",
    enunciado: "El símbolo @ en una dirección de correo electrónico separa:",
    opciones: ["Dos destinatarios", "El asunto del mensaje", "El texto del archivo adjunto", "El nombre del usuario del dominio"],
    correcta: "D",
    explicacion: "usuario@dominio. (Correo electrónico)"
  },
  {
    tema: "Informática",
    enunciado: "El correo no deseado o masivo se denomina:",
    opciones: ["Firma", "Phishing siempre", "Spam", "Adjunto"],
    correcta: "C",
    explicacion: "Correo basura. (Correo electrónico)"
  },
  {
    tema: "Informática",
    enunciado: "El protocolo utilizado para enviar correos electrónicos es:",
    opciones: ["POP3", "SMTP", "IMAP", "HTTP"],
    correcta: "B",
    explicacion: "SMTP envía; POP3 e IMAP reciben. (Correo electrónico)"
  },
  {
    tema: "Informática",
    enunciado: "La diferencia principal entre IMAP y POP3 es que IMAP:",
    opciones: ["Solo envía correos", "No permite adjuntos", "Mantiene los correos sincronizados en el servidor y accesibles desde varios dispositivos", "Borra siempre los correos del servidor"],
    correcta: "C",
    explicacion: "POP3 suele descargar los correos y borrarlos del servidor. (Correo electrónico)"
  },
  {
    tema: "Informática",
    enunciado: "Para enviar a otra persona un archivo por correo electrónico, se utiliza:",
    opciones: ["El campo CCO", "La opción de adjuntar archivo", "La opción de reenviar sin más", "El campo asunto"],
    correcta: "B",
    explicacion: "Se adjunta y se envía. (Correo electrónico)"
  },
  {
    tema: "Informática",
    enunciado: "Una copia de seguridad (backup) es:",
    opciones: ["Un antivirus", "Una impresora de reserva", "Una copia de los datos guardada aparte para recuperarlos si se pierden o dañan", "Un tipo de virus"],
    correcta: "C",
    explicacion: "Protege frente a pérdidas de información. (Seguridad informática)"
  },
  {
    tema: "Informática",
    enunciado: "Almacenar archivos «en la nube» significa:",
    opciones: ["Borrarlos", "Guardarlos en un USB", "Imprimirlos", "Guardarlos en servidores accesibles a través de internet"],
    correcta: "D",
    explicacion: "Servicios en línea de almacenamiento. (Internet)"
  },
  {
    tema: "Informática",
    enunciado: "Una red LAN es:",
    opciones: ["Una red de área local, como la de un edificio o un hospital", "Un tipo de correo", "Un cable de impresora", "Una red mundial"],
    correcta: "A",
    explicacion: "Local Area Network. (Redes)"
  },
  {
    tema: "Informática",
    enunciado: "La conexión inalámbrica a una red local mediante ondas de radio se denomina:",
    opciones: ["Wi-Fi", "HDMI", "Ethernet", "USB"],
    correcta: "A",
    explicacion: "Ethernet es por cable. (Redes)"
  },
  {
    tema: "Informática",
    enunciado: "El puerto USB sirve para:",
    opciones: ["Conectar el teléfono fijo", "Conectar periféricos y dispositivos de almacenamiento al ordenador", "Ventilar el equipo", "Conectar el ordenador a la corriente"],
    correcta: "B",
    explicacion: "Universal Serial Bus. (Periféricos)"
  },
  {
    tema: "Informática",
    enunciado: "Al conectar un USB de procedencia desconocida a un ordenador del hospital:",
    opciones: ["Se mejora el rendimiento", "Se borra automáticamente", "No hay ningún riesgo", "Se corre el riesgo de introducir virus; hay que seguir las normas de seguridad del centro"],
    correcta: "D",
    explicacion: "Muchas infecciones entran por dispositivos extraíbles. (Seguridad informática)"
  },
  {
    tema: "Informática",
    enunciado: "El escritorio de Windows es:",
    opciones: ["Un tipo de archivo", "Un procesador de textos", "Un mueble", "La pantalla principal sobre la que se muestran iconos, ventanas y la barra de tareas"],
    correcta: "D",
    explicacion: "Área de trabajo principal. (Sistema operativo)"
  },
  {
    tema: "Informática",
    enunciado: "La papelera de reciclaje de Windows:",
    opciones: ["Recicla el papel de la impresora", "Guarda temporalmente los archivos eliminados, que se pueden restaurar hasta que se vacía", "Borra los archivos definitivamente al instante", "Es un antivirus"],
    correcta: "B",
    explicacion: "Se pueden recuperar mientras no se vacíe. (Sistema operativo)"
  },
  {
    tema: "Informática",
    enunciado: "Una carpeta en informática sirve para:",
    opciones: ["Imprimir", "Ejecutar programas", "Conectarse a internet", "Organizar y agrupar archivos"],
    correcta: "D",
    explicacion: "Estructura de directorios. (Sistema operativo)"
  },
  {
    tema: "Informática",
    enunciado: "El programa de presentaciones de Microsoft Office es:",
    opciones: ["Outlook", "PowerPoint", "Access", "Excel"],
    correcta: "B",
    explicacion: "Access es base de datos; Outlook, correo y agenda. (Ofimática)"
  },
  {
    tema: "Informática",
    enunciado: "Microsoft Outlook es principalmente:",
    opciones: ["Un gestor de correo electrónico y agenda", "Un navegador", "Un procesador de textos", "Una hoja de cálculo"],
    correcta: "A",
    explicacion: "Correo, calendario y contactos. (Ofimática)"
  },
  {
    tema: "Informática",
    enunciado: "Una base de datos es:",
    opciones: ["Una imagen", "Un documento de texto", "Un conjunto organizado de datos relacionados que se pueden consultar y gestionar", "Una impresora"],
    correcta: "C",
    explicacion: "Ejemplo: Access o LibreOffice Base. (Informática básica)"
  },
  {
    tema: "Informática",
    origen: "Examen 2024 · Específico E22",
    enunciado: "Una de las siguientes definiciones es incorrecta:",
    opciones: ["La CPU es un componente del hardware dentro de un ordenador.", "La memoria RAM es una memoria de solo lectura. Almacena la información necesaria para el arranque del ordenador.", "La memoria caché es un área de almacenamiento dedicada a los datos usados con más frecuencia para recuperarlos a gran velocidad.", "El escáner es un periférico de entrada de un ordenador."],
    correcta: "B",
    explicacion: "La memoria de solo lectura para el arranque es la ROM. La RAM es de lectura y escritura."
  },
  {
    tema: "Informática",
    origen: "Examen 2024 · Específico E43",
    enunciado: "En el examen se mostraba el icono de dos hojas de papel superpuestas (el que aparece en la barra de herramientas de Word). ¿Qué hace ese icono?",
    opciones: ["Pegar texto.", "Copiar texto.", "Cortar texto.", "Deshacer cambios."],
    correcta: "B",
    explicacion: "El icono de dos hojas superpuestas es Copiar. Pegar es el portapapeles y Cortar son unas tijeras."
  },
  {
    tema: "Informática",
    origen: "Examen 2024 · Específico E46",
    enunciado: "Señale cuál de los siguientes no es un archivo de vídeo:",
    opciones: ["AVI.", "MOV.", "MKV.", "WAV."],
    correcta: "D",
    explicacion: "WAV es un formato de audio. AVI, MOV y MKV son de vídeo."
  },
  {
    tema: "Informática",
    origen: "Examen 2024 · Específico E51 (reserva)",
    enunciado: "¿Qué combinación de teclas usaría para seleccionar todo el documento en Word?",
    opciones: ["Mayús + Flecha arriba.", "Mayús + Ctrl + Flecha arriba.", "Ctrl + E.", "Ctrl + Mayús + Inicio."],
    correcta: "C",
    explicacion: "En Word en español/gallego, Ctrl+E selecciona todo el documento (en inglés es Ctrl+A)."
  },
  // ===================================================================
  //  PERSPECTIVA DE GÉNERO (46 preguntas)
  // ===================================================================
  {
    tema: "Perspectiva de género",
    enunciado: "La diferencia entre sexo y género es que:",
    opciones: ["El género es biológico y el sexo social", "El sexo se refiere a las características biológicas y el género a los roles y expectativas construidos socialmente", "El sexo solo se refiere a las mujeres", "Son sinónimos"],
    correcta: "B",
    explicacion: "El género es una construcción social y cultural. (Perspectiva de género)"
  },
  {
    tema: "Perspectiva de género",
    enunciado: "Aplicar la perspectiva de género en salud significa:",
    opciones: ["Tener en cuenta cómo las diferencias biológicas y sociales entre mujeres y hombres influyen en la salud y la atención", "Dar prioridad a los hombres", "Atender solo a mujeres", "Separar a los pacientes por sexo en todas las plantas"],
    correcta: "A",
    explicacion: "Busca una atención más justa y eficaz para todas las personas. (Salud y género)"
  },
  {
    tema: "Perspectiva de género",
    enunciado: "Un sesgo de género en la atención sanitaria es, por ejemplo:",
    opciones: ["Que existan unidades de maternidad", "Que haya más enfermeras que enfermeros", "Que los síntomas de infarto en mujeres se reconozcan peor por considerar como modelo los síntomas típicos de los hombres", "Que las mujeres vivan más años"],
    correcta: "C",
    explicacion: "Los sesgos pueden retrasar diagnósticos y tratamientos. (Salud y género)"
  },
  {
    tema: "Perspectiva de género",
    enunciado: "Los estereotipos de género son:",
    opciones: ["Datos estadísticos de salud", "Normas legales", "Ideas preconcebidas sobre cómo deben ser y comportarse mujeres y hombres", "Enfermedades propias de cada sexo"],
    correcta: "C",
    explicacion: "Limitan a las personas y pueden generar discriminación. (Perspectiva de género)"
  },
  {
    tema: "Perspectiva de género",
    enunciado: "Según la Ley Orgánica 1/2004, la violencia de género es la que se ejerce sobre las mujeres por parte de:",
    opciones: ["Sus hijos", "Sus compañeros de trabajo exclusivamente", "Quienes sean o hayan sido sus cónyuges o estén o hayan estado ligados a ellas por relaciones similares de afectividad, aun sin convivencia", "Cualquier persona desconocida"],
    correcta: "C",
    explicacion: "La ley estatal se centra en la violencia en la pareja o expareja. (LO 1/2004, art. 1)"
  },
  {
    tema: "Perspectiva de género",
    enunciado: "Según la LO 1/2004, la violencia de género es manifestación de:",
    opciones: ["La discriminación, la situación de desigualdad y las relaciones de poder de los hombres sobre las mujeres", "Problemas económicos de la pareja", "Enfermedades mentales", "El consumo de alcohol"],
    correcta: "A",
    explicacion: "Tiene un origen estructural. (LO 1/2004, art. 1)"
  },
  {
    tema: "Perspectiva de género",
    enunciado: "Para que exista violencia de género según la LO 1/2004, la convivencia entre agresor y víctima:",
    opciones: ["Es imprescindible", "Debe ser de al menos un año", "Debe estar registrada", "No es necesaria"],
    correcta: "D",
    explicacion: "«Aun sin convivencia». (LO 1/2004, art. 1)"
  },
  {
    tema: "Perspectiva de género",
    enunciado: "Entre las formas de violencia de género que recoge la Ley 11/2007 de Galicia se encuentra:",
    opciones: ["La violencia deportiva", "La violencia informática exclusivamente", "La violencia económica", "La violencia administrativa"],
    correcta: "C",
    explicacion: "Formas: física, psicológica, sexual y económica. (Ley 11/2007 de Galicia, art. 3)"
  },
  {
    tema: "Perspectiva de género",
    enunciado: "La violencia económica consiste, por ejemplo, en:",
    opciones: ["Ganar menos dinero", "Privar intencionadamente a la mujer de recursos para su bienestar o controlar su dinero", "Tener deudas", "Pagar impuestos"],
    correcta: "B",
    explicacion: "Es una forma de control y dependencia. (Ley 11/2007 de Galicia)"
  },
  {
    tema: "Perspectiva de género",
    enunciado: "La violencia psicológica incluye:",
    opciones: ["Insultos, humillaciones, amenazas, control y aislamiento", "Solo los golpes", "Las discusiones puntuales entre iguales", "Solo las agresiones sexuales"],
    correcta: "A",
    explicacion: "A menudo precede o acompaña a la física. (Formas de violencia de género)"
  },
  {
    tema: "Perspectiva de género",
    enunciado: "El ciclo de la violencia descrito por Leonor Walker tiene tres fases:",
    opciones: ["Inicio, desarrollo y fin", "Discusión, separación y divorcio", "Denuncia, juicio y condena", "Acumulación de tensión, explosión o agresión, y reconciliación o «luna de miel»"],
    correcta: "D",
    explicacion: "Explica por qué muchas víctimas permanecen en la relación. (Ciclo de la violencia)"
  },
  {
    tema: "Perspectiva de género",
    enunciado: "En la fase de «luna de miel» del ciclo de la violencia, el agresor:",
    opciones: ["Muestra arrepentimiento y promete que no volverá a ocurrir", "Aumenta la tensión", "Agrede físicamente", "Abandona la relación"],
    correcta: "A",
    explicacion: "La víctima recupera la esperanza; el ciclo se repite, cada vez más rápido. (Ciclo de la violencia)"
  },
  {
    tema: "Perspectiva de género",
    enunciado: "El teléfono estatal de atención a las víctimas de violencia de género es el:",
    opciones: ["061", "016", "112", "091"],
    correcta: "B",
    explicacion: "Gratuito, confidencial y no deja rastro en la factura. (Recursos de atención)"
  },
  {
    tema: "Perspectiva de género",
    enunciado: "Una característica del teléfono 016 es que:",
    opciones: ["Solo atiende en horario de oficina", "No deja rastro en la factura telefónica", "Solo atiende a mujeres españolas", "Es de pago"],
    correcta: "B",
    explicacion: "24 horas, gratuito, en numerosos idiomas. (Recursos de atención)"
  },
  {
    tema: "Perspectiva de género",
    enunciado: "El teléfono de información a la mujer de la Xunta de Galicia es el:",
    opciones: ["061", "016 exclusivamente", "010", "900 400 273"],
    correcta: "D",
    explicacion: "Teléfono gratuito de la Xunta de información a la mujer. (Recursos de atención en Galicia)"
  },
  {
    tema: "Perspectiva de género",
    enunciado: "El Día Internacional de la Eliminación de la Violencia contra la Mujer se celebra el:",
    opciones: ["8 de marzo", "1 de mayo", "25 de noviembre", "10 de diciembre"],
    correcta: "C",
    explicacion: "El 8 de marzo es el Día Internacional de la Mujer. (Fechas)"
  },
  {
    tema: "Perspectiva de género",
    enunciado: "El Día Internacional de la Mujer se celebra el:",
    opciones: ["8 de marzo", "31 de mayo", "14 de febrero", "25 de noviembre"],
    correcta: "A",
    explicacion: "8 de marzo. (Fechas)"
  },
  {
    tema: "Perspectiva de género",
    enunciado: "Los servicios sanitarios tienen un papel clave en la violencia de género porque:",
    opciones: ["Deciden la custodia de los hijos", "Pueden dictar órdenes de alejamiento", "Pueden detener al agresor", "Muchas víctimas acuden a ellos, lo que permite detectar la violencia y orientar a la víctima"],
    correcta: "D",
    explicacion: "Detección precoz y atención. (Violencia de género y sistema sanitario)"
  },
  {
    tema: "Perspectiva de género",
    enunciado: "Un signo de alerta de posible violencia de género en un servicio sanitario es:",
    opciones: ["Pedir cita por teléfono", "Una consulta por gripe", "Acudir acompañada de una amiga", "Lesiones repetidas con explicaciones poco coherentes y retraso en buscar asistencia"],
    correcta: "D",
    explicacion: "También: pareja que habla por ella o no la deja sola, ansiedad, depresión, consultas frecuentes. (Detección de la violencia de género)"
  },
  {
    tema: "Perspectiva de género",
    enunciado: "Que la pareja de una paciente no la deje sola en ningún momento y conteste por ella puede ser:",
    opciones: ["Lo habitual en todas las parejas", "Una norma del hospital", "Una muestra de cariño sin importancia", "Un indicador de control que debe tenerse en cuenta"],
    correcta: "D",
    explicacion: "El control es un indicador de riesgo. (Detección de la violencia de género)"
  },
  {
    tema: "Perspectiva de género",
    enunciado: "Ante una sospecha de violencia de género, el celador debe:",
    opciones: ["Enfrentarse al presunto agresor", "Comunicarlo con discreción al personal sanitario responsable, respetando la confidencialidad", "Contarlo a otros pacientes", "Preguntar a la mujer delante de su pareja"],
    correcta: "B",
    explicacion: "El celador no investiga; comunica y protege la intimidad. (Actuación ante la violencia de género)"
  },
  {
    tema: "Perspectiva de género",
    enunciado: "Si la pareja de una mujer atendida por violencia de género pregunta en información dónde está ella, el celador:",
    opciones: ["Le indica la habitación", "Le acompaña hasta ella", "No facilita ninguna información y lo comunica al personal responsable o a seguridad", "Le da su teléfono"],
    correcta: "C",
    explicacion: "La seguridad de la víctima es prioritaria. (Actuación ante la violencia de género)"
  },
  {
    tema: "Perspectiva de género",
    enunciado: "Ante una mujer víctima de violencia, la actitud del celador debe ser:",
    opciones: ["Distante para no implicarse", "Respetuosa, sin juzgar y facilitando un espacio de privacidad", "De reproche por no haber denunciado", "De curiosidad por los detalles"],
    correcta: "B",
    explicacion: "Evitar la revictimización. (Actuación ante la violencia de género)"
  },
  {
    tema: "Perspectiva de género",
    enunciado: "El parte o informe de lesiones dirigido al juzgado ante un caso de violencia de género lo emite:",
    opciones: ["La familia", "El médico que atiende a la víctima", "El celador", "La víctima"],
    correcta: "B",
    explicacion: "Es una obligación del médico ante lesiones por posible delito. (Actuación sanitaria ante la violencia de género)"
  },
  {
    tema: "Perspectiva de género",
    enunciado: "La revictimización (o victimización secundaria) consiste en:",
    opciones: ["Volver a ser agredida por el mismo agresor", "Causar un daño añadido a la víctima por un trato inadecuado de las instituciones o profesionales", "Cambiar de domicilio", "Denunciar dos veces"],
    correcta: "B",
    explicacion: "Por ejemplo, hacerle repetir su relato muchas veces o culpabilizarla. (Actuación ante la violencia de género)"
  },
  {
    tema: "Perspectiva de género",
    enunciado: "Los hijos e hijas de las mujeres víctimas de violencia de género son considerados:",
    opciones: ["Ajenos a la situación", "Responsables de la situación", "Testigos sin relevancia", "También víctimas de esa violencia"],
    correcta: "D",
    explicacion: "La ley reconoce a los menores como víctimas directas. (LO 1/2004 (reforma de 2015))"
  },
  {
    tema: "Perspectiva de género",
    enunciado: "El Pacto de Estado contra la Violencia de Género se aprobó en:",
    opciones: ["2017", "2020", "2007", "2004"],
    correcta: "A",
    explicacion: "Aprobado por el Congreso en 2017 y renovado en 2025. (Pacto de Estado)"
  },
  {
    tema: "Perspectiva de género",
    enunciado: "El lenguaje no sexista consiste en:",
    opciones: ["Usar solo el femenino", "Prohibir el masculino", "Utilizar expresiones que no invisibilicen ni discriminen a mujeres u hombres", "Usar un lenguaje técnico"],
    correcta: "C",
    explicacion: "Por ejemplo, «el personal» en lugar de solo «los trabajadores». (Igualdad)"
  },
  {
    tema: "Perspectiva de género",
    enunciado: "La violencia sexual incluye:",
    opciones: ["Cualquier acto de naturaleza sexual sin consentimiento", "Solo la que denuncia la víctima", "Solo la que ocurre fuera de la pareja", "Solo la violación con lesiones"],
    correcta: "A",
    explicacion: "El consentimiento es la clave; también dentro de la pareja. (Formas de violencia de género)"
  },
  {
    tema: "Perspectiva de género",
    enunciado: "La mutilación genital femenina:",
    opciones: ["Es una práctica sanitaria aceptada", "Es una forma de violencia contra las mujeres y niñas y un delito en España", "Es una tradición permitida", "Solo es delito si se realiza en España"],
    correcta: "B",
    explicacion: "Se persigue incluso si se comete fuera de España en determinados casos. (Violencia contra las mujeres)"
  },
  {
    tema: "Perspectiva de género",
    enunciado: "La atención a las víctimas de violencia de género en el sistema sanitario debe garantizar:",
    opciones: ["Que la víctima denuncie antes de ser atendida", "Que la víctima vaya acompañada de su pareja", "Confidencialidad, seguridad, respeto y coordinación con otros recursos", "Que se informe a los medios"],
    correcta: "C",
    explicacion: "La denuncia no es requisito para la atención. (Actuación sanitaria ante la violencia de género)"
  },
  {
    tema: "Perspectiva de género",
    enunciado: "Para recibir asistencia sanitaria, una víctima de violencia de género:",
    opciones: ["Debe presentar denuncia previa", "Debe tener una orden de protección", "No necesita haber presentado denuncia", "Debe ir con un abogado"],
    correcta: "C",
    explicacion: "La atención sanitaria es siempre un derecho. (Actuación sanitaria ante la violencia de género)"
  },
  {
    tema: "Perspectiva de género",
    enunciado: "La violencia de género afecta a la salud de las mujeres:",
    opciones: ["De forma pasajera", "Física, psicológica, sexual y socialmente, a corto y largo plazo", "Solo cuando hay lesiones graves", "Solo físicamente"],
    correcta: "B",
    explicacion: "Dolor crónico, ansiedad, depresión, problemas ginecológicos... (Salud y género)"
  },
  {
    tema: "Perspectiva de género",
    enunciado: "La igualdad efectiva entre mujeres y hombres se regula en el Estado por:",
    opciones: ["La Ley 14/1986", "La Ley Orgánica 1/2004", "La Ley Orgánica 3/2007", "La Ley 11/2007 de Galicia"],
    correcta: "C",
    explicacion: "Es parte del tema 8 de la parte común. (LO 3/2007)"
  },
  {
    tema: "Perspectiva de género",
    enunciado: "Ante una agresión sexual reciente, la víctima debe ser atendida:",
    opciones: ["Después de ducharse", "Cuando haya tiempo", "Solo si presenta denuncia", "De forma inmediata y según el protocolo específico, preservando posibles pruebas"],
    correcta: "D",
    explicacion: "Hay protocolos específicos de actuación sanitaria y forense. (Actuación sanitaria)"
  },
  {
    tema: "Perspectiva de género",
    enunciado: "Un ejemplo de micromachismo en el ámbito laboral es:",
    opciones: ["Saludar a una compañera", "Dirigirse a una médica como «la enfermera» dando por hecho que una mujer no puede ser médica", "Repartir las tareas por turnos", "Pedir ayuda a un compañero"],
    correcta: "B",
    explicacion: "Pequeñas actitudes cotidianas que refuerzan estereotipos. (Perspectiva de género)"
  },
  {
    tema: "Perspectiva de género",
    enunciado: "El acoso sexual en el trabajo es:",
    opciones: ["Una broma sin importancia", "Un piropo aceptado por ambas partes", "Cualquier comportamiento de naturaleza sexual no deseado que atenta contra la dignidad de una persona", "Solo el contacto físico"],
    correcta: "C",
    explicacion: "Puede ser verbal, no verbal o físico. (LO 3/2007, art. 7)"
  },
  {
    tema: "Perspectiva de género",
    enunciado: "El acoso por razón de sexo es:",
    opciones: ["Un comportamiento realizado en función del sexo de una persona con el propósito o efecto de atentar contra su dignidad", "Lo mismo que el acoso laboral general", "Una conducta permitida si no es sexual", "Solo el que sufren los hombres"],
    correcta: "A",
    explicacion: "Se considera discriminatorio. (LO 3/2007, art. 7)"
  },
  {
    tema: "Perspectiva de género",
    enunciado: "Los planes de igualdad en las organizaciones sirven para:",
    opciones: ["Diagnosticar y corregir las desigualdades entre mujeres y hombres en la organización", "Contratar solo a mujeres", "Organizar las vacaciones", "Reducir salarios"],
    correcta: "A",
    explicacion: "El Sergas tiene su propio plan de igualdad. (LO 3/2007)"
  },
  {
    tema: "Perspectiva de género",
    enunciado: "La conciliación de la vida personal, familiar y laboral es:",
    opciones: ["Un derecho que se reconoce a mujeres y hombres por igual", "Un privilegio de los cargos directivos", "Un derecho solo de las mujeres", "Una obligación de las mujeres"],
    correcta: "A",
    explicacion: "La corresponsabilidad evita perpetuar roles. (LO 3/2007)"
  },
  {
    tema: "Perspectiva de género",
    enunciado: "La corresponsabilidad significa:",
    opciones: ["Que el hombre aporta el dinero", "Que las tareas las hace quien tenga más tiempo", "Reparto equilibrado entre mujeres y hombres de las tareas domésticas y de cuidado", "Que la mujer se encarga del hogar"],
    correcta: "C",
    explicacion: "Clave para la igualdad real. (Igualdad)"
  },
  {
    tema: "Perspectiva de género",
    enunciado: "Si una compañera de trabajo le cuenta al celador que sufre violencia de su pareja, puede orientarla a:",
    opciones: ["Hablar con su pareja", "Callar y no buscar ayuda", "No hacer nada para no empeorar las cosas", "Los recursos de atención (016, servicios sociales, centros de información a la mujer) y a los servicios del Sergas"],
    correcta: "D",
    explicacion: "Informar de los recursos respetando su decisión. (Recursos de atención)"
  },
  {
    tema: "Perspectiva de género",
    enunciado: "Los Centros de Información a la Mujer (CIM) en Galicia:",
    opciones: ["Solo atienden por internet", "Son comisarías", "Son hospitales", "Son servicios, normalmente municipales, que informan y asesoran a las mujeres, incluidas las víctimas de violencia"],
    correcta: "D",
    explicacion: "Red de centros en los ayuntamientos. (Recursos de atención en Galicia)"
  },
  {
    tema: "Perspectiva de género",
    enunciado: "En la atención a una víctima de violencia de género, ¿qué se debe evitar?",
    opciones: ["Escucharla", "Informarle de los recursos", "Culpabilizarla o cuestionar su relato", "Respetar su intimidad"],
    correcta: "C",
    explicacion: "Evitar la revictimización. (Actuación ante la violencia de género)"
  },
  {
    tema: "Perspectiva de género",
    enunciado: "Las desigualdades de género en salud se deben, entre otras causas, a:",
    opciones: ["Las decisiones individuales exclusivamente", "Las diferencias en el acceso a recursos, en los roles de cuidado y en la exposición a riesgos", "El azar", "Únicamente la biología"],
    correcta: "B",
    explicacion: "Determinantes sociales de la salud. (Salud y género)"
  },
  {
    tema: "Perspectiva de género",
    enunciado: "La sobrecarga de los cuidados familiares recae mayoritariamente en:",
    opciones: ["Los menores", "Los hombres", "Las mujeres, lo que influye en su salud", "Los servicios públicos exclusivamente"],
    correcta: "C",
    explicacion: "Las cuidadoras informales tienen más riesgo de problemas de salud. (Salud y género)"
  },
  // ===================================================================
  //  SUPUESTOS PRÁCTICOS (149 preguntas)
  // ===================================================================
  {
    tema: "Supuestos prácticos",
    enunciado: "Está de celador en la puerta principal a las 23:00 y un hombre quiere subir a ver a su madre ingresada. El horario de visitas terminó a las 21:00. ¿Qué hace?",
    opciones: ["Le dice que se vaya sin más explicaciones", "Le explica con educación las normas y consulta con la supervisión de la planta por si hay una autorización excepcional", "Le acompaña usted a la habitación", "Le deja subir porque es su madre"],
    correcta: "B",
    explicacion: "Las excepciones las autoriza la supervisión. (Supuesto · control de accesos)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Trabaja en la planta de medicina interna. La supervisora le pide que ayude a movilizar a un paciente de 110 kg que no colabora. Solo hay otro compañero disponible. ¿Qué hace?",
    opciones: ["Lo mueven entre los dos de un tirón", "Le pide al paciente que se mueva solo", "Se niega porque no es su función", "Usa una grúa u otra ayuda técnica, o espera a contar con más personas, antes de forzar la movilización"],
    correcta: "D",
    explicacion: "La seguridad del paciente y del trabajador exige ayudas técnicas o más personal. (Supuesto · movilización)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Le piden trasladar a un paciente a rayos. Al llegar a la habitación hay dos pacientes y ninguno lleva pulsera identificativa visible. ¿Qué hace?",
    opciones: ["Comprueba la identidad con el personal de enfermería antes de trasladar a nadie", "Vuelve a rayos y dice que no lo encontró", "Pregunta a uno de ellos si es el que va a rayos y se lo lleva", "Se lleva al que está más cerca de la puerta"],
    correcta: "A",
    explicacion: "La identificación inequívoca es imprescindible. (Supuesto · seguridad del paciente)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Va a trasladar a un paciente en silla de ruedas a consultas externas y debe bajar una rampa. ¿Cómo lo hace?",
    opciones: ["Marcha atrás, con usted por delante controlando la silla", "Levantando la silla en peso", "De frente, dejando que la silla baje sola", "De frente, con el paciente sujeto a los reposabrazos"],
    correcta: "A",
    explicacion: "Las rampas descendentes se bajan marcha atrás. (Supuesto · traslado en silla de ruedas)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Lleva a un paciente en camilla y tiene que coger el ascensor. ¿Qué entra primero?",
    opciones: ["Los pies del paciente", "Usted, dejando la camilla fuera", "Los acompañantes", "La cabecera de la camilla"],
    correcta: "D",
    explicacion: "Así sale después con los pies por delante. (Supuesto · traslado en camilla)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Está trasladando a un paciente con sonda vesical a la sala de ecografía. ¿Dónde coloca la bolsa colectora?",
    opciones: ["Sobre la almohada", "Encima del abdomen del paciente", "En sus manos, a la altura del pecho", "Colgada de la camilla, por debajo del nivel de la vejiga"],
    correcta: "D",
    explicacion: "Evita el reflujo de orina. (Supuesto · traslado con dispositivos)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Durante un traslado, el paciente le dice que se encuentra mareado y está muy pálido. ¿Qué hace primero?",
    opciones: ["Le dice que es normal y sigue", "Para el traslado, coloca al paciente en posición segura y pide ayuda al personal sanitario", "Acelera para llegar antes al destino", "Le da un vaso de agua"],
    correcta: "B",
    explicacion: "Seguridad del paciente ante todo. (Supuesto · traslado)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Está en la ronda nocturna y encuentra una puerta de un almacén abierta y con la luz encendida, sin nadie dentro. ¿Qué hace?",
    opciones: ["Llama a la policía", "Comprueba que no hay nadie ni anomalías, apaga la luz, cierra la puerta y lo comunica a su responsable", "Lo deja como está", "Se lleva material para su planta"],
    correcta: "B",
    explicacion: "Cerrar, comprobar y comunicar. (Supuesto · vigilancia)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Un familiar le pregunta en el pasillo cuál es el diagnóstico de su padre ingresado. ¿Qué le responde?",
    opciones: ["Que la información clínica se la dará el médico responsable, y le indica cómo y cuándo puede hablar con él", "Le cuenta lo que ha oído al personal", "Le enseña la historia clínica", "Le dice que es grave para que esté preparado"],
    correcta: "A",
    explicacion: "La información clínica la da el médico. (Supuesto · información)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Un paciente ingresado le pide que le acompañe a la puerta del hospital a fumar. ¿Qué hace?",
    opciones: ["Le acompaña y espera con él", "Le deja salir solo", "Le explica que no está permitido fumar en el recinto y, si insiste en salir, lo comunica a enfermería", "Le consigue un cigarrillo"],
    correcta: "C",
    explicacion: "En los centros sanitarios no se puede fumar en todo el recinto. (Supuesto · normas del centro)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Ve a un visitante sentado en la cama de un paciente con un táper de comida casera. ¿Qué hace?",
    opciones: ["No dice nada", "Le quita la comida", "Le indica con educación que no puede sentarse en la cama ni dar comida sin autorización del personal", "Llama a seguridad"],
    correcta: "C",
    explicacion: "EPNS art. 14.2: evitar que los visitantes se sienten en las camas o traigan alimentos. (Supuesto · control de visitas)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Está en urgencias y llega un coche particular con un hombre que se agarra el pecho y no puede andar. ¿Qué hace?",
    opciones: ["Le dice a su acompañante que vaya a admisión", "Llama al 061", "Sale con una silla o camilla, lo traslada y avisa inmediatamente al personal sanitario", "Espera a que salga andando"],
    correcta: "C",
    explicacion: "Medio de transporte inmediato y aviso. (Supuesto · urgencias)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "En urgencias, un familiar le grita que lleva dos horas esperando y que pasen antes a su hija. ¿Cómo actúa?",
    opciones: ["Le contesta en el mismo tono", "Le ignora", "Pasa a la hija a un box sin consultar", "Mantiene la calma, le explica que se atiende según la gravedad y, si la situación empeora, pide ayuda"],
    correcta: "D",
    explicacion: "Calma y explicación; protocolo de agresiones si hace falta. (Supuesto · atención al usuario)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Recibe en urgencias a un paciente politraumatizado con collarín cervical y tablero espinal. La familia le pide que le quite el collarín porque le molesta. ¿Qué hace?",
    opciones: ["Le pregunta al paciente si le duele el cuello y se lo quita", "Lo afloja un poco", "Se lo quita para que esté cómodo", "No lo retira y explica que solo puede hacerlo el personal sanitario"],
    correcta: "D",
    explicacion: "La inmovilización solo la retira el personal sanitario. (Supuesto · urgencias)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Le piden que lleve de urgencia una biopsia intraoperatoria a anatomía patológica, pero tiene pendiente otro traslado no urgente. ¿Qué hace?",
    opciones: ["Hace primero el traslado pendiente", "Deja la biopsia en el control para después", "Pide a un familiar que la lleve", "Lleva primero la biopsia intraoperatoria, porque el cirujano espera el resultado"],
    correcta: "D",
    explicacion: "La biopsia intraoperatoria condiciona la cirugía. (Supuesto · quirófano)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Está en quirófano y necesita pasar junto a la mesa del instrumental estéril, que está entre usted y la puerta. ¿Qué hace?",
    opciones: ["Pasa rápido de lado", "Da la vuelta manteniendo la distancia y sin pasar entre el campo estéril y la mesa", "Pide al instrumentista que le pase el material", "Mueve la mesa para pasar"],
    correcta: "B",
    explicacion: "Nunca se pasa entre el campo estéril y la mesa del instrumental. (Supuesto · quirófano)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Va a entrar en el bloque quirúrgico y no tiene gorro. ¿Qué hace?",
    opciones: ["Se pone un gorro que cubra todo el pelo antes de entrar en la zona limpia", "Se tapa con la capucha del pijama", "Entra y pide un gorro dentro", "Entra porque solo va un momento"],
    correcta: "A",
    explicacion: "Normas de vestimenta del área quirúrgica. (Supuesto · quirófano)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Al pasar a un paciente de la cama a la mesa de quirófano, ¿cómo deben estar ambas?",
    opciones: ["La mesa más baja para que el paciente se deslice", "Sin frenar para poder ajustarlas", "Juntas, a la misma altura y frenadas", "Separadas unos centímetros"],
    correcta: "C",
    explicacion: "Normas de toda transferencia. (Supuesto · transferencias)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Va a trasladar a un paciente en aislamiento aéreo por tuberculosis a la sala de radiología. ¿Qué medidas toma?",
    opciones: ["Lo traslada con la cara tapada con una sábana", "El paciente lleva FFP2 con válvula y usted nada", "Ninguna, el traslado es corto", "Usted se pone mascarilla FFP2, el paciente lleva mascarilla quirúrgica y se avisa al servicio de destino"],
    correcta: "D",
    explicacion: "Protección del personal y del entorno. (Supuesto · aislamientos)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Debe entrar en la habitación de un paciente con aislamiento de contacto para ayudar a movilizarlo. ¿Qué se pone?",
    opciones: ["Solo calzas", "Bata y guantes, tras higiene de manos", "Solo mascarilla FFP2", "Nada si no toca al paciente"],
    correcta: "B",
    explicacion: "El contacto con el paciente y su entorno exige bata y guantes. (Supuesto · aislamientos)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Al salir de la habitación de un paciente en aislamiento de contacto, ¿qué es lo primero que se quita?",
    opciones: ["La mascarilla", "El gorro", "La bata", "Los guantes"],
    correcta: "D",
    explicacion: "Los guantes son lo más contaminado; después, higiene de manos y la bata. (Supuesto · aislamientos)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Ha movilizado a un paciente con Clostridium difficile. ¿Cómo hace la higiene de manos?",
    opciones: ["Con solución hidroalcohólica", "No hace falta si llevaba guantes", "Con agua y jabón, porque la solución alcohólica no elimina sus esporas", "Con alcohol de 96°"],
    correcta: "C",
    explicacion: "Las esporas resisten el alcohol. (Supuesto · higiene de manos)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Encuentra en el pasillo una botella de oxígeno tumbada en el suelo. ¿Qué hace?",
    opciones: ["La coloca en su carro o soporte, de pie y sujeta, y lo comunica si está dañada", "La deja como está", "La engrasa para que no se oxide", "La lleva rodando hasta el almacén"],
    correcta: "A",
    explicacion: "Las botellas van siempre sujetas y en vertical; nunca grasas. (Supuesto · gases medicinales)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Va a trasladar a un paciente con oxígeno desde la planta a la UCI. ¿Qué comprueba antes?",
    opciones: ["Que el paciente no necesita oxígeno", "Que la botella portátil tiene oxígeno suficiente para el trayecto", "Que el caudal está al máximo", "Nada, enfermería se encarga de todo"],
    correcta: "B",
    explicacion: "Una botella vacía en el trayecto es un riesgo grave. (Supuesto · traslado con oxígeno)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Fallece un paciente en una habitación doble. ¿Qué hace usted cuando le avisan?",
    opciones: ["Le pide al otro paciente que salga al pasillo", "Espera a que el médico certifique la muerte, ayuda a enfermería en el amortajamiento preservando la intimidad del otro paciente y traslada el cadáver al mortuorio", "Lo traslada directamente al mortuorio en cuanto le avisan", "Lo deja en la habitación hasta que llegue la funeraria"],
    correcta: "B",
    explicacion: "Certificación, amortajamiento, intimidad y traslado. (Supuesto · fallecidos)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Fallece en urgencias un joven tras un accidente de tráfico y el caso es judicial. ¿Qué hace?",
    opciones: ["Lo lava antes de llevarlo al mortuorio", "Le quita la ropa y la entrega a la familia", "No retira ni manipula sondas ni objetos y espera las instrucciones de la autoridad judicial", "Lo amortaja normalmente"],
    correcta: "C",
    explicacion: "En casos judiciales el cuerpo puede ser una prueba. (Supuesto · fallecidos)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Está trasladando un cadáver al mortuorio. ¿Por dónde va?",
    opciones: ["Por donde haya menos distancia, aunque haya público", "Por circuitos poco transitados y ascensores de servicio, con el cuerpo cubierto", "Por el vestíbulo principal porque es más corto", "Por urgencias"],
    correcta: "B",
    explicacion: "Discreción y respeto. (Supuesto · fallecidos)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Está en la sala de autopsias y el patólogo le pide que haga una incisión para ahorrar tiempo. ¿Qué hace?",
    opciones: ["La hace con cuidado", "Se va de la sala", "La hace solo si le enseña", "Le explica que no puede usar instrumental sobre el cadáver, pero sí ayudar en otras tareas auxiliares"],
    correcta: "D",
    explicacion: "EPNS art. 14.2. (Supuesto · autopsias)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Recibe un pedido en el almacén y una de las cajas llega aplastada y húmeda. ¿Qué hace?",
    opciones: ["Revisa su contenido y anota la incidencia en el albarán antes de firmarlo", "Tira la caja", "Firma el albarán y luego lo comunica", "Rechaza todo el pedido sin anotar nada"],
    correcta: "A",
    explicacion: "Constancia de la incidencia antes de dar conformidad. (Supuesto · recepción de mercancías)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Al colocar mercancía nueva en el almacén, encuentra unidades antiguas del mismo producto. ¿Dónde coloca las nuevas?",
    opciones: ["Encima, sin orden", "En otra estantería sin registrar", "Detrás de las antiguas, para que salgan primero las que caducan antes", "Delante de las antiguas"],
    correcta: "C",
    explicacion: "Lo primero que caduca, lo primero que sale. (Supuesto · almacén (FIFO/FEFO))"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Llega al almacén un pedido con vacunas que necesitan frío. ¿Qué hace primero?",
    opciones: ["Las coloca enseguida en la cámara frigorífica para no romper la cadena de frío", "Las coloca con el resto de material", "Las abre para contar las dosis", "Las deja para el final"],
    correcta: "A",
    explicacion: "La cadena de frío es prioritaria. (Supuesto · almacén)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Mientras transporta un contenedor de citostáticos a una planta, se cae y se derrama parte del contenido. ¿Qué hace?",
    opciones: ["Lo limpia con papel y sigue", "Lo deja y avisa al día siguiente", "Lo friega con agua", "Aísla la zona, avisa y actúa según el protocolo de derrames con el kit específico y el equipo de protección"],
    correcta: "D",
    explicacion: "Hay un protocolo y un kit específicos. (Supuesto · riesgo químico)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Le dan un sobre con la historia clínica de un paciente para llevarla a consultas. Por el camino, un conocido le pregunta qué lleva. ¿Qué hace?",
    opciones: ["Deja el sobre en la cafetería mientras habla", "Le deja echar un vistazo", "No da información y entrega la historia directamente en consultas", "Le dice el nombre del paciente"],
    correcta: "C",
    explicacion: "Deber de secreto. (Supuesto · confidencialidad)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "En reprografía, al terminar de fotocopiar informes clínicos, se da cuenta de que hay copias defectuosas. ¿Qué hace con ellas?",
    opciones: ["Las tira a la papelera", "Las deja en la bandeja", "Las destruye en la destructora de papel", "Las usa como papel de notas"],
    correcta: "C",
    explicacion: "Destrucción segura de documentos con datos personales. (Supuesto · protección de datos)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Le encargan llevar al laboratorio unas muestras de sangre urgentes y unas de orina ordinarias. ¿Qué hace?",
    opciones: ["Las deja en el tubo neumático sin avisar", "Espera a tener más muestras", "Lleva primero las de orina porque las tiene más cerca", "Lleva primero las urgentes y las entrega en mano al laboratorio"],
    correcta: "D",
    explicacion: "Prioridad a lo urgente. (Supuesto · traslado de muestras)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Va a recoger una bolsa de sangre al banco de sangre para una transfusión. ¿A quién se la entrega en la planta?",
    opciones: ["Directamente a la enfermera responsable del paciente", "La deja en el control", "La guarda en el frigorífico de la planta", "Al paciente"],
    correcta: "A",
    explicacion: "Entrega directa al personal que va a hacer la transfusión. (Supuesto · hemoderivados)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "La supervisora le pide que, excepcionalmente, asee a un paciente varón encamado. ¿Por dónde empieza?",
    opciones: ["Por la espalda", "Por los pies", "Por los genitales", "Por la cara, avanzando de lo más limpio a lo más sucio"],
    correcta: "D",
    explicacion: "Genitales y zona anal al final. (Supuesto · higiene del paciente)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Al asear a un paciente, ¿cómo protege su intimidad?",
    opciones: ["Pide a los familiares que se queden", "Descubre solo la zona que lava en cada momento y cierra puerta o cortinas", "Abre la puerta para ventilar", "Lo descubre entero para ir más rápido"],
    correcta: "B",
    explicacion: "Intimidad y evitar el enfriamiento. (Supuesto · higiene del paciente)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Recibe en su ordenador de trabajo un correo del «Servicio de Informática» que le pide su usuario y contraseña de IANUS para «actualizar el sistema». ¿Qué hace?",
    opciones: ["Responde con sus datos", "No contesta ni pulsa enlaces y lo comunica al servicio de informática", "Reenvía el correo a sus compañeros", "Pulsa el enlace para comprobar si es real"],
    correcta: "B",
    explicacion: "Es un intento de phishing. (Supuesto · seguridad informática)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Un compañero le pide que le preste sus claves de acceso al sistema porque ha olvidado las suyas. ¿Qué hace?",
    opciones: ["Inicia sesión y le deja trabajar", "Se niega, porque las credenciales son personales e intransferibles, y le indica cómo recuperarlas", "Le da las de otro compañero", "Se las presta solo por hoy"],
    correcta: "B",
    explicacion: "Cada acceso queda registrado a nombre del usuario. (Supuesto · seguridad informática)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "En una hoja de cálculo, necesita sumar los valores de las celdas B2 a B20. ¿Qué fórmula escribe?",
    opciones: ["SUMA B2-B20", "#SUMA(B2;B20)", "=SUMA(B2:B20)", "=B2+B20"],
    correcta: "C",
    explicacion: "Las fórmulas empiezan por «=» y el rango se indica con dos puntos. (Supuesto · hoja de cálculo)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Debe enviar un correo a 30 familias de pacientes sin que vean las direcciones de los demás. ¿Dónde pone las direcciones?",
    opciones: ["En el campo Para", "En el campo CCO (copia oculta)", "En el asunto", "En el campo CC"],
    correcta: "B",
    explicacion: "Protege los datos personales de los destinatarios. (Supuesto · correo electrónico)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Llega a urgencias una mujer con varias lesiones. Su pareja no se separa de ella y responde por ella. Usted sospecha violencia de género. ¿Qué hace?",
    opciones: ["Lo comunica con discreción al personal sanitario responsable", "Lo comenta con otros pacientes", "Se enfrenta a la pareja", "Le pregunta a ella delante de la pareja si le pega"],
    correcta: "A",
    explicacion: "El celador comunica; no investiga. (Supuesto · violencia de género)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Un hombre pregunta en información en qué box está su mujer, atendida por una agresión de su pareja. ¿Qué hace?",
    opciones: ["Le indica el box", "Le acompaña", "No le da ninguna información y avisa al personal responsable o a seguridad", "Le pide que espere en la puerta del box"],
    correcta: "C",
    explicacion: "Protección de la víctima. (Supuesto · violencia de género)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Durante la noche suena la alarma de incendios en su planta. ¿Qué hace?",
    opciones: ["Abre todas las puertas y ventanas", "Sigue el plan de autoprotección y las instrucciones del jefe de emergencia, colaborando según le corresponda", "Se va a su casa", "Baja por el ascensor para ver qué pasa"],
    correcta: "B",
    explicacion: "Cada trabajador tiene un papel en el plan. (Supuesto · plan de autoprotección)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Hay que evacuar una planta por un incendio en el extremo del pasillo. ¿Qué tipo de evacuación es la primera opción?",
    opciones: ["Por las ventanas", "Vertical inmediata por los ascensores", "Esperar en las habitaciones", "Horizontal, hacia otro sector de la misma planta protegido"],
    correcta: "D",
    explicacion: "En hospitales, primero evacuación horizontal. (Supuesto · plan de autoprotección)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "En una evacuación de una planta, ¿a qué pacientes se evacua normalmente primero?",
    opciones: ["A los encamados más graves", "A los que estén junto al ascensor", "A los de más edad", "A los que pueden caminar, para despejar la zona y luego atender a los que no pueden moverse"],
    correcta: "D",
    explicacion: "Orden habitual salvo riesgo inmediato. (Supuesto · plan de autoprotección)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Está en la puerta y un periodista le pide confirmar si un futbolista famoso está ingresado. ¿Qué hace?",
    opciones: ["Le confirma el ingreso pero no la habitación", "Le deja pasar", "No confirma nada y le remite al servicio de comunicación o a la dirección", "Le da la habitación"],
    correcta: "C",
    explicacion: "Protección de datos de los pacientes. (Supuesto · confidencialidad)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Un paciente con prótesis de cadera recién operada debe pasar de la cama a la camilla. ¿Qué cuidado especial tiene?",
    opciones: ["Girarlo sobre la pierna operada", "Sentarlo primero", "Juntarle las piernas para moverlo mejor", "Mantener las piernas separadas, con una almohada entre ellas, evitando cruzarlas o rotar la cadera hacia dentro"],
    correcta: "D",
    explicacion: "Riesgo de luxación de la prótesis. (Supuesto · movilización)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Va a ayudar a caminar por el pasillo a un paciente con hemiplejia derecha. ¿Dónde se coloca?",
    opciones: ["Delante de él", "A su lado derecho (el lado afectado)", "Detrás de él", "A su lado izquierdo"],
    correcta: "B",
    explicacion: "Para sujetarle si cede el lado débil. (Supuesto · deambulación) ⚠️ Ojo: en el examen del Sergas de 2024 (E76) el tribunal dio por buena la contraria: ponerse en el lado sano (en una hemiplejía derecha, el izquierdo). Las fuentes no se ponen de acuerdo; si vuelve a salir, la respuesta oficial es el lado sano."
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Va a pasar de la cama a la silla de ruedas a un paciente con hemiplejia izquierda. ¿Dónde coloca la silla?",
    opciones: ["A los pies de la cama", "En su lado izquierdo", "En su lado derecho (el lado sano), frenada y sin reposapiés", "Detrás de usted"],
    correcta: "C",
    explicacion: "El paciente pivota sobre la pierna sana. (Supuesto · transferencias)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Mientras ayuda a caminar a un paciente, nota que se le doblan las piernas y empieza a caer. ¿Qué hace?",
    opciones: ["Se aparta", "Tira de su brazo hacia arriba", "Intenta sostenerlo en peso a toda costa", "Le acompaña en la caída deslizándolo suavemente al suelo y protegiendo su cabeza, y pide ayuda"],
    correcta: "D",
    explicacion: "Frenar en seco una caída suele causar lesiones. (Supuesto · deambulación)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Un paciente lleva dos semanas encamado y va a sentarse por primera vez. ¿Cómo lo hace?",
    opciones: ["De golpe para que no se canse", "Directamente de pie", "Sin avisarle", "Poco a poco, dejándolo unos minutos sentado en el borde de la cama antes de levantarlo"],
    correcta: "D",
    explicacion: "Evita la hipotensión ortostática. (Supuesto · movilización)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Va a cambiar de postura a un paciente encamado. Antes de girarlo de lado, ¿qué hace?",
    opciones: ["Baja todas las barandillas", "Lo gira sin avisar", "Lo coloca en el borde del lado hacia el que gira", "Le explica lo que va a hacer, sube la barandilla del lado hacia el que gira y lo desplaza al lado contrario de la cama"],
    correcta: "D",
    explicacion: "Información, seguridad y que quede centrado. (Supuesto · movilización)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Una paciente encamada tiene una zona enrojecida en el sacro. Usted la ha movilizado. ¿Qué hace?",
    opciones: ["Le pone crema", "Le da un masaje fuerte en la zona", "No dice nada", "Lo comunica al personal de enfermería"],
    correcta: "D",
    explicacion: "Es un signo de alerta de úlcera; lo valora enfermería. (Supuesto · úlceras por presión)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Le piden colocar a un paciente en Fowler para comer. ¿Cómo lo deja?",
    opciones: ["De lado", "Semisentado, con la cabecera elevada unos 45° y las rodillas ligeramente flexionadas", "Con la cabeza más baja que los pies", "Tumbado boca arriba"],
    correcta: "B",
    explicacion: "Fowler: semisentado. (Supuesto · posiciones)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Un paciente se marea al levantarse y está a punto de desmayarse. La enfermera le pide colocarlo en una posición que favorezca el riego cerebral. ¿Cuál?",
    opciones: ["Trendelenburg (o tumbado con las piernas elevadas)", "Sentado con la cabeza entre las rodillas", "Anti-Trendelenburg", "Fowler alta"],
    correcta: "A",
    explicacion: "Cabeza más baja que los pies. (Supuesto · posiciones)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Un paciente con hernia de hiato tiene reflujo por la noche. ¿Qué posición le indicarán?",
    opciones: ["Decúbito prono", "Anti-Trendelenburg (cabeza más alta que los pies)", "Roser", "Trendelenburg"],
    correcta: "B",
    explicacion: "Evita el reflujo. (Supuesto · posiciones)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Le piden colocar a un paciente para una exploración rectal en posición de Sims. ¿Cómo lo coloca?",
    opciones: ["Entre decúbito lateral y prono, con el brazo inferior hacia atrás y la pierna superior flexionada", "Boca arriba con las piernas en estribos", "De rodillas con el pecho apoyado", "Sentado"],
    correcta: "A",
    explicacion: "Sims o semiprona. (Supuesto · posiciones)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Encuentra a un hombre inconsciente en el aparcamiento que respira con normalidad. Mientras llega ayuda, ¿en qué posición lo coloca si no hay sospecha de traumatismo?",
    opciones: ["Sentado", "Trendelenburg", "Posición lateral de seguridad", "Decúbito prono"],
    correcta: "C",
    explicacion: "Mantiene la vía aérea abierta. (Supuesto · primeros auxilios)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Encuentra a una mujer en el suelo de un pasillo que no responde y no respira con normalidad. ¿Qué hace primero?",
    opciones: ["La coloca en posición lateral de seguridad", "Le da agua", "Espera a que se despierte", "Pide ayuda y activa la alarma, y si está formado inicia la RCP"],
    correcta: "D",
    explicacion: "En una parada, lo primero es pedir ayuda y empezar la RCP. (Supuesto · soporte vital básico)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Mientras hace compresiones torácicas a un adulto, ¿a qué ritmo debe hacerlas?",
    opciones: ["30 por minuto", "Más de 150 por minuto", "Entre 100 y 120 por minuto", "60 por minuto"],
    correcta: "C",
    explicacion: "Con una profundidad de 5 a 6 cm. (Supuesto · soporte vital básico)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Le llega un paquete para un paciente de la unidad de psiquiatría. ¿Qué hace?",
    opciones: ["Lo entrega directamente al paciente", "Lo devuelve", "Lo entrega al personal de la unidad para que lo revise según su protocolo", "Lo abre usted delante de todos"],
    correcta: "C",
    explicacion: "Revisión de objetos según protocolo. (Supuesto · salud mental)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "En la unidad de psiquiatría, un paciente empieza a gritar y a amenazar a otro paciente. ¿Qué hace?",
    opciones: ["Mantiene la calma, avisa al personal sanitario y no se queda a solas con él en un espacio cerrado", "Le grita más fuerte para imponerse", "Se encierra con él para calmarle", "Le sujeta usted solo"],
    correcta: "A",
    explicacion: "Seguridad y aviso al equipo. (Supuesto · salud mental)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "El médico indica una contención mecánica de un paciente agitado y le pide ayuda. ¿Cuál es su papel?",
    opciones: ["Hacerla usted solo", "Negarse", "Colaborar en la maniobra coordinada que dirige el personal sanitario", "Decidir cuántos puntos de sujeción poner"],
    correcta: "C",
    explicacion: "La indicación es sanitaria; el celador colabora. (Supuesto · salud mental)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Un paciente de psiquiatría le cuenta que la televisión le envía mensajes secretos. ¿Qué hace?",
    opciones: ["Se ríe", "Le dice que tiene razón", "Le escucha con respeto sin discutir ni darle la razón, y lo comunica al personal si le parece relevante", "Le explica que eso es imposible"],
    correcta: "C",
    explicacion: "Neutralidad ante las ideas delirantes. (Supuesto · salud mental)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Ve a un paciente ingresado en pijama, con pulsera y desorientado, saliendo por la puerta principal. ¿Qué hace?",
    opciones: ["Llama a sus familiares para que vengan", "Le deja salir", "Le acompaña con calma, intenta que no salga y avisa inmediatamente a su unidad", "Le agarra con fuerza"],
    correcta: "C",
    explicacion: "Posible fuga de un paciente desorientado. (Supuesto · vigilancia)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Al final del turno de noche, ¿qué debe hacer con las incidencias que ha tenido?",
    opciones: ["Contarlas solo si alguien pregunta", "Olvidarlas", "Comunicarlas al responsable o al compañero que le releva, según el procedimiento", "Escribirlas en las redes sociales"],
    correcta: "C",
    explicacion: "Continuidad del servicio. (Supuesto · organización)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Está de celador en un centro de salud. Al cerrar por la tarde, ¿qué comprueba?",
    opciones: ["Que no queda nadie dentro, que puertas y ventanas están cerradas y que no hay aparatos o luces encendidas innecesariamente", "Que la sala de espera está ordenada", "Solo la puerta principal", "Nada, cierra con llave y se va"],
    correcta: "A",
    explicacion: "Revisión completa antes del cierre. (Supuesto · apertura y cierre)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Un usuario sordo llega al mostrador de información. ¿Cómo le atiende?",
    opciones: ["Dirigiéndose a su acompañante", "De frente, hablando despacio y con claridad, y por escrito si es necesario", "Hablándole más alto", "Pidiéndole que vuelva con un intérprete"],
    correcta: "B",
    explicacion: "Adaptación de la comunicación. (Supuesto · atención al usuario)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Encuentra una cartera con documentación y dinero en una sala de espera. ¿Qué hace?",
    opciones: ["La deja donde estaba", "La entrega en el lugar establecido para objetos perdidos, dejando constancia", "Se la queda hasta que alguien la reclame", "Saca el dinero para custodiarlo aparte"],
    correcta: "B",
    explicacion: "Registro y depósito. (Supuesto · objetos perdidos)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Le piden que lleve el carro de dosis unitarias desde farmacia a la planta. Un paciente le pide que le dé su pastilla antes. ¿Qué hace?",
    opciones: ["Abre el carro para comprobarlo", "Le da la pastilla si sabe cuál es", "Le explica que la medicación se la dará la enfermera y entrega el carro en el control", "Le da la pastilla de su cajetín"],
    correcta: "C",
    explicacion: "El celador nunca administra medicación. (Supuesto · farmacia)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Al empujar una silla de ruedas hacia un bordillo que hay que subir, ¿cómo procede?",
    opciones: ["Pide al paciente que se levante", "Empuja fuerte para que salte el bordillo", "Inclina la silla hacia atrás para levantar las ruedas delanteras, las apoya en el bordillo y luego sube las traseras", "Levanta la silla en peso"],
    correcta: "C",
    explicacion: "Técnica correcta para subir bordillos. (Supuesto · traslado en silla de ruedas)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Va a entrar en un ascensor con un paciente en silla de ruedas. ¿Cómo entra?",
    opciones: ["Entra usted primero, de espaldas, tirando de la silla", "Deja entrar al paciente solo", "Empuja la silla de frente y entra después", "Entra en el siguiente ascensor"],
    correcta: "A",
    explicacion: "Pregunta del examen Sergas 2019. (Supuesto · traslado en silla de ruedas)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Está en la consulta de traumatología y le piden sujetar la pierna de un paciente con un yeso recién hecho. ¿Cómo lo sujeta?",
    opciones: ["Por los dedos del pie", "Con la punta de los dedos", "Apoyando el yeso en el borde de la camilla", "Con la palma de la mano, sin apretar con los dedos"],
    correcta: "D",
    explicacion: "El yeso húmedo se deforma con la presión de los dedos. (Supuesto · traumatología)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "En radiología le piden que sujete a un niño durante una radiografía. Usted está embarazada. ¿Qué hace?",
    opciones: ["Lo sujeta rápido", "Lo sujeta con doble delantal plomado", "Lo sujeta sin decir nada", "Informa de su embarazo y no participa en la exposición; lo hará otra persona con protección"],
    correcta: "D",
    explicacion: "Protección especial de la trabajadora embarazada. (Supuesto · radioprotección)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "En radiología le piden que sujete a un paciente agitado durante la placa. ¿Qué protección necesita?",
    opciones: ["Ninguna, es solo un momento", "Solo una mascarilla", "Gafas de sol", "Delantal plomado y guantes plomados, sin exponerse al haz directo"],
    correcta: "D",
    explicacion: "Protección frente a la radiación. (Supuesto · radioprotección)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Llega una ambulancia con un paciente en camilla. ¿Cómo hace la transferencia a la camilla del hospital?",
    opciones: ["Pidiéndole que se cambie solo", "Bajando al paciente en brazos", "Colocando ambas camillas juntas, a la misma altura y frenadas, y pasando al paciente de forma coordinada", "Dejándole en la camilla de la ambulancia en el pasillo"],
    correcta: "C",
    explicacion: "Transferencia segura. (Supuesto · urgencias)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Le asignan a la puerta de urgencias. Llega una ambulancia de clase C. ¿Qué tipo de ambulancia es?",
    opciones: ["De soporte vital básico", "Colectiva de transporte programado", "De soporte vital avanzado", "Convencional no asistencial"],
    correcta: "C",
    explicacion: "Clase C: soporte vital avanzado. (Supuesto · ambulancias (RD 836/2012))"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Un paciente de diálisis viene tres veces por semana en una ambulancia con otros pacientes sentados. ¿Qué clase de ambulancia es?",
    opciones: ["A2, colectiva", "A1, convencional", "C, soporte vital avanzado", "B, soporte vital básico"],
    correcta: "A",
    explicacion: "Transporte colectivo no urgente. (Supuesto · ambulancias (RD 836/2012))"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Una enfermera de triaje ha clasificado a un paciente con color naranja. ¿Qué significa para usted?",
    opciones: ["Que puede esperar varias horas", "Que debe volver otro día", "Que está pendiente de alta", "Que es muy urgente y debe trasladarlo enseguida donde le indiquen"],
    correcta: "D",
    explicacion: "Naranja: muy urgente. (Supuesto · triaje Manchester)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "En la sala de espera de urgencias hay un paciente clasificado en verde y otro en amarillo. Le piden pasar a uno a un box. ¿A quién pasa primero?",
    opciones: ["Al verde, que llegó antes", "Al que le indique enfermería; en principio, al amarillo, que es más urgente", "Al que más proteste", "Al de más edad"],
    correcta: "B",
    explicacion: "El orden lo marca la prioridad asignada. (Supuesto · triaje Manchester)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Un paciente detenido llega a urgencias esposado y custodiado por dos agentes. ¿Qué hace usted?",
    opciones: ["Le quita las esposas", "Asume su custodia", "Realiza sus funciones habituales de traslado; la custodia corresponde a los agentes", "Le impide entrar"],
    correcta: "C",
    explicacion: "Cada uno en sus funciones. (Supuesto · urgencias)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Un paciente llega inconsciente a urgencias con un reloj, una cadena de oro y la cartera. ¿Qué hace con estos objetos?",
    opciones: ["Los deja en el box", "Se recogen, se registran y se custodian según el protocolo, a ser posible con un testigo", "Los guarda en su taquilla", "Se los da al primer familiar que llegue sin comprobar"],
    correcta: "B",
    explicacion: "Registro y custodia. (Supuesto · urgencias)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Aterriza el helicóptero sanitario en el helipuerto con las palas aún girando. ¿Cómo se acerca usted?",
    opciones: ["Espera la indicación de la tripulación y se acerca por la parte delantera, a la vista del piloto", "Se acerca corriendo antes de que pare", "No se acerca nunca", "Se acerca por detrás para no molestar"],
    correcta: "A",
    explicacion: "Nunca por la parte trasera (rotor de cola). (Supuesto · transporte sanitario)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Le llaman para trasladar desde urgencias a la UCI a un paciente intubado y monitorizado. ¿Cómo se hace el traslado?",
    opciones: ["Sin monitor para ir más ligero", "Usted solo, lo más rápido posible", "Acompañado del personal sanitario, con monitorización y cuidando el tubo y las conexiones", "Con la familia en lugar del personal sanitario"],
    correcta: "C",
    explicacion: "Paciente crítico: traslado acompañado. (Supuesto · traslado de críticos)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Durante el traslado de un paciente, se sale la vía del brazo y sangra un poco. ¿Qué hace?",
    opciones: ["La vuelve a meter", "Tira el resto de la vía", "Presiona suavemente con una gasa si puede, avisa de inmediato a enfermería y no intenta recolocarla", "Sigue el traslado sin decir nada"],
    correcta: "C",
    explicacion: "El celador no manipula vías. (Supuesto · traslado con dispositivos)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "En la UCI le piden ayuda para colocar en prono a un paciente ventilado. ¿Quién dirige la maniobra?",
    opciones: ["El paciente", "Cualquiera", "La persona que controla la cabeza y el tubo, normalmente personal sanitario", "Usted, por ser quien hace más fuerza"],
    correcta: "C",
    explicacion: "Coordinación por quien controla la vía aérea. (Supuesto · unidades de críticos)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Un paciente con tracción esquelética en la pierna debe ser trasladado a radiología en su cama. ¿Qué cuida especialmente?",
    opciones: ["Que las pesas cuelguen libremente y no choquen ni se apoyen durante el traslado", "Quitar las pesas para moverlo", "Apoyar las pesas en la cama", "Pasarlo a una silla de ruedas"],
    correcta: "A",
    explicacion: "La tracción no se retira sin indicación. (Supuesto · traumatología)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Un paciente amputado de una pierna le pide una almohada bajo el muñón para estar más cómodo durante horas. ¿Qué hace?",
    opciones: ["Lo consulta con enfermería, porque mantener el muñón flexionado favorece contracturas", "Le pone dos almohadas", "Se la pone sin más", "Le dice que no sin explicar"],
    correcta: "A",
    explicacion: "Evitar la flexión mantenida. (Supuesto · traumatología)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Tiene que subir hacia la cabecera a un paciente que colabora. ¿Qué le pide?",
    opciones: ["Que se siente primero", "Que estire las piernas y se deje llevar", "Que tire de la barandilla con fuerza", "Que flexione las rodillas, apoye los pies y empuje mientras usted le ayuda"],
    correcta: "D",
    explicacion: "El paciente empuja con las piernas. (Supuesto · movilización)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Antes de subir a un paciente hacia la cabecera, ¿qué hace con la almohada?",
    opciones: ["La deja bajo la cabeza", "La retira de la habitación", "La coloca contra el cabecero para proteger la cabeza", "La pone bajo los pies"],
    correcta: "C",
    explicacion: "Protección frente a golpes. (Supuesto · movilización)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Va a coger una caja de 20 kg del suelo del almacén. ¿Cómo lo hace?",
    opciones: ["La levanta girando el tronco para dejarla en la estantería", "Se dobla por la cintura y tira de la caja", "Se acerca, separa los pies, flexiona las rodillas con la espalda recta y se levanta con las piernas, sin girar el tronco", "La levanta con los brazos estirados"],
    correcta: "C",
    explicacion: "Técnica de manipulación de cargas. (Supuesto · mecánica corporal)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Tiene que dejar una caja pesada en la balda más alta de una estantería. ¿Qué hace?",
    opciones: ["Se sube a la balda inferior", "La coloca en una balda baja si es posible; si no, usa una escalera estable y pide ayuda", "Se sube a una silla con ruedas", "Lanza la caja hacia arriba"],
    correcta: "B",
    explicacion: "Lo pesado, abajo; y sin improvisar escaleras. (Supuesto · almacén)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "En el inventario del almacén, el recuento físico de guantes no coincide con el informático. ¿Qué hace?",
    opciones: ["Cambia el dato del ordenador para que coincida", "Lo ignora", "Lo anota y lo comunica al responsable del almacén", "Repone guantes de otra planta"],
    correcta: "C",
    explicacion: "Las diferencias se comunican. (Supuesto · almacén)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "La planta de cirugía le entrega un vale de pedido urgente de material. ¿Qué hace?",
    opciones: ["Lo deja para el reparto del día siguiente", "Lo entrega en el almacén para su preparación y luego lleva el pedido a la persona responsable de la planta", "Coge el material usted mismo de otra planta", "Lo pide directamente al proveedor"],
    correcta: "B",
    explicacion: "Circuito interno del pedido. (Supuesto · distribución de pedidos)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "En la unidad de neonatos le piden que lleve una incubadora de transporte a paritorio. ¿Qué tiene en cuenta?",
    opciones: ["Desenchufarla y dejarla en el pasillo", "Que puede entrar con ropa de calle", "Llevarla lo más rápido posible aunque sea por rampas sin control", "Seguir las normas de higiene de la unidad y transportarla con cuidado y sin golpes"],
    correcta: "D",
    explicacion: "Pacientes muy vulnerables. (Supuesto · neonatos)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "En el área quirúrgica le piden que vaya a buscar sangre al banco durante una intervención. Al volver, ¿a quién la entrega?",
    opciones: ["La deja en el pasillo", "Al personal de enfermería circulante del quirófano", "La deja en la mesa de instrumental", "Al cirujano que está operando"],
    correcta: "B",
    explicacion: "Entrega al personal no estéril responsable. (Supuesto · quirófano)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Le piden que lleve a anatomía patológica una pieza quirúrgica en un bote con formol. Al cogerlo, ve que el tapón está flojo. ¿Qué hace?",
    opciones: ["Lo cierra con esparadrapo y no dice nada", "Lo lleva así con cuidado", "Avisa para que se cierre correctamente antes del traslado", "Tira el formol para que pese menos"],
    correcta: "C",
    explicacion: "El formol es tóxico; el recipiente debe ir bien cerrado. (Supuesto · traslado de muestras)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Termina una intervención y el paciente pasa a la URPA. ¿Cuándo puede trasladarlo a la planta?",
    opciones: ["En cuanto sale del quirófano", "Cuando el paciente lo pida", "Cuando el personal sanitario de la URPA indique que puede irse", "Cuando llegue su familia"],
    correcta: "C",
    explicacion: "El alta de la URPA es una decisión sanitaria. (Supuesto · quirófano)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Necesita salir un momento del bloque quirúrgico con el pijama verde para ir a otro servicio. ¿Qué hace?",
    opciones: ["Cumple el protocolo del centro (bata encima o cambio de ropa) y al volver cambia gorro y calzas", "Se quita solo el gorro", "Sale sin pijama", "Sale y vuelve sin más"],
    correcta: "A",
    explicacion: "Evitar introducir contaminación. (Supuesto · quirófano)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Está en el quirófano y, al mover un aparato, roza con el codo un paño estéril del campo. ¿Qué hace?",
    opciones: ["Lo recoloca usted", "Lo comunica inmediatamente para que se sustituya", "Lo limpia con alcohol", "Se aparta y no dice nada"],
    correcta: "B",
    explicacion: "Toda contaminación debe comunicarse. (Supuesto · quirófano)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Un paciente con meningitis meningocócica lleva 4 horas con antibiótico y debe ir a hacerse un TAC. ¿Qué protección usa usted?",
    opciones: ["Solo guantes", "Mascarilla quirúrgica (aislamiento por gotas)", "Ninguna", "Traje de protección completo con FFP3"],
    correcta: "B",
    explicacion: "Gotas durante las primeras 24 horas de tratamiento. (Supuesto · aislamientos)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Un paciente con varicela va a ser trasladado a otra planta. ¿Qué tipo de aislamiento requiere?",
    opciones: ["Protector", "Solo de contacto", "Por gotas", "Aéreo"],
    correcta: "D",
    explicacion: "La varicela se transmite por vía aérea. (Supuesto · aislamientos)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Un paciente trasplantado de médula está en aislamiento protector. Usted tiene un catarro. ¿Qué hace?",
    opciones: ["Entra con la mascarilla por debajo de la nariz", "Lo comunica para que otra persona entre o para extremar las medidas de protección", "Entra sin decir nada", "Entra solo si es rápido"],
    correcta: "B",
    explicacion: "Protección del paciente inmunodeprimido. (Supuesto · aislamientos)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Ha terminado de trasladar en camilla a un paciente con sarna. ¿Qué hace con la camilla?",
    opciones: ["Solo cambia la sábana", "La deja en el pasillo", "La limpia y desinfecta (o la envía a limpiar) según el protocolo antes de volver a usarla", "La usa enseguida con otro paciente"],
    correcta: "C",
    explicacion: "Prevención de la transmisión por contacto. (Supuesto · aislamientos)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Va a ayudar a hacer la cama de un paciente y retira las sábanas sucias. ¿Cómo las manipula?",
    opciones: ["Sacudiéndolas para quitar restos", "Pegadas al uniforme para llevarlas", "Dejándolas en el suelo", "Sin sacudirlas, enrollándolas hacia dentro y dejándolas en la bolsa de ropa sucia"],
    correcta: "D",
    explicacion: "Evitar la dispersión de microorganismos. (Supuesto · higiene hospitalaria)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Una familia muy afectada acaba de saber que su padre ha fallecido y quiere quedarse un rato con él antes del traslado. ¿Qué hace?",
    opciones: ["Les da información médica sobre el fallecimiento", "Les dice que no se puede y se lleva el cuerpo", "Les mete prisa", "Lo consulta con el personal responsable y, si es posible, facilita que se despidan con intimidad"],
    correcta: "D",
    explicacion: "Trato humano y respeto. (Supuesto · fallecidos)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Al entregar un cadáver a la empresa funeraria, ¿qué comprueba?",
    opciones: ["Nada, la funeraria se encarga", "Solo el nombre de la funeraria", "El dinero del servicio", "La identidad del fallecido y la documentación necesaria, según el protocolo"],
    correcta: "D",
    explicacion: "Evitar errores de identificación. (Supuesto · mortuorio)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Le avisan del fallecimiento de un paciente aislado por una bacteria multirresistente. ¿Cómo hace el traslado?",
    opciones: ["Envolviendo el cuerpo en la sábana de la cama sin bolsa", "Con mascarilla solo", "Manteniendo las medidas de protección de contacto durante la manipulación y el traslado", "Sin protección, porque ya ha fallecido"],
    correcta: "C",
    explicacion: "El riesgo de transmisión persiste. (Supuesto · fallecidos)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "En el mortuorio, al hacer el registro de entrada de un cadáver, observa que la pulsera no coincide con la etiqueta. ¿Qué hace?",
    opciones: ["Elige el de la pulsera", "Lo deja para el turno siguiente", "Elige el nombre de la etiqueta", "No continúa y lo comunica inmediatamente al responsable para aclararlo"],
    correcta: "D",
    explicacion: "Un error de identificación de un cadáver es muy grave. (Supuesto · mortuorio)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Mientras traslada a un paciente, otro paciente le pide que llame a la enfermera porque se encuentra mal. ¿Qué hace?",
    opciones: ["Avisa de inmediato al personal de enfermería y después continúa con su traslado", "Le dice que use el timbre y sigue", "Lo ignora porque está ocupado", "Lo atiende usted y deja el traslado"],
    correcta: "A",
    explicacion: "Avisar es rápido y puede ser vital. (Supuesto · organización)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Está en consultas externas y un paciente en silla de ruedas está aparcado en una zona de paso con la silla sin frenar. ¿Qué hace?",
    opciones: ["Le avisa, frena la silla y la coloca en un lugar seguro", "Le dice que se mueva solo", "No hace nada", "Llama a seguridad"],
    correcta: "A",
    explicacion: "Prevención de accidentes. (Supuesto · seguridad del paciente)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Un compañero comenta en la cafetería, delante de otras personas, datos de la enfermedad de un vecino suyo ingresado. ¿Qué debería hacer usted?",
    opciones: ["Grabarlo para denunciarlo en redes", "Nada, es normal", "Recordarle que está vulnerando el deber de secreto y no seguir la conversación", "Añadir lo que usted sabe"],
    correcta: "C",
    explicacion: "El deber de secreto es de todos los trabajadores. (Supuesto · confidencialidad)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Un familiar le pide que le haga una fotocopia del informe de alta de su madre ingresada. ¿Qué hace?",
    opciones: ["Le da el original", "Le indica que la documentación clínica se solicita por el procedimiento establecido (atención al paciente o el propio servicio)", "Le hace una foto con el móvil", "Coge la historia y le hace la copia"],
    correcta: "B",
    explicacion: "El acceso a la historia clínica tiene un procedimiento propio. (Supuesto · documentación clínica)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Al usar la fotocopiadora se produce un atasco. ¿Qué hace?",
    opciones: ["La deja así sin avisar", "Mete la mano a fondo con la máquina en marcha", "Golpea la máquina", "Sigue las instrucciones del equipo, abre con cuidado evitando la zona caliente y, si no lo resuelve, avisa"],
    correcta: "D",
    explicacion: "Riesgo de quemaduras y atrapamiento. (Supuesto · reprografía)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Le encargan imprimir unos carteles en tamaño doble del folio normal. ¿Qué tamaño elige?",
    opciones: ["A3", "A5", "A4", "A6"],
    correcta: "A",
    explicacion: "A3 es el doble del A4. (Supuesto · reprografía)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Está escribiendo un documento en Word y se ha equivocado borrando un párrafo. ¿Qué atajo usa para recuperarlo?",
    opciones: ["Ctrl + Z", "Ctrl + G", "Ctrl + P", "Ctrl + V"],
    correcta: "A",
    explicacion: "Deshacer. (Supuesto · ofimática)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "En Excel, una celda muestra ##### en lugar del número. ¿Qué hace?",
    opciones: ["Reinicia el ordenador", "Borra la fórmula", "Cambia el número a texto", "Ensancha la columna"],
    correcta: "D",
    explicacion: "La columna es demasiado estrecha. (Supuesto · hoja de cálculo)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Al terminar su turno, ha usado el ordenador del control de celadores. ¿Qué hace antes de irse?",
    opciones: ["Deja la sesión abierta para el siguiente", "Apaga solo la pantalla", "Cierra su sesión", "Deja apuntada su contraseña"],
    correcta: "C",
    explicacion: "Las credenciales son personales. (Supuesto · seguridad informática)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Un desconocido le da un USB en la puerta y le pide que imprima unos documentos en el ordenador de información. ¿Qué hace?",
    opciones: ["Imprime y se queda el USB", "Lo conecta y analiza con el antivirus del móvil", "No conecta el USB y le explica que no es posible, siguiendo las normas de seguridad del centro", "Lo conecta para ayudarle"],
    correcta: "C",
    explicacion: "Los dispositivos externos pueden introducir virus. (Supuesto · seguridad informática)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "En la recepción de un hospital, una persona mayor no encuentra la consulta de cardiología. ¿Qué hace?",
    opciones: ["Le indica el camino con claridad y, si lo ve desorientado o con dificultades, le acompaña", "Le señala con la mano sin más", "Le dice que pregunte en admisión", "Le da un plano y sigue con lo suyo"],
    correcta: "A",
    explicacion: "Acogida y orientación. (Supuesto · atención al usuario)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Un usuario muy enfadado le insulta en el mostrador de información. ¿Cómo responde?",
    opciones: ["Le echa del hospital", "Se marcha del mostrador sin decir nada", "Le insulta también", "Con calma y tono sereno, sin entrar en el enfrentamiento; si continúa o hay riesgo, pide ayuda según el protocolo de agresiones"],
    correcta: "D",
    explicacion: "El Sergas tiene protocolo frente a agresiones. (Supuesto · atención al usuario)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Un compañero sufre una agresión física de un familiar en la planta. ¿Qué hace?",
    opciones: ["Responde con violencia", "Graba la escena con el móvil", "Avisa a seguridad y al responsable, ayuda a su compañero sin ponerse en riesgo y luego se sigue el protocolo", "Se va para no implicarse"],
    correcta: "C",
    explicacion: "Protección y comunicación. (Supuesto · agresiones)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Una paciente le pide que llame a su marido porque no tiene móvil, pero en su historia consta una orden de alejamiento contra él. Usted lo sabe por el personal. ¿Qué hace?",
    opciones: ["Lo llama porque ella lo pide", "Le da el teléfono para que llame ella", "Le pregunta a la paciente por qué hay una orden", "No lo llama y lo comunica al personal responsable"],
    correcta: "D",
    explicacion: "La seguridad de la víctima y la coordinación con el equipo son prioritarias. (Supuesto · violencia de género)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Una compañera le confía que su pareja la controla y la amenaza. ¿Qué puede hacer?",
    opciones: ["Decirle que exagera", "Hablar con su pareja", "Escucharla sin juzgar e informarle de recursos como el 016, respetando su decisión", "Contárselo a todos los compañeros"],
    correcta: "C",
    explicacion: "Apoyo e información de recursos. (Supuesto · violencia de género)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Va a trasladar a un paciente con un drenaje torácico. ¿Dónde coloca el recipiente del drenaje?",
    opciones: ["Tumbado en la camilla", "Sobre el pecho del paciente", "Por debajo del tórax del paciente y en posición vertical", "Colgado por encima de la cabeza"],
    correcta: "C",
    explicacion: "Evita el retorno de líquido o aire. (Supuesto · traslado con dispositivos)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Al trasladar a un paciente con suero, el pie de gotero de la camilla está roto. ¿Qué hace?",
    opciones: ["Lleva el suero colgando por debajo de la camilla", "Busca otro soporte y mantiene el suero por encima del punto de punción", "Desconecta el suero", "Pone la bolsa sobre el paciente"],
    correcta: "B",
    explicacion: "El suero debe quedar más alto que la vía. (Supuesto · traslado con dispositivos)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Va a pasar a un paciente de la cama a la camilla entre tres personas. Usted está en la cabeza. ¿Qué hace?",
    opciones: ["Tira solo de los brazos", "Espera a que otro dé la orden", "Sujeta cabeza y hombros y da la orden para que todos se muevan a la vez", "Se coloca en los pies"],
    correcta: "C",
    explicacion: "Quien controla la cabeza coordina. (Supuesto · transferencias)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Un paciente con sospecha de lesión medular debe girarse para ponerle una tabla debajo. ¿Cómo se hace?",
    opciones: ["En bloque, entre varias personas y manteniendo alineados cabeza, cuello y tronco", "Que se gire él solo", "Girando primero los hombros y luego la cadera", "Sentándolo"],
    correcta: "A",
    explicacion: "Movilización en bloque. (Supuesto · traumatismos)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Un paciente con traumatismo craneoencefálico está en la camilla. La enfermera le pide que ajuste la cabecera. ¿Qué posición es la habitual si no hay contraindicación?",
    opciones: ["Totalmente plana con la cabeza colgando", "Trendelenburg", "Cabecera elevada unos 30°", "Decúbito prono"],
    correcta: "C",
    explicacion: "Favorece el drenaje venoso cerebral. (Supuesto · posiciones)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Un paciente con mucha dificultad para respirar no tolera estar tumbado. ¿En qué posición le ayudaría a colocarse?",
    opciones: ["Decúbito prono", "Ortopneica o Fowler alta", "Roser", "Trendelenburg"],
    correcta: "B",
    explicacion: "Sentado respira mejor. (Supuesto · posiciones)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Le piden colocar a una paciente en posición ginecológica para una exploración. ¿Cómo queda?",
    opciones: ["Boca abajo con las piernas separadas", "De lado con la pierna superior flexionada", "Boca arriba, con las piernas flexionadas, separadas y apoyadas en las perneras", "De rodillas con el pecho apoyado"],
    correcta: "C",
    explicacion: "Litotomía. (Supuesto · posiciones)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Le piden colocar a un paciente en posición genupectoral para una exploración. ¿Cómo queda?",
    opciones: ["De rodillas, con el pecho y la cara apoyados en la camilla", "Boca arriba con las piernas en alto", "Sentado inclinado hacia delante", "De lado"],
    correcta: "A",
    explicacion: "Genupectoral o mahometana. (Supuesto · posiciones)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Durante la noche, oye ruidos en la zona de consultas, que está cerrada. ¿Qué hace?",
    opciones: ["Entra solo a buscar al intruso", "Llama a un compañero de otra planta para ir juntos sin avisar a nadie", "Avisa a seguridad o a su responsable y, si se acerca, lo hace con precaución y sin enfrentarse", "No hace nada"],
    correcta: "C",
    explicacion: "El celador no tiene funciones de seguridad privada. (Supuesto · vigilancia)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Detecta una fuga de agua importante en un pasillo de la planta durante la noche. ¿Qué hace?",
    opciones: ["Llama a los bomberos", "Lo seca y no avisa", "Señaliza o evita el paso por la zona mojada, intenta cortar el agua si es seguro y avisa a mantenimiento", "Lo deja para el turno de mañana"],
    correcta: "C",
    explicacion: "Prevenir caídas y daños. (Supuesto · vigilancia)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Percibe olor a quemado en un cuarto de instalaciones. ¿Qué hace?",
    opciones: ["Da la alarma según el plan de emergencia y avisa al responsable", "Abre la puerta y entra a investigar con el ascensor", "Espera a ver si sale humo", "Desconecta todos los aparatos del hospital"],
    correcta: "A",
    explicacion: "Ante un posible incendio, alarma. (Supuesto · plan de autoprotección)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Durante un incendio, un familiar quiere bajar por el ascensor con su padre en silla de ruedas. ¿Qué le dice?",
    opciones: ["Que baje rápido", "Que no se usan los ascensores y le indica la vía de evacuación según el plan", "Que suba a la planta de arriba", "Que espere en la habitación"],
    correcta: "B",
    explicacion: "Los ascensores no se usan en un incendio. (Supuesto · plan de autoprotección)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Le avisan de una amenaza de bomba y ve una mochila abandonada en la sala de espera. ¿Qué hace?",
    opciones: ["No la toca, aleja a las personas y avisa siguiendo el plan de emergencia", "La lleva a objetos perdidos", "La abre para comprobar qué hay", "La lleva a la puerta"],
    correcta: "A",
    explicacion: "Nunca se manipulan objetos sospechosos. (Supuesto · plan de autoprotección)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "En un accidente con múltiples víctimas, llegan a urgencias pacientes con tarjetas de colores. Le piden trasladar primero a los de mayor prioridad. ¿Qué color es?",
    opciones: ["Amarillo", "Rojo", "Negro", "Verde"],
    correcta: "B",
    explicacion: "Rojo: inmediato. (Supuesto · múltiples víctimas)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Un paciente intoxicado por un producto químico llega a urgencias con la ropa impregnada. ¿Qué hace usted?",
    opciones: ["Le quita la ropa con las manos sin protección", "Lo pasa a la sala de espera general", "Sigue las indicaciones y el protocolo de descontaminación, con la protección adecuada", "Lo manda a ducharse al baño público"],
    correcta: "C",
    explicacion: "Evitar la contaminación del personal y otros pacientes. (Supuesto · urgencias)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Llega a urgencias un niño de 10 años solo, con un esguince, tras caerse en el colegio. ¿Qué hace?",
    opciones: ["No lo atiende", "Lo acompaña a admisión y triaje y se avisa a sus padres o tutores según el protocolo", "Lo manda a casa a buscar a sus padres", "Le deja solo en la sala de espera"],
    correcta: "B",
    explicacion: "Atención y localización de los responsables. (Supuesto · menores)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Una paciente ingresada en pediatría está acompañada por su madre fuera del horario de visitas. ¿Qué hace?",
    opciones: ["Nada, los padres pueden acompañar al menor hospitalizado según las normas de la unidad", "Le pide que firme un permiso especial", "Avisa a seguridad", "Le pide a la madre que salga"],
    correcta: "A",
    explicacion: "El acompañamiento de los padres es un derecho del menor. (Supuesto · pediatría)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Un paciente desorientado de una planta intenta bajar de la cama saltando por encima de la barandilla. ¿Qué hace?",
    opciones: ["Le tranquiliza, evita la caída y avisa a enfermería", "Le ata a la cama", "Le deja salir", "Baja las barandillas y se va"],
    correcta: "A",
    explicacion: "La contención la decide el personal sanitario. (Supuesto · seguridad del paciente)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Va a sacar a un paciente de la cama a la silla con una grúa. ¿Qué cuida?",
    opciones: ["El arnés adecuado, los frenos puestos y no dejar nunca al paciente suspendido sin vigilancia", "Elevarlo lo más alto posible", "Quitar los frenos para mover la cama", "Que el paciente se sujete solo"],
    correcta: "A",
    explicacion: "Uso seguro de la grúa. (Supuesto · ayudas técnicas)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Va a usar una silla de ruedas y comprueba que el freno derecho no funciona. ¿Qué hace?",
    opciones: ["La deja en el pasillo sin avisar", "La usa sujetándola con el pie", "La arregla con cinta", "No la usa, la retira y comunica la avería"],
    correcta: "D",
    explicacion: "Material defectuoso fuera de uso. (Supuesto · mobiliario)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Al terminar un traslado, deja la camilla en el pasillo junto a la salida de emergencia porque no hay sitio. ¿Es correcto?",
    opciones: ["Sí, si la tapa con una sábana", "Sí, si la frena", "No, las vías de evacuación deben estar siempre libres", "Sí, si es por poco tiempo"],
    correcta: "C",
    explicacion: "Vías de evacuación libres. (Supuesto · plan de autoprotección)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Le piden que lleve el carro de paradas urgentemente a una habitación. ¿Qué es lo que debe saber hacer?",
    opciones: ["Saber dónde está y llevarlo rápidamente sin manipular su contenido", "Reponer el material que falte", "Revisar la medicación antes de llevarlo", "Usar el desfibrilador manual"],
    correcta: "A",
    explicacion: "La revisión y el uso corresponden al personal sanitario. (Supuesto · reanimación)"
  },
  {
    tema: "Supuestos prácticos",
    enunciado: "Tiene que llevar un DEA a la cafetería porque un trabajador ha caído al suelo inconsciente. ¿Qué hace al llegar si nadie sanitario ha llegado aún y usted está formado?",
    opciones: ["Comprueba si respira, pide ayuda, inicia la RCP y conecta el DEA siguiendo sus instrucciones", "Lo sienta en una silla", "Espera sin hacer nada", "Le da agua"],
    correcta: "A",
    explicacion: "El DEA guía al usuario con mensajes de voz. (Supuesto · soporte vital básico)"
  }
];
