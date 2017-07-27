import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Home from "./Home.jsx"
import Vehicles from "./Vehicles.jsx"
import List from "./List.jsx"
import Description from "./Description.jsx"


import vehicles from "../../data/vehicles.js"


const App = () => {
  return (
    <div>

      <h1>Car hire!</h1>

      <Router>
        <div>
          <Route exact path = "/" component={Home} />
          <Route path="/" component={Vehicles} />
          <Route path="/list/:vehicle" component={List} />
          <Route path="/vehicle/:vehicle/:name" component={Description} />
        </div>
      </Router>

    </div>
  )
}

export default App
