import { h, Component } from "preact"
// import yoga, { Node } from "yoga-layout"
// import { Trans } from "react-i18next-with-context"
import i18n, { translate } from "./i18n"

const Greeting = ({ label }) => (
  <div class="greeting">
    <h1>Hello</h1>
    <p>{label} component</p>
  </div>
)

class App extends Component {
  state = {
    events: [],
    currentLanguage: "de",
  }

  handleEvent = e => {
    const { events } = this.state
    this.setState({ events: [...events, e] })
  }

  componentWillMount() {
    const { currentLanguage } = this.state
    i18n.changeLanguage(currentLanguage)

    this.handleEvent("will mount")
    setTimeout(() => {
      this.handleEvent("1000ms timeout")
    }, 1000)
  }

  componentDidMount() {
    this.handleEvent("did mount")
  }

  handleLanguageChange = lng => {
    i18n.changeLanguage(lng)
    this.setState({ currentLanguage: lng })
  }

  render() {
    const { events } = this.state

    return (
      <div class="App">
        <Greeting label={`world`} />
        <p>{translate("description_part1")}</p>
        <p>
          <button onClick={() => this.handleLanguageChange("de")}>de</button>
          <button onClick={() => this.handleLanguageChange("en")}>en</button>
        </p>
        <h2>{translate("events")}</h2>
        <p>{events.join(", ")}</p>
        <button onClick={e => this.handleEvent("click")}>Emit event</button>
      </div>
    )
  }
}

export default App
