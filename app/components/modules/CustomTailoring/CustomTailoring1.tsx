import React from 'react';
import { Title } from '../../elements/Title';
import styles from '@/app/styles/custom/index.module.scss';
import { Button } from '../../elements/Button';

export const CustomTailoring1 = () => {
  return (
    <div className={styles.custom1}>
      <div className={styles.customWrapper}>
        <Title className={styles.customTitle}>ИНДИВИДУАЛЬНЫЙ ПОШИВ</Title>

        <p className={styles.customSubtitle}>Без границ для воображения</p>
        <Button className={styles.customBtn}>ОТПРАВИТЬ ЗАЯВКУ</Button>
      </div>
    </div>
  );
};
