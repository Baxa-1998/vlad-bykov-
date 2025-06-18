
import React from 'react'
import styles from '@/app/styles/order/styles.module.scss'
import { Order } from '../components/modules/Order/Order'

export default function OrderPage ()  {

  return (
    <section className={styles.order}>
        <Order/>
         
    </section>
  )
}
