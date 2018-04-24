// @flow
import { graphql } from 'graphql'
import schema from 'src/server/graphql/schema'
// import { createJwt } from "app/services/jwt_token"

export default async (options: object = {}) => {
  const { query, variableValues, rootValue, user, unauth } = options
  // const context = await buildContext(user, unauth)
  const context = {}

  let res = await graphql(schema, query, rootValue || {}, context, variableValues || {})

  return res
}

// const buildContext = async (user: any, unauth: boolean) => {
//   let token = null

//   if (!unauth && !user) {
//     const user = await factory.create("user")
//     token = await createJwt(user)
//   }

//   if (user) {
//     token = await createJwt(user)
//   }

//   return {
//     token
//   }
// }
