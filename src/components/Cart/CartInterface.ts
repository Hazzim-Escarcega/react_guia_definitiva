export interface CartModel{
    name: string;
    img: string;
    quantity: number;
    price: number;
    cart: CartModel;
}