'use client';

import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import styles from '@/app/styles/product/index.module.scss';
import { Button } from '@/app/components/elements/Button';
import Accordion from '@/app/components/modules/Accordion/Accordion';
import { useUnit } from 'effector-react';
import { $allGoods } from '@/app/context/goods';
import { IGoodsItemProps } from '@/app/types/modules';
import { useLang } from '@/app/hooks/useLang';

import { addItemToCart } from '@/app/lib/utils/cart';
import { openCartPopup } from '@/app/context/modals';
import Link from 'next/link';
import { convertPrice } from '@/app/lib/utils/convert-price';
import { $currencyRates, $location } from '@/app/context/country';

const ProductPage = () => {
  // тут я получаю конкретный продукт и его свойства
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const location = useUnit($location);

  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState('');
  const goods: IGoodsItemProps[] = useUnit($allGoods);
  // получаю рандомные 5 товаров
  const randomGoods = goods.sort(() => Math.random() - 0.5).slice(0, 5);

  // item это конкретный продукт которые находит в goods по его id
  const item = goods.find((i) => i._id === id);
  const [expanded, setExpanded] = useState(false);

  const { translations, lang } = useLang();
  const [count] = useState(1);

  const addToCart = () => {
    if (!item) {
      alert(translations[lang].alerts.loading_item);
      return;
    }

    if (!selectedSize) {
      alert(translations[lang].alerts.choose_size);
      return;
    }

    if (!selectedColor) {
      alert(translations[lang].alerts.choose_color);
      return;
    }

    addItemToCart(item, lang, count, selectedSize, selectedColor);
    console.log(selectedColor);

    openCartPopup();
  };

  const toggleDescription = () => setExpanded(!expanded);

  const [open, setOpen] = useState(false);
  const rates = useUnit($currencyRates);

  const { currencyCode, currencySymbol } = React.useMemo(() => {
    return {
      currencyCode: location?.currency.code || 'USD',
      currencySymbol: location?.currency.symbol || '$',
    };
  }, [location]);

  const convertedPrice = convertPrice(item?.price ?? 0, rates, currencyCode);

  //  установка размеров если обувь или одежда
  useEffect(() => {
    if (item?.sizes) {
      if (Array.isArray(item.sizes)) {
        // для обуви
        setSelectedSize(item.sizes[0]?.toString());
      } else {
        // для одежды
        const firstAvailable = Object.entries(item.sizes).find(([, available]) => available);
        if (firstAvailable) {
          setSelectedSize(firstAvailable[0]);
        }
      }
    }
  }, [item]);

  useEffect(() => {
    if (item?.img) {
      if (Array.isArray(item.img)) {
        setSelectedImage(item.img[0].url);
      } else {
        setSelectedImage(item.img);
      }
    }
  }, [item]);

  if (!item) return <div>{translations[lang].productItem.not_fount}</div>;
 
  
  return (
    <div className={styles.product}>
      <div className={styles.productTop}>
        <div className={styles.productImages}>
          <div className={styles.productColors}>
            {Array.isArray(item.img) &&
              item.img.map((img, idx) => (
                <div key={idx} className={styles.colorOption}>
                  {/* Кружочек — виден только на мобильных */}
                  <div
                    onClick={() => setSelectedImage(img.url)}
                    className={`${styles.circle} ${selectedImage === img.url ? styles.active : ''}`}
                  />

                  {/* Миниатюра — видна только на десктопе */}
                  <Image
                    width={60}
                    height={60}
                    src={img.url}
                    // src={'/img/collections/Collection1.svg'}
                    alt={'collection'}
                    // alt="collection"
                    onClick={() => setSelectedImage(img.url)}
                    className={`${styles.thumbnail} ${
                      selectedImage === '/img/collections/Collection1.svg' ? styles.active : ''
                    }`}
                  />
                </div>
              ))}
          </div>
          {selectedImage && (
            <Image
              className={styles.productMainImg}
              width={526}
              height={720}
              src={selectedImage}
              // src={'/img/collections/Collection1.svg'}
              alt="collection"
            />
          )}
        </div>

        <div className={styles.productInfo}>
          {/* <h5>{item.content[lang].characteristics.compositions.split('/')}</h5> */}
          <h4>{item.content[lang]?.name}</h4>
          <p>
            {convertedPrice.toFixed(0)} {currencySymbol}
          </p>
<div className={styles.productSize}>
  <p>{translations[lang].productItem.size}</p>
  <div className={styles.productSizeItems}>
    {Object.entries(item.sizes).map(([size, available]) => (
      <div key={size} className={styles.sizeWrapper}>
        <button
          disabled={!available}
          onClick={() => available && setSelectedSize(size)}
          className={`${styles.sizeButton} ${
            selectedSize === size ? styles.selected : ''
          } ${!available ? styles.disabled : ''}`}
        >
          {size.toUpperCase()}
        </button>
        {size.toUpperCase() === 'C' && available && (
          <div className={styles.tooltip}>{translations[lang].productItem.custom}</div>
        )}
      </div>
    ))}
  </div>
</div>

          {/*   <h3>
            {translations[lang].productItem.inStock} {item.inStock}
          </h3>     */}
          <Button onClick={addToCart} className={styles.productBtn}>
            {translations[lang].productItem.add_to_cart}
          </Button>

          <div className={styles.productAvailableColors} onClick={() => setOpen(!open)}>
            <h2>{translations[lang].productItem.colors}</h2>
            <p>
              {`${
                selectedColor !== ''
                  ? selectedColor
                  : item.content[lang].characteristics.colors.length +
                    translations[lang].productItem.colors
              }`}{' '}
              <Image src="/img/colors_forward.svg" width={10} height={10} alt="arrow" />
            </p>

            {open && (
              <ul className={styles.dropdownList}>
                {item.content[lang].characteristics.colors.map((color) => (
                  <li
                    key={color}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedColor(color);
                      setOpen(false);
                    }}>
                    {color}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className={styles.productDescription}>
            <p className={expanded ? styles.expanded : styles.collapsed}>
              {item.content[lang].description}
            </p>

            <button onClick={toggleDescription}>
              {expanded ? translations[lang].productItem.hide : translations[lang].productItem.show}
            </button>
          </div>
        </div>
      </div>
      <div className={styles.productQuestions}>
        <Accordion title={translations[lang].productItem.question1}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum impedit fugiat odit,
          iste exercitationem quidem eveniet placeat quia unde temporibus cum corrupti doloremque
          quod accusamus consequuntur pariatur dolorem repudiandae sunt.
        </Accordion>
        <Accordion title={translations[lang].productItem.question2}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum impedit fugiat odit,
          iste exercitationem quidem eveniet placeat quia unde temporibus cum corrupti doloremque
          quod accusamus consequuntur pariatur dolorem repudiandae sunt.
        </Accordion>
        <Accordion title={translations[lang].productItem.question3}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum impedit fugiat odit,
          iste exercitationem quidem eveniet placeat quia unde temporibus cum corrupti doloremque
          quod accusamus consequuntur pariatur dolorem repudiandae sunt.
        </Accordion>
        <Accordion title={translations[lang].productItem.question4}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum impedit fugiat odit,
          iste exercitationem quidem eveniet placeat quia unde temporibus cum corrupti doloremque
          quod accusamus consequuntur pariatur dolorem repudiandae sunt.
        </Accordion>
        <Accordion title={translations[lang].productItem.question5}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum impedit fugiat odit,
          iste exercitationem quidem eveniet placeat quia unde temporibus cum corrupti doloremque
          quod accusamus consequuntur pariatur dolorem repudiandae sunt.
        </Accordion>
      </div>
      <div className={styles.recommendation}>
        <h3>{translations[lang].productItem.recomendation}</h3>
        <div className={styles.recommendationItems}>
          {randomGoods.map((item) => {
            const convertedPrice = convertPrice(item?.price ?? 0, rates, currencyCode);
            const langContent = item.content?.[lang];

            return (
              <Link key={item._id} href={`/catalog/${item._id}`}>
                <div className={styles.recommendationItem}>
                  <Image
                    // src={'/img/collections/Collection1.svg'}
                    src={item.img[0].url}
                    width={220}
                    height={340}
                    alt={'recommendation-img'}
                  />
                  <div className={styles.recommendationItemInfo}>
                    {/* <p className={styles.composition}>
                      {langContent?.characteristics?.compositions}
                    </p> */}
                    <p className={styles.name}> {langContent?.name}</p>
                    <p className={styles.price}>
                      {convertedPrice.toFixed(0)} {currencySymbol}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <Link href="/catalog">
          <Button className={styles.recommendationBtn}>
            {' '}
            {translations[lang].category.button}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProductPage;
