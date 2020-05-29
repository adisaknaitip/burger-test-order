import React, { Component } from 'react'
import App from "./App"
import Navbar from "./Navbar"
import CheckoutOrder from "./checkoutOrder"
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";

export default class main extends Component {

    render() {
        return (
            <div>
                <Navbar />
                <div>
                    <Router>
                        <Route exact path="/home" component={App} />
                        <Route exact path="/checkout"  component={()=><CheckoutOrder order={new App().checkOut()}/>} />
                
                    </Router>
                   
                </div>
                {console.log("Sarun",new App().checkOut())}
            </div>
        )
    }
}
