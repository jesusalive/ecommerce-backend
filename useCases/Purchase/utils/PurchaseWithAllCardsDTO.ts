import PurchaseDTO from './PurchaseDTO'
import PurchaseCardDTO from '../../PurchaseCard/utils/PurchaseCardDTO'
import PurchaseCustomCardDTO from '../../PurchaseCustomCard/utils/PurchaseCustomCardDTO'

export default class PurchaseWithAllCardsDTO {
  public purchase: PurchaseDTO
  public cards: Array<PurchaseCardDTO>
  public customCards: Array<PurchaseCustomCardDTO>

  constructor (purchase: PurchaseDTO, cards: Array<PurchaseCardDTO>, customCards: Array<PurchaseCustomCardDTO>) {
    this.purchase = purchase
    this.cards = cards
    this.customCards = customCards
  }
}
