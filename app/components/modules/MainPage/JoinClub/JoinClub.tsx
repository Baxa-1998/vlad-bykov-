import React from 'react';
import styles from '@/app/styles/main-page/index.module.scss';

import { Button } from '@/app/components/elements/Button';
import { ClubMembers } from './ClubMembers';

import { members } from '@/app/constants/clubMembers';



export const JoinClub = () => {
  return (
    <div className={styles.joinClub}>
      <div className={styles.joinClubWrapper}>
        <div className={styles.joinClubInner}>
          <h3>ЭСКЛЮЗИВНОСТЬ</h3>
          <h2>ЭТО НЕ ПРОСТО ВЕЩИ</h2>
          <p>
            Сделано в Италии. Экологичные материалы. <br /> Доставка по всему миру.
          </p>
          <Button>ВСТУПИТЬ В КЛУБ</Button>
        </div>
        <div className={styles.clubMembers}>
          {members.map((member) => (
            <ClubMembers key={member.id} data={member} />
          ))}
        </div>
      </div>
    </div>
  );
};
