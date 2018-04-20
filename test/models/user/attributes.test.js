import { User } from "server/models"

describe("attributes", () => {
  it("should have attributes", async () => {
    const user = await factory.create("user")

    expect(user).toEqual(matchers.user_db)
  })
})
