import { Sequelize } from 'sequelize'
import IDbORMConnectInterface from '../IDbORMConnectInterface'

class SequelizeConnection implements IDbORMConnectInterface {
  connect () {
    return new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
      logging: false,
      dialect: 'mysql',
      host: process.env.DB_HOST,
      pool: {
        min: 0,
        max: 50,
        idle: 20000,
        acquire: 40000,
        evict: 20000
      },
      define: {
        charset: process.env.DB_CHARSET
      }
    })
  }
}

export default new SequelizeConnection().connect()
