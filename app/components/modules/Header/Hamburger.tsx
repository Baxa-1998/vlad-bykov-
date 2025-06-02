import { $menuIsOpen, closeMenu, openMenu } from '@/app/context/modals';
import { addOverflowHiddenToBody, removeOverflowHiddenFromBody } from '@/app/lib/utils/common';
import { useUnit } from 'effector-react';
import React from 'react'

export const Hamburger = () => { 
  const menuIsOpen = useUnit($menuIsOpen);


  const handleOpenMenu = () => {


    addOverflowHiddenToBody();
    openMenu();

   
    if(menuIsOpen) {
  closeMenu() 
      removeOverflowHiddenFromBody()
    }
    
    }

 
  
  return (
    <div onClick={handleOpenMenu} className='hamburger-lines'>
        <span className={`line ${menuIsOpen ? 'line1' : ''}`}></span>
              <span className={`line ${menuIsOpen  ? 'line2' : ''}`}></span>
              <span className={`line ${menuIsOpen ? 'line3' : ''}`}></span>
    </div>
  )

  }