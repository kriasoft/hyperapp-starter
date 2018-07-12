import 'source-map-support/register'
import path from 'path'
import Koa from 'koa'
import serve from 'koa-static'
import { renderToStream } from '@hyperapp/render'
import { state, actions, view } from './html'

const app = new Koa()

// Serve static files from "./public"
app.use(serve(path.resolve(__dirname, 'public')))

// Register server-side rendering middleware
app.use((ctx) => {
  ctx.status = ctx.path === '/' ? 200 : 404
  ctx.type = 'html'
  ctx.body = renderToStream(view, state, actions)
})

// Enable hot module replacement
// https://webpack.js.org/concepts/hot-module-replacement/
if (module.hot) {
  module.hot.accept('./html')
} else {
  // Launch the server
  const server = app.listen(process.env.PORT, () => {
    const { port } = server.address()
    process.stdout.write(`The server is running at http://localhost:${port}/\n`)
  })
}

export default app
