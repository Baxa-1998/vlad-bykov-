'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import type { Swiper as SwiperType } from 'swiper';

import { CustomTailoring1 } from '../components/modules/CustomTailoring/CustomTailoring1';
import { CustomTailoring2 } from '../components/modules/CustomTailoring/CustomTailoring2';
import { CustomTailoring3 } from '../components/modules/CustomTailoring/CustomTailoring3';

export default function CustomPage() {
  const swiperRef = useRef<SwiperType | null>(null);
  const lastSlideRef = useRef<HTMLDivElement>(null);
  const [activeSwiper, setActiveSwiper] = useState(false);

  const handleSlideChange = (swiper: SwiperType) => {
    const isLast = swiper.isEnd;
    if (isLast) {
      // swiper.mousewheel.disable();
      document.body.style.overflow = 'visible';
      swiper.allowTouchMove = false;
    } else {
      swiper.mousewheel.enable();
      document.body.style.overflow = 'hidden';
      swiper.allowTouchMove = true;
    }

    if (swiper.activeIndex === swiper.slides.length - 1) {
      setActiveSwiper(true);
    } else {
      setActiveSwiper(false);
    }
  };

useEffect(() => {
  const lastSlide = lastSlideRef.current;
  if (!lastSlide || !swiperRef.current) return;

  const swiper = swiperRef.current;

  // Обработчик прокрутки внутри последнего слайда
  const handleScroll = () => {
    const scrollTop = lastSlide.scrollTop;

    if (scrollTop > 0) {
      // Пока есть куда скроллить вверх — блокируем свайпер и разрешаем прокрутку внутри блока
      swiper.mousewheel.disable();
      swiper.allowTouchMove = false;
      document.body.style.overflow = 'visible';
    } else {
      // Доскроллил до верха — включаем свайпер обратно
      swiper.mousewheel.enable();
      swiper.allowTouchMove = true;
      document.body.style.overflow = 'hidden';
    }
  };

  // Обработчик wheel, чтобы на десктопах тоже блокировать свайпер, пока есть скролл внутри блока
  const handleWheel = (e: WheelEvent) => {
    const scrollTop = lastSlide.scrollTop;
    const isScrollingUp = e.deltaY < 0;

    if (isScrollingUp && scrollTop > 0) {
      // Если пытаемся скроллить вверх, но внутри есть куда прокрутить, блокируем свайпер
      swiper.mousewheel.disable();
      swiper.allowTouchMove = false;
      document.body.style.overflow = 'visible';
      e.stopPropagation();
    }
  };

  lastSlide.addEventListener('scroll', handleScroll);
  lastSlide.addEventListener('wheel', handleWheel, { passive: false });

  // При переходе на последний слайд сразу блокируем свайпер и даём прокрутку
  if (swiper.isEnd) {
    // swiper.mousewheel.disable();
    swiper.allowTouchMove = false;
    document.body.style.overflow = 'visible';
  } else {
    swiper.mousewheel.enable();
    swiper.allowTouchMove = true;
    document.body.style.overflow = 'hidden';
  }

  return () => {
    lastSlide.removeEventListener('scroll', handleScroll);
    lastSlide.removeEventListener('wheel', handleWheel);
    document.body.style.overflow = '';
  };
}, []);

  return (
    <div className={activeSwiper ? 'on-last-slide' : ''}>
      <Swiper
        direction="vertical"
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={{ forceToAxis: true, releaseOnEdges: true }}
        pagination={{ clickable: true }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
        onSlideChange={handleSlideChange}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        <SwiperSlide>
          <CustomTailoring1 />
        </SwiperSlide>
        <SwiperSlide>
          <CustomTailoring2 />
        </SwiperSlide>
        <SwiperSlide className="last-slide">
          <div
            ref={lastSlideRef}
            style={{
              height: '100vh',
              overflowY: 'auto',
              minHeight: '100vh',
              touchAction: 'auto',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            <CustomTailoring3 />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}