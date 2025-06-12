'use client';
import React from 'react';
import { AnimatedText } from './TextAnimation';

type ITitleProps = {
  children: React.ReactNode;
  className?: string;
};
export const Title = ({ children, className }: ITitleProps) => { 
  
  return (

 <AnimatedText>
<h2 className={`main__title ${className}`}>{children}</h2>
 </AnimatedText> 
   

  )
};
