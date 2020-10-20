import Sequelize, { Association } from 'sequelize'
import { Model } from 'sequelize-typescript'
import sequelize from '../../database/ORMs/SequelizeConnection'
import CustomCard from './CustomCard'

interface PurchaseCustomCardAttributes {
  purchaseId: number
  customCardId: number
  quantity: number
  withChip: boolean
  verse: boolean
  leaked: boolean
}

class PurchaseCustomCard extends Model<PurchaseCustomCardAttributes> implements PurchaseCustomCardAttributes {
  public purchaseId: number
  public customCardId: number
  public quantity: number
  public withChip: boolean
  public verse: boolean
  public leaked: boolean

  public readonly card?: CustomCard

  public static associations: {
    card: Association<PurchaseCustomCard, CustomCard>
  }
}

PurchaseCustomCard.init(
  {
    purchaseId: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    customCardId: {
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
    tableName: 'purchase_custom_card',
    createdAt: false,
    updatedAt: false,
    freezeTableName: true
  }
)

export default PurchaseCustomCard
