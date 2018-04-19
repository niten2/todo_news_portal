/* eslint-disable max-len */

if (process.env.BROWSER) {
  throw new Error(
    'Do not import `config.js` from inside the client-side code.',
  );
}

module.exports = {

  // Node.js app
  port: process.env.PORT || 3000,

  // https://expressjs.com/en/guide/behind-proxies.html
  trustProxy: process.env.TRUST_PROXY || 'loopback',

  // API Gateway
  api: {
    // API URL to be used in the client-side code
    clientUrl: process.env.API_CLIENT_URL || '',
    // API URL to be used in the server-side code
    serverUrl:
      process.env.API_SERVER_URL ||
      `http://localhost:${process.env.PORT || 3000}`,
  },

  // Database
  databaseUrl: process.env.DATABASE_URL || 'sqlite:database.sqlite',

  // Web analytics
  analytics: {
    // https://analytics.google.com/
    googleTrackingId: process.env.GOOGLE_TRACKING_ID, // UA-XXXXX-X
  },

  // Authentication
  auth: {
    jwt: { secret: process.env.JWT_SECRET || 'React Starter Kit' },

    // https://developers.facebook.com/
    facebook: {
      id: process.env.FACEBOOK_APP_ID || '186244551745631',
      secret:
        process.env.FACEBOOK_APP_SECRET || 'a970ae3240ab4b9b8aae0f9f0661c6fc',
    },

    // https://cloud.google.com/console/project
    google: {
      id:
        process.env.GOOGLE_CLIENT_ID ||
        '251410730550-ahcg0ou5mgfhl8hlui1urru7jn5s12km.apps.googleusercontent.com',
      secret: process.env.GOOGLE_CLIENT_SECRET || 'Y8yR9yZAhm9jQ8FKAL8QIEcd',
    },

    // https://apps.twitter.com/
    twitter: {
      key: process.env.TWITTER_CONSUMER_KEY || 'Ie20AZvLJI2lQD5Dsgxgjauns',
      secret:
        process.env.TWITTER_CONSUMER_SECRET ||
        'KTZ6cxoKnEakQCeSpZlaUCJWGAlTEBJj0y2EMkUBujA7zWSvaQ',
    },
  },
}

// import * as dotenv from "dotenv"

// const path = process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : ".env"

// dotenv.config({ path })

// interface Settings {
//   readonly env: string
//   readonly name: string
//   readonly host: string
//   readonly port: string
//   readonly dbUrl: string
//   readonly jwt_secret_key: string
//   readonly salt_password: string

//   readonly isEnvDev: boolean
//   readonly isEnvTest: boolean
//   readonly isEnvProd: boolean
// }

// const settings: Settings = {
  // env: process.env.NODE_ENV,
  // name: process.env.APP_NAME,
  // host: process.env.APP_HOST,
  // port: process.env.PORT || "3000",
  // dbUrl: process.env.DB_URL,

  // jwt_secret_key: process.env.JWT_SECRET_KEY,
  // salt_password: process.env.SALT_PASSWORD,

  // isEnvDev: process.env.NODE_ENV == "development",
  // isEnvTest: process.env.NODE_ENV == "test",
  // isEnvProd: process.env.NODE_ENV == "production",
// }

// export default settings
