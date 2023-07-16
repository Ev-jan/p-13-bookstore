"use client"

import { useState } from "react";
import { StyledIconBar, CartContainer, CartCount, StyledLink } from "./style";
import {  useAppSelector, selectIsAuthenticated, selectCartIds } from "../../redux/hooks";


type IconBarProps = {
    userIcon: React.ReactNode;
    cartIcon: React.ReactNode;
    authModal: React.ReactNode;
    pathName: string;
  }

const IconBar: React.FC<IconBarProps> = ({  
    userIcon,
    cartIcon, 
    authModal,
    pathName
}) => {

const [isModalHidden, setIsModalHidden] = useState(true);
const isAuthenticated = useAppSelector(selectIsAuthenticated);
const cartCount = useAppSelector(selectCartIds).length;

function handleClick(){
    setIsModalHidden((prevModalState) => !prevModalState)
}

    return (

            <StyledIconBar>
                {isAuthenticated ? (<StyledLink $active={pathName.startsWith("/profile")} href="/profile">{userIcon}</StyledLink>) : (<button title="Log in to access profile" onClick={handleClick}>{userIcon}</button>)}
                <CartContainer>
                    {isAuthenticated ? (<StyledLink $active={pathName.startsWith("/cart")} href="/cart">{cartIcon}</StyledLink>) : <span title="Log in to access cart">{cartIcon}</span>}
                    <CartCount $count={cartCount}>{cartCount}</CartCount>
                </CartContainer>
                {!isAuthenticated ? !isModalHidden && authModal : null}
            </StyledIconBar>
    )
};

export default IconBar