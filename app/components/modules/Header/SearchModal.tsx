
import { $allGoods } from '@/app/context/goods';
import { useLang } from '@/app/hooks/useLang';
import { IGoodsItemProps } from '@/app/types/modules';
import { useUnit } from 'effector-react';
import Image from 'next/image';
import React, { useMemo, useState } from 'react';
// модалка для поиска
export const SearchModal = () => {


  const { lang, translations } = useLang();
  const goods: IGoodsItemProps[] = useUnit($allGoods);

  const [query, setQuery] = useState('');

  // Фильтруем товары по запросу (учитываем регистр)
  const filteredGoods = useMemo(() => {
    const lowerQuery = query.toLowerCase().trim();
    if (!lowerQuery) return [];
    return goods.filter(item =>
      item.name.toLowerCase().includes(lowerQuery)
    );
  }, [goods, query]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

console.log(filteredGoods);



  return (
    <div className="search-modal">
      {/* <button onClick={handleCloseSearchModal} className="btn-reset search-modal__close"/> */}
 
        <div className="search-modal__top">
          <label className="search-modal__label"> 
            <Image src={'/img/global-search.svg'} width={18} height={18} alt='search' />
            <input value={query} onChange={handleChange} type="text" placeholder={translations[lang].header.search}/>
          </label>
        </div>

           <div className="search-modal__results">
        {query && filteredGoods.length === 0 && (
          <p className="search-modal__no-results">
            такого товара нет
          </p>
        )}

        {filteredGoods.map(item => (
          <div key={item._id} className="search-modal__item">
            <Image
              src={item.img[0]}
              width={50}
              height={50}
              alt={item.name}
              className="search-modal__item-img"
            />
            <div className="search-modal__item-info">
              <p className="search-modal__item-name">{item.name}</p>
              <p className="search-modal__item-price">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
     
    </div>
  );
};
