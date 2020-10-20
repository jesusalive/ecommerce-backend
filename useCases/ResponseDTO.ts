export default abstract class ResponseDTO<T, Y> {
  protected data: T
  protected dataCollection: Array<T>

  constructor (data?: T, dataCollection?: Array<T>) {
    this.data = data
    this.dataCollection = dataCollection
  }

  public abstract toDTO(): Y | Array<Y>
}
