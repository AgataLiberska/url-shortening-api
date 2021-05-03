import React from 'react';
import imgLogo from '../../images/logo.svg';
import {
    HeaderContainer,
    HeaderWrap,
    HeaderLogo,
    MenuToggle,
    OpenMenuIcon,
    CloseMenuIcon,
} from './HeaderElements';

const Header = ({isOpen, toggle}) => {
    return (
        <HeaderContainer  >
            <HeaderWrap>
                <HeaderLogo src={imgLogo} alt='Shortly logo' />
                <MenuToggle aria-label='Toggle mobile menu' onClick={toggle}>
                    <OpenMenuIcon isOpen={isOpen}/>
                    <CloseMenuIcon isOpen={isOpen} />
                </MenuToggle>
            </HeaderWrap>
        </HeaderContainer>
    )
}

export default Header;
