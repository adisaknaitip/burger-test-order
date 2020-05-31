import React, { Component } from 'react'
import App from "./App"
import Navbar from "./Navbar"
import CheckoutOrder from "./checkoutOrder"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Showrecipe from "./showRecipe"

export default class main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            order: [],
        }
    }
    getOrder(order) {
        const orderList = this.state.order
        orderList.push(order)
        this.setState({ order: orderList })
    }

    render() {
        return (
            <div style={{width:"100vw",height:"100vh"}}>
                <Router>
                    <Navbar />
                    <Route exact path="/" component={() => <App getOrder={this.getOrder.bind(this)} />} />
                    <Route exact path="/checkout" component={() => <CheckoutOrder order={this.state.order} />} />
                    <Route exact path="/recipe" component={() => <Showrecipe price={this.state.order.reduce((total, item) => {
                        return total + item.totalPrice
                    }, 0)} numberOrder={this.state.order.length}/>}/>
                </Router>
            </div>
        )
    }
}
