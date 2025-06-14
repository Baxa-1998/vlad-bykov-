import React from 'react';
import styles from '@/app/styles/about/index.module.scss';
import Image from 'next/image';
import { useMediaQuery } from '@/app/hooks/useMediaQuery';
import { useLang } from '@/app/hooks/useLang';
type IPartner = {
  id: number;
  img: string;
  mobile: string;
};

  const partnersImg: IPartner[] = [
    {
      id: 1,
      img: '/img/about/partner1.svg',
      mobile: '/img/about/partner1-mobile.svg',
    },
    {
      id: 2,
      img: '/img/about/partner2.svg',
      mobile: '/img/about/partner2-mobile.svg',
    },
    {
      id: 3,
      img: '/img/about/partner3.svg',
      mobile: '/img/about/partner3-mobile.svg',
    },
    {
      id: 4,
      img: '/img/about/partner4.svg',
      mobile: '/img/about/partner4-mobile.svg',
    },
    {
      id: 5,
      img: '/img/about/partner5.svg',
      mobile: '/img/about/partner5-mobile.svg',
    },
    {
      id: 6,
      img: '/img/about/partner6.svg',
      mobile: '/img/about/partner6-mobile.svg',
    },
    {
      id: 7,
      img: '/img/about/partner7.svg',
      mobile: '/img/about/partner7-mobile.svg',
    },
    {
      id: 8,
      img: '/img/about/partner8.svg',
      mobile: '/img/about/partner8-mobile.svg',
    },
  ];
const AboutSection4 = () => {
  const isMedia540 = useMediaQuery(540);
  const {translations, lang} = useLang()
  return (
    <div className={styles.aboutSection4}>
      <div className={styles.aboutSectionText}>
        <h3>{translations[lang].about.title4}</h3>
        <p>
         {translations[lang].about.subtitle}
        </p>
      </div>
      <div className={styles.aboutPartners}>
        {partnersImg.map((partner) =>
          isMedia540 ? (
            <Image
              key={partner.id} // обязательно добавь key, если есть id или index
              src={partner.mobile}
              width={0}
              height={0}
              alt="partner"
            />
          ) : (
            <Image key={partner.id} src={partner.img} width={104} height={96} alt="partner" />
          ),
        )}
      </div>
    </div>
  );
};

export default AboutSection4;
