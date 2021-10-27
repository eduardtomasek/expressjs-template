const BaseController = require('../../base/BaseController')

class RootController extends BaseController {
	constructor(req, res, next) {
		super(req, res, next)

		this.name = "Root Controller"
	}

	home () {
		return this.send('Home page!')
	}

	hello () {
		return this.send('Hello!')
	}
}

module.exports = RootController