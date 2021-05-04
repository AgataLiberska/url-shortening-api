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
`