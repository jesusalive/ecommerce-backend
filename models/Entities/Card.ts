import Sequelize from 'sequelize'
import { Model } from 'sequelize-typescript'
import sequelize from '../../database/ORMs/SequelizeConnection'

interface CardsAttributes {
  id?: number | null
  name: string
  slug: string
  category: string
  imageName: string
}

class Card extends Model<CardsAttributes> implements CardsAttributes {
  public id!: number;
  public name: string
  public slug: string
  public category: string
  public imageName: string

  public readonly dateCreated!: Date
  public readonly dateUpdated!: Date
  public readonly dateRemoved!: Date
}

Card.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING
    },
    slug: {
      type: Sequelize.STRING,
      primaryKey: true,
      unique: true
    },
    category: {
      type: Sequelize.STRING
    },
    imageName: {
      type: Sequelize.STRING
    },
    dateUpdated: {
      type: Sequelize.DATE
    },
    dateCreated: {
      type: Sequelize.DATE
    },
    dateRemoved: {
      type: Sequelize.DATE
    }
  },
  {
    sequelize,
    tableName: 'card',
    timestamps: true,
    updatedAt: 'dateUpdated',
    createdAt: 'dateCreated',
    deletedAt: 'dateRemoved',
    paranoid: true,
    freezeTableName: true
  }
)

export default Card
