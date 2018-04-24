// @flow
import gql from "graphql-tag"
import { graphql } from "react-apollo"

const articlesQuery = gql`
  query {
    articles {
      id

      title
      content
    }
  }
`

export const withData = graphql(
  articlesQuery, {
    name: "articlesQuery",
    options: {
      fetchPolicy: "network-only",
    }
  }
)
