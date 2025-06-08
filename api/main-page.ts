import { createEffect } from 'effector';
import api from './apiInstance';

export const getNewProductsFX = createEffect(async () => {
  const { data } = await api.get('/api/goods/new');

  return data; 
});
