// @flow
import { mergeAll } from "ramda"
import {
  query as queryActicle,
  mutation as mutationActicle
} from "./acticles"

import {
  query as queryUser,
  mutation as mutationUser
} from "./users"

const Query = mergeAll([
  queryActicle,
  queryUser,
])

const Mutation = mergeAll([
  mutationActicle,
  mutationUser,
])

export default { Query, Mutation }
