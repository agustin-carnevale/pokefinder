
# Poke Finder App

En este proyecto se encuentran tanto el client (frontend), como el server (backend) de la app.

## Levantar App en Modo Dev

Para poder ejecutar tanto la applicacion cliente React como la API Express/Node, simultaneamente en modo dev, simplemente dentro del directorio principal del proyecto debes:<br />

Posicionarte en el directorio "/server"
### `cd server`

y luego ejecutar
### `npm run dev`

Esto levantara ambos.<br />
Luego puedes ir a [http://localhost:3000](http://localhost:3000) para ver la app corriendo en el Browser.

## Tema Tests

Se agregaron tests del lado de la API, que basicamente testean el único endpoint disponible.
Se utilizó jest como framework de testing y la librería supertest que permite realizar requests de manera muy sencilla.<br />

Para correr los test debes pararte en el directorio "/server" y ejectuar:

### `npm run test`

## Algunas consideraciones sobre la API

Se decidió utilizar Typescript para la API ya que aporta mayor robustes al código, pudiendo chequear tipos, crear interfaces y ordenar mejor el código, asi como también resolver bugs en tiempo de desarrollo o build y no de ejecución.<br /><br />

Además se implementaron varios middlewares, que permiten hacer validaciones y error handling de una manera más ordenada y clara. Y se implementaron varios tipos de errores de una manera normalizada (array de errores) para que sea más sencillo y claro a la hora de recibir una respuesta de la API desde el frontend.
Por supuesto, todos estos extras no se aprecian por completo en los pocos features que presenta este ejercicio, pero dan una muy buena base/estructura si se quisiera seguir escalando la app y agreando funcionalidades.

