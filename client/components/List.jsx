import React from 'react'
import {Link} from 'react-router-dom'
import vehicles from "../../data/vehicles.js"


const renderVehiclesType = (vehicle) => {
  let names = vehicles[vehicle]
  return names.map((vehicleNameandDescription, i)=> {
    return <li key={i}><Link to={"/vehicle/" + vehicle + "/" + vehicleNameandDescription.name}>{vehicleNameandDescription.name}</Link></li>
  })
}

export default function (props) {
  var vehicle = props.match.params.vehicle

  return (
    <div className="container">
      <h1>Here you have type of {vehicle}</h1>
      <ul>
        {renderVehiclesType(vehicle)}
      </ul>
    </div>
  )
}
