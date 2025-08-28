'use client'
import React, { useState } from 'react';
import styles from '@/app/styles/catalog/index.module.scss';
import Image from 'next/image';
import { IGoodsItemProps } from '@/app/types/modules';
import { useLang } from '@/app/hooks/useLang';

type ICatalogProps = {
  item: IGoodsItemProps;
  convertedPrice: number;
  currencySymbol: string;
};

export const Catalog = ({ item, convertedPrice, currencySymbol }: ICatalogProps) => {
  // Пытаемся взять URL первого изображения
 // альтернативный текст
   const [isLoading, setIsLoading] = useState(true);
   const { lang } = useLang();
  //  console.log(item);
   

  return (
    <div className={styles.catalogItem}>
     
        <Image
          src={item.img[0]?.url}
          // src={'/img/collections/Collection1.svg'}
         
          width={224}
          height={340}
          alt={'collection item'}
                  onLoadingComplete={() => setIsLoading(false)}
        style={{

          opacity: isLoading ? 0 : 1,
          transition: 'opacity 0.3s ease-in-out',
        }}

        />
   

      <h5>{item.content[lang]?.characteristics?.compositions?.split('/').join(', ')}</h5>
      <h4>{item.content[lang].characteristics.collection}</h4>
      <p>
        {convertedPrice.toFixed(0)} {currencySymbol}
      </p>
    </div>
  );
};