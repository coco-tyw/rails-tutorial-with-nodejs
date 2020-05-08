import { Express } from 'express'
import api from './api'
import root from './root'

export default function (app: Express) {
  app.use('/', root)
  app.use('/api', api)
}