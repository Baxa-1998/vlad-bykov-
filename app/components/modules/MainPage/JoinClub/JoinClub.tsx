import React from 'react';
import styles from '@/app/styles/main-page/index.module.scss';

import { Button } from '@/app/components/elements/Button';
import { ClubMembers } from './ClubMembers';

import { members } from '@/app/constants/clubMembers';
import { useLang } from '@/app/hooks/useLang';



export const JoinClub = () => {
  const {translations, lang} = useLang();
  return (
    <div className={styles.joinClub}>
      <div className={styles.joinClubWrapper}>
        <div className={styles.joinClubInner}>
          <h3>{translations[lang].joinClub.main_title}</h3>
          <h2>{translations[lang].joinClub.title}</h2>
          <p>
        {translations[lang].joinClub.subtitle}
          </p>
          <Button>{translations[lang].joinClub.button}</Button>
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
