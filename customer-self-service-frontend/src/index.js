import React from "react"
import { render } from "react-dom"
import App from "./App"
import "semantic-ui-css/semantic.min.css"
import "./index.css"

render(

    <BrowserRouter basename="/customer-self-service-frontend/">
        <App />
    </BrowserRouter>, document.getElementById("root"))
