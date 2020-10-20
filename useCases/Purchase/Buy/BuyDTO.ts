import * as Yup from 'yup'
import { isValid as CPFValidate } from '@fnando/cpf'
import DTO from '../../DTO'
import ValidateFieldsException from '../../../exceptions/ValidateFieldsException'
import ICardsGeneralFieldsToAssociateInterface from '../../../utility/interfaces/ICardsGeneralFieldsToAssociateInterface'

interface AddressFieldsToCreate {
  cep: string
  address: string
  city: string
  state: string
  number?: string
  complement?: string
  neighborhood?: string
}

interface PurchaseFieldsToCreate {
  email: string
  subtotal: number
  deliveryTax: number
  cpf: string
  fullname: string,
  cards: Array<ICardsGeneralFieldsToAssociateInterface>
  customCards: Array<ICardsGeneralFieldsToAssociateInterface>
}

class BuyDTO extends DTO {
  address: AddressFieldsToCreate
  purchaseInfo: PurchaseFieldsToCreate

  constructor (address: AddressFieldsToCreate, purchaseInfo: PurchaseFieldsToCreate) {
    super()
    this.address = address
    this.purchaseInfo = purchaseInfo
    this.validateFields()
  }

  protected validateFields (): void {
    const { cards, customCards } = this.purchaseInfo

    if ((!cards || !cards.length) && (!customCards || !customCards.length)) {
      throw new ValidateFieldsException('Purchase must have a leastway one card/custom-card')
    }

    const schema = Yup.object().shape({
      address: Yup.object({
        cep: Yup.string().required('CEP field is required'),
        address: Yup.string().required('Address field is required'),
        city: Yup.string().required('City field is required'),
        state: Yup.string().required('State of address is required field'),
        number: Yup.string().nullable().typeError('Number of address must be a string'),
        complement: Yup.string().nullable().typeError('Complement of address field must be a string'),
        neighborhood: Yup.string().nullable().typeError('Neighborhood field must be a string')
      }),
      purchase: Yup.object({
        email: Yup.string().email('Invalid email').required('Email field is required'),
        subtotal: Yup
          .number()
          .min(0.01, 'Invalid purchase subtotal')
          .required('Purchase subtotal field is required')
          .typeError('Purchase subtotal must be a float'),
        deliveryTax: Yup
          .number()
          .min(0.01, 'Invalid delivery tax')
          .required('Delivery tax field is required')
          .typeError('Delivery tax must be a float'),
        cpf: Yup
          .string()
          // Test name, Message if breaks, Test function
          .test('cpf-is-valid', 'Invalid CPF', (value: string) => CPFValidate(value))
          .required('CPF field is required'),
        fullname: Yup.string().required('FullName field is required'),
        cards: Yup
          .array()
          .of(
            Yup.object()
              .shape({
                id: Yup.number().min(1, 'Invalid card ID').required('Card ID is required'),
                quantity: Yup.number().min(1, 'Invalid quantity').required("Quantity of card's purchase is required"),
                withChip: Yup.boolean().required('WithChip property of card is required'),
                verse: Yup.boolean().required('Verse property of card is required'),
                leaked: Yup.boolean().required('Leaked property of card is required')
              })
              .typeError('Invalid card format')
          ),
        customCards: Yup
          .array()
          .of(
            Yup.object()
              .shape({
                id: Yup.number().min(1, 'Invalid custom card ID').required('Custom card ID is required'),
                quantity: Yup.number().min(1, 'Invalid custom card quantity').required("Quantity of custom card's purchase is required"),
                withChip: Yup.boolean().required('WithChip property of custom card is required'),
                verse: Yup.boolean().required('Verse property of custom card is required'),
                leaked: Yup.boolean().required('Leaked property of custom card is required')
              })
              .typeError('Invalid custom card format')
          )
      })
    })

    try {
      schema.validateSync({
        address: this.address,
        purchase: this.purchaseInfo
      })
    } catch (err) {
      throw new ValidateFieldsException(err.message)
    }
  }
}

export default BuyDTO
