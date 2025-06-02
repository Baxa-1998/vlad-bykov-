import React from 'react';
import styles from '@/app/styles/main-page/index.module.scss';

import { Button } from '@/app/components/elements/Button';
export const Category = () => {
  return (
    <div className={styles.category}>
      <div className={styles.categoryTop}>
        <div className={styles.categoryTopItem}>
          <h3>ДЛЯ МУЖЧИН</h3>
          <Button className={styles.categoryTopBtn}>ПОДРОБНЕЕ</Button>
        </div>
        <div className={styles.categoryTopItem}>
          <h3>ДЛЯ ДЕВУШЕК</h3>
          <Button className={styles.categoryTopBtn}>ПОДРОБНЕЕ</Button>
        </div>
      </div>
      <div className={styles.categoryBottom}>
        <div className={styles.categoryBottomItem}>
          <h3>ОБУВЬ</h3>
          <Button className={styles.categoryBottomBtn}>ПОДРОБНЕЕ</Button>
        </div>
        <div className={styles.categoryBottomItem}>
          <h3>ВВЕРХНАЯ ОДЕЖДА</h3>
          <Button className={styles.categoryBottomBtn}>ПОДРОБНЕЕ</Button>
        </div>
        <div className={styles.categoryBottomItem}>
          <h3>ОДЕЖДА</h3>
          <Button className={styles.categoryBottomBtn}>ПОДРОБНЕЕ</Button>
        </div>
        <div className={styles.categoryBottomItem}>
          <h3>АКСЕССУАРЫ</h3>
          <Button className={styles.categoryBottomBtn}>ПОДРОБНЕЕ</Button>
        </div>
      </div>
    </div>
  );
};
