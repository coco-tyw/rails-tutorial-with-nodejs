import { Sequelize } from 'sequelize'

const sequelize = new Sequelize({
  dialect: 'mysql'
})

sequelize.import('./models/User')

export default sequelize