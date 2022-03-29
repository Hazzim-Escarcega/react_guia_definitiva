import { Component } from "react";
import "./style.css";
import Logo from "../Logo/Logo";
import Cart from "../Cart/Cart";
import {CartModel} from "../Cart/CartInterface"
class Navbar extends Component<CartModel> {
    constructor(props: CartModel) {
        super(props);
    }
    render() {
        const {cart} = this.props
        return(
            <nav className="navbar">
                <Logo />
                <Cart cart={cart}/>
            </nav>
        )
    }
}
export default Navbar;