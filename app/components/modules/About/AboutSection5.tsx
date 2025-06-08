import React from 'react';
import styles from '@/app/styles/about/index.module.scss';


import { Title } from '../../elements/Title';
import { members } from '@/app/constants/clubMembers';
import { ClubMembers } from '../MainPage/JoinClub/ClubMembers';
import { useLang } from '@/app/hooks/useLang';
const AboutSection5 = () => {
  const {translations, lang} = useLang();
  return (
    <div className={styles.aboutSection5}>
      <div className={styles.aboutSection5Wrapper}>
        <h3>{translations[lang].joinClub.main_title}</h3>
        <Title className={styles.aboutSection5Title}>{translations[lang].joinClub.title2}</Title>
           <div className={styles.clubMembers}>
        {members.map((member) => (
          <ClubMembers key={member.id} data={member} />
        ))}
      </div>
      </div>
   
    </div>
  );
};

export default AboutSection5;
