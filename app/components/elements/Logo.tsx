import logo from '@/public/img/loader-logo.png';

import Image from 'next/image';

const Logo = () => (
  <Image
    className="logo__img"
    style={{ width: 'fit-content', height: 'fit-content' }}
    src={logo}
    width={60}
    height={40}
    alt="Logo"
  />
);

export default Logo;
