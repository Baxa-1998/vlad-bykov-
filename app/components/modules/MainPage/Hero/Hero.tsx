import { Button } from '@/app/components/elements/Button';
import { useLang } from '@/app/hooks/useLang';
import React from 'react';

export const Hero = () => {
  const { lang, translations } = useLang();
  return (
    <div className="hero">
      <div className="hero__wrapper">
        <h1 className="hero__title">{translations[lang].hero.title}</h1>
        <p className="hero__subtitle">{translations[lang].hero.subtitle}</p>
        <Button className="hero__btn">{translations[lang].hero.button}</Button>
      </div>
    </div>
  );
};
