import User from '../../../models/Entities/User'
import StatusBase from '../../../datatypes/enums/StatusBase'

export default class UserDTO {
  public id: number
  public name: string
  public email: string
  public isAdmin: boolean
  public status: StatusBase

  constructor (user: User) {
    this.id = user.id
    this.name = user.name
    this.email = user.email
    this.isAdmin = user.isAdmin
    this.status = user.status
  }
}
