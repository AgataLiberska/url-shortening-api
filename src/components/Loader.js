import React from 'react';
import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
    to {
        opacity: 1;
        transform: translate3d(0, -1rem, 0);
    }
`;

const LoaderContainer = styled.div`
    display: flex;
    margin: 2rem;
    justify-content: center;
`;

const LoadingItem = styled.div`
    height: 1rem;
    width: 1rem;
    margin: 1rem 0.3rem 0.5rem;
    background-color: var(--primary);
    border-radius: 50%;
    opacity: 0.6;
    animation: 0.9s ${bounce} infinite alternate;

    &:nth-of-type(2) {
        animation-delay: 0.2s;
    }

    &:nth-of-type(3) {
        animation-delay: 0.4s;
    }
`;


const Loader = () => {
    return (
        <LoaderContainer>
            <LoadingItem />
            <LoadingItem />
            <LoadingItem />
        </LoaderContainer>
    );
};

export default Loader;