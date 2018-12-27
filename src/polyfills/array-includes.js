if (typeof Array.prototype.includes !== 'function') {

	// let Symbol = require('es6-symbol')

	const includes = require('array-includes');

	Array.prototype.includes = (...items) => {
		return includes(this, ...items)
	}
}
