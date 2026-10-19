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
  },

  // ===================================================================
  //  EXAMEN OFICIAL SERGAS · CELADOR/A (OPE 2022, examen 2024) · PARTE COMÚN
  //  Traducido al castellano desde el original en gallego.
  //  La C9 no está porque fue anulada.
  // ===================================================================
  {
    tema: "Protección de datos",
    origen: "Examen 2024 · Común C1",
    enunciado: "Según la Ley Orgánica 3/2018, de 5 de diciembre, de protección de datos personales y garantía de los derechos digitales, el tratamiento de datos personales de un menor de edad únicamente podrá fundarse en su consentimiento cuando sea:",
    opciones: ["Mayor de 13 años", "Mayor de 14 años", "Mayor de 15 años", "Mayor de 16 años"],
    correcta: "B",
    explicacion: "El artículo 7 de la LO 3/2018 permite que el menor consienta por sí mismo a partir de los 14 años."
  },
  {
    tema: "Legislación sanitaria",
    origen: "Examen 2024 · Común C2",
    enunciado: "Según la Ley de Salud de Galicia, señale cuál de los/as siguientes no tendrá la condición de autoridad sanitaria:",
    opciones: ["Alcaldes o alcaldesas", "Gerente del hospital", "Persona titular de la consellería con competencias en materia de sanidad", "Consello de la Xunta de Galicia"],
    correcta: "B",
    explicacion: "La Ley de Salud de Galicia da condición de autoridad sanitaria al Consello da Xunta, a la persona titular de la consellería y a alcaldes y alcaldesas, pero no al gerente de un hospital."
  },
  {
    tema: "Normativa del Sergas",
    origen: "Examen 2024 · Común C3",
    enunciado: "Según el Decreto 206/2005, de provisión de plazas del personal estatutario del Servicio Gallego de Salud, ¿qué ocurre si, en un proceso de selección fija, tras la publicación de la relación de aspirantes seleccionados, uno de ellos no opta por uno de los destinos ofertados, en el plazo y según el procedimiento establecido?",
    opciones: ["Se le habilitará un nuevo plazo para poder elegir su destino", "Se le adjudicará uno de los destinos ofertados que otros aspirantes seleccionados no hayan solicitado", "Se le reservará su plaza hasta la siguiente convocatoria", "No podrá ser nombrado, y quedarán sin efecto todas sus actuaciones"],
    correcta: "D",
    explicacion: "Quien no elige destino en plazo pierde el derecho: no puede ser nombrado y quedan sin efecto sus actuaciones."
  },
  {
    tema: "Normativa del Sergas",
    origen: "Examen 2024 · Común C4",
    enunciado: "Según el Decreto 206/2005, de provisión de plazas de personal estatutario del Servicio Gallego de Salud, señale cuál de los siguientes no es requisito para el acceso a la promoción interna, en los procesos de selección de personal estatutario fijo que se convoquen para otras categorías:",
    opciones: ["Tener un mínimo de dos años de servicios prestados en la categoría a la que desea promocionar", "Tener la condición de personal estatutario fijo de otra categoría de nivel académico igual o inferior al de aquella a la que se pretende acceder", "Estar en servicio activo en instituciones sanitarias del Servicio Gallego de Salud", "Tener nombramiento como personal estatutario fijo durante, al menos, dos años en la categoría de procedencia"],
    correcta: "A",
    explicacion: "Los dos años se exigen en la categoría de procedencia (opción D), no en la categoría a la que se quiere promocionar."
  },
  {
    tema: "Legislación sanitaria",
    origen: "Examen 2024 · Común C5",
    enunciado: "Según lo establecido en la Ley General de Sanidad, indique el organismo que acreditará los servicios de referencia, a los que podrán acceder todos los usuarios del Sistema Nacional de Salud, una vez agotadas las posibilidades de diagnóstico y tratamiento de los servicios especializados de la Comunidad Autónoma donde residan:",
    opciones: ["El Ministerio de Sanidad", "El Consejo de Ministros", "El Consejo Interterritorial del Sistema Nacional de Salud", "La Consejería de Sanidad de la Comunidad Autónoma en la que residan"],
    correcta: "A",
    explicacion: "Según el artículo 15 de la Ley General de Sanidad, los servicios de referencia los acredita el Ministerio de Sanidad."
  },
  {
    tema: "Estatuto de Autonomía de Galicia",
    origen: "Examen 2024 · Común C6",
    enunciado: "Según el Estatuto de Autonomía de Galicia, la potestad legislativa corresponde al Parlamento de Galicia y esta función:",
    opciones: ["No podrá ser delegada en ningún caso", "Solo podrá ser delegada, con los requisitos legales, en el Presidente de la Xunta de Galicia", "Solo podrá ser delegada, con los requisitos legales, en la Xunta de Galicia", "Solo podrá ser delegada, con los requisitos legales, en las Cortes Generales"],
    correcta: "C",
    explicacion: "El Estatuto permite que el Parlamento delegue la potestad legislativa solo en la Xunta de Galicia."
  },
  {
    tema: "Prevención de riesgos laborales",
    origen: "Examen 2024 · Común C7",
    enunciado: "Según la Ley 31/1995, de prevención de riesgos laborales, la función de vigilancia y control de la normativa sobre prevención de riesgos laborales corresponde a:",
    opciones: ["La Inspección de Trabajo y Seguridad Social", "El Instituto Nacional de Seguridad e Higiene en el Trabajo", "El Instituto Español de Prevención de Riesgos Laborales", "La Inspección Nacional de Prevención de Riesgos Laborales"],
    correcta: "A",
    explicacion: "El artículo 9 de la Ley 31/1995 atribuye la vigilancia y control de la normativa a la Inspección de Trabajo y Seguridad Social."
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
    tema: "Legislación sanitaria",
    origen: "Examen 2024 · Común C11 (reserva)",
    enunciado: "Respecto al acceso a la historia clínica, según lo establecido en la Ley 3/2001, reguladora del consentimiento informado y de la historia clínica de los pacientes, señale cuál de las siguientes afirmaciones es falsa:",
    opciones: ["El paciente tiene derecho de acceso a la documentación de la historia clínica y a obtener copia de los datos que figuran en ella", "Los órganos competentes para tramitar y resolver los procedimientos de responsabilidad patrimonial por el funcionamiento de la administración sanitaria tendrán derecho de acceso a la documentación de la historia clínica", "Estará permitido el acceso a la historia clínica completa a los familiares del paciente, cualquiera que sea su relación de parentesco", "El acceso a la historia clínica con fines judiciales, epidemiológicos, de salud pública, de investigación o docencia obliga a reservar los datos de identificación personal del paciente, de modo que quede asegurado su anonimato"],
    correcta: "C",
    explicacion: "Es falsa: los familiares no tienen acceso libre a la historia clínica completa solo por ser familiares."
  },
  {
    tema: "Estatuto Marco",
    origen: "Examen 2024 · Común C12 (reserva)",
    enunciado: "Señale cuál de las siguientes opciones es verdadera sobre las pagas extraordinarias, según lo establecido en el Estatuto Marco:",
    opciones: ["Serán tres al año", "Se devengarán preferentemente en los meses de marzo, septiembre y diciembre", "El importe de cada una de ellas será, como máximo, una mensualidad del sueldo", "Al importe de cada una se le añadirá la catorceava parte del importe anual del complemento de destino"],
    correcta: "D",
    explicacion: "Son dos pagas al año (junio y diciembre), y a cada una se le suma la catorceava parte del complemento de destino anual."
  },

  // ===================================================================
  //  EXAMEN OFICIAL · PARTE ESPECÍFICA TEÓRICA (E1 a E55)
  //  Traducido al castellano. La E53 no está porque fue anulada.
  // ===================================================================
  {
    tema: "Farmacia y material sanitario",
    origen: "Examen 2024 · Específico E1",
    enunciado: "Los medicamentos que se obtienen mediante técnicas de ingeniería genética se denominan:",
    opciones: ["Radiofármacos.", "Fórmulas magistrales.", "Biotecnológicos.", "Biológicos."],
    correcta: "C",
    explicacion: "Los medicamentos obtenidos por ingeniería genética se llaman biotecnológicos."
  },
  {
    tema: "Higiene, asepsia y esterilización",
    origen: "Examen 2024 · Específico E2",
    enunciado: "Según su peligrosidad infectiva, el material semicrítico es aquel que:",
    opciones: ["Requiere total asepsia. Es instrumental que temporal o definitivamente va a quedar introducido en el organismo.", "Está rigurosamente limpio y, en lo posible, desinfectado. No está en contacto con cavidades internas del organismo ni con vías de entrada al mismo.", "Debe estar desinfectado. No es imprescindible su esterilización.", "Ninguna es correcta."],
    correcta: "C",
    explicacion: "Material crítico: estéril. Semicrítico: desinfectado, sin necesidad de esterilizar. No crítico: limpio."
  },
  {
    tema: "Higiene, asepsia y esterilización",
    origen: "Examen 2024 · Específico E3",
    enunciado: "Uno de los siguientes no es uno de los considerados cinco momentos para el lavado de manos:",
    opciones: ["Antes de tocar a un paciente.", "Después de estar expuestos a líquidos corporales.", "Después de realizar una tarea aséptica.", "Después de estar en contacto con el entorno del paciente."],
    correcta: "C",
    explicacion: "Los 5 momentos de la OMS incluyen lavarse ANTES de una tarea aséptica, no después."
  },
  {
    tema: "Movilización de pacientes",
    origen: "Examen 2024 · Específico E4",
    enunciado: "Un reposapiés es:",
    opciones: ["Un taburete pequeño para apoyar los pies cuando se está sentado.", "Una silla traumatológica para mantener la alineación del cuerpo.", "Un sillón traumatológico para pacientes intervenidos de prótesis total de cadera.", "Ninguna es correcta."],
    correcta: "A",
    explicacion: "Un reposapiés es un taburete pequeño para apoyar los pies estando sentado."
  },
  {
    tema: "Comunicación y atención al paciente",
    origen: "Examen 2024 · Específico E5",
    enunciado: "¿Cuál no es una barrera en la comunicación debida a la transmisión?",
    opciones: ["La distorsión.", "El filtrado.", "El efecto halo.", "La sobrecarga de los canales."],
    correcta: "C",
    explicacion: "El efecto halo es una barrera de percepción del receptor, no de la transmisión del mensaje."
  },
  {
    tema: "Almacén y suministros",
    origen: "Examen 2024 · Específico E6",
    enunciado: "Señale la opción incorrecta en relación con los contratos de suministros:",
    opciones: ["La baja temeraria genera dudas sobre el cumplimiento del contrato.", "El material en depósito está inventariado.", "El plazo de aprovisionamiento es el tiempo que tarda el proveedor en suministrar un producto.", "El stock de seguridad es el que se constituye para hacer frente a situaciones excepcionales."],
    correcta: "B",
    explicacion: "El material en depósito sigue siendo del proveedor hasta que se usa, por eso no está inventariado por el centro."
  },
  {
    tema: "Higiene, asepsia y esterilización",
    origen: "Examen 2024 · Específico E7",
    enunciado: "¿Qué orden se debe seguir para colocarse las prendas necesarias en la asepsia quirúrgica cuando se corre riesgo de contaminación por gotas?",
    opciones: ["Calzas, gorro, gafas, bata, guantes, mascarilla.", "Calzas, gorro, mascarilla, gafas, bata, guantes.", "Gorro, calzas, mascarilla, bata, guantes, gafas.", "Gorro, calzas, bata, guantes, mascarilla, gafas."],
    correcta: "B",
    explicacion: "Orden: calzas, gorro, mascarilla, gafas, bata y, por último, guantes."
  },
  {
    tema: "Traslado de pacientes",
    origen: "Examen 2024 · Específico E8",
    enunciado: "No se consideran prestaciones sanitarias obligatorias:",
    opciones: ["El traslado por alta.", "El traslado de pacientes, órganos o personal sanitario para la realización de trasplantes.", "El traslado por asistencia continuada.", "Todas las respuestas anteriores son correctas."],
    correcta: "D",
    explicacion: "La respuesta oficial es que ninguno de los tres traslados se considera prestación sanitaria obligatoria."
  },
  {
    tema: "Quirófano",
    origen: "Examen 2024 · Específico E9",
    enunciado: "Cuando hablamos de quirófanos de tipo A, nos referimos a:",
    opciones: ["Quirófanos especializados, con un sistema de climatización de alto coste de implantación y de explotación.", "Quirófanos de muy altas prestaciones, aptos para neurocirugía y cirugía traumatológica.", "Quirófanos con instalación de difusión de aire laminar en el interior de la sala.", "Todas son correctas."],
    correcta: "D",
    explicacion: "Los quirófanos tipo A son los de muy altas prestaciones: flujo laminar, climatización costosa y aptos para neurocirugía y traumatología."
  },
  {
    tema: "Higiene, asepsia y esterilización",
    origen: "Examen 2024 · Específico E10",
    enunciado: "En relación con el lavado de manos antiséptico, marque la respuesta correcta:",
    opciones: ["Se realiza antes del aseo de los pacientes.", "Se realizará después de trasladar o manipular muestras biológicas.", "Con este método se reduce sensiblemente la flora bacteriana.", "Todas son correctas."],
    correcta: "C",
    explicacion: "El lavado antiséptico usa un jabón antiséptico y reduce de forma notable la flora bacteriana."
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
    tema: "Higiene, asepsia y esterilización",
    origen: "Examen 2024 · Específico E12",
    enunciado: "No es un método químico de esterilización por gas:",
    opciones: ["Óxido de etileno.", "Formaldehído.", "Formol.", "Peróxido de hidrógeno."],
    correcta: "C",
    explicacion: "El formol es formaldehído disuelto en agua, es decir, un líquido, no un gas. (La respuesta oficial se corrigió a la C)."
  },
  {
    tema: "Comunicación y atención al paciente",
    origen: "Examen 2024 · Específico E13",
    enunciado: "¿Cuáles no son elementos necesarios en la escucha activa?",
    opciones: ["Empatizar.", "Tener una postura activa.", "Retroalimentar.", "Ofrecer ayuda prematuramente."],
    correcta: "D",
    explicacion: "Ofrecer ayuda antes de tiempo interrumpe la escucha; empatizar, postura activa y retroalimentar sí forman parte de ella."
  },
  {
    tema: "Quirófano",
    origen: "Examen 2024 · Específico E14",
    enunciado: "Dentro de la aparatología de uso frecuente que se encuentra en los quirófanos, el instrumento que corta el tejido y/o cauteriza se denomina:",
    opciones: ["Bisturí de acero no fungible.", "Bisturí electrónico.", "Bisturí quirúrgico.", "Bisturí eléctrico."],
    correcta: "D",
    explicacion: "El bisturí eléctrico corta y además cauteriza (coagula) el tejido."
  },
  {
    tema: "Primeros auxilios",
    origen: "Examen 2024 · Específico E15",
    enunciado: "Para abrir la vía aérea a una persona que ha sufrido un accidente y de la que se sospecha que tiene lesión cervical, realizaremos la siguiente maniobra:",
    opciones: ["Maniobra de Heimlich.", "Maniobra de inclinación de cabeza y elevación del mentón.", "Maniobra mandibular.", "Maniobra frente-mentón."],
    correcta: "C",
    explicacion: "Con sospecha de lesión cervical se usa la tracción mandibular, que abre la vía aérea sin mover el cuello."
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
    tema: "Mortuorio y autopsias",
    origen: "Examen 2024 · Específico E17",
    enunciado: "Señale la temperatura a la que tiene que estar la cámara de refrigeración para la conservación de un cadáver:",
    opciones: ["Entre -3 °C y 5 °C.", "Entre -2 °C y 6 °C.", "Entre -2 °C y 5 °C.", "Entre -2 °C y 4 °C."],
    correcta: "C",
    explicacion: "Según la respuesta oficial, la cámara de refrigeración de cadáveres debe estar entre -2 °C y 5 °C."
  },
  {
    tema: "Quirófano",
    origen: "Examen 2024 · Específico E18",
    enunciado: "¿Cómo se llama el accesorio quirúrgico que se fija a la mesa, se sitúa encima del paciente y permite separar la zona de anestesia de la de incisión?",
    opciones: ["Separador de Farabeuf.", "Separador de Kocher.", "Marco de Balkan.", "Arco de narcosis."],
    correcta: "D",
    explicacion: "El arco de narcosis se fija a la mesa y separa la zona de anestesia del campo quirúrgico."
  },
  {
    tema: "Quirófano",
    origen: "Examen 2024 · Específico E19",
    enunciado: "Terminada una intervención quirúrgica, y antes del cierre de la incisión, ¿quién verifica el recuento de compresas realizado por el personal de enfermería circulante?",
    opciones: ["El personal técnico en cuidados auxiliares de enfermería.", "El/la anestesista.", "El/la propio/a cirujano/a.", "El personal de enfermería instrumentista."],
    correcta: "D",
    explicacion: "El recuento de compresas lo verifica la enfermera instrumentista junto con la circulante."
  },
  {
    tema: "Mortuorio y autopsias",
    origen: "Examen 2024 · Específico E20",
    enunciado: "Lo que queda del cuerpo humano, terminados los fenómenos de putrefacción, una vez transcurridos los cinco años siguientes a la muerte, se denomina:",
    opciones: ["Restos cadavéricos.", "Restos humanos de entidad suficiente.", "Cadáver.", "Restos óseos."],
    correcta: "A",
    explicacion: "Pasados cinco años desde la muerte y terminada la putrefacción, se habla de restos cadavéricos."
  },
  {
    tema: "Almacén y suministros",
    origen: "Examen 2024 · Específico E21",
    enunciado: "Señale la opción incorrecta según las Instrucciones Generales de Recepción de la Plataforma Logística Sanitaria de Galicia, Versión 2019.02:",
    opciones: ["Toda expedición que no presente albarán del proveedor no se recogerá.", "Cuando de un único pedido se realicen varias entregas en el mismo transporte, se recomienda incluir toda la mercancía en un único albarán.", "A un pedido le corresponde un único albarán de entrega.", "Se recomienda que no se repita el mismo número de albarán en un año."],
    correcta: "C",
    explicacion: "Es incorrecta: un pedido puede tener varios albaranes si se entrega en varias veces."
  },
  {
    tema: "Ofimática y equipos",
    origen: "Examen 2024 · Específico E22",
    enunciado: "Una de las siguientes definiciones es incorrecta:",
    opciones: ["La CPU es un componente del hardware dentro de un ordenador.", "La memoria RAM es una memoria de solo lectura. Almacena la información necesaria para el arranque del ordenador.", "La memoria caché es un área de almacenamiento dedicada a los datos usados con más frecuencia para recuperarlos a gran velocidad.", "El escáner es un periférico de entrada de un ordenador."],
    correcta: "B",
    explicacion: "La memoria de solo lectura para el arranque es la ROM. La RAM es de lectura y escritura."
  },
  {
    tema: "Movilización de pacientes",
    origen: "Examen 2024 · Específico E23",
    enunciado: "¿Cuál es la finalidad de los cambios frecuentes de postura en los pacientes encamados?",
    opciones: ["Que la ropa que cubre la cama del paciente roce la piel y produzca lesiones.", "Prevenir la aparición de úlceras por decúbito.", "La aparición de isquemia en los puntos de presión.", "Todas las respuestas anteriores son correctas."],
    correcta: "B",
    explicacion: "Los cambios posturales sirven para prevenir las úlceras por presión (por decúbito)."
  },
  {
    tema: "Mortuorio y autopsias",
    origen: "Examen 2024 · Específico E24",
    enunciado: "Una persona fallecida por viruela, ¿a qué grupo pertenece según la clasificación sanitaria de los cadáveres?",
    opciones: ["Grupo I.", "Grupo II.", "Grupo III.", "Ninguna es correcta."],
    correcta: "A",
    explicacion: "El grupo I incluye a los fallecidos por enfermedades infecciosas de especial riesgo, como la viruela."
  },
  {
    tema: "Primeros auxilios",
    origen: "Examen 2024 · Específico E25",
    enunciado: "Para administrar oxígeno a un bebé se utiliza:",
    opciones: ["Una sonda o catéter nasal pediátrico.", "Un halo.", "Una mascarilla oronasal pediátrica.", "Todas las respuestas anteriores son correctas."],
    correcta: "D",
    explicacion: "En bebés se puede usar sonda nasal pediátrica, halo (campana) o mascarilla pediátrica. (La respuesta oficial se corrigió a la D)."
  },
  {
    tema: "Traslado de pacientes",
    origen: "Examen 2024 · Específico E26",
    enunciado: "¿A qué denominamos transporte terciario?",
    opciones: ["Al transporte del paciente desde un centro sanitario a otro para que le realicen una prueba diagnóstica o para que permanezca en ese centro.", "Al transporte del paciente desde un servicio a otro dentro del mismo hospital para que le realicen una prueba o lo cambien de unidad.", "Al transporte que se realiza desde el lugar donde se produce la necesidad asistencial hasta el hospital o centro de atención de referencia del paciente.", "Al transporte que se realiza utilizando medios especiales de transporte, como un helicóptero."],
    correcta: "B",
    explicacion: "Primario: del lugar del suceso al hospital. Secundario: entre centros. Terciario: dentro del mismo hospital."
  },
  {
    tema: "Farmacia y material sanitario",
    origen: "Examen 2024 · Específico E27",
    enunciado: "¿Qué es un optotipo?",
    opciones: ["Aparato usado en oftalmología para medir la agudeza visual.", "Fuente de luz utilizada por el cirujano o el otorrinolaringólogo para realizar exploraciones.", "Permiten amplificar los impulsos eléctricos que se derivan del cerebro para su estudio.", "Ninguna es correcta."],
    correcta: "A",
    explicacion: "El optotipo es el panel de letras o símbolos con el que se mide la agudeza visual."
  },
  {
    tema: "Comunicación y atención al paciente",
    origen: "Examen 2024 · Específico E28",
    enunciado: "¿Cuál no es una característica del paralenguaje?",
    opciones: ["Tono.", "Gestos.", "Volumen.", "Articulación."],
    correcta: "B",
    explicacion: "El paralenguaje es cómo suena la voz (tono, volumen, articulación). Los gestos son comunicación no verbal corporal (kinesia)."
  },
  {
    tema: "Comunicación y atención al paciente",
    origen: "Examen 2024 · Específico E29",
    enunciado: "¿Cuál no es una característica que facilita la comprensión por parte del receptor?",
    opciones: ["La actitud negativa hacia el interlocutor.", "Concretar la idea que se quiere transmitir.", "Cuidar la comunicación no verbal.", "La adecuación del tono."],
    correcta: "A",
    explicacion: "Una actitud negativa hacia el interlocutor dificulta la comprensión."
  },
  {
    tema: "Primeros auxilios",
    origen: "Examen 2024 · Específico E30",
    enunciado: "¿Cuál es la diferencia entre esguince y luxación?",
    opciones: ["Son lo mismo, no existe diferencia.", "El esguince es la separación momentánea de las superficies articulares y la luxación es la separación permanente.", "El esguince es la separación de las superficies articulares de las extremidades inferiores y la luxación, la de las extremidades superiores.", "Ninguna respuesta es correcta."],
    correcta: "B",
    explicacion: "En el esguince la separación de la articulación es momentánea; en la luxación es permanente."
  },
  {
    tema: "Funciones del celador",
    origen: "Examen 2024 · Específico E31",
    enunciado: "¿Cuál de las siguientes es una función del celador?",
    opciones: ["Movilizar al paciente dentro de su medio teniendo en cuenta su estado y la posición anatómica recomendada.", "Acompañar a las madres y recién nacidos a los servicios y plantas que les sean asignados.", "Aplicar técnicas de oxigenoterapia.", "Ayudarán a las enfermeras y ayudantes de planta al movimiento y traslado de los enfermos encamados que requieran un trato especial en razón de sus dolencias para hacerles la cama."],
    correcta: "A",
    explicacion: "Según la plantilla oficial, la respuesta es la A: movilizar al paciente según su estado y la posición anatómica recomendada."
  },
  {
    tema: "Funciones del celador",
    origen: "Examen 2024 · Específico E32",
    enunciado: "Según el Estatuto de Personal Sanitario no Facultativo de 26 de abril de 1973, ¿a quién corresponde atender a la higiene de los enfermos graves y hacer sus camas con la ayuda de las auxiliares?",
    opciones: ["A los enfermeros y ayudantes técnicos sanitarios.", "A las auxiliares con ayuda del celador.", "A las enfermeras con ayuda de las auxiliares, cuando se trate de pacientes femeninas.", "Al celador en caso de pacientes masculinos, siguiendo las instrucciones de la supervisora."],
    correcta: "B",
    explicacion: "Según la plantilla oficial, corresponde a las auxiliares con la ayuda del celador."
  },
  {
    tema: "Movilización de pacientes",
    origen: "Examen 2024 · Específico E33",
    enunciado: "Posición de decúbito dorsal en la que el paciente está tumbado sobre su espalda, con los miembros superiores extendidos junto al cuerpo, las extremidades inferiores ligeramente flexionadas por las rodillas y las plantas de los pies apoyadas sobre la cama. Señale la respuesta correcta:",
    opciones: ["Es una variante de la posición anatómica.", "No existe esta posición.", "Se utiliza para relajar las paredes musculares abdominales.", "Son correctas las respuestas a y c."],
    correcta: "D",
    explicacion: "Es el decúbito supino con rodillas flexionadas: una variante de la posición anatómica que relaja la musculatura abdominal."
  },
  {
    tema: "Almacén y suministros",
    origen: "Examen 2024 · Específico E34",
    enunciado: "Señale la opción correcta respecto al inventario permanente:",
    opciones: ["El inventario permanente se hace una vez al año.", "El recuento del inventario permanente lo hace el celador de suministros.", "El inventario permanente se hace mediante una aplicación informática.", "El inventario permanente se realiza sobre pequeñas cantidades de producto."],
    correcta: "B",
    explicacion: "Según la plantilla oficial, el recuento del inventario permanente lo hace el celador de suministros."
  },
  {
    tema: "Ofimática y equipos",
    origen: "Examen 2024 · Específico E35",
    enunciado: "Indique cuál no es un elemento básico de una fotocopiadora:",
    opciones: ["Impulsor de imagen.", "Fusor.", "Tambor.", "Lámpara de exposición."],
    correcta: "A",
    explicacion: "Fusor, tambor y lámpara de exposición son piezas básicas de una fotocopiadora; el impulsor de imagen no existe como tal."
  },
  {
    tema: "Movilización de pacientes",
    origen: "Examen 2024 · Específico E36",
    enunciado: "¿A qué denominamos polígono de sustentación?",
    opciones: ["A la estructura metálica utilizada para evitar que la ropa de cama roce la piel del paciente.", "Este término no existe.", "Al polígono formado por el contorno de los pies.", "Al triángulo que permite al paciente incorporarse en la cama."],
    correcta: "C",
    explicacion: "La base de sustentación es la superficie delimitada por los pies; ampliarla da más estabilidad al mover pacientes."
  },
  {
    tema: "Quirófano",
    origen: "Examen 2024 · Específico E37",
    enunciado: "La clasificación de Altemeier nos permite:",
    opciones: ["Clasificar las intervenciones quirúrgicas según el grado de limpieza y contaminación.", "Clasificar las intervenciones quirúrgicas según su grado de complejidad.", "Clasificar las intervenciones quirúrgicas según su finalidad.", "Clasificar las intervenciones quirúrgicas según la necesidad de ingreso o no."],
    correcta: "A",
    explicacion: "Altemeier clasifica las cirugías en limpia, limpia-contaminada, contaminada y sucia."
  },
  {
    tema: "Mortuorio y autopsias",
    origen: "Examen 2024 · Específico E38",
    enunciado: "¿Qué instrumento no se usa en una sala de autopsias?",
    opciones: ["Escalpelo.", "Costótomo.", "Sonda acanalada.", "Todos se usan en una sala de autopsias."],
    correcta: "D",
    explicacion: "Escalpelo, costótomo (para cortar costillas) y sonda acanalada se usan todos en las autopsias."
  },
  {
    tema: "Traslado de pacientes",
    origen: "Examen 2024 · Específico E39",
    enunciado: "La aproximación es una de las fases del decálogo prehospitalario. Señale la opción correcta:",
    opciones: ["Acceso al lugar del siniestro por el camino más rápido, más seguro y más corto.", "Acceso al lugar del siniestro por el camino más seguro, más rápido y más corto.", "Acceso al lugar del siniestro por el camino más seguro, más corto y más rápido.", "Acceso al lugar del siniestro por el camino más corto, más seguro y más rápido."],
    correcta: "B",
    explicacion: "Por orden de prioridad: el camino más seguro, luego el más rápido y luego el más corto."
  },
  {
    tema: "Farmacia y material sanitario",
    origen: "Examen 2024 · Específico E40",
    enunciado: "¿Qué es un estetoscopio de Pinard?",
    opciones: ["Un amplificador de sonidos.", "Es un estetoscopio biauricular.", "Se usa para la auscultación cardíaca fetal.", "Todas son correctas."],
    correcta: "D",
    explicacion: "La respuesta oficial se corrigió a la D: todas son correctas. El de Pinard se usa sobre todo para auscultar el corazón fetal."
  },
  {
    tema: "Primeros auxilios",
    origen: "Examen 2024 · Específico E41",
    enunciado: "El orden de los eslabones de la llamada cadena de supervivencia es:",
    opciones: ["RCP básica; traslado; RCP avanzada.", "RCP básica; desfibrilación; traslado.", "Activación precoz de los servicios de emergencia sanitaria; RCP básica; desfibrilación precoz; RCP avanzada; traslado.", "RCP básica; RCP avanzada; traslado."],
    correcta: "C",
    explicacion: "La cadena empieza por avisar pronto a emergencias, sigue con RCP básica y desfibrilación precoz, y termina con soporte avanzado y traslado."
  },
  {
    tema: "Higiene, asepsia y esterilización",
    origen: "Examen 2024 · Específico E42",
    enunciado: "Las zonas de preparación de citostáticos deben reunir una serie de características. Indique la respuesta incorrecta:",
    opciones: ["Están aisladas físicamente del resto del servicio.", "Disponen de recirculación del aire ambiental.", "Las habitaciones deberán tener presión negativa.", "Están equipadas con campana de flujo laminar vertical."],
    correcta: "B",
    explicacion: "En las zonas de citostáticos el aire no se recircula, para no dispersar sustancias tóxicas."
  },
  {
    tema: "Ofimática y equipos",
    origen: "Examen 2024 · Específico E43",
    enunciado: "En el examen se mostraba el icono de dos hojas de papel superpuestas (el que aparece en la barra de herramientas de Word). ¿Qué hace ese icono?",
    opciones: ["Pegar texto.", "Copiar texto.", "Cortar texto.", "Deshacer cambios."],
    correcta: "B",
    explicacion: "El icono de dos hojas superpuestas es Copiar. Pegar es el portapapeles y Cortar son unas tijeras."
  },
  {
    tema: "Quirófano",
    origen: "Examen 2024 · Específico E44",
    enunciado: "¿Cómo se define el conjunto de dependencias donde están situados los quirófanos, vestuarios, pasillos, almacén de aparatos, zona de lavado...?",
    opciones: ["Zona quirúrgica.", "Espacio de operatoria quirúrgica.", "Área quirúrgica.", "Todas son correctas."],
    correcta: "C",
    explicacion: "El conjunto de quirófanos y dependencias anexas se llama área quirúrgica."
  },
  {
    tema: "Movilización de pacientes",
    origen: "Examen 2024 · Específico E45",
    enunciado: "Indique la posición más adecuada para el lavado del cabello en pacientes encamados:",
    opciones: ["Proetz.", "Kraske.", "Fowler.", "Jackknife (navaja)."],
    correcta: "A",
    explicacion: "En la posición de Proetz el paciente está boca arriba con la cabeza fuera del borde de la cama, lo que permite lavarle el pelo."
  },
  {
    tema: "Ofimática y equipos",
    origen: "Examen 2024 · Específico E46",
    enunciado: "Señale cuál de los siguientes no es un archivo de vídeo:",
    opciones: ["AVI.", "MOV.", "MKV.", "WAV."],
    correcta: "D",
    explicacion: "WAV es un formato de audio. AVI, MOV y MKV son de vídeo."
  },
  {
    tema: "Quirófano",
    origen: "Examen 2024 · Específico E47",
    enunciado: "¿A qué nos referimos cuando hablamos de una zorra en el quirófano?",
    opciones: ["Se utiliza para adoptar la posición de laminectomía. Sirve para acomodar al paciente y evitarle lesiones por una postura mal alineada del cuerpo.", "Se utiliza para adoptar la posición de prono. Se fija a la mesa y expone distintas partes del cuerpo.", "Se utiliza para adoptar la posición de prono. Es un accesorio metálico, forrado con almohadillas para proteger al paciente y evitarle lesiones.", "Se utiliza para adoptar la posición de laminectomía. Consiste en un accesorio metálico con la parte superior almohadillada que sirve para elevar la zona lumbar del paciente."],
    correcta: "D",
    explicacion: "La zorra es un accesorio metálico acolchado que eleva la zona lumbar para la posición de laminectomía."
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
    tema: "Almacén y suministros",
    origen: "Examen 2024 · Específico E49",
    enunciado: "Señale la opción correcta en relación con el uso de la transpaleta:",
    opciones: ["Si se encuentra en un pasillo con gente caminando, usted tiene preferencia por llevar la transpaleta.", "Entra en el ascensor tirando de la transpaleta.", "Al bajar una rampa bastante empinada, se colocará detrás de la transpaleta.", "Solo cuando la carga descanse sobre el chasis se puede conducir la transpaleta."],
    correcta: "B",
    explicacion: "En el ascensor se entra tirando de la transpaleta. Los peatones tienen preferencia y en las rampas de bajada se va por delante."
  },
  {
    tema: "Almacén y suministros",
    origen: "Examen 2024 · Específico E50",
    enunciado: "Señale la opción incorrecta respecto a la jaula de transporte:",
    opciones: ["El celador sale primero del ascensor.", "Para cruzar una puerta de vaivén abierta hay que tirar de la jaula.", "Cuando se sube una rampa inclinada se va detrás de la jaula empujando.", "Como norma general, las jaulas se empujan."],
    correcta: "B",
    explicacion: "Es incorrecta: según la respuesta oficial, la puerta de vaivén no se cruza tirando de la jaula."
  },
  {
    tema: "Ofimática y equipos",
    origen: "Examen 2024 · Específico E51 (reserva)",
    enunciado: "¿Qué combinación de teclas usaría para seleccionar todo el documento en Word?",
    opciones: ["Mayús + Flecha arriba.", "Mayús + Ctrl + Flecha arriba.", "Ctrl + E.", "Ctrl + Mayús + Inicio."],
    correcta: "C",
    explicacion: "En Word en español/gallego, Ctrl+E selecciona todo el documento (en inglés es Ctrl+A)."
  },
  {
    tema: "Legislación sanitaria",
    origen: "Examen 2024 · Específico E52 (reserva)",
    enunciado: "Cuando nos referimos a los recursos asistenciales en salud mental que están integrados en el área de salud, distinguimos entre dispositivos sanitarios y dispositivos intermedios o rehabilitadores. Entre estos últimos no se encuentra:",
    opciones: ["Centros de media estancia.", "Centros de larga estancia.", "Pisos protegidos.", "Unidad de rehabilitación."],
    correcta: "D",
    explicacion: "Según la respuesta oficial, la unidad de rehabilitación no está entre los dispositivos intermedios o rehabilitadores."
  },
  {
    tema: "Primeros auxilios",
    origen: "Examen 2024 · Específico E54 (reserva)",
    enunciado: "Señale la respuesta incorrecta respecto a la oxigenoterapia:",
    opciones: ["La oxigenoterapia se realiza en situaciones de hipoxia.", "La falta total de oxígeno se conoce como anoxia.", "En oxigenoterapia se aplica oxígeno en concentraciones superiores al 21 %.", "El aire en condiciones normales está compuesto, entre otros gases, por un 78 % de nitrógeno, un 23 % de oxígeno y un 0,02 % de monóxido de carbono."],
    correcta: "D",
    explicacion: "El aire tiene un 21% de oxígeno y una pequeña parte de dióxido de carbono, no de monóxido."
  },
  {
    tema: "Traslado de pacientes",
    origen: "Examen 2024 · Específico E55 (reserva)",
    enunciado: "Señale la respuesta incorrecta en relación con la certificación técnico-sanitaria de los vehículos de transporte sanitario:",
    opciones: ["Para su obtención, el vehículo no podrá superar una antigüedad de 10 años, contados desde la última matriculación.", "Se otorga por un plazo de 2 años en vehículos nuevos y anual a partir del segundo año de antigüedad.", "El vehículo deberá estar matriculado y habilitado para circular.", "La empresa certificará que dispone del personal adecuado y con la cualificación o habilitación necesarias para el servicio del tipo de vehículo de que se trate."],
    correcta: "A",
    explicacion: "Según la respuesta oficial, la incorrecta es la A, la del límite de antigüedad del vehículo."
  },

  // ===================================================================
  //  EXAMEN OFICIAL · PARTE ESPECÍFICA PRÁCTICA (E56 a E110)
  //  Traducido al castellano.
  // ===================================================================
  {
    tema: "Quirófano",
    origen: "Examen 2024 · Específico E56",
    enunciado: "Usted, como celador/a de quirófano, conoce la existencia de una serie de limitaciones y recomendaciones a la hora de usar el teléfono móvil dentro del área quirúrgica:",
    opciones: ["Se recomienda no usarlo a menos de 1,5 metros del campo quirúrgico por sus interferencias con los aparatos.", "Se recomienda no usarlo a menos de 2,5 metros del campo quirúrgico por sus interferencias con los aparatos.", "Se recomienda usarlo en la sala destinada a ese efecto dentro del área quirúrgica.", "Todas son correctas."],
    correcta: "C",
    explicacion: "La respuesta oficial se corrigió a la C: el móvil se usa en la sala destinada a ello dentro del área quirúrgica."
  },
  {
    tema: "Almacén y suministros",
    origen: "Examen 2024 · Específico E57",
    enunciado: "Tiene que subir un material de tránsito a un almacén periférico que no está gestionado por el almacén central. ¿En qué consistiría su trabajo?",
    opciones: ["Lo coloca en su lugar correspondiente dentro del almacén periférico.", "Se lo da en mano a la persona responsable de la unidad.", "Lo coloca en su lugar correspondiente dentro del almacén periférico y pide que le firmen conforme lo han recibido.", "Se lo da en mano a alguien del servicio, que tendrá que firmar conforme lo ha recibido."],
    correcta: "D",
    explicacion: "El material de tránsito se entrega en mano a alguien del servicio, que firma que lo ha recibido."
  },
  {
    tema: "Higiene, asepsia y esterilización",
    origen: "Examen 2024 · Específico E58",
    enunciado: "En la institución en la que trabaja como celador se usa el autoclave para la esterilización del material. Indique la respuesta incorrecta:",
    opciones: ["Los materiales de vidrio se pueden esterilizar en el autoclave.", "Una de sus ventajas es que no contamina ni deja residuos.", "Para la correcta esterilización del material quirúrgico, la temperatura debe ser superior a 120 °C.", "El test de Bowie-Dick nos permite verificar la eficacia de la esterilización."],
    correcta: "D",
    explicacion: "El test de Bowie-Dick comprueba que el aire se elimina y el vapor penetra bien. La eficacia de la esterilización se verifica con indicadores biológicos."
  },
  {
    tema: "Traslado de pacientes",
    origen: "Examen 2024 · Específico E59",
    enunciado: "Usted está destinado como celador en una UCI y debe trasladar a un paciente en estado crítico a otra unidad para realizarle una prueba complementaria. Ante la orden de traslado, deberá:",
    opciones: ["Trasladarlo lo más rápidamente posible en compañía de un auxiliar y otro celador.", "Trasladarlo en compañía de un facultativo y un enfermero.", "Trasladarlo con la mayor rapidez posible junto a un facultativo, comprobando que llevamos todo el material necesario para el transporte.", "Trasladarlo en compañía de un facultativo y un auxiliar."],
    correcta: "B",
    explicacion: "Un paciente crítico se traslada acompañado de un médico y de una enfermera."
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
    tema: "Almacén y suministros",
    origen: "Examen 2024 · Específico E61",
    enunciado: "Le encargan llevar una jaula de transporte con material para el laboratorio de microbiología. ¿Cuál de las siguientes acciones es correcta?",
    opciones: ["Al entrar en el ascensor, meter la jaula primero.", "Bajar la rampa detrás de la jaula, tirando de ella para frenarla.", "Negarse a hacerlo solo porque tiene que subir una rampa y es obligatorio hacerlo entre dos personas.", "Empujar la jaula para salir del ascensor."],
    correcta: "A",
    explicacion: "Al ascensor se entra con la jaula primero. Para salir, el celador sale delante tirando de ella."
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
    tema: "Quirófano",
    origen: "Examen 2024 · Específico E64",
    enunciado: "¿Cuál de las siguientes posiciones considera que sería la más adecuada para una intervención de colecistectomía?",
    opciones: ["Prono.", "Semi-Fowler.", "Trendelenburg.", "Supino."],
    correcta: "D",
    explicacion: "La colecistectomía (extirpar la vesícula) se hace con el paciente en decúbito supino."
  },
  {
    tema: "Quirófano",
    origen: "Examen 2024 · Específico E65",
    enunciado: "Los celadores en el servicio de quirófano realizan diversas funciones. Entre ellas no se encuentra:",
    opciones: ["Trasladar desde sus habitaciones a los usuarios que van a ser intervenidos en el quirófano.", "Colocar al paciente en la mesa de quirófano de acuerdo con la intervención a realizar.", "Para coordinarse con el personal sanitario del bloque quirúrgico, el celador trasladará a los pacientes de acuerdo con el orden preestablecido.", "Después de cada traslado, comprobará que la historia clínica corresponde con la identidad del paciente trasladado."],
    correcta: "D",
    explicacion: "Comprobar la historia clínica no le corresponde al celador; él traslada y coloca al paciente."
  },
  {
    tema: "Quirófano",
    origen: "Examen 2024 · Específico E66",
    enunciado: "Usted es celadora en el bloque quirúrgico de un hospital del SERGAS. Durante su jornada laboral, al terminar una intervención, le piden trasladar al paciente a la unidad de reanimación postanestésica. Durante el traslado, ¿quién la acompaña?",
    opciones: ["Su compañera de turno, junto con la anestesista.", "Su compañera de turno, la anestesista y la enfermera instrumentista.", "Su compañera de turno, la anestesista y la enfermera circulante.", "Todas ellas."],
    correcta: "C",
    explicacion: "A reanimación acompañan otra celadora, la anestesista y la enfermera circulante. La instrumentista se queda en el quirófano."
  },
  {
    tema: "Almacén y suministros",
    origen: "Examen 2024 · Específico E67",
    enunciado: "Estando de celador en suministros, le toca recibir un pedido. Señale la opción incorrecta en cuanto al trabajo que debe realizar:",
    opciones: ["Comprobar el pedido.", "Comprobar el albarán.", "Comprobar que coinciden los precios del albarán con los del pedido del centro.", "Sellar el albarán al proveedor, en caso de que todo esté correcto."],
    correcta: "C",
    explicacion: "Al recibir un pedido el celador comprueba la mercancía y el albarán; revisar los precios no es su tarea."
  },
  {
    tema: "Traslado de pacientes",
    origen: "Examen 2024 · Específico E68",
    enunciado: "En el supuesto de que tengamos que trasladar a un paciente para que le realicen una prueba complementaria:",
    opciones: ["Dejaremos al paciente abrigado con una manta cerca de la consulta del médico para que el TCAE pueda reconocerlo.", "Dejaremos al paciente abrigado con una manta y le entregaremos la documentación clínica para que él se la entregue a la persona responsable del servicio.", "No estamos obligados a permanecer junto al enfermo y regresaremos a la unidad en la que estamos trabajando.", "Permaneceremos junto al enfermo hasta que la persona responsable de la prueba se haga cargo de él."],
    correcta: "D",
    explicacion: "El celador no deja solo al paciente hasta que el responsable de la prueba se hace cargo de él."
  },
  {
    tema: "Primeros auxilios",
    origen: "Examen 2024 · Específico E69",
    enunciado: "Un paciente que se encuentra en la sala de observación sufre una parada cardiorrespiratoria. El facultativo a cargo le pide al celador su colaboración. ¿Cómo deberá proceder?",
    opciones: ["Retirará el cabecero de la cama.", "Colocará al paciente en posición de Fowler.", "Ayudará al personal sanitario a colocar al paciente en posición de Roser si es necesario realizar una intubación endotraqueal.", "Las respuestas a y c son correctas."],
    correcta: "D",
    explicacion: "En una parada se retira el cabecero para acceder a la cabeza y, si hay que intubar, se ayuda a colocar al paciente en posición de Roser (cabeza en hiperextensión)."
  },
  {
    tema: "Traslado de pacientes",
    origen: "Examen 2024 · Específico E70",
    enunciado: "Si la supervisora de urgencias le pide al celador que acompañe a uno de los pacientes de este servicio en la ambulancia para que le realicen una prueba complementaria en un centro perteneciente al mismo complejo hospitalario, el celador:",
    opciones: ["Se negará, puesto que no puede abandonar su puesto de trabajo.", "Acompañará al paciente, pero solo hasta la ambulancia.", "Cumplirá lo encomendado.", "Le dirá a la supervisora que no es función suya acompañar a los pacientes en las ambulancias."],
    correcta: "C",
    explicacion: "Acompañar al paciente en la ambulancia a otro centro del mismo complejo, si se lo encargan, es tarea del celador."
  },
  {
    tema: "Mortuorio y autopsias",
    origen: "Examen 2024 · Específico E71",
    enunciado: "A.S.V. trabaja como celadora en la sala de autopsias. De las siguientes tareas, indique cuál no realizará:",
    opciones: ["Instrumentar al médico durante la realización de la autopsia.", "Colocar el cadáver en la mesa y quitarle la mortaja si fuese necesario.", "Introducir en botes herméticos los restos cadavéricos que le indiquen.", "Realizará todas las anteriores."],
    correcta: "D",
    explicacion: "Según la respuesta oficial, el celador de autopsias realiza todas esas tareas."
  },
  {
    tema: "Higiene, asepsia y esterilización",
    origen: "Examen 2024 · Específico E72",
    enunciado: "Nada más empezar su turno de mañana como celador en la planta de Neurología, tiene que ayudar a la TCAE en el aseo de un paciente. Señale la respuesta correcta:",
    opciones: ["Si tiene venoclisis, se debe cubrir la zona con un apósito impermeable.", "El orden del lavado será: enjabonado, aclarado, enjuagado y secado.", "Una vez terminado el aseo, y antes de pasar al siguiente paciente, se le ofrece la cuña.", "La temperatura del agua, al aplicarla al paciente, estará entre 40 °C y 42 °C."],
    correcta: "A",
    explicacion: "La vía venosa (venoclisis) se protege con un apósito impermeable durante el aseo. La cuña se ofrece antes del aseo, no después."
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
    tema: "Quirófano",
    origen: "Examen 2024 · Específico E75",
    enunciado: "A la hora de colocar las extremidades inferiores del paciente en las perneras, se debe proceder de la siguiente manera:",
    opciones: ["Se deben elevar ambas extremidades simultáneamente para compensar el retorno venoso y prevenir daños en las articulaciones.", "Se deben elevar ambas extremidades evitando hacerlo al mismo tiempo para compensar el retorno venoso y prevenir daños en las articulaciones.", "Se deben elevar ambas articulaciones al mismo tiempo para contrarrestar el retorno venoso y prevenir daños en ellas.", "Se deben elevar ambas articulaciones evitando hacerlo al mismo tiempo para contrarrestar el retorno venoso y prevenir daños en ellas."],
    correcta: "A",
    explicacion: "Las dos piernas se suben a las perneras a la vez, para compensar el retorno venoso y no dañar las articulaciones."
  },
  {
    tema: "Movilización de pacientes",
    origen: "Examen 2024 · Específico E76",
    enunciado: "Nos piden que ayudemos a caminar a un paciente con hemiplejía derecha. ¿Cómo lo haríamos?",
    opciones: ["Nos colocaríamos en el lado no afectado.", "Le ayudaríamos por el lado afectado, como si se apoyase en un bastón.", "Nos situaríamos en el lado izquierdo.", "Son correctas las respuestas a y c."],
    correcta: "D",
    explicacion: "Según la respuesta oficial, nos colocamos en el lado sano, que en una hemiplejia derecha es el izquierdo."
  },
  {
    tema: "Quirófano",
    origen: "Examen 2024 · Específico E77",
    enunciado: "Terminada la intervención quirúrgica, usted prestará especial atención a:",
    opciones: ["La colocación del material para su esterilización.", "La retirada del aparato de rayos portátil de la sala antes de la limpieza del quirófano.", "Guardar los accesorios de la mesa para que no entren en contacto con material de limpieza húmedo que pudiera dañarlos.", "La recogida y el traslado al servicio correspondiente de las muestras o tejidos extirpados para su estudio."],
    correcta: "D",
    explicacion: "Al acabar la operación, el celador presta especial atención a llevar las muestras extirpadas al servicio que las estudiará."
  },
  {
    tema: "Primeros auxilios",
    origen: "Examen 2024 · Específico E78",
    enunciado: "¿En qué servicio del hospital podría encontrar una 'cámara cefálica' y para qué serviría?",
    opciones: ["En quirófano, para acomodar al paciente en prono.", "En traumatología, para sujetar tracciones cervicales.", "En el área de neonatología, para la administración de oxígeno a bebés.", "Ninguna es correcta."],
    correcta: "C",
    explicacion: "La cámara cefálica (o halo) se usa en neonatología para dar oxígeno a bebés."
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
    tema: "Farmacia y material sanitario",
    origen: "Examen 2024 · Específico E80",
    enunciado: "La supervisora de farmacia le ordena trasladar una fórmula magistral a la 4.ª planta. Marque la respuesta correcta:",
    opciones: ["Realizará la tarea.", "El celador no traslada fórmulas magistrales. Corresponde a la supervisora de la planta ir a recogerla.", "Llamará al encargado de turno para que la lleve o decida a quién manda a recogerla.", "La farmacia de un hospital no prepara fórmulas magistrales."],
    correcta: "A",
    explicacion: "Trasladar medicación y fórmulas magistrales entre servicios es una tarea del celador."
  },
  {
    tema: "Funciones del celador",
    origen: "Examen 2024 · Específico E81",
    enunciado: "Antonio es un celador que trabaja de forma eventual desde el año 2022. Con su primer contrato le entregaron sus uniformes; pasado el tiempo, Antonio duda de cuánto tiempo tiene que transcurrir, de forma ordinaria, para que le entreguen un uniforme nuevo. ¿Cuál sería este plazo?",
    opciones: ["365 días de trabajo efectivo.", "464 jornadas de trabajo efectivo.", "720 días de trabajo efectivo.", "486 días de trabajo efectivo."],
    correcta: "B",
    explicacion: "Según la respuesta oficial, el uniforme se renueva cada 464 jornadas de trabajo efectivo."
  },
  {
    tema: "Almacén y suministros",
    origen: "Examen 2024 · Específico E82",
    enunciado: "La supervisora hizo un pedido urgente de un artículo que se necesitaba en planta. ¿Quién debería subirlo?",
    opciones: ["El celador de la estafeta.", "El celador de planta, por ser un pedido urgente.", "El celador del correo interno, cuando haga el recorrido.", "El celador que está en el retén, porque no es función de ninguno de los anteriores."],
    correcta: "A",
    explicacion: "Según la respuesta oficial, los pedidos urgentes los sube el celador de la estafeta."
  },
  {
    tema: "Movilización de pacientes",
    origen: "Examen 2024 · Específico E83",
    enunciado: "¿Para qué utilizaremos el método de trabazón de brazos?",
    opciones: ["Para ayudar al paciente a levantarse de la cama.", "Para ayudar a caminar al paciente.", "Para cambiar las almohadas y acomodar al paciente.", "Esta técnica no se utiliza en el hospital."],
    correcta: "C",
    explicacion: "La trabazón de brazos sirve para incorporar al paciente en la cama y así cambiarle la almohada o acomodarlo."
  },
  {
    tema: "Mortuorio y autopsias",
    origen: "Examen 2024 · Específico E84",
    enunciado: "J.M.T. empieza a trabajar hoy como celador auxiliar de autopsias. Con carácter general, ¿cuál no es una característica de la sala de autopsias?",
    opciones: ["Dispone de mecanismos antirretorno.", "Posee un sistema de aspiración.", "Tiene refrigeradores con capacidad para dos cadáveres por cada cien camas de hospitalización.", "Está habilitada con extractores de aire directos al exterior."],
    correcta: "C",
    explicacion: "Según la respuesta oficial, la proporción de dos cadáveres por cada cien camas no es una característica de la sala de autopsias."
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
    tema: "Movilización de pacientes",
    origen: "Examen 2024 · Específico E86",
    enunciado: "Al preparar la transferencia de un paciente de la cama a la camilla, deberemos:",
    opciones: ["Colocar la camilla perpendicular a la cama, con la cabecera de la camilla a los pies de la cama, y frenar ambas.", "Colocar la camilla perpendicular a la cama, con la cabecera de la camilla formando un ángulo de 90° con la cabecera de la cama, y frenar ambas.", "Colocar la camilla a continuación de la cama y frenar ambas.", "Son correctas las opciones a y c."],
    correcta: "D",
    explicacion: "La camilla puede ponerse perpendicular a la cama, con su cabecera a los pies de la cama, o a continuación de ella. Siempre con las dos frenadas."
  },
  {
    tema: "Primeros auxilios",
    origen: "Examen 2024 · Específico E87",
    enunciado: "Estando en una habitación, se da cuenta de que uno de los pacientes empieza a encontrarse mal. Señale la opción incorrecta sobre lo que usted, como celador, haría:",
    opciones: ["Avisará al personal sanitario.", "Retirará el cabecero de la cama, en caso de que se lo pidan.", "Ayudará en el masaje cardíaco si fuese necesario.", "Ayudará en la RCP avanzada."],
    correcta: "D",
    explicacion: "La RCP avanzada la hace el personal sanitario; el celador puede avisar, retirar el cabecero y ayudar en el masaje cardíaco."
  },
  {
    tema: "Movilización de pacientes",
    origen: "Examen 2024 · Específico E88",
    enunciado: "El facultativo que va a realizar una punción lumbar en el servicio de urgencias le pide al celador que acuda a ayudarle. ¿Qué deberá hacer?",
    opciones: ["No acudirá, alegando que es función del personal sanitario.", "Ayudará al facultativo y, siguiendo sus indicaciones, colocará al paciente en decúbito lateral con las rodillas flexionadas hacia el abdomen y la cabeza flexionada hacia las rodillas.", "Solo ayudará suministrándole el material necesario.", "Ninguna de las respuestas anteriores es correcta."],
    correcta: "B",
    explicacion: "Para la punción lumbar el paciente se coloca en decúbito lateral, en posición fetal, para abrir los espacios entre vértebras."
  },
  {
    tema: "Movilización de pacientes",
    origen: "Examen 2024 · Específico E89",
    enunciado: "Estamos trabajando en la planta de traumatología y nos piden ayuda para movilizar a un paciente con tracción en la pierna izquierda. Señale la respuesta incorrecta:",
    opciones: ["Con ayuda del paciente serán necesarias un mínimo de dos personas.", "La enfermera retirará la tracción para evitar que nos moleste.", "El movimiento se realizará de forma sincronizada.", "Si se utiliza sábana de arrastre serán necesarias al menos tres personas."],
    correcta: "B",
    explicacion: "La tracción no se retira para movilizar al paciente: se mueve con ella puesta."
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
    tema: "Traslado de pacientes",
    origen: "Examen 2024 · Específico E91",
    enunciado: "Si tenemos que trasladar a un paciente al servicio de radiología en silla de ruedas y para ello debemos bajar un piso:",
    opciones: ["Empujaremos la silla desde la parte de atrás por la empuñadura.", "Para entrar y salir del ascensor, el celador entra y sale siempre primero tirando de la silla.", "Si el ascensor ha quedado ligeramente elevado con respecto al suelo de la planta, entraremos de frente.", "Son correctas las respuestas a y c."],
    correcta: "D",
    explicacion: "Según la respuesta oficial, son correctas la A y la C: la silla se empuja por la empuñadura y, si el ascensor queda un poco elevado, se entra de frente."
  },
  {
    tema: "Movilización de pacientes",
    origen: "Examen 2024 · Específico E92",
    enunciado: "En la planta de hospitalización, al colaborar en el aseo de un paciente, el personal de enfermería pide cambiarle el colchón con el fin de prevenir las úlceras por decúbito. ¿Qué tipo de colchón deberíamos buscar?",
    opciones: ["Colchón de muelles.", "Colchón alternating.", "Colchón de espuma.", "Colchón bariátrico."],
    correcta: "B",
    explicacion: "El colchón alternating (de presión alterna) va cambiando los puntos de apoyo y previene las úlceras."
  },
  {
    tema: "Movilización de pacientes",
    origen: "Examen 2024 · Específico E93",
    enunciado: "En la planta en la que trabaja solicitan una cama especial para un paciente con obesidad mórbida. Usted llevará a la unidad una:",
    opciones: ["Cama bariátrica.", "Cama de Judet.", "Cama electrocircular.", "Cama de Sanders."],
    correcta: "A",
    explicacion: "La cama bariátrica está pensada para pacientes con obesidad mórbida."
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
    tema: "Traslado de pacientes",
    origen: "Examen 2024 · Específico E95",
    enunciado: "Hay que trasladar a un paciente ingresado en la planta de psiquiatría, donde usted está de turno, a una consulta que está en otro hospital del mismo complejo. El paciente tendrá que ir en ambulancia. Señale cuál de las siguientes opciones es incorrecta:",
    opciones: ["Llevará al paciente en camilla desde la planta hasta la ambulancia.", "Transferirá al paciente a la camilla de la ambulancia con ayuda del técnico de esta.", "Ayudará a subir la camilla a la ambulancia.", "Acompañará al paciente hasta su regreso a la planta, como le han encargado."],
    correcta: "C",
    explicacion: "Según la respuesta oficial, subir la camilla a la ambulancia no le corresponde al celador."
  },
  {
    tema: "Movilización de pacientes",
    origen: "Examen 2024 · Específico E96",
    enunciado: "¿Cuál sería la forma correcta de subir a un paciente colaborador hacia la cabecera de la cama?",
    opciones: ["Poner la cama en horizontal o en ligero Trendelenburg.", "Comprobar que la cama no esté frenada.", "Pediremos al paciente que estire las rodillas.", "Las respuestas a y b son correctas."],
    correcta: "A",
    explicacion: "Se pone la cama horizontal o en ligero Trendelenburg, siempre frenada, y el paciente flexiona las rodillas para ayudar."
  },
  {
    tema: "Movilización de pacientes",
    origen: "Examen 2024 · Específico E97",
    enunciado: "Le ordenan ir al almacén de camas del hospital a buscar una cama con somier metálico formado por dos o tres segmentos móviles y adaptables a las necesidades del paciente. ¿Qué cama estamos buscando?",
    opciones: ["Cama articulada.", "Cama ortopédica.", "Cama de Klondike.", "Cama Clinitron."],
    correcta: "A",
    explicacion: "La cama articulada tiene el somier dividido en dos o tres segmentos móviles."
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
    tema: "Ofimática y equipos",
    origen: "Examen 2024 · Específico E99",
    enunciado: "Le ordenan hacer fotocopias, pero la máquina está estropeada y solo dispone de una pequeña fotocopiadora cuya bandeja no admite un ancho de papel superior a 210 mm. ¿Qué formato de papel puede usar?",
    opciones: ["DIN A4.", "DIN A5.", "DIN A6.", "Todos los anteriores."],
    correcta: "D",
    explicacion: "A4 mide 210 mm de ancho, y A5 y A6 son más estrechos, así que caben todos."
  },
  {
    tema: "Movilización de pacientes",
    origen: "Examen 2024 · Específico E100",
    enunciado: "La supervisora de la planta en la que trabajamos nos pide que ayudemos al auxiliar de enfermería a pasar a un paciente no colaborador al sillón. Señale la respuesta incorrecta:",
    opciones: ["Explicaremos al paciente el procedimiento a seguir.", "Elevaremos la cabecera de la cama si es posible.", "Nos colocaremos de forma que el auxiliar esté a un lado de la cama y nosotros en el contrario.", "Nos colocaremos ambos en el mismo lado de la cama."],
    correcta: "C",
    explicacion: "Para pasar al paciente al sillón, las dos personas se colocan en el mismo lado de la cama, no en lados opuestos."
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
    correcta: "C",
    explicacion: "La tarjeta de empleado del Sergas no sirve como pase de visita."
  },
  {
    tema: "Mortuorio y autopsias",
    origen: "Examen 2024 · Específico E103",
    enunciado: "La celadora de la unidad de cuidados paliativos está ayudando a preparar un cadáver para llevarlo al mortuorio. Un familiar comenta que le van a realizar una conservación química. Indique la respuesta incorrecta:",
    opciones: ["Será obligatoria cuando el cadáver vaya a ser expuesto en un lugar público hasta un máximo de 72 horas.", "Puede realizarla un profesional graduado en Medicina.", "Se realiza en salas de tanatopraxia.", "Se puede efectuar una vez transcurridas 8 horas desde el fallecimiento."],
    correcta: "A",
    explicacion: "Según la respuesta oficial, es incorrecta la A, la que hace obligatoria la conservación para exponer el cadáver hasta 72 horas."
  },
  {
    tema: "Farmacia y material sanitario",
    origen: "Examen 2024 · Específico E104",
    enunciado: "A.C.R. es celadora en el servicio de farmacia. En el almacén observa que una caja está rotulada como 'medicamentos fotosensibles'. ¿Dónde se guardan este tipo de medicamentos?",
    opciones: ["Son sensibles al calor; por lo tanto, en cámaras frigoríficas.", "En armarios de seguridad a los que solo tienen acceso los farmacéuticos.", "En lugares protegidos de la luz.", "Ninguna es correcta."],
    correcta: "C",
    explicacion: "Fotosensible significa sensible a la luz, así que se guardan protegidos de ella."
  },
  {
    tema: "Mortuorio y autopsias",
    origen: "Examen 2024 · Específico E105",
    enunciado: "Al finalizar una autopsia clínica, el médico le indica que amortaje el cadáver. ¿Cuál será su forma correcta de proceder?",
    opciones: ["Avisará al encargado de turno para que localice al enfermero encargado.", "El celador ayudará a los enfermeros o personas encargadas a amortajar a los enfermos fallecidos. Por lo tanto, no es función del celador.", "En el mortuorio amortaja el anatomopatólogo. El celador ayudaría en la movilización.", "Todas son incorrectas."],
    correcta: "D",
    explicacion: "En la sala de autopsias, amortajar al cadáver después de la autopsia sí es función del celador, así que todas las opciones son incorrectas."
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
    tema: "Ofimática y equipos",
    origen: "Examen 2024 · Específico E107 (reserva)",
    enunciado: "Está haciendo fotocopias y su multifunción muestra un icono con dos círculos pequeños y una línea en zigzag. Señale la respuesta correcta:",
    opciones: ["Reponer el tóner.", "Desatascar la máquina.", "Reiniciar la multifunción.", "Ninguna es correcta."],
    correcta: "B",
    explicacion: "Ese icono (los rodillos con el papel en zigzag) avisa de un atasco de papel."
  },
  {
    tema: "Mortuorio y autopsias",
    origen: "Examen 2024 · Específico E108 (reserva)",
    enunciado: "Se dispone a preparar un cadáver para una autopsia y observa que tiene manchas cutáneas de color rojo violáceo. Marque la respuesta correcta:",
    opciones: ["Su lugar de aparición depende de la posición del cadáver.", "Este proceso se denomina algor mortis.", "Es un fenómeno cadavérico tardío.", "Se inicia con una mancha verde."],
    correcta: "A",
    explicacion: "Son las livideces (livor mortis): aparecen pronto y en las zonas más bajas según la posición del cadáver. El algor mortis es el enfriamiento y la mancha verde es de la putrefacción."
  },
  {
    tema: "Movilización de pacientes",
    origen: "Examen 2024 · Específico E109 (reserva)",
    enunciado: "Durante su jornada laboral en una planta de hospitalización, oye al personal de enfermería pedir una 'sentinela' al personal técnico en cuidados auxiliares de enfermería. ¿A qué se refieren?",
    opciones: ["A una luz piloto que se encuentra en la parte baja de la pared y que permite circular sin tropezar.", "A un timbre conectado a un enchufe de la pared que permite pedir ayuda y servicios al personal de turno.", "A una almohada utilizada para prevenir lesiones y caídas.", "Ninguna es correcta."],
    correcta: "C",
    explicacion: "La sentinela es una almohada que se usa para prevenir lesiones y caídas."
  },
  {
    tema: "Quirófano",
    origen: "Examen 2024 · Específico E110 (reserva)",
    enunciado: "A usted, como celador/a de quirófano, le piden su colaboración para acomodar a un paciente en la mesa. Para ello, deberá prestar atención a:",
    opciones: ["Preservar la intimidad del paciente.", "Evitar que, durante la movilización, el paciente tenga el instrumental en su campo de visión.", "Colocar con seguridad los accesorios de la mesa, evitando que se desprendan accidentalmente.", "Debemos prestar atención a todas ellas."],
    correcta: "D",
    explicacion: "Al colocar al paciente en la mesa hay que cuidar su intimidad, que no vea el instrumental y que los accesorios estén bien sujetos."
  }
];
