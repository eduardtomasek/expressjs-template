class BaseController {
	constructor (req, res) {
		this.request = req;
		this.response = res;

		if( ! this.response) {
			throw new Error('BaseController needs response in constructor.');
		}

		this.statusCode = 200;
	}

	status (status) {
		this.statusCode = status;

		return this;
	}

	send (data, meta = {}) {
		if(this.response) {
			return this.response.status(this.statusCode).send({ data, meta })
		}
	}

	sendNotFound(message = '') {
		return this.status(404).send({ status: 404, message })
	}
}

module.exports = BaseController