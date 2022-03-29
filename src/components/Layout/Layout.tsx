import { Component } from "react";
import "./style.css";
class Layout extends Component {
  render() {
    return (
      <div className="layout-container">
        <div className="product-container">{this.props.children}</div>{" "}
      </div>
    );
  }
}
export default Layout;
