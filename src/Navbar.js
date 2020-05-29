import React, { Component } from 'react'
import App from "./App"


export default class Navbar extends Component {
 
  
  render() {
    const order=this.props
    return (
  
      <div>
        <nav style={{ display: "flex", justifyContent: "space-between" }} className="navbar navbar-expand-lg navbar-light bg-warning">
          <div id="burger">
            <img style={{ height: "50px" }} src={process.env.PUBLIC_URL + "/burger_icon.png"} alt="" />
          </div>
          <a id="banner" style={{ marginRight: "0px" }} className="navbar-brand">
            Burger Order
          </a>
          
        </nav>
        {console.log(order)}
      </div>
    )
  }
}
