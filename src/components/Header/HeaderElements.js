import styled from 'styled-components';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';

export const HeaderContainer = styled.header`
    margin: auto;
    padding: 2.5rem 1.5rem 1.5rem;
    background: #fff;
`;

export const HeaderWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    height: 2.25rem;
    margin: auto;
`;

export const HeaderLogo = styled.img`
    height: 100%;
    width: auto;
`;

export const MenuToggle = styled.button`
    position: relative;
    height: 2.25rem;
    width: 2.25rem;
    background-color: #fff;
    border: none;

    &:focus {
        outline: 2px solid var(--copy);
    }

    @media screen and (min-width: 1024px) {
        display: none;
    }
`;

export const OpenMenuIcon = styled(AiOutlineMenu)`
    position: absolute;
    display: ${({isOpen}) => (isOpen ? 'none' : 'inline')};
    height: 2rem;
    width: 2rem;
    color: var(--copy);
    transform: translate(-50%, -50%);
`;

export const CloseMenuIcon = styled(AiOutlineClose)`
    position: absolute;
    display: ${({isOpen}) => (isOpen ? 'inline' : 'none')};
    height: 2rem;
    width: 2rem;
    color: var(--copy);
    transform: translate(-50%, -50%);
`;

export const MainNavWrap = styled.div`
    display: none;

    @media screen and (min-width: 1024px) {
        display: block;
        margin-left: 2rem;
        display: flex;
        flex-grow: 1;
    }
`;

export const UserLinks = styled.div`
    display: none;

    @media screen and (min-width: 1024px) {
        display: block;
    }
`;

export const MainNavLinkWithin = styled(LinkS)`
    margin: 0 1rem;
    font-size: 1rem;
    color: var(--navLink-darkText);
    text-decoration: none;
    cursor: pointer;
    transition: color 300ms ease-in-out;

    &:hover {
        color: var(--navLink-hover);
    }
`;

export const MainNavLink = styled(LinkR)`
    margin: 0 1rem;
    font-size: 1rem;
    color: var(--navLink-darkText);
    text-decoration: none;
    transition: color 300ms ease-in-out;

    &:last-of-type{
        margin-right: 0;
    }

    &:hover {
        color: var(--navLink-hover);
    }
`;

export const ButtonLink = styled(MainNavLink)`
    padding: 0.5rem 1.5rem;
    background-color: var(--button-primary);
    border-radius: 1.75rem;
    color: var(--navLink-lightText);
    transition: background-color 300ms ease-in-out;

    &:hover {
        color: var(--navLink-lightText);
        background-color: var(--button-hover);
    }
`;