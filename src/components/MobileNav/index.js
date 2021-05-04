import React from 'react';

import {
    NavContainer,
    MainLinksWrap, 
    MobileLinkWithin,
    MobileLink,
    ButtonLink
} from './MobileNavElements';

const MobileNav = ({navOpen, toggle}) => {
    return (
        <>
            <NavContainer isopen={navOpen}>
                <MobileLinkWithin to='/' onClick={toggle}>Try It Out</MobileLinkWithin>
                <MainLinksWrap>
                    <MobileLink to='/' onClick={toggle}>Features</MobileLink>
                    <MobileLink to='/' onClick={toggle}>Pricing</MobileLink>
                    <MobileLink to='/' onClick={toggle}>Resources</MobileLink>
                </MainLinksWrap>
                <MobileLink to='/' onClick={toggle}>Login</MobileLink>
                <ButtonLink to='/' onClick={toggle}>Sign Up</ButtonLink>
            </NavContainer>
        </>
    )
}

export default MobileNav;
