'use client';
import { collectionItems } from '@/app/constants/catalog';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { useState } from 'react';
import styles from '@/app/styles/product/index.module.scss';
import { Button } from '@/app/components/elements/Button';
import Accordion from '@/app/components/modules/Accordion/Accordion';

const ProductPage = () => {
  const params = useParams();
  const id = Number(params?.id);
  const [expanded, setExpanded] = useState(false);

  const toggleDescription = () => setExpanded(!expanded);

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState('3 цвета');

  const colors = ['красный', 'синий', 'зелёный'];

  const item = collectionItems.find((item) => item.id === id);

  if (!item) return <div>Товар не найден</div>;

  return (
    <div className={styles.product}>
      <div className={styles.productTop}>
        <div className={styles.productColors}>
          <Image width={86} height={86} src={item.img} alt="collection" />
          <Image width={86} height={86} src={item.img} alt="collection" />
          <Image width={86} height={86} src={item.img} alt="collection" />
        </div>
        <Image width={526} height={720} src={item.img} alt="collection" />
        <div className={styles.productInfo}>
          <h5>{item.title}</h5>
          <h4>{item.name}</h4>
          <p>{item.price} ₽</p>
          <div className={styles.productSize}>
            <p>Размер</p>
            <div className={styles.productSizeItems}>
              <button>S</button>
              <button>M</button>
              <button>L</button>
              <button>XL</button>
            </div>
          </div>

          <h3>Осталось 4 штуки</h3>
          <Button className={styles.productBtn}>Добавить в корзину</Button>

          <div className={styles.productAvailableColors} onClick={() => setOpen(!open)}>
            <h2>БОЛЬШЕ ЦВЕТОВ</h2>
            <p>
              {selected} <Image src="/img/colors_forward.svg" width={10} height={10} alt="arrow" />
            </p>

            {open && (
              <ul className={styles.dropdownList}>
                {colors.map((color) => (
                  <li
                    key={color}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelected(color);
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
              1. Smart Luxury Price <br />
              2. Worldwide Express Shipping 24–72 hours <br />
              Unmatched Value-for-Money 14 day Returns/Exchanges Policy. <br />
              Blending innovation with timeless style, the Magnetic Field Jacket redefines outdoor
              elegance. <br />
              Crafted from a soft, matte technical shell made from recycled fishing nets, it is both
              windproof and waterproof, offering protection with a refined touch. <br />
              Inside, a cashmere-blend lining delivers lightweight comfort.
            </p>

            <button onClick={toggleDescription}>{expanded ? 'Скрыть' : 'Узнать больше'}</button>
          </div>
        </div>
      </div>
      <div className={styles.productQuestions}>
        <Accordion title="Детали">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum impedit fugiat odit,
          iste exercitationem quidem eveniet placeat quia unde temporibus cum corrupti doloremque
          quod accusamus consequuntur pariatur dolorem repudiandae sunt.
        </Accordion>
            <Accordion title="Информация о доставке">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum impedit fugiat odit,
          iste exercitationem quidem eveniet placeat quia unde temporibus cum corrupti doloremque
          quod accusamus consequuntur pariatur dolorem repudiandae sunt.
        </Accordion>
              <Accordion title="Возврат">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum impedit fugiat odit,
          iste exercitationem quidem eveniet placeat quia unde temporibus cum corrupti doloremque
          quod accusamus consequuntur pariatur dolorem repudiandae sunt.
        </Accordion>
                 <Accordion title="Отзывы">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum impedit fugiat odit,
          iste exercitationem quidem eveniet placeat quia unde temporibus cum corrupti doloremque
          quod accusamus consequuntur pariatur dolorem repudiandae sunt.
        </Accordion>
                   <Accordion title="ОПЛАТА И БЕЗОПАСНОСТЬ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum impedit fugiat odit,
          iste exercitationem quidem eveniet placeat quia unde temporibus cum corrupti doloremque
          quod accusamus consequuntur pariatur dolorem repudiandae sunt.
        </Accordion>
      </div>
    </div>
  );
};

export default ProductPage;
