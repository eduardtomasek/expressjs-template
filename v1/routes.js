/**
 * Combine routes into single one file
 */

const express = require('express')

/**
 * ROUTES
 */
const root = require('./routes/root')
const hello = require('./routes/hello')

const app = module.exports = express.Router()

app.use(root)
app.use(hello)
