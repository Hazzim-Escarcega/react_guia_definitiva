import { Component } from "react";
import "./style.css";
import BubbleAlert from "../BubbleAlert/BubbleAlert";
class Cart extends Component {
    render() {
        return(
            <div>
                <span className="btn-bubble">
                    <BubbleAlert value={11}/>
                </span>
                <button className="cart-btn">Carro de compras</button>
            </div>
        )
    }
}
export default Cart;