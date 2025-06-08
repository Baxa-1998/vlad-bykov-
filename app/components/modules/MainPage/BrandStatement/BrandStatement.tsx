import React from 'react';
import styles from '@/app/styles/main-page/index.module.scss';

import { Title } from '@/app/components/elements/Title';
import { useLang } from '@/app/hooks/useLang';

export const BrandStatement = () => {
  const {translations, lang} = useLang();
  return (
    <div className={styles.brandStatement}>
     {/* <div className={styles.brandStatementImg}> 
   <Image width={0} height={0} src={'img/statement-bg.svg'} alt="brandStatement" />
     </div> */}
  
   
      
 
      <div className={styles.brandStatementWrapper}>
        <Title className={styles.brandStatementTitle}>{translations[lang].brandStatement.title}</Title>
      
        <p className={styles.brandStatementSubtitle}>
        {translations[lang].brandStatement.subtitle}
        </p>
      </div>
      
    </div>
  );
};
