import Image from 'next/image';
import React from 'react';
type IpreloaderProps = {
  isHidden: boolean;
};
export const Preloader = ({ isHidden }: IpreloaderProps) => {
  return (
    <div className={`preloader ${isHidden ? 'hidden' : ''}`}>
      <div className="preloader-wrapper">
        <Image src={'/img/logo.svg'} width={150} height={150} alt="preloader" />
      </div>
    </div>
  );
};
