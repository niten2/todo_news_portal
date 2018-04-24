const query = `
  query article($id: ID!) {
    article(id: $id) {
      ${matchers.article_attr}
    }
  }
`

describe("valid params given", () => {

  it('should return valid response', async () => {
    let article = await factory.create('article')

    const variableValues = {
      id: article.id
    }

    const res = await execGraphql({ query, variableValues })

    expect(res.data.article).toEqual(matchers.article_json)
  })

})
