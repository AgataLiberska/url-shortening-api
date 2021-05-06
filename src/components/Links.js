import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const LinkWithin = styled(LinkS)`
    display: block;
    font-size: ${({largeText}) => largeText ? '1.125rem' : '1rem'};
    font-weight: 700;
    color: ${({darkText}) => darkText ? 'var(--navLink-darkText' : 'var(--navLink-lightText'};
    text-decoration: none;
    transition: color 300ms ease-in-out;

    &:hover {
        color: var(--navLink-hover);
    }
`;

export const PageLink = styled(LinkR)`

`;

export const CtaLink = styled(PageLink)`
    display: inline-block;
    padding: 0.875rem 2.5rem 0.75rem;
    background-color: var(--btn-primary);
    font-weight: 700;
    color: var(--navLink-lightText);
    text-decoration: none;
    border-radius: 1.75rem;
    transition: background-color 300ms ease-in-out;

    &:hover, &:focus {
        outline: none;
        background-color: var(--btn-hover);
    }
`;