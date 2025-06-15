'use client';
import React from 'react';
import styles from '@/app/styles/main-page/index.module.scss';

import { Button } from '@/app/components/elements/Button';
import { useLang } from '@/app/hooks/useLang';
import Link from 'next/link';
export const Category = () => {
  const { lang, translations } = useLang(); 
  const categories = [
  { slug: 'men', label: translations[lang].catalog.men },
  { slug: 'women', label: translations[lang].catalog.girls },
  { slug: 'shoes', label: translations[lang].catalog.shoes },
  { slug: 'outerwear', label: translations[lang].catalog.top_clothing },
   { slug: 'cloth', label: translations[lang].catalog.cloth },
  { slug: 'accessories', label: translations[lang].catalog.accessories },
 
]
    return (
    <div className={styles.category}>
      <div className={styles.categoryTop}>
        <div className={styles.categoryTopItem}>
          <Link    href={`/category/${categories[0].slug}`}>
                  <h3>{categories[0].label}</h3>
          <Button className={styles.categoryTopBtn}>{translations[lang].catalog.button}</Button>
          </Link>
  
        </div>
        <div className={styles.categoryTopItem}>
          <Link href={`/category/${categories[1].slug}`}>
                   <h3>{categories[1].label}</h3>
          <Button className={styles.categoryTopBtn}>{translations[lang].catalog.button}</Button>
          </Link>
 
        </div>
      </div>
      <div className={styles.categoryBottom}>
        <div className={styles.categoryBottomItem}>
          <Link href={`/category/${categories[2].slug}`}>
                    <h3>{categories[2].label}</h3>
          <Button className={styles.categoryBottomBtn}>{translations[lang].catalog.button}</Button>
          </Link>

        </div>
        <div className={styles.categoryBottomItem}>
    <Link href={`/category/${categories[3].slug}`}>
                    <h3>{categories[3].label}</h3>
          <Button className={styles.categoryBottomBtn}>{translations[lang].catalog.button}</Button>
          </Link>
        </div>
        <div className={styles.categoryBottomItem}>
              <Link href={`/category/${categories[4].slug}`}>
                    <h3>{categories[4].label}</h3>
          <Button className={styles.categoryBottomBtn}>{translations[lang].catalog.button}</Button>
          </Link>
        </div>
        <div className={styles.categoryBottomItem}>
         <Link href={`/category/${categories[5].slug}`}>
                    <h3>{categories[5].label}</h3>
          <Button className={styles.categoryBottomBtn}>{translations[lang].catalog.button}</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
