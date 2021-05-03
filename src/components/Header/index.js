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

const Header = ({navOpen, toggle}) => {
    return (
        <HeaderContainer  >
            <HeaderWrap>
                <HeaderLogo src={imgLogo} alt='Shortly logo' />
                <MenuToggle aria-label='Toggle mobile menu' aria-expanded={navOpen} onClick={toggle}>
                    <OpenMenuIcon isOpen={navOpen}/>
                    <CloseMenuIcon isOpen={navOpen} />
                </MenuToggle>
            </HeaderWrap>
        </HeaderContainer>
    )
}

export default Header;
