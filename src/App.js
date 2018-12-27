import { h, Component } from "preact"

const Greeting = ({ label }) => (
	<div class="greeting">
		<h1>Hello</h1>
		<p>{label}</p>
	</div>
)

class App extends Component {
	state = {
		count: 0
	}

	handleIncrement = e => {
		const { count } = this.state
		this.setState({ count: count + 1 })
	}

	render() {
		const { count } = this.state
		return (
			<div class="App">
				<Greeting label={`world ${count}`} />
				<button onClick={this.handleIncrement}>Increment</button>
			</div>
		)
	}
}

export default App
