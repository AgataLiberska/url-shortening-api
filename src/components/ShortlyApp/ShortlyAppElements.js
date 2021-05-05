import styled from 'styled-components';
import mobileBg from '../../images/bg-shorten-mobile.svg';
import desktopBg from '../../images/bg-boost-desktop.svg';
import { Form, FormControl } from '../Forms';


export const ShortlyAppContainer = styled.section`
    padding: 0 1.5rem;
    text-align: center;
`;

export const ShortlyWrap = styled.div`
    max-width: 1100px;
    margin: auto;
`;

export const ShortlyFormContainer = styled.div`
    margin-bottom: 1.5rem;
`;

export const ShortlyFormWrap = styled.div`
    padding: 1.5rem;
    background-color: var(--background-dark);
    background-image: url(${mobileBg});
    background-repeat: no-repeat;
    background-position: top right;
    border-radius: 10px;

    @media screen and (min-width: 768px) {
        background-image: url(${desktopBg});
    }
`;

export const TryShortlyForm = styled(Form)`

    @media screen and (min-width: 768px) {
        display: flex;
    }
`;

export const TryShortlyFormControl = styled(FormControl)`

    @media screen and (min-width: 768px) {
        flex: 1;
        margin-bottom: unset;
        margin-right: 1.5rem;
    }
`;

export const LinkListContainer = styled.ul`
    margin-bottom: 6.5rem;
`

export const LinkListItem = styled.li`
    margin-bottom: 1rem;
    background-color: var(--background-card);
`
