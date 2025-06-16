import React from 'react';
import '@/app/globalStyles/input.scss';
type InputProps = {
  className?: string;
  type: string;
  placeholder: string;
  value: string;
    id?: string;
   required?: boolean; // ← добавили сюда
 
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export const Input = ({   className,
  type = 'text',
  placeholder,
  id = 'field',
  required = true,
  value,
  onChange, }: InputProps) => {
  return (
    <div className="input-wrapper">
      <input    id={id}
      className={className}
      type={type}
      value={value}
      onChange={onChange}
     required={required}
       />
      <label htmlFor="name">{placeholder}</label>
    </div>
  );
};
