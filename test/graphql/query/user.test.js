const query = `
  query user($id: ID!) {
    user(id: $id) {
      ${matchers.user_attr}
    }
  }
`

describe("valid params given", () => {

  it('should return user', async () => {
    let user = await factory.create('user')

    const variableValues = {
      id: user.id
    }

    const res = await execGraphql({ query, variableValues, user })

    expect(res.data.user).toEqual(matchers.user_json)
  })

})
