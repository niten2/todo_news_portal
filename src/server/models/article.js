import DataType from 'sequelize'
import sequelize from 'src/server/db/sequelize'

const Article = sequelize.define('Article', {
  id: {
    type: DataType.UUID,
    defaultValue: DataType.UUIDV1,
    primaryKey: true,
  },

  title: {
    type: DataType.STRING(255),
  },

  content: {
    type: DataType.STRING(255),
  },

}, {
})

export default Article
