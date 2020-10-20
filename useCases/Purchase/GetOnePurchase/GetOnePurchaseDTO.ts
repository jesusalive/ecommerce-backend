import ValidateFieldsException from '../../../exceptions/ValidateFieldsException'
import DTO from '../../DTO'

class GetOnePurchaseDTO extends DTO {
    id: number

    constructor (id: number) {
      super()
      this.id = id
      this.validateFields()
    }

    protected validateFields (): void {
      if (!this.id) {
        throw new ValidateFieldsException('Purchase ID is required')
      }
    }
}

export default GetOnePurchaseDTO
