
export interface ICartItem {
  productId: string;
  name: string;
  img: string;
  size: string;
  color: string;
  compositions:string;
  count: number;
  price: number;
  totalPrice: number;
  clientId: string;
  category: string;
  inStock: number;
}


export interface IAddProductToCartFx {
  productId: string
  category: string
  size: string
  count: number
  color: string
  jwt: string
  clientId: string
  setSpinner: (arg0: boolean) => void
}