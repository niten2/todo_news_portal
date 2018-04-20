import path from 'path'
import express from 'express'
import PrettyError from 'pretty-error'
import initServer from 'server/config/app'
import config from './config'

process.on('unhandledRejection', (reason, p) => {
  console.error('Unhandled Rejection at:', p, 'reason:', reason)
  process.exit(1)
})

// Tell any CSS tooling (such as Material UI) to use all vendor prefixes if the
// user agent is not known.
global.navigator = global.navigator || {}
global.navigator.userAgent = global.navigator.userAgent || 'all'

const app = initServer(express())

if (!module.hot) {
  promise.then(() => {
    app.listen(config.port, () => {
      console.info(`The server is running at http://localhost:${config.port}/`)
    })
  })
}

// Hot Module Replacement
if (module.hot) {
  app.hot = module.hot
  module.hot.accept('./router')
}

export default app
