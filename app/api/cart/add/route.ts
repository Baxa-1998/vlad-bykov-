import { ObjectId } from 'mongodb'
import { NextResponse } from 'next/server'
import clientPromise from '@/app/lib/mongodb'

export async function POST(req: Request) {
  try {
    const db = (await clientPromise).db()
    const reqBody = await req.json()

    const requiredFields = ['productId', 'size', 'count', 'clientId', 'category']
    const missingFields = requiredFields.filter((field) => !reqBody[field])

    if (missingFields.length > 0) {
      return NextResponse.json(
        {
          message: `Missing fields: ${missingFields.join(', ')}`,
          status: 400,
        },
        { status: 400 }
      )
    }

    const productItem = await db
      .collection(reqBody.category)
      .findOne({ _id: new ObjectId(reqBody.productId) })

    if (!productItem) {
      return NextResponse.json(
        {
          message: 'Product not found',
          status: 404,
        },
        { status: 404 }
      )
    }

    const newCartItem = {
      productId: productItem._id,
      image: productItem.img?.[0] || null,
      name: productItem.name,
      size: productItem.type === 'accessory' ? '' : reqBody.size,
      count: reqBody.count,
      price: productItem.price,
      totalPrice: productItem.price * reqBody.count,
      inStock: productItem.inStock,
      clientId: reqBody.clientId,
      color: productItem.characteristics?.color || '',
      category: productItem.category,
    }

    const { insertedId } = await db.collection('cart').insertOne(newCartItem)

    return NextResponse.json({
      status: 201,
      newCartItem: { _id: insertedId, ...newCartItem },
    })
  } catch (error) {
    console.error('Ошибка при добавлении товара в корзину:', error)
    return NextResponse.json(
      { error: 'Не удалось добавить товар в корзину' },
      { status: 500 }
    )
  }
}