import Sequelize, { Association } from 'sequelize'
import { Model } from 'sequelize-typescript'
import sequelize from '../../database/ORMs/SequelizeConnection'
import Card from './Card'
import PurchaseCard from './PurchaseCard'
import PurchaseStatus from '../../datatypes/enums/PurchaseStatus'
import PurchaseCustomCard from './PurchaseCustomCard'

interface PurchaseAttributes {
  id?: number | null
  email: string
  subtotal: number
  deliveryTax: number
  paidAmount: number
  gatewayAmount: number
  fullname: string
  cpf: string
  addressId: number
  status: PurchaseStatus
}

class Purchase extends Model<PurchaseAttributes> implements PurchaseAttributes {
  public id!: number | null
  public email: string
  public subtotal: number
  public deliveryTax: number
  public paidAmount: number
  public gatewayAmount: number
  public fullname: string
  public cpf: string
  public addressId: number
  public status: PurchaseStatus

  public readonly dateCreated!: Date
  public readonly dateUpdated!: Date
  public readonly cards?: Card[]
  public readonly cardPurchases?: PurchaseCard[]
  public readonly customCardPurchases?: PurchaseCustomCard[]

  public static associations: {
    cards: Association<Purchase, Card>
    cardPurchases: Association<Purchase, PurchaseCard>
    customCardPurchases: Association<Purchase, PurchaseCustomCard>
  }
}

Purchase.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    subtotal: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false
    },
    deliveryTax: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false
    },
    paidAmount: {
      type: Sequelize.DECIMAL(10, 2)
    },
    gatewayAmount: {
      type: Sequelize.DECIMAL(10, 2)
    },
    fullname: {
      type: Sequelize.STRING,
      allowNull: false
    },
    cpf: {
      type: Sequelize.STRING,
      allowNull: false
    },
    addressId: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    status: {
      type: Sequelize.ENUM('waiting_payment', 'in_prepare', 'in_transit', 'delivered'),
      defaultValue: 'active'
    },
    dateCreated: {
      type: Sequelize.DATE
    },
    dateUpdated: {
      type: Sequelize.DATE
    }
  },
  {
    sequelize,
    tableName: 'purchase',
    timestamps: true,
    updatedAt: 'dateUpdated',
    createdAt: 'dateCreated'
  }
)

export default Purchase
