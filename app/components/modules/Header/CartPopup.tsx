import Image from 'next/image';
import { CartItem } from './CartItem';
import { useUnit } from 'effector-react';
import { $cartModal, closeCartPopup } from '@/app/context/modals';
import { Button } from '../../elements/Button';
import { useLang } from '@/app/hooks/useLang';
import { $cart } from '@/app/context/cart';
import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { $currencyRates, $location } from '@/app/context/country';
import { convertPrice } from '@/app/lib/utils/convert-price';
export const CartPopup = () => {
  const { translations, lang } = useLang();
  const open = useUnit($cartModal);

  const cart = useUnit($cart);
  
   const location = useUnit($location);
 const totalPrice = cart.reduce((acc, item) => acc + item.price * item.count, 0);
   const rates = useUnit($currencyRates);
 
   const { currencyCode } = useMemo(() => {
     return {
       currencyCode: location?.currency.code || 'RUB',
       currencySymbol: location?.currency.symbol || '₽',
     };
   }, [location]);
 
   const convertedPrice = convertPrice(totalPrice ?? 0, rates, currencyCode);
   console.log(convertedPrice);
   
 

  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;
  const handleClosePopup = () => {
    closeCartPopup();
  };

  return (
    <div className={`cart-popup ${open ? 'cart-active' : ''}`}>
      <div className="cart__wrapper">
        <div className="cart__top">
          <h3>{translations[lang].cart.basket}</h3>
          <Image
            onClick={handleClosePopup}
            src={'/img/close.svg'}
            width={12}
            height={12}
            alt="close"
          />
        </div>
        <div className="delivery__info">
          <p>
            {translations[lang].cart.delivery} <span>{translations[lang].cart.from} 20 000 ₽</span>
          </p>
        </div>
        <div className="cart__list">
          {cart.length === 0 ? (
            <h2 className="cart__list-empty">Ваша корзина пуста</h2>
          ) : (
            cart.map((item) =>
 
              <CartItem   convertedPrice={convertPrice(item.price, rates, currencyCode)} key={item.clientId} item={item} />)
          )}
        </div>
        <Link href={'/order'}>
           <Button onClick={handleClosePopup} className="cart__btn">{translations[lang].cart.button} {convertedPrice.toFixed(0)} </Button>
        </Link>
     
      </div>
    </div>
  );
};
