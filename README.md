# Test Celador Sergas

App web sencilla para practicar tests de la oposición de celador del Sergas.

## Archivos

| Archivo | Para qué sirve | ¿Lo toco? |
|---|---|---|
| `preguntas.js` | Las preguntas | **Sí, aquí añades las tuyas** |
| `temario.js` | El texto de los temas (en Markdown) | Sí, si quieres corregir o ampliar un tema |
| `conflictivos.js` | Los puntos conflictivos (en Markdown, con fuentes) | Sí, para añadir o actualizar puntos |
| `index.html` | La estructura de la página | No hace falta |
| `estilos.css` | Colores y tamaños | No hace falta |
| `app.js` | La lógica (test, repaso, progreso, copia de seguridad) | No hace falta |

## Preguntas incluidas

1.700 preguntas repartidas en 19 temas, en el orden del temario:

- 1.504 preguntas de práctica.
- 120 preguntas del examen oficial de celador/a del Sergas (OPE 2022, examen de 2024), traducidas al castellano desde el original en gallego: 11 de la parte común y 109 de la específica. Llevan el campo `origen` y van al final de su tema. Las respuestas son las de la plantilla definitiva. No están las anuladas (C9 y E53). Los PDF originales están en la carpeta `examenes/`.
- 76 preguntas de los exámenes oficiales de celador/a del Servicio Andaluz de Salud (SAS) de 2025: 38 del examen de acceso libre (abril de 2025) y 38 de la prueba aplazada. Las respuestas son las de las plantillas definitivas. Se han quitado las anuladas (24 y 40 del examen de abril) y las preguntas de normas y planes propios de Andalucía, que no valen para el Sergas. Su origen dice "Examen SAS 2025" y el número de pregunta.

Cinco preguntas del tema "Selección y provisión de plazas" dependen de la convocatoria 2025 (plazas, turnos, formato del examen y fecha). Llevan el origen "Convocatoria 2025 (dato que cambiará)" y hay que revisarlas cuando salga la convocatoria siguiente.

En `preguntas.js` cada tema empieza con una cabecera en mayúsculas. Para añadir una pregunta a un tema, pégala dentro de su bloque. El selector de la app muestra automáticamente cualquier tema nuevo que escribas.

## Modos de práctica

- **Puntos conflictivos**: 22 puntos revisados en octubre de 2026. Muestran dónde chocan el examen oficial, el temario y las preguntas, qué respuestas oficiales son raras y qué normas han cambiado. Cada punto lleva una etiqueta (Comprobado, Probable, Dudoso o Norma cambiada), sus fuentes y un botón para practicar las preguntas del examen relacionadas.
- **Temario**: los 18 temas resumidos (10 de la parte específica y 8 de la común), agrupados por bloque. Al tocar un tema se abre para leerlo, con el apartado "Trampas típicas" destacado en rojo. Al final hay un botón para hacer el test de ese tema en modo estudio. El campo `temaTest` de cada tema en `temario.js` dice qué preguntas usa ese test.
- **Modo estudio**: 10 preguntas del tema elegido, primero las que aún no has visto nunca. Te corrige cada respuesta al momento: verde si aciertas, rojo si fallas, y la explicación en un cuadro beige.
- **Repaso de hoy**: las preguntas que has fallado o dejado en blanco vuelven a salir hasta que las domines. Cada vez que aciertas una, tarda más en volver: 1, 3, 7, 15 y 30 días. Si la vuelves a fallar, empieza de nuevo.
- **Modo examen**: eliges 10, 25, 50 o 100 preguntas. No corrige hasta el final. Puedes dejar preguntas en blanco, volver atrás y cambiar la respuesta. Al terminar te da la nota con la puntuación del Sergas (+0,50 por acierto, −0,125 por fallo, 0 en blanco), el tiempo que has tardado y la lista de preguntas falladas o en blanco con su explicación.

- **Mi progreso**: cuántas preguntas has visto, cuántos temas has leído (en el temario hay un botón "Marcar como leído"), tu porcentaje de aciertos, tus 3 temas más flojos (con un botón para practicarlos) y una tabla por tema.

## Cómo abrirla

Descarga la carpeta y haz doble clic en `index.html`. Se abre en el navegador; no hace falta instalar nada ni tener internet.

## Cómo añadir una pregunta

Abre `preguntas.js` con un editor de texto, copia un bloque `{ ... },` entero, pégalo junto a las demás preguntas de su tema y cambia los textos:

```js
  {
    tema: "Estatuto Marco",
    enunciado: "Texto de la pregunta",
    opciones: ["Opción A", "Opción B", "Opción C", "Opción D"],
    correcta: "B",
    explicacion: "Por qué la B es la buena.",
    origen: "Opcional: de dónde sale la pregunta"
  },
```

Guarda y recarga la página. Si algo está mal escrito, la app muestra un aviso rojo diciendo qué pregunta revisar.

## Dónde se guarda tu progreso

En el propio navegador. Si borras los datos del navegador o cambias de móvil, se pierde, salvo que tengas una copia de seguridad.

En "Mi progreso y copia de seguridad":

- **Guardar copia de mi progreso** descarga un archivo `progreso-celador-AAAA-MM-DD.json`. En el iPhone se guarda en la app Archivos, en Descargas.
- **Recuperar una copia** te deja elegir ese archivo y devuelve el progreso tal como estaba.

Si llevas más de 14 días sin guardar una copia, la pantalla de inicio te lo recuerda.

## Revisión mensual

El día 1 de cada mes se revisa si hay cambios: convocatoria nueva, normas modificadas, exámenes oficiales nuevos publicados. Nada se cambia en la app sin preguntar antes.
