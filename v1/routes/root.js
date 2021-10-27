const express = require('express')
const RootController = require('../controllers/RootController')

const app = module.exports = express.Router()

app.get('/', async (req, res) => {
	(new RootController(req, res)).home()
})