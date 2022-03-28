import { Component } from "react";

export interface IProducto {
    addToCart: () => void;
    producto: IProducto;
}
class Producto extends Component<IProducto> {
    render() {
        return (
            <p>Producto component</p>
        )
    }
}
export default Producto;