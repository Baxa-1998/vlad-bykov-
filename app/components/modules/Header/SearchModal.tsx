import { useLang } from '@/app/hooks/useLang';
import { handleCloseSearchModal } from '@/app/lib/utils/common';
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
      <button onClick={handleCloseSearchModal} className="btn-reset search-modal__close"/>
        <h3 className="search-modal__title">{translations[lang].header.search_products}</h3>
        <div className="search-modal__top">
          <label className="search-modal__label">
            <input onFocus={handleInputFocus} onBlur={handleInputBlur}  type="text" className="search-modal__input" />
            <span className="search-modal__floating_label">
              {translations[lang].header.search_infos}
            </span>
          </label>
        </div>
     
    </div>
  );
};
