import React from 'react'
import "./chil.css"

const Chil = (props) => {
  return (
    <div className="backg">
      <img src={props.im}></img>
        <h1>name{props.car}</h1>
        <p>price{props.car1}</p>
    </div>
  )
}

export default Chil