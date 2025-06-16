import React from 'react'
import '@/app/globalStyles/input.scss' 
type InputProps = {
  className?: string,
  type: string,
  placeholder: string
}
export const Input = ({className, type, placeholder}: InputProps) => {
  return (
  <div className="input-wrapper">
  <input className={className} type={type} id="name" required />
  <label htmlFor="name">{placeholder}</label>
</div>
  )
}
