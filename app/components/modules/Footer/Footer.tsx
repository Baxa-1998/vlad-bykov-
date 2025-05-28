import Link from 'next/link';

import FooterLinks from './FooterLinks';
import FooterMobileLink from './FooterMobileLink';
import { useLang } from '@/app/hooks/useLang';
import { useMediaQuery } from '@/app/hooks/useMediaQuery';
import Logo from '../../elements/Logo';
import { Button } from '../../elements/Button';
import Image from 'next/image';
import facebook from '../../../../public/img/facebook.svg';

const Footer = () => {
  const { lang, translations } = useLang();
  const isMedia950 = useMediaQuery(950);
  const isMedia640 = useMediaQuery(640);

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__links">
          <h2 className="footer__links_title">ПРИВАТНЫЕ АКЦИИ</h2>
          <p className="footer__links_subtitle">
            Только для членов клуба. Только <br /> для избранных, кто ценит стиль.
          </p>
          <input type="email" placeholder="E-mail" />
          <Button className={'footer__links_btn'}>ОСТАВИТЬ ЗАЯВКУ</Button>
        </div>
        <div className="footer__links">
          <h2 className="footer__links_title">VLAD BYKOV</h2>
          <ul>
            <Link href={'/'}>
              <li>О бренде</li>
            </Link>
            <Link href={'/'}>
              <li>Коллекции</li>
            </Link>
            <Link href={'/'}>
              <li>Контакты</li>
            </Link>
            <Link href={'/'}>
              <li>Индивидуальный пошив</li>
            </Link>
          </ul>
        </div>
        <div className="footer__links">
          <h2 className="footer__links_title">ОБСЛУЖИВАНИЕ</h2>
          <ul>
            <Link href={'/'}>
              <li>Доставка</li>
            </Link>
            <Link href={'/'}>
              <li>Возврат и отмена</li>
            </Link>
            <Link href={'/'}>
              <li>Вопросы и ответы</li>
            </Link>
            <Link href={'/'}>
              <li>Методы оплаты</li>
            </Link>
            <Link href={'/'}>
              <li>Политика конфиденциальности</li>
            </Link>
            <Link href={'/'}>
              <li>Условия пользования</li>
            </Link>
          </ul>
        </div>
        <div className="footer__links">
          <h2 className="footer__links_title">НОВЫЙ УРОВЕНЬ РОСКОШИ</h2>
          <p className="footer__links_subtitle">
            Уделяя особое внимание <br /> неподвластному времени стилю, <br /> ремесленному
            мастерству и <br />
            использованию лучших натуральных <br /> материалов, Vlad Bykov предлагает <br />{' '}
            коллекции, представляющие собой <br /> чистую роскошь по элегантной цене.
          </p>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__socials">
          <Link href={'/'}>
            <Image src={'/img/facebook.svg'} width={15} height={15} alt="socials" />
          </Link>
          <Link href={'/'}>
            <Image src={'/img/instagram.svg'} width={15} height={15} alt="socials" />
          </Link>
          <Link href={'/'}>
            <Image src={'/img/youtube.svg'} width={20} height={20} alt="socials" />
          </Link>
          <Link href={'/'}>
            <Image src={'/img/tik-tok.svg'} width={20} height={20} alt="socials" />
          </Link>
        </div>
            <div className="footer__logo">
          <Image
            src={'/img/footer-logo.svg'}
            width={0}
            height={0}
            style={{ width: 'fit-content', height: 'fit-content' }}
            alt="socials"
          />
            <div className="footer__currency">
                      <p>РОССИЯ (РУБ ₽)</p>
                      <Image src={'/img/footer-arrow.svg'} width={10} height={6} alt="arrow" />
                    </div>
        </div>
        <div className="footer__payment">
          <Link href={'/'}>
            <Image
              src={'/img/payment1.svg'}
              width={0}
              height={0}
              style={{ width: 'fit-content', height: 'fit-content' }}
              alt="socials"
            />
          </Link>
          <Link href={'/'}>
            <Image
              src={'/img/payment2.svg'}
              width={0}
              height={0}
              style={{ width: 'fit-content', height: 'fit-content' }}
              alt="socials"
            />
          </Link>
          <Link href={'/'}>
            <Image
              src={'/img/payment3.svg'}
              width={0}
              height={0}
              style={{ width: 'fit-content', height: 'fit-content' }}
              alt="socials"
            />
          </Link>
          <Link href={'/'}>
            <Image
              src={'/img/payment4.svg'}
              width={0}
              height={0}
              style={{ width: 'fit-content', height: 'fit-content' }}
              alt="socials"
            />
          </Link>
          <Link href={'/'}>
            <Image
              src={'/img/payment5.svg'}
              width={0}
              height={0}
              style={{ width: 'fit-content', height: 'fit-content' }}
              alt="socials"
            />
          </Link>
          <Link href={'/'}>
            <Image
              src={'/img/payment6.svg'}
              width={0}
              height={0}
              style={{ width: 'fit-content', height: 'fit-content' }}
              alt="socials"
            />
          </Link>
          <Link href={'/'}>
            <Image
              src={'/img/payment7.svg'}
              width={0}
              height={0}
              style={{ width: 'fit-content', height: 'fit-content' }}
              alt="socials"
            />
          </Link>
          <Link href={'/'}>
            <Image
              src={'/img/payment8.svg'}
              width={0}
              height={0}
              style={{ width: 'fit-content', height: 'fit-content' }}
              alt="socials"
            />
          </Link>
          <Link href={'/'}>
            <Image
              src={'/img/payment9.svg'}
              width={0}
              height={0}
              style={{ width: 'fit-content', height: 'fit-content' }}
              alt="socials"
            />
          </Link>
        </div>
    
      </div>
    </footer>
  );
};

export default Footer;
