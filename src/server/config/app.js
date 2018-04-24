import config from 'src/config'
import initRoutes from "server/config/routes"

export default async (app) => {
  initRoutes(app)

  // If you are using proxy from external machine, you can set TRUST_PROXY env
  // Default is to trust proxy headers only from loopback interface.
  app.set('trust proxy', config.trustProxy)

  return app
}

// TODO refactoring
// export const listen = async (app) => {
//   try {
//     await connectDb()
//     await initApp(app)
//     await app.listen(settings.port)
//   } catch (err) {
//     logger.error(err.message)
//   }
// }
