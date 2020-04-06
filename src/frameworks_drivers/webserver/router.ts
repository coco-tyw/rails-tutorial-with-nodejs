import express = require('express')
let router = express.Router()
import * as controllers from '@/interface_adapters/controllers'

const usersController = new controllers.UsersController()

router.get('/', async (req: express.Request, res: express.Response) => {
  res.send('<h1>Rails Tutorial With Node.js</h1>')
})

router.get('/users', usersController.getUsers)
router.get('/user', usersController.getUser)

export default router
