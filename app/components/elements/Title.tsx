import React from 'react';
type ITitleProps = {
  children: React.ReactNode;
  className?: string;
};
export const Title = ({ children, className }: ITitleProps) => {
  return <h2 className={`main__title ${className}`}>{children}</h2>;
};
