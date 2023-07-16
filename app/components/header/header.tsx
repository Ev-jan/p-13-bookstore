"use client"
import { StyledHeader, Logo, HeaderContainer} from "./style"
import HeaderNav from "../headerNav/headerNav";
import { navItems } from '@/app/data';
import { usePathname } from "next/navigation";
import Link from 'next/link';


const Header = () => {
const pathname = usePathname();
const isOnMainPage = pathname === "/";

    return (
        <HeaderContainer>
        <StyledHeader>
            {isOnMainPage ? (<Logo>Bookshop</Logo>) : (<Logo><Link href="/">Bookshop</Link></Logo>)}
            <HeaderNav navItems={navItems}/>
        </StyledHeader>
        </HeaderContainer>
    )
};

export default Header