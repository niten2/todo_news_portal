import React from 'react'
import ReactDOM from 'react-dom/server'
import nodeFetch from 'node-fetch'
import Html from 'components/Html'
import createFetch from 'createFetch'
import config from 'config'
import router from 'router'

import schema from 'server/graphql/schema'
import { graphql } from 'graphql'
import App from 'components/App'

// eslint-disable-line import/no-unresolved
import chunks from './chunk-manifest.json'

export default {

  index: async (req, res, next) => {
    console.log(1111111111111)

    try {
      const css = new Set()

      // Enables critical path CSS rendering
      // https://github.com/kriasoft/isomorphic-style-loader
      const insertCss = (...styles) => {
        // eslint-disable-next-line no-underscore-dangle
        styles.forEach(style => css.add(style._getCss()))
      }

      // Universal HTTP client
      const fetch = createFetch(nodeFetch, {
        baseUrl: config.api.serverUrl,
        cookie: req.headers.cookie,
        schema,
        graphql,
      })

      // Global (context) variables that can be easily accessed from any React component
      // https://facebook.github.io/react/docs/context.html
      const context = {
        insertCss,
        fetch,
        // The twins below are wild, be careful!
        pathname: req.path,
        query: req.query,
      }

      console.log(222222222222)

      const route = await router.resolve(context)

      if (route.redirect) {
        res.redirect(route.status || 302, route.redirect)
        return
      }

      const data = { ...route }

      console.log(8888, context)

      data.children = ReactDOM.renderToString(
        <App context={context}>{route.component}</App>,
      )

      console.log(33333)

      data.styles = [{ id: 'css', cssText: [...css].join('') }]

      const scripts = new Set()

      const addChunk = chunk => {
        if (chunks[chunk]) {
          chunks[chunk].forEach(asset => scripts.add(asset))
        } else if (__DEV__) {
          throw new Error(`Chunk with name '${chunk}' cannot be found`)
        }
      }

      addChunk('client')

      if (route.chunk) addChunk(route.chunk)
      if (route.chunks) route.chunks.forEach(addChunk)

      data.scripts = Array.from(scripts)

      // console.log(11111111, config.api.clientUrl)

      data.app = {
        apiUrl: config.api.clientUrl,
      }

      const html = ReactDOM.renderToStaticMarkup(<Html {...data} />)

      res.status(route.status || 200)
      res.send(`<!doctype html>${html}`)
    } catch (err) {
      next(err)
    }
  }

}
