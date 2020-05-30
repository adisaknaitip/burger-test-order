import React from "react";
import { Component } from "react";
import "./App.css";




export default class App extends Component {
  constructor(props) {
    super(props);
    //Set state
    this.state = {
      tomato: { count: 0, price: 2.5 },
      salad: { count: 0, price: 1.5 },
      beef: { count: 0, price: 4.5 },
      bacon: { count: 0, price: 3.0 },
      img: [],
      totalPrice: 2.0,
      order: [],
    };
  }
  // Function for add the ingredient
  addIngredientButton(add) {
    switch (add) {
      case "Tomato":
        this.setState((state) => ({
          tomato: { ...state.tomato, count: state.tomato.count + 1 },
        }));
        this.addIngredient(add);
        this.addPrice(this.state.tomato.price);
        break;
      case "Salad":
        this.setState((state) => ({
          salad: { ...state.salad, count: state.salad.count + 1 },
        }));
        this.addIngredient(add);
        this.addPrice(this.state.salad.price);
        break;
      case "Beef":
        this.setState((state) => ({
          beef: { ...state.beef, count: state.beef.count + 1 },
        }));
        this.addIngredient(add);
        this.addPrice(this.state.beef.price);
        break;
      case "Bacon":
        this.setState((state) => ({
          bacon: { ...state.bacon, count: state.bacon.count + 1 },
        }));
        this.addIngredient(add);
        this.addPrice(this.state.bacon.price);
        break;
      default:
        console.log(add);
    }
  }
  // Function for remove the ingredient
  removeIngredientButton(remove) {
    switch (remove) {
      case "Tomato":
        if (this.state.tomato.count !== 0) {
          this.setState((state) => ({
            tomato: { ...state.tomato, count: state.tomato.count - 1 },
          }));
          this.removeIngredient(remove);
          this.removePrice(this.state.tomato.price);
        }
        break;
      case "Salad":
        if (this.state.salad.count !== 0) {
          this.setState((state) => ({
            salad: { ...state.salad, count: state.salad.count - 1 },
          }));
          this.removeIngredient(remove);
          this.removePrice(this.state.salad.price);
        }
        break;
      case "Beef":
        if (this.state.beef.count !== 0) {
          this.setState((state) => ({
            beef: { ...state.beef, count: state.beef.count - 1 },
          }));
          this.removeIngredient(remove);
          this.removePrice(this.state.beef.price);
        }
        break;
      case "Bacon":
        if (this.state.bacon.count !== 0) {
          this.setState((state) => ({

            bacon: { ...state.bacon, count: state.bacon.count - 1 },
          }));
          this.removeIngredient(remove);
          this.removePrice(this.state.bacon.price);
        }
        break;
      default:
        console.log(remove);
    }
  }
  // Function for add the picture of ingredient
  addIngredient(name) {
    const items = this.state.img;
    const Tomato = (
      <img
        className="items"
        style={{ width: "220px", height: "17px" }}
        src={process.env.PUBLIC_URL + "/items_07.png"}
        alt=""
      />
    );
    const Salad = (
      <img
        className="items"
        src={process.env.PUBLIC_URL + "/items_13.png"}
        alt=""
      />
    );
    const Beef = (
      <img
        className="items"
        src={process.env.PUBLIC_URL + "/items_03.png"}
        alt=""
      />
    );
    const Bacon = (
      <img
        className="items"
        src={process.env.PUBLIC_URL + "/items_10.png"}
        alt=""
      />
    );

    switch (name) {
      case "Tomato":
        items.unshift({ name: "Tomato", img: Tomato });
        break;
      case "Salad":
        items.unshift({ name: "Salad", img: Salad });
        break;
      case "Beef":
        items.unshift({ name: "Beef", img: Beef });
        break;
      case "Bacon":
        items.unshift({ name: "Bacon", img: Bacon });
        break;
      default:
        console.log();
    }
    this.setState({ img: items });
  }
  // Function for remove the picture of ingredient
  removeIngredient(name) {
    const items = this.state.img;
    let numIndex = -1;
    switch (name) {
      case "Tomato":
        numIndex = items.findIndex((items) => items.name === "Tomato");
        if (numIndex !== -1) {
          items.splice(numIndex, 1);
        }
        break;
      case "Salad":
        numIndex = items.findIndex((items) => items.name === "Salad");
        if (numIndex !== -1) {
          items.splice(numIndex, 1);
        }
        break;
      case "Beef":
        numIndex = items.findIndex((items) => items.name === "Beef");
        if (numIndex !== -1) {
          items.splice(numIndex, 1);
        }
        break;
      case "Bacon":
        numIndex = items.findIndex((items) => items.name === "Bacon");
        if (numIndex !== -1) {
          items.splice(numIndex, 1);
        }
        break;
      default:
    }
    this.setState({ img: items });
  }
  // Function for calculate the price when add the ingredient
  addPrice(priceitem) {
    this.setState((state) => ({ totalPrice: state.totalPrice + priceitem }));
  }
  // Function for calculate the price when remove the ingredient
  removePrice(priceitem) {
    this.setState((state) => ({ totalPrice: state.totalPrice - priceitem }));
  }
  // Function for order the burger
  orderButton() {
    if (this.state.totalPrice !== 2.00) {
      const orderList = this.state.order;
      orderList.push({
        tomato: { ...this.state.tomato },
        salad: { ...this.state.salad },
        beef: { ...this.state.beef },
        bacon: { ...this.state.bacon },
      })
      this.setState((state) => ({
        order: orderList
      })); this.props.getOrder({
        tomato: { ...this.state.tomato },
        salad: { ...this.state.salad },
        beef: { ...this.state.beef },
        bacon: { ...this.state.bacon },
        totalPrice:this.state.totalPrice
      })
    }
    console.log(this.state.order)

  }
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        {/* Burger */}

