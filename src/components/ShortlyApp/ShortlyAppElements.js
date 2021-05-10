import styled from 'styled-components';
import mobileBg from '../../images/bg-shorten-mobile.svg';
import desktopBg from '../../images/bg-shorten-desktop.svg';
import { Form, FormControl } from '../Forms';


export const ShortlyAppContainer = styled.section`
    position: relative;
    padding: 0 1.5rem 5rem;
    text-align: center;
    z-index: 1;

    &::before {
        content: '';
        position: absolute;
        top: 80px;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: var(--background-med);
        z-index: -1;
    }

    @media screen and (min-width: 768px) {
        padding: 0 2.5rem 5rem;
    }

    @media screen and (min-width: 1024px) {
        padding: 0 2.5rem 7.5rem;

        &::before {
            top: 56px;
        }
    }
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
    background-color: var(--secondary);
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
        text-align: left;
    }
`;

export const LinkListContainer = styled.ul`
    
`

export const LinkListItem = styled.li`
    margin-bottom: 1rem;
    background-color: var(--background-light);
    border-radius: 5px;
    text-align: left;

    &:last-of-type {
        margin-bottom: 0;
    }

    @media screen and (min-width: 1024px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.125rem 2rem; 
        gap: 1rem;
    }
`

export const LongLinkWrap = styled.div`
    padding: 0.5rem 1rem;
    border-bottom: 1px solid rgb(160 154 168 / 0.25);

    @media screen and (min-width: 1024px) {
        width: calc(45% - 1rem);
        flex-shrink: 1;
        border: 0;
        padding: unset;
    }
`

export const LongLink = styled.p`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 1rem;
    line-height: 2.25rem;
    color: var(--text-dark);

    @media screen and (min-width: 1024px) {
        font-size: 1.25rem;
        line-height: 2.25rem;
    }
`

export const ShortLinkWrap = styled.div`
    padding: 0.375rem 1rem 1rem;

    @media screen and (min-width: 1024px) {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 1.25rem;
        width: 55%;
        padding: unset;
    }
`

export const ShortLink = styled.p`
    margin-bottom: 0.5rem;
    font-size: 1rem;
    line-height: 2.25rem;
    color: var(--primary);

    @media screen and (min-width: 1024px) {
        margin-bottom: unset;
        font-size: 1.25rem;
        line-height: 2.25rem;
    }
`
export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;

    @media screen and (min-width: 1024px) {
        width: 12rem;
    }
`
export const ButtonWrap = styled.div`
    width: 5.625rem;
    flex: 1;
`