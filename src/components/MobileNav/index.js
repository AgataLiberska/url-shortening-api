import React from 'react';
import useComparePath from '../../hooks/useComparePath';

import { LinkWithin, PageLink, ButtonLink} from '../Links';
import {
    NavContainer,
    ConditionalLinkWrap,
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
                <ConditionalLinkWrap>
                    <LinkWithin to='try-app' smooth={true} duration={500} spy={true} exact='true' offset={-60} onClick={toggle} tabIndex={navOpen ? '0' : '-1'} fontSize='1.125rem' fontWeight='700' color='var(--text-light)' hoverColor='var(--text-light)'>Try It Out</LinkWithin>
                </ConditionalLinkWrap>
                : null }
                <MainLinksWrap>
                    <LinkWrap>
                        <PageLink to='/' onClick={toggle} tabIndex={navOpen ? '0' : '-1'} fontSize='1.125rem' fontWeight='700' color='var(--text-light)' hoverColor='var(--text-light)'>Features</PageLink>
                    </LinkWrap>
                    <LinkWrap>
                        <PageLink to='/' onClick={toggle} tabIndex={navOpen ? '0' : '-1'} fontSize='1.125rem' fontWeight='700' color='var(--text-light)' hoverColor='var(--text-light)'>Pricing</PageLink>
                    </LinkWrap>
                    <LinkWrap> 
                        <PageLink to='/' onClick={toggle} tabIndex={navOpen ? '0' : '-1'} fontSize='1.125rem' fontWeight='700' color='var(--text-light)' hoverColor='var(--text-light)'>Resources</PageLink>
                    </LinkWrap>
                </MainLinksWrap>
                    <LinkWrap>
                        <PageLink to='/' onClick={toggle} tabIndex={navOpen ? '0' : '-1'} fontSize='1.125rem' fontWeight='700' color='var(--text-light)' hoverColor='var(--text-light)'>Login</PageLink>
                    </LinkWrap>
                    <ButtonLinkWrap>
                        <ButtonLink to='/' onClick={toggle} tabIndex={navOpen ? '0' : '-1'} padding='0.75rem 0 0.625rem' fontSize='1.125rem' >Sign Up</ButtonLink>
                    </ButtonLinkWrap>
    
            </NavContainer>
        </>
    )
}

export default MobileNav;
