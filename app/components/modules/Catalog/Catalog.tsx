import React from 'react';
import styles from '@/app/styles/catalog/index.module.scss';
import Image from 'next/image';
import {  IGoodsItemProps } from '@/app/types/modules';



export const Catalog = ({ item }: { item: IGoodsItemProps }) => {
  return (
    <div className={styles.catalogItem}>
      <Image width={300} height={300} src={item.img[0]} alt="collection" />
      <h5>{item.characteristics.compositions.split('/')}</h5>
      <h4>{item.characteristics.collection}</h4>
      <p>{item.price} ₽</p>
    </div>
  );
};
