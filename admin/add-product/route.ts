/* eslint-disable prettier/prettier */
import { corsHeaders } from '@/app/constants/corsHeaders';
import clientPromise from '@/app/lib/mongodb';
import { getDbAndReqBody } from '@/app/lib/utils/api-routes';
import { generateArticleCode, idGenerator } from '@/app/lib/utils/common';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { db, reqBody } = await getDbAndReqBody(clientPromise, req);
    let images = null;

    if (reqBody.img.every((img: { dataUrl: string }) => img.dataUrl)) {
      images = reqBody.img.map((img: { dataUrl: string; title: string }) => ({
        ...img,
        imgId: idGenerator(),
      }));

      await db.collection('images').insertMany(images);
    }

    const newProduct = {
      ...reqBody,
      img: images
        ? images.map((img: { imgId: string }) => ({
            url: `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}?id=${img.imgId}`,
            desc: reqBody.name,
          }))
        : reqBody.img,
      vendorCode: generateArticleCode(reqBody.type),
    };

    const { insertedId } = await db.collection('cloth').insertOne(newProduct);
    console.log('Категория при вставке:', reqBody.category);

    return NextResponse.json(
      {
        status: 201,
        newItem: { id: insertedId, ...newProduct },
      },
      corsHeaders,
    );
  } catch (error) {
    throw new Error((error as Error).message);
  }
}

export async function OPTIONS() {
  return new NextResponse(null, { ...corsHeaders, status: 200 });
}
