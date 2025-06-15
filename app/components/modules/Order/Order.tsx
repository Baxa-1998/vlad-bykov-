'use client';
import React from 'react';
import styles from '@/app/styles/order/styles.module.scss';
import { $cart } from '@/app/context/cart';
import { useUnit } from 'effector-react';
import { Input } from '../../elements/Input';
import { $location } from '@/app/context/country';
import Image from 'next/image';

export const Order = () => {
  const cart = useUnit($cart);
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

  return (
    <div className={styles.orderWrapper}>
      <div className={styles.orderInput}>
        <h3>Оформление заказа</h3>
        <form action="">
          <div className={styles.contactInput}>
            <h4 className={styles.orderTitle}>Контакы</h4>
            <Input placeholder={'Имя'} type={'email'} />
          </div>

          <div className={styles.deliveryInput}>
            <h4 className={styles.orderTitle}>Доставка</h4>
            <div>
              <p>Страна/Регион</p>
              <select required>
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
            <div className={styles.userInfo}>
              <Input placeholder={'Имя'} type={'text'} />
              <Input placeholder={'Фамилия'} type={'text'} />
            </div>
            <div className={styles.company}>
              <Input placeholder={'Компания (необязательно)'} type={'text'} />
            </div>
            <div className={styles.adress}>
              <Input placeholder={'Адресс'} type={'text'} /> 
              <Image src={'/img/order-search.svg'} width={15} height={15} alt='search'/>
            </div>
              <div className={styles.appartment}>
              <Input placeholder={'Апартаменты'} type={'text'} /> 

            </div> 
            <div className={styles.saveOrder}>
              <div>
                      <label className={styles.checkboxWrapper}>
  <input type="checkbox" />
  <span className={styles.checkmark}></span>
     
</label>

 <h5>Сохранить для следующих заказов</h5>
              </div>
                      <div>
                      <label className={styles.checkboxWrapper}>
  <input type="checkbox" />
  <span className={styles.checkmark}></span>
     
</label>

 <h5>Сохранить для следующих заказов</h5>
              </div>

 
 
           
            </div>
              
          </div>
        </form>
      </div>
      <div className={styles.orderTotal}></div>
    </div>
  );
};
