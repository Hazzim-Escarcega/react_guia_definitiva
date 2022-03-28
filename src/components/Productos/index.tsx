import { Component } from "react";
import Producto from "../Producto";
import {ProductosProps, ProductosState} from "./interfaces";

class Productos extends Component<ProductosProps, ProductosState> {
    constructor(props: ProductosProps) {
        super(props);
    }
  render() {
    const { productos, addToCart } = this.props
    return (
      <div>
        {productos.map((producto: any) => (
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
