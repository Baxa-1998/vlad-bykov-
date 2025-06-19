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
  return (
    <div className={styles.catalogItem}>
      <Image width={300} height={300} src={item.img[0]} alt="collection" />
      <h5>{item.characteristics.compositions.split('/')}</h5>
      <h4>{item.characteristics.collection}</h4>
      <p>
        {convertedPrice.toFixed(0)} {currencySymbol}
      </p>
    </div>
  );
};
