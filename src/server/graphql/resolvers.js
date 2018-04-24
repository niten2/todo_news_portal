// @flow
import sync, { User } from "src/server/models"
// import { createJwt } from "app/services/jwt_token"
// import { authenticated, calculatePersentLoan } from "app/services/utils"

const Query = {

  users: async (root: any, args: any, ctx: any) => {
    const users = await User.findAll()

    return users
  },

  user: async (root: any, args: any, ctx: any) => {
    const user = await User.findById(args.id)
    return user
  },

}

const Mutation = {

  createUser: async (root: any, args: any, ctx: any) => {
    const user = await User.create(args.input)
    return user
  },

  updateUser: async (root: any, args: any, ctx: any) => {
    // const user = await User.findById(args.input.id)

    // ctx.ability.throwUnlessCan('update', user)

    // await user.set(args.input)
    // await user.save()

    // return user
  },

  deleteUser: async (_: any, args: any, ctx: any) => {
    // ctx.ability.throwUnlessCan('delete', User)

    // const user = await User.findByIdAndRemove(args.input.id)
    // return user
  },

}

//   // updateUser: authenticated(async (root: any, args: any, ctx: any) => {
//   //   const user = await User.findById(args.input.id)

//   //   ctx.ability.throwUnlessCan('update', user)

//   //   await user.set(args.input)
//   //   await user.save()

//   //   return user
//   // }),

//   // deleteUser: authenticated(async (_: any, args: any, ctx: any) => {
//   //   ctx.ability.throwUnlessCan('delete', User)

//   //   const user = await User.findByIdAndRemove(args.input.id)
//   //   return user
//   // }),

//   // updateMe: authenticated(async (root: any, args: any, ctx: any) => {
//   //   const user = ctx.user

//   //   await user.set(args.input)
//   //   await user.save()

//   //   return user
//   // }),

//   // createToken: async (_: any, args: any): Promise<any> => {
//   //   const { login, password } = args.input

//   //   const user = await User.findOne({ login })

//   //   if (!user) {
//   //     throw new Error("user not found")
//   //   }

//   //   if (user.blocked) {
//   //     throw new Error("user blocked, connect with admin")
//   //   }

//   //   if (!await user.comparePassword(password)) {
//   //     await user.addAttempt()
//   //     throw new Error("wrong password")
//   //   }

//   //   const token = await createJwt(user)

//   //   await user.resetAttempt()

//   //   return {
//   //     user,
//   //     token,
//   //   }
//   // },

//   // createClient: authenticated(async (root: any, args: any, ctx: any) => {
//   //   ctx.ability.throwUnlessCan('create', Client)

//   //   args.input.territory = ctx.user.territory

//   //   let client = await Client.create(args.input)

//   //   return client
//   // }),

//   // updateClient: authenticated(async (root: any, args: any, ctx: any) => {
//   //   const client = await Client.findById(args.input.id)

//   //   if (args.input.territory) {
//   //     ctx.ability.throwUnlessCan('update.territory', Client)
//   //   }

//   //   ctx.ability.throwUnlessCan('update', Client)

//   //   await client.set(args.input)
//   //   await client.save()

//   //   await Territory.populate(client, { path: "territory" })

//   //   return client
//   // }),

//   // deleteClient: authenticated(async (_: any, args: any) => {
//   //   const client = await Client.findByIdAndRemove(args.input.id)

//   //   await Territory.populate(client, { path: "territory" })
//   //   await Loan.find({ client: args.input.id }).remove()

//   //   return client
//   // }),

//   // createLoan: authenticated(async (root: any, args: any, ctx: any) => {
//   //   ctx.ability.throwUnlessCan('create', Loan)

//   //   const client = await Client.findById(args.input.client)
//   //   const loan = await Loan.create(args.input)

//   //   await client.addLoan(loan)

//   //   return loan
//   // }),

//   // updateLoan: authenticated(async (root: any, args: any, ctx: any) => {
//   //   ctx.ability.throwUnlessCan('update', Loan)

//   //   const loan = await Loan.findById(args.input.id)

//   //   await loan.set(args.input)
//   //   await loan.save()

//   //   return loan
//   // }),

//   // calculateLoan: authenticated(async (root: any, args: any, ctx: any) => {
//   //   const { sum, territory, date_start, date_end, client } = args.input

//   //   let client_object = await Client.findById(client).populate({ path: "territory" })

//   //   let persent = calculatePersentLoan({
//   //     sum: sum,
//   //     territory: client_object.territory.rate,
//   //     date_start: new Date(date_start),
//   //     date_end: new Date(date_end),
//   //   })

//   //   const total = sum + persent

//   //   return { total }
//   // }),

// }

export default { Query, Mutation }
