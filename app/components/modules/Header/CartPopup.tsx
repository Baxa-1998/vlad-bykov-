'use client';
import Image from 'next/image';
import { CartItem } from './CartItem';
import { useUnit } from 'effector-react';
import { $cartModal, closeCartPopup } from '@/app/context/modals';
import { Button } from '../../elements/Button';
import { useLang } from '@/app/hooks/useLang';
import { $cart } from '@/app/context/cart';
import { useEffect, useMemo, useState } from 'react';

import { $currencyRates, $location } from '@/app/context/country';
import { convertPrice } from '@/app/lib/utils/convert-price';
import { useRouter } from 'next/navigation';
export const CartPopup = () => {
  const router = useRouter();
  const { translations, lang } = useLang();
  const open = useUnit($cartModal);

  const handleGoToOrder = () => {
    if (cart.length !== 0) {
      closeCartPopup();
      router.push('/order');
    } else {
      alert(translations[lang].alerts.add_to_cart);
    }
  };

  const cart = useUnit($cart);

  const location = useUnit($location);
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.count, 0);
  const rates = useUnit($currencyRates);

  const { currencyCode, currencySymbol } = useMemo(() => {
    return {
      currencyCode: location?.currency.code || 'RUB',
      currencySymbol: location?.currency.symbol || '₽',
    };
  }, [location]);

  const convertedPrice = convertPrice(totalPrice ?? 0, rates, currencyCode);

  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;
  const handleCloseCartPopup = () => {
    closeCartPopup();
  };

  return (
    <div className={`cart-popup ${open ? 'cart-active' : ''}`}>
      <div className="cart__wrapper">
        <div className="cart__top">
          <h3>{translations[lang].cart.basket}</h3>
          <Image
            onClick={handleCloseCartPopup}
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
            <h2 className="cart__list-empty">{translations[lang].cart.empty}</h2>
          ) : (
            cart.map((item) => (
              <CartItem
                currencySymbol={currencySymbol}
                convertedPrice={convertPrice(item.price, rates, currencyCode)}
                key={item.clientId}
                item={item}
              />
            ))
          )}
        </div>

        <Button onClick={handleGoToOrder} className="cart__btn">
          {translations[lang].cart.button} {convertedPrice.toFixed(0)} {currencySymbol}{' '}
        </Button>
      </div>
    </div>
  );
};
