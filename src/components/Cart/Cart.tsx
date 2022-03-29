import { Component } from "react";
import "./style.css";
import BubbleAlert from "../BubbleAlert/BubbleAlert";
import { CartModel } from "../Cart/CartInterface";
class Cart extends Component<CartModel> {
  constructor(props: CartModel) {
    super(props);
  }
  render() {
    const { cart } = this.props;
    const cantidad = cart.reduce((acc: number, el: CartModel) => acc + el.quantity, 0);
    console.log(cantidad);
    return (
      <div>
        <span className="btn-bubble">
          {cantidad !== 0 ? <BubbleAlert value={cantidad} /> : null}
        </span>
        <button className="cart-btn">Carrito</button>
      </div>
    );
  }
}
export default Cart;
