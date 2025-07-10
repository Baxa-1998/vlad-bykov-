import { Button } from '@/app/components/elements/Button';
import { Title } from '@/app/components/elements/Title';
import { useLang } from '@/app/hooks/useLang';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export const Hero = () => {
  const { lang, translations } = useLang();
  const [zoomOut, setZoomOut] = useState(false);

  useEffect(() => {
 
    const timer = setTimeout(() => {
      setZoomOut(true);
    }, 1500); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`hero ${zoomOut ? 'zoom-out' : ''}`}>
      <div className="hero__wrapper">
        <Title className="hero__title">{translations[lang].hero.title}</Title>

        <p className="hero__subtitle">{translations[lang].hero.subtitle}</p>
        <Link href={'/catalog'}>
          <Button className="hero__btn">{translations[lang].hero.button}</Button>
        </Link>
      </div>
    </div>
  );
};
