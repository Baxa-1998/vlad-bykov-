import { createEffect, createEvent, createStore, sample } from 'effector';
const fallbackSymbols: Record<string, string> = {
  UZS: "so'm",
  USD: "$",
  EUR: "€",
  RUB: "₽",
  GBP: "£",
  CNY: "¥",
  KZT: "₸",
 
};
export interface LocationData {
  country_name: string;
  currency: {
    name: string;
    code: string;
    symbol: string;
  };
}

export interface CurrencyRates {
  base: string;
  rates: Record<string, number>;
}

// === Эффект получения страны и валюты пользователя по IP ===
export const fetchLocationFx = createEffect(async (): Promise<LocationData> => {
  const res = await fetch('https://ipapi.co/json/');
  const data = await res.json();

  const currencyCode = data.currency;

  const location: LocationData = {
    country_name: data.country_name,
    currency: {
      name: data.currency_name,
      code: currencyCode,
      symbol: data.currency_symbol || fallbackSymbols[currencyCode] || currencyCode, // <= fallback
    },
  };

  localStorage.setItem('user_location', JSON.stringify(location));
  return location;
});

// === Эффект получения курса валют ===
export const fetchCurrencyRatesFx = createEffect(async (currencyCode: string) => {
  const res = await fetch(`/api/currency?base=${currencyCode}`);
  if (!res.ok) {
   
    return { rates: {} }; // безопасная заглушка
  }

  const data = await res.json();

  return data;
});

// === Ивенты ===
export const loadLocationFromStorage = createEvent<LocationData>();
export const changeCountryManually = createEvent<LocationData>();

// === Сторы ===
export const $location = createStore<LocationData | null>(null)
  .on(fetchLocationFx.doneData, (_, data) => data)
  .on(loadLocationFromStorage, (_, data) => data)
  .on(changeCountryManually, (_, data) => {
    localStorage.setItem('user_location', JSON.stringify(data));
    return data;
  });

export const $currencyRates = createStore<CurrencyRates | null>(null)
  .on(fetchCurrencyRatesFx.doneData, (_, data) => data);

// === При изменении валюты → получаем курс валют ===
sample({
  source: $location,
  clock: $location.updates,
  filter: (loc): loc is LocationData => loc !== null,
  fn: (loc: LocationData) => loc.currency.code,
  target: fetchCurrencyRatesFx,
});
// === Инициализация ===
export const initLocation = () => {
  const fromLS = localStorage.getItem('user_location');

  if (fromLS) {
    try {
      const parsed: LocationData = JSON.parse(fromLS);
      loadLocationFromStorage(parsed);
    } catch {
      fetchLocationFx();
    }
  } else {
    fetchLocationFx();
  }
};