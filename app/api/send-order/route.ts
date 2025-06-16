// app/api/send-order/route.ts
import { NextRequest, NextResponse } from 'next/server';



export async function POST(req: NextRequest) {
    
  const TOKEN = process.env.NEXT_TELEGRAM_BOT_TOKEN;
  const CHAT_ID = process.env.NEXT_TELEGRAM_CHAT_ID;
  try {
    const data = await req.json();

    const message = `
🛒 Новый заказ!

👤 Имя: ${data.name} ${data.surname}
📧 Email: ${data.email}
🏢 Компания: ${data.company}
📍 Адрес: ${data.address}, ${data.apartment}
🌍 Страна: ${data.country}

🚚 Метод доставки: ${data.deliveryMethod}
💳 Метод оплаты: ${data.paymentMethod}

💬 Подписка на новости: ${data.subscribeNews ? 'Да' : 'Нет'}
💾 Сохранить для следующего раза: ${data.saveForNext ? 'Да' : 'Нет'}

📦 Товары:
${data.cartItems.map((item: any) =>
  `— ${item.name} | ${item.size} | ${item.count} шт. | ${item.price}₽`
).join('\n')}

💰 Общая сумма: ${data.totalPrice}₽
`;

    const res = await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'HTML',
      }),
    });

    if (!res.ok) {
      console.error('Ошибка Telegram:', await res.text());
      return NextResponse.json({ error: 'Ошибка Telegram' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Ошибка при отправке заказа:', error);
    return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 });
  }
}