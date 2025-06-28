import { JSX } from 'react';

export interface IAccordionProps {
  children: React.ReactNode;
  title: string | JSX.Element;
  titleClass?: string;
  rotateIconClass?: string;
}

export interface IMenuLinkItemProps {
  item: {
    id: number;
    text: string;
    href: string;
  };
  handleRedirectToCatalog: (arg0: string) => void;
}

export interface IJoinProps {
  id: number;
  name: string;
  subscribers: string;
  img: string;
}



export interface ICatalogProps {
  id: number;
  title: string;
  name: string;
  img: string;
  price: number;
}

export interface IContent {
  name: string;
  description: string;
  characteristics: {
    compositions: string;
    collection: string;
    colors: string[];
  };
}

export interface IGoodsItemProps {
    _id: string; 
  name: string;
  description: string;
  price: number;
  img: {url: string; desc: string}[];
  inStock: number;
  isNew: boolean;
  category: string;
  type: string;
  
  sizes: number[];
    content: {
    ru: IContent;
    en: IContent;
    [lang: string]: IContent; // расширение на будущие языки
  };
}