
import Image from 'next/image';
import React from 'react';
// модалка для поиска
export const SearchModal = () => {







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
