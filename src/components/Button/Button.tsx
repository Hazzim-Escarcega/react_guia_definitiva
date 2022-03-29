import { Component } from "react";
import "./style.css";
import {ButtonProps} from "./button_interface";
class Button extends Component<ButtonProps> {

  render() {
    console.log(this.props)
    return (
      
        <button className="card-button" {...this.props} />
      
    );
  }
}
export default Button;
