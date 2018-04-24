import gql from "graphql-tag"
import { compose, graphql } from "react-apollo"

const createArticleQuery = gql`
  mutation createArticle($input: CreateInputArticle!) {
    createArticle(input: $input) {
      id

      title
      content
    }
  }
`

export const withData = graphql(
  createArticleQuery, {
    name: "createArticleQuery",
  },
)
