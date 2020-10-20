abstract class HttpException extends Error {
    public status: number;
    public type: string;
    public stack?: string;

    constructor (status: number, message: string, type: string, stack?: string) {
      super(message)
      this.status = status
      this.type = type
      this.stack = stack
    }
}

export default HttpException
