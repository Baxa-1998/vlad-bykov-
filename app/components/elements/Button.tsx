import React from 'react';
interface IButtonProps {
  children: React.ReactNode;
  className?: string;
}
export const Button = ({ children, className }: IButtonProps) => {
  return <button className={`main__btn ${className}`}>{children}</button>;
};
