import express = require('express')
import * as userHandler from './user'

let router = express.Router()

router.get('/', async (req: express.Request, res: express.Response) => {
  res.send("<h1>rails tutorial with nodejs</h1>")
})

router.post('/users', userHandler.postUser)

export default router
