// location.model.ts
import { createEffect, createStore } from 'effector';

export interface LocationData {
  country_name: string;
  currency: {
    name: string;
    code: string;
    symbol: string;
  };
}

// Эффект получения данных
export const fetchLocationFx = createEffect(async (): Promise<LocationData> => {
  const res = await fetch('https://ipapi.co/json/');
  const data = await res.json();

  return {
    country_name: data.country_name,
    currency: {
      name: data.currency_name,
      code: data.currency,
      symbol: data.currency_symbol,
    },
  };
});

// Стор
export const $location = createStore<LocationData | null>(null).on(
  fetchLocationFx.doneData,
  (_, data) => data
);