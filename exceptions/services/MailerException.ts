import HttpException from '../HttpException'

class MailerException extends HttpException {
  constructor (message: string) {
    super(400, message, 'MailerError')
  }
}

export default MailerException
