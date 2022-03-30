import {Component} from 'react';
import {InputProps} from './interface_input';
import "./style.css";
class Input extends Component {
constructor(props: InputProps) {
super(props);
}
render() {
    const {label, ...rest} = this.props
return(
    <div className="field">
      <label>{label}</label>
      <input {...rest} />
    </div>
)
}
}
export default Input;
