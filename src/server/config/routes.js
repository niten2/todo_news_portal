import ReactDOM from 'react-dom/server'
import ReactConroller from "../controllers/react"
import MainConroller from "../controllers/main"

import schema from 'server/graphql/schema'

// import { Express, Response, Request, NextFunction } from "express"
// import { graphqlExpress, graphiqlExpress } from "apollo-server-express"
// import graphqOptions from 'server/graphql/config'
// import settings from "config/settings"


import expressGraphQL from 'express-graphql'

export default (app) => {

  app.get("/api", MainConroller.index)
  // app.use("/api/v1", graphqlExpress(graphqOptions))
  // app.use("/api/v1", graphiqlExpress({ endpointURL: "/graphql" }))

  app.get('*', ReactConroller.index)


  //
  // Register API middleware
  // -----------------------------------------------------------------------------
  // https://github.com/graphql/express-graphql#options
  const graphqlMiddleware = expressGraphQL(req => ({
    schema,
    graphiql: __DEV__,
    rootValue: { request: req },
    pretty: __DEV__,
  }));

  app.use('/graphql', graphqlMiddleware);




  // app.use(
  //   expressJwt({
  //     secret: config.auth.jwt.secret,
  //     credentialsRequired: false,
  //     getToken: req => req.cookies.id_token,
  //   }),
  // )

  // Error handler for express-jwt
  // app.use((err, req, res, next) => {
  //   // eslint-disable-line no-unused-vars
  //   if (err instanceof Jwt401Error) {
  //     console.error('[express-jwt-error]', req.cookies.id_token)
  //     // `clearCookie`, otherwise user can't use web-app until cookie expires
  //     res.clearCookie('id_token')
  //   }
  //   next(err)
  // })

  // app.use(passport.initialize())

  // app.get(
  //   '/login/facebook',
  //   passport.authenticate('facebook', {
  //     scope: ['email', 'user_location'],
  //     session: false,
  //   }),
  // )
  // app.get(
  //   '/login/facebook/return',
  //   passport.authenticate('facebook', {
  //     failureRedirect: '/login',
  //     session: false,
  //   }),
  //   (req, res) => {
  //     const expiresIn = 60 * 60 * 24 * 180 // 180 days
  //     const token = jwt.sign(req.user, config.auth.jwt.secret, { expiresIn })
  //     res.cookie('id_token', token, { maxAge: 1000 * expiresIn, httpOnly: true })
  //     res.redirect('/')
  //   },
  // )

  //
  // Register API middleware
  // -----------------------------------------------------------------------------
  // app.use(
  //   '/graphql',
  //   expressGraphQL(req => ({
  //     schema,
  //     graphiql: __DEV__,
  //     rootValue: { request: req },
  //     pretty: __DEV__,
  //   })),
  // )



  // app.use("/v1", graphqlExpress(graphqOptions))
  // app.use("/v1", graphiqlExpress({ endpointURL: "/graphql" }))

}
