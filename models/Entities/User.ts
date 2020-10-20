import Sequelize from 'sequelize'
import { Model } from 'sequelize-typescript'
import sequelize from '../../database/ORMs/SequelizeConnection'
import StatusBase from '../../datatypes/enums/StatusBase'

interface UserAttributes {
  id?: number | null
  name: string
  email: string
  password: string
  isAdmin: boolean
  status: StatusBase
}

class User extends Model<UserAttributes> implements UserAttributes {
  public id?: number | null
  public name: string
  public email: string
  public password: string
  public isAdmin: boolean
  public status: StatusBase

  public readonly dateCreated!: Date
  public readonly dateUpdated!: Date
}

User.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    isAdmin: {
      type: Sequelize.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    dateUpdated: {
      type: Sequelize.DATE
    },
    dateCreated: {
      type: Sequelize.DATE
    },
    status: {
      type: Sequelize.ENUM('active', 'removed'),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'user',
    timestamps: true,
    updatedAt: 'dateUpdated',
    createdAt: 'dateCreated',
    freezeTableName: true
  }
)

export default User
