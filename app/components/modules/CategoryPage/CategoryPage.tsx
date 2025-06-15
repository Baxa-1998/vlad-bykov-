'use client';
import styles from '@/app/styles/category/index.module.scss';
import { IGoodsItemProps } from '@/app/types/modules';
import { Title } from '../../elements/Title';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Pagination } from '../../elements/Pagination';

type TCategoryPageProps = {
  category: string;
  products: IGoodsItemProps[];
  label: string;
};
export default function CategoryPage({ products, category, label }: TCategoryPageProps) {
  console.log(category);
  console.log(products);
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
          {paginatedItems.map((product) => (
            <Link key={product._id} href={`/catalog/${product._id}`}>
            <div key={product._id} className={styles.newCollectionItem}>
              <Image width={300} height={300} src={product.img[0]} alt="collection" />
              <span className={styles.newCollectionItemTitle}>
                {product.characteristics.compositions.split('/')}
              </span>
              <h4 className={styles.newCollectionItemName}>{product.characteristics.collection}</h4>
              <p className={styles.newCollectionItemPrice}>{product.price} ₽</p>
            </div>    
            </Link>
          ))}
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
