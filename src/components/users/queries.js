import gql from "graphql-tag"
import { graphql } from "react-apollo"

const usersQuery = gql`
  query users($input: UsersInput) {
    users(input: $input) {
      id

      email
    }
  }

`

export const withData = graphql(
  usersQuery, {
    name: "usersQuery",
    options: (props) => ({
      fetchPolicy: "network-only",
      // variables: {
      //   input: {
      //     role: "manager",
      //   }
      // }
    })
  }
)
