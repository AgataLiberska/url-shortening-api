import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const NavContainer = styled.nav`
    position: absolute;
    top: ${({navOpen}) => navOpen ? '6rem' : '-100%'};
    left: 50%;
    transform: translateX(-50%);
    width: 90vw;
    max-width: 400px;
    padding: 2.5rem 1.5rem;
    background: var(--background-dark);
    border-radius: 10px;
    text-align: center;
    transition: all 300ms ease-in-out;

    @media screen and (min-width: 1024px) {
        display: none;
    }
`;

export const MainLinksWrap = styled.ul`
    margin-bottom: 2rem;
    padding-top: 2rem;
    border-top: 1px solid rgb(160 154 168 / 0.25);
    border-bottom: 1px solid rgb(160 154 168 / 0.25);
`;

export const LinkWrap = styled.li`

`


export const MobileLinkWithin = styled(LinkS)`
    position: relative;
    display: inline-block;
    margin-bottom: 2rem;
    font-weight: 700;
    line-height: 1.75rem;
    color: #fff;
    text-decoration: none;

    &::after {
        content: '';
        position: absolute;
        bottom: -0.25rem;
        left: 0;
        height: 0px;
        width: 0%;
        background-color: var(--navLink-lightText);
        transition: height 200ms ease-in-out, width 200ms ease-in-out;
    }           

    &:focus {
        outline: 0;

        &::after {
            height: 2px;
            width: 100%;
        }
    }
`;

export const MobileLink = styled(LinkR)`
    position: relative;
    display: inline-block;
    margin-bottom: 2rem;
    font-weight: 700;
    line-height: 1.75rem;
    color: var(--navLink-lightText);
    text-decoration: none;

    &::after {
        content: '';
        position: absolute;
        bottom: -0.25rem;
        left: 0;
        height: 0px;
        width: 0%;
        background-color: var(--navLink-lightText);
        transition: height 200ms ease-in-out, width 200ms ease-in-out;
    }

    &:focus {
        outline: 0;

        &::after {
            height: 2px;
            width: 100%;
        }
    }
`;

export const ButtonLink = styled(MobileLink)`
    width: 100%;
    margin: 0;
    padding: 0.75rem 0 0.625rem;
    background-color: var(--btn-primary);
    border-radius: 1.75rem;
    transition: background-color 300ms ease-in-out;

    &:focus {
        outline: 0;
        background-color: var(--btn-hover);

        &::after {
            height: 0;
            width: 0;
        }
    }
`;
