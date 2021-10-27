const express = require('express')
const helmet = require("helmet")

require('dotenv').config()

const routes = require('./v1/routes')

const app = express()

/**
 * APP USE
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(helmet())
app.use(express.static('public'))

/**
 * ROUTES
 */
app.use(routes)

app.listen(process.env.PORT, () => {
  console.log(`Listening at ${process.env.PORT}`)
})