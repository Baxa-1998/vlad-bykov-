import React from 'react';
import styles from '@/app/styles/main-page/index.module.scss';
import Image from 'next/image';

export const BrandStatement = () => {
  return (
    <div className={styles.brandStatement}>
      <Image width={0} height={0} src={'img/statement1.svg'} alt="brandStatement" />
      <div className={styles.brandStatementWrapper}>
        <h1 className={styles.brandStatementTitle}>ЭТО НЕ ПРОСТО ВЕЩИ</h1>
        <p className={styles.brandStatementSubtitle}>
          Сделано в Италии. Экологичные материалы. Доставка по всему миру.
        </p>
      </div>
    </div>
  );
};
