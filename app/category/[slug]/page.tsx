
'use client'
import { IGoodsItemProps } from '../../types/modules';
import { useUnit } from 'effector-react';
import { $allGoods } from '../../context/goods';
import { useParams } from 'next/navigation';
import CategoryPage from '@/app/components/modules/CategoryPage/CategoryPage';
import { useLang } from '@/app/hooks/useLang';


export default function CategorySlugPage() {
  const { slug } = useParams() as { slug: string }

  const {translations, lang} = useLang()

  const goods: IGoodsItemProps[] = useUnit($allGoods)

  const categories = [
    { slug: 'men', label: translations[lang].catalog.men },
    { slug: 'women', label: translations[lang].catalog.girls },
    { slug: 'shoes', label: translations[lang].catalog.shoes },
    { slug: 'outerwear', label: translations[lang].catalog.top_clothing },
    { slug: 'cloth', label: translations[lang].catalog.cloth },
    { slug: 'accessories', label: translations[lang].catalog.accessories },

  ]

  const currentCategory = categories.find((c) => c.slug === slug)
  console.log(currentCategory);
  

  const filteredGoods = goods.filter((item) => {
    if (!slug) return false

    if (slug === 'new') return item.isNew
    if (slug === 'men' || slug === 'women') return item.type === slug
    return item.category === slug 
  })

  return <CategoryPage products={filteredGoods} category={slug}       label={currentCategory?.label || ''}/>
}