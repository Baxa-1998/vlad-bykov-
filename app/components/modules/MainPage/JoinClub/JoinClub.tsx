import React from 'react';
import styles from '@/app/styles/main-page/index.module.scss';

import { Button } from '@/app/components/elements/Button';
import { ClubMembers } from './ClubMembers';
interface IJoinProps {
  id: number;
  name: string;
  subscribers: string;
  img: string;
}

const members: IJoinProps[] = [
  {
    id: 1,
    name: 'Jacob Arabo',
    subscribers: '27 000 000',
    img: '/img/club/member1.svg',
  },
  {
    id: 2,
    name: 'Conor McGregor',
    subscribers: '47 400 000',
    img: '/img/club/member2.svg',
  },
  {
    id: 3,
    name: 'Conor Benn',
    subscribers: '1 000 000',
    img: '/img/club/member3.svg',
  },
  {
    id: 4,
    name: 'Thomas Kralow',
    subscribers: '1 500 000',
    img: '/img/club/member4.svg',
  },
  {
    id: 5,
    name: 'Bryce Cleveland',
    subscribers: '2 800 000',
    img: '/img/club/member5.svg',
  },
  {
    id: 6,
    name: 'MORGENSHTERN',
    subscribers: '7 500 000',
    img: '/img/club/member6.svg',
  },
  {
    id: 7,
    name: 'ANAR DREAMS',
    subscribers: '25 000 000',
    img: '/img/club/member7.svg',
  },
  {
    id: 8,
    name: 'Sergei Kosenko',
    subscribers: '45 100 000',
    img: '/img/club/member8.svg',
  },
  {
    id: 9,
    name: 'The Limba',
    subscribers: '526 000',
    img: '/img/club/member9.svg',
  },
  {
    id: 10,
    name: 'Mr Good.luck',
    subscribers: '13 300 000',
    img: '/img/club/member10.svg',
  },
];
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
