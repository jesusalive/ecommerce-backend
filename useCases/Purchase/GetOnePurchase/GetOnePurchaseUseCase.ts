import { Op } from 'sequelize'
import IUseCaseInterface from '../../IUseCaseInterface'
import Purchase from '../../../models/Entities/Purchase'
import GetOnePurchaseDTO from './GetOnePurchaseDTO'
import NotFoundException from '../../../exceptions/NotFoundException'
import PurchaseCard from '../../../models/Entities/PurchaseCard'
import GetOnePurchaseResponseDTO from './GetOnePurchaseResponseDTO'
import PurchaseCustomCard from '../../../models/Entities/PurchaseCustomCard'

class GetOnePurchaseUseCase implements IUseCaseInterface {
  public async execute (data: GetOnePurchaseDTO) {
    const purchase = await Purchase.findOne({
      where: {
        id: data.id
      },
      include: [
        {
          as: 'cardPurchases',
          model: PurchaseCard,
          isMultiAssociation: true,
          include: ['card']
        },
        {
          as: 'customCardPurchases',
          model: PurchaseCustomCard,
          isMultiAssociation: true,
          include: ['card']
        }
      ]
    })

    if (!purchase) {
      throw new NotFoundException('Purchase not found')
    }

    return {
      data: new GetOnePurchaseResponseDTO(purchase).toDTO()
    }
  }
}

export default new GetOnePurchaseUseCase()
