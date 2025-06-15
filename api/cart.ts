import { createEffect } from 'effector';

import toast from 'react-hot-toast';
import api from '@/api/apiInstance';
import { ICartItem } from '@/app/types/cart';

export interface IAddProductToCartFx {
  productId: string;
  category: string;
  count: number;
  size: string;
  color: string;
  clientId: string;
  jwt?: string;
  setSpinner: (loading: boolean) => void;
}

export const addProductToCartFx = createEffect(
  async ({ setSpinner, ...data }: IAddProductToCartFx) => {
    try {
      setSpinner(true);
      const res = await api.post('/api/cart/add', data);

      if (res.data?.error) {
        toast.error(res.data.error);
        return;
      }

      toast.success('Товар добавлен в корзину');
      return res.data as { newCartItem: ICartItem };
    } catch (error) {
      toast.error((error as Error).message);
    } finally {
      setSpinner(false);
    }
  }
);