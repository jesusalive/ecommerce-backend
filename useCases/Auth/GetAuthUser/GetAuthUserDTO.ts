import ValidateFieldsException from '../../../exceptions/ValidateFieldsException'
import DTO from '../../DTO'

class GetAuthUserDTO extends DTO {
  token: string

  constructor (token: string) {
    super()
    this.token = token
    this.validateFields()
  }

  protected validateFields (): void {
    if (!this.token) {
      throw new ValidateFieldsException('Token is required')
    }
  }
}

export default GetAuthUserDTO
