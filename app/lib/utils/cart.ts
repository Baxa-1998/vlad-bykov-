import { ICartItem } from '@/app/types/cart';
import { IGoodsItemProps } from '@/app/types/modules';
import { idGenerator } from './common';
import { addProductToCart, setCartFromLS } from '@/app/context/cart';
import toast from 'react-hot-toast';

export const addItemToCart = (
  product: IGoodsItemProps,
  setSpinner: (arg0: boolean) => void,
  count: number,
  selectedSize = '',
  selectedColor = '',
) => {
  const authRaw = localStorage.getItem('auth');
  const auth = authRaw ? JSON.parse(authRaw) : null;

  const clientId = addCartItemToLS(product, selectedSize, selectedColor, count, false);
  addProductToCart({
    jwt: auth?.accessToken || '',
    setSpinner,
    productId: product._id,
    category: product.category,
    count,
    size: selectedSize,
    color: selectedColor,
    clientId,
  });
};
export const addCartItemToLS = (
  product: IGoodsItemProps,
  selectedSize: string,
  selectedColor: string,
  count: number,
  withToast = true,
) => {
  let cartFromLS: ICartItem[] = JSON.parse(localStorage.getItem('cart') as string);

  const clientId = idGenerator();

  if (!cartFromLS) {
    cartFromLS = [];
  }
  const existingItem = cartFromLS.find(
    (item) => item.productId === product._id && item.size === selectedSize,
  );
  if (existingItem) {
    const updateCount = existingItem.count !== count ? count : +existingItem.count + 1;

    const updatedCart = cartFromLS.map((item) =>
      item.productId === existingItem.productId && item.size === selectedSize
        ? { ...existingItem, count: updateCount }
        : item,
    );

    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCartFromLS(updatedCart);
    toast.success('Добавлено в корзину');
    return existingItem.clientId;
  }

  const cart = [
    ...cartFromLS,
    {
      clientId,
      productId: product._id,
      name: product.name,
      price: product.price,
      img: product.img?.[0] || '',
      category: product.category,
      type: product.type,
      size: selectedSize,
      color: selectedColor || (product.characteristics?.colors?.[0] ?? ''),
      inStock: product.inStock,
      count,
    },
  ];
  localStorage.setItem('cart', JSON.stringify(cart));
  setCartFromLS(cart as ICartItem[]);
  withToast && toast.success('Добавлено в корзину');
  return clientId;
};
