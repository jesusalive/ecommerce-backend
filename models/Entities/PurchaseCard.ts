import Sequelize, { Association } from 'sequelize'
import { Model } from 'sequelize-typescript'
import sequelize from '../../database/ORMs/SequelizeConnection'
import Card from './Card'

interface PurchaseCardAttributes {
  purchaseId: number
  cardId: number
  quantity: number
  withChip: boolean
  verse: boolean
  leaked: boolean
}

class PurchaseCard extends Model<PurchaseCardAttributes> implements PurchaseCardAttributes {
  public purchaseId: number
  public cardId: number
  public quantity: number
  public withChip: boolean
  public verse: boolean
  public leaked: boolean

  public readonly card?: Card

  public static associations: {
    card: Association<PurchaseCard, Card>
  }
}

PurchaseCard.init(
  {
    purchaseId: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    cardId: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    quantity: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    withChip: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    },
    verse: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    },
    leaked: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    }
  },
  {
    sequelize,
    tableName: 'purchase_card',
    createdAt: false,
    updatedAt: false,
    freezeTableName: true
  }
)

export default PurchaseCard
