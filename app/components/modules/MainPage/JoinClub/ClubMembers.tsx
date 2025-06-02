import React from 'react';
import styles from '@/app/components/modules/MainPage/JoinClub/ClubMembers.module.scss';
import Image from 'next/image';

interface IJoinProps {
  id: number;
  name: string;
  subscribers: string;
  img: string;
}
interface ClubMemberProps {
  data: IJoinProps;
}
export const ClubMembers = ({ data }: ClubMemberProps) => {
  return (
    <div className={styles.clubItems}>
      <Image src={data.img} width={128} height={128} alt="member" />
      <h3>{data.name}</h3>
      <span>{data.subscribers} subscirbers</span>
    </div>
  );
};
