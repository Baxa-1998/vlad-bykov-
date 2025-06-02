'use client';
import Image from 'next/image';
import React from 'react';

export const CurrencyModal = () => {
  const countryData = [
    {
      id: 1,
      country: 'Spain',
      currency: 'EUR',
    },
    {
      id: 2,
      country: 'America',
      currency: 'USD',
    },
    {
      id: 3,
      country: 'China',
      currency: 'CNY',
    },
    {
      id: 4,
      country: 'Russia',
      currency: 'RUB',
    },
    {
      id: 5,
      country: 'Uzbekistan',
      currency: 'UZS',
    },
  ];

  return (
    <div className="currency-modal">
      <ul className="currency-modal__list">
        {countryData.map((item) => (
          <li className="currency-modal__list__item list-reset" key={item.id}>
            <p>
              {item.country} ({item.currency})
            </p>
            <Image src={'/img/arrow-forward.svg'} width={6} height={10} alt="arrow-forward" />
          </li>
        ))}
      </ul>
    </div>
  );
};
