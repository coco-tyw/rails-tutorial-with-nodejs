import express from 'express'
import bodyParser from 'body-parser'
import * as handler from "@/infra/handler"

const app = express()

// bodyがundefinedにならないように
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api', handler.router)

app.listen(3000, () => {
  console.log('listening on port 3000')
})

export default app
