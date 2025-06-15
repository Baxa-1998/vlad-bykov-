import React from 'react'
import '@/app/globalStyles/input.scss'
export const Input = ({className, type, placeholder}) => {
  return (
  <div className="input-wrapper">
  <input className={className} type={type} id="name" required />
  <label htmlFor="name">{placeholder}</label>
</div>
  )
}
