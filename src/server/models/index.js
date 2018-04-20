import sequelize from 'server/config/sequelize'
import User from './user'
// import UserLogin from './UserLogin'
// import UserClaim from './UserClaim'
// import UserProfile from './UserProfile'

// User.hasMany(UserLogin, {
//   foreignKey: 'userId',
//   as: 'logins',
//   onUpdate: 'cascade',
//   onDelete: 'cascade',
// })

// User.hasMany(UserClaim, {
//   foreignKey: 'userId',
//   as: 'claims',
//   onUpdate: 'cascade',
//   onDelete: 'cascade',
// })

// User.hasOne(UserProfile, {
//   foreignKey: 'userId',
//   as: 'profile',
//   onUpdate: 'cascade',
//   onDelete: 'cascade',
// })

const sync = (...args) => {
  return sequelize.sync(...args)
}

export default sync
export {
  User
}
