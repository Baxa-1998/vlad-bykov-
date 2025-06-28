import { IContent } from './modules';

export interface ICartItem {
  productId: string;
  name: string;
  type: string;
  img: { url: string };
  size: string;
  color: string;
  compositions: string;
  // compositions: string;
  // sizes: number[];
  content: {
    ru: IContent;
    en: IContent;
    [lang: string]: IContent;
  };
  count: number;
  price: number;
  totalPrice: number;
  clientId: string;
  category: string;
  inStock: number;
}

export interface IAddProductToCartFx {
  productId: string;
  category: string;
  size: string;
  count: number;
  color: string;
  jwt: string;
  clientId: string;
  setSpinner: (arg0: boolean) => void;
}
