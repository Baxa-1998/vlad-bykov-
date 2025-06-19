'use client';
import React, { useEffect, useState } from 'react';
import styles from '@/app/styles/order/styles.module.scss';
import { $cart } from '@/app/context/cart';
import { useUnit } from 'effector-react';
import { Input } from '../../elements/Input';
import { $location } from '@/app/context/country';
import Image from 'next/image';
import { ICartItem } from '@/app/types/cart';
import { Button } from '../../elements/Button';
import { useLang } from '@/app/hooks/useLang';

export const Order = () => {
  const cart: ICartItem[] = useUnit($cart); 
  const { translations, lang } = useLang();

  const location = useUnit($location);
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.count, 0);
  const countryData = [
    {
      id: 1,
      country: 'Spain',
      currency: 'EUR',
    },
    {
      id: 2,
      country: 'America',
      currency: 'USD',
    },
    {
      id: 3,
      country: 'China',
      currency: 'CNY',
    },
    {
      id: 4,
      country: 'Russia',
      currency: 'RUB',
    },
  ];
  const deliveryMethods = [
    { label: 'Экспресс 48–72 часа', price: '9235 ₽' },
    { label: 'Самовывоз', price: '0 ₽' },
    { label: 'Курьер до двери', price: '700 ₽' },
  ];
  const paymentMethods = [
    { label: 'Pay Pal', img: '/img/order-payment.svg' },
    { label: 'Visa', img: '/img/order-payment2.svg' },
    { label: 'UnionPay', img: '/img/order-payment3.svg' },
  ];
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    company: '',
    address: '',
    apartment: '',
    country: location?.country_name || '',
    city: '', 
    zipCode: '',
    cardNumber: '',
    saveForNext: true,
    subscribeNews: false,
    cardDate: '',
    cardCode: '',
    cardHolder: '',
    deliveryMethod: '',
    paymentMethod: '',
  });

  const handleSubmit = async () => {
    const res = await fetch('/api/send-order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...formData,
        cartItems: cart,
        totalPrice,
      }),
    });

    if (res.ok) {
      alert('Заказ отправлен!');
    } else {
      alert('Ошибка при отправке заказа');
    }
  };
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // SSR отрендерит пусто — значит совпадёт с клиентом

  // ...весь остальной код

  return (
    <div className={styles.orderWrapper}>
      <div className={styles.orderInput}>
        <h3>{translations[lang].order.main_title}</h3>
        <form action="">
          <div className={styles.contactInput}>
            <h4 className={styles.orderTitle}>{translations[lang].order.title1}</h4>
            <Input
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder={'Email'}
              type={'email'}
            />
          </div>

          <div className={styles.deliveryInput}>
            <h4 className={styles.orderTitle}>Доставка</h4>
            <div>
              <p>Страна/Регион</p>
              <select
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                required>
                <option defaultValue={location?.country_name} value="">
                  {location?.country_name}
                </option>
                {countryData.map((item) => (
                  <option key={item.id} value={item.country}>
                    {item.country}
                  </option>
                ))}
              </select>
            </div>
        
          </div>
              <div className={styles.userInfo}>
              <Input
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder={'Имя'}
                type={'text'}
              />
              <Input
                value={formData.surname}
                onChange={(e) => setFormData({ ...formData, surname: e.target.value })}
                placeholder={'Фамилия'}
                type={'text'}
              />
            </div>
            <div className={styles.company}>
              <Input
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder={'Компания (необязательно)'}
                type={'text'}
                required={false}
              />
            </div>
            <div className={styles.adress}>
              <Input
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                placeholder={'Адресс'}
                type={'text'}
              />
              <Image src={'/img/order-search.svg'} width={15} height={15} alt="search" />
            </div>
            <div className={styles.appartment}>
              <Input
                value={formData.apartment}
                onChange={(e) => setFormData({ ...formData, apartment: e.target.value })}
                placeholder={'Апартаменты'}
                type={'text'}
              />
            </div>






            <div className={styles.city}>
                  <Input
                value={formData.zipCode}
                onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                placeholder={'Почтовый индекс'}
                type={'text'}
              />
              <Input
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                placeholder={'Город'}
                type={'text'}
              />

            </div>






            <div className={styles.saveOrder}>
              <div>
                <label className={styles.checkboxWrapper}>
                  <input
                    checked={formData.saveForNext}
                    onChange={(e) => setFormData({ ...formData, saveForNext: e.target.checked })}
                    type="checkbox"
                  />
                  <span className={styles.checkmark}></span>
                </label>

                <h5>Сохранить для следующих заказов</h5>
              </div>
              <div>
                <label className={styles.checkboxWrapper}>
                  <input
                    checked={formData.subscribeNews}
                    onChange={(e) => setFormData({ ...formData, subscribeNews: e.target.checked })}
                    type="checkbox"
                  />
                  <span className={styles.checkmark}></span>
                </label>

                <h5>Отправлять новости и акции</h5>
              </div>
            </div>
            <div className={styles.methodDelivery}>
              <h4 className={styles.orderTitle}>Метод доставки</h4>

              {deliveryMethods.map((method) => (
                <div key={method.label} className={styles.methodWrapper}>
                  <div>
                    <label className={styles.customCheckbox}>
                      <input
                        value={method.label}
                        onChange={(e) =>
                          setFormData({ ...formData, deliveryMethod: e.target.value })
                        }
                        type="radio"
                        name="delivery"
                      />
                      <span className={styles.checkmark2}></span>
                    </label>
                    <h4>{method.label}</h4>
                  </div>
                  <h5>{method.price}</h5>
                </div>
              ))}

              {/* <div className={styles.methodWrapper}>
                <div>
                  <label className={styles.customCheckbox}>
                    <input type="radio" name="delivery" />
                    <span className={styles.checkmark2}></span>
                  </label>
                  <h4>Курьер до двери</h4>
                </div>
                <h5>700 ₽</h5>
              </div> */}
            </div>
            <div className={styles.payment}>
              <h4 className={styles.orderTitle}>Оплата</h4>
              <Input
                value={formData.cardNumber}
                onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                placeholder={'Номер карты'}
                type={'number'}
              />
              <div className={styles.date}>
                <Input
                  value={formData.cardDate}
                  onChange={(e) => setFormData({ ...formData, cardDate: e.target.value })}
                  placeholder={'ММ/ГГ'}
                  type={'number'}
                />
                <Input
                  value={formData.cardCode}
                  onChange={(e) => setFormData({ ...formData, cardCode: e.target.value })}
                  placeholder={'Секретный код'}
                  type={'number'}
                />
              </div>
              <Input
                value={formData.cardHolder}
                onChange={(e) => setFormData({ ...formData, cardHolder: e.target.value })}
                placeholder={'Держатель карты'}
                type={'text'}
              />
              <div className={styles.carts}>
                {paymentMethods.map((method) => (
                  <div key={method.label} className={styles.methodWrapper}>
                    <div>
                      <label className={styles.customCheckbox}>
                        <input value={method.label} onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })} type="radio" name="payment" />
                        <span className={styles.checkmark2}></span>
                      </label>
                      <h4>{method.label}</h4>
                    </div>
                    <Image src={method.img} width={38} height={34} alt={'payment'} />
                  </div>
                ))}

        
              
                





            






              </div>
            </div>
        </form>
      </div>





      <div className={styles.orderSummary}>
        <div className={styles.orderSummaryWrapper}>
          {cart?.map((item) => (
            <div key={item.clientId} className={styles.orderSummaryItem}>
              <div>
                <Image src={item?.img} width={80} height={80} alt={'cart'} />

                <div className={styles.orderSummaryInfo}>
                  <p className={styles.orderSummarySize}>{item.size}</p>
                  <h2 className={styles.orderSummaryName}>{item.name}</h2>
                </div>
              </div>
              <div>
                <span>{item.price} ₽</span>
              </div>
            </div>
          ))}
          <div className={styles.orderSummaryTotal}>
            <h5>{cart.length} товара</h5>
            <p>{totalPrice}</p>
          </div>
          <div className={styles.orderSummaryDelivery}>
            <h5>Доставка</h5>
            <p>9 235 ₽</p>
          </div>
          <div className={styles.finalPrice}>
            <h5>Итого</h5>
            <p>{totalPrice}</p>
          </div>
          <Button onClick={handleSubmit} className={styles.orderSummaryBtn}>
            Оформить заказ
          </Button>
        </div>
      </div>
    </div>
  );
};
