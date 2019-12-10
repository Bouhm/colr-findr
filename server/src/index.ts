import cors from 'cors'
import express from 'express'
import mongoose from 'mongoose'

import colorRoutes from './routes'

const app = express()
app.use(cors())
app.use('/colors', colorRoutes)

const URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-v8yjs.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`

mongoose
  .connect(URI, { useNewUrlParser: true })
  .then(() => app.listen(process.env.PORT || 8080))
  .catch(err => console.log(err))
