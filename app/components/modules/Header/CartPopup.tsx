


import Image from 'next/image';
import { CartItem } from './CartItem';
import { useUnit } from 'effector-react';
import { $cartModal, closeCartPopup } from '@/app/context/modals';
import { Button } from '../../elements/Button';
import { useLang } from '@/app/hooks/useLang';
import { $cartFromLs } from '@/app/context/cart';
export const CartPopup = () => {
  const {translations, lang} = useLang()
  const open = useUnit($cartModal)


  const handleClosePopup = () =>{
    closeCartPopup()
  }

  return (
  
    <div className={`cart-popup ${open ? 'cart-active' :  ''}`}>
   
      <div className="cart__wrapper">
        <div className="cart__top">
          <h3>{translations[lang].cart.basket}</h3>
          <Image onClick={handleClosePopup} src={'/img/close.svg'} width={12} height={12} alt="close" />
        </div>
        <div className="delivery__info">
          <p>
            {translations[lang].cart.delivery}  <span>{translations[lang].cart.from} 20 000 ₽</span>
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
        <Button className='cart__btn'>{translations[lang].cart.button} 30123₽ </Button>
      </div>
    </div>
  );
};
