import fs from 'fs'
import url from 'url'
import path from 'path'
import http from 'http'
import util from 'util'
import { renderToStream } from 'hyperapp-render'
import { state, actions, view } from './html'

const stat = util.promisify(fs.stat)
const notFound = ['ENOENT', 'ENAMETOOLONG', 'ENOTDIR']
const mimeTypes = new Map([
  ['.js', 'application/javascript'],
  ['.json', 'application/json'],
  ['.html', 'text/html'],
  ['.css', 'text/css'],
  ['.png', 'image/png'],
  ['.jpg', 'image/jpeg'],
  ['.gif', 'image/gif'],
  ['.svg', 'image/svg+xml'],
])

async function app(request, response) {
  try {
    const location = url.parse(request.url)
    const pathname = decodeURIComponent(location.pathname)

    // Serve static files from "./public"
    if (request.method === 'GET' || request.method === 'HEAD') {
      const servePath = path.resolve(__dirname, 'public')
      let filePath = path.resolve(path.join(servePath, pathname))
      if (filePath.startsWith(servePath)) {
        try {
          let stats = await stat(filePath)
          if (stats.isDirectory()) {
            filePath = path.join(filePath, 'index.html')
            stats = await stat(filePath)
          }
          const extension = path.extname(filePath)
          const contentType = mimeTypes.get(extension) || 'application/octet-stream'
          response.setHeader('Content-Type', contentType)
          response.setHeader('Content-Length', stats.size)
          response.setHeader('Last-Modified', stats.mtime.toUTCString())
          response.statusCode = 200
          await new Promise((resolve, reject) =>
            fs
              .createReadStream(filePath)
              .on('error', reject)
              .on('end', resolve)
              .pipe(response),
          )
          return
        } catch (error) {
          if (!notFound.includes(error.code)) {
            throw error
          }
        }
      }
    }

    // Server-side rendering
    response.setHeader('Content-Type', 'text/html')
    response.statusCode = pathname === '/' ? 200 : 404
    await new Promise((resolve, reject) =>
      renderToStream(view, state, actions)
        .on('error', reject)
        .on('end', resolve)
        .pipe(response),
    )
  } catch (error) {
    // Error handling
    if (!response.headersSent) {
      response.removeHeader('Content-Length')
      response.removeHeader('Last-Modified')
      response.setHeader('Content-Type', 'text/plain')
      response.statusCode = 500
      response.end(module.hot ? error.stack : 'Internal Server Error')
    }
  }
}

// Enable hot module replacement
// https://webpack.js.org/concepts/hot-module-replacement/
if (module.hot) {
  module.hot.accept('./html')
} else {
  // Launch the server
  const server = http.createServer(app)
  server.listen(process.env.PORT, () => {
    const { port } = server.address()
    process.stdout.write(`The server is running at http://localhost:${port}/\n`)
  })
}

export default app
