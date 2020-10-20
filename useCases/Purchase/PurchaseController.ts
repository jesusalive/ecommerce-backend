import { Request, Response, NextFunction } from 'express'
import BuyDTO from './Buy/BuyDTO'
import BuyUseCase from './Buy/BuyUseCase'

class PuchaseController {
  async buy (req: Request, res: Response, next: NextFunction) {
    try {
      const { address, purchaseInfo } = req.body
      const data = await BuyUseCase.execute(new BuyDTO(address, purchaseInfo))

      return res.json(data)
    } catch (err) {
      next(err)
    }
  }
}

export default new PuchaseController()
