import React from 'react'
import Chil from './chil'
import "./chil.css"
import image1 from "../images/car.jpg"

const producs = [{ name: "bmw", deail: image1, price: "23000" }, { name: "rols", deail: image1, price: "23000" }
    , { name: "polero", image1: "d", price: "23000" }]
function Paren() {
    return (
        <div className='back1'>
            {producs.map((element, index) => 
                <Chil key={index} car={element.name} car1={element.price} im={element.deail} />
            )}
        </div>

    )
}

export default Paren