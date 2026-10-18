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
//    origen:      (opcional) de dónde sale la pregunta, p. ej. "Exame 2024 · Común C1".
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
  //  EXAME OFICIAL SERGAS · CELADOR/A (OPE 2022, exame 2024) · PARTE COMÚN
  //  A C9 non está porque foi anulada.
  // ===================================================================
  {
    tema: "Protección de datos",
    origen: "Exame 2024 · Común C1",
    enunciado: "Segundo a Lei Orgánica 3/2018, de 5 de decembro, de protección de datos persoais e garantía dos dereitos dixitais, o tratamento de datos persoais dun menor de idade unicamente poderá fundarse no seu consentimento cando sexa:",
    opciones: ["Maior de 13 anos", "Maior de 14 anos", "Maior de 15 anos", "Maior de 16 anos"],
    correcta: "B",
    explicacion: "El artículo 7 de la LO 3/2018 permite que el menor consienta por sí mismo a partir de los 14 años."
  },
  {
    tema: "Legislación sanitaria",
    origen: "Exame 2024 · Común C2",
    enunciado: "Segundo a Lei de Saúde de Galicia, sinale cal dos/as seguintes non terá a condición de autoridade sanitaria:",
    opciones: ["Alcaldes ou alcaldesas", "Xerente do hospital", "Persoa titular da consellería con competencias en materia de sanidade", "Consello da Xunta de Galicia"],
    correcta: "B",
    explicacion: "La Ley de Salud de Galicia da condición de autoridad sanitaria al Consello da Xunta, a la persona titular de la consellería y a alcaldes y alcaldesas, pero no al gerente de un hospital."
  },
  {
    tema: "Normativa del Sergas",
    origen: "Exame 2024 · Común C3",
    enunciado: "Segundo o Decreto 206/2005, de provisión de prazas do persoal estatutario do Servizo Galego de Saúde, ¿que ocorre se, nun proceso de selección fixa, trala publicación da relación de aspirantes seleccionados, un deles, non opta por un destinos dos ofertados, no prazo e segundo o procedemento establecido?",
    opciones: ["Habilitaráselle un novo prazo para poder elixir o seu destino", "Adxudicaráselle un dos destinos ofertados que outros aspirantes seleccionados non teñan solicitado", "Reservaráselle a súa praza ata a seguinte convocatoria", "Non poderá ser nomeado, e quedarán sen efecto todas as súas actuacións"],
    correcta: "D",
    explicacion: "Quien no elige destino en plazo pierde el derecho: no puede ser nombrado y quedan sin efecto sus actuaciones."
  },
  {
    tema: "Normativa del Sergas",
    origen: "Exame 2024 · Común C4",
    enunciado: "Segundo o Decreto 206/2005, de provisión de prazas de persoal estatutario do Servizo Galego de Saúde, sinale cal dos seguintes non é requisito para o acceso á promoción interna, nos procesos de selección de persoal estatutario fixo que se convoquen para outras categorías:",
    opciones: ["Ter un mínimo de dous anos de servizos prestados na categoría á que desexa promocionar", "Ter a condición de persoal estatutario fixo doutra categoría de nivel académico igual ou inferior ao daquela á que se pretende acceder", "Estar en servizo activo en institucións sanitarias do Servizo Galego de Saúde", "Ter nomeamento como persoal estatutario fixo durante, polo menos, dous anos na categoría de procedencia"],
    correcta: "A",
    explicacion: "Los dos años se exigen en la categoría de procedencia (opción D), no en la categoría a la que se quiere promocionar."
  },
  {
    tema: "Legislación sanitaria",
    origen: "Exame 2024 · Común C5",
    enunciado: "Segundo o establecido na Lei Xeral de Sanidade, indique o organismo que acreditará os servizos de referencia, aos que poderán acceder tódolos usuarios do Sistema Nacional de Saúde, unha vez rematadas as posibilidades de diagnóstico e tratamento dos servizos especializados da Comunidade Autónoma onde residan:",
    opciones: ["O Ministerio de Sanidade", "O Consello de Ministros", "O Consello Interterritorial do Sistema Nacional de Saúde", "A Consellería de Sanidade da Comunidade Autónoma na que residan"],
    correcta: "A",
    explicacion: "Según el artículo 15 de la Ley General de Sanidad, los servicios de referencia los acredita el Ministerio de Sanidad."
  },
  {
    tema: "Estatuto de Autonomía de Galicia",
    origen: "Exame 2024 · Común C6",
    enunciado: "Segundo o Estatuto de Autonomía de Galicia, a potestade lexislativa corresponde ao Parlamento de Galicia e esta función:",
    opciones: ["Non poderá ser delegada en ningún caso", "Só poderá ser delegada, cos requisitos legais, no Presidente da Xunta de Galicia", "Só poderá ser delegada, cos requisitos legais, na Xunta de Galicia", "Só poderá ser delegada, cos requisitos legais, nas Cortes Xerais"],
    correcta: "C",
    explicacion: "El Estatuto permite que el Parlamento delegue la potestad legislativa solo en la Xunta de Galicia."
  },
  {
    tema: "Prevención de riesgos laborales",
    origen: "Exame 2024 · Común C7",
    enunciado: "Segundo a lei 31/1995, de prevención de riscos laborais, a función de vixilancia e control da normativa sobre prevención de riscos laborais corresponde a:",
    opciones: ["Inspección de Traballo e Seguridade Social", "Instituto Nacional de Seguridade e Hixiene no Traballo", "Instituto Español de Prevención de Riscos Laborais", "Inspección Nacional de Prevención de Riscos Laborais"],
    correcta: "A",
    explicacion: "El artículo 9 de la Ley 31/1995 atribuye la vigilancia y control de la normativa a la Inspección de Trabajo y Seguridad Social."
  },
  {
    tema: "Estatuto Marco",
    origen: "Exame 2024 · Común C8",
    enunciado: "Segundo o Estatuto Marco, sinale cal das seguintes opcións é falsa, respecto da situación de suspensión de funcións:",
    opciones: ["O persoal declarado na situación de suspensión firme quedará privado durante o tempo de permanencia na mesma do exercicio das súas funcións e de todos os dereitos inherentes á súa condición", "A suspensión firme determinará a perda do posto de traballo cando exceda de seis meses", "A suspensión firme imporase en virtude de sentenza ditada en causa criminal ou en virtude de sanción disciplinaria", "O persoal declarado na situación de suspensión firme de funcións poderá prestar servizos noutra administración pública distinta á que lle impuxo a sanción"],
    correcta: "D",
    explicacion: "Es falsa: mientras dura la suspensión firme no se pueden prestar servicios en ninguna Administración pública."
  },
  {
    tema: "Estatuto Marco",
    origen: "Exame 2024 · Común C10",
    enunciado: "Segundo o Estatuto Marco, sinale cal das seguintes materias queda excluída da obriga de negociación entre a Administración e as Organizacións Sindicais:",
    opciones: ["A determinación e aplicación das retribucións do persoal estatutario", "A regulación da xornada laboral, tempo de traballo e réxime de descansos", "As decisións do servizo de saúde que afecten ao procedemento de formación dos actos e disposicións administrativas", "Os sistemas de carreira profesional"],
    correcta: "C",
    explicacion: "Retribuciones, jornada y carrera profesional se negocian; las decisiones sobre el procedimiento de formación de actos y disposiciones administrativas quedan excluidas."
  },
  {
    tema: "Legislación sanitaria",
    origen: "Exame 2024 · Común C11 (reserva)",
    enunciado: "Respecto do acceso á historia clínica, segundo o establecido na Lei 3/2001, reguladora do consentimento informado e da historia clínica dos pacientes, sinale cal das seguintes afirmacións é falsa:",
    opciones: ["O paciente ten o dereito de acceso á documentacion da historia clínica e a obter copia dos datos que figuran na mesma", "Os órganos competentes para tramitar e resolver os procedementos de responsabilidade patrimonial polo funcionamento da administración sanitaria terán dereito de acceso á documentación da historia clínica", "Estará permitido o acceso á historia clínica completa aos familiares do paciente, calquera que sexa a súa relación de parentesco", "O acceso á historia clínica con fins xudiciais, epidemiolóxicos, de saúde pública, de investigación ou docencia obriga a reservar os datos de identificación persoal do paciente, de modo que quede asegurado o seu anonimato"],
    correcta: "C",
    explicacion: "Es falsa: los familiares no tienen acceso libre a la historia clínica completa solo por ser familiares."
  },
  {
    tema: "Estatuto Marco",
    origen: "Exame 2024 · Común C12 (reserva)",
    enunciado: "Sinale cal das seguintes opcións é verdadeira, sobre as pagas extraordinarias, segundo o establecido no Estatuto Marco:",
    opciones: ["Serán tres ao ano", "Devengaranse preferentemente nos meses de marzo, setembro e decembro", "O importe de cada unha delas será, como máximo, unha mensualidade do soldo", "Ao importe de cada unha, engadiráselle a catorceava parte do importe anual do complemento de destino"],
    correcta: "D",
    explicacion: "Son dos pagas al año (junio y diciembre), y a cada una se le suma la catorceava parte del complemento de destino anual."
  },

  // ===================================================================
  //  EXAME OFICIAL · PARTE ESPECÍFICA TEÓRICA (E1 a E55)
  //  A E53 non está porque foi anulada.
  // ===================================================================
  {
    tema: "Farmacia y material sanitario",
    origen: "Exame 2024 · Específico E1",
    enunciado: "Os medicamentos que son obtidos por técnicas de enxeñaría xenética denomínanse:",
    opciones: ["Radiofármacos.", "Formulas maxistrais.", "Biotecnolóxicos.", "Biolóxicos."],
    correcta: "C",
    explicacion: "Los medicamentos obtenidos por ingeniería genética se llaman biotecnológicos."
  },
  {
    tema: "Higiene, asepsia y esterilización",
    origen: "Exame 2024 · Específico E2",
    enunciado: "Segundo a súa perigosidade infectiva, o material semicrítico é aquel que:",
    opciones: ["Require total asepsia. É instrumental que temporal ou definitivamente vai quedar introducido no organismo.", "Está rigorosamente limpo e, no posible, desinfectado. Non está en contacto con cavidades internas do organismo, nin vías de entrada ao mesmo.", "Debe de estar desinfectado. Non é imprescindible a súa esterilización.", "Ningunha é correcta."],
    correcta: "C",
    explicacion: "Material crítico: estéril. Semicrítico: desinfectado, sin necesidad de esterilizar. No crítico: limpio."
  },
  {
    tema: "Higiene, asepsia y esterilización",
    origen: "Exame 2024 · Específico E3",
    enunciado: "Un dos seguintes non é un dos considerados cinco momentos para o lavado de mans:",
    opciones: ["Antes de tocar a un paciente.", "Despois de estar expostos a líquidos corporais.", "Despois de realizar unha tarefa aséptica.", "Despois de estar en contacto coa contorna do paciente."],
    correcta: "C",
    explicacion: "Los 5 momentos de la OMS incluyen lavarse ANTES de una tarea aséptica, no después."
  },
  {
    tema: "Movilización de pacientes",
    origen: "Exame 2024 · Específico E4",
    enunciado: "Un repousapés é:",
    opciones: ["Tallo pequeno para apoiar os pés cando se está sentado.", "Unha cadeira traumatolóxica para manter a aliñación do corpo.", "Unha cadeira de brazos traumatolóxica para pacientes intervidos de prótese total de cadeira.", "Ningunha é correcta."],
    correcta: "A",
    explicacion: "Un reposapiés es un taburete pequeño para apoyar los pies estando sentado."
  },
  {
    tema: "Comunicación y atención al paciente",
    origen: "Exame 2024 · Específico E5",
    enunciado: "Cal non é unha barreira na comunicación debida á transmisión?",
    opciones: ["A distorsión.", "O filtrado.", "O efecto Halo.", "A sobrecarga das canles."],
    correcta: "C",
    explicacion: "El efecto halo es una barrera de percepción del receptor, no de la transmisión del mensaje."
  },
  {
    tema: "Almacén y suministros",
    origen: "Exame 2024 · Específico E6",
    enunciado: "Sinale a opción incorrecta en relación cos contratos de subministracións:",
    opciones: ["A baixa temeraria xera dúbidas sobre o cumprimento do contrato.", "O material en depósito está inventariado.", "O prazo de aprovisionamento é o tempo que tarda o provedor en subministrar un produto.", "O stock de seguridade é o que se constitúe para facer fronte a situacións excepcionais."],
    correcta: "B",
    explicacion: "El material en depósito sigue siendo del proveedor hasta que se usa, por eso no está inventariado por el centro."
  },
  {
    tema: "Higiene, asepsia y esterilización",
    origen: "Exame 2024 · Específico E7",
    enunciado: "Qué orde se debe seguir para a colocación das prendas que se precisan na asepsia cirúrxica cando se corre risco de contaminación por gotas?",
    opciones: ["Calzas, gorro, gafas, bata, luvas, máscara.", "Calzas, gorro, máscara, gafas, bata, luvas.", "Gorro, calzas, máscara, bata, luvas, gafas.", "Gorro, calzas, bata, luvas, máscara, gafas."],
    correcta: "B",
    explicacion: "Orden: calzas, gorro, mascarilla, gafas, bata y, por último, guantes."
  },
  {
    tema: "Traslado de pacientes",
    origen: "Exame 2024 · Específico E8",
    enunciado: "Non se consideran prestacións sanitarias obrigatorias:",
    opciones: ["Traslado por alta.", "O traslado de pacientes, órganos ou persoal sanitario para a realización de transplantes.", "O traslado por asistencia continuada.", "Todas as respostas anteriores son correctas."],
    correcta: "D",
    explicacion: "La respuesta oficial es que ninguno de los tres traslados se considera prestación sanitaria obligatoria."
  },
  {
    tema: "Quirófano",
    origen: "Exame 2024 · Específico E9",
    enunciado: "Cando falamos de quirófanos de tipo A, referímonos a:",
    opciones: ["Quirófanos especializados, cun sistema de climatización cun alto custo de implantación e de explotación.", "Quirófanos de moi altas prestacións, aptos para neurocirurxía e cirurxía traumatolóxica.", "Quirófanos con instalación de difusión de aire laminar no interior da sala.", "Todas son correctas."],
    correcta: "D",
    explicacion: "Los quirófanos tipo A son los de muy altas prestaciones: flujo laminar, climatización costosa y aptos para neurocirugía y traumatología."
  },
  {
    tema: "Higiene, asepsia y esterilización",
    origen: "Exame 2024 · Específico E10",
    enunciado: "En relación ao lavado de mans antiséptico, marque a resposta correcta:",
    opciones: ["Realízase antes do aseo dos pacientes.", "Realizarao despois de trasladar ou manipular mostras biolóxicas.", "Con este método redúcese sensiblemente a flora bacteriana.", "Todas son correctas."],
    correcta: "C",
    explicacion: "El lavado antiséptico usa un jabón antiséptico y reduce de forma notable la flora bacteriana."
  },
  {
    tema: "Funciones del celador",
    origen: "Exame 2024 · Específico E11",
    enunciado: "A quen corresponde a custodia de pertenzas?",
    opciones: ["Ao Servizo de admisión.", "Á Xefatura de persoal subalterno.", "Ao celador da entrada principal.", "Ao Servizo de atención ao paciente."],
    correcta: "A",
    explicacion: "La custodia de las pertenencias de los pacientes corresponde al Servicio de Admisión."
  },
  {
    tema: "Higiene, asepsia y esterilización",
    origen: "Exame 2024 · Específico E12",
    enunciado: "Non é un método químico de esterilización por gas:",
    opciones: ["Óxido de etileno.", "Formaldehido.", "Formol.", "Peróxido de hidróxeno."],
    correcta: "C",
    explicacion: "El formol es formaldehído disuelto en agua, es decir, un líquido, no un gas. (La respuesta oficial se corrigió a la C)."
  },
  {
    tema: "Comunicación y atención al paciente",
    origen: "Exame 2024 · Específico E13",
    enunciado: "Cales non son elementos necesarios na escoita activa?",
    opciones: ["Empatizar.", "Ter unha postura activa.", "Retroalimentar.", "Ofrecer axuda prematuramente."],
    correcta: "D",
    explicacion: "Ofrecer ayuda antes de tiempo interrumpe la escucha; empatizar, postura activa y retroalimentar sí forman parte de ella."
  },
  {
    tema: "Quirófano",
    origen: "Exame 2024 · Específico E14",
    enunciado: "Dentro do aparataxe de uso frecuente que se atopa nos quirófanos, o instrumento que corta o tecido e/ou cauteriza, denomínase:",
    opciones: ["Bisturí de aceiro non funxible.", "Bisturí electrónico.", "Bisturí cirúrxico.", "Bisturí eléctrico."],
    correcta: "D",
    explicacion: "El bisturí eléctrico corta y además cauteriza (coagula) el tejido."
  },
  {
    tema: "Primeros auxilios",
    origen: "Exame 2024 · Específico E15",
    enunciado: "Para abrir a vía aérea a unha persoa que sufriu un accidente e da que se sospeita teña lesión cervical, realizaremos a seguinte manobra:",
    opciones: ["Manobra de Heimlich.", "Manobra de inclinación de cabeza e elevación de mentón.", "Manobra mandibular.", "Manobra fronte-queixo."],
    correcta: "C",
    explicacion: "Con sospecha de lesión cervical se usa la tracción mandibular, que abre la vía aérea sin mover el cuello."
  },
  {
    tema: "Funciones del celador",
    origen: "Exame 2024 · Específico E16",
    enunciado: "Segundo o Estatuto de Persoal non Sanitario ao servizo das institucións sanitarias da Seguridade Social de 1971, o xefe de persoal subalterno:",
    opciones: ["Exercerá, por delegación do Director, a xefatura de persoal de celadores.", "Manterá o réxime establecido pola dirección, respecto á limpeza da Institución.", "Coidará da compostura e aseo do persoal ás súas ordes, revisando e esixindo que vistan o uniforme regulamentario.", "Vixiará o acceso dos enfermos, visitantes e persoal ás distintas dependencias da Institución."],
    correcta: "C",
    explicacion: "Entre las funciones del jefe de personal subalterno está cuidar la compostura y el aseo del personal a sus órdenes y exigir el uniforme."
  },
  {
    tema: "Mortuorio y autopsias",
    origen: "Exame 2024 · Específico E17",
    enunciado: "Sinale a temperatura á que ten que estar a cámara de refrixeración para a conservación dun cadáver:",
    opciones: ["Entre -3°C e 5°C.", "Entre -2°C e 6°C.", "Entre -2°C e 5°C.", "Entre -2°C e 4°C."],
    correcta: "C",
    explicacion: "Según la respuesta oficial, la cámara de refrigeración de cadáveres debe estar entre -2 °C y 5 °C."
  },
  {
    tema: "Quirófano",
    origen: "Exame 2024 · Específico E18",
    enunciado: "O accesorio cirúrxico que se fixa á mesa e que se sitúa enriba do paciente e permite separar a zona de anestesia da de incisión, como se chama?",
    opciones: ["Separador de Farabeuf.", "Separador de Kocher.", "Marco de Balkan.", "Arco de narcose."],
    correcta: "D",
    explicacion: "El arco de narcosis se fija a la mesa y separa la zona de anestesia del campo quirúrgico."
  },
  {
    tema: "Quirófano",
    origen: "Exame 2024 · Específico E19",
    enunciado: "Rematada unha intervención cirúrxica, e previo ao peche da incisión, quen verifica o reconto de compresas realizado polo persoal de enfermería circulante?",
    opciones: ["O persoal técnico en coidados auxiliares de enfermería.", "O/A anestesista.", "O/A propio/a cirurxián/á.", "O persoal de enfermería instrumentista."],
    correcta: "D",
    explicacion: "El recuento de compresas lo verifica la enfermera instrumentista junto con la circulante."
  },
  {
    tema: "Mortuorio y autopsias",
    origen: "Exame 2024 · Específico E20",
    enunciado: "O que queda do corpo humano, acabados os fenómenos de putrefacción, unha vez transcorridos os cinco anos seguintes á morte denomínase:",
    opciones: ["Restos cadavéricos.", "Restos humanos de entidade suficiente.", "Cadáver.", "Restos óseos."],
    correcta: "A",
    explicacion: "Pasados cinco años desde la muerte y terminada la putrefacción, se habla de restos cadavéricos."
  },
  {
    tema: "Almacén y suministros",
    origen: "Exame 2024 · Específico E21",
    enunciado: "Sinale a opción incorrecta segundo as Instrucións Xerais de Recepción da Plataforma Loxística Sanitaria de Galicia Versión 2019.02:",
    opciones: ["Toda expedición que non presente albará de provedor non se recollerá.", "Cando dun único pedido se realicen varias entregas no mesmo transporte, recoméndase incluír toda a mercadoría nun único albará.", "A un pedido correspóndelle un único albará de entrega.", "Recoméndase que non se repita o mesmo número de albará nun ano."],
    correcta: "C",
    explicacion: "Es incorrecta: un pedido puede tener varios albaranes si se entrega en varias veces."
  },
  {
    tema: "Ofimática y equipos",
    origen: "Exame 2024 · Específico E22",
    enunciado: "Unha das seguintes definicións é incorrecta:",
    opciones: ["A CPU é un compoñente do hardware dentro dun ordenador.", "A memoria RAM é unha memoria de só lectura. Almacena a información necesaria para o arranque do ordenador.", "A memoria CACHÉ é unha área de almacenamento dedicada aos datos usados con máis frecuencia para a súa recuperación a gran velocidade.", "O escáner é un periférico de entrada dun ordenador."],
    correcta: "B",
    explicacion: "La memoria de solo lectura para el arranque es la ROM. La RAM es de lectura y escritura."
  },
  {
    tema: "Movilización de pacientes",
    origen: "Exame 2024 · Específico E23",
    enunciado: "Cal é a finalidade dos cambios frecuentes de postura nos pacientes encamados?",
    opciones: ["Que a roupa que cobre a cama do paciente roce a pel e produza lesións.", "Previr a aparición de úlceras por decúbito.", "Aparición de isquemia nos puntos de presión.", "Todas as respostas anteriores son correctas."],
    correcta: "B",
    explicacion: "Los cambios posturales sirven para prevenir las úlceras por presión (por decúbito)."
  },
  {
    tema: "Mortuorio y autopsias",
    origen: "Exame 2024 · Específico E24",
    enunciado: "Unha persoa falecida por varíola, a que grupo pertence segundo a clasificación sanitaria dos cadáveres?",
    opciones: ["Grupo I.", "Grupo II.", "Grupo III.", "Ningunha é correcta."],
    correcta: "A",
    explicacion: "El grupo I incluye a los fallecidos por enfermedades infecciosas de especial riesgo, como la viruela."
  },
  {
    tema: "Primeros auxilios",
    origen: "Exame 2024 · Específico E25",
    enunciado: "Para administrar osíxeno a un bebé utilízase:",
    opciones: ["Unha sonda ou catéter nasal pediátrico.", "Un halo.", "Unha máscara oronasal pediátrica.", "Todas as respostas anteriores son correctas."],
    correcta: "D",
    explicacion: "En bebés se puede usar sonda nasal pediátrica, halo (campana) o mascarilla pediátrica. (La respuesta oficial se corrigió a la D)."
  },
  {
    tema: "Traslado de pacientes",
    origen: "Exame 2024 · Específico E26",
    enunciado: "A que denominamos transporte terciario?",
    opciones: ["Ao transporte do paciente desde un centro sanitario a outro para que lle realicen unha proba diagnóstica ou para que permaneza nese centro.", "Ao transporte do paciente desde un servizo a outro dentro do mesmo hospital para que lle realicen unha proba ou o cambien de unidade.", "Ao transporte que se realiza desde o lugar onde se produce a necesidade asistencial ata o hospital ou centro de atención de referencia do paciente.", "Ao transporte que se realiza utilizando medios especiais de transporte como un helicóptero."],
    correcta: "B",
    explicacion: "Primario: del lugar del suceso al hospital. Secundario: entre centros. Terciario: dentro del mismo hospital."
  },
  {
    tema: "Farmacia y material sanitario",
    origen: "Exame 2024 · Específico E27",
    enunciado: "Que é un optotipo?",
    opciones: ["Aparello usado en oftalmoloxía para medir a agudeza visual.", "Fonte de luz utilizado polo cirurxián ou otorrinolaringólogo para realizar exploracións.", "Permiten ampliar impulsos eléctricos que se derivan do cerebro para o seu estudo.", "Ningunha é correcta."],
    correcta: "A",
    explicacion: "El optotipo es el panel de letras o símbolos con el que se mide la agudeza visual."
  },
  {
    tema: "Comunicación y atención al paciente",
    origen: "Exame 2024 · Específico E28",
    enunciado: "Cal non é unha característica da paralinguaxe?",
    opciones: ["Ton.", "Xestos.", "Volume.", "Articulación."],
    correcta: "B",
    explicacion: "El paralenguaje es cómo suena la voz (tono, volumen, articulación). Los gestos son comunicación no verbal corporal (kinesia)."
  },
  {
    tema: "Comunicación y atención al paciente",
    origen: "Exame 2024 · Específico E29",
    enunciado: "Cal non é unha característica que facilita a comprensión por parte do receptor?",
    opciones: ["A actitude negativa cara o interlocutor.", "Concretar a idea para transmitir.", "Coidar a comunicación non verbal.", "A adecuación do ton."],
    correcta: "A",
    explicacion: "Una actitud negativa hacia el interlocutor dificulta la comprensión."
  },
  {
    tema: "Primeros auxilios",
    origen: "Exame 2024 · Específico E30",
    enunciado: "Cal é a diferencia entre escordadura e luxación?",
    opciones: ["Son o mesmo, non existe diferencia.", "A escordadura é a separación momentánea das superficies articulares e a luxación é a separación permanente.", "A escordadura é a separación das superficies articulares das extremidades inferiores e a luxación das extremidades superiores.", "Ningunha resposta é correcta."],
    correcta: "B",
    explicacion: "En el esguince (escordadura) la separación de la articulación es momentánea; en la luxación es permanente."
  },
  {
    tema: "Funciones del celador",
    origen: "Exame 2024 · Específico E31",
    enunciado: "Cal das seguintes é unha función do celador?",
    opciones: ["Mobilizar ao paciente dentro do seu medio tendo en conta o seu estado e posición anatómica recomendada.", "Acompañar ás nais e recentemente nados aos servizos e plantas que lle sexan asignados.", "Aplicar técnicas de osixenoterapia.", "Axudarán ás enfermeiras e axudantes de planta ao movemento e traslado dos enfermos encamados que requiran un trato especial en razón ás súas doenzas para facerlles a cama."],
    correcta: "A",
    explicacion: "Según la plantilla oficial, la respuesta es la A: movilizar al paciente según su estado y la posición anatómica recomendada."
  },
  {
    tema: "Funciones del celador",
    origen: "Exame 2024 · Específico E32",
    enunciado: "Segundo o Estatuto de Persoal Sanitario non Facultativo de 26 de abril de 1973, a quen corresponde atender á hixiene dos enfermos graves e facer as súas camas coa axuda das auxiliares?",
    opciones: ["Aos enfermeiros e axudantes técnicos sanitarios.", "Ás auxiliares con axuda do celador.", "Ás enfermeiras con axuda das auxiliares, cando se trate de pacientes femininas.", "Ao celador en caso de pacientes masculinos, seguindo as instrucións da supervisora."],
    correcta: "B",
    explicacion: "Según la plantilla oficial, corresponde a las auxiliares con la ayuda del celador."
  },
  {
    tema: "Movilización de pacientes",
    origen: "Exame 2024 · Específico E33",
    enunciado: "Posición de decúbito dorsal na que o paciente está deitado sobre as súas costas, membros superiores estendidos xunto ao corpo, extremidades inferiores lixeiramente flexionadas polos xeonllos e coas plantas dos pés apoiadas sobre a cama. Sinale a resposta correcta:",
    opciones: ["É unha variante da posición anatómica.", "Non existe esta posición.", "Utilízase para relaxar as paredes musculares abdominais.", "Son correctas as respostas a e c."],
    correcta: "D",
    explicacion: "Es el decúbito supino con rodillas flexionadas: una variante de la posición anatómica que relaja la musculatura abdominal."
  },
  {
    tema: "Almacén y suministros",
    origen: "Exame 2024 · Específico E34",
    enunciado: "Sinale a opción correcta respecto do inventario permanente:",
    opciones: ["O inventario permanente faise unha vez ao ano.", "O reconto do inventario permanente faino o celador de subministracións.", "O inventario permanente faise mediante unha aplicación informática.", "O inventario permanente realízase sobre pequenas cantidades de produto."],
    correcta: "B",
    explicacion: "Según la plantilla oficial, el recuento del inventario permanente lo hace el celador de suministros."
  },
  {
    tema: "Ofimática y equipos",
    origen: "Exame 2024 · Específico E35",
    enunciado: "Indique cal non é un elemento básico dunha fotocopiadora:",
    opciones: ["Impulsor de imaxe.", "Fusor.", "Tambor.", "Lámpada de exposición."],
    correcta: "A",
    explicacion: "Fusor, tambor y lámpada de exposición son piezas básicas de una fotocopiadora; el impulsor de imagen no existe como tal."
  },
  {
    tema: "Movilización de pacientes",
    origen: "Exame 2024 · Específico E36",
    enunciado: "A que denominamos polígono de sustentación?",
    opciones: ["Á estrutura metálica utilizada para evitar que a roupa de cama roce a pel do paciente.", "Este termo non existe.", "Ao polígono formado polo contorno dos pés.", "Ao triángulo que permite ao paciente incorporarse na cama."],
    correcta: "C",
    explicacion: "La base de sustentación es la superficie delimitada por los pies; ampliarla da más estabilidad al mover pacientes."
  },
  {
    tema: "Quirófano",
    origen: "Exame 2024 · Específico E37",
    enunciado: "A clasificación de Altemeier permítenos:",
    opciones: ["Clasificar as intervencións cirúrxicas segundo o grao de limpeza e contaminación.", "Clasificar as intervencións cirúrxicas segundo o grao de complexidade das mesmas.", "Clasificar as intervencións cirúrxicas segundo a sua finalidade.", "Clasificar as intervencións cirúrxicas segundo a necesidade de ingreso ou non."],
    correcta: "A",
    explicacion: "Altemeier clasifica las cirugías en limpia, limpia-contaminada, contaminada y sucia."
  },
  {
    tema: "Mortuorio y autopsias",
    origen: "Exame 2024 · Específico E38",
    enunciado: "Que instrumento non se usa nunha sala de autopsias?",
    opciones: ["Escalpelo.", "Costótomo.", "Sonda acanalada.", "Todos se usan nunha sala de autopsias."],
    correcta: "D",
    explicacion: "Escalpelo, costótomo (para cortar costillas) y sonda acanalada se usan todos en las autopsias."
  },
  {
    tema: "Traslado de pacientes",
    origen: "Exame 2024 · Específico E39",
    enunciado: "A aproximación é unha das fases do decálogo prehospitalario. Sinale a opción correcta:",
    opciones: ["Acceso ao lugar do sinistro polo camiño máis rápido, máis seguro e máis curto.", "Acceso ao lugar do sinistro polo camiño máis seguro, máis rápido e máis curto.", "Acceso ao lugar do sinistro polo camiño máis seguro, máis curto e máis rápido.", "Acceso ao lugar do sinistro polo camiño máis curto, máis seguro e máis rápido."],
    correcta: "B",
    explicacion: "Por orden de prioridad: el camino más seguro, luego el más rápido y luego el más corto."
  },
  {
    tema: "Farmacia y material sanitario",
    origen: "Exame 2024 · Específico E40",
    enunciado: "Que é un estetoscopio de Pinard?",
    opciones: ["Un amplificador de sons.", "É un estetoscopio biauricular.", "Úsase para auscultación cardíaca fetal.", "Todas son correctas."],
    correcta: "D",
    explicacion: "La respuesta oficial se corrigió a la D: todas son correctas. El de Pinard se usa sobre todo para auscultar el corazón fetal."
  },
  {
    tema: "Primeros auxilios",
    origen: "Exame 2024 · Específico E41",
    enunciado: "A orde dos elos da denominada cadea de supervivencia é:",
    opciones: ["RCP básica; traslado; RCP avanzada.", "RCP básica; desfibrilación; traslado.", "Activación precoz dos servizos de emerxencia sanitaria; RCP básica; desfibrilación precoz; RCP avanzada; traslado.", "RCP básica; RCP avanzada; traslado."],
    correcta: "C",
    explicacion: "La cadena empieza por avisar pronto a emergencias, sigue con RCP básica y desfibrilación precoz, y termina con soporte avanzado y traslado."
  },
  {
    tema: "Higiene, asepsia y esterilización",
    origen: "Exame 2024 · Específico E42",
    enunciado: "As zonas de preparación de citostáticos deben reunir unha serie de características. Indique a resposta incorrecta:",
    opciones: ["Están illados fisicamente do resto do servizo.", "Dispoñen de recirculación de aire ambiental.", "As habitacións deberán ter presión negativa.", "Están equipadas con campá de fluxo laminar vertical."],
    correcta: "B",
    explicacion: "En las zonas de citostáticos el aire no se recircula, para no dispersar sustancias tóxicas."
  },
  {
    tema: "Ofimática y equipos",
    origen: "Exame 2024 · Específico E43",
    enunciado: "No exame mostrábase a icona de dúas follas de papel superpostas (a que aparece na barra de ferramentas de Word). Que fai esa icona?",
    opciones: ["Pegar texto.", "Copiar texto.", "Cortar texto.", "Desfacer cambios."],
    correcta: "B",
    explicacion: "El icono de dos hojas superpuestas es Copiar. Pegar es el portapapeles y Cortar son unas tijeras."
  },
  {
    tema: "Quirófano",
    origen: "Exame 2024 · Específico E44",
    enunciado: "Como se define ao conxunto de dependencias onde están situados os quirófanos, vestiarios, corredores, almacén de aparataxe, zona de lavado...?",
    opciones: ["Zona cirúrxica.", "Espazo de operatoria cirúrxica.", "Área cirúrxica.", "Todas son correctas."],
    correcta: "C",
    explicacion: "El conjunto de quirófanos y dependencias anexas se llama área quirúrgica."
  },
  {
    tema: "Movilización de pacientes",
    origen: "Exame 2024 · Específico E45",
    enunciado: "Indique a posición máis adecuada para o lavado do cabelo en pacientes encamados:",
    opciones: ["Proetz.", "Kraske.", "Fowler.", "Jakknife."],
    correcta: "A",
    explicacion: "En la posición de Proetz el paciente está boca arriba con la cabeza fuera del borde de la cama, lo que permite lavarle el pelo."
  },
  {
    tema: "Ofimática y equipos",
    origen: "Exame 2024 · Específico E46",
    enunciado: "Sinale cal dos seguintes non é un arquivo de vídeo:",
    opciones: ["AVI.", "MOV.", "MKV.", "WAV."],
    correcta: "D",
    explicacion: "WAV es un formato de audio. AVI, MOV y MKV son de vídeo."
  },
  {
    tema: "Quirófano",
    origen: "Exame 2024 · Específico E47",
    enunciado: "A que nos referimos cando falamos dunha zorra no quirófano?",
    opciones: ["Utilízase para adoptar a posición de laminectomía. É utilizado para acomodar ao paciente e evitarlle lesións por unha postura mal aliñada do corpo.", "Utilízase para adoptar a posición de prono. Fíxase á mesa e expón distintas partes do corpo.", "Utilízase para adoptar a posición de prono. É un accesorio metálico, forrado con almofadas para protexer ao paciente e evitarlle lesións.", "Utilízase para adoptar a posición de laminectomía. Consiste nun accesorio metálico coa parte superior almofadada que serve para elevar a zona lumbar do paciente."],
    correcta: "D",
    explicacion: "La zorra es un accesorio metálico acolchado que eleva la zona lumbar para la posición de laminectomía."
  },
  {
    tema: "Funciones del celador",
    origen: "Exame 2024 · Específico E48",
    enunciado: "O número máximo de camas por habitación hospitalaria non debe ser superior a:",
    opciones: ["Tres camas.", "Catro camas.", "Cinco camas.", "Seis camas."],
    correcta: "B",
    explicacion: "Según la respuesta oficial, una habitación hospitalaria no debe tener más de cuatro camas."
  },
  {
    tema: "Almacén y suministros",
    origen: "Exame 2024 · Específico E49",
    enunciado: "Sinale a opción correcta en relación co uso da transpaleta:",
    opciones: ["En caso de atoparse nun corredor con xente deambulando, vostede ten preferencia por levar a transpaleta.", "Entra no ascensor tirando da transpaleta.", "Ao baixar unha rampla bastante empinada, colocarase por detrás da transpaleta.", "Só cando a carga descanse no chasis se pode conducir a transpaleta."],
    correcta: "B",
    explicacion: "En el ascensor se entra tirando de la transpaleta. Los peatones tienen preferencia y en las rampas de bajada se va por delante."
  },
  {
    tema: "Almacén y suministros",
    origen: "Exame 2024 · Específico E50",
    enunciado: "Sinale a opción incorrecta respecto da gaiola de transporte:",
    opciones: ["O celador sae primeiro do ascensor.", "Para cruzar unha porta de vaivén aberta hai que tirar da gaiola.", "Cando se sube unha rampla inclinada vaise detrás da gaiola empuxando.", "Como norma xeral, as gaiolas empúxanse."],
    correcta: "B",
    explicacion: "Es incorrecta: según la respuesta oficial, la puerta de vaivén no se cruza tirando de la jaula."
  },
  {
    tema: "Ofimática y equipos",
    origen: "Exame 2024 · Específico E51 (reserva)",
    enunciado: "Que combinación de teclas usaría para seleccionar todo o documento en Word?",
    opciones: ["Maiús+Frecha arriba.", "Maiús+CTRL+Frecha arriba.", "CTRL+E.", "CTRL+Maiús+Inicio."],
    correcta: "C",
    explicacion: "En Word en español/gallego, Ctrl+E selecciona todo el documento (en inglés es Ctrl+A)."
  },
  {
    tema: "Legislación sanitaria",
    origen: "Exame 2024 · Específico E52 (reserva)",
    enunciado: "Cando nos referimos aos recursos asistenciais en saúde mental que están integrados na área de saúde, distinguimos entre dispositivos sanitarios e dispositivos intermedios ou rehabilitadores. Entre estes últimos, non se atopa:",
    opciones: ["Centros de media estadía.", "Centros de longa estadía.", "Pisos protexidos.", "Unidade de rehabilitación."],
    correcta: "D",
    explicacion: "Según la respuesta oficial, la unidad de rehabilitación no está entre los dispositivos intermedios o rehabilitadores."
  },
  {
    tema: "Primeros auxilios",
    origen: "Exame 2024 · Específico E54 (reserva)",
    enunciado: "Sinale a resposta incorrecta respecto da osixenoterapia:",
    opciones: ["A osixenoterapia realízase en situacións de hipoxia.", "A falta total de osíxeno coñécese como anoxia.", "En osixenoterapia aplícase osíxeno en concentracións superiores ao 21%.", "O aire en condicións normais está composto entre outros gases por un 78% de nitróxeno, un 23% de osíxeno e un 0,02% de monóxido de carbono."],
    correcta: "D",
    explicacion: "El aire tiene un 21% de oxígeno y una pequeña parte de dióxido de carbono, no de monóxido."
  },
  {
    tema: "Traslado de pacientes",
    origen: "Exame 2024 · Específico E55 (reserva)",
    enunciado: "Sinale a resposta incorrecta en relación coa certificación técnico-sanitaria dos vehículos de transporte sanitario:",
    opciones: ["Para a súa obtención o vehículo non poderá superar a antigüidade de 10 anos, contados desde a última matriculación.", "Outórgase por un prazo de duración de 2 anos en vehículos novos e anual a partir do segundo ano de antigüidade.", "O vehículo deberá estar matriculado e habilitado para circular.", "A empresa certificará que dispón do persoal adecuado e coa cualificación ou habilitación necesarias para o servizo do tipo de vehículo do que se trate."],
    correcta: "A",
    explicacion: "Según la respuesta oficial, la incorrecta es la A, la del límite de antigüedad del vehículo."
  },

  // ===================================================================
  //  EXAME OFICIAL · PARTE ESPECÍFICA PRÁCTICA (E56 a E110)
  // ===================================================================
  {
    tema: "Quirófano",
    origen: "Exame 2024 · Específico E56",
    enunciado: "Vostede, como celador/a de quirófano, coñece a existencia dunha serie de limitacións e recomendacións á hora do uso do teléfono móbil dentro da área cirúrxica:",
    opciones: ["Recoméndase non usalo a menos de 1,5 metros do campo cirúrxico polas súas interferencias cos aparatos.", "Recoméndase non usalo a menos de 2,5 metros do campo cirúrxico polas súas interferencias cos aparatos.", "Recoméndase usalo na sala destinada a ese efecto dentro da área cirúrxica.", "Todas son correctas."],
    correcta: "C",
    explicacion: "La respuesta oficial se corrigió a la C: el móvil se usa en la sala destinada a ello dentro del área quirúrgica."
  },
  {
    tema: "Almacén y suministros",
    origen: "Exame 2024 · Específico E57",
    enunciado: "Ten que subir un material de tránsito a un almacén periférico, que non é xestionado polo almacén central. En que consistiría o seu traballo?",
    opciones: ["Colócao no seu lugar correspondente dentro do almacén periférico.", "Dállo en man á persoa responsable da unidade.", "Colócao no seu lugar correspondente dentro do almacén periférico e pídelle que lle asinen consonte o recibiron.", "Dállo en man a alguén do servizo, que terá que asinar conforme o recibiron."],
    correcta: "D",
    explicacion: "El material de tránsito se entrega en mano a alguien del servicio, que firma que lo ha recibido."
  },
  {
    tema: "Higiene, asepsia y esterilización",
    origen: "Exame 2024 · Específico E58",
    enunciado: "Na institución na que está a traballar como celador úsase o autoclave para a esterilización do material. Indique a resposta incorrecta:",
    opciones: ["Os materiais de vidro pódense esterilizar no autoclave.", "Unha das súas vantaxes é que non contamina nin deixa residuos.", "Para a correcta esterilización do material cirúrxico, a temperatura debe ser superior aos 120°C.", "O test de Bowie-Dick permítenos verificar a eficacia da esterilización."],
    correcta: "D",
    explicacion: "El test de Bowie-Dick comprueba que el aire se elimina y el vapor penetra bien. La eficacia de la esterilización se verifica con indicadores biológicos."
  },
  {
    tema: "Traslado de pacientes",
    origen: "Exame 2024 · Específico E59",
    enunciado: "Está vostede destinado como celador nunha UCI e debe trasladar a un paciente en estado crítico a outra unidade para a realización dunha proba complementaria. Ante a orde de traslado, deberá:",
    opciones: ["Trasladalo o máis rapidamente posible en compañía dun auxiliar e outro celador.", "Trasladalo en compañía dun facultativo e un enfermeiro.", "Trasladarao coa maior rapidez posible xunto a un facultativo comprobando que levamos todo o material necesario para o transporte.", "Trasladalo en compañía dun facultativo e un auxiliar."],
    correcta: "B",
    explicacion: "Un paciente crítico se traslada acompañado de un médico y de una enfermera."
  },
  {
    tema: "Funciones del celador",
    origen: "Exame 2024 · Específico E60",
    enunciado: "Estando destinado na porta de entrada de visitas, un usuario tenta acceder con un neno que di que ten seis anos. Como debe actuar?",
    opciones: ["Diralle educadamente que os menores de doce anos non poden pasar.", "Deixaría pasar a un, ao presentar un só pase de visita.", "Faría unha excepción, pero lle informaría dos riscos que conleva para o pequeno.", "Deixaríalles pasar porque o pase indica que van á planta de paliativos."],
    correcta: "D",
    explicacion: "Según la respuesta oficial, en la planta de paliativos se permite la entrada del menor."
  },
  {
    tema: "Almacén y suministros",
    origen: "Exame 2024 · Específico E61",
    enunciado: "Encoméndanlle levar unha gaiola de transporte con material para o laboratorio de microbioloxía. Cal das seguintes accións é correcta?",
    opciones: ["Ao entrar no ascensor meter a gaiola primeiro.", "Baixar a rampla detrás da gaiola, tirando dela para freala.", "Negarse a facelo só porque ten que subir unha rampla e é obrigatorio facelo entre dúas persoas.", "Empuxar a gaiola para saír do ascensor."],
    correcta: "A",
    explicacion: "Al ascensor se entra con la jaula primero. Para salir, el celador sale delante tirando de ella."
  },
  {
    tema: "Funciones del celador",
    origen: "Exame 2024 · Específico E62",
    enunciado: "Traballando un domingo na quenda de mañá, escoita desde o control da planta voces e risas procedentes dunha habitación. Ao achegarse, ve que co paciente da cama dúas, hai cinco acompañantes. Que debería facer?",
    opciones: ["Chamar inmediatamente a seguridade, xa que é función súa vixiar o comportamento de enfermos e familiares.", "Explicarlles educadamente que as normas do hospital só permiten un acompañante por paciente, fóra do horario de visita e que teñen que abandonar a habitación.", "Ao ser fin de semana, facer un pouco a vista gorda e pechar a porta para que non molesten.", "Pedirlles que falen máis baixo."],
    correcta: "B",
    explicacion: "El celador vigila el comportamiento de visitantes y les explica con educación las normas del centro."
  },
  {
    tema: "Funciones del celador",
    origen: "Exame 2024 · Específico E63",
    enunciado: "O facultativo responsable dun paciente na UCI ordénanos que avisemos aos seus familiares para que poida informalos sobre o estado do mesmo. Nós, como celadores desa unidade:",
    opciones: ["Non é función nosa avisar á familia.", "Faremos o que nos ordenaron.", "Dirémoslle que como celadores de UCI temos moito traballo e non podemos saír a avisar á familia.", "Ningunha resposta é correcta."],
    correcta: "B",
    explicacion: "Avisar a los familiares cuando lo pide el médico es una función del celador."
  },
  {
    tema: "Quirófano",
    origen: "Exame 2024 · Específico E64",
    enunciado: "Cal das seguintes posicións considera que sería máis adecuada para unha intervención de colecistectomía?",
    opciones: ["Prono.", "Semi Fowler.", "Trendelemburg.", "Supino."],
    correcta: "D",
    explicacion: "La colecistectomía (extirpar la vesícula) se hace con el paciente en decúbito supino."
  },
  {
    tema: "Quirófano",
    origen: "Exame 2024 · Específico E65",
    enunciado: "Os celadores no servizo de quirófano realizan diversas funcións. Entre elas, non se atopa:",
    opciones: ["Trasladar desde as súas correspondentes habitacións aos usuarios que serán intervidos no quirófano.", "Colocar ao paciente na mesa de quirófano dacordo coa intervención a realizar.", "Para coordinarse co persoal sanitario do bloque cirúrxico, o celador trasladará aos pacientes de acordo á orde preestablecida.", "Despois de cada traslado comprobará que a historia clínica corresponde coa identidade do paciente trasladado."],
    correcta: "D",
    explicacion: "Comprobar la historia clínica no le corresponde al celador; él traslada y coloca al paciente."
  },
  {
    tema: "Quirófano",
    origen: "Exame 2024 · Específico E66",
    enunciado: "Vostede é celadora no bloque cirúrxico dun hospital do SERGAS. No transcurso da súa xornada laboral é requirido ao remate dunha intervención para o traslado do paciente á unidade de reanimación postanestésica. Durante o traslado, quen lle acompaña?",
    opciones: ["A súa compañeira de quenda, xunto coa anestesista.", "A súa compañeira de quenda, a anestesista e a enfermeira instrumentista.", "A súa compañeira de quenda, a anestesista e a enfermeira circulante.", "Todas elas."],
    correcta: "C",
    explicacion: "A reanimación acompañan otra celadora, la anestesista y la enfermera circulante. La instrumentista se queda en el quirófano."
  },
  {
    tema: "Almacén y suministros",
    origen: "Exame 2024 · Específico E67",
    enunciado: "Estando de celador en subministracións, tócalle recibir un pedido. Sinale a opción incorrecta en canto ao traballo que debe realizar:",
    opciones: ["Comprobar o pedido.", "Comprobar o albará.", "Comprobar que coinciden os prezos do albará cos do pedido do centro.", "Selar o albará ao provedor, no caso de que todo estea correcto."],
    correcta: "C",
    explicacion: "Al recibir un pedido el celador comprueba la mercancía y el albarán; revisar los precios no es su tarea."
  },
  {
    tema: "Traslado de pacientes",
    origen: "Exame 2024 · Específico E68",
    enunciado: "No suposto de que teñamos que trasladar a un paciente para que lle realicen unha proba complementaria:",
    opciones: ["Deixaremos ao paciente abrigado cunha manta cerca da consulta do médico para que o TCAE poida recoñecelo.", "Deixaremos ao paciente abrigado cunha manta e entregarémoslle a documentación clínica para que este lla entregue á persoa responsable do servizo.", "Non estamos obrigados a permanecer xunto ao enfermo e regresaremos á unidade na que estamos a traballar.", "Permaneceremos xunto ao enfermo ata que a persoa responsable da proba se faga cargo do mesmo."],
    correcta: "D",
    explicacion: "El celador no deja solo al paciente hasta que el responsable de la prueba se hace cargo de él."
  },
  {
    tema: "Primeros auxilios",
    origen: "Exame 2024 · Específico E69",
    enunciado: "Un paciente que se atopa na sala de observación sofre unha parada cardiorespiratoria. O facultativo ao cargo pídelle ao celador a súa colaboración. Como deberá proceder?",
    opciones: ["Retirará o cabeceiro da cama.", "Colocará ao paciente en posición de Fowler.", "Axudará ao persoal sanitario a colocar ao paciente en posición de Roser se é necesario realizar unha intubación endotraqueal.", "As respostas a e c son correctas."],
    correcta: "D",
    explicacion: "En una parada se retira el cabecero para acceder a la cabeza y, si hay que intubar, se ayuda a colocar al paciente en posición de Roser (cabeza en hiperextensión)."
  },
  {
    tema: "Traslado de pacientes",
    origen: "Exame 2024 · Específico E70",
    enunciado: "Se a supervisora de urxencias lle pide ao celador que acompañe a un dos pacientes deste servizo na ambulancia para que lle realicen unha proba complementaria nun centro pertencente ao mesmo complexo hospitalario, o celador:",
    opciones: ["Negarase, posto que non pode abandonar o seu posto de traballo.", "Acompañará ao paciente, pero só ata a ambulancia.", "Cumplirá o encomendado.", "Diralle á supervisora que non é función súa acompañar aos pacientes nas ambulancias."],
    correcta: "C",
    explicacion: "Acompañar al paciente en la ambulancia a otro centro del mismo complejo, si se lo encargan, es tarea del celador."
  },
  {
    tema: "Mortuorio y autopsias",
    origen: "Exame 2024 · Específico E71",
    enunciado: "A.S.V. traballa como celadora na sala de autopsias. Das seguintes tarefas indique cal non realizará:",
    opciones: ["Instrumentar ao médico durante a realización da autopsia.", "Colocar o cadáver na mesa e sacarlle a mortalla se fose necesario.", "Introducir en botes herméticos os restos cadavéricos que lle indiquen.", "Realizará todas as anteriores."],
    correcta: "D",
    explicacion: "Según la respuesta oficial, el celador de autopsias realiza todas esas tareas."
  },
  {
    tema: "Higiene, asepsia y esterilización",
    origen: "Exame 2024 · Específico E72",
    enunciado: "Nada máis comezar a súa quenda de mañá como celador na planta de Neuroloxía ten que axudar á TCAE ao aseo dun paciente. Sinale a resposta correcta:",
    opciones: ["Se presenta venoclise débese cubrir a zona cun apósito impermeable.", "A orde do lavado será: enxaboado-aclarado-enxaugado e secado.", "Unha vez terminado o aseo, e antes de pasar ao seguinte paciente, ofréceselle a cuña.", "A temperatura da auga, ao aplicala ao paciente, estará entre 40°C e 42°C."],
    correcta: "A",
    explicacion: "La vía venosa (venoclisis) se protege con un apósito impermeable durante el aseo. La cuña se ofrece antes del aseo, no después."
  },
  {
    tema: "Funciones del celador",
    origen: "Exame 2024 · Específico E73",
    enunciado: "Vostede traballa como celador/a na área psiquiátrica do hospital. Pola súa experiencia, coñece como actuar ante un paciente que profire insultos e xestos agresivos. Como se debe responder ante tal situación?",
    opciones: ["Notifícase ao médico e á enfermeira responsables a situación.", "Busca diminuír os estímulos externos que incidan no enfermo: luz, voces, ruídos...", "Se fose preciso, colaboraría no illamento e suxeición mecánica do paciente, sempre baixo prescrición médica.", "Todas son correctas."],
    correcta: "D",
    explicacion: "Se avisa a médico y enfermera, se reducen los estímulos y, si hace falta, se colabora en la sujeción, siempre con prescripción médica."
  },
  {
    tema: "Funciones del celador",
    origen: "Exame 2024 · Específico E74",
    enunciado: "Estando no servizo de urxencias, necesítase conter a un paciente psiquiátrico, que está axitado. Cal das seguintes opcións non é correcta?",
    opciones: ["Tentar facerlle ver ao paciente o que lle está pasando.", "Despexar a zona de curiosos, facendo que enfermos e acompañantes permanezan nos seus boxes ou cubículos.", "Á hora da redución, tentarase suxeitar por cada unha das súas catro extremidades.", "Na inmobilización non é necesario máis de catro ou cinco persoas."],
    correcta: "D",
    explicacion: "Según la respuesta oficial, es incorrecta la D, la que limita a cuatro o cinco el número de personas para inmovilizar."
  },
  {
    tema: "Quirófano",
    origen: "Exame 2024 · Específico E75",
    enunciado: "Á hora da colocación das extremidades inferiores do paciente nas perneiras, débese proceder do seguinte xeito:",
    opciones: ["Débense elevar ámbalas dúas extremidades simultaneamente para compensar o retorno venoso e previr danos nas articulacións.", "Débense elevar ámbalas dúas extremidades evitando facelo ao mesmo tempo para compensar o retorno venoso e previr danos nas articulacións.", "Débense elevar ámbalas dúas articulacións ao mesmo tempo para contrarrestar o retorno venoso e previr danos nas mesmas.", "Débense elevar ámbalas dúas articulacións evitando facelo ao mesmo tempo para contrarrestar o retorno venoso e previr danos nas mesmas."],
    correcta: "A",
    explicacion: "Las dos piernas se suben a las perneras a la vez, para compensar el retorno venoso y no dañar las articulaciones."
  },
  {
    tema: "Movilización de pacientes",
    origen: "Exame 2024 · Específico E76",
    enunciado: "Pídennos que axudemos a un paciente con hemiplexía dereita na deambulación. Como o fariamos?",
    opciones: ["Colocariámosnos no lado non afecto.", "Axudariámoslle polo lado afecto, coma si se apoiáse nun bastón.", "Situariámosnos no lado esquerdo.", "Son correctas as respostas a e c."],
    correcta: "D",
    explicacion: "Según la respuesta oficial, nos colocamos en el lado sano, que en una hemiplejia derecha es el izquierdo."
  },
  {
    tema: "Quirófano",
    origen: "Exame 2024 · Específico E77",
    enunciado: "Remata a intervención cirúrxica, vostede porá especial atención en:",
    opciones: ["A colocación do material para a súa esterilización.", "A retirada do aparello de raios portátil da sala previamente á limpeza do quirófano.", "Gardar os accesorios da mesa para que non entren en contacto con material de limpeza húmido que puidese danalos.", "Procederá á recollida e traslado ao servizo correspondente das mostras ou tecidos extirpados para o seu estudo."],
    correcta: "D",
    explicacion: "Al acabar la operación, el celador presta especial atención a llevar las muestras extirpadas al servicio que las estudiará."
  },
  {
    tema: "Primeros auxilios",
    origen: "Exame 2024 · Específico E78",
    enunciado: "En que servizo do hospital podería vostede atopar unha 'cámara cefálica' e para que serviría?",
    opciones: ["En quirófano, para acomodar ao paciente en prono.", "En traumatoloxía, para suxeitar traccións cervicais.", "Na área de neonatoloxía, para administración de osíxeno a bebés.", "Ningunha é correcta."],
    correcta: "C",
    explicacion: "La cámara cefálica (o halo) se usa en neonatología para dar oxígeno a bebés."
  },
  {
    tema: "Funciones del celador",
    origen: "Exame 2024 · Específico E79",
    enunciado: "Estando destinado na planta de pediatría, encoméndanlle que desaloxe as habitacións para a visita médica. Vostede debe:",
    opciones: ["Acatar a orde porque, ademais de ser unha das súas funcións, é unha norma imposta pola Dirección do hospital, que durante a visita médica non se permite a estadía nas habitacións dos acompañantes.", "Acatar a orde, deixando que queden só os que teñan o debido pase permanente.", "Dicir educadamente que é función de seguridade.", "Chamar ao encargado de celadores, xa que o que me piden incumple a norma do hospital de que os nenos poden ter acompañamento en todo momento."],
    correcta: "B",
    explicacion: "Se desalojan las habitaciones, pero pueden quedarse quienes tengan pase permanente."
  },
  {
    tema: "Farmacia y material sanitario",
    origen: "Exame 2024 · Específico E80",
    enunciado: "A supervisora de farmacia ordénalle trasladar unha fórmula maxistral á 4ª planta. Marque a resposta correcta:",
    opciones: ["Realizará a tarefa.", "O celador non traslada fórmulas maxistrais. Corresponde á supervisora da planta ir recollela.", "Chamará ao encargado de quenda para que a leve ou decida a quen manda a recollela.", "A farmacia dun hospital non prepara fórmulas maxistrais."],
    correcta: "A",
    explicacion: "Trasladar medicación y fórmulas magistrales entre servicios es una tarea del celador."
  },
  {
    tema: "Funciones del celador",
    origen: "Exame 2024 · Específico E81",
    enunciado: "Antonio é un celador que leva traballando de forma eventual desde o ano 2022. Co seu primeiro contrato entregáronlle os seus uniformes correspondentes; pasado o tempo, Antonio ten dúbidas de cal é o período de tempo que ten que transcorrer de forma ordinaria para que lle entreguen un novo uniforme. Cal sería este prazo?",
    opciones: ["365 días de traballo efectivo.", "464 xornadas de traballo efectivo.", "720 días de traballo efectivo.", "486 días de traballo efectivo."],
    correcta: "B",
    explicacion: "Según la respuesta oficial, el uniforme se renueva cada 464 jornadas de trabajo efectivo."
  },
  {
    tema: "Almacén y suministros",
    origen: "Exame 2024 · Específico E82",
    enunciado: "A supervisora fixo un pedido urxente dun artigo que se necesitaba en planta. Quen debería subilo?",
    opciones: ["O celador da estafeta.", "O celador de planta, por ser un pedido urxente.", "O celador do correo interno, cando faga o percorrido.", "O celador que está no retén, porque non é función de ningún dos anteriores."],
    correcta: "A",
    explicacion: "Según la respuesta oficial, los pedidos urgentes los sube el celador de la estafeta."
  },
  {
    tema: "Movilización de pacientes",
    origen: "Exame 2024 · Específico E83",
    enunciado: "Para que utilizaremos o método de trabazón de brazos?",
    opciones: ["Axudar ao paciente a levantarse da cama.", "Axudar a camiñar ao paciente.", "Para cambiar almofadas e acomodar ao paciente.", "Esta técnica non se utiliza no hospital."],
    correcta: "C",
    explicacion: "La trabazón de brazos sirve para incorporar al paciente en la cama y así cambiarle la almohada o acomodarlo."
  },
  {
    tema: "Mortuorio y autopsias",
    origen: "Exame 2024 · Específico E84",
    enunciado: "J.M.T. empeza a traballar hoxe como celador auxiliar de autopsias. Con carácter xeral, cal non é unha característica da sala de autopsias?:",
    opciones: ["Dispón de mecanismos antirretorno.", "Posúe un sistema de aspiración.", "Ten refrixeradores con capacidade para dous cadáveres cada cen camas de hospitalización.", "Está habilitada con extractores de aire directos ao exterior."],
    correcta: "C",
    explicacion: "Según la respuesta oficial, la proporción de dos cadáveres por cada cien camas no es una característica de la sala de autopsias."
  },
  {
    tema: "Funciones del celador",
    origen: "Exame 2024 · Específico E85",
    enunciado: "Traballando na planta de Traumatoloxía, dáse conta de que a billa dunha habitación gotea. Que debería facer?",
    opciones: ["Chamar ao servizo de mantemento e dicirlles que suban inmediatamente.", "Avisar ao encargado de quenda, por ser o seu inmediato superior.", "Dicirllo á supervisora de planta, para que ela sexa a que dea parte a mantemento.", "Tentar arranxalo, no caso de que llo encomendase a supervisora."],
    correcta: "C",
    explicacion: "En planta, el celador avisa a la supervisora, que es quien da el parte a mantenimiento."
  },
  {
    tema: "Movilización de pacientes",
    origen: "Exame 2024 · Específico E86",
    enunciado: "Na preparación para a transferencia dun paciente da cama á padiola deberemos:",
    opciones: ["Colocar a padiola en posición perpendicular á cama coa cabeceira da padiola aos pés da cama e frear ambas.", "Colocar a padiola en posición perpendicular á cama coa cabeceira da padiola formando un ángulo de 90° coa cabeceira da cama e frear ambas.", "Colocar a padiola a continuación da cama e frear ambas.", "Son correctas as opcións a e c."],
    correcta: "D",
    explicacion: "La camilla puede ponerse perpendicular a la cama, con su cabecera a los pies de la cama, o a continuación de ella. Siempre con las dos frenadas."
  },
  {
    tema: "Primeros auxilios",
    origen: "Exame 2024 · Específico E87",
    enunciado: "Estando nunha habitación dáse conta de que un dos pacientes empeza a atoparse mal. Sinale a opción incorrecta do que vostede, coma celador, faría:",
    opciones: ["Avisará ao persoal sanitario.", "Procederá a sacar a cabeceira da cama, no caso de que llo pidan.", "Axudará na masaxe cardíaca se fose necesario.", "Axudará na RCP avanzada."],
    correcta: "D",
    explicacion: "La RCP avanzada la hace el personal sanitario; el celador puede avisar, retirar el cabecero y ayudar en el masaje cardíaco."
  },
  {
    tema: "Movilización de pacientes",
    origen: "Exame 2024 · Específico E88",
    enunciado: "O facultativo que vai realizar unha punción lumbar no servizo de urxencias, pídelle ao celador que acuda para axudarlle, que deberá facer?",
    opciones: ["Non acudirá, alegando que é función do persoal sanitario.", "Axudará ao facultativo e seguindo as súas indicacións colocará ao paciente en decúbito lateral cos xeonllos flexionados cara o abdome e a cabeza flexionada cara os xeonllos.", "Só axudará subministrándolle o material necesario.", "Ningunha das respostas anteriores é correcta."],
    correcta: "B",
    explicacion: "Para la punción lumbar el paciente se coloca en decúbito lateral, en posición fetal, para abrir los espacios entre vértebras."
  },
  {
    tema: "Movilización de pacientes",
    origen: "Exame 2024 · Específico E89",
    enunciado: "Atopámosnos traballando na planta de traumatoloxía e pídennos axuda para mobilizar a un paciente con tracción na perna esquerda. Sinale a resposta incorrecta:",
    opciones: ["Con axuda do paciente serán necesarias un mínimo de dúas persoas.", "A enfermeira retirará a tracción para evitar que nos moleste.", "Realizarase o movemento sincronizadamente.", "Se se utiliza saba de arrastre serán necesarias polo menos tres persoas."],
    correcta: "B",
    explicacion: "La tracción no se retira para movilizar al paciente: se mueve con ella puesta."
  },
  {
    tema: "Funciones del celador",
    origen: "Exame 2024 · Específico E90",
    enunciado: "A enfermeira de urxencias pide a un celador que axude na colocación e posterior retirada dunha cuña a un dos pacientes que está en padiola na sala de observación e que require un tratamento especial debido ás súas doenzas. O celador:",
    opciones: ["Negarase a facer ese cometido por non ser da súa competencia.", "Informará á enfermeira de que é función do auxiliar de enfermería.", "Fará o que lle encomendaron só por ser unha función exclusiva do celador.", "Dada a excepcionalidade e circunstancias especiais do paciente, o celador deberá colaborar co persoal sanitario na colocación e retirada da mesma."],
    correcta: "D",
    explicacion: "Con pacientes que necesitan un trato especial por su dolencia, el celador colabora con el personal sanitario en la colocación de la cuña."
  },
  {
    tema: "Traslado de pacientes",
    origen: "Exame 2024 · Específico E91",
    enunciado: "Se temos que trasladar a un paciente ao servizo de radioloxía en cadeira de rodas e para iso debemos baixar un piso:",
    opciones: ["Empuxaremos a cadeira desde a parte de atrás pola empuñadura.", "Para entrar e saír do ascensor o celador entra e sae sempre primeiro tirando da cadeira.", "Si o ascensor quedou lixeiramente elevado con respecto ao chán da planta entraremos de fronte.", "Son correctas as respostas a e c."],
    correcta: "D",
    explicacion: "Según la respuesta oficial, son correctas la A y la C: la silla se empuja por la empuñadura y, si el ascensor queda un poco elevado, se entra de frente."
  },
  {
    tema: "Movilización de pacientes",
    origen: "Exame 2024 · Específico E92",
    enunciado: "Na planta de hospitalización, ao colaborar no aseo dun paciente, o persoal de enfermería solicita cambiar o colchón a un paciente co fin de previr as úlceras por decúbito. Que tipo de colchón deberiamos buscar?",
    opciones: ["Colchón de resortes.", "Colchón alternating.", "Colchón de espuma.", "Colchón Bariátrico."],
    correcta: "B",
    explicacion: "El colchón alternating (de presión alterna) va cambiando los puntos de apoyo y previene las úlceras."
  },
  {
    tema: "Movilización de pacientes",
    origen: "Exame 2024 · Específico E93",
    enunciado: "Na planta na que traballa solicitan unha cama especial para un paciente afectado de obesidade mórbida. Vostede levará á unidade unha:",
    opciones: ["Cama Bariátrica.", "Cama de Judet.", "Cama electrocircular.", "Cama de Sanders."],
    correcta: "A",
    explicacion: "La cama bariátrica está pensada para pacientes con obesidad mórbida."
  },
  {
    tema: "Funciones del celador",
    origen: "Exame 2024 · Específico E94",
    enunciado: "Vostede atópase destinado no día de hoxe na área de Saúde Mental do hospital. O persoal facultativo solicítalle desempeñar unha serie de funcións, entre as que non se pode atopar:",
    opciones: ["Vixiar a orde e a harmonía entre os pacientes.", "Recoller medicación e outros produtos da farmacia en carros unidose.", "Axudar ao persoal sanitario na administración de inxectables e tratamento de pacientes incapaces que se negan a colaborar.", "Reducir aos pacientes axitados aplicando suxeición mecánica ao seu criterio."],
    correcta: "D",
    explicacion: "La sujeción mecánica nunca se aplica a criterio del celador: requiere prescripción médica."
  },
  {
    tema: "Traslado de pacientes",
    origen: "Exame 2024 · Específico E95",
    enunciado: "Hai que trasladar a un paciente ingresado na planta de psiquiatría, onde vostede está de quenda, a unha consulta que está noutro hospital do mesmo complexo. O paciente terá que ir en ambulancia. Sinale cal das seguintes opcións é incorrecta:",
    opciones: ["Levará ao paciente en padiola desde a planta ata a ambulancia.", "Transferirá ao paciente á padiola da ambulancia con axuda do técnico da mesma.", "Axudará a subir a padiola á ambulancia.", "Acompañará ao paciente ata o seu regreso á planta, como lle encomendaron."],
    correcta: "C",
    explicacion: "Según la respuesta oficial, subir la camilla a la ambulancia no le corresponde al celador."
  },
  {
    tema: "Movilización de pacientes",
    origen: "Exame 2024 · Específico E96",
    enunciado: "Cal sería a forma correcta de subir a un paciente colaborador cara a cabeceira da cama?",
    opciones: ["Poñer a cama en horizontal ou en lixeiro Trendelemburg.", "Comprobar que a cama non esté freada.", "Pediremos ao paciente que estire os xeonllos.", "As respostas a e b son correctas."],
    correcta: "A",
    explicacion: "Se pone la cama horizontal o en ligero Trendelenburg, siempre frenada, y el paciente flexiona las rodillas para ayudar."
  },
  {
    tema: "Movilización de pacientes",
    origen: "Exame 2024 · Específico E97",
    enunciado: "Ordénanlle acudir ao almacén de camas do hospital para buscar unha cama con somier metálico formado por dous ou tres segmentos móbiles e adaptables ás necesidades do paciente. Que cama estamos a buscar?",
    opciones: ["Cama articulada.", "Cama ortopédica.", "Cama de Klondike.", "Cama Clinitron."],
    correcta: "A",
    explicacion: "La cama articulada tiene el somier dividido en dos o tres segmentos móviles."
  },
  {
    tema: "Funciones del celador",
    origen: "Exame 2024 · Específico E98",
    enunciado: "Unha persoa acode ao servizo de urxencias e avisa ao celador de que no exterior do centro hai unha persoa no chan que necesita axuda urxente. Neste caso o celador:",
    opciones: ["Dirá á persoa que o acerque para que o vexa o médico.", "Pediralle que se acerque ao servizo de admisión de urxencias para que sexa este o que avise ao médico.", "Facilitaralle unha padiola para que traslade ao enfermo.", "Asegurarase dos feitos e informará de inmediato ao persoal sanitario, seguindo as súas instrucións para trasladar ao paciente."],
    correcta: "D",
    explicacion: "El celador comprueba lo que pasa, avisa enseguida al personal sanitario y sigue sus instrucciones para el traslado."
  },
  {
    tema: "Ofimática y equipos",
    origen: "Exame 2024 · Específico E99",
    enunciado: "Ordénanlle facer fotocopias pero a máquina está estragada e só dispón dunha pequena fotocopiadora cuxa bandexa non admite un ancho de papel superior a 210 mm. Que formato de papel pode usar?",
    opciones: ["DIN A4.", "DIN A5.", "DIN A6.", "Todos os anteriores."],
    correcta: "D",
    explicacion: "A4 mide 210 mm de ancho, y A5 y A6 son más estrechos, así que caben todos."
  },
  {
    tema: "Movilización de pacientes",
    origen: "Exame 2024 · Específico E100",
    enunciado: "A supervisora da planta na que nos atopamos traballando pídenos que axudemos ao auxiliar de enfermaría a pasar a un paciente non colaborador á poltrona. Sinale a resposta incorrecta:",
    opciones: ["Explicaremos ao paciente o procedemento a seguir.", "Elevaremos a cabeceira da cama se é posible.", "Colocarémosnos de forma que o auxiliar estea ao carón da cama e nós no contrario.", "Colocarémosnos ambos no mesmo lado da cama."],
    correcta: "C",
    explicacion: "Para pasar al paciente al sillón, las dos personas se colocan en el mismo lado de la cama, no en lados opuestos."
  },
  {
    tema: "Funciones del celador",
    origen: "Exame 2024 · Específico E101",
    enunciado: "Os familiares que acoden ao servizo de urxencias do hospital acompañando a un paciente, dinlle ao celador da porta que este ten dor no peito e antecedentes de infarto, como deberá actuar dito celador?",
    opciones: ["Levarao nunha cadeira de rodas rapidamente ao servizo de admisión de urxencias para que facilite os datos e despois pasarao á zona de triaxe.", "Dados os antecedentes do paciente e a alta posibilidade de que se trate dun infarto, levarao directamente ao servizo de cardioloxía.", "Trasladarao de inmediato á sala de triaxe para ser valorado polo persoal sanitario e, ao final, informará á familia do seu estado.", "Trasladarao de inmediato á sala de triaxe para ser valorado polo persoal sanitario mentres a familia facilita os datos do paciente en admisión de urxencias."],
    correcta: "D",
    explicacion: "El paciente va directo a triaje mientras la familia da los datos en admisión. Informar del estado del paciente no es tarea del celador."
  },
  {
    tema: "Funciones del celador",
    origen: "Exame 2024 · Específico E102",
    enunciado: "Terminado o horario de visitas, aparece unha persoa que lle ensina a tarxeta identificativa de persoal dunha institución sanitaria dependente do SERGAS. Dille que quere entrar a ver a un amigo que está ingresado. Que tería que facer vostede?",
    opciones: ["Deixalo pasar porque é compañeiro.", "Deixalo pasar porque a tarxeta identificativa de persoal do SERGAS é válida como pase de visita.", "Explícalle que esa tarxeta non é válida como pase de visita.", "Infórmalle educadamente do horario de visitas, instándolle a vir outro día."],
    correcta: "C",
    explicacion: "La tarjeta de empleado del Sergas no sirve como pase de visita."
  },
  {
    tema: "Mortuorio y autopsias",
    origen: "Exame 2024 · Específico E103",
    enunciado: "A celadora da unidade de coidados paliativos está a axudar a preparar un cadáver para levalo ao mortuorio. Un familiar comenta que van realizarlle unha preservación química. Indique a resposta incorrecta:",
    opciones: ["Será obrigatoria cando o cadáver vaia a ser exposto nun lugar público ata un máximo de 72 horas.", "Pode ser realizada por un profesional Graduado en Medicina.", "Realízase en salas de tanatopraxia.", "Pódese efectuar unha vez transcorridas 8 horas desde o falecemento."],
    correcta: "A",
    explicacion: "Según la respuesta oficial, es incorrecta la A, la que hace obligatoria la conservación para exponer el cadáver hasta 72 horas."
  },
  {
    tema: "Farmacia y material sanitario",
    origen: "Exame 2024 · Específico E104",
    enunciado: "A.C.R. é celadora no servizo de farmacia. No almacén observa que unha caixa está rotulada como 'medicamentos fotosensibles'. Onde se gardan este tipo de medicamentos?:",
    opciones: ["Son sensibles á calor, polo tanto, en cámaras frigoríficas.", "En armarios de seguridade aos que só teñen acceso os farmacéuticos.", "En lugares protexidos da luz.", "Ningunha é correcta."],
    correcta: "C",
    explicacion: "Fotosensible significa sensible a la luz, así que se guardan protegidos de ella."
  },
  {
    tema: "Mortuorio y autopsias",
    origen: "Exame 2024 · Específico E105",
    enunciado: "Ao finalizar unha autopsia clínica, o médico indícalle que amortalle ao cadáver. Cal será o seu correcto proceder?",
    opciones: ["Avisará ao encargado de quenda para que localice ao enfermeiro encargado.", "O celador axudará aos enfermeiros ou persoas encargadas a amortallar aos enfermos falecidos. Polo tanto, non é función do celador.", "No mortuorio amortalla o anatomopatólogo. O celador axudaría na mobilización.", "Todas son incorrectas."],
    correcta: "D",
    explicacion: "En la sala de autopsias, amortajar al cadáver después de la autopsia sí es función del celador, así que todas las opciones son incorrectas."
  },
  {
    tema: "Funciones del celador",
    origen: "Exame 2024 · Específico E106 (reserva)",
    enunciado: "Encoméndanlle baixar uns gases ao laboratorio de urxencias. Son uns capilares e danlle un imán para que os vaia movendo, evitando a súa coagulación. Sinale a opción correcta respecto do que tería que facer no devandito suposto:",
    opciones: ["Acatar a orde.", "Deixar a mostra na área de recepción de mostras, porque non é función súa distribuír as mostras polos distintos laboratorios.", "Educadamente decirlle que lle corresponde ao TCAE trasladar mostras que necesiten manipulación.", "Poñerá a mostra nunha batea e baixaraa ao laboratorio de urxencias."],
    correcta: "C",
    explicacion: "Una muestra que hay que manipular durante el trayecto (mover el imán) la tiene que trasladar el TCAE, no el celador."
  },
  {
    tema: "Ofimática y equipos",
    origen: "Exame 2024 · Específico E107 (reserva)",
    enunciado: "Está a realizar fotocopias e a súa multifunción mostra unha icona con dous círculos pequenos e unha liña en zigzag. Sinale a resposta correcta:",
    opciones: ["Repoñer o tóner.", "Desatascar a máquina.", "Reiniciar a multifunción.", "Ningunha é correcta."],
    correcta: "B",
    explicacion: "Ese icono (los rodillos con el papel en zigzag) avisa de un atasco de papel."
  },
  {
    tema: "Mortuorio y autopsias",
    origen: "Exame 2024 · Específico E108 (reserva)",
    enunciado: "Disponse a preparar un cadáver para unha autopsia e observa que ten manchas cutáneas de cor vermella-violácea. Marque a resposta correcta.",
    opciones: ["O seu lugar de aparición depende da posición do cadáver.", "Este proceso denomínase Algor Mortis.", "É un fenómeno cadavérico tardío.", "Iníciase cunha mancha verde."],
    correcta: "A",
    explicacion: "Son las livideces (livor mortis): aparecen pronto y en las zonas más bajas según la posición del cadáver. El algor mortis es el enfriamiento y la mancha verde es de la putrefacción."
  },
  {
    tema: "Movilización de pacientes",
    origen: "Exame 2024 · Específico E109 (reserva)",
    enunciado: "No transcurso da súa xornada laboral nunha planta de hospitalización, escoita ao persoal de enfermería solicitando unha sentinela ao persoal técnico en coidados auxiliares de enfermería. A que se refiren?",
    opciones: ["A unha luz piloto que se atopa na parte baixa da parede e que permite circular sen tropezar.", "A un timbre que vai conectado a unha caravilla da parede e que permite solicitar axuda e servizos ao persoal que estea de quenda.", "Unha almofada utilizada para previr lesións e caídas.", "Ningunha é correcta."],
    correcta: "C",
    explicacion: "La sentinela es una almohada que se usa para prevenir lesiones y caídas."
  },
  {
    tema: "Quirófano",
    origen: "Exame 2024 · Específico E110 (reserva)",
    enunciado: "A vostede, como celador/a no quirófano, pídenlle a súa colaboración para acomodar a un paciente na mesa. Ante o cal, deberá prestar atención a:",
    opciones: ["Preservar a intimidade do paciente.", "Evitar que durante a mobilización, o paciente teña no seu campo de visión o instrumental.", "Colocar con seguridade os accesorios da mesa evitando que se desprendan dela accidentalmente.", "Debemos prestar atención a todas elas."],
    correcta: "D",
    explicacion: "Al colocar al paciente en la mesa hay que cuidar su intimidad, que no vea el instrumental y que los accesorios estén bien sujetos."
  }
];
