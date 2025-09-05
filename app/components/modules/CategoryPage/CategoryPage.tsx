'use client';
import styles from '@/app/styles/category/index.module.scss';
import { IGoodsItemProps } from '@/app/types/modules';
import { Title } from '../../elements/Title';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';
import { Pagination } from '../../elements/Pagination';
import { useLang } from '@/app/hooks/useLang';
import { $currencyRates, $location } from '@/app/context/country';
import { useUnit } from 'effector-react';
import { convertPrice } from '@/app/lib/utils/convert-price';

type TCategoryPageProps = {
  category: string;
  products: IGoodsItemProps[];
  label: string;
};
export default function CategoryPage({ products,  label }: TCategoryPageProps) {
  const {  lang } = useLang();
  
  const location = useUnit($location);
  const rates = useUnit($currencyRates);

  const { currencyCode, currencySymbol } = useMemo(() => {
    return {
      currencyCode: location?.currency.code || 'RUB',
      currencySymbol: location?.currency.symbol || '₽',
    };
  }, [location]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedItems = products.slice(startIndex, endIndex);

  const totalPages = Math.ceil(products.length / itemsPerPage);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);
  return (
    <div className={styles.categoryPage}>
      <div className={styles.categoryWrapper}>
        <Title> {label}</Title>
        {products.length === 0 ? (
          <p>Нет товаров в этой категории.</p>
        ) : (
          <div className={styles.categoryItems}>
            {paginatedItems.map((product) => {
                  const convertedPrice = convertPrice(product.price, rates, currencyCode);
              return (
              <Link key={product._id} href={`/catalog/${product._id}`}>
                <div key={product._id} className={styles.newCollectionItem}>
                  <Image
                    width={300}
                    height={300}
                     src={product.img[0].url}
                    // src={'/img/collections/Collection1.svg'}
                    alt="collection"
                  />
                  {/* <span className={styles.newCollectionItemTitle}>
                    {product.content[lang].characteristics.compositions.split('/')}
                  </span> */}
                  <h4 className={styles.newCollectionItemName}>
                    {product.content[lang].name}
                  </h4>
                  <p className={styles.newCollectionItemPrice}> {convertedPrice.toFixed(0)} {currencySymbol}</p>
                </div>
              </Link>
         );
          })}
          </div>
        )}
        <div className={styles.categoryPagination}>
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
}
