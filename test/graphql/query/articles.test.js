const query = `
  query {
    articles {
      ${matchers.article_attr}
    }
  }
`

describe("valid params given", () => {

  it('should return users', async () => {
    let user = await factory.create('article')

    const res = await execGraphql({ query })

    expect(res.data.articles).toContainEqual(matchers.article_json)
  })

})

