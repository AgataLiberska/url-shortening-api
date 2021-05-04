import React from 'react';
import imgLogo from '../../images/logo.svg';
import {
    HeaderContainer,
    HeaderWrap,
    HeaderLogo,
    MenuToggle,
    OpenMenuIcon,
    CloseMenuIcon,
    MainNavWrap,
    MainNavLinkWithin,
    MainNavLink,
    UserLinks,
    ButtonLink
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
                <MainNavWrap>
                    <MainNavLinkWithin to='/' tabindex='0'>Try It Out</MainNavLinkWithin>
                    <MainNavLink to='/'>Features</MainNavLink>
                    <MainNavLink to='/'>Pricing</MainNavLink>
                    <MainNavLink to='/'>Resources</MainNavLink>
                </MainNavWrap>
                <UserLinks>
                    <MainNavLink to='/'>Login</MainNavLink>
                    <ButtonLink to='/'>Sign Up</ButtonLink>
                </UserLinks>
            </HeaderWrap>
        </HeaderContainer>
    )
}

export default Header;
