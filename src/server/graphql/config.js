import schema from 'src/server/graphql/schema'
// import { getTokenFromHeader } from 'app/services/utils'

export default (req, res) => {
  return {
    schema,

    formatError: (err: any) => ({
      message: err.message,
      status: err.status
    }),

    // context: {
      // token: getTokenFromHeader(req),
      // payload: req.payload,
      // user: req.user,
      // ability: req.ability,
    // },
  }
}
