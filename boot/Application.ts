import { Application } from 'express'
import chalk from 'chalk'
import { setModelsRelationships } from '../models/Relationships'
import IConfigAppInterface from './config/IConfigAppInterface'
import IRouterInterface from '../routes/IRouterInterface'

class App {
  private app: Application
  private appConfig: IConfigAppInterface
  private appRouter: IRouterInterface

  constructor (app: Application, appConfig: IConfigAppInterface, appRouter: IRouterInterface) {
    this.app = app
    this.appConfig = appConfig
    this.appRouter = appRouter
  }

  start (): void {
    this.appConfig.config()
    console.log(chalk.blue('Starting server ;)'))

    setModelsRelationships()

    console.log(chalk.gray('Loading routes'))
    this.appRouter.init()

    this.app.listen(process.env.SERVER_PORT)
    console.log(chalk.blue(`Server is listening on port ${process.env.SERVER_PORT}`))
  }
}

export default App
