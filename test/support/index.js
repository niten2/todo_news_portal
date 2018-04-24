import '@babel/polyfill'
import { } from "jest"
import { sync, dropDb } from "src/server/db/sequelize"

import factory from "test/factory"
import matchers from "test/support/matchers"
import execGraphql from "test/support/exec_grapql"
// import * as express from 'express'
// import { initApp } from "config/app"
// import request from "support/request"

// global.app = express()

// global.request = request
global.execGraphql = execGraphql
global.matchers = matchers
global.factory = factory

jest.setTimeout(10000)

// beforeAll(async () => { await connectDb() })
// beforeAll(async () => { await initApp(app) })
beforeAll(async () => { await sync() })
afterEach(async () => { await dropDb() })

// console.log(11111)
