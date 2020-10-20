import ValidateFieldsException from '../../exceptions/ValidateFieldsException'
import ICardsGeneralFieldsToAssociateInterface from '../interfaces/ICardsGeneralFieldsToAssociateInterface'
import DTO from '../../useCases/DTO'

class AssociateCardsGeneralDTO extends DTO {
    purchaseId: number
    cards: Array<ICardsGeneralFieldsToAssociateInterface>

    constructor (purchaseId: number, cards: Array<ICardsGeneralFieldsToAssociateInterface>) {
      super()
      this.purchaseId = purchaseId
      this.cards = cards
      this.validateFields()
    }

    protected validateFields (): void {
      if (!this.cards) {
        throw new ValidateFieldsException('Give the cards array')
      }
    }
}

export default AssociateCardsGeneralDTO
