import CustomCard from '../../../models/Entities/CustomCard'
import PurchaseCustomCard from '../../../models/Entities/PurchaseCustomCard'

export default class PurchaseCustomCardDTO {
  public card: Pick<CustomCard, 'id' | 'userEmail' | 'imageName'>
  public quantity: number
  public withChip: boolean
  public verse: boolean
  public leaked: boolean

  constructor (card: CustomCard, purchaseCard: PurchaseCustomCard) {
    const { id, userEmail, imageName } = card

    this.card = { id, userEmail, imageName }
    this.quantity = purchaseCard.quantity
    this.withChip = purchaseCard.withChip
    this.verse = purchaseCard.verse
    this.leaked = purchaseCard.leaked
  }
}
