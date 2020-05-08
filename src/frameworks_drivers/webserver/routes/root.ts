import express = require('express')

const router = express.Router()

router.get('/', async (req: express.Request, res: express.Response) => {
  res.send('<h1>Rails Tutorial With Node.js</h1>')
})

export default router
