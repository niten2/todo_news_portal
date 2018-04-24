import Sequelize, { Op } from 'sequelize'
import config from 'src/config'

const sequelize = new Sequelize(config.databaseUrl, {
  operatorsAliases: Op,
  define: {
    freezeTableName: true,
  },

  // logging: !config.isEnvTest,
  logging: false,
})

export const sync = (...args) => sequelize.sync(...args)
export const dropDb = () => sequelize.drop()
export default sequelize
