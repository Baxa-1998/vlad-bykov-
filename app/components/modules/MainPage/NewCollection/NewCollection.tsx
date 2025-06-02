import React from 'react';
import styles from '@/app/styles/main-page/index.module.scss';
import Image from 'next/image';
import { Button } from '@/app/components/elements/Button';
export const NewCollection = () => {
  const [collectionSelected, setCollectionSelected] = React.useState(0);
  const collectionItems = [
    {
      id: 1,
      title: 'Кожа крокодила',
      name: 'Мюли Himalaya',
      img: '/img/collections/Collection1.svg',
      price: 10045,
    },
    {
      id: 2,
      title: 'Кожа крокодила',
      name: 'Мюли Himalaya',
      img: '/img/collections/Collection2.svg',
      price: 10045,
    },
    {
      id: 3,
      title: 'Кожа крокодила',
      name: 'Мюли Himalaya',
      img: '/img/collections/Collection3.svg',
      price: 10045,
    },
    {
      id: 4,
      title: 'Кожа крокодила',
      name: 'Мюли Himalaya',
      img: '/img/collections/Collection2.svg',
      price: 10045,
    },
    {
      id: 5,
      title: 'Кожа крокодила',
      name: 'Мюли Himalaya',
      img: '/img/collections/Collection2.svg',
      price: 10045,
    },
  ];

  const titles = ['НОВЫЕ КОЛЕКЦИИ', 'ДЛЯ МУЖЧИН', 'ДЛЯ ДЕВУШЕК'];
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
          {collectionItems.map((item) => (
            <div key={item.id} className={styles.newCollectionItem}>
              <Image width={300} height={300} src={item.img} alt="collection" />
              <span className={styles.newCollectionItemTitle}>{item.title}</span>
              <h4 className={styles.newCollectionItemName}>{item.name}</h4>
              <p className={styles.newCollectionItemPrice}>{item.price} ₽</p>
            </div>
          ))}
        </div>
        <div className={styles.newCollectionBtnWrapper}>
          <Button className={styles.newCollectionBtn}>В КАТАЛОГ</Button>
        </div>
      </div>
    </div>
  );
};
