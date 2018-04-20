import Sequelize, { Op } from 'sequelize'
import config from 'src/config'

const sequelize = new Sequelize(config.databaseUrl, {
  operatorsAliases: Op,
  define: {
    freezeTableName: true,
  },
})

export const sync = (...args) => {
  return sequelize.sync(...args)
}

export const dropDb = () => {
  return sequelize.drop()
}

export default sequelize
