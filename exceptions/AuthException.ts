import HttpException from './HttpException'

class AuthException extends HttpException {
  constructor (message: string, type: string) {
    super(401, message, type)
  }
}

export default AuthException
