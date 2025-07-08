'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Mousewheel, Pagination } from 'swiper/modules';

import { Hero } from '../../modules/MainPage/Hero/Hero';
import { Partners } from '../../modules/MainPage/Partners/Partners';
import { NewCollection } from '../../modules/MainPage/NewCollection/NewCollection';
import { HistoryBrand } from '../../modules/MainPage/HistoryBrand/HistoryBrand';
import { Category } from '../../modules/MainPage/Category/Category';
import { BrandStatement } from '../../modules/MainPage/BrandStatement/BrandStatement';
import { JoinClub } from '../../modules/MainPage/JoinClub/JoinClub';

import { useMediaQuery } from '@/app/hooks/useMediaQuery';
import { useGate } from 'effector-react';
import { MainPageGate } from '@/app/context/goods';
import { hideFooter, showFooter } from '@/app/context/modals';

export default function MainPage() {
  const [activeIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeSwiper, setActiveSwiper] = useState(false);
  const isMedia540 = useMediaQuery(540);

  const lastSlideRef = useRef<HTMLDivElement>(null);
  const categorySlideRef = useRef<HTMLDivElement>(null);

  useGate(MainPageGate);

  const handleSlideChange = (swiper: SwiperType) => {
    const activeIndex = swiper.activeIndex;
    const isLastSlide = activeIndex === swiper.slides.length - 1;

    // Footer
    if (isLastSlide) {
      showFooter();
    } else {
      hideFooter();
    }

    const isCategorySlide =
      categorySlideRef.current?.closest('.swiper-slide') === swiper.slides[activeIndex];

    const isBrandStatementSlide =
      lastSlideRef.current?.closest('.swiper-slide') === swiper.slides[activeIndex];

    // 🧩 Определяем, это JoinClub (последний слайд, и это не мобилка)
    const isJoinClubDesktop = !isMedia540 && isLastSlide;

    if (isCategorySlide && isMedia540) {
      swiper.mousewheel.disable();
      swiper.allowTouchMove = false;
      document.body.style.overflow = 'visible';
      swiper.el.classList.remove('swiper-disabled-scroll');
    } 
 else if (isBrandStatementSlide && isMedia540 && isLastSlide) {
  swiper.mousewheel.enable(); // ⬅️ Оставляем mousewheel включённым
  swiper.allowTouchMove = true; // ⬅️ Оставляем свайп включённым
  document.body.style.overflow = 'visible';
  swiper.el.classList.remove('swiper-disabled-scroll');
}
    
    else if (isJoinClubDesktop) {
      // ✅ Вот здесь теперь будет включаться прокрутка на JoinClub на десктопе
      swiper.mousewheel.disable(); // если не хочешь, можешь оставить enable
      swiper.allowTouchMove = false;
      document.body.style.overflow = 'visible';
      swiper.el.classList.remove('swiper-disabled-scroll');
    } else {
      swiper.mousewheel.enable();
      swiper.allowTouchMove = true;
      document.body.style.overflow = 'hidden';
      swiper.el.classList.add('swiper-disabled-scroll');
    }

    setActiveSwiper(activeIndex === 2);
  };

  const handleReachEnd = () => {
    swiperRef.current?.mousewheel.disable();
    document.body.style.overflow = 'visible';
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const lastSlide = lastSlideRef.current;
    const categorySlide = categorySlideRef.current;

    if (!swiperRef.current) return;

    const handleLastSlideScroll = () => {
      if (!lastSlide || !swiperRef.current) return;

      const scrollTop = lastSlide.scrollTop;
      const maxScroll = lastSlide.scrollHeight - lastSlide.clientHeight;

      // 🔽 Вниз — включаем свайп, но НЕ перелистываем
      if (scrollTop >= maxScroll - 1) {
        swiperRef.current.mousewheel.enable();
        swiperRef.current.allowTouchMove = true;
        document.body.style.overflow = 'visible';
      }

      // 🔼 Вверх — включаем свайп назад только если прокрутили чуть больше порога
      const SCROLL_TOP_THRESHOLD = 20;
      if (scrollTop <= SCROLL_TOP_THRESHOLD) {
        swiperRef.current.mousewheel.enable();
        swiperRef.current.allowTouchMove = true;

        // ❗️ НЕ перелистываем автоматически — даём пользователю самому свайпнуть
        // swiperRef.current.slideTo(swiperRef.current.activeIndex - 1);

        document.body.style.overflow = 'hidden';
      }
    };

    const handleCategorySlideScroll = () => {
      if (!categorySlide || !swiperRef.current) return;

      const maxScroll = categorySlide.scrollHeight - categorySlide.clientHeight;
      const scrollTop = categorySlide.scrollTop;

      if (scrollTop >= maxScroll) {
        swiperRef.current.mousewheel.enable();
        swiperRef.current.allowTouchMove = true;
        swiperRef.current.slideTo(swiperRef.current.activeIndex + 1);
      }

      if (scrollTop === 0) {
        swiperRef.current.mousewheel.enable();
        swiperRef.current.allowTouchMove = true;
        swiperRef.current.slideTo(swiperRef.current.activeIndex - 1);
      }
    };

    if (lastSlide) {
      lastSlide.addEventListener('scroll', handleLastSlideScroll);
    }

    if (isMedia540 && categorySlide) {
      categorySlide.addEventListener('scroll', handleCategorySlideScroll);
    }

    return () => {
      lastSlide?.removeEventListener('scroll', handleLastSlideScroll);
      categorySlide?.removeEventListener('scroll', handleCategorySlideScroll);
      document.body.style.overflow = '';
    };
  }, [isMedia540]);

  useEffect(() => {
  if (isMedia540 && swiperRef.current) {
    const swiper = swiperRef.current;
    const isLastSlide = swiper.activeIndex === swiper.slides.length - 1;

    if (isLastSlide) {
      document.body.style.overflow = 'visible';
    }
  }
}, [isMedia540, activeIndex]);




