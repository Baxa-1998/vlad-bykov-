'use client';
import { addScrollToBody } from '@/app/lib/utils/common';
import styles from '@/app/styles/contacts/index.module.scss';
import Link from 'next/link';
import { useEffect } from 'react';
const Contacts = () => {
  return (
    <section className={styles.contacts}>
      <h2>КОНТАКТЫ</h2>
      <div className={styles.contactsWrapper}>
        <div className={styles.contactsItems}>
          <h2>Контакты</h2>
          <div className={styles.contactsItem}>
            <p>Поддержка клиентов</p>
            <Link href={'tel:+78002221100'}>+7 800 222-11-00</Link>
          </div>
          <div className={styles.contactsItem}>
            <p>Поддержка корпоративных клиентов</p>
            <Link href={'tel:++7 800 550-94-11'}>+7 800 550-94-11</Link>
          </div>
        </div>
        <div className={styles.contactsItems}>
          <h2>Почта</h2>
          <div className={styles.contactsItem}>
            <p> Пресс-служба</p>
            <Link href={'mailto:press@kuper.ru'}>press@kuper.ru</Link>
          </div>
          <div className={styles.contactsItem}>
            <p>Отдел контент</p>
            <Link href={'mailto:content@kuper.ru'}>content@kuper.ru</Link>
          </div>
          <div className={styles.contactsItem}>
            <p>Физические лица</p>
            <Link href={'mailto:hello@kuper.ru'}>hello@kuper.ru</Link>
          </div>
          <div className={styles.contactsItem}>
            <p>Корпоративные клиенты</p>
            <Link href={'mailto:b2b@kuper.ru'}>b2b@kuper.ru</Link>
          </div>
          <div className={styles.contactsItem}>
            <p>Комплаенс</p>
            <Link href={'mailto:compliance@kuper.ru'}>compliance@kuper.ru</Link>
          </div>
          <div className={styles.contactsItem}>
            <p>Корреспонденция от государственных органов</p>
            <Link href={'mailto:official@kuper.ru'}>official@kuper.ru</Link>
          </div>
        </div>
        <div className={styles.contactsItems}>
          <h2>Адрес</h2>
          <p>
            ООО «Инстамарт Сервис», 115035, Москва, вн.тер.г. мун. округ Замоскворечье, ул.
            Садовническая, 9а, этаж 5, помещ. I, ком.1.
          </p>
        </div>
        <div className={styles.contactsItems}>
          <h2>Реквизиты</h2>
          <p>ООО «Инстамарт Сервис»</p>
          <p>ИНН 9705118142</p>
          <p>ОГРН 1187746494980</p>
          <p>Р/С 40702810538000250727</p>
          <p>БАНК СБЕРБАНК</p>
          <p>БИК 044525225</p>
          <p>К/С 3010181040000000022</p>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
