import ReactDOM from 'react-dom/server';
import ReactConroller from "../controllers/react"
import MainConroller from "../controllers/main"

// const TestConroller = require("../controllers/test.ts")

// import { Express, Response, Request, NextFunction } from "express"
// import { graphqlExpress, graphiqlExpress } from "apollo-server-express"
// import graphqOptions from 'app/graphql/config'
// import settings from "config/settings"
// console.log(ReactConroller)

// console.log(111)
// console.log(222, TestConroller.index)
// console.log(333, TestConroller)
// console.log(111)

// export default (app: Express) => {
export default (app) => {
  // app.get("/", (req: Request, res: Response, next: NextFunction): void => {

  app.get("/api", MainConroller.index)

  // app.get("/api", (req, res, next) => {
  //   res.json({
  //     // name: settings.name,
  //     name: "dfsdf",
  //     current_version: "/v1",
  //   })
  // })

  app.get('*', ReactConroller.index)



  // app.use(
  //   expressJwt({
  //     secret: config.auth.jwt.secret,
  //     credentialsRequired: false,
  //     getToken: req => req.cookies.id_token,
  //   }),
  // );

  // Error handler for express-jwt
  // app.use((err, req, res, next) => {
  //   // eslint-disable-line no-unused-vars
  //   if (err instanceof Jwt401Error) {
  //     console.error('[express-jwt-error]', req.cookies.id_token);
  //     // `clearCookie`, otherwise user can't use web-app until cookie expires
  //     res.clearCookie('id_token');
  //   }
  //   next(err);
  // });

  // app.use(passport.initialize());

  // app.get(
  //   '/login/facebook',
  //   passport.authenticate('facebook', {
  //     scope: ['email', 'user_location'],
  //     session: false,
  //   }),
  // );
  // app.get(
  //   '/login/facebook/return',
  //   passport.authenticate('facebook', {
  //     failureRedirect: '/login',
  //     session: false,
  //   }),
  //   (req, res) => {
  //     const expiresIn = 60 * 60 * 24 * 180; // 180 days
  //     const token = jwt.sign(req.user, config.auth.jwt.secret, { expiresIn });
  //     res.cookie('id_token', token, { maxAge: 1000 * expiresIn, httpOnly: true });
  //     res.redirect('/');
  //   },
  // );

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
  // );



  // app.use("/v1", graphqlExpress(graphqOptions))
  // app.use("/v1", graphiqlExpress({ endpointURL: "/graphql" }))
}
