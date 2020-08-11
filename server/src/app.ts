import express from 'express'
import 'express-async-errors'
import {json} from 'body-parser'
import {errorHandler} from './middlewares'
import {NotFoundError} from './errors';
import {pokemonRouter} from './routes'

const app = express()
app.use(json())

//Routes
app.use(pokemonRouter)

//Route with no handlers for "all" methods: Not Found
app.all('*', () => {
  throw new NotFoundError()
})

//Error Handler Middleware
app.use(errorHandler)

export { app }