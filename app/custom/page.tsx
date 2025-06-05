'use client';
import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import type { Swiper as SwiperType } from 'swiper';
import { CustomTailoring1 } from '../components/modules/CustomTailoring/CustomTailoring1';
import { CustomTailoring2 } from '../components/modules/CustomTailoring/CustomTailoring2';
import { CustomTailoring3 } from '../components/modules/CustomTailoring/CustomTailoring3';

export default function CustomPage() {
  const lastSlideRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  // ✅ обработка overflow при переходе между слайдами
  const handleSlideChange = (swiper:SwiperType ) => {
    const isLast = swiper.isEnd;

    if (isLast) {
      document.body.style.overflow = 'visible';
    } else {
      document.body.style.overflow = 'hidden';
    }
  };

  useEffect(() => {
    const lastSlide = lastSlideRef.current;
    if (!lastSlide) return;

    // ✅ при ручном скролле внутри последнего слайда — если доскроллил вверх
    const handleManualScroll = () => {
      if (!swiperRef.current) return;
      const scrollTop = lastSlide.scrollTop;

      if (scrollTop <= 0) {
        swiperRef.current.allowTouchMove = true;
        swiperRef.current.mousewheel.enable();
        document.body.style.overflow = 'hidden'; // вернули overflow
      }
    };

    lastSlide.addEventListener('touchstart', handleManualScroll);
    lastSlide.addEventListener('touchend', handleManualScroll);
    lastSlide.addEventListener('mousedown', handleManualScroll);
    lastSlide.addEventListener('mouseup', handleManualScroll);

    return () => {
      lastSlide.removeEventListener('touchstart', handleManualScroll);
      lastSlide.removeEventListener('touchend', handleManualScroll);
      lastSlide.removeEventListener('mousedown', handleManualScroll);
      lastSlide.removeEventListener('mouseup', handleManualScroll);
      document.body.style.overflow = ''; // очистка при размонтировании
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = 'hidden'; // стартовое состояние
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div>
      <Swiper
        direction="vertical"
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={{
          forceToAxis: true,
          releaseOnEdges: true,
         
        }}
        pagination={{ clickable: true }}
        modules={[Mousewheel, Pagination]}
        onSlideChange={handleSlideChange} // ✅ переключаем overflow
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="mySwiper">
        <SwiperSlide>
          <CustomTailoring1 />
        </SwiperSlide>
        <SwiperSlide>
          <CustomTailoring2 />
        </SwiperSlide>
        <SwiperSlide>
          <div
            ref={lastSlideRef}
            style={{
              height: '100vh',
              overflowY: 'auto',
              minHeight: '100vh',
              touchAction: 'auto',
              WebkitOverflowScrolling: 'touch',
            }}>
            <CustomTailoring3 />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
