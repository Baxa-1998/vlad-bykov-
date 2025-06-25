import React from 'react';
import styles from '@/app/styles/success/index.module.scss';
import Image from 'next/image';
import { Button } from '../components/elements/Button';
import Link from 'next/link';

export default function SuccessPage() {
  return (
    <section className={styles.success}>
      <div className={styles.successWrapper}>
        <Image src={'/img/check.svg'} width={144} height={106} alt={'success'} />
        <h3>
          Заказ успешно <br /> оформлен
        </h3>
        <Link href={'/catalog'}>
          <Button>В КАТАЛОГ ТОВАРОВ</Button>
        </Link>
      </div>
    </section>
  );
}
