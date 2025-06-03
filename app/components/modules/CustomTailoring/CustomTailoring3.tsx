import React from 'react';
import styles from '@/app/styles/custom/index.module.scss';
import { Button } from '../../elements/Button';
export const CustomTailoring3 = () => {
  return (
    <div className={styles.custom3}>
      <div className={styles.customWrapper}>
        <div className={styles.customItem}>
          <h3>ЭСКЛЮЗИВНОСТЬ</h3>
          <p>
            Комбинации материалов, моделей и цвета <br /> гарантирует уникальность Вашей обуви
          </p>
        </div>
        <div className={styles.customItem}>
          <h3>КОМФОРТ</h3>
          <p>
        При изготовлении обуви учитываются все <br /> особенности Ваших стоп

          </p>
        </div>
        <div className={styles.customItem}>
          <h3>ЗДОРОВЬЕ</h3>
          <p>
           Обувь, выполненная по индивидуальным <br /> меркам с использованием лучших <br /> материалов, сохраняет здоровье Ваших ног
          </p>
        </div>
      </div>
    </div>
  );
};
