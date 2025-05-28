import React from 'react';
import styles from '@/app/styles/main-page/index.module.scss';
import Image from 'next/image';
export const Partners = () => {
  return (
    <div className={styles.partners}>
      <div className={styles.partners__wrapper}>
        <div className={styles.partners__inner}>
          <h2 className={styles.partners__title}>НАС ВЫБИРАЮТ</h2>
          <p className={styles.partners__subtitle}>Бизнесмены, политики, селебрити, блогеры</p>
        </div>
        <div className={styles.partners__items}>
          <Image width={245} height={64} src={'img/partners3.svg'} alt="partners" />
          <Image width={326} height={48} src={'img/partners2.svg'} alt="partners" />
          <Image width={240} height={64} src={'img/partners1.svg'} alt="partners" />
        </div>
      </div>
    </div>
  );
};
