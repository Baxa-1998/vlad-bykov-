// price.utils.ts

import { CurrencyRates } from "@/app/context/country";




export const convertPrice = (
  basePrice: number, // цена из базы (в USD)
  currencyRates: CurrencyRates | null,
  targetCurrencyCode: string
): number => {
  if (!currencyRates) return basePrice;

  const rateForTarget = currencyRates.rates[targetCurrencyCode];

  if (!rateForTarget) return basePrice;

  // Переводим USD → целевая валюта
  const converted = basePrice * rateForTarget;

  return Math.round(converted * 100) / 100;
};