import IUseCaseInterface from '../../IUseCaseInterface'
import User from '../../../models/Entities/User'
import jwt from 'jsonwebtoken'
import GetAuthUserDTO from './GetAuthUserDTO'
import AuthException from '../../../exceptions/AuthException'
import UserDTO from '../utils/UserDTO'

class GetAuthUserUseCase implements IUseCaseInterface {
  public async execute (data: GetAuthUserDTO) {
    const decodeData = jwt.decode(data.token)

    if (!decodeData) {
      throw new AuthException('Invalid Token', 'JsonWebTokenError')
    }

    const user = await User.findOne({
      where: {
        id: decodeData['id']
      }
    })

    return {
      data: new UserDTO(user)
    }
  }
}

export default new GetAuthUserUseCase()
