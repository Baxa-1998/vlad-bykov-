// app/api/send-order/route.ts 
import { ICartItem } from '@/app/types/cart';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const TOKEN = process.env.NEXT_TELEGRAM_BOT_TOKEN;
  

  // ✅ Массив чатов (добавь дополнительные переменные в .env)
  const CHAT_IDS = [
    process.env.NEXT_TELEGRAM_CHAT_ID,
    process.env.NEXT_TELEGRAM_CHAT_ID_2,
  ].filter(Boolean); // удалит undefined, если переменная не указана

  try {
    const data = await req.json();

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
${data.cartItems
  .map((item: ICartItem) => `— ${item.name} | ${item.size} | ${item.count} шт. | ${item.price}₽`)
  .join('\n')}

💰 Общая сумма: ${data.totalPrice}₽
`;

    // ✅ Отправка сообщений во все чаты
    const responses = await Promise.all(
      CHAT_IDS.map(chatId =>
        fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: message,
            parse_mode: 'HTML',
          }),
        })
      )
    );

    const hasError = responses.some(res => !res.ok);
    if (hasError) {
      console.error('Ошибка Telegram:', await Promise.all(responses.map(r => r.text())));
      return NextResponse.json({ error: 'Ошибка Telegram' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Ошибка при отправке заказа:', error);
    return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 });
  }
}