        <div style={{ height: "300px", overflowY: "scroll", margin: "2px" }}>
          <div>
            <img
              className="img1"
              src={process.env.PUBLIC_URL + "/bur1_01.png"}
              alt="burger top"
            />
          </div>
          {/* Ingredient space */}
          <div>
            {this.state.img.map((item, index) => {
              return <div key={index}>{item.img}</div>;
            })}
          </div>
          <div>
            <img
              className="img2"
              src={process.env.PUBLIC_URL + "/bur1_03.png"}
              alt="burger bottom"
            />
          </div>
          <br />
        </div>
        {/* Pricing */}
        <div>
          <p style={{ fontSize: "30px", marginBottom: "0px" }}>
            Current Price: {this.state.totalPrice.toFixed(2)} $
          </p>
        </div>
        {/* Button&Element */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <button
              type="button"
              className="btn btn-lg btn-outline-warning m-2 mb-1"
              onClick={() => {
                this.addIngredientButton("Tomato");
              }}
            >
              +
            </button>
            <button
              type="button"
              className="btn btn-lg btn-outline-danger m-2 mb-1"
              onClick={() => {
                this.removeIngredientButton("Tomato");
              }}
            >
              -
            </button>
            <p style={{ width: "85px", margin: "0px", textAlign: "start" }}>
              Tomato:
            </p>
            <p style={{ margin: "auto" }}>{this.state.tomato.count} pcs.</p>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <button
              type="button"
              className="btn btn-lg btn-outline-warning m-2"
              onClick={() => {
                this.addIngredientButton("Salad");
              }}
            >
              +
            </button>
            <button
              type="button"
              className="btn btn-lg btn-outline-danger m-2"
              onClick={() => {
                this.removeIngredientButton("Salad");
              }}
            >
              -
            </button>
            <p style={{ width: "85px", margin: "0", textAlign: "start" }}>
              Salad:
            </p>
            <p style={{ margin: "auto" }}>{this.state.salad.count} pcs.</p>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <button
              type="button"
              className="btn btn-lg btn-outline-warning m-2"
              onClick={() => {
                this.addIngredientButton("Beef");
              }}
            >
              +
            </button>
            <button
              type="button"
              className="btn btn-lg btn-outline-danger m-2"
              onClick={() => {
                this.removeIngredientButton("Beef");
              }}
            >
              -
            </button>
            <p style={{ width: "85px", margin: "0", textAlign: "start" }}>
              Beef:
            </p>
            <p style={{ margin: "auto" }}>{this.state.beef.count} pcs.</p>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <button
              type="button"
              className="btn btn-lg btn-outline-warning m-2"
              onClick={() => {
                this.addIngredientButton("Bacon");
              }}
            >
              +
            </button>
            <button
              type="button"
              className="btn btn-lg btn-outline-danger m-2"
              onClick={() => {
                this.removeIngredientButton("Bacon");
              }}
            >
              -
            </button>
            <p style={{ width: "85px", margin: "0", textAlign: "start" }}>
              Bacon:
            </p>
            <p style={{ margin: "auto" }}>{this.state.bacon.count} pcs.</p>
          </div>
        </div>
        <button className="btn btn-lg btn-warning m-1" onClick={this.orderButton.bind(this)}> Order Now</button>


      </div >
    );
  }
}
