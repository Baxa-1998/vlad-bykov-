import Link from 'next/link';

import { Button } from '../../elements/Button';
import Image from 'next/image';
import { useLang } from '@/app/hooks/useLang';

const Footer = () => {
  const { lang, translations } = useLang();

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__links">
          <h2 className="footer__links_title">{translations[lang].footer.heading1}</h2>
          <p className="footer__links_subtitle">{translations[lang].footer.subtitle}</p>
          <input type="email" placeholder="E-mail" />
          <Button className={'footer__links_btn'}>{translations[lang].footer.button}</Button>
        </div>
        <div className="footer__links">
          <h2 className="footer__links_title">VLAD BYKOV</h2>
          <ul>
            <Link href={'/about'}>
              <li>{translations[lang].footer.link1}</li>
            </Link>
            <Link href={'/catalog'}>
              <li>{translations[lang].footer.link2}</li>
            </Link>
            <Link href={'/contacts'}>
              <li>{translations[lang].footer.link3}</li>
            </Link>
            <Link href={'/custom'}>
              <li>{translations[lang].footer.link4}</li>
            </Link>
          </ul>
        </div>
        <div className="footer__links">
          <h2 className="footer__links_title">{translations[lang].footer.heading2}</h2>
          <ul>
            <Link href={'/delivery'}>
              <li>{translations[lang].footer.link5}</li>
            </Link>
            <Link href={'/cancellation'}>
              <li>{translations[lang].footer.link6}</li>
            </Link>
            <Link href={'/faq'}>
              <li>{translations[lang].footer.link7}</li>
            </Link>
            <Link href={'/payment'}>
              <li>{translations[lang].footer.link8}</li>
            </Link>
            <Link href={'/policy'}>
              <li>{translations[lang].footer.link9}</li>
            </Link>
            <Link href={'/'}>
              <li>{translations[lang].footer.link10}</li>
            </Link>
          </ul>
        </div>
        <div className="footer__links">
          <h2 className="footer__links_title">{translations[lang].footer.heading3}</h2>
          <p className="footer__links_subtitle">{translations[lang].footer.full_version}</p>
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
