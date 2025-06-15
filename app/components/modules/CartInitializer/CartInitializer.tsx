'use client';
import { useEffect } from 'react';
import { setCartFromLS } from '@/app/context/cart';
import { ICartItem }     from '@/app/types/cart';

export const CartInitializer = () => {
  useEffect(() => {
    const raw = localStorage.getItem('cart');
    if (raw) {
      try {
        setCartFromLS(JSON.parse(raw) as ICartItem[]);
      } catch {}
    }
  }, []);
  return null;
};