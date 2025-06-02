import React from 'react';
import styles from '@/app/styles/main-page/index.module.scss';

import { Button } from '@/app/components/elements/Button';
import { Title } from '@/app/components/elements/Title';

export const HistoryBrand = () => {
  return (
    <div className={styles.historyBrand}>
      <div className={styles.historyBrandWrapper}>
        <Title className={styles.historyBrandTitle}>РОСКОШЬ У НАС В КРОВИ</Title>
        {/* <h1 className={styles.historyBrandTitle}></h1> */}
        <p className={styles.historyBrandSubtitle}>
          Искусство создания вещей, которые изумляют не <br /> только качеством, но и стилем{' '}
        </p>
        <Button className={styles.historyBrandBtn}>ИСТОРИЯ БРЕНДА</Button>
      </div>
    </div>
  );
};
