import config from "src/config"

it('should return valid values', () => {

  const attr = {
    port: process.env.PORT || 3000,

    trustProxy: process.env.TRUST_PROXY || 'loopback',
  }

  expect(config).toEqual(expect.objectContaining(attr))
})
