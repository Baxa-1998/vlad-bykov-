import { IWrappedComponentProps } from '@/app/types/hocs';
import { forwardRef } from 'react';
import { withClickOutside } from '../../hocs/withClickOutside';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '@/app/hooks/useLang';
const CartPopup = forwardRef<HTMLDivElement, IWrappedComponentProps>(({ open, setOpen }, ref) => {
  const { lang, translations } = useLang();
  const handleShowPopup = () => setOpen(true);
  const handleHidePopup = () => setOpen(false);
  return (
    <div className="cart-popup" ref={ref}>
      <Link
        className="header__links__item__btn header__links__item__btn--cart"
        href="/cart"
        onMouseEnter={handleShowPopup}>
        <AnimatePresence>
          {open && (
            <motion.div
              key="cart-popup"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className="cart-popup__wrapper"
              onMouseLeave={handleHidePopup}>
              <span className="cart-popup__arrow"></span>
              <button className="btn-reset cart-popup__close" onClick={handleHidePopup}></button>
              <h3 className="cart-popup__title">{translations[lang].breadcrumbs.cart}</h3>
              <ul className="list-reset cart-popup__cart-list">
                <li className="cart-popup__cart-list__empty-cart"></li>
              </ul> 
              <div className='cart-popup__footer'>
                <div className='cart-popup__footer__inner'>
                  <span>{translations[lang].common.order_price}:</span> 
                  <span>0 $</span>
                </div>
                <Link href={'/order'} className='cart-popup__footer__link'>
              {translations[lang].breadcrumbs.order}
                </Link>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Link>
    </div>
  );
});
export default withClickOutside(CartPopup);
