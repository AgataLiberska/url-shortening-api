import React from 'react';
import imgLogo from '../../images/logo.svg';
import { LinkWithin, PageLink, ButtonLink } from '../Links';
import {
    HeaderContainer,
    HeaderWrap,
    HeaderLogo,
    MenuToggle,
    OpenMenuIcon,
    CloseMenuIcon,
    HeaderNav,
    MainNavWrap,
    UserLinksWrap,
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
                <HeaderNav>
                    <MainNavWrap>
                        <LinkWithin to='try-app' smooth={true} duration={500} spy={true} exact='true' offset={-60} tabIndex='0' fontSize='1rem' fontWeight='700' color='var(--navLink-darkText)' hoverColor='var(--navLink-dark-hover)'>Try It Out</LinkWithin>
                        <PageLink to='/' fontSize='1rem' fontWeight='700' color='var(--navLink-darkText)' hoverColor='var(--navLink-dark-hover)'>Features</PageLink>
                        <PageLink to='/' fontSize='1rem' fontWeight='700' color='var(--navLink-darkText)' hoverColor='var(--navLink-dark-hover)'>Pricing</PageLink>
                        <PageLink to='/' fontSize='1rem' fontWeight='700' color='var(--navLink-darkText)' hoverColor='var(--navLink-dark-hover)'>Resources</PageLink>
                    </MainNavWrap>
                    <UserLinksWrap>
                        <PageLink to='/' fontSize='1rem' fontWeight='700' color='var(--navLink-darkText)' hoverColor='var(--navLink-dark-hover)'>Log In</PageLink>
                        <ButtonLink to='/' fontSize='1rem' padding='0.5rem 1.5rem'>Sign Up</ButtonLink>
                    </UserLinksWrap>
                </HeaderNav>
            </HeaderWrap>
        </HeaderContainer>
    )
}

export default Header;
