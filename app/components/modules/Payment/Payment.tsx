import React from 'react';
import styles from '@/app/styles/payment/index.module.scss';
export const Payment = () => {
  return (
    <div className={styles.payment}>
      <h2>МЕТОДЫ ОПЛАТЫ</h2>
      <div className={styles.paymentWrapper}>
        <div className={styles.paymentItem}>
          <h2>Мы принимаем:</h2>
          <p>1.PayPal</p>
          <p>2.Credit Card</p>
          <p>3.iDeal</p>
          <p>4.Bank Transferl</p>
          <p>5.Bancontact/Mister Cash</p>
          <p>6.ING Home'Pay</p>
          <p>7.SOFORT Banking</p>
          <p>8.Belfius Direct Net</p>
          <p>9.EPS</p>
          <p>10.Giropay</p>
          <p>11.KBC/CBC. </p>
        </div>
        <div className={styles.paymentItem}>
          <h2>PayPal</h2>
          <p>
            При выборе опции PayPal при оформлении заказа вы будете перенаправлены на сайт PayPal
            для «Войти» и проверки отображаемой суммы перед нажатием «Оплатить сейчас». После
            завершения этой транзакции вы вернетесь на AURELIEN-ONLINE.COM.
          </p>
        </div>
        <div className={styles.paymentItem}>
          <h2>Credit Card</h2>
          <p>
            При выборе опции PayPal при оформлении заказа вы будете перенаправлены на сайт PayPal
            для «Войти» и проверки отображаемой суммы перед нажатием «Оплатить сейчас». После
            завершения этой транзакции вы вернетесь на AURELIEN-ONLINE.COM.
          </p>
        </div>
        <div className={styles.paymentItem}>
          <h2>iDeal</h2>
          <p>
            При выборе опции PayPal при оформлении заказа вы будете перенаправлены на сайт PayPal
            для «Войти» и проверки отображаемой суммы перед нажатием «Оплатить сейчас». После
            завершения этой транзакции вы вернетесь на AURELIEN-ONLINE.COM.
          </p>
        </div>
        <div className={styles.paymentItem}>
          <h2>Bank Transfer</h2>
          <p>
            При выборе опции PayPal при оформлении заказа вы будете перенаправлены на сайт PayPal
            для «Войти» и проверки отображаемой суммы перед нажатием «Оплатить сейчас». После
            завершения этой транзакции вы вернетесь на AURELIEN-ONLINE.COM.
          </p>
        </div>
        <div className={styles.paymentItem}>
          <h2>Bancontact/Mister Cash</h2>
          <p>
            При выборе опции PayPal при оформлении заказа вы будете перенаправлены на сайт PayPal
            для «Войти» и проверки отображаемой суммы перед нажатием «Оплатить сейчас». После
            завершения этой транзакции вы вернетесь на AURELIEN-ONLINE.COM.
          </p>
        </div>
        <div className={styles.paymentItem}>
          <h2>ING Home'Pay</h2>
          <p>
            При выборе опции PayPal при оформлении заказа вы будете перенаправлены на сайт PayPal
            для «Войти» и проверки отображаемой суммы перед нажатием «Оплатить сейчас». После
            завершения этой транзакции вы вернетесь на AURELIEN-ONLINE.COM.
          </p>
        </div>
        <div className={styles.paymentItem}>
          <h2>WEBSITE SECURITY</h2>
          <p>
            Чтобы сделать ваш процесс покупок безопасным, простым и надежным, AURELIEN-ONLINE.COM
            использует технологию Secure Socket Layer (SSL). Эта технология шифрует и защищает
            данные, которые вы отправляете через Интернет. <br /> <br /> Если SSL включен, вы
            увидите небольшой замок в левом верхнем углу браузера. Вы можете нажать на этот значок,
            чтобы узнать информацию о регистрации цифрового сертификата SSL. Вы также заметите, что
            когда вы смотрите на поле местоположения (URL) в верхней части браузера, вы увидите, что
            оно начинается с «https:» вместо обычного «http:». Это означает, что вы находитесь в
            безопасном режиме.
          </p>
        </div>
      </div>
    </div>
  );
};
