'use client'
import React from 'react';
import AboutSection from '../components/modules/About/AboutSection';
import AboutSection2 from '../components/modules/About/AboutSection2';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Mousewheel, Pagination } from 'swiper/modules';
import AboutSection3 from '../components/modules/About/AboutSection3';
import AboutSection4 from '../components/modules/About/AboutSection4';






export default function AboutPage() {
  return (
      <div>
        <Swiper
   
     
        direction={'vertical'}
     
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={{ forceToAxis: true, releaseOnEdges: true }}
        pagination={{ clickable: true }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper">
        <SwiperSlide>
      <AboutSection/>
        </SwiperSlide>
        <SwiperSlide>
    <AboutSection2/>
        </SwiperSlide>
        <SwiperSlide>
   <AboutSection3/>
        </SwiperSlide>
        <SwiperSlide>
    <AboutSection4/>
        </SwiperSlide>
        <SwiperSlide>
  
        </SwiperSlide>
        <SwiperSlide>
    
        </SwiperSlide>

     
      </Swiper>
      {/* <Footer/> */}
    </div>
  );
}