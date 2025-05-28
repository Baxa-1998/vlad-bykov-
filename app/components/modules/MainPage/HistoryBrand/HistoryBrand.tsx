import React from 'react';
import styles from '@/app/styles/main-page/index.module.scss';
import Image from 'next/image';
import { Button } from '@/app/components/elements/Button';

export const HistoryBrand = () => {
  return (
    <div className={styles.historyBrand}>
      <div className={styles.historyBrandWrapper}>
        <h1 className={styles.historyBrandTitle}>РОСКОШЬ У НАС В КРОВИ</h1>
        <p className={styles.historyBrandSubtitle}>
          Искусство создания вещей, которые изумляют не <br /> только качеством, но и стилем{' '}
        </p>
        <Button className={styles.historyBrandBtn}>ИСТОРИЯ БРЕНДА</Button>
      </div>
    </div>
  );
};
