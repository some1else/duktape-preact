if (typeof Array.prototype.includes !== "function") {
	const includes = require("array-includes")

	Array.prototype.includes = (...items) => {
		return includes(this, ...items)
	}
}
