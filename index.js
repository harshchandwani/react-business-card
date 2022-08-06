import React from "react"
import ReactDOM from "react-dom"
import About from "./components/about"
import Info from "./components/info"
import Interests from "./components/interests"
import Footer from "./components/footer"

function App(){
    return(
        <div className="app">
          <Info/>
          <About/>
          <Interests/>
          <Footer/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root") )
