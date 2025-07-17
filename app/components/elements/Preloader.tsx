import Image from 'next/image';
import React from 'react';
import logo from '@/public/img/loader-logo.png'
type IpreloaderProps = {
  isHidden: boolean;
};
export const Preloader = ({ isHidden }: IpreloaderProps) => {
  return (
    <div className={`preloader ${isHidden ? 'hidden' : ''}`}>
      <div className="preloader-wrapper">
        <Image src={logo} width={150} height={150} alt="preloader" />
      </div>
    </div>
  );
};
