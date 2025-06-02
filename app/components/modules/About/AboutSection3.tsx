import React from 'react';
import styles from '@/app/styles/about/index.module.scss';
import { Button } from '../../elements/Button';
const AboutSection3 = () => {
  return (
    <div className={styles.aboutSection3}>
      <div className={styles.aboutSectionWrapper3}>
        <h3>
          Наша философия заключается в том, чтобы предложить каждому <br /> гостю по-настоящему
          индивидуальный подход.
        </h3>
        <Button>СТАТЬ КЛИЕНТОМ</Button>
      </div>
    </div>
  );
};

export default AboutSection3;
