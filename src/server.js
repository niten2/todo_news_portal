import path from 'path';
import express from 'express';
// import nodeFetch from 'node-fetch';
// import React from 'react';
// import ReactDOM from 'react-dom/server';
import PrettyError from 'pretty-error';

// import App from './components/App';
// import Html from './components/Html';
//

import initServer from 'server/config/app'

// import { ErrorPageWithoutStyle } from 'routes/error/ErrorPage';
// import errorPageStyle from './routes/error/ErrorPage.css';
// import createFetch from './createFetch';
// import router from './router';
// import chunks from './chunk-manifest.json'; // eslint-disable-line import/no-unresolved
import config from './config';

// import expressJwt, { UnauthorizedError as Jwt401Error } from 'express-jwt';
// import { graphql } from 'graphql';
// import expressGraphQL from 'express-graphql';
// import jwt from 'jsonwebtoken';
// import passport from './passport';
// import models from './data/models';
// import schema from './data/schema';

// import assets from './asset-manifest.json'; // eslint-disable-line import/no-unresolved

process.on('unhandledRejection', (reason, p) => {
  console.error('Unhandled Rejection at:', p, 'reason:', reason);

  // send entire app down. Process manager will restart it
  process.exit(1);
});

// Tell any CSS tooling (such as Material UI) to use all vendor prefixes if the
// user agent is not known.
global.navigator = global.navigator || {};
global.navigator.userAgent = global.navigator.userAgent || 'all';

const app = express()

initServer(app)


if (!module.hot) {
  promise.then(() => {
    app.listen(config.port, () => {
      console.info(`The server is running at http://localhost:${config.port}/`);
    });
  });
}

// Hot Module Replacement
if (module.hot) {
  app.hot = module.hot;
  module.hot.accept('./router');
}


// app.get("/api2", (req, res, next) => {
//   console.log(2222)

//   res.json({
//     // name: settings.name,
//     name: "dfsdf",
//     current_version: "/v1",
//   })
// })


//
// Authentication
// -----------------------------------------------------------------------------

//
// Register server-side rendering middleware
// -----------------------------------------------------------------------------
// app.get('*', async (req, res, next) => {
//   try {
//     const css = new Set();

//     // Enables critical path CSS rendering
//     // https://github.com/kriasoft/isomorphic-style-loader
//     const insertCss = (...styles) => {
//       // eslint-disable-next-line no-underscore-dangle
//       styles.forEach(style => css.add(style._getCss()));
//     };

//     // Universal HTTP client
//     const fetch = createFetch(nodeFetch, {
//       baseUrl: config.api.serverUrl,
//       cookie: req.headers.cookie,
//       // schema,
//       // graphql,
//     });

//     // Global (context) variables that can be easily accessed from any React component
//     // https://facebook.github.io/react/docs/context.html
//     const context = {
//       insertCss,
//       fetch,
//       // The twins below are wild, be careful!
//       pathname: req.path,
//       query: req.query,
//     };

//     const route = await router.resolve(context);

//     if (route.redirect) {
//       res.redirect(route.status || 302, route.redirect);
//       return;
//     }

//     const data = { ...route };

//     data.children = ReactDOM.renderToString(
//       <App context={context}>{route.component}</App>,
//     );

//     data.styles = [{ id: 'css', cssText: [...css].join('') }];

//     const scripts = new Set();

//     const addChunk = chunk => {
//       if (chunks[chunk]) {
//         chunks[chunk].forEach(asset => scripts.add(asset));
//       } else if (__DEV__) {
//         throw new Error(`Chunk with name '${chunk}' cannot be found`);
//       }
//     };

//     addChunk('client');

//     if (route.chunk) addChunk(route.chunk);
//     if (route.chunks) route.chunks.forEach(addChunk);

//     data.scripts = Array.from(scripts);
//     data.app = {
//       apiUrl: config.api.clientUrl,
//     };

//     const html = ReactDOM.renderToStaticMarkup(<Html {...data} />);
//     res.status(route.status || 200);
//     res.send(`<!doctype html>${html}`);
//   } catch (err) {
//     next(err);
//   }
// })


// // eslint-disable-next-line no-unused-vars
// app.use((err, req, res, next) => {
//   console.error(pe.render(err));

//   const html = ReactDOM.renderToStaticMarkup(
//     <Html
//       title="Internal Server Error"
//       description={err.message}
//       styles={[{ id: 'css', cssText: errorPageStyle._getCss() }]} // eslint-disable-line no-underscore-dangle
//     >
//       {ReactDOM.renderToString(<ErrorPageWithoutStyle error={err} />)}
//     </Html>,
//   );

//   res.status(err.status || 500);
//   res.send(`<!doctype html>${html}`);
// });

// Launch the server
// const promise = models.sync().catch(err => console.error(err.stack))


export default app;
