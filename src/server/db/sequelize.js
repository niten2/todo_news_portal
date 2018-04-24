import Sequelize, { Op } from 'sequelize'
import config from 'src/config'

const options = {
  operatorsAliases: Op,

  define: {
    freezeTableName: true,
  },

  // logging: !config.isEnvTest,
  logging: false,
}

const sequelize = new Sequelize(config.databaseUrl, options)

export const sync = (...args) => sequelize.sync(...args)
export const dropDb = () => sequelize.drop()
export default sequelize
