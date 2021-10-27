const express = require('express')
const RootController = require('../controllers/RootController')

const app = module.exports = express.Router()

app.get('/hello', async (req, res) => {
	(new RootController(req, res)).hello()
})