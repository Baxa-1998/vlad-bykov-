// app/api/cart/add/route.ts
import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';
import clientPromise from '@/app/lib/mongodb';

export async function POST(req: Request) {
  try {
    const db = (await clientPromise).db();
    const body = await req.json();

    const { productId, category, count, size, color, clientId } = body;
        console.log('category:', category);
    console.log('productId:', productId);
    console.log('body:', body);

    if (!productId || !category || !count || !size || !clientId) {
      return NextResponse.json(
        { error: 'Некоторые обязательные поля отсутствуют' },
        { status: 400 }
      );
    }

    const product = await db
      .collection(category)
      .findOne({ _id: new ObjectId(productId) });
      

    if (!product) {
      return NextResponse.json({ error: 'Товар не найден' }, { status: 404 });
    }

    const newCartItem = {
      productId: product._id,
      name: product.name,
      img: product.img?.[0] || '',
      size,
      color,
      count,
      price: product.price,
      totalPrice: product.price * count,
      inStock: product.inStock,
      category: product.category,
      clientId,
    };

    const { insertedId } = await db.collection('cart').insertOne(newCartItem);

    return NextResponse.json({
      newCartItem: { _id: insertedId, ...newCartItem },
    });
  } catch (error) {
    console.error('[API /cart/add] Ошибка:', error);
    return NextResponse.json(
      { error: 'Ошибка сервера при добавлении товара в корзину' },
      { status: 500 }
    );
  }
}