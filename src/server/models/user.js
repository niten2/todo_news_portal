import DataType from 'sequelize'
import sequelize from 'src/server/db/sequelize'

const User = sequelize.define('User', {
  id: {
    type: DataType.UUID,
    defaultValue: DataType.UUIDV1,
    primaryKey: true,
  },

  full_name: {
    type: DataType.STRING(255),
  },

  email: {
    type: DataType.STRING(255),
    validate: { isEmail: true },
  },

  password: {
    type: DataType.STRING(255),
  },

  emailConfirmed: {
    type: DataType.BOOLEAN,
    defaultValue: false,
  },

}, {
  // indexes: [{ fields: ['email'] }],
})

export default User
