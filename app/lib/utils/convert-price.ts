// price.utils.ts

import { CurrencyRates } from "@/app/context/country";


export const convertPrice = (
  basePrice: number, // цена в рублях
  currencyRates: CurrencyRates | null,
  targetCurrencyCode: string
): number => {
  if (!currencyRates) return basePrice;

  const rates = currencyRates.rates;
  const baseCurrency = currencyRates.base; // обычно 'EUR' в твоём случае

  const rateForRUB = rates['RUB'];
  const rateForTarget = rates[targetCurrencyCode];

  if (!rateForRUB || !rateForTarget) return basePrice;

  const priceInBase = basePrice / rateForRUB;
  const converted = priceInBase * rateForTarget;

  return Math.round(converted * 100) / 100;
};