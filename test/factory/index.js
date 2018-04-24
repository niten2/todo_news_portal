import { User, Article } from "src/server/models"
import { factory } from "factory-girl"
import faker from "faker"

factory.define('user', User, {
  full_name: faker.name.findName,
  email: faker.internet.email,
  password: faker.internet.password,
  // login: faker.name.findName,
  // phone: faker.phone.phoneNumber,
  // role: "manager",
})

factory.define('article', Article, {
  title: faker.name.findName,
  content: faker.internet.email,
})

export default factory
