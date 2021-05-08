import React from 'react';
import useComparePath from '../../hooks/useComparePath';

import { LinkWithin, PageLink, ButtonLink} from '../Links';
import {
    NavContainer,
    MainLinksWrap,
    LinkWrap,
    ButtonLinkWrap
} from './MobileNavElements';

const MobileNav = ({navOpen, toggle}) => {
    const isHome = useComparePath('/');

    return (
        <>
            <NavContainer navOpen={navOpen}>
                { isHome ? 
                <LinkWrap>
                    <LinkWithin to='try-app' smooth={true} duration={500} spy={true} exact='true' offset={-60} onClick={toggle} tabIndex='0' fontSize='1.125rem' fontWeight='700' color='var(--navLink-lightText)' hoverColor='var(--navLink-lightText)'>Try It Out</LinkWithin>
                </LinkWrap>
                : null }
                <MainLinksWrap>
                    <LinkWrap>
                        <PageLink to='/' onClick={toggle} fontSize='1.125rem' fontWeight='700' color='var(--navLink-lightText)' hoverColor='var(--navLink-lightText)'>Features</PageLink>
                    </LinkWrap>
                    <LinkWrap>
                        <PageLink to='/' onClick={toggle} fontSize='1.125rem' fontWeight='700' color='var(--navLink-lightText)' hoverColor='var(--navLink-lightText)'>Pricing</PageLink>
                    </LinkWrap>
                    <LinkWrap>
                        <PageLink to='/' onClick={toggle} fontSize='1.125rem' fontWeight='700' color='var(--navLink-lightText)' hoverColor='var(--navLink-lightText)'>Resources</PageLink>
                    </LinkWrap>
                </MainLinksWrap>
                    <LinkWrap>
                        <PageLink to='/' onClick={toggle} fontSize='1.125rem' fontWeight='700' color='var(--navLink-lightText)' hoverColor='var(--navLink-lightText)'>Login</PageLink>
                    </LinkWrap>
                    <ButtonLinkWrap>
                        <ButtonLink to='/' onClick={toggle} padding='0.75rem 0 0.625rem' fontSize='1.125rem' >Sign Up</ButtonLink>
                    </ButtonLinkWrap>
    
            </NavContainer>
        </>
    )
}

export default MobileNav;
