import cors from 'cors'
import express from 'express'
import graphqlHttp from 'express-graphql'

import resolver from './graphql/resolvers'
import schema from './graphql/schema'
import colorRoutes from './routes'
import connectDb from './util/connection'

const app = express()
app.use(cors())
app.use(
  '/graphql',
  graphqlHttp({
    schema,
    rootValue: resolver
  })
)
app.use('/json', colorRoutes)

connectDb().then(() => app.listen(process.env.PORT || 8080))
