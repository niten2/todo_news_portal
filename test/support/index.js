import '@babel/polyfill'
import { sync, dropDb } from "src/server/db/sequelize"
import factory from "test/factory"
import matchers from "test/support/matchers"
import execGraphql from "test/support/exec_grapql"

// global.request = request
global.execGraphql = execGraphql
global.matchers = matchers
global.factory = factory

jest.setTimeout(10000)

beforeEach(async () => { await sync() })
afterEach(async () => { await dropDb() })
