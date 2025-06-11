'use client';
import { Effect, createDomain, sample } from 'effector';
import { Gate, createGate } from 'effector-react';

import { getAllGoodsFX, getMenProductsFX, getNewProductsFX, getShoesProductsFX, getWomenProductsFX } from '@/api/main-page';


const goods = createDomain();

export const MainPageGate = createGate();

const goodsStoreInstance = (effect: Effect<void, [], Error>) =>
  goods
    .createStore([])
    .on(effect.done, (_, { result }) => result)
    .on(effect.fail, (_, { error }) => {
      console.log(error.message);
    });

const goodSampleInstance = (effect: Effect<void, [], Error>, gate: Gate<unknown>) =>
  sample({
    clock: gate.open,
    target: effect,
  });

export const $newProducts = goodsStoreInstance(getNewProductsFX);
export const $menProducts = goodsStoreInstance(getMenProductsFX);
export const $womenProducts = goodsStoreInstance(getWomenProductsFX);
export const $allGoods = goodsStoreInstance(getAllGoodsFX);
export const $shoesProducts = goodsStoreInstance(getShoesProductsFX);

goodSampleInstance(getNewProductsFX, MainPageGate);
goodSampleInstance(getMenProductsFX, MainPageGate);
goodSampleInstance(getWomenProductsFX, MainPageGate);
goodSampleInstance(getAllGoodsFX, MainPageGate);
goodSampleInstance(getShoesProductsFX, MainPageGate);
