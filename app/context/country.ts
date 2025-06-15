import { createEffect, createEvent, createStore } from 'effector';

export interface LocationData {
  country_name: string;
  currency: {
    name: string;
    code: string;
    symbol: string;
  };
}

// === Эффект получения данных ===
export const fetchLocationFx = createEffect(async (): Promise<LocationData> => {
  const res = await fetch('https://ipapi.co/json/');
  const data = await res.json();

  const location: LocationData = {
    country_name: data.country_name,
    currency: {
      name: data.currency_name,
      code: data.currency,
      symbol: data.currency_symbol,
    },
  };

  // Сохраняем в localStorage
  localStorage.setItem('user_location', JSON.stringify(location));

  return location;
});

// === Ивент загрузки из localStorage ===
export const loadLocationFromStorage = createEvent<LocationData>();

// === Стор ===
export const $location = createStore<LocationData | null>(null)
  .on(fetchLocationFx.doneData, (_, data) => data)
  .on(loadLocationFromStorage, (_, data) => data);

// === Инициализация ===
export const initLocation = () => {
  const fromLS = localStorage.getItem('user_location');

  if (fromLS) {
    try {
      const parsed: LocationData = JSON.parse(fromLS);
      loadLocationFromStorage(parsed);
    } catch (e) {
      // если localStorage повреждён, заново загружаем
      fetchLocationFx();
    }
  } else {
    fetchLocationFx();
  }
};