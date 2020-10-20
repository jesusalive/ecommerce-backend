import IUseCaseInterface from '../../IUseCaseInterface'
import Address from '../../../models/Entities/Address'
import Purchase from '../../../models/Entities/Purchase'
import BuyDTO from './BuyDTO'
import GetOnePurchaseUseCase from '../GetOnePurchase/GetOnePurchaseUseCase'
import GetOnePurchaseDTO from '../GetOnePurchase/GetOnePurchaseDTO'
import AssociateCardsUseCase from '../../PurchaseCard/AssociateCards/AssociateCardsUseCase'
import AssociateCardsGeneralDTO from '../../../utility/DTO/AssociateCardsGeneralDTO'
import AssociateCustomCardsUseCase from '../../PurchaseCustomCard/AssociateCustomCards/AssociateCustomCardsUseCase'

class BuyUseCase implements IUseCaseInterface {
  public async execute (data: BuyDTO) {
    const address = await Address.create(data.address)

    const {
      email,
      cpf,
      fullname,
      subtotal,
      deliveryTax,
      cards,
      customCards
    } = data.purchaseInfo

    const purchase = await Purchase.create({
      email,
      cpf,
      subtotal,
      deliveryTax,
      fullname,
      addressId: address.id,
      status: 'waiting_payment'
    })

    if (cards && cards.length) {
      await AssociateCardsUseCase.execute(new AssociateCardsGeneralDTO(purchase.id, cards))
    }

    if (customCards && customCards.length) {
      await AssociateCustomCardsUseCase.execute(new AssociateCardsGeneralDTO(purchase.id, customCards))
    }

    const purchaseWithAllCardsDTO = await GetOnePurchaseUseCase.execute(new GetOnePurchaseDTO(purchase.id))

    return purchaseWithAllCardsDTO
  }
}

export default new BuyUseCase()
