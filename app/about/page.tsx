'use client';
import React, { useEffect, useRef, useState } from 'react';
import AboutSection from '../components/modules/About/AboutSection';
import AboutSection2 from '../components/modules/About/AboutSection2';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Mousewheel, Pagination } from 'swiper/modules';
import AboutSection3 from '../components/modules/About/AboutSection3';
import AboutSection4 from '../components/modules/About/AboutSection4';
import AboutSection5 from '../components/modules/About/AboutSection5';
import type { Swiper as SwiperType } from 'swiper';

export default function AboutPage() {
  const swiperRef = useRef<SwiperType | null>(null);
  const lastSlideRef = useRef<HTMLDivElement>(null);
  const [activeSwiper, setActiveSwiper] = useState(false);
  const handleSlideChange = (swiper: SwiperType) => {
    const isLast = swiper.isEnd;
    if (isLast) {
      swiper.mousewheel.disable();
      document.body.style.overflow = 'visible'; 
         swiper.allowTouchMove = false; 
    } else {
      swiper.mousewheel.enable();
      document.body.style.overflow = 'hidden';
         swiper.allowTouchMove = true; 
    }

    // если последний слайд меняем стиль круга
    if (swiper.activeIndex === swiper.slides.length - 1) {
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
        direction="vertical"
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={{ forceToAxis: true, releaseOnEdges: true }}
        pagination={{ clickable: true }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
        onSlideChange={handleSlideChange}
        onSwiper={(swiper) => (swiperRef.current = swiper)}>
        <SwiperSlide>
          <AboutSection />
        </SwiperSlide>
        <SwiperSlide>
          <AboutSection2 />
        </SwiperSlide>
        <SwiperSlide>
          <AboutSection3 />
        </SwiperSlide>
        <SwiperSlide>
          <AboutSection4 />
        </SwiperSlide>
        <SwiperSlide className="last-slide">
          <div
            ref={lastSlideRef}
            style={{
              height: '100vh',
              overflowY: 'auto',
                    minHeight: '100vh',
      touchAction: 'auto', // ✅ Разрешаем touch scroll
      WebkitOverflowScrolling: 'touch', // ✅ плавный скролл на iOS

            }}>
            {' '}
            <AboutSection5 />
          </div>
        </SwiperSlide>
      </Swiper>
      {/* <Footer/> */}
    </div>
  );
}
