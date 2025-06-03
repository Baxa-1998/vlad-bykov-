import React from 'react';
import { Title } from '../../elements/Title';
import styles from '@/app/styles/custom/index.module.scss';
import { Button } from '../../elements/Button';
export const CustomTailoring2 = () => {
  return (
    <div className={styles.custom2}>
      <div className={styles.customWrapper}>
        <Title className={styles.customTitle}>ЭТО ВАША ИНДИВИДУАЛЬНОСТЬ</Title>

        <p className={styles.customSubtitle}>
          Каждая пара обуви, выполненная на заказ нашими модельерами, <br /> существует только в
          единственном варианте
        </p>
        <Button className={styles.customBtn}>ИСТОРИЯ БРЕНДА</Button>
      </div>
    </div>
  );
};
