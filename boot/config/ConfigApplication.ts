import IConfigAppInterface from './IConfigAppInterface'
import express, { Application } from 'express'
import cors from 'cors'
import expressBearerToken from 'express-bearer-token'
import bodyParser from 'body-parser'
import corsConfig from './cors'
import fileUpload from 'express-fileupload'

class ConfigApplication implements IConfigAppInterface {
  private app: Application

  constructor (app: Application) {
    this.app = app
  }

  config (): void {
    this.app.use(cors(corsConfig))
    this.app.use(expressBearerToken())
    this.app.use('/imgs', express.static('static', { maxAge: '30d' }))
    this.app.use(bodyParser.json({ limit: '50mb' }))
    this.app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }))
    this.app.use(fileUpload())
  }
}

export default ConfigApplication
