import { $allGoods } from '@/app/context/goods';
import { useLang } from '@/app/hooks/useLang';
import { IGoodsItemProps } from '@/app/types/modules';
import { useUnit } from 'effector-react';
import Image from 'next/image';
import React, { useMemo, useState } from 'react';
import { Button } from '../../elements/Button';
import Link from 'next/link';
import { toggleSearchModal } from '@/app/context/modals';
// модалка для поиска
export const SearchModal = () => {
  const { lang, translations } = useLang();
  const goods: IGoodsItemProps[] = useUnit($allGoods);

  const [query, setQuery] = useState('');

  // Фильтруем товары по запросу (учитываем регистр)
  const filteredGoods = useMemo(() => {
    const lowerQuery = query.toLowerCase().trim();
    if (!lowerQuery) return [];
    return goods.filter((item) => item.content[lang].name.toLowerCase().includes(lowerQuery));
  }, [goods, query]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };
  const closeModal = () => {
    toggleSearchModal();
  };
  return (
    <div className="search-modal">
      {/* <button onClick={handleCloseSearchModal} className="btn-reset search-modal__close"/> */}

      <div className="search-modal__top">
        <label className="search-modal__label">
          <Image src={'/img/global-search.svg'} width={18} height={18} alt="search" />
          <input
            value={query}
            onChange={handleChange}
            type="text"
            placeholder={translations[lang].header.search}
          />
        </label>
        {query !== '' ? (
          <div className="search-modal__wrapper">
            <div>
              <div className="search-modal__results">
                {query && filteredGoods.length === 0 && (
                  <p className="search-modal__no-results">
                    {translations[lang].productItem.not_fount}
                  </p>
                )}

                {filteredGoods.map((item) => (
                  <Link key={item._id} href={`/catalog/${item._id}`}>
                    <div onClick={closeModal} className="search-modal__item">
                      <Image
                        src={item.img[0].url}
                        //  src={'/img/collections/Collection1.svg'}
                        width={220}
                        height={340}
                        alt={item.name}
                        className="search-modal__item-img"
                      />
                      <div className="search-modal__item-info">
                        <p className="search-modal__item-composition">
                          {item.content[lang].characteristics.compositions}
                        </p>
                        <p className="search-modal__item-name">{item.content[lang].name}</p>
                        <p className="search-modal__item-price">{item.price} ₽</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <Link href={'/catalog'}>
                <Button onClick={closeModal} className="search-modal__btn">
                  {translations[lang].category.button}
                </Button>
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
