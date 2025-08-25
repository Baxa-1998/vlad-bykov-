import logo from '@/public/img/loader-logo.png';

import Image from 'next/image';

const Logo = () => (
  <Image
    className="logo__img"
    style={{ width: '75px', height: '75px' }}
    src={logo}
    // width={60}
    // height={45}
    alt="Logo"
    
  />
);

export default Logo;
