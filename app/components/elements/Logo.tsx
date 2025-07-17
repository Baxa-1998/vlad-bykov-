import logo from '@/public/img/logo.png'
import Image from 'next/image'


const Logo = () => (

    <Image className='logo__img' src={logo} width={60} height={40} alt='Logo' />
 
)

export default Logo