'use client';
import React from 'react';
import styles from '@/app/styles/main-page/index.module.scss';
import Image from 'next/image';
import { Button } from '@/app/components/elements/Button';
import { useUnit } from 'effector-react';
import { $menProducts, $newProducts, $womenProducts } from '@/app/context/goods';
import { useLang } from '@/app/hooks/useLang';
import { IGoodsItemProps } from '@/app/types/modules';
import { Link, useTransitionRouter } from 'next-view-transitions';
import { $currencyRates, $location } from '@/app/context/country';
import { convertPrice } from '@/app/lib/utils/convert-price';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
export const NewCollection = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [collectionSelected, setCollectionSelected] = React.useState(0);
  const { translations, lang } = useLang();
  const newGoods: IGoodsItemProps[] = useUnit($newProducts);
  const menGoods: IGoodsItemProps[] = useUnit($menProducts);
  const womenGoods: IGoodsItemProps[] = useUnit($womenProducts);



  const router = useTransitionRouter();
  const location = useUnit($location);
  const rates = useUnit($currencyRates);

  const { currencyCode, currencySymbol } = React.useMemo(() => {
    return {
      currencyCode: location?.currency.code || 'RUB',
      currencySymbol: location?.currency.symbol || '₽',
    };
  }, [location]);

  // const convertedPrice = convertPrice(items, rates, currencyCode);

  // useEffect(() => {
  //   console.log('Location loaded:', location);
  //   console.log('Currency symbol:', location?.currency.symbol);
  // }, [location]);
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
          ).map((item) => {
            const convertedPrice = convertPrice(item.price, rates, currencyCode);
                const langContent = item.content?.[lang];
            return (
              <Link key={item._id} href={`/catalog/${item._id}`}>
                <div className={styles.newCollectionItem}>
                  {isLoading && (
                    <Skeleton
                      width={300}
                      height={300}
                      style={{ position: 'absolute', top: 0, left: 0 }}
                    />
                  )}
                  <Image
                    width={300}
                    height={300}
                    src ={item.img[0]?.url}
             
                    alt="collection"
                    onLoadingComplete={() => setIsLoading(false)}
                    style={{
                      opacity: isLoading ? 0 : 1,
                      transition: 'opacity 0.3s ease-in-out',
                    }}
                  />
                  <span className={styles.newCollectionItemTitle}>
                           {langContent?.characteristics?.compositions}
                  </span>
                  <h4 className={styles.newCollectionItemName}>
                     {langContent?.name}
                  </h4>
                  <p className={styles.newCollectionItemPrice}>
                 
                    {convertedPrice.toFixed(0)} {currencySymbol}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>


        <div className={styles.newCollectionBtnWrapper}>
          <Link
            onClick={(e) => {
              e.preventDefault();
              router.push('/catalog');
            }}
            href={'/catalog'}>
            {' '}
            <Button className={styles.newCollectionBtn}>
              {translations[lang].category.button}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
