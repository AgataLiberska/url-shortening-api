import styled from 'styled-components';
import { Link } from 'react-router-dom';
import heroImg from '../../images/illustration-working.svg';

export const HeroContainer = styled.section`
    margin: 0 auto 5.5rem;

    @media screen and (min-width: 1024px) {
        width: 100vw;
        margin: 3rem auto 3.5rem;
        padding: 0 1.5rem;
        overflow-x: hidden;
    }
`   

export const HeroWrap = styled.div`
    max-width: 1100px;
    margin: auto;

`

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
        left: 55%;
        width: 51vw;
        height: 30.125rem;
        margin: 0;
        background-size: contain;
        background-position: center left;
    }
`

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
`

export const HeroHeading = styled.h1`
    max-width: 470px;
    margin: 0 auto 1.5rem;

    @media screen and (min-width: 768px) {
        max-width: 600px;
    }

    @media screen and (min-width: 1024px) {
        margin: 0 0 0.5rem;
    }
`

export const HeroCopy = styled.p`
    margin-bottom: 2rem;

    @media screen and (min-width: 768px) {
        max-width: 600px;
        margin: 0 auto 2.25rem;
        font-size: 1.375rem;
    }
`

export const HeroCTA = styled(Link)`
    display: inline-block;
    padding: 0.875rem 2.5rem 0.75rem;
    background-color: var(--button-primary);
    font-weight: 700;
    color: var(--navLink-lightText);
    text-decoration: none;
    border-radius: 1.75rem;
    transition: background-color 300ms ease-in-out;

    &:hover, &:focus {
        outline: none;
        background-color: var(--button-hover);
    }
`