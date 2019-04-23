import { h, Component } from "preact"
// import yoga, { Node } from "yoga-layout"

const Greeting = ({ label }) => (
	<div class="greeting">
		<h1>Hello</h1>
		<p>{label}</p>
	</div>
)

class App extends Component {
	state = {
		count: 0,
	}

	handleIncrement = e => {
		const { count } = this.state
		this.setState({ count: count + 1 })
	}

	componentWillMount() {
		this.handleIncrement()
		setTimeout(() => {
			this.handleIncrement()
		}, 1000)
	}

	componentDidMount() {
		console.log("component did mount")
		this.handleIncrement()
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
