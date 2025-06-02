import { IWrappedComponentProps } from '@/app/types/hocs';
import { forwardRef } from 'react';
import { withClickOutside } from '../../hocs/withClickOutside';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '@/app/hooks/useLang';

import Image from 'next/image';
import { CartItem } from './CartItem';
import { useUnit } from 'effector-react';
import { $cartModal, closeCartPopup } from '@/app/context/modals';
import { Button } from '../../elements/Button';
export const CartPopup = () => {
  const { lang, translations } = useLang();
  const open = useUnit($cartModal)
console.log(open);
  const handleClosePopup = () =>{
    closeCartPopup()
  }

  return (
  
    <div className={`cart-popup ${open ? 'cart-active' :  ''}`}>
   
      <div className="cart__wrapper">
        <div className="cart__top">
          <h3>КОРЗИНА</h3>
          <Image onClick={handleClosePopup} src={'/img/close.svg'} width={12} height={12} alt="close" />
        </div>
        <div className="delivery__info">
          <p>
            Бесплатная доставка  <span>от 20 000 ₽</span>
          </p>
        </div>
        <div className='cart__list'>
          <CartItem/>
             <CartItem/>
                <CartItem/>
                  <CartItem/>
             <CartItem/>
                <CartItem/>
        </div>
        <Button className='cart__btn'>Оформить заказ 30123₽ </Button>
      </div>
    </div>
  );
};
