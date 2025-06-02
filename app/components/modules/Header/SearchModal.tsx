import { useLang } from '@/app/hooks/useLang';
import { handleCloseSearchModal } from '@/app/lib/utils/common';
import Image from 'next/image';
import React from 'react';
// модалка для поиска
export const SearchModal = () => {
  const { lang, translations } = useLang();

    const handleInputFocus = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>
  ) => {
    e.target.classList.add('with_value')
  }

  const handleInputBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>
  ) => {
    if (e.target.value) {
      return
    }

    e.target.classList.remove('with_value')
  }

  return (
    <div className="search-modal">
      {/* <button onClick={handleCloseSearchModal} className="btn-reset search-modal__close"/> */}
 
        <div className="search-modal__top">
          <label className="search-modal__label"> 
            <Image src={'/img/global-search.svg'} width={18} height={18} alt='search' />
            <input type="text" placeholder='Поиск'/>
          </label>
        </div>
     
    </div>
  );
};
