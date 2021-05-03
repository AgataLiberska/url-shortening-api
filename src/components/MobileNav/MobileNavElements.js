import styled from 'styled-components';
import {css, keyframes} from 'styled-components';

const slideIn = keyframes`
    from {
        display: none;
        opacity: 0;
        top: -100%;
    }

    1% {
        display: block;
        opacity: 0;
        top: -100%;
    }

    to {
        display: block;
        opacity: 1;
        top: 6.25rem;
    }
`;

const slideOut = keyframes`
    from {
        display: block;
        opacity: 1;
        top: 6.25rem;
    }

    99% {
        display: block;
        opacity: 0;
        top: -100%;
    }

    to {
        display: none;
        opacity: 0;
        top: -100%;
    }
`;

const showNav = () => css`
    ${slideIn} 400ms ease-in forwards;
`

const hideNav = () => css`
    ${slideOut} 400ms  ease-out forwards;
`

export const NavContainer = styled.nav`
    position: absolute;
    left: 1.5rem;
    right: 1.5rem;
    padding: 2.5rem 1.5rem;
    background: var(--background-dark);
    border-radius: 10px;
    animation: ${({isopen}) => (isopen ? css`${showNav}` : css`${hideNav}`)}
`;