import HttpException from './HttpException'

class CorsException extends HttpException {
  constructor () {
    super(403, 'Not allowed by CORS', 'CORS')
  }
}

export default CorsException
