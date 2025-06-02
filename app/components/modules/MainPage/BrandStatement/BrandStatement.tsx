import React from 'react';
import styles from '@/app/styles/main-page/index.module.scss';
import Image from 'next/image';
import { Title } from '@/app/components/elements/Title';

export const BrandStatement = () => {
  return (
    <div className={styles.brandStatement}>
     {/* <div className={styles.brandStatementImg}> 
   <Image width={0} height={0} src={'img/statement-bg.svg'} alt="brandStatement" />
     </div> */}
  
   
      
 
      <div className={styles.brandStatementWrapper}>
        <Title className={styles.brandStatementTitle}>ЭТО НЕ ПРОСТО ВЕЩИ</Title>
      
        <p className={styles.brandStatementSubtitle}>
          Сделано в Италии. Экологичные материалы. <br /> Доставка по всему миру.
        </p>
      </div>
    </div>
  );
};
