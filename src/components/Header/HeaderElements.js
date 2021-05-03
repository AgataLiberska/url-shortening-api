import styled from 'styled-components';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

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