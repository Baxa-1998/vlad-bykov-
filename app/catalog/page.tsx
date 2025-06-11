'use client';
import React, { useEffect } from 'react';
import styles from '@/app/styles/catalog/index.module.scss';
import { Catalog } from '../components/modules/Catalog/Catalog';
import Link from 'next/link';
import { collectionItems } from '../constants/catalog';

import { useLang } from '../hooks/useLang';

export default function CatalogPage() {
  const [collectionSelected, setCollectionSelected] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 15;
  const { translations, lang } = useLang();

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
  const totalPages = Math.ceil(collectionItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = collectionItems.slice(startIndex, startIndex + itemsPerPage);

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

        <div className={styles.catalogItems}>
          {currentItems.map((item) => (
            <Link href={`/catalog/${item.id}`} key={item.id}>
              <Catalog key={item.id} item={item} />
            </Link>
          ))}
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
