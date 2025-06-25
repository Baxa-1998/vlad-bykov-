// /app/api/checkout-session/route.ts
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.NEXT_STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { totalPrice, currency } = body;

    if (!totalPrice || !currency) {
      return new NextResponse('Отсутствует сумма или валюта', { status: 400 });
    }

    // Получаем курс RUB → USD
    const res = await fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`);
    const data = await res.json();

    const rateToUSD = data?.rates?.USD;

    if (!rateToUSD) {
      return new NextResponse('Не удалось получить курс RUB → USD', { status: 500 });
    }

    const priceInUSD = totalPrice * rateToUSD;
    const amountInCents = Math.round(priceInUSD * 100); // Stripe принимает сумму в центах

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Оплата заказа',
            },
            unit_amount: amountInCents,
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_CLIENT_BASE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_CLIENT_BASE_URL}/cancel`,
    });

    return NextResponse.json({ id: session.id });
  } catch (err: unknown) {
    console.error('Ошибка Stripe Checkout:', err);
    return new NextResponse('Ошибка сервера при создании Stripe-сессии', { status: 500 });
  }
}