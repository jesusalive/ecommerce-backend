import Sequelize from 'sequelize'
import { Model } from 'sequelize-typescript'
import sequelize from '../../database/ORMs/SequelizeConnection'

interface CustomCardsAttributes {
  id?: number | null
  userEmail: string
  imageName: string
}

class CustomCard extends Model<CustomCardsAttributes> implements CustomCardsAttributes {
  public id!: number;
  public userEmail: string
  public imageName: string

  public readonly dateCreated!: Date
  public readonly dateUpdated!: Date
}

CustomCard.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userEmail: {
      type: Sequelize.STRING,
      allowNull: false
    },
    imageName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    dateUpdated: {
      type: Sequelize.DATE
    },
    dateCreated: {
      type: Sequelize.DATE
    }
  },
  {
    sequelize,
    tableName: 'custom_card',
    timestamps: true,
    updatedAt: 'dateUpdated',
    createdAt: 'dateCreated',
    deletedAt: false,
    freezeTableName: true
  }
)

export default CustomCard
