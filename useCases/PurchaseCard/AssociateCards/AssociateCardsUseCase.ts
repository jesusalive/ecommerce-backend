import IUseCaseInterface from '../../IUseCaseInterface'
import PurchaseCard from '../../../models/Entities/PurchaseCard'
import AssociateCardsGeneralDTO from '../../../utility/DTO/AssociateCardsGeneralDTO'
import DatabaseException from '../../../exceptions/services/DatabaseException'

class AssociateCardsUseCase implements IUseCaseInterface {
  public async execute (data: AssociateCardsGeneralDTO) {
    try {
      for (const card of data.cards) {
        const { withChip, verse, leaked } = card

        await PurchaseCard.create({
          cardId: card.id,
          purchaseId: data.purchaseId,
          quantity: card.quantity,
          withChip,
          verse,
          leaked
        })
      }
    } catch (err) {
      throw new DatabaseException(err.message)
    }
  }
}

export default new AssociateCardsUseCase()
