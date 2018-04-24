import dotenv from "dotenv"

const path = process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : ".env"

dotenv.config({ path })

if (process.env.BROWSER) {
  throw new Error('Do not import `config.js` from inside the client-side code.')
}

export default {

  port: process.env.PORT || 3000,
  name: process.env.NAME,
  env: process.env.NODE_ENV,

  // NOTE https://expressjs.com/en/guide/behind-proxies.html
  trustProxy: process.env.TRUST_PROXY || 'loopback',

  databaseUrl: process.env.DATABASE_URL || 'sqlite:database.sqlite',

  isEnvDev: process.env.NODE_ENV === "development",
  isEnvTest: process.env.NODE_ENV === "test",
  isEnvProd: process.env.NODE_ENV === "production",

  // NOTE API Gateway
  api: {
    clientUrl: process.env.API_CLIENT_URL || '',
    serverUrl: process.env.API_SERVER_URL || `http://localhost:${process.env.PORT || 3000}`,
  },

  // // Web analytics
  analytics: {
    // https://analytics.google.com/
    googleTrackingId: process.env.GOOGLE_TRACKING_ID, // UA-XXXXX-X
  },

  // TODO clear code
  // // Authentication
  // auth: {
  //   jwt: { secret: process.env.JWT_SECRET || 'React Starter Kit' },

  //   // https://developers.facebook.com/
  //   facebook: {
  //     id: process.env.FACEBOOK_APP_ID || '186244551745631',
  //     secret:
  //       process.env.FACEBOOK_APP_SECRET || 'a970ae3240ab4b9b8aae0f9f0661c6fc',
  //   },

  //   // https://cloud.google.com/console/project
  //   google: {
  //     id:
  //       process.env.GOOGLE_CLIENT_ID ||
  //       '251410730550-ahcg0ou5mgfhl8hlui1urru7jn5s12km.apps.googleusercontent.com',
  //     secret: process.env.GOOGLE_CLIENT_SECRET || 'Y8yR9yZAhm9jQ8FKAL8QIEcd',
  //   },

  //   // https://apps.twitter.com/
  //   twitter: {
  //     key: process.env.TWITTER_CONSUMER_KEY || 'Ie20AZvLJI2lQD5Dsgxgjauns',
  //     secret:
  //       process.env.TWITTER_CONSUMER_SECRET ||
  //       'KTZ6cxoKnEakQCeSpZlaUCJWGAlTEBJj0y2EMkUBujA7zWSvaQ',
  //   },
  // },
}