useEffect(() => {
  const el = lastSlideRef.current;

  if (!el || !isMedia540) return;

  let startY = 0;
  let currentY = 0;

  const onTouchStart = (e: TouchEvent) => {
    startY = e.touches[0].clientY;
  };

  const onTouchMove = (e: TouchEvent) => {
    currentY = e.touches[0].clientY;
    const diff = currentY - startY;

    const atTop = el.scrollTop === 0;
    const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight;

    // ↓ пользователь тянет вверх (вниз по экрану)
    const isScrollingDown = diff < 0;

    // ↑ пользователь тянет вниз (вверх по экрану)
    const isScrollingUp = diff > 0;

    if (
      (isScrollingDown && !atBottom) || 
      (isScrollingUp && !atTop)
    ) {
      e.stopPropagation(); // ⬅️ предотврати всплытие — важно!
    }
  };

  el.addEventListener('touchstart', onTouchStart, { passive: true });
  el.addEventListener('touchmove', onTouchMove, { passive: false });

  return () => {
    el.removeEventListener('touchstart', onTouchStart);
    el.removeEventListener('touchmove', onTouchMove);
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
        nested={true}
          touchStartPreventDefault={false}
  touchMoveStopPropagation={false}
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
            ref={categorySlideRef}
            style={{ height: '100vh', overflowY: 'auto', background: '#fff' }}>
            <Category />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            ref={isMedia540 ? lastSlideRef : null}
            className="brand-statement-slide"
            style={{
              height: '150vh',
                 WebkitOverflowScrolling: 'touch', 
                     overscrollBehavior: 'contain',
    touchAction: 'pan-y',
              overflowY: 'auto',
              background: '#fff', 

            }}>
            <BrandStatement />
          </div>
        </SwiperSlide>

        {!isMedia540 && (
          <SwiperSlide>
            <div
              ref={lastSlideRef}
              style={{ height: '100vh', overflowY: 'auto', background: '#fff' }}>
              <JoinClub />
            </div>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
}
