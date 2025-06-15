import { useUnit } from 'effector-react';
import React, { useState } from 'react';
import { $currentProduct } from '../context/goods';

import { isItemInList } from '../lib/utils/common';
import { addCartItemToLS, addItemToCart } from '../lib/utils/cart';

export const useCartAction = () => {
  const product = useUnit($currentProduct);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [addToCartSpinner, setAddToCartSpinner] = useState(false);

  const currentCartItems = currentCartByAuth.filter((item) => item.productId === product._id);
  const isProductInCart = isItemInList(currentCartByAuth, product._id);

  const existingItem = currentCartByAuth.find(
    (item) =>
      item.productId === product._id &&
      item.size === selectedSize &&
      item.color === selectedColor
  );

  const [count, setCount] = useState(+(existingItem?.count ?? 1));

  const handleAddToCart = (countFromCounter?: number) => {
    const finalCount = countFromCounter ?? 1;
    const authRaw = localStorage.getItem('auth');
    const auth = authRaw ? JSON.parse(authRaw) : null;

    if (existingItem) {
      const newCount =
        Number(existingItem.count) !== finalCount
          ? finalCount
          : Number(existingItem.count) + 1;

      if (auth?.accessToken) {
        addItemToCart(product, setAddToCartSpinner, newCount, selectedSize, selectedColor);
      } else {
     addCartItemToLS(product, selectedSize,  selectedColor, newCount);
      }

      return;
    }

    // Если товара с такой size и color ещё нет
    if (auth?.accessToken) {
      addItemToCart(product, setAddToCartSpinner, finalCount, selectedSize, selectedColor);
    } else {
      addCartItemToLS(product, selectedSize,  selectedColor, countFromCounter || 1);
    }
  };
  // я получаю пустой обьект
    console.log('CURRENT PRODUCT:', product);

  return {
    product,
    selectedSize,
    setSelectedSize,
    selectedColor,
    setSelectedColor,
    count,
    setCount,
    addToCartSpinner,
    currentCartItems,
    handleAddToCart,
    isProductInCart,
    currentCartByAuth,
  };
};