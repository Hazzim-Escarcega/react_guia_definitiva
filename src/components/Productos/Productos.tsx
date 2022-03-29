import { Component } from "react";
import Producto from "../Producto/Producto";
import { Product, ProductosProps, ProductosState } from "./productos_interface";
import "./style.css";
class Productos extends Component<ProductosProps, ProductosState> {
  constructor(props: ProductosProps) {
    super(props);
  }
  render() {
    const { productos, addToCart } = this.props;
    return (
      <div className="productos-container">
        {productos.map((producto) => (
          <Producto
            addToCart={addToCart}
            key={producto.name}
            producto={producto}
          />
        ))}
      </div>
    );
  }
}
export default Productos;
