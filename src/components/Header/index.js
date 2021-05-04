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
import MobileNav from '../MobileNav';

const Header = ({navOpen, toggle}) => {
    return (
        <HeaderContainer  >
            <HeaderWrap>
                <HeaderLogo src={imgLogo} alt='Shortly logo' />
                <MenuToggle aria-label='Toggle mobile menu' aria-haspopup='true' aria-controls='mobileNav' aria-expanded={navOpen} onClick={toggle}>
                    <OpenMenuIcon navopen={navOpen ? 1 : 0}/>
                    <CloseMenuIcon navopen={navOpen ? 1 : 0} />
                </MenuToggle>
                <MobileNav id='mobileNav' navOpen={navOpen} toggle={toggle} />
                <MainNavWrap>
                    <MainNavLinkWithin to='/' tabIndex='0'>Try It Out</MainNavLinkWithin>
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
