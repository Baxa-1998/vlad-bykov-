import React from 'react';
import styles from '@/app/styles/delivery/index.module.scss';
import Accordion from '../Accordion/Accordion';
export const Delivery = () => {
  return (
    <section className={styles.delivery}>
      <h3>Доставка</h3>
      <div className={styles.deliveryWrapper}>
        <Accordion title={'стоимость и время доставки'}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure odio corrupti corporis
            doloribus pariatur deleniti architecto voluptas? Nemo, ratione sed perspiciatis pariatur
            voluptates vitae, sapiente beatae laborum libero aperiam dolorum.
          </p>
        </Accordion>
        <Accordion title={'общая политика доставки'}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio vero alias sit ducimus
            soluta quo voluptate ipsam natus quia! Omnis amet corporis officia laboriosam facere,
            rerum suscipit repellendus eos deleniti.
          </p>
        </Accordion>
        <Accordion title={'уведомление о доставке'}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio vero alias sit ducimus
            soluta quo voluptate ipsam natus quia! Omnis amet corporis officia laboriosam facere,
            rerum suscipit repellendus eos deleniti.
          </p>
        </Accordion>
        <Accordion title={'налоги и пошлины'}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio vero alias sit ducimus
            soluta quo voluptate ipsam natus quia! Omnis amet corporis officia laboriosam facere,
            rerum suscipit repellendus eos deleniti.
          </p>
        </Accordion>
        <Accordion title={'страны доставки'}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio vero alias sit ducimus
            soluta quo voluptate ipsam natus quia! Omnis amet corporis officia laboriosam facere,
            rerum suscipit repellendus eos deleniti.
          </p>
        </Accordion>
        <Accordion title={'отмена и изменение заказа'}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio vero alias sit ducimus
            soluta quo voluptate ipsam natus quia! Omnis amet corporis officia laboriosam facere,
            rerum suscipit repellendus eos deleniti.
          </p>
        </Accordion>
        <Accordion title={'проблемы с доставкой'}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio vero alias sit ducimus
            soluta quo voluptate ipsam natus quia! Omnis amet corporis officia laboriosam facere,
            rerum suscipit repellendus eos deleniti.
          </p>
        </Accordion>
      </div>
    </section>
  );
};
