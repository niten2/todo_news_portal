import DataType from 'sequelize'
import Model from 'server/config/sequelize'

const User = Model.define('User', {
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
