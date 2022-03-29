import { Component } from "react";
import "./style.css";
import Logo from "../Logo/Logo";
import Cart from "../Cart/Cart";
class Navbar extends Component {
    render() {
        return(
            <nav className="navbar">
                <Logo />
                <Cart/>
            </nav>
        )
    }
}
export default Navbar;