'use client'
import React from 'react';
import styles from '@/app/styles/main-page/index.module.scss';
import Image from 'next/image';
import { Button } from '@/app/components/elements/Button';
import { useUnit } from 'effector-react';
import {  $menProducts, $newProducts,  $womenProducts } from '@/app/context/goods';
import { useLang } from '@/app/hooks/useLang';
import { IGoodsItemProps } from '@/app/types/modules';
import { Link, useTransitionRouter } from 'next-view-transitions';

export const NewCollection = () => {
  const [collectionSelected, setCollectionSelected] = React.useState(0);
  const { translations, lang } = useLang();
  const newGoods: IGoodsItemProps[] = useUnit($newProducts);
  const menGoods: IGoodsItemProps[] = useUnit($menProducts);
  const womenGoods: IGoodsItemProps[] = useUnit($womenProducts);

  const router = useTransitionRouter();

  
 

  const titles = [
    translations[lang].category.news,
    translations[lang].category.men,
    translations[lang].category.girls,
  ];
  const handleCollectionClick = (index: number) => {
    setCollectionSelected(index);
  };
  return (
    <div className={styles.newCollection}>
      <div className={styles.newCollectionWrapper}>
        <div className={styles.newCollectionInner}>
          <div>
            {titles.map((title, index) => (
              <h3
                onClick={() => handleCollectionClick(index)}
                key={index}
                className={`${styles.newCollectionTitle} ${
                  index === collectionSelected ? styles.titleActive : ''
                }`}>
                {title}
              </h3>
            ))}
          </div>
        </div>
        <div className={styles.newCollectionItems}>
          {(collectionSelected === 0
            ? newGoods
            : collectionSelected === 1
            ? menGoods
            : womenGoods
          ).map((item) => (
            <Link key={item._id} href={`/catalog/${item._id}`}>
            <div key={item._id} className={styles.newCollectionItem}>
              <Image width={300} height={300} src={item.img[0]} alt="collection" />
              <span className={styles.newCollectionItemTitle}>
                {item.characteristics.compositions.split('/')}
              </span>
              <h4 className={styles.newCollectionItemName}>{item.characteristics.collection}</h4>
              <p className={styles.newCollectionItemPrice}>{item.price} ₽</p>
            </div>    
            </Link>
          
          ))}
        </div>
        <div className={styles.newCollectionBtnWrapper}>
          <Link
              onClick={(e) => {
                          e.preventDefault();
                          router.push('/catalog');
                        }}
          href={'/catalog'}> <Button className={styles.newCollectionBtn}>{translations[lang].category.button}</Button></Link>
         
        </div>
      </div>
    </div>
  );
};
