import React, { Component } from 'react'
import './contant1.css'
import image2 from "../images/car.jpg"

import image1 from "../images/image1.jpg"
export class Content1 extends Component {
  render() {
    return (
      <div> 
         <div className="autem">
        <div className="c1">
            <img src={image2} alt="" />
            <h2>Autem sunt earum</h2>
            <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore
            </p>
            <div >
              <span className="spanbutton">GET STARTED </span>
            </div>
        </div>
        <div className="c1">
        <img src={image2} alt="" />
            <h2> Nobis et tempore</h2>
            <p>Ut quas omnis est. Non et aut tempora dignissimos similique in dignissimos. Sit incidunt et odit iusto
            </p>
            <div >
              <span className="spanbutton">GET STARTED </span>
            </div>
        </div>
        <div className="c1">
        <img src={image2} alt="" />
            <h2>Facere quia quae dolores</h2>
            <p> Modi ut et delectus. Modi nobis saepe voluptates nostrum. Sed quod consequatur quia provident dera</p>
            <div >
              <span className="spanbutton">GET STARTED </span>
            </div>
        </div>
    </div>
   
      </div>
    )
  }
}

export default Content1