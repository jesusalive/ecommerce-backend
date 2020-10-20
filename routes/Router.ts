import _ from 'lodash'
import { Request, Response, NextFunction, Application } from 'express'
import IRouterInterface from './IRouterInterface'
import authRoutes from './implements/auth'
import purchaseRoutes from './implements/purchase'
import HttpException from '../exceptions/HttpException'

export default class Router implements IRouterInterface {
  private app: Application

  constructor (app: Application) {
    this.app = app
  }

  public init (): void {
    authRoutes(this.app)
    purchaseRoutes(this.app)
    this.setErrorHandlers()
  }

  private setErrorHandlers () {
    this.app.use((err: HttpException, req: Request, res: Response, next: NextFunction) => {
      if (process.env.NODE_ENV !== 'production' && err.stack !== undefined) console.log(err.stack)
      next(err)
    })

    this.app.use((err: HttpException, req: Request, res: Response, next: NextFunction) => {
      return res.status(err.status || 400).json({
        error: {
          type: err.type,
          message: err.message
        }
      })
    })
  }
}
