import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Showrecipe extends Component {
    render() {
        return (
            <div className="border border-warning rounded m-2" style={{ display: "flex", flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                <h2>Confirmed Order</h2>
                <h4>We're Preparing your order.</h4>
                <hr/>
                <div>
                    <p>Order Number:{this.props.numberOrder}</p>
                </div>
                <div>
                    <p>Total Price:{this.props.price} $</p>
                </div>
                <Link to="/"><button className="btn btn-danger">BACK</button></Link>
                {/* {console.log(this.props.numberOrder + "" + this.props.price)} */}
            </div>
        )
    }
}
