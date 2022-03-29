import { Component } from "react";
import "./App.css";
import Productos from "./components/Productos/Productos";
import Layout from "./components/Layout/Layout";
import Title from "./components/Title/Title";
import Navbar from "./components/Navbar/Navbar";
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
        <Navbar />
        <Layout>
          <Title />
          <Productos
            productos={this.state.productos}
            key={""}
            addToCart={() => console.log("no funciona")}
          />
        </Layout>
      </div>
    );
  }
}

export default App;
