if (typeof window !== "object") {
	var window
}

if (typeof setTimeout !== "function") {
	function initTimeoutPolyfill() {
		var timers = []

		window = Function("return this")()

		window.setTimeout = (func, delay) => {
			const index = timers.length
			timers = [...timers, func]
			return index
		}

		window.clearTimeout = index => {
			timers.splice(index, 1)
		}

		window.polyfillEventLoop = () => {
			while (timers.length > 0) {
				const func = timers.shift()
				func()
			}
		}
	}

	initTimeoutPolyfill()
}
