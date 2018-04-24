const user_attr = `
  id

  full_name
  email
  createdAt
  updatedAt
`

const article_attr = `
  id

  title
  content

  createdAt
  updatedAt
`

export default {

  user_attr,
  article_attr,

  user_json: expect.objectContaining({
    id: expect.any(String),

    full_name: expect.any(String),
    email: expect.any(String),

    createdAt: expect.any(String),
    updatedAt: expect.any(String),
  }),

  article_json: expect.objectContaining({
    id: expect.any(String),

    title: expect.any(String),
    content: expect.any(String),

    createdAt: expect.any(String),
    updatedAt: expect.any(String),
  }),

  errors_json: expect.objectContaining({
    message: expect.any(String),
    locations: expect.any(Array),
  }),

  errors_unauthorized_json: expect.objectContaining({
    message: "token not found",
    locations: expect.any(Array),
  }),

  payload_json: expect.objectContaining({
    user_id: expect.any(String),
    email: expect.any(String),
    iat: expect.any(Number),
    exp: expect.any(Number),
  }),

  user_db: expect.objectContaining({
    id: expect.any(String),
    full_name: expect.any(String),
    email: expect.any(String),
    createdAt: expect.any(Date),
    updatedAt: expect.any(Date),
  }),

}
