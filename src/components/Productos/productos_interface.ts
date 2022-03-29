export interface Product {
  // * @ esta es la interface comun qyue necesitabas para que no te diera un error
  // * @ siempre es necesario describir el objeto con el que se esta trabajando
  name: string;
  price: number;
  img: string;
}
export interface ProductosProps {
  addToCart: (p: object) => void;
  key: string | number;
  productos: Product[]; // * @ necesitas agregar una interface comun para cada uno de los objetos
}
export interface ProductosState {}
