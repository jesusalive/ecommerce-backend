import IUseCaseInterface from '../../IUseCaseInterface'
import AssociateCardsGeneralDTO from '../../../utility/DTO/AssociateCardsGeneralDTO'
import PurchaseCustomCard from '../../../models/Entities/PurchaseCustomCard'
import DatabaseException from '../../../exceptions/services/DatabaseException'

class AssociateCustomCardsUseCase implements IUseCaseInterface {
  public async execute (data: AssociateCardsGeneralDTO) {
    try {
      for (const card of data.cards) {
        const { withChip, verse, leaked } = card

        await PurchaseCustomCard.create({
          customCardId: card.id,
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

export default new AssociateCustomCardsUseCase()
