import ValidateFieldsException from '../../../exceptions/ValidateFieldsException'
import DTO from '../../DTO'

class PanelAuthenticateDTO extends DTO {
  email: string
  password: string

  constructor (email: string, password: string) {
    super()
    this.email = email
    this.password = password
    this.validateFields()
  }

  protected validateFields (): void {
    if (!this.email) {
      throw new ValidateFieldsException('Email field is required')
    }

    if (!this.password) {
      throw new ValidateFieldsException('Password field is required')
    }
  }
}

export default PanelAuthenticateDTO
