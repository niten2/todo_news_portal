import { sync } from 'src/server/db/sequelize'
import { User } from 'src/server/models'
import factory from 'test/factory'

const main = async () => {

  await sync()


  console.log(await factory.create("user"))

  console.log(111111)

  console.log(await User.findAll())



}

main()
