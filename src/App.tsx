import { Component } from "react";
import "./App.css";
import Productos from "./components/Productos/Productos";

class App extends Component {
  state = {
    productos: [
      { name: "Tomate", price: 1500, img: "/productos/tomate.jpg" },
      { name: "Arbejas", price: 2500, img: "/productos/arbejas.jpg" },
      { name: "Lechuga", price: 500, img: "/productos/lechuga.jpg" },
    ],
  };
  render() {
    return (
      <div>
        <Productos
          productos={this.state.productos}
          key={""}
          addToCart={() => console.log("no funciona")}
        />
      </div>
    );
  }
}

export default App;


