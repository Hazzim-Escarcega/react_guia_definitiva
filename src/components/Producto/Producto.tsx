import { Component } from "react";
import "./style.css"
import Button from "../Button/Button";
import { Product } from "../Productos/productos_interface";

export interface IProducto {
  price: number;
  img: string | undefined;
  name: string;
  addToCart: (p: object) => void;
  producto: IProducto;
}
class Producto extends Component<IProducto> {
  addToCart: any;
  render() {
    const { producto, addToCart } = this.props;
    return (
      <div className="product-card">
        <img src={producto.img} alt={producto.name} />
        <h3>{producto.name}</h3>
        <p>{producto.price}</p>
        <Button onClick={() => addToCart(producto)}>
          Agregar al carrito
        </Button>
      </div>
    );
  }
}
export default Producto;



