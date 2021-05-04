import React from 'react';

import {
    NavContainer,
    MainLinksWrap, 
    LinkWrap,
    MobileLinkWithin,
    MobileLink,
    ButtonLink
} from './MobileNavElements';

const MobileNav = ({navOpen, toggle}) => {
    return (
        <>
            <NavContainer isOpen={navOpen}>
                <MobileLinkWithin to='/' onClick={toggle} tabindex='0'>Try It Out</MobileLinkWithin>
                <MainLinksWrap>
                    <LinkWrap>
                        <MobileLink to='/' onClick={toggle}>Features</MobileLink>
                    </LinkWrap>
                    <LinkWrap>
                        <MobileLink to='/' onClick={toggle}>Pricing</MobileLink>
                    </LinkWrap>
                    <LinkWrap>
                        <MobileLink to='/' onClick={toggle}>Resources</MobileLink>
                    </LinkWrap>
                </MainLinksWrap>
                    <MobileLink to='/' onClick={toggle}>Login</MobileLink>
                    <ButtonLink to='/' onClick={toggle}>Sign Up</ButtonLink>
            </NavContainer>
        </>
    )
}

export default MobileNav;
