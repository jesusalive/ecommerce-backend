import HttpException from '../HttpException'

class S3Exception extends HttpException {
  constructor (message: string) {
    super(400, message, 'S3Error')
  }
}

export default S3Exception
