'use client'
import React from 'react';
import { CustomTailoring1 } from '../components/modules/CustomTailoring/CustomTailoring1';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Mousewheel, Pagination } from 'swiper/modules';
import { CustomTailoring2 } from '../components/modules/CustomTailoring/CustomTailoring2';
import { CustomTailoring3 } from '../components/modules/CustomTailoring/CustomTailoring3';



export default function CustomPage() {
  return  (
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
      <CustomTailoring1/>
        </SwiperSlide>
        <SwiperSlide>
    <CustomTailoring2/>
        </SwiperSlide>
        <SwiperSlide>
    <CustomTailoring3/>
        </SwiperSlide>
      
      
       

     
      </Swiper>
      {/* <Footer/> */}
    </div>
  );
}