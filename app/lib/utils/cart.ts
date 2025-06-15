import { IGoodsItemProps } from '@/app/types/modules';
import { ICartItem } from '@/app/types/cart';
import { addProductToCart, setCartFromLS } from '@/app/context/cart';
import { idGenerator } from './common';
import toast from 'react-hot-toast';

export const addItemToCart = (
  product: IGoodsItemProps,
  setSpinner: (loading: boolean) => void,
  count: number,
  selectedSize: string,
  selectedColor: string
) => {
  const cartFromLS: ICartItem[] = JSON.parse(localStorage.getItem('cart') || '[]');

  const existingItem = cartFromLS.find(
    (item) => item.productId === product._id && item.size === selectedSize
  );

  let updatedCart: ICartItem[];

  if (existingItem) {
    updatedCart = cartFromLS.map((item) =>
      item.productId === product._id && item.size === selectedSize
        ? { ...item, count: item.count + count }
        : item
    );
  } else {
    const newItem: ICartItem = {
      clientId: idGenerator(),
      productId: product._id,
      name: product.name,
      img: product.img?.[0] || '',
      category: product.category,
      type: product.type,
      price: product.price,
      count,
      compositions: product.characteristics?.compositions || '',
      size: selectedSize,
      color: selectedColor || product.characteristics?.colors?.[0] || '',
      inStock: product.inStock,
    };
    updatedCart = [...cartFromLS, newItem];
    addProductToCart(newItem); // обновляем Effector
  }

  localStorage.setItem('cart', JSON.stringify(updatedCart));
  setCartFromLS(updatedCart);

  toast.success('Товар добавлен в корзину');
};

export function incrementCartItem(productId: string, size: string) {
  const cart: ICartItem[] = JSON.parse(localStorage.getItem('cart') || '[]');
  const updated = cart.map(item =>
    item.productId === productId && item.size === size
      ? { ...item, count: item.count + 1 }
      : item
  );
  localStorage.setItem('cart', JSON.stringify(updated));
  setCartFromLS(updated);
}

/**
 * Уменьшить count (и удалить, если count упал до 0) в LS и в Effector‑сторе
 */
export function decrementCartItem(productId: string, size: string) {
  const cart: ICartItem[] = JSON.parse(localStorage.getItem('cart') || '[]');
  const updated = cart
    .map(item =>
      item.productId === productId && item.size === size
        ? { ...item, count: item.count - 1 }
        : item
    )
    .filter(item => item.count > 0);
  localStorage.setItem('cart', JSON.stringify(updated));
  setCartFromLS(updated);
}