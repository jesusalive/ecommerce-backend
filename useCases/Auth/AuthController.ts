import { Request, Response, NextFunction } from 'express'
import PanelAuthenticateUseCase from './PanelAuthenticate/PanelAuthenticateUseCase'
import PanelAuthenticateDTO from './PanelAuthenticate/PanelAuthenticateDTO'
import GetAuthUserUseCase from './GetAuthUser/GetAuthUserUseCase'
import GetAuthUserDTO from './GetAuthUser/GetAuthUserDTO'
import utils from '../../utility/utils'

class AuthController {
  async panelAuthenticate (req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body
      const data = await PanelAuthenticateUseCase.execute(new PanelAuthenticateDTO(email, password))

      return res.json(data)
    } catch (err) {
      next(err)
    }
  }

  async getAuthUser (req: Request, res: Response, next: NextFunction) {
    try {
      const token = utils.getTokenWithoutBearer(req.headers.authorization)
      const data = await GetAuthUserUseCase.execute(new GetAuthUserDTO(token))

      return res.json(data)
    } catch (err) {
      next(err)
    }
  }
}

export default new AuthController()
