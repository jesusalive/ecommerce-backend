import Sequelize from 'sequelize'
import { Model } from 'sequelize-typescript'
import sequelize from '../../database/ORMs/SequelizeConnection'
import StatusBaseEnum from '../../datatypes/enums/StatusBase'

interface AddressAttributes {
  id?: number | null
  cep: string
  address: string
  number?: string
  complement?: string
  neighborhood?: string
  city: string
  state: string
  status: StatusBaseEnum
}

class Address extends Model<AddressAttributes> implements AddressAttributes {
  public id!: number;
  public cep: string
  public address: string
  public number?: string | null
  public complement?: string | null
  public neighborhood?: string | null
  public city: string
  public state: string
  public status: StatusBaseEnum

  public readonly dateCreated!: Date
  public readonly dateUpdated!: Date
}

Address.init(
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    cep: {
      type: Sequelize.STRING,
      allowNull: false
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false
    },
    number: {
      type: Sequelize.STRING
    },
    complement: {
      type: Sequelize.STRING
    },
    neighborhood: {
      type: Sequelize.STRING
    },
    city: {
      type: Sequelize.STRING,
      allowNull: false
    },
    state: {
      type: Sequelize.STRING,
      allowNull: false
    },
    dateUpdated: {
      type: Sequelize.DATE
    },
    dateCreated: {
      type: Sequelize.DATE
    },
    status: {
      type: Sequelize.ENUM('active', 'removed'),
      defaultValue: 'active'
    }
  },
  {
    sequelize,
    tableName: 'address',
    timestamps: true,
    updatedAt: 'dateUpdated',
    createdAt: 'dateCreated',
    freezeTableName: true
  }
)

export default Address
