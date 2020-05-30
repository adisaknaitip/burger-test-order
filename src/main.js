import React, { Component } from 'react'
import App from "./App"
import Navbar from "./Navbar"
import CheckoutOrder from "./checkoutOrder"
import {
    BrowserRouter as Router,
    Route

} from "react-router-dom";

export default class main extends Component {
    constructor(props) {
        super(props)

        this.state = {
            order: [],
        }
    }
    getOrder(order){
       const orderList = this.state.order
       orderList.push(order)
    this.setState({order: orderList})
    
        console.log("2", this.state.order)
    }

    render() {
        return (
            <div>
                <Router>
                    <Navbar />
                    <Route exact path="/" component={() => <App getOrder={this.getOrder.bind(this)} />} />
                    <Route exact path="/checkout" component={() => <CheckoutOrder order={this.state.order} />} />

                </Router>


            </div>
        )
    }
}
