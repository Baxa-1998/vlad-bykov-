import { Db, MongoClient } from 'mongodb';
import { shuffle } from './common';
import { NextResponse } from 'next/server';

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



export const getDataFromDBByCollection = async (
  clientPromise: Promise<MongoClient>,
  collection: string
) => {
  try {
    const client = await clientPromise
    const db = client.db()

    const items = await db.collection(collection).find({}).toArray()

    return NextResponse.json(items)
  } catch (error) {
    console.error('Ошибка при получении данных:', error)
    return NextResponse.json({ error: 'Не удалось получить данные' }, { status: 500 })
  }
}



