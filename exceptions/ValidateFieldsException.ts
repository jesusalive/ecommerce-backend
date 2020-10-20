import HttpException from './HttpException'

class ValidateFieldsException extends HttpException {
  constructor (message: string) {
    super(400, message, 'ValidationFieldsError')
  }
}

export default ValidateFieldsException
