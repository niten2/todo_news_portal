import { sync } from 'src/server/db/sequelize'
import factory from 'test/factory'

const main = async () => {
  await sync()

  await factory.create("user")

  await factory.create("article")
  await factory.create("article")
  await factory.create("article")
}

main()
