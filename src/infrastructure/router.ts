import express = require('express')

let router = express.Router()

router.get('/', async (req: express.Request, res: express.Response) => {
  res.send("<h1>rails tutorial with nodejs</h1>")
})

export default router
