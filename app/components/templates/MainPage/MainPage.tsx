'use client';
import React, { useRef, useState } from 'react';
import { Hero } from '../../modules/MainPage/Hero/Hero';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Mousewheel, Pagination } from 'swiper/modules';
import Footer from '../../modules/Footer/Footer';
import { Partners } from '../../modules/MainPage/Partners/Partners';
import { NewCollection } from '../../modules/MainPage/NewCollection/NewCollection';
import { HistoryBrand } from '../../modules/MainPage/HistoryBrand/HistoryBrand';
import { Category } from '../../modules/MainPage/Category/Category';
import { BrandStatement } from '../../modules/MainPage/BrandStatement/BrandStatement';
import { JoinClub } from '../../modules/MainPage/JoinClub/JoinClub';

export default function MainPage() {
  const swiperRef = useRef<any>(null);
  const [activeSwiper, setActiveSwiper] = useState(false);
 const handleSlideChange = (swiper: any) => {
  // Проверяем, последний ли слайд
  const isLastSlide = swiper.activeIndex === swiper.slides.length - 1;

  // if (isLastSlide) {
  //       document.body.style.overflow = 'visible'
  // } else {
  //   document.body.style.overflow = 'hidden'
  // }

  // Если всё ещё нужно логика с 2 и 6 индексом — можно оставить:
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
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={{ forceToAxis: true, releaseOnEdges: true }} // ✅ ВАЖНО
        pagination={{
          clickable: true,
        }}
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
        <SwiperSlide><BrandStatement/></SwiperSlide>
        <SwiperSlide>
       <JoinClub/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
