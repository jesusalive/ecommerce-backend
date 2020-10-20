import HttpException from '../HttpException'

class DatabaseException extends HttpException {
  constructor (message: string) {
    super(400, message, 'DatabaseError')
  }
}

export default DatabaseException
