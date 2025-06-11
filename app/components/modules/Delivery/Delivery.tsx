'use client';
import React from 'react';
import styles from '@/app/styles/delivery/index.module.scss';
import Accordion from '../Accordion/Accordion';
import { useLang } from '@/app/hooks/useLang';
export const Delivery = () => {
  const { translations, lang } = useLang();
  return (
    <section className={styles.delivery}>
      <h3>{translations[lang].delivery.main_title}</h3>
      <div className={styles.deliveryWrapper}>
        <Accordion title={translations[lang].delivery.title}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure odio corrupti corporis
            doloribus pariatur deleniti architecto voluptas? Nemo, ratione sed perspiciatis pariatur
            voluptates vitae, sapiente beatae laborum libero aperiam dolorum.
          </p>
        </Accordion>
        <Accordion title={translations[lang].delivery.title2}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio vero alias sit ducimus
            soluta quo voluptate ipsam natus quia! Omnis amet corporis officia laboriosam facere,
            rerum suscipit repellendus eos deleniti.
          </p>
        </Accordion>
        <Accordion title={translations[lang].delivery.title3}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio vero alias sit ducimus
            soluta quo voluptate ipsam natus quia! Omnis amet corporis officia laboriosam facere,
            rerum suscipit repellendus eos deleniti.
          </p>
        </Accordion>
        <Accordion title={translations[lang].delivery.title4}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio vero alias sit ducimus
            soluta quo voluptate ipsam natus quia! Omnis amet corporis officia laboriosam facere,
            rerum suscipit repellendus eos deleniti.
          </p>
        </Accordion>
        <Accordion title={translations[lang].delivery.title5}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio vero alias sit ducimus
            soluta quo voluptate ipsam natus quia! Omnis amet corporis officia laboriosam facere,
            rerum suscipit repellendus eos deleniti.
          </p>
        </Accordion>
        <Accordion title={translations[lang].delivery.title6}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio vero alias sit ducimus
            soluta quo voluptate ipsam natus quia! Omnis amet corporis officia laboriosam facere,
            rerum suscipit repellendus eos deleniti.
          </p>
        </Accordion>
        <Accordion title={translations[lang].delivery.title7}>
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
