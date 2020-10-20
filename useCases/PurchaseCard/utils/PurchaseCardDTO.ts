import PurchaseCard from '../../../models/Entities/PurchaseCard'
import Card from '../../../models/Entities/Card'

export default class PurchaseCardDTO {
  public card: Pick<Card, 'id' | 'name' | 'slug' | 'imageName'>
  public quantity: number
  public withChip: boolean
  public verse: boolean
  public leaked: boolean

  constructor (card: Card, purchaseCard: PurchaseCard) {
    const { id, name, slug, imageName } = card

    this.card = { id, name, slug, imageName }
    this.quantity = purchaseCard.quantity
    this.withChip = purchaseCard.withChip
    this.verse = purchaseCard.verse
    this.leaked = purchaseCard.leaked
  }
}
