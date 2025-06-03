'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Hero } from '../../modules/MainPage/Hero/Hero';

import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

import { Mousewheel, Pagination } from 'swiper/modules';

import { Partners } from '../../modules/MainPage/Partners/Partners';
import { NewCollection } from '../../modules/MainPage/NewCollection/NewCollection';
import { HistoryBrand } from '../../modules/MainPage/HistoryBrand/HistoryBrand';
import { Category } from '../../modules/MainPage/Category/Category';
import { BrandStatement } from '../../modules/MainPage/BrandStatement/BrandStatement';
import { JoinClub } from '../../modules/MainPage/JoinClub/JoinClub';
import { useMediaQuery } from '@/app/hooks/useMediaQuery';


export default function MainPage() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeSwiper, setActiveSwiper] = useState(false); 
  const lastSlideRef = useRef<HTMLDivElement>(null);

  const isDesktop = useMediaQuery(1280); // ← здесь

  const handleReachEnd = () => {
    if (swiperRef.current) {
      swiperRef.current.mousewheel.disable();
      document.body.style.overflow = 'visible';
    }
  };

  const handleSlideChange = (swiper: SwiperType) => {
    const isLastSlide = swiper.isEnd;
    console.log(isLastSlide);
    
  if (isLastSlide) {
  swiper.mousewheel.disable();
  document.body.style.overflow = 'auto';
  swiper.el.classList.add('swiper-disabled-scroll');
} else {
  swiper.mousewheel.enable();
  document.body.style.overflow = 'hidden';
  swiper.el.classList.remove('swiper-disabled-scroll');
}

    // дополнительная логика 
    if (swiper.activeIndex === 2 || swiper.activeIndex === 6) {
      setActiveSwiper(true);
    } else {
      setActiveSwiper(false);
    }
  };


    // Следим за scroll в последнем слайде
    useEffect(() => {
      // запрещаем скролл при загрузке
      document.body.style.overflow = 'hidden';
  
      const lastSlide = lastSlideRef.current;
      if (!lastSlide) return;
  
      const handleScroll = () => {
        if (!swiperRef.current) return;
  
        // Если пользователь доскроллил вверх на последнем слайде
        if (lastSlide.scrollTop === 0) {
          swiperRef.current.mousewheel.enable();
          swiperRef.current.slideTo(swiperRef.current.slides.length - 2);
          document.body.style.overflow = 'hidden'; // ❌ снова запрет скролла
        }
      };
  
      lastSlide.addEventListener('scroll', handleScroll);
      return () => {
        lastSlide.removeEventListener('scroll', handleScroll);
        document.body.style.overflow = ''; // очистка
      };
    }, []);


  return (
    <div className={activeSwiper ? 'on-third-slide' : ''}>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={handleSlideChange}
        direction={'vertical'}
        onReachEnd={handleReachEnd}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={{ forceToAxis: true, releaseOnEdges: true }}
        pagination={{ clickable: true }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper">
        <SwiperSlide>
          <Hero />
        </SwiperSlide>
        <SwiperSlide>
          <Partners />
        </SwiperSlide>
        <SwiperSlide>
          <NewCollection />
        </SwiperSlide>
        <SwiperSlide>
          <HistoryBrand />
        </SwiperSlide>
        <SwiperSlide>
          <Category />
        </SwiperSlide>
        <SwiperSlide >
         
          <BrandStatement />
        </SwiperSlide>

        {!isDesktop && (
          <SwiperSlide>
            <div
                 ref={lastSlideRef}
            style={{
              height: '100vh',
              overflowY: 'auto',
            }}
            >
 <JoinClub />
            </div>
           
          </SwiperSlide>
        )}
      </Swiper>
  
    </div>
  );
}
