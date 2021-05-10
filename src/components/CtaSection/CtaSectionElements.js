import styled from 'styled-components';
import imgMobile from '../../images/bg-boost-mobile.svg';
import imgDesktop from '../../images/bg-boost-desktop.svg';

export const CtaSectionContainer = styled.section`
    padding: 5.5625rem 1.5rem;
    background-color: var(--secondary);
    background-image: url(${imgMobile});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    
    @media screen and (min-width: 768px) {
        padding: 3.75rem 2.5rem;
    }

    @media screen and (min-width: 1024px) {
        background-image: url(${imgDesktop});
    }
`;

export const CtaSectionWrap = styled.div`
    max-width: 1100px;
    margin: auto;
    text-align: center;
`;

export const CtaSectionHeading = styled.h2`
    margin-bottom: 1rem;
    font-size: 1.75rem;
    line-height: 3rem;
    color: var(--text-light);

    @media screen and (min-width: 1024px) {
        margin-bottom: 2rem;
        font-size: 2.5rem;
    }
`;

export const ButtonLinkWrap = styled.div`
    width: 12.5rem;
    margin: auto;
`;

