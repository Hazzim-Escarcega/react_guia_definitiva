export interface IProducto {
    price: number;
    img: string | undefined;
    name: string;
    addToCart(): void;
    producto: IProducto;
  }