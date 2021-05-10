import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const LinkWithin = styled(LinkS)`
    position: relative;
    font-size: ${props => props.fontSize};
    font-weight: ${props => props.fontWeight};
    color: ${props => props.color};
    text-decoration: none;
    cursor: pointer;
    transition: color 300ms ease-in-out;

    & svg path {
        fill: ${props => props.color};
        transition: fill 300ms ease-in-out;
    }

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        height: 0px;
        width: 0%;
        background-color: ${props => props.hoverColor};
        transition: height 200ms ease-in-out, width 200ms ease-in-out;
    }


    &:hover {
        color: ${props => props.hoverColor};

        & svg path {
            fill: ${props => props.hoverColor};
        }
    }

    &:focus {
        outline: 0;
        color: ${props => props.hoverColor};

        &::after {
            height: 2px;
            width: 100%;
        }

        & svg path {
            fill: ${props => props.hoverColor};
        }
    }
`;

export const PageLink = styled(LinkR)`
    position: relative;
    font-size: ${props => props.fontSize};
    font-weight: ${props => props.fontWeight};
    color: ${props => props.color};
    text-decoration: none;
    cursor: pointer;
    transition: color 300ms ease-in-out;
    white-space: nowrap;

    &:hover {
        color: ${props => props.hoverColor};
    }

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        height: 0px;
        width: 0%;
        background-color: ${props => props.hoverColor};
        transition: height 200ms ease-in-out, width 200ms ease-in-out;
    }

    &:focus {
        outline: 0;
        color: ${props => props.hoverColor};

        &::after {
        height: 2px;
        width: 100%;
        }
    }
`;

export const ButtonLink = styled(LinkR)`
    display: inline-block;
    width: 100%;
    padding: ${({padding}) => padding};
    background-color: var(--primary);
    border-radius: 1.75rem;
    font-size: ${({fontSize}) => fontSize};
    font-weight: 700;
    color: var(--text-light);
    text-decoration: none;
    transition: background-color 300ms ease-in-out;

    &:hover, &:focus {
        outline: none;
        background-color: var(--primary-light);
    }
`;

export const LinkOut = styled.a`
    position: relative;
    font-size: ${props => props.fontSize};
    color: ${props => props.color};
    transition: color 300ms ease-in-out;
    text-decoration: none;

    & svg path {
        fill: ${props => props.color};
        transition: fill 300ms ease-in-out;
    }

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        height: 0px;
        width: 0%;
        background-color: ${props => props.hoverColor};
        transition: height 200ms ease-in-out, width 200ms ease-in-out;
    }

    &:hover {
        color: ${props => props.hoverColor};

        & svg path {
            fill: ${props => props.hoverColor};
        }
    }

    &:focus {
        outline: 0;
        color: ${props => props.hoverColor};

        & svg path {
            fill: ${props => props.hoverColor};
        }

        &::after {
        height: 2px;
        width: 100%;
        }
    }

`