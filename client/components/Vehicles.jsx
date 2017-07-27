import React from 'react'
import {Link} from 'react-router-dom'
import vehicles from "../../data/vehicles.js"

const renderVehicles = (vehicles) => {
  return Object.keys(vehicles).map((vehicle, key) => {
    return <li key={key}><Link to={"/list/" + vehicle}>{vehicle}</Link></li>
  })
}

export default function (props) {


  return (
    <div className="vehicles container">
      <h1>Our vehicles</h1>
      <ul>
        {renderVehicles(vehicles)}
      </ul>
    </div>
  )
}
