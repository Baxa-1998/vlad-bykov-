// app/context/cart.ts
import { createEvent, createStore } from 'effector';
import { ICartItem } from '@/app/types/cart';

// 1) События
export const addProductToCart = createEvent<ICartItem>();
export const setCartFromLS     = createEvent<ICartItem[]>();
export const increaseCount     = createEvent<{ productId: string; size: string }>();
export const decreaseCount     = createEvent<{ productId: string; size: string }>();

// 2) Стор корзины
export const $cart = createStore<ICartItem[]>([])
  .on(addProductToCart, (state, item) => {
    const exists = state.find(i => i.productId === item.productId && i.size === item.size);
    if (exists) {
      return state.map(i =>
        i.productId === item.productId && i.size === item.size
          ? { ...i, count: i.count + item.count }
          : i
      );
    }
    return [...state, item];
  })
  .on(setCartFromLS, (_, items) => items)
  .on(increaseCount, (state, { productId, size }) =>
    state.map(i =>
      i.productId === productId && i.size === size
        ? { ...i, count: i.count + 1 }
        : i
    )
  )
  .on(decreaseCount, (state, { productId, size }) =>
    state
      .map(i =>
        i.productId === productId && i.size === size
          ? { ...i, count: i.count - 1 }
          : i
      )
      .filter(i => i.count > 0)
  );

// 3) Авто‑инициализация из localStorage (только в браузере)
if (typeof window !== 'undefined') {
  const raw = localStorage.getItem('cart');
  if (raw) {
    try {
      const items = JSON.parse(raw) as ICartItem[];
      setCartFromLS(items);
    } catch (e) {
      console.error('Ошибка при чтении корзины из localStorage:', e);
    }
  }
}