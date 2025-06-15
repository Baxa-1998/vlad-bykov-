import React from 'react';
interface IButtonProps {
  children: React.ReactNode;
  className?: string;

}
export const Button = ({ children, className, ...props }: IButtonProps) => {
  return <button className={`main__btn ${className}`}{...props}>{children}</button>;
};
