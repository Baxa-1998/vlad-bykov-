export interface ICartItem {
  _id: string;
  clientId: string;
  productId: string;
  type: string
  name: string;
  price: number;
  img: string;
  size: string; 
  category: string;
  color: string;
  inStock: string;
  count: number;
  totalPrice: string 
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