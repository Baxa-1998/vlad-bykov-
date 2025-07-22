'use client';
import React, { useRef } from 'react';
import AboutSection from '../components/modules/About/AboutSection';
import AboutSection2 from '../components/modules/About/AboutSection2';

import 'swiper/css';
import 'swiper/css/pagination';

import AboutSection3 from '../components/modules/About/AboutSection3';
import AboutSection4 from '../components/modules/About/AboutSection4';
import AboutSection5 from '../components/modules/About/AboutSection5';

import { useMediaQuery } from '../hooks/useMediaQuery';

export default function AboutPage() {
  const lastSlideRef = useRef<HTMLDivElement>(null);

  const isMedia540 = useMediaQuery(540);
  // const handleSlideChange = (swiper: SwiperType) => {
  //   const isLast = swiper.isEnd;
  //   if (!isLast) {
  //     hideFooter();
  //     // showFooter()
  //   } else {
  //     showFooter();
  //   }
  //   if (isLast) {
  //     swiper.mousewheel.disable();
  //     document.body.style.overflow = 'visible';
  //     swiper.allowTouchMove = false;
  //   } else {
  //     swiper.mousewheel.enable();
  //     document.body.style.overflow = 'hidden';
  //     swiper.allowTouchMove = true;
  //   }

  //   // если последний слайд меняем стиль круга
  //   if (swiper.activeIndex === 4) {
  //     setActiveSwiper(true);
  //   } else {
  //     setActiveSwiper(false);
  //   }
  // };

  // Следим за scroll в последнем слайде
  // useEffect(() => {
  //   // запрещаем скролл при загрузке
  //   document.body.style.overflow = 'hidden';

  //   const lastSlide = lastSlideRef.current;
  //   if (!lastSlide) return;

  //   const handleScroll = () => {
  //     if (!swiperRef.current) return;

  //     // Если пользователь доскроллил вверх на последнем слайде
  //     if (lastSlide.scrollTop === 0) {
  //       swiperRef.current.mousewheel.enable();
  //       swiperRef.current.slideTo(swiperRef.current.slides.length - 2);
  //       document.body.style.overflow = 'hidden'; // ❌ снова запрет скролла
  //     }
  //   };

  //   lastSlide.addEventListener('scroll', handleScroll);
  //   return () => {
  //     lastSlide.removeEventListener('scroll', handleScroll);
  //     document.body.style.overflow = ''; // очистка
  //   };
  // }, []);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollY = window.scrollY;

  //     if (scrollY === 0 && swiperRef.current) {
  //       swiperRef.current.slideTo(2);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  //   useEffect(()=>{
  //    if(isMedia540){
  //     document.body.style.overflow = 'visible'
  //     showFooter();
  //    }else{
  //     document.body.style.overflow = 'hidden'
  //    }
  // },[isMedia540])

  return (
    <div>
      {isMedia540 ? (
        <>
          <AboutSection />
          <AboutSection2 />
          <AboutSection3 />
          <AboutSection4 />
        </>
      ) : (
        <>
          <AboutSection />

          <AboutSection2 />

          <AboutSection3 />

          <div
            ref={lastSlideRef}
            style={{
              height: '100vh',
              overflowY: isMedia540 ? 'auto' : 'hidden',
              minHeight: '100vh',
              touchAction: 'auto', // ✅ Разрешаем touch scroll
              WebkitOverflowScrolling: 'touch', // ✅ плавный скролл на iOS
            }}>
            <AboutSection4 />
          </div>

          {!isMedia540 && (
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
          )}
        </>
      )}

      {/* <Footer/> */}
    </div>
  );
}
