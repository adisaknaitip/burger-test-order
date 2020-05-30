import React, { Component } from 'react'
import {Link} from 'react-router-dom'



export default class Navbar extends Component {


  render() {
    return (

      <div>
        <nav style={{ display: "flex", justifyContent: "flex-start" }} className="navbar navbar-expand-lg navbar-light bg-warning">
          <div id="burger">
            <img style={{ height: "50px" }} src={process.env.PUBLIC_URL + "/burger_icon.png"} alt="" />
          </div>
           <Link to="/"id="banner" style={{ marginRight: "0px" }} className="navbar-brand">
            Burger Order</Link>
          
          <Link to="/checkout"><button className="btn btn-lg btn-danger m-1"> <i className="fas fa-shopping-cart"></i>Check Out</button></Link> 
        </nav>
      </div>
    )
  }
}
