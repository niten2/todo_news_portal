import { Article } from "src/server/models"

const query = `
  mutation createArticle($input: CreateInputArticle!) {
    createArticle(input: $input) {
      ${matchers.article_attr}
    }
  }
`

describe("valid params given", () => {
  let res
  let article
  let user

  beforeEach(async () => {
    article = await factory.build('article')

    const variableValues = {
      input: {
        title: article.title,
        content: article.content,
      }
    }

    res = await execGraphql({ query, variableValues, user })
  })

  it('should return valid response', async () => {
    expect(res.data.createArticle).toEqual(matchers.article_json)
  })

  it('should create article', async () => {
    article = await Article.findOne({  where: { title: article.title } })

    expect(article).toEqual(
      expect.objectContaining({
        id: expect.any(String),

        title: article.title,
        content: article.content,
      })
    )
  })

})

// describe("wrong params given", () => {
//   it('manager should not create client', async () => {
//     let user = await factory.create('userAdmin')
//     let client = await factory.build('client')

//     const variableValues = {
//       input: {
//         full_name: client.full_name,
//         email: client.email,
//         passport: client.passport,
//         phone: client.phone,
//       }
//     }

//     let res = await execGraphql({ query, variableValues, user })

//     expect(res.errors).toContainEqual(expect.objectContaining({
//       message: 'Cannot execute "create" on "Client"',
//     })
//   })

//   it('should return error', async () => {
//     const variableValues = {
//       input: {}
//     }

//     const res = await execGraphql({ query, variableValues })

//     expect(res.errors).toContainEqual(matchers.errors_json)
//   })
// })

// describe("unauthorized", () => {
//   let res
//   let client
//   let user
//   const password = "password"

//   beforeEach(async () => {
//     user = await factory.create('userManager')
//     client = await factory.build('client')

//     const variableValues = {
//       input: {
//         full_name: client.full_name,
//         email: client.email,
//         passport: client.passport,
//         phone: client.phone,
//       }
//     }

//     res = await execGraphql({ query, variableValues, unauth: true })
//   })

//   it('should return valid response', async () => {
//     expect(res.errors).toContainEqual(matchers.errors_unauthorized_json)
//   })
// })
