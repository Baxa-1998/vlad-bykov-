import React from 'react';
import styles from '@/app/styles/about/index.module.scss';
const AboutSection = () => {
  return (
    <div className={styles.aboutSection}>
      <div className={styles.aboutSectionWrapper}>
        <h3>
          C 2016 года VLAD BYKOV создаёт одежду и обувь Bespoke <br /> на грани искусства. Эксклюзивные
          материалы, высшее <br /> мастерство, филигранная ручная работа — всё это доступно лишь <br /> тем, кто
          понимает истинную роскошь.
        </h3>
      </div>
    </div>
  );
};

export default AboutSection;
