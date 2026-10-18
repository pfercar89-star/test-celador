# Test Celador Sergas

App web sencilla para practicar tests de la oposición de celador del Sergas.

## Archivos

| Archivo | Para qué sirve | ¿Lo toco? |
|---|---|---|
| `preguntas.js` | Las preguntas | **Sí, aquí añades las tuyas** |
| `index.html` | La estructura de la página | No hace falta |
| `estilos.css` | Colores y tamaños | No hace falta |
| `app.js` | La lógica (test, fallos, estadísticas) | No hace falta |

## Cómo abrirla

Descarga la carpeta y haz doble clic en `index.html`. Se abre en el navegador; no hace falta instalar nada ni tener internet.

## Cómo añadir una pregunta

Abre `preguntas.js` con un editor de texto, copia un bloque `{ ... },` entero, pégalo antes del `];` final y cambia los textos:

```js
  {
    tema: "Estatuto Marco",
    enunciado: "Texto de la pregunta",
    opciones: ["Opción A", "Opción B", "Opción C", "Opción D"],
    correcta: "B",
    explicacion: "Por qué la B es la buena."
  },
```

Guarda y recarga la página. Si algo está mal escrito, la app muestra un aviso rojo diciendo qué pregunta revisar.

## Dónde se guarda tu progreso

En el propio navegador. Si cambias de navegador o de móvil, empiezas de cero. Si borras los datos del navegador, también se borra.
