'use client';

import { $location, changeCountryManually } from '@/app/context/country';
import { $currencyModal, closeCurrencyModal, toggleCurrencyModal } from '@/app/context/modals';
import { useMediaQuery } from '@/app/hooks/useMediaQuery';
import { useUnit } from 'effector-react';
import Image from 'next/image';



interface CountryOption {
  country: string;
  currency: {
    name: string;
    code: string;
    symbol: string;
  };
}


const COUNTRY_OPTIONS: CountryOption[] = [
  {
    country: 'Россия',
    currency: {
      name: 'Российский рубль',
      code: 'RUB',
      symbol: '₽',
    },
  },
  {
    country: 'США',
    currency: {
      name: 'Доллар США',
      code: 'USD',
      symbol: '$',
    },
  },
  {
    country: 'Еврозона',
    currency: {
      name: 'Евро',
      code: 'EUR',
      symbol: '€',
    },
  },
  {
    country: 'Великобритания',
    currency: {
      name: 'фунт',
      code: 'GBP',
      symbol: '£',
    },
  },
 
];

export const CountryCurrencySelector = () => {
  const location = useUnit($location);
 const isMedia540 = useMediaQuery(540);
  const currencyModal = useUnit($currencyModal);
  const hadnleOpenCurrencyModal = () => {
    toggleCurrencyModal(); 

    
  };

  const handleSelect = (option: CountryOption) => {
    changeCountryManually({
      country_name: option.country,
      currency: option.currency,
    });
    closeCurrencyModal();
  };

  return (
    <div className={`currency-modal ${isMedia540 ? 'currency-modal-active' : ''}`}>
      <button className={isMedia540 ? "hide" : '' }  onClick={hadnleOpenCurrencyModal}>
        {location?.country_name || 'Выбор страны'} ({location?.currency.code}{' '}
        {location?.currency.symbol || ''})
      </button>

      {currencyModal && (
        <div
       className={`currency-wrapper ${isMedia540 ? 'currency-wrapper-active' : ''}`}
          >
          {COUNTRY_OPTIONS.map((option) => (
            <div
              key={option.currency.code}
            className='currency-item'
              onClick={() => handleSelect(option)}>
                <p>
                   {option.country} ({option.currency.symbol})
                </p>
                 <Image src={'/img/arrow-forward.svg'} width={6} height={10} alt="arrow-forward" />
             
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
