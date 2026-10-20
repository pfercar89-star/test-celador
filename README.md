# Test Celador Sergas

App web sencilla para practicar tests de la oposición de celador del Sergas.

## Archivos

| Archivo | Para qué sirve | ¿Lo toco? |
|---|---|---|
| `preguntas.js` | Las preguntas | **Sí, aquí añades las tuyas** |
| `temario.js` | El texto de los temas (en Markdown) | Sí, si quieres corregir o ampliar un tema |
| `index.html` | La estructura de la página | No hace falta |
| `estilos.css` | Colores y tamaños | No hace falta |
| `app.js` | La lógica (test, fallos, estadísticas) | No hace falta |

## Preguntas incluidas

1.624 preguntas repartidas en 19 temas, en el orden del temario:

- 1.504 preguntas de práctica.
- 120 preguntas del examen oficial de celador/a del Sergas (OPE 2022, examen de 2024), traducidas al castellano desde el original en gallego: 11 de la parte común y 109 de la específica. Llevan el campo `origen` y van al final de su tema. Las respuestas son las de la plantilla definitiva. No están las anuladas (C9 y E53). Los PDF originales están en la carpeta `examenes/`.

En `preguntas.js` cada tema empieza con una cabecera en mayúsculas. Para añadir una pregunta a un tema, pégala dentro de su bloque. El selector de la app muestra automáticamente cualquier tema nuevo que escribas.

## Modos de práctica

- **Temario**: los 18 temas resumidos (10 de la parte específica y 8 de la común), agrupados por bloque. Al tocar un tema se abre para leerlo, con el apartado "Trampas típicas" destacado en rojo. Al final hay un botón para hacer el test de ese tema en modo estudio. El campo `temaTest` de cada tema en `temario.js` dice qué preguntas usa ese test.
- **Modo estudio**: 10 preguntas al azar del tema elegido. Te corrige cada respuesta al momento: verde si aciertas, rojo si fallas, y la explicación en un cuadro beige. "Estudiar mis fallos" usa este modo con las preguntas que has fallado o dejado en blanco.
- **Modo examen**: eliges 10, 25, 50 o 100 preguntas. No corrige hasta el final. Puedes dejar preguntas en blanco, volver atrás y cambiar la respuesta. Al terminar te da la nota con la puntuación del Sergas (+0,50 por acierto, −0,125 por fallo, 0 en blanco), el tiempo que has tardado y la lista de preguntas falladas o en blanco con su explicación.

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

En el propio navegador. Si cambias de navegador o de móvil, empiezas de cero. Si borras los datos del navegador, también se borra.
