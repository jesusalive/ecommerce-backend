import IUseCaseInterface from '../../IUseCaseInterface'
import User from '../../../models/Entities/User'
import jwt from 'jsonwebtoken'
import PanelAuthenticateDTO from './PanelAuthenticateDTO'
import AuthException from '../../../exceptions/AuthException'

class PanelAuthenticateUseCase implements IUseCaseInterface {
  public async execute (data: PanelAuthenticateDTO) {
    const user = await User.findOne({
      where: {
        email: data.email,
        password: data.password,
        isAdmin: true,
        status: 'active'
      }
    })

    if (!user) {
      throw new AuthException('User not found', 'AuthError')
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: '70h'
    })

    return {
      data: {
        token
      }
    }
  }
}

export default new PanelAuthenticateUseCase()
