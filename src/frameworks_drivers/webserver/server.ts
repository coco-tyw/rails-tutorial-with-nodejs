import express from 'express'
import bodyParser from 'body-parser'
import routes from './routes'

const app = express()

// bodyがundefinedにならないように
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

routes(app)

app.listen(3000, () => {
  console.log('listening on port 3000')
})

export default app
