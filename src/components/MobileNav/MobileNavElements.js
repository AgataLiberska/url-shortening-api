import styled from 'styled-components';

export const NavContainer = styled.nav`
    position: absolute;
    top: ${({navOpen}) => navOpen ? '6rem' : '-100%'};
    left: 50%;
    transform: translateX(-50%);
    width: 90vw;
    max-width: 400px;
    padding: 2.5rem 1.5rem;
    background: var(--secondary);
    border-radius: 10px;
    text-align: center;
    transition: all 300ms ease-in-out;
    z-index: 999;

    @media screen and (min-width: 1024px) {
        display: none;
    }
`;

export const ConditionalLinkWrap = styled.div`
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid rgb(160 154 168 / 0.25);
`

export const MainLinksWrap = styled.div`
    margin-bottom: 2rem;
    border-bottom: 1px solid rgb(160 154 168 / 0.25);
`;

export const LinkWrap = styled.div`
    margin-bottom: 2rem;   
`


export const ButtonLinkWrap = styled.div`
    width: 100%;
    display: flex;
`