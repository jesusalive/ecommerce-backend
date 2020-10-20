import Purchase from '../../../models/Entities/Purchase'
import PurchaseStatus from '../../../datatypes/enums/PurchaseStatus'

export default class PurchaseDTO {
  public id: number
  public email: string
  public subtotal: number
  public deliveryTax: number
  public paidAmount: number
  public fullname: string
  public cpf: string
  public status: PurchaseStatus
  public dateCreated: Date
  public dateUpdated: Date

  constructor (purchase: Purchase) {
    this.id = purchase.id
    this.email = purchase.email
    this.subtotal = purchase.subtotal
    this.deliveryTax = purchase.deliveryTax
    this.paidAmount = purchase.paidAmount
    this.fullname = purchase.fullname
    this.cpf = purchase.cpf
    this.status = purchase.status
    this.dateCreated = purchase.dateCreated
    this.dateUpdated = purchase.dateUpdated
  }
}
