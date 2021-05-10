import styled from 'styled-components';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export const HeaderContainer = styled.header`
    margin: auto;
    padding: 2.5rem 1.5rem 1.5rem;
    background: #fff;  

    @media screen and (min-width: 768px) {
        padding: 2.5rem 2.5rem 1.5rem;
    }
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
    background-color: var(--background-light);
    border: none;
    cursor: pointer;

    &:focus {
        outline: 2px solid var(--text-med);
    }

    @media screen and (min-width: 1024px) {
        display: none;
    }
`;

export const OpenMenuIcon = styled(AiOutlineMenu)`
    position: absolute;
    display: ${({navopen}) => (navopen ? 'none' : 'inline')};
    height: 2rem;
    width: 2rem;
    color: var(--text-med);
    transform: translate(-50%, -50%);
`;

export const CloseMenuIcon = styled(AiOutlineClose)`
    position: absolute;
    display: ${({navopen}) => (navopen ? 'inline' : 'none')};
    height: 2rem;
    width: 2rem;
    color: var(--text-med);
    transform: translate(-50%, -50%);
`;

export const HeaderNav = styled.nav`
    display: none;

    @media screen and (min-width: 1024px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-left: 3rem;
        flex-grow:1;
    }
`

export const MainNavWrap = styled.div`
        display: flex;
        flex-grow: 1;
        gap: 2rem;
    }
`;

export const UserLinksWrap = styled.div`
        display: flex;
        align-items: center;
        gap: 2rem;
`;