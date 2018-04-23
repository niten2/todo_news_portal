import React from 'react'
import ReactDOM from 'react-dom/server'
import nodeFetch from 'node-fetch'
import Html from 'components/Html'
import Promise from 'bluebird'
// import createFetch from 'createFetch'
import config from 'config'
import router from 'src/router'

import schema from 'server/graphql/schema'
import { graphql } from 'graphql'
import App from 'components/App'

// eslint-disable-line import/no-unresolved
import chunks from './chunk-manifest.json'


// import path from 'path'
// import Promise from 'bluebird'
// import express from 'express'
// import cookieParser from 'cookie-parser'
// import bodyParser from 'body-parser'
// import expressJwt, { UnauthorizedError as Jwt401Error } from 'express-jwt'
// import { graphql } from 'graphql'
// import expressGraphQL from 'express-graphql'
// import jwt from 'jsonwebtoken'
// import nodeFetch from 'node-fetch'
// import React from 'react'
// import ReactDOM from 'react-dom/server'
import { getDataFromTree } from 'react-apollo'

// import PrettyError from 'pretty-error'
import createApolloClient from 'core/createApolloClient'

// import App from './components/App'
// import Html from './components/Html'
// import { ErrorPageWithoutStyle } from './routes/error/ErrorPage'
// import errorPageStyle from './routes/error/ErrorPage.css'
import createFetch from 'src/createFetch'
// import passport from './passport'
// import router from './router'

// import models from './data/models'
// import schema from './data/schema'
// import schema from './data/schema'
// import schema from 'src/server/graphql/schema'

// import assets from './asset-manifest.json' // eslint-disable-line import/no-unresolved
// import chunks from './chunk-manifest.json' // eslint-disable-line import/no-unresolved
// import configureStore from './store/configureStore'
// import { setRuntimeVariable } from './actions/runtime'
// import config from './config'





export default {

  index: async (req, res, next) => {

    try {
      const css = new Set()

      // Enables critical path CSS rendering
      // https://github.com/kriasoft/isomorphic-style-loader
      const insertCss = (...styles) => {
        // eslint-disable-next-line no-underscore-dangle
        styles.forEach(style => css.add(style._getCss()))
      }

      const apolloClient = createApolloClient({
        schema,
        rootValue: { request: req },
      })

      // Universal HTTP client
      const fetch = createFetch(nodeFetch, {
        baseUrl: config.api.serverUrl,
        cookie: req.headers.cookie,
        apolloClient,
        schema,
        graphql,
      })

      // const initialState = {
      //   user: req.user || null,
      // }

      // console.log(111111111111111111)
      // const store = configureStore(initialState, {
      //   cookie: req.headers.cookie,
      //   fetch,
      //   // I should not use `history` on server.. but how I do redirection? follow universal-router
      //   history: null,
      // })

      // store.dispatch(
      //   setRuntimeVariable({
      //     name: 'initialNow',
      //     value: Date.now(),
      //   }),
      // )

      // console.log(apolloClient)

      // Global (context) variables that can be easily accessed from any React component
      // https://facebook.github.io/react/docs/context.html
      const context = {
        insertCss,
        fetch,
        // The twins below are wild, be careful!
        pathname: req.path,
        query: req.query,

        // You can access redux through react-redux connect
        // store,
        // storeSubscription: null,

        // Apollo Client for use with react-apollo
        client: apolloClient,
      }

      const route = await router.resolve(context)

      if (route.redirect) {
        res.redirect(route.status || 302, route.redirect)
        return
      }

      const data = { ...route }
      // const rootComponent = <App context={context}>{route.component}</App>
      const rootComponent = <App context={context}>{route.component}</App>

      // console.log(2222222222222)

      await getDataFromTree(rootComponent)

      // NOTE this is here because of Apollo redux APOLLO_QUERY_STOP action
      await Promise.delay(0)

      // console.log(rootComponent)

      data.children = await ReactDOM.renderToString(rootComponent)
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

      // Furthermore invoked actions will be ignored, client will not receive them!
      if (__DEV__) {
        // eslint-disable-next-line no-console
        console.log('Serializing store...')
      }

      // console.log(333333333333)

      // console.log(43444444)

      console.log(context.client.extract())

      data.app = {
        apiUrl: config.api.clientUrl,
        apolloState: context.client.extract(),
        // state: context.store.getState(),
      }

      // console.log(43444444)
      const html = ReactDOM.renderToStaticMarkup(<Html {...data} />)
      // console.log(43444444)

      res.status(route.status || 200)
      res.send(`<!doctype html>${html}`)
    } catch (err) {
      next(err)
    }

  }
}
