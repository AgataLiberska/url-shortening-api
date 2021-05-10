import styled from 'styled-components';
import heroImg from '../../images/illustration-working.svg';

export const HeroContainer = styled.section`
    margin: 0 auto 5.5rem;

    @media screen and (min-width: 1024px) {
        width: 100vw;
        margin: 3rem auto 3.5rem;
        padding: 0 2.5rem;
        overflow-x: hidden;
    }
`;   

export const HeroWrap = styled.div`
    position: relative;
    max-width: 1100px;
    margin: auto;

`;

export const HeroImage = styled.div`
    height: 89vw;
    max-height: 30.125rem;
    margin-left: 1.5rem;
    background-image: url(${heroImg});
    background-repeat: no-repeat;
    background-size: cover;

    @media screen and (min-width: 768px) {
        margin: 0 1.5rem;
        background-position: center;
        background-size: contain;
    }

    @media screen and (min-width: 1024px) {
        position: absolute;
        left: 58%;
        width: 51vw;
        max-width: 46rem;
        height: 30.125rem;
        margin: 0;
        background-size: contain;
        background-position: center left;
    }
`;

export const HeroContent = styled.div`
    margin: 2.25rem 1.5rem 0;
    text-align: center;

    @media screen and (min-width: 1024px) {
        width: 60%;
        max-width: 600px;
        height: 482px;
        margin: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        text-align: left;
        
    }
`;

export const HeroHeading = styled.h1`
    max-width: 470px;
    margin: 0 auto 1.5rem;

    @media screen and (min-width: 768px) {
        max-width: 600px;
    }

    @media screen and (min-width: 1024px) {
        margin: 0 0 0.5rem;
    }
`;

export const HeroCopy = styled.p`
    margin-bottom: 2rem;

    @media screen and (min-width: 768px) {
        max-width: 600px;
        margin: 0 auto 2.25rem;
        font-size: 1.375rem;
    }
`;

export const ButtonLinkWrap = styled.div`
    width: 12.5rem;
    margin: auto;

    @media screen and (min-width: 1024px) {
        margin: unset;
    }
`