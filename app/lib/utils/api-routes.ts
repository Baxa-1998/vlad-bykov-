import { Db, MongoClient } from 'mongodb';
import { shuffle } from './common';

export const getDbAndReqBody = async (clientPromise: Promise<MongoClient>, req: Request | null) => {
  const db = (await clientPromise).db(process.env.NEXT_PUBLIC_DB_NAME);

  if (req) {
    const reqBody = await req.json();
    return { db, reqBody };
  }
  return { db };
};

//  из бд получаем по типу новинки 5 товаров
export const getNewGoods = async (db: Db) => {
  const clothes = await db.collection('cloth').find({ isNew: true }).toArray();

  return shuffle(
    clothes.filter((item) => Object.values(item.sizes).some((value) => value)).slice(0, 5),
  );
};
// из бд получаем по типу мужские 5 товаров
export const getMenGoods = async (db: Db) => {
  const clothes = await db.collection('cloth').find({ type: 'men' }).toArray();

  return shuffle(
    clothes.filter((item) => Object.values(item.sizes).some((value) => value)).slice(0, 5),
  );
};

export const getWomenGoods = async (db: Db) => {
  const clothes = await db.collection('cloth').find({ type: 'women' }).toArray();

  return shuffle(
    clothes.filter((item) => Object.values(item.sizes).some((value) => value)).slice(0, 5),
  );
};


export const getClothGoods = async (db: Db) => {
  return db.collection('cloth').find().toArray();
};


export const getShoes = async (db: Db) => {
  return db.collection('cloth').find({ category: 'shoes' }).toArray();
};

