import { useLang } from '@/app/hooks/useLang';
import { decrementCartItem, incrementCartItem, removeCartItem } from '@/app/lib/utils/cart';
import { ICartItem } from '@/app/types/cart';

import Image from 'next/image';
import React from 'react';
type CartItemProps = {
  item: ICartItem;
  convertedPrice: number;
  currencySymbol: string;
};
export const CartItem = ({ item, convertedPrice, currencySymbol }: CartItemProps) => {
  const { translations, lang } = useLang();
  console.log(item);
  
  return (
    <div className="cart__item">
      <div className="cart__img">
        <Image
          src={item.img.url}
          // src={'/img/collections/Collection1.svg'}
          width={128}
          height={192}
          alt="cart-item"
        />
      </div>
      <div className="cart__info">
        <h3 className="cart__info_heading">{item.name}</h3>
        <h2 className="cart__info_title">{item.compositions}</h2>
        <span className="cart__info_price">
          {convertedPrice.toFixed(0)} {currencySymbol}
        </span>
        <p className="cart__info_size">{item.size}</p>

        <div className="cart__order_wrapper">
          <div className="cart__counter">
            <button onClick={() => decrementCartItem(item.productId, item.size)}>−</button>
            <span className="cart__counter_number">{item.count}</span>
            <button onClick={() => incrementCartItem(item.productId, item.size)}>+</button>
          </div>
          {/* кнопка удалить */}
          <div onClick={() => removeCartItem(item.productId, item.size)} className="cart__delete">
            {translations[lang].cart.remove}
          </div>
        </div>
      </div>
    </div>
  );
};
