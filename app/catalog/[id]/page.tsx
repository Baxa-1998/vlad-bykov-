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
import { useCartAction } from '@/app/hooks/useCartAction';
import { useCartByAuth } from '@/app/hooks/useCartByAuth';
import { $cartFromLs } from '@/app/context/cart';

const ProductPage = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  // const [selectedSize, setSelectedSize] = useState<string | null>(null);
  // const [selectedColor, setSelectedColor] = useState('');
  const goods: IGoodsItemProps[] = useUnit($allGoods);
  const item = goods.find((i) => i._id === id);
  const [expanded, setExpanded] = useState(false);
    const currentCartByAuth = useCartByAuth()
  const { translations, lang } = useLang();

 


const {
  handleAddToCart,
  setSelectedSize,
  setSelectedColor,
  count,
  selectedSize,
  selectedColor,
  setCount
} = useCartAction();

const addToCart = () => {
  if (!selectedSize) {
    alert('Пожалуйста, выберите размер');
    return;
  }
  if (!selectedColor) {
    alert('Пожалуйста, выберите цвет');
    return;
  }

  setSelectedSize(selectedSize);
  setSelectedColor(selectedColor);
  handleAddToCart(count); // теперь selectedSize и selectedColor внутри хука корректные
};



  const toggleDescription = () => setExpanded(!expanded);

  const [open, setOpen] = useState(false);

 
 

  //  установка размеров если обувь или одежда
  useEffect(() => {
    if (item?.sizes) {
      if (Array.isArray(item.sizes)) {
        // для обуви
        setSelectedSize(item.sizes[0]?.toString());
      } else {
        // для одежды
  const firstAvailable = Object.entries(item.sizes).find(([ , available ]) => available);
        if (firstAvailable) {
          setSelectedSize(firstAvailable[0]);
        }
      }
    }
  }, [item]);

  useEffect(() => {
    if (item?.img) {
      if (Array.isArray(item.img)) {
        setSelectedImage(item.img[0]);
      } else {
        setSelectedImage(item.img);
      }
    }
  }, [item]);
  
  console.log(currentCartByAuth);
  

   if (!item) return <div>Товар не найден</div>;
  return (
    <div className={styles.product}>
      <div className={styles.productTop}>

   <div className={styles.productImages}>
    <div className={styles.productColors}>
  {Array.isArray(item.img) &&
    item.img.map((img) => (
      <div key={img} className={styles.colorOption}>
        {/* Кружочек — виден только на мобильных */}
        <div
          onClick={() => setSelectedImage(img)}
          className={`${styles.circle} ${selectedImage === img ? styles.active : ''}`}
        />

        {/* Миниатюра — видна только на десктопе */}
        <Image
          width={60}
          height={60}
          src={img}
          alt="collection"
          onClick={() => setSelectedImage(img)}
          className={`${styles.thumbnail} ${selectedImage === img ? styles.active : ''}`}
        />
      </div>
    ))}
</div>
  {selectedImage && <Image className={styles.productMainImg} width={526} height={720} src={selectedImage} alt="collection" />}

   </div>





      
        <div className={styles.productInfo}>
          <h5>{item.characteristics.compositions.split('/')}</h5>
          <h4>{item.name}</h4>
          <p>{item.price} ₽</p>
          <div className={styles.productSize}>
            <p>{translations[lang].productItem.size}</p>
            <div className={styles.productSizeItems}>
              {Array.isArray(item.sizes)
                ? item.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size.toString())}
                      className={`${styles.sizeButton} ${
                        selectedSize === size.toString() ? styles.selected : ''
                      }`}>
                      {size}
                    </button>
                  ))
                : Object.entries(item.sizes).map(([size, available]) => (
                    <button
                      key={size}
                      disabled={!available}
                      onClick={() => available && setSelectedSize(size)}
                      className={`${styles.sizeButton} ${
                        selectedSize === size ? styles.selected : ''
                      } ${!available ? styles.disabled : ''}`}>
                      {size.toUpperCase()}
                    </button>
                  ))}
            </div>
          </div>

          <h3>
            {translations[lang].productItem.inStock} {item.inStock}
          </h3>
          <Button onClick={addToCart} className={styles.productBtn}>Добавить в корзину</Button>

          <div className={styles.productAvailableColors} onClick={() => setOpen(!open)}>
            <h2>БОЛЬШЕ ЦВЕТОВ</h2>
            <p>
              {`${
                selectedColor !== ''
                  ? selectedColor
                  : item.characteristics.colors.length + ' цвета '
              }`}{' '}
              <Image src="/img/colors_forward.svg" width={10} height={10} alt="arrow" />
            </p>

            {open && (
              <ul className={styles.dropdownList}>
                {item.characteristics.colors.map((color) => (
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
            <p className={expanded ? styles.expanded : styles.collapsed}>{item.description}</p>

            <button onClick={toggleDescription}>{expanded ? 'Скрыть' : 'Узнать больше'}</button>
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
    </div>
  );
};

export default ProductPage;
