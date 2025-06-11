'use client';

import { useLang } from '@/app/hooks/useLang';
import styles from '@/app/styles/contacts/index.module.scss';
import Link from 'next/link';

const Contacts = () => {
  const { translations, lang } = useLang();
  return (
    <section className={styles.contacts}>
      <h2>{translations[lang].contacts.main_title}</h2>
      <div className={styles.contactsWrapper}>
        <div className={styles.contactsItems}>
          <h2>{translations[lang].contacts.title1}</h2>
          <div className={styles.contactsItem}>
            <p>{translations[lang].contacts.subtitle1}</p>
            <Link href={'tel:+78002221100'}>+7 800 222-11-00</Link>
          </div>
          <div className={styles.contactsItem}>
            <p>{translations[lang].contacts.subtitle2}</p>
            <Link href={'tel:++7 800 550-94-11'}>+7 800 550-94-11</Link>
          </div>
        </div>
        <div className={styles.contactsItems}>
          <h2>{translations[lang].contacts.title2}</h2>
          <div className={styles.contactsItem}>
            <p>{translations[lang].contacts.subtitle3}</p>
            <Link href={'mailto:press@kuper.ru'}>press@kuper.ru</Link>
          </div>
          <div className={styles.contactsItem}>
            <p>{translations[lang].contacts.subtitle4}</p>
            <Link href={'mailto:content@kuper.ru'}>content@kuper.ru</Link>
          </div>
          <div className={styles.contactsItem}>
              <p>{translations[lang].contacts.subtitle5}</p>
            <Link href={'mailto:hello@kuper.ru'}>hello@kuper.ru</Link>
          </div>
          <div className={styles.contactsItem}>
              <p>{translations[lang].contacts.subtitle6}</p>
            <Link href={'mailto:b2b@kuper.ru'}>b2b@kuper.ru</Link>
          </div>
          <div className={styles.contactsItem}>
               <p>{translations[lang].contacts.subtitle7}</p>
            <Link href={'mailto:compliance@kuper.ru'}>compliance@kuper.ru</Link>
          </div>
          <div className={styles.contactsItem}>
    <p>{translations[lang].contacts.subtitle8}</p>
            <Link href={'mailto:official@kuper.ru'}>official@kuper.ru</Link>
          </div>
        </div>
        <div className={styles.contactsItems}>
          <h2>{translations[lang].contacts.title3}</h2>
          <p>
          <p>{translations[lang].contacts.subtitle9}</p>
          </p>
        </div>
        <div className={styles.contactsItems}>
         <h2>{translations[lang].contacts.title4}</h2>
          <p>{translations[lang].contacts.subtitle10}</p>
          <p>{translations[lang].contacts.subtitle11} 9705118142</p>
          <p>{translations[lang].contacts.subtitle12} 1187746494980</p>
          <p>{translations[lang].contacts.subtitle13} 40702810538000250727</p>
          <p>{translations[lang].contacts.subtitle14}</p>
          <p>{translations[lang].contacts.subtitle15} 044525225</p>
          <p>{translations[lang].contacts.subtitle16} 3010181040000000022</p>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
