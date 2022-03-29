import { Component } from "react";
import "./App.css";
import Productos from "./components/Productos/Productos";
import Layout from "./components/Layout/Layout";
import Title from "./components/Title/Title";
import Navbar from "./components/Navbar/Navbar";
interface Producto {
  name: string;
  price: number;
  img: string;
  quantity?: number;
}
class App extends Component<Producto> {
  state = {
    productos: [
      { name: "Tomate", price: 1500, img: "/productos/tomate.jpg" },
      { name: "Arbejas", price: 2500, img: "/productos/arbejas.jpg" },
      { name: "Lechuga", price: 500, img: "/productos/lechuga.jpg" },
    ],
    cart: [{ name: "", price: 0, img: "", quantity: 0 }],
  };
  addToCart = (producto: Producto) => {
    const { cart } = this.state;
    if (cart.find((x) => x.name === producto.name)) {
      const newcart = cart.map((x) =>
        x.name === producto.name
          ? {
              ...x,
              cantidad: x.cantidad + 1,
            }
          : x
      );
      return this.setState({ cart: newcart });
    }
    return this.setState({
      cart: this.state.cart.concat({
        ...producto,
        cantidad: 1,
      }),
    });
  };
  render() {
    return (
      <div>
        <Navbar cart={this.state.cart} name={""} img={""} quantity={0} price={0} />
        <Layout>
          <Title />
          <Productos
            productos={this.state.productos}
            key={""}
            addToCart={this.addToCart}
          />
        </Layout>
      </div>
    );
  }
}

export default App;
