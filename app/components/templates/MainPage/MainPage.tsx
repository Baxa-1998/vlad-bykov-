'use client';
import React, { useRef, useState } from 'react';
import { Hero } from '../../modules/MainPage/Hero/Hero';

import { Swiper, SwiperSlide } from 'swiper/react';

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

  const swiperRef = useRef<any>(null);
  const [activeSwiper, setActiveSwiper] = useState(false);

  const isDesktop = useMediaQuery(1280); // ← здесь

  const handleReachEnd = () => {
    if (swiperRef.current) {
      swiperRef.current.mousewheel.disable();
      document.body.style.overflow = 'visible';
    }
  };

  const handleSlideChange = (swiper: any) => {
    const isLastSlide = swiper.activeIndex === swiper.slides.length - 1;

    if (isLastSlide) {
      swiper.mousewheel.disable(); // отключаем прокрутку Swiper
      document.body.style.overflow = 'visible'; // включаем scroll для всего документа
    } else {
      swiper.mousewheel.enable(); // снова включаем Swiper scroll

      document.body.style.overflow = 'hidden';
    }

    // дополнительная логика, если нужна
    if (swiper.activeIndex === 2 || swiper.activeIndex === 6) {
      setActiveSwiper(true);
    } else {
      setActiveSwiper(false);
    }
  };

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
        <SwiperSlide>
          <BrandStatement />
        </SwiperSlide>

        {!isDesktop && (
          <SwiperSlide>
            <JoinClub />
          </SwiperSlide>
        )}
      </Swiper>
      {/* <Footer/> */}
    </div>
  );
}
