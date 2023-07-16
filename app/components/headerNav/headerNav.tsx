import { usePathname } from 'next/navigation'
import { StyledLInk, Nav } from './style';
import { INavItem } from '@/app/interfaces';
import IconBar from '../headerIconBar/iconBar';
import { User, Cart } from "./../../../public/icons"
import AuthModal from "../authModal/authModal";

type HeaderNavProps = {
  navItems: INavItem[];
}

const HeaderNav: React.FC<HeaderNavProps> = ({ navItems }) => {
  const pathname = usePathname()
  return (
    <>
      <Nav>
        <ul>
          {navItems
            .map(
              (item, index) => {
                const isActive = pathname === item.href;
                return (<li key={index}><StyledLInk $isActive={isActive} href={item.href}>{item.label}</StyledLInk></li>)
              }
            )}
        </ul>
      </Nav>
      <IconBar 
            userIcon={<User />}
            cartIcon={<Cart/>} 
            authModal={<AuthModal />}
            pathName={pathname}
            />
    </>
  )
}

export default HeaderNav