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
  const fourthSlideRef = useRef<HTMLDivElement>(null);
  // хук изменение ширины
  const isMedia540 = useMediaQuery(540);

  const handleReachEnd = () => {
    if (swiperRef.current) {
      swiperRef.current.mousewheel.disable();
      document.body.style.overflow = 'visible';
    }
  };

  const handleSlideChange = (swiper: SwiperType) => {
    const { activeIndex, isEnd } = swiper;

    console.log('activeIndex:', activeIndex);
    console.log('isEnd:', isEnd);

    // === Условия для 4-го слайда или последнего слайда ===
    if ((activeIndex === 4 && isMedia540) || isEnd) {
      swiper.mousewheel.disable();
      swiper.allowTouchMove = false;
      document.body.style.overflow = 'visible';
      swiper.el.classList.remove('swiper-disabled-scroll');
    } else {
      swiper.mousewheel.enable();
      swiper.allowTouchMove = true;
      document.body.style.overflow = 'hidden';
      swiper.el.classList.add('swiper-disabled-scroll');
    }

    // === Дополнительная пользовательская логика ===
    if (activeIndex === 2 || activeIndex === 6) {
      setActiveSwiper(true);
    } else {
      setActiveSwiper(false);
    }
  };

  // Следим за scroll в последнем слайде
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const lastSlide = lastSlideRef.current;
    const fourthSlide = fourthSlideRef.current;
    if (!lastSlide || !fourthSlide) return;

    const handleLastSlideScroll = () => {
      if (!swiperRef.current) return;

      if (lastSlide.scrollTop === 0) {
        swiperRef.current.mousewheel.enable();
        swiperRef.current.slideTo(swiperRef.current.slides.length - 2);
        document.body.style.overflow = 'hidden';
      }
    };

    const handleFourthSlideScroll = () => {
      if (!swiperRef.current) return;

      const maxScroll = fourthSlide.scrollHeight - fourthSlide.clientHeight;
      const scrollTop = fourthSlide.scrollTop;

      if (scrollTop >= maxScroll) {
        swiperRef.current.mousewheel.enable();
        swiperRef.current.allowTouchMove = true;
        swiperRef.current.slideTo(5);
        document.body.style.overflow = 'hidden';
      }

      if (scrollTop === 0) {
        swiperRef.current.mousewheel.enable();
        swiperRef.current.allowTouchMove = true;
        swiperRef.current.slideTo(3);
        document.body.style.overflow = 'hidden';
      }
    };

    lastSlide.addEventListener('scroll', handleLastSlideScroll);

    if (isMedia540) {
      fourthSlide.addEventListener('scroll', handleFourthSlideScroll);
    }

    return () => {
      lastSlide.removeEventListener('scroll', handleLastSlideScroll);

      if (isMedia540) {
        fourthSlide.removeEventListener('scroll', handleFourthSlideScroll);
      }

      document.body.style.overflow = '';
    };
  }, [isMedia540]);

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
          <div
            ref={fourthSlideRef}
            style={{
              height: '100vh',
              overflowY: 'auto',
              background: '#ffff',
            }}>
            <Category />
          </div>

          {/* <Category /> */}
        </SwiperSlide>
        <SwiperSlide>
          <BrandStatement />
        </SwiperSlide>

        <SwiperSlide>
          <div
            ref={lastSlideRef}
            style={{
              height: '100vh',
              overflowY: 'auto',
              background: '#ffff',
            }}>
            <JoinClub />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
