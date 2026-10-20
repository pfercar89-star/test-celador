// =====================================================================
//  PUNTOS CONFLICTIVOS
//  Puntos donde el examen oficial de 2024, tu temario y tus preguntas no
//  coinciden, respuestas oficiales difíciles de explicar y normas que han
//  cambiado. Se muestran en la sección "Puntos conflictivos" de la app.
//
//  Campos de cada punto:
//    grupo:     título del grupo en el que aparece.
//    estado:    "Comprobado" (las fuentes coinciden), "Probable" (explicación
//               razonable sin norma literal), "Dudoso" (consúltalo con tu
//               academia) o "Norma cambiada".
//    titulo:    título del punto.
//    tema:      tema de preguntas.js al que pertenece.
//    preguntas: códigos de las preguntas del examen de 2024 (por ejemplo "E105").
//               Sirven para el botón "Practicar estas preguntas".
//    contenido: explicación en Markdown (- listas, **negrita**, *cursiva*).
//    fuentes:   enlaces consultados: { titulo, url }.
//
//  Revisado en octubre de 2026.
// =====================================================================

const CONFLICTIVOS = [
  {
    grupo: "El examen oficial choca con tu temario o tus preguntas",
    estado: "Comprobado",
    titulo: "¿Quién amortaja? Planta frente a sala de autopsias",
    tema: "Fallecidos y autopsias",
    preguntas: ["E105"],
    contenido: "- **En la planta (art. 14.2.19.ª del Estatuto de 1971, literal):** *Ayudarán a las Enfermeras o personas encargadas a amortajar a los enfermos fallecidos, corriendo a su cargo el traslado de los cadáveres al mortuorio.* Es lo que dicen tu temario y tus preguntas.\n- **En la sala de autopsias (art. 14.2.20.ª):** el celador ayuda en las funciones auxiliares *que no requieran por su parte hacer uso de instrumental alguno sobre el cadáver*, y limpia la mesa y la sala. Volver a amortajar el cadáver al **terminar la autopsia** es una de esas tareas sin instrumental, como recogen los manuales. Por eso en la E105 la respuesta oficial es *Todas son incorrectas*.\n- **Para el examen:** fíjate en **dónde** sitúa la pregunta la escena. La opción que aplica la regla de la planta a la sala de autopsias es la trampa.",
    fuentes: [
      { titulo: "BOE 22/7/1971: Estatuto de Personal No Sanitario (art. 14.2, funciones del celador)", url: "https://www.boe.es/boe/dias/1971/07/22/pdfs/A12015-12024.pdf" },
      { titulo: "Ocronos: Funciones del celador ante un éxitus, en el mortuorio y en la sala de autopsias", url: "https://revistamedica.com/funciones-celador-exitus-mortuorio-autopsias/" },
      { titulo: "Ocronos: El celador en la sala de autopsias: actuación y prevención", url: "https://revistamedica.com/celador-autopsias-actuacion-prevencion/" },
      { titulo: "Congreso SICEPA: Funciones del celador en sala de autopsias", url: "https://congresosicepa.com/funciones-celador-sala-de-autopsias/" }
    ]
  },
  {
    grupo: "El examen oficial choca con tu temario o tus preguntas",
    estado: "Dudoso",
    titulo: "¿El celador instrumenta en las autopsias?",
    tema: "Fallecidos y autopsias",
    preguntas: ["E71"],
    contenido: "- **Norma (art. 14.2.20.ª, literal):** *Ayudarán a la práctica de autopsias en aquellas funciones auxiliares que no requieran por su parte hacer uso de instrumental alguno sobre el cadáver. Limpiarán la mesa de autopsias y la propia sala.* Tu temario lo resalta como trampa típica.\n- **Examen 2024 (E71):** la plantilla da por bueno que la celadora de autopsias realiza **todas** las tareas, incluida *instrumentar al médico*.\n- **Cómo encajarlo:** pasarle el instrumental al médico no es usarlo uno mismo sobre el cadáver. Es una interpretación; la pregunta es **discutible**.\n- **Para el examen:** si una opción dice *hacer incisiones* o *extraer órganos*, es falsa. *Pasar el instrumental* puede darse por buena.",
    fuentes: [
      { titulo: "BOE 22/7/1971: Estatuto de Personal No Sanitario (art. 14.2, funciones del celador)", url: "https://www.boe.es/boe/dias/1971/07/22/pdfs/A12015-12024.pdf" },
      { titulo: "Congreso SICEPA: Funciones del celador en sala de autopsias", url: "https://congresosicepa.com/funciones-celador-sala-de-autopsias/" }
    ]
  },
  {
    grupo: "El examen oficial choca con tu temario o tus preguntas",
    estado: "Dudoso",
    titulo: "Hemiplejía: ¿en qué lado se pone el celador al caminar?",
    tema: "Movilización y traslado de pacientes",
    preguntas: ["E76"],
    contenido: "- **Tu temario (tema 3) y dos preguntas de tu banco:** el celador se coloca en el **lado afectado**, para sujetarle si cede.\n- **Examen 2024 (E76):** la respuesta oficial es *a y c*: en el **lado no afectado**, que en una hemiplejía derecha es el **izquierdo**.\n- **Examen del SAS 2025 (aplazado, pregunta 33):** la respuesta oficial también es el **lado que conserva la movilidad**.\n- **Fuentes:** están **divididas**. Algunos materiales de movilización dicen que las transferencias se hacen por el lado sano; otros, que el ayudante se coloca en el lado afecto.\n- **Para el examen:** dos tribunales distintos (Sergas 2024 y SAS 2025) han dado por buena el **lado sano**. Si vuelve a salir, márcala.",
    fuentes: [
      { titulo: "Universidad de Cantabria: Movilización de pacientes", url: "https://ocw.unican.es/pluginfile.php/3568/course/section/3221/PL-Movilizacio%CC%81n_25-26.pdf" },
      { titulo: "Fundación Jiménez Díaz: Consejos para cuidadores del paciente hemipléjico", url: "https://www.fjd.es/en/services-portfolio/rehabilitation/unidades/neurorehabilitacion/consejos.files/21442-Consejos%20para%20familiares%20y%20cuidadores%20del%20paciente%20hemiplejico%20que%20se%20encuentra%20en%20su%20domicilio.pdf" }
    ]
  },
  {
    grupo: "El examen oficial choca con tu temario o tus preguntas",
    estado: "Probable",
    titulo: "Cama → camilla: ¿paralela o perpendicular?",
    tema: "Movilización y traslado de pacientes",
    preguntas: ["E86"],
    contenido: "- **Tu temario y tu banco:** camilla **paralela y pegada** a la cama, a la misma altura y frenadas.\n- **Examen 2024 (E86):** da por buenas la camilla **perpendicular, con su cabecera a los pies de la cama**, y la camilla **a continuación** de la cama.\n- **Cómo encajarlo:** depende de la técnica. **Paralela** para **deslizar** al paciente (con sábana o tabla). **Perpendicular** en el **levantamiento entre tres personas**, que cargan al paciente en brazos y giran hacia la camilla.\n- **Para el examen:** si la pregunta no dice la técnica y no aparece *paralela* entre las opciones, la perpendicular es válida. **Frenar ambas** siempre.",
    fuentes: []
  },
  {
    grupo: "El examen oficial choca con tu temario o tus preguntas",
    estado: "Probable",
    titulo: "Silla de ruedas en el ascensor: ¿quién entra y quién sale primero?",
    tema: "Movilización y traslado de pacientes",
    preguntas: ["E91"],
    contenido: "- **Tu temario y tu banco (examen Sergas 2019):** al **entrar**, el celador va **primero, de espaldas, tirando de la silla**.\n- **Examen 2024 (E91):** la frase *el celador entra y **sale siempre** primero tirando de la silla* se dio por **incorrecta**.\n- **Cómo encajarlo:** si entras de espaldas, el paciente queda mirando a la puerta. Al **salir**, empujas la silla y **sale primero el paciente**. Lo que falla es el *siempre* y el *sale*.\n- **Otra trampa de la misma pregunta:** si el ascensor queda **un poco elevado** respecto al suelo, se entra **de frente**.",
    fuentes: [
      { titulo: "Revista Sanitaria de Investigación: Funciones del celador en el ascensor", url: "https://revistasanitariadeinvestigacion.com/?p=29431" }
    ]
  },
  {
    grupo: "El examen oficial choca con tu temario o tus preguntas",
    estado: "Probable",
    titulo: "Ambulancia: ¿el celador sube la camilla al vehículo?",
    tema: "Urgencias y ambulancias",
    preguntas: ["E95"],
    contenido: "- **Tu banco:** el celador ayuda a **sacar o introducir al paciente** y a **pasarlo** entre la camilla de la ambulancia y la del hospital.\n- **Examen 2024 (E95):** *ayudará a subir la camilla a la ambulancia* es la opción **incorrecta**.\n- **Cómo encajarlo:** pasar al paciente de una camilla a otra sí es del celador. **Cargar la camilla en el vehículo** es tarea del **técnico de la ambulancia (TES)**.",
    fuentes: [
      { titulo: "Comunidad de Madrid: Funciones del celador", url: "https://gestiona3.madrid.org/bvirtual/BVCM050882-5-56291016.pdf" }
    ]
  },
  {
    grupo: "El examen oficial choca con tu temario o tus preguntas",
    estado: "Probable",
    titulo: "Quirófano: comprobar identidad e historia clínica",
    tema: "Quirófano, hospitalización y salud mental",
    preguntas: ["E65"],
    contenido: "- **Tu temario (tema 4) y tu banco:** **antes** de trasladar al paciente, el celador comprueba su **identidad** (pulsera) y que lleva su documentación.\n- **Examen 2024 (E65):** *después de cada traslado, comprobará que la historia clínica corresponde con la identidad del paciente* **no** es función del celador.\n- **Cómo encajarlo:** el celador comprueba **antes de salir** quién es el paciente y que la documentación va con él. **Cotejar el contenido de la historia clínica** al llegar es tarea del personal sanitario.",
    fuentes: []
  },
  {
    grupo: "La norma ha cambiado",
    estado: "Norma cambiada",
    titulo: "Sanidad mortuoria en Galicia: el Decreto 151/2014 está derogado",
    tema: "Fallecidos y autopsias",
    preguntas: [],
    contenido: "- **Ahora rige el Decreto 129/2023**, de 31 de agosto, de sanidad mortuoria de Galicia (DOG del 18/9/2023, en vigor desde el 18/10/2023).\n- **Ya corregido en la app:** el temario (temas 5 específico y 6 común) y dos preguntas del banco citaban el 151/2014. Ahora citan el 129/2023.\n- **Cambios útiles del nuevo decreto:**\n  - el plazo mínimo para enterrar baja de **24 a 12 horas**;\n  - refrigeración entre **−2 °C y 5 °C**; congelación a **−18 °C** o menos;\n  - refrigeración, congelación y conservación, solo pasadas **8 horas** desde el fallecimiento.\n- **Ojo:** el examen de 2024 se basó en la convocatoria de 2022. Si sale una pregunta con la norma antigua, puede haber diferencias.",
    fuentes: [
      { titulo: "Sergas: texto del Decreto 129/2023 (PDF)", url: "https://extranet.sergas.es/nrmtv/docs/cas/NormativaConvenios/NormativaSanitaria/archivos/DECRETO%20129-2023,%20do%2031%20de%20agosto,%20de%20sanidade%20mortuoria%20de%20Galicia.pdf" },
      { titulo: "DOG 18/9/2023: Decreto 129/2023, de sanidad mortuoria de Galicia", url: "https://www.xunta.gal/dog/Publicados/2023/20230918/AnuncioC3K1-080923-0002_es.html" },
      { titulo: "Derecho Local: Nueva regulación de la sanidad mortuoria en Galicia", url: "https://derecholocal.es/novedad-legislativa/nueva-regulacion-de-la-sanidad-mortuoria-en-galicia" }
    ]
  },
  {
    grupo: "La norma ha cambiado",
    estado: "Comprobado",
    titulo: "Nuevo Estatuto Marco: todavía no está aprobado",
    tema: "Estatuto Marco",
    preguntas: [],
    contenido: "- **Sigue vigente la Ley 55/2003.** El aviso de tu temario (tema 5 común) es correcto.\n- **Situación (septiembre de 2026):** el Gobierno aprobó el **proyecto de ley** y lo envió al **Congreso**, donde se tramita.\n- **Qué cambiaría:** jornada máxima de 45 horas semanales, guardias de 17 horas como máximo, oposiciones al menos cada dos años, jubilación…\n- **Para el examen:** estudia la **Ley 55/2003**. Antes del examen, comprueba que no se haya publicado el nuevo Estatuto en el BOE y mira qué dicen las bases de tu convocatoria.",
    fuentes: [
      { titulo: "isanidad: El Gobierno da luz verde al Estatuto Marco y abre su tramitación parlamentaria", url: "https://isanidad.com/385330/el-gobierno-da-luz-verde-al-estatuto-marco-y-abre-su-tramitacion-parlamentaria-pese-al-rechazo-medico/" },
      { titulo: "Infobae: El Gobierno aprueba en segunda vuelta el Proyecto de Estatuto Marco", url: "https://www.infobae.com/america/agencias/2026/09/01/el-gobierno-aprueba-en-segunda-vuelta-el-proyecto-de-estatuto-marco-y-lo-envia-al-congreso-pese-a-la-huelga-medica/" }
    ]
  },
  {
    grupo: "La norma ha cambiado",
    estado: "Norma cambiada",
    titulo: "Consentimiento de los mayores de 16 años en actuaciones de grave riesgo",
    tema: "Ley General de Sanidad",
    preguntas: [],
    contenido: "- **Regla:** a partir de los **16 años** (o emancipado), el menor consiente por sí mismo (Ley 41/2002, art. 9.4).\n- **Excepción, redacción vigente desde la Ley 26/2015:** en una actuación de **grave riesgo para su vida o salud**, consiente el **representante legal**, después de oír y tener en cuenta la opinión del menor.\n- **Redacción antigua (ya no vale):** *los padres serán informados y su opinión será tenida en cuenta*. Muchos temarios y tests la siguen copiando.\n- **Ya corregido en la app:** dos preguntas del banco usaban la redacción antigua, y el temario (temas 3 y 7 de la parte común) lo explica ahora completo.",
    fuentes: [
      { titulo: "BOE: Ley 41/2002, texto consolidado (art. 9.4)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2002-22188" }
    ]
  },
  {
    grupo: "Respuestas oficiales raras que sí se pueden explicar",
    estado: "Comprobado",
    titulo: "Temperatura de la cámara de cadáveres: entre −2 °C y 5 °C",
    tema: "Fallecidos y autopsias",
    preguntas: ["E17"],
    contenido: "- **Art. 3.y del Decreto 129/2023 (literal):** la refrigeración se hace *a una temperatura comprendida entre -2º y 5ºC*. La congelación (art. 3.l), *a una temperatura de por lo menos -18ºC*.\n- Un cadáver refrigerado puede estar así un máximo de **72 horas** desde el fallecimiento (art. 8.8).\n- **Trampa:** no confundir con los medicamentos termolábiles, que van **entre 2 °C y 8 °C**.",
    fuentes: [
      { titulo: "Sergas: texto del Decreto 129/2023 (PDF)", url: "https://extranet.sergas.es/nrmtv/docs/cas/NormativaConvenios/NormativaSanitaria/archivos/DECRETO%20129-2023,%20do%2031%20de%20agosto,%20de%20sanidade%20mortuoria%20de%20Galicia.pdf" },
      { titulo: "DOG 18/9/2023: Decreto 129/2023, de sanidad mortuoria de Galicia", url: "https://www.xunta.gal/dog/Publicados/2023/20230918/AnuncioC3K1-080923-0002_es.html" }
    ]
  },
  {
    grupo: "Respuestas oficiales raras que sí se pueden explicar",
    estado: "Comprobado",
    titulo: "Vehículos de transporte sanitario: 10 años desde la PRIMERA matriculación",
    tema: "Urgencias y ambulancias",
    preguntas: ["E55"],
    contenido: "- Un vehículo de transporte sanitario puede tener como máximo **10 años desde su primera matriculación** (Orden PRE/1435/2013, arts. 32 y 36).\n- La opción del examen decía *desde la **última** matriculación*. Por eso era la **incorrecta**: es una trampa de **una sola palabra**.\n- La certificación técnico-sanitaria dura **2 años** en vehículos nuevos y **1 año** a partir del segundo año.",
    fuentes: [
      { titulo: "Gobierno Vasco: Certificación técnico-sanitaria de ambulancias", url: "https://www.euskadi.eus/autorizacion/vehiculos-de-transporte-sanitario-por-carretera-y-ambulancias/web01-tramite/es/" },
      { titulo: "Comunidad de Madrid: Certificación de vehículos de transporte sanitario", url: "https://sede.comunidad.madrid/autorizaciones-licencias-permisos-carnes/certificacion-vehiculos-trans-sanitario" },
      { titulo: "BOE: Orden PCM/406/2023 (modifica la Orden PRE/1435/2013)", url: "https://boe.gob.es/boe/dias/2023/04/25/pdfs/BOE-A-2023-9956.pdf" }
    ]
  },
  {
    grupo: "Respuestas oficiales raras que sí se pueden explicar",
    estado: "Comprobado",
    titulo: "Máximo de camas por habitación: cuatro",
    tema: "Mobiliario y utensilios",
    preguntas: ["E48"],
    contenido: "- Los manuales de enfermería sobre la **unidad del paciente** fijan un máximo de **4 camas por habitación**, con posibilidad de aislamiento visual entre ellas (cortinas o biombos).\n- **Medidas orientativas:** individual, unos 10 m²; doble, unos 14 m²; triple, unos 18-20 m².\n- No he encontrado la norma oficial que lo fija; viene de manuales.",
    fuentes: [
      { titulo: "Studylib: La unidad del paciente", url: "https://www.studylib.es/doc/5592336/1.-unidad-de-paciente-se-denomina-unidad-del-paciente-al" }
    ]
  },
  {
    grupo: "Respuestas oficiales raras que sí se pueden explicar",
    estado: "Probable",
    titulo: "Contener a un paciente agitado: hacen falta al menos 5 personas",
    tema: "Quirófano, hospitalización y salud mental",
    preguntas: ["E74"],
    contenido: "- Los protocolos de contención asignan **una persona por cada extremidad y otra para la cabeza**: **5 personas**. La maniobra la **dirige el médico**.\n- Por eso es **incorrecta** la opción *no son necesarias más de cuatro o cinco personas*: con cuatro no basta.",
    fuentes: [
      { titulo: "Encolombia: Contención mecánica en el paciente agitado", url: "https://encolombia.com/medicina/guiasmed/rehabilitacion-adulto-esquizofrenia/contencion-mecanica-paciente" },
      { titulo: "Psiquiatria.com: Protocolo de enfermería para la contención mecánica", url: "https://psiquiatria.com/psiquiatria-general/abordaje-al-paciente-agitado-protocolo-de-enfermeria-para-la-contencion-mecanica-6096" }
    ]
  },
  {
    grupo: "Respuestas oficiales raras que sí se pueden explicar",
    estado: "Comprobado",
    titulo: "Conservación química del cadáver: 48 horas, no 72",
    tema: "Fallecidos y autopsias",
    preguntas: ["E103"],
    contenido: "- **Art. 10.c del Decreto 129/2023 (literal):** la conservación transitoria es obligatoria *cuando el cadáver vaya a ser expuesto en un lugar público hasta un máximo de **48 horas** desde la hora del fallecimiento*. La opción del examen decía **72** horas: por eso era la **incorrecta**.\n- **Art. 8.1:** las técnicas de conservación solo se aplican *transcurridas 8 horas desde el fallecimiento*. Esa opción era **correcta**.\n- **También es obligatoria (art. 10)** si la inhumación o incineración es entre las 48 y las 96 horas, o en traslados a comunidades que lo exijan.",
    fuentes: [
      { titulo: "Sergas: texto del Decreto 129/2023 (PDF)", url: "https://extranet.sergas.es/nrmtv/docs/cas/NormativaConvenios/NormativaSanitaria/archivos/DECRETO%20129-2023,%20do%2031%20de%20agosto,%20de%20sanidade%20mortuoria%20de%20Galicia.pdf" },
      { titulo: "DOG 18/9/2023: Decreto 129/2023, de sanidad mortuoria de Galicia", url: "https://www.xunta.gal/dog/Publicados/2023/20230918/AnuncioC3K1-080923-0002_es.html" }
    ]
  },
  {
    grupo: "Respuestas oficiales raras que sí se pueden explicar",
    estado: "Probable",
    titulo: "Salud mental: la unidad de rehabilitación no es un dispositivo intermedio",
    tema: "Quirófano, hospitalización y salud mental",
    preguntas: ["E52"],
    contenido: "- El Decreto 389/1994 de salud mental de Galicia clasifica las **unidades hospitalarias de rehabilitación psiquiátrica** como dispositivo **hospitalario** propio, no entre los recursos comunitarios.\n- Los **centros de media y larga estancia** y los **pisos protegidos** son los dispositivos intermedios o rehabilitadores. Por eso la respuesta oficial es *unidad de rehabilitación*.",
    fuentes: [
      { titulo: "DOG: normativa de salud mental de Galicia", url: "https://www.xunta.gal/dog/Publicados/2006/20060406/AnuncioA492_es.html" }
    ]
  },
  {
    grupo: "Respuestas oficiales raras que sí se pueden explicar",
    estado: "Probable",
    titulo: "Un niño de 6 años con pase para paliativos puede pasar",
    tema: "Funciones del celador",
    preguntas: ["E60"],
    contenido: "- **Regla general:** los menores tienen restringidas las visitas.\n- **Excepción:** las autoriza la **supervisión** (tu temario, tema 1). Muchos hospitales permiten a los menores visitar a familiares en **cuidados paliativos**.\n- **En la pregunta**, el **pase** ya indica que van a paliativos: la excepción está autorizada y el celador los deja pasar.",
    fuentes: [
      { titulo: "Justicia de Aragón: restricción de visitas a menores y excepciones", url: "https://eljusticiadearagon.es/wp-content/uploads/resoluciones/Sugerenciaparapublicar22-706-05.pdf" }
    ]
  },
  {
    grupo: "Dudosas: sin explicación ni fuente clara",
    estado: "Dudoso",
    titulo: "Renovación del uniforme: cada 464 jornadas",
    tema: "Funciones del celador",
    preguntas: ["E81"],
    contenido: "- **Respuesta oficial:** el uniforme se renueva de forma ordinaria cada **464 jornadas de trabajo efectivo**.\n- El **Estatuto de 1971 (art. 62)** solo dice que las características y la **duración** de las prendas las determina la Delegación General. La cifra no aparece en él y no he encontrado el acuerdo del Sergas que la fija.\n- **Apréndete la cifra tal cual**, porque es la que ha dado el tribunal.",
    fuentes: []
  },
  {
    grupo: "Dudosas: sin explicación ni fuente clara",
    estado: "Dudoso",
    titulo: "Sala de autopsias: refrigeradores para 2 cadáveres cada 100 camas",
    tema: "Fallecidos y autopsias",
    preguntas: ["E84"],
    contenido: "- **Respuesta oficial:** *tener refrigeradores con capacidad para dos cadáveres por cada cien camas* **no** es una característica de la **sala de autopsias**.\n- **Posible explicación:** esa proporción se refiere al **mortuorio** (las cámaras), no a la sala de autopsias. No he encontrado la norma que la fija.",
    fuentes: []
  },
  {
    grupo: "Dudosas: sin explicación ni fuente clara",
    estado: "Dudoso",
    titulo: "Pedido urgente a planta: lo sube el celador de la estafeta",
    tema: "Suministros y almacén",
    preguntas: ["E82"],
    contenido: "- **Respuesta oficial:** un artículo **urgente** pedido por la supervisora lo sube el **celador de la estafeta**, no el de planta ni el del correo interno.\n- No he encontrado una fuente que lo explique; depende de la organización de cada hospital. Apréndete la respuesta oficial.",
    fuentes: []
  },
  {
    grupo: "Dudosas: sin explicación ni fuente clara",
    estado: "Dudoso",
    titulo: "Traslados que no son prestaciones sanitarias obligatorias",
    tema: "Urgencias y ambulancias",
    preguntas: ["E8"],
    contenido: "- **Respuesta oficial:** ni el traslado **por alta**, ni el traslado para **trasplantes**, ni el traslado **por asistencia continuada** son prestaciones sanitarias obligatorias.\n- El transporte sanitario está en la cartera de servicios (RD 1030/2006, anexo VIII), pero no he encontrado la norma que excluye esos tres casos.",
    fuentes: [
      { titulo: "INAP: Transporte sanitario por carretera del Sistema de Salud", url: "https://laadministracionaldia.inap.es/noticia.asp?id=1241167" }
    ]
  },
  {
    grupo: "Dudosas: sin explicación ni fuente clara",
    estado: "Dudoso",
    titulo: "Jaulas y transpaletas: ¿empujar o tirar?",
    tema: "Suministros y almacén",
    preguntas: ["E49", "E50", "E61"],
    contenido: "Tres preguntas del mismo examen que conviene estudiar juntas:\n- **Transpaleta (E49):** la correcta es que *solo se conduce cuando la carga descansa sobre el chasis*. La opción de entrar en el ascensor tirando de ella **no** se dio por buena.\n- **Jaula (E61):** en el ascensor entra **primero la jaula**.\n- **Jaula (E50):** como norma general, las jaulas **se empujan**; para subir una rampa, el celador va **detrás empujando**; del ascensor **sale primero el celador**. La opción **incorrecta** era *para cruzar una puerta de vaivén abierta hay que tirar de la jaula*.\n- No he encontrado un protocolo que lo explique. Memoriza las respuestas oficiales: **la jaula se empuja y entra primero en el ascensor**; **la transpaleta, solo con la carga asentada**.",
    fuentes: []
  }
];
