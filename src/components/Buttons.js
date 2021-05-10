import styled from 'styled-components';

export const Button = styled.button`
    flex: 1;
    width: 100%;
    padding: 0.5rem;    
    background-color: var(--primary);
    border: 0;
    border-radius: 5px;
    font-size: ${({largeText}) => largeText ? '1.125rem' : '1rem'};
    font-weight: 700;
    color: var(--text-light);
    cursor: pointer;
    transition: background-color 300ms ease-in-out;

    &:hover, &:focus {
        outline: none;
        
        background-color: var(--primary-light);
    }
`;

export const WarningButton = styled(Button)`
    background-color: var(--grey);

    &:hover, &:focus {
        background-color: var(--warningRed);
    }
`;

export const ButtonCopy = styled(Button)`
    background-color: ${({isCopied}) => (isCopied ? 'var(--secondary)' : 'var(--primary)')};

    &:hover, &:focus {
        background-color: ${({isCopied}) => (isCopied ? 'var(--secondary-light)' : 'var(--primary-light)')};
    }
`;