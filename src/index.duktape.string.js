import { h } from "preact"
import render_to_string from "preact-render-to-string"

import App from "./App"

const outputString = render_to_string(<App />)

print(outputString)
