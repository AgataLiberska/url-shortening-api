import styled from 'styled-components';

export const Button = styled.button`
    flex: 1;
    padding: 0.5rem;    
    background-color: var(--btn-primary);
    border: 0;
    border-radius: 5px;
    font-size: ${({largeText}) => largeText ? '1.125rem' : '1rem'};
    font-weight: 700;
    color: #fff;
    transition: background-color 300ms ease-in-out;

    &:hover, &:focus {
        outline: none;
        cursor: pointer;
        background-color: var(--btn-hover);
    }
`;

export const WarningButton = styled(Button)`
    background-color: var(--btn-warning);

    &:hover, &:focus {
        background-color: var(--btn-warning-hover);
    }
`;

export const ButtonCopy = styled(Button)`
    background-color: ${({isCopied}) => (isCopied ? 'var(--btn-copied)' : 'var(--btn-primary)')};

    &:hover, &:focus {
        background-color: ${({isCopied}) => (isCopied ? 'var(--btn-copied-hover)' : 'var(--btn-hover)')};
    }
`;