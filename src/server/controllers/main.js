import config from 'config'

export default {

  index: async (req, res, next) => {
    res.json({
      name: config.name,
      current_version: "/v1",
    })
  }

}
