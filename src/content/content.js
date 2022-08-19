import React from 'react'
import './content.css'
import image2 from "../images/car.jpg"
import Content1 from './content1'

const cars=[{img:image2,con:"Autem sunt earum",con1:"Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore",},
{img:image2,con:"Nobis et tempore",con1:"Ut quas omnis est. Non et aut tempora dignissimos similique in dignissimos. Sit incidunt et odit iusto"}]

const Content = () => {
  return (
    <div>
         <div className="content1">
            <div className="content-1">
                <h2>EUM IPSAM LABORUM DELENITI VELITENA</h2>
                <p>Voluptatem dignissimos provident quasi corporis voluptates sit assum perenda sruen jonee trave</p>
            </div>
            <div className="content-2">
                <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                <ul>
                    <p>Ullamco laboris nisi ut aliquip ex ea commodo consequa</p>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit</p>
                    <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                        in</p>
                </ul>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.</p>
            </div>
        </div>
        <div className="ser">
        <h1>SERVICES</h1>
        <h2>Magnam dolores commodi suscipit eius consequatur ex aliquid</h2>
        <div className="container">
            <div className="lore">
                <div className="service">

                    <i className="icofont-briefcase"></i>
                    <div className="s1">
                        <h3>Lorem Ipsum</h3>
                        <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                            cupiditate non provident</p>
                    </div>

                </div>
                <div className="service">
                    <i className="icofont-list"></i>
                    <div className="s1">
                        <h3> Dolor Sitema</h3>
                        <p>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat tarad limino ata</p>
                    </div>
                </div>
                <div className="service">
                    <i className="icofont-chart-histogram-alt"></i>
                    <div className="s1">
                        <h3>Sed ut perspiciatis</h3>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur</p>
                    </div>
                </div>
            </div>
            <div className="lore1">
                <div className="service1">
                    <i className="icofont-binoculars"></i>
                    <div className="s1">
                        <h3>MAGNI DOLERS</h3>
                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                            anim id est laborum</p>

                    </div>
                </div>
                <div className="service1">
                    <h4></h4>
                    <i className="icofont-ui-brightness"></i>
                    <div class="s1">
                        <h3>Nemo Enim</h3>
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                            voluptatum deleniti atque</p>
                    </div>
                </div>
                <div className="service1">
                    <i className="icofont-calendar"></i>
                    <div className="s1">
                        <h3>Eiusmod Tempor</h3>
                        <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta
                            nobis est eligendi</p>

                    </div>
                </div>
            </div>
        </div>
        </div>
 <Content1 />
    </div>
    
  )
}

export default Content