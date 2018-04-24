import { sync } from 'src/server/db/sequelize'
import { User } from 'src/server/models'
import factory from 'test/factory'

const main = async () => {
  await sync()
  await factory.create("user")
}

main()
