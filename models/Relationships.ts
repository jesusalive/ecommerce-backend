import Purchase from './Entities/Purchase'
import Address from './Entities/Address'
import Card from './Entities/Card'
import PurchaseCard from './Entities/PurchaseCard'
import CustomCard from './Entities/CustomCard'
import PurchaseCustomCard from './Entities/PurchaseCustomCard'

export const setModelsRelationships = (): void => {
  // PURCHASE AND ADDRESS
  Purchase.belongsTo(Address, { as: 'address', foreignKey: 'addressId' })
  Address.hasMany(Purchase, { as: 'purchases' })

  // PURCHASE AND CARDS
  Purchase.belongsToMany(Card, { through: PurchaseCard, as: 'cards', foreignKey: 'purchaseId' })
  Card.belongsToMany(Purchase, { through: 'purchase_card', foreignKey: 'cardId', as: 'purchases' })
  Purchase.hasMany(PurchaseCard, { as: 'cardPurchases', foreignKey: 'purchaseId' })
  PurchaseCard.belongsTo(Purchase, { as: 'purchase', foreignKey: 'purchaseId' })
  PurchaseCard.belongsTo(Card, { as: 'card', foreignKey: 'cardId' })

  // PURCHASE AND CUSTOM CARDS
  Purchase.belongsToMany(CustomCard, { through: PurchaseCustomCard, as: 'customCards', foreignKey: 'purchaseId' })
  CustomCard.belongsToMany(Purchase, { through: 'purchase_custom_card', foreignKey: 'customCardId', as: 'purchases' })
  Purchase.hasMany(PurchaseCustomCard, { as: 'customCardPurchases', foreignKey: 'purchaseId' })
  PurchaseCustomCard.belongsTo(Purchase, { as: 'purchase', foreignKey: 'purchaseId' })
  PurchaseCustomCard.belongsTo(CustomCard, { as: 'card', foreignKey: 'customCardId' })
}
