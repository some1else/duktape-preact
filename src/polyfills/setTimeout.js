if (typeof setTimeout !== 'function') {

	let polyfillEventLoop
	let window

	(function () {
		let timers = []

		window = Function('return this')()

		window.setTimeout = (func, timeout) => {
			timers = [...timers, func]
		}

		window.clearTimeout = () => {}

		polyfillEventLoop = () => {
			while (timers.length > 0) {
				const func = timers.shift()                
				func()
			}
		}
	})()

}