import styled from 'styled-components';

export const ErrorMessage = styled.p`
    margin: ${props => props.margin};
    font-size: ${props => props.fontSize};
    font-style: italic;
    line-height: 1.125rem;
    color: var(--warningRed);
`