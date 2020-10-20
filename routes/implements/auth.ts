
import { Application } from 'express'
import jwtProtect from '../../middlewares/jwtProtect'
import AuthController from '../../useCases/Auth/AuthController'

export default (app: Application): void => {
  app.post('/auth/panel', AuthController.panelAuthenticate)
  app.get('/me', jwtProtect, AuthController.getAuthUser)
}
