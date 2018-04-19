import { makeExecutableSchema } from "graphql-tools"
import resolvers from 'server/graphql/resolvers'

const query = `
  type Query {
    users(input: UsersInput): [User]
    user(id: ID!): User
  }
`

const mutation = `
  type Mutation {
    createUser(input: UserCreateInput!): User
    updateUser(input: UserUpdateInput!): User
    deleteUser(input: IdInput!): User
  }
`

const models = `
  type User {
    id: ID

    full_name: String
    email: String
    password: String
    role: String

    createdAt: String
    updatedAt: String
  }
`

const inputs = `
  input IdInput {
    id: ID!
  }

  input UserCreateInput {
    full_name: String
    email: String
    password: String
    role: String

    createdAt: String
    updatedAt: String
  }

  input UserUpdateInput {
    id: ID!
    full_name: String
    email: String
    password: String
    role: String

    createdAt: String
    updatedAt: String
  }

  input UsersInput {
    role: String
  }
`

const typeDefs = query + mutation + models + inputs

export default makeExecutableSchema({ typeDefs, resolvers })
