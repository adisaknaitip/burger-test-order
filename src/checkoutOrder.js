import React, { Component } from 'react'
import "./checkoutOrder.css"


export default class checkoutOrder extends Component {
   
    render() {
        return (
            <div>
                {this.props.order.map((item, index) => {
                    return (
                        <div key={"Order" + index}>
                            <h4>Order Number :{index + 1}</h4><hr />
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
                                    <p>{"Total :"}</p>
                                    <p>{item.totalPrice.toFixed(2)} $</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
                <div>
                    {'Total: ' + this.props.order.reduce((total,item) => {
                        return total + item.totalPrice},0)}
                </div>
            </div>
        )
    }
}
