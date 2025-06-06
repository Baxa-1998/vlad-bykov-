import React from 'react';
import styles from '@/app/styles/cancellation/index.module.scss';
import Accordion from '../Accordion/Accordion';
export const Cancellation = () => {
  return (
    <section className={styles.cancellation}>
      <h3>ВОЗВРАТ И ОТМЕНА</h3>
      <Accordion title={'стоимость и время доставки'}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod consectetur ab nihil
          doloribus deleniti voluptates repellendus aut fugit molestiae tempore odio ratione alias
          ad eaque, inventore aspernatur. Quam, placeat eius!
        </p>
      </Accordion>
      <Accordion title={'общая политика доставки'}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod consectetur ab nihil
          doloribus deleniti voluptates repellendus aut fugit molestiae tempore odio ratione alias
          ad eaque, inventore aspernatur. Quam, placeat eius!
        </p>
      </Accordion>
      <Accordion title={'уведомление о доставке'}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod consectetur ab nihil
          doloribus deleniti voluptates repellendus aut fugit molestiae tempore odio ratione alias
          ad eaque, inventore aspernatur. Quam, placeat eius!
        </p>
      </Accordion>
      <Accordion title={'налоги и пошлины'}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod consectetur ab nihil
          doloribus deleniti voluptates repellendus aut fugit molestiae tempore odio ratione alias
          ad eaque, inventore aspernatur. Quam, placeat eius!
        </p>
      </Accordion>
      <Accordion title={'страны доставки'}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod consectetur ab nihil
          doloribus deleniti voluptates repellendus aut fugit molestiae tempore odio ratione alias
          ad eaque, inventore aspernatur. Quam, placeat eius!
        </p>
      </Accordion>
      <Accordion title={'проблемы с доставкой'}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod consectetur ab nihil
          doloribus deleniti voluptates repellendus aut fugit molestiae tempore odio ratione alias
          ad eaque, inventore aspernatur. Quam, placeat eius!
        </p>
      </Accordion>
    </section>
  );
};
