import { User } from "src/server/models"
import { factory } from "factory-girl"
import faker from "faker"

factory.define('user', User, {
  full_name: faker.name.findName,
  email: faker.internet.email,
  password: faker.internet.password,
  // login: faker.name.findName,
  // phone: faker.phone.phoneNumber,
  // role: "manager",

  // territory: factory.assoc('territory', '_id'),
})

export default factory
