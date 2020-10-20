import Purchase from '../../../models/Entities/Purchase'
import ResponseDTO from '../../ResponseDTO'
import PurchaseDTO from '../utils/PurchaseDTO'
import PurchaseCardDTO from '../../PurchaseCard/utils/PurchaseCardDTO'
import PurchaseCustomCardDTO from '../../PurchaseCustomCard/utils/PurchaseCustomCardDTO'
import PurchaseWithAllCardsDTO from '../utils/PurchaseWithAllCardsDTO'

export default class GetOnePurchaseResponseDTO extends ResponseDTO<Purchase, PurchaseWithAllCardsDTO> {
  public toDTO (): PurchaseWithAllCardsDTO {
    const cards: Array<PurchaseCardDTO> = []
    const customCards: Array<PurchaseCustomCardDTO> = []

    if (this.data.cardPurchases) {
      this.data.cardPurchases.map(purchaseCard => {
        const card = new PurchaseCardDTO(purchaseCard.card, purchaseCard)
        cards.push(card)
      })
    }

    if (this.data.customCardPurchases) {
      this.data.customCardPurchases.map(purchaseCustomCard => {
        const card = new PurchaseCustomCardDTO(purchaseCustomCard.card, purchaseCustomCard)
        customCards.push(card)
      })
    }

    return new PurchaseWithAllCardsDTO(new PurchaseDTO(this.data), cards, customCards)
  }
}
