import React from 'react';
import styles from '@/app/styles/about/index.module.scss';


import { Title } from '../../elements/Title';
import { members } from '@/app/constants/clubMembers';
import { ClubMembers } from '../MainPage/JoinClub/ClubMembers';
const AboutSection5 = () => {
  return (
    <div className={styles.aboutSection5}>
      <div className={styles.aboutSection5Wrapper}>
        <h3>ЭСКЛЮЗИВНОСТЬ</h3>
        <Title className={styles.aboutSection5Title}>Амбассадоры, клиенты и гости</Title>
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
