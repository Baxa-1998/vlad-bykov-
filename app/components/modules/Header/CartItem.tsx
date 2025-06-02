
import Image from 'next/image';
import React from 'react';

export const CartItem = () => { 
 
  return (
    <div className="cart__item">
      <div className="cart__img">
        <Image src={'/img/collections/Collection1.svg'} width={128} height={192} alt="cart-item" />
      </div>
      <div className="cart__info">
        <h3 className="cart__info_heading">Кожа крокодила</h3>
        <h2 className="cart__info_title">Мюли Himalaya</h2>
        <span className="cart__info_price">10 045 ₽</span>
        <p className="cart__info_size">S</p>

        <div className="cart__order_wrapper">
          <div className="cart__counter">
            <button>-</button>
            <span className='cart__counter_number'>1</span>
            <button>+</button>
          </div>

          <div className="cart__delete">
            Удалить
          </div>
        </div>
      </div>
      
    </div>
  );
};
