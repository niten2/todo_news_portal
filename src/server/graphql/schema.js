import { makeExecutableSchema } from "graphql-tools"
import resolvers from 'src/server/graphql/resolvers'

const query = `
  type Query {
    users(input: UsersInput): [User]
    user(id: ID!): User

    articles: [Article]
    article(id: ID!): Article
  }
`

const mutation = `
  type Mutation {
    createUser(input: CreateInputUser!): User
    updateUser(input: UpdateInputUser!): User
    deleteUser(input: InputId!): User

    createArticle(input: CreateInputArticle!): Article
    updateArticle(input: UpdateInputArticle!): Article
    deleteArticle(input: InputId!): Article
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

  type Article {
    id: ID

    title: String
    content: String

    createdAt: String
    updatedAt: String
  }

`

const inputs = `
  input InputId {
    id: ID!
  }

  input CreateInputUser {
    full_name: String
    email: String
    password: String
    role: String

    createdAt: String
    updatedAt: String
  }

  input UpdateInputUser {
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


  input CreateInputArticle {
    title: String
    content: String
  }

  input UpdateInputArticle {
    id: ID!

    title: String
    content: String
  }
`

const typeDefs = query + mutation + models + inputs

export default makeExecutableSchema({
  typeDefs,
  resolvers,
  ...(__DEV__ ? { log: e => console.error(e.stack) } : {}),
})
