// @flow
import { User } from "src/server/models"
// import { createJwt } from "app/services/jwt_token"
// import { authenticated, calculatePersentLoan } from "app/services/utils"

export const query = {

  users: async (root: any, args: any, ctx: any) => {
    const users = await User.findAll()

    return users
  },

  user: async (root: any, args: any, ctx: any) => {
    const user = await User.findById(args.id)
    return user
  },

}

export const mutation = {

  createUser: async (root: any, args: any, ctx: any) => {
    const user = await User.create(args.input)
    return user
  },

  updateUser: async (root: any, args: any, ctx: any) => {
    const user = await User.findById(args.input.id)

    await user.set(args.input)
    await user.save()

    return user
  },

  deleteUser: async (_: any, args: any, ctx: any) => {
    const user = await User.findByIdAndRemove(args.input.id)
    return user
  },

}
