import jwt from 'jsonwebtoken'
import { Request } from 'express'
import AuthException from '../exceptions/AuthException'
import utils from '../utility/utils'
import { upperFirst } from 'lodash'

export default (req: Request, res: any, next: any): void => {
  try {
    const token = utils.getTokenWithoutBearer(req.headers.authorization)

    jwt.verify(token, process.env.JWT_SECRET)
    next()
  } catch (err) {
    throw new AuthException(upperFirst(err.message), err.name)
  }
}
