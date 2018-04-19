import config from '../../config'
import initRoutes from "./routes"

// import settings from "config/settings"
// import initMiddlewares from "../middlewares"
// import { connectDb } from "config/initialize/mongoose"
// import logger from "app/services/logger"

export default async (app) => {
  // await initMiddlewares(app)
  initRoutes(app)

  app.set('trust proxy', config.trustProxy)

  // logger.info(`App ${settings.name}, running on port ${settings.port}, NODE_ENV ${settings.env}`)

  // If you are using proxy from external machine, you can set TRUST_PROXY env
  // Default is to trust proxy headers only from loopback interface.
  console.log(1111)
}

// export const listen = async (app: Express) => {
//   try {
//     await connectDb()
//     await initApp(app)
//     await app.listen(settings.port)
//   } catch (err) {
//     logger.error(err.message)
//   }
// }
