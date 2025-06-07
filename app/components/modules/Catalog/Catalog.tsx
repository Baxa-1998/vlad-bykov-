import React from 'react';
import styles from '@/app/styles/catalog/index.module.scss';
import Image from 'next/image';
import { ICatalogProps } from '@/app/types/modules';

interface ICatalogItemProps {
  item: ICatalogProps;
}

export const Catalog = ({ item }: ICatalogItemProps) => {
  return (
    <div className={styles.catalogItem}>
      <Image width={300} height={300} src={item.img} alt="collection" />
      <h5>{item.title}</h5>
      <h4>{item.name}</h4>
      <p>{item.price} ₽</p>
    </div>
  );
};
