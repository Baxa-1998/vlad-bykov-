
import React from 'react'
import styles from '@/app/styles/order/styles.module.scss'
import { Order } from '../components/modules/Order/Order'
import { useUnit } from 'effector-react';
import { $cart } from '../context/cart';
export default function OrderPage ()  {

  return (
    <section className={styles.order}>
        <Order/>
         
    </section>
  )
}
