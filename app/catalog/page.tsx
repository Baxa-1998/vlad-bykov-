'use client';
import React, { useEffect } from 'react';
import styles from '@/app/styles/catalog/index.module.scss';
import { Catalog } from '../components/modules/Catalog/Catalog';
import Link from 'next/link';

import { useLang } from '../hooks/useLang';
import { IGoodsItemProps } from '../types/modules';
import { useUnit } from 'effector-react';
import { $allGoods } from '../context/goods';

export default function CatalogPage() {
  const goods: IGoodsItemProps[] = useUnit($allGoods);
  console.log(goods);

  const [collectionSelected, setCollectionSelected] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 15;
  const { translations, lang } = useLang();

  const men = goods.filter((item) => item.type === 'men');
  const women = goods.filter((item) => item.type === 'women');
  const isNew = goods.filter((item) => item.isNew === true);


  const titles = [
    translations[lang].category.news,
    translations[lang].category.men,
    translations[lang].category.girls,
  ];

  const handleCollectionClick = (index: number) => {
    setCollectionSelected(index);
    setCurrentPage(1); // сброс на первую страницу при переключении коллекции
  };

  // Пагинация
  const totalPages = Math.ceil(goods.length / itemsPerPage);



  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  return (
    <section className={styles.catalog}>
      <div className={styles.catalogWrapper}>
        <div className={styles.catalogHeading}>
          {titles.map((title, index) => (
            <h3
              key={index}
              className={index === collectionSelected ? styles.active : ''}
              onClick={() => handleCollectionClick(index)}>
              {title}
            </h3>
          ))}
        </div>
        {/* товары */}
        <div className={styles.catalogItems}>
          {(collectionSelected === 0 ? isNew : collectionSelected === 1 ? men : women).map(
            (item) => (
              <Link href={`/catalog/${item._id}`} key={item._id}>
                <Catalog key={item._id} item={item} />
              </Link>
            ),
          )}
        </div>

        <div className={styles.catalogPagination}>
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={currentPage === index + 1 ? styles.activePage : ''}>
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
