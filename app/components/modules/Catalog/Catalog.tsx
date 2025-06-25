import React from 'react';
import styles from '@/app/styles/catalog/index.module.scss';
import Image from 'next/image';
import { IGoodsItemProps } from '@/app/types/modules';

type ICatalogProps = {
  item: IGoodsItemProps;
  convertedPrice: number;
  currencySymbol: string;
};

export const Catalog = ({ item, convertedPrice, currencySymbol }: ICatalogProps) => {
  // Пытаемся взять URL первого изображения
 // альтернативный текст

  return (
    <div className={styles.catalogItem}>
     
        <Image
          src={item.img[0]?.url}
          width={300}
          height={300}
          alt={'collection item'}
        />
   

      <h5>{item.characteristics.compositions.split('/').join(', ')}</h5>
      <h4>{item.characteristics.collection}</h4>
      <p>
        {convertedPrice.toFixed(0)} {currencySymbol}
      </p>
    </div>
  );
};