'use client';
import React, { useEffect, useMemo, useState } from 'react';
import styles from '@/app/styles/catalog/index.module.scss';
import { Catalog } from '../components/modules/Catalog/Catalog';
import Link from 'next/link';

import { useLang } from '../hooks/useLang';
import { IGoodsItemProps } from '../types/modules';
import { useUnit } from 'effector-react';
import { $allGoods } from '../context/goods';
import { Pagination } from '../components/elements/Pagination';
import { $currencyRates, $location } from '../context/country';
import { convertPrice } from '../lib/utils/convert-price';
type Subcategory = 'all' | 'cloth' | 'accessories' | 'shoes';

export default function CatalogPage() {
  const goods: IGoodsItemProps[] = useUnit($allGoods);
  const location = useUnit($location);
  const rates = useUnit($currencyRates);
  const { translations, lang } = useLang();

  const [collectionSelected, setCollectionSelected] = useState(0); // 0 - Новинки, 1 - Мужчины, 2 - Женщины
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  const { currencyCode, currencySymbol } = useMemo(() => {
    return {
      currencyCode: location?.currency.code || 'RUB',
      currencySymbol: location?.currency.symbol || '₽',
    };
  }, [location]);

  // Основные коллекции
  const isNew = goods.filter((item) => item.isNew === true);


  // Вычисляем текущую коллекцию с учётом пола и подкатегории
const currentCollection = useMemo(() => {
  if (collectionSelected === 0) return isNew;

  const type = collectionSelected === 1 ? 'men' : 'women';

  return goods.filter(
    (item) =>
      item.type === type &&
      (selectedSubcategory && selectedSubcategory !== 'all'
        ? item.category === selectedSubcategory
        : true)
  );
}, [collectionSelected, selectedSubcategory, goods]);

  const subcategories = ['all','cloth', 'accessories', 'shoes']; // добавь такие категории в товары

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedItems = currentCollection.slice(startIndex, endIndex);
  const totalPages = Math.ceil(currentCollection.length / itemsPerPage);

  const titles = [
    translations[lang].category.news,
    translations[lang].category.men,
    translations[lang].category.girls,
  ];

  const handleCollectionClick = (index: number) => {
    setCollectionSelected(index);
    setSelectedSubcategory(null); // сброс подкатегории
    setCurrentPage(1);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  return (
    <section className={styles.catalog}>
      <div className={styles.catalogWrapper}>
        <div className={styles.catalogHeading}>
          <div>
            {titles.map((title, index) => (
              <h3
                key={index}
                className={index === collectionSelected ? styles.active : ''}
                onClick={() => handleCollectionClick(index)}>
                {title}
              </h3>
            ))}
          </div>
        </div>

        {/* Подкатегории */}
    {collectionSelected !== 0 && (
  <div className={styles.subcategories}>
    {subcategories.map((sub) => (
      <button
        key={sub}
        className={
          selectedSubcategory === sub || (!selectedSubcategory && sub === 'all')
            ? styles.activeSub
            : ''
        }
        onClick={() => setSelectedSubcategory(sub)}
      >
        {translations[lang].subcategory?.[sub as Subcategory] || sub
}
      </button>
    ))}
  </div>
)}

        {/* Товары */}
        <div className={styles.catalogItems}>
          {paginatedItems.map((item) => {
            const convertedPrice = convertPrice(item.price, rates, currencyCode);
            return (
              <Link href={`/catalog/${item._id}`} key={item._id}>
                <Catalog
                  currencySymbol={currencySymbol}
                  convertedPrice={convertedPrice}
                  item={item}
                />
              </Link>
            );
          })}
        </div>

        {/* Пагинация */}
        <div className={styles.catalogPagination}>
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </section>
  );
}
