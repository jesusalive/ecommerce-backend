import express from 'express'
import ConfigApplication from './config/ConfigApplication'
import App from './Application'
import Router from '../routes/Router'

const appExpress = express()
const appConfig = new ConfigApplication(appExpress)
const appRouter = new Router(appExpress)

const app = new App(appExpress, appConfig, appRouter)
app.start()
