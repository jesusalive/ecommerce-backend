import HttpException from './HttpException'

class NotFoundException extends HttpException {
  constructor (message: string) {
    super(400, message, 'NotFoundError')
  }
}

export default NotFoundException
