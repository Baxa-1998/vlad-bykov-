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