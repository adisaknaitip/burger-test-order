import React, { Component } from 'react'
import "./checkoutOrder.css"
import { Link } from 'react-router-dom'


export default class checkoutOrder extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    // Function for delete order in checkout page
    deleteArray = (index) => {
        this.props.order.splice(index, 1);
        this.setState(this.state)
    }
    render() {
        return (
            <div>
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "flex-start" }}>
                    {this.props.order.map((item, index) => {
                        return (
                            <div key={"Order" + index} className="border border-warning rounded m-2" >
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <h4 >Order Number :{index + 1}</h4>
                                    <button type="button" className="btn btn-light m-2" onClick={this.deleteArray.bind(this, index)}>X</button></div><hr />
                                <div className="order m-1" style={{ display: "flex", flexDirection: "column", alignItems: "center" }} key={index}>
                                    <div >
                                        <p>{"Beef : "}</p>
                                        <p>{item.beef.count} pcs.</p>
                                    </div><div>
                                        <p>{"Bacon : "}</p>
                                        <p>{item.bacon.count} pcs.</p>
                                    </div><div>
                                        <p>{"Tomato :"}</p>
                                        <p>{item.tomato.count} pcs.</p>
                                    </div><div>
                                        <p>{"Salad :"}</p>
                                        <p>{item.salad.count} pcs.</p>
                                    </div><div>
                                        <p>{"Price :"}</p>
                                        <p>{item.totalPrice.toFixed(2)} $</p>
                                    </div>

                                </div>
                            </div>
                        )
                    })}
                </div>
                <div style={{ display: "flex", justifyContent: "center", fontSize: "50px" }}>
                    {'Total: ' + this.props.order.reduce((total, item) => {
                        return total + item.totalPrice
                    }, 0) + "$"}

                </div>
                <div style={{ display: "flex", justifyContent: "center", fontSize: "50px" }}>
                    <Link to="/"><button className="btn btn-warning m-1">Continue Order</button></Link>
                    <Link to="/recipe"><button className="btn btn-success m-1">Confirm</button></Link>
                </div>
            </div>
        )
    }
}
