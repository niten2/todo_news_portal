import ReactDOM from 'react-dom/server'
import expressGraphQL from 'express-graphql'
import ReactConroller from "src/server/controllers/react"
import MainConroller from "src/server/controllers/main"
import schema from 'src/server/graphql/schema'

export default (app) => {

  app.get("/api", MainConroller.index)

  app.get('*', ReactConroller.index)

  // Register API middleware
  // https://github.com/graphql/express-graphql#options
  const graphqlMiddleware = expressGraphQL(req => ({
    schema,
    graphiql: __DEV__,
    rootValue: { request: req },
    pretty: __DEV__,
  }))

  app.use('/graphql', graphqlMiddleware)


  // TODO clear
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

}
