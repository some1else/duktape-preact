import { h, Component } from "preact"
// import yoga, { Node } from "yoga-layout"

const Greeting = ({ label }) => (
	<div class="greeting">
		<h1>Hello</h1>
		<p>{label} component</p>
	</div>
)

class App extends Component {
	state = {
		events: [],
	}

	handleEvent = e => {
		const { events } = this.state
		this.setState({ events: [...events, e] })
	}

	componentWillMount() {
		this.handleEvent("will mount")
		setTimeout(() => {
			this.handleEvent("1000ms timeout")
		}, 1000)
	}

	componentDidMount() {
		this.handleEvent("did mount")
	}

	render() {
		const { events } = this.state
		return (
			<div class="App">
				<Greeting label={`world`} />
				<h2>Events</h2>
				<p>{events.join(", ")}</p>
				<button onClick={e => this.handleEvent("click")}>Emit event</button>
			</div>
		)
	}
}

export default App
