
import { Application } from 'express'
import PurchaseController from '../../useCases/Purchase/PurchaseController'
import jwtProtect from '../../middlewares/jwtProtect'

export default (app: Application): void => {
  app.get('/purchases/email', PurchaseController.getUserPurchases)
  app.get('/purchases/:id', PurchaseController.getOnePurchase)
  app.post('/purchases/buy', PurchaseController.buy)
  app.get('/purchases', jwtProtect, PurchaseController.all)
  app.put('/purchases/:id', jwtProtect, PurchaseController.update)
}
