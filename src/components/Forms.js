import styled from 'styled-components';

export const Form = styled.form`
    display: block;
`;

export const FormControl = styled.div`
    margin-bottom: 1rem;
`;

export const HiddenLabel = styled.label`
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    white-space: nowrap;
    clip-path: inset(50%);
`;

export const FormInput = styled.input`
    box-sizing: inherit;
    width: 100%;
    padding:  0.375rem 0.5rem 0.375rem 1rem;
    border: ${({isValid}) => isValid ? 'none' : '3px solid var(--warningRed)'};
    border-radius: 0.375rem;
    font-size: 1rem;
    line-height: 2.25rem;
    
    &::placeholder {
        color: ${({isValid}) => isValid ? 'var(--grey)' : 'var(--warningRed-light)'};
    }

    &:focus {
        outline: 0;
        border: ${({isValid}) => isValid ? '3px solid var(--primary)' : '3px solid var(--warningRed)'};
    }

    @media screen and (min-width: 768px) {
        height: 4rem;
    }
`;

export const SubmitButton = styled.button`
    width: 100%;
    padding: 0.625rem 2.5rem;
    background: var(--primary);
    border: 0;
    border-radius: 0.375rem;
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.75rem;
    color: var(--text-light);
    transition: background-color 300ms ease-in-out;

    &:hover, &:focus {
        outline: 0;
        cursor: pointer;
        background-color: var(--primary-light);
    }

    @media screen and (min-width: 768px) {
        height: 4rem;
        width: 11.75rem;
    }
`;