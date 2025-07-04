import { ICartItem } from '@/app/types/cart';
import { NextRequest, NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';
import clientPromise from '@/app/lib/mongodb';
import { getDbAndReqBody } from '@/app/lib/utils/api-routes';

export async function POST(req: NextRequest) {
  const TOKEN = process.env.NEXT_TELEGRAM_BOT_TOKEN;

  const CHAT_IDS = [process.env.NEXT_TELEGRAM_CHAT_ID].filter(Boolean);

  try {
    const data = await req.json();
    const { cartItems } = data;

    // ✅ Подключение к базе с твоим способом
    const { db } = await getDbAndReqBody(clientPromise, null);

    // ✅ Обновляем inStock
    for (const item of cartItems) {
      await db
        .collection('cloth')
        .updateOne({ _id: new ObjectId(item.productId) }, { $inc: { inStock: -item.count } });
    }

    // ✅ Отправка в Telegram
    const message = `
🛒 Новый заказ!
👤 Имя: ${data.name} ${data.surname}
📧 Email: ${data.email}
🏢 Компания: ${data.company}
📍 Адрес: ${data.address}, ${data.apartment}
🏙️ Город: ${data.city}
📮 Почтовый индекс: ${data.zipCode}
🌍 Страна: ${data.country}
🚚 Метод доставки: ${data.deliveryMethod}
💳 Метод оплаты: ${data.paymentMethod}
💬 Подписка на новости: ${data.subscribeNews ? 'Да' : 'Нет'}
💾 Сохранить для следующего раза: ${data.saveForNext ? 'Да' : 'Нет'}
📦 Товары:
${cartItems
  .map((item: ICartItem) => `— ${item.name} | ${item.size} | ${item.count} шт. | ${item.price}₽`)
  .join('\n')}
💰 Общая сумма: ${data.totalPrice}₽
`;

    const responses = await Promise.all(
      CHAT_IDS.map((chatId) =>
        fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: chatId,
            text: message,
            parse_mode: 'HTML',
          }),
        }),
      ),
    );

    const hasError = responses.some((res) => !res.ok);
    if (hasError) {
      console.error('Ошибка Telegram:', await Promise.all(responses.map((r) => r.text())));
      return NextResponse.json({ error: 'Ошибка Telegram' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Ошибка при отправке заказа:', error);
    return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 });
  }
}
