import { createEffect } from 'effector';
import api from './apiInstance';

export const getNewProductsFX = createEffect(async () => {
  const { data } = await api.get('/api/goods/new');

  return data; 
});

export const getMenProductsFX = createEffect(async () => {
  const { data } = await api.get('/api/goods/men');

  return data; 
});

export const getWomenProductsFX = createEffect(async () => {
  const { data } = await api.get('/api/goods/women');

  return data; 
});

export const getAllGoodsFX = createEffect(async () => {
  const { data } = await api.get('/api/goods/goods');

  return data; 
});


export const getShoesProductsFX = createEffect(async () => {
  const { data } = await api.get('/api/goods/shoes');

  return data; 
});