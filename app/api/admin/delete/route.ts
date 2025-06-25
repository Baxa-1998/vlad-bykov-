import { corsHeaders } from '@/app/constants/corsHeaders';
import clientPromise from '@/app/lib/mongodb';
import { getDbAndReqBody } from '@/app/lib/utils/api-routes';
import { ObjectId } from 'mongodb';
import { NextResponse } from 'next/server';

export async function DELETE(req: Request) {
  try {
    const { db } = await getDbAndReqBody(clientPromise, null);
    const url = new URL(req.url);
    const id = url.searchParams.get('id');
    const category = url.searchParams.get('category');

    await db.collection('cloth').deleteOne({ _id: new ObjectId(id as string) });

    return NextResponse.json(
      {
        status: 204,
      },
      corsHeaders,
    );
  } catch (error) {
    throw new Error((error as Error).message);
  }
}

export const dynamic = 'force-dynamic';

export async function OPTIONS() {
  return new NextResponse(null, { ...corsHeaders, status: 200 });
}
