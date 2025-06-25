import { corsHeaders } from '@/app/constants/corsHeaders'
import clientPromise from '@/app/lib/mongodb'
import { getDbAndReqBody } from '@/app/lib/utils/api-routes'
import { ObjectId } from 'mongodb'
import { NextResponse } from 'next/server'


export async function GET(req: Request) {
  try {
    const { db } = await getDbAndReqBody(clientPromise, null)
    const url = new URL(req.url)
    const id = url.searchParams.get('id')
    const isValidId = ObjectId.isValid(id as string)

    if (!id || !isValidId) {
      return NextResponse.json(
        {
          message: 'Invalid ID',
          status: 400,
        },
        corsHeaders
      )
    }

    const item = await db
      .collection('cloth') // ВСЕГДА cloth
      .findOne({ _id: new ObjectId(id) })

    if (!item) {
      return NextResponse.json(
        { message: 'Item not found', status: 404 },
        corsHeaders
      )
    }

    return NextResponse.json({ ...item, id: item._id }, corsHeaders)
  } catch (error) {
    console.error('GET /admin/one error:', error)
    return NextResponse.json(
      { message: 'Server error', error: (error as Error).message },
      corsHeaders
    )
  }
}

export const dynamic = 'force-dynamic'