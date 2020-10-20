import PurchaseDTO from '../../Purchase/utils/PurchaseDTO'
import PurchaseCardDTO from '../../PurchaseCard/utils/PurchaseCardDTO'

export default class PurchaseWithCardsDTO {
  public purchase: PurchaseDTO
  public cards: Array<PurchaseCardDTO>

  constructor (purchase: PurchaseDTO, cards: Array<PurchaseCardDTO>) {
    this.purchase = purchase
    this.cards = cards
  }
}
