import { h } from "preact"
import render_to_json from "preact-render-to-json"

import App from "./App"

// console.log("testatron")

const outputJSON = render_to_json(<App />)

print(JSON.stringify(outputJSON))
