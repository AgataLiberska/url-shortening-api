import styled from 'styled-components';

export const InfoSectionContainer = styled.section`
    padding: 0 1.5rem 5rem;
    background-color: var(--background-med);

    @media screen and (min-width: 768px) {
        padding: 0 2.5rem 5rem;
    }

    @media screen and (min-width: 1024px) {
        padding: 0 2.5rem 7.5rem;
    }
`;

export const InfoSectionWrapper = styled.div`
    max-width: 1100px;
    margin: auto;
    text-align: center;
`;

export const InfoHeading = styled.h2`
    margin-bottom: 1rem;
    font-size: 1.75rem;
    line-height: 3rem;
    color: var(--text-dark);

    @media screen and (min-width: 1024px) {
        margin-bottom: 1.125rem;
        font-size: 2.5rem;
        line-height: 3rem;
    }
`;

export const InfoCopy = styled.p`
    margin-bottom: 5.75rem;
    font-size: 1rem;
    line-height: 1.75rem;

    @media screen and (min-width: 1024px) {
        max-width: 34rem;
        margin: 0 auto 6.25rem;
        font-size: 1.125rem;
        line-height: 2rem;
    }
`;

export const InfoCardsContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 5.75rem;

    &::before {
        content: '';
        position: absolute;
        width: 0.5rem;
        height: 100%;
        left: 50%;
        transform: translateX(-50%);
        background-color: var(--primary);
        
    }

    @media screen and (min-width: 1024px) {
        flex-direction: row;
        gap: 1.75rem;
        height: 22.25rem;

        &::before {
            width: 100%;
            height: 0.5rem;
            left: unset;
            top: 40%;
            transform: translate(0);
        }
    }
`;

export const InfoCardWrap = styled.div`
    position: relative;
    padding: 4.75rem 2rem 2.5rem;
    background-color: var(--background-light);
    border-radius: 5px;

    @media screen and (min-width: 1024px) {
        height: max-content;
        text-align: left;

        &:nth-of-type(2) {
            top: 44px;
        }

        &:nth-of-type(3) {
            top: 88px;
        }
    };

`;

export const InfoIconWrap = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5.5rem;
    width: 5.5rem;
    border-radius: 50%;
    background-color: var(--secondary);

    @media screen and (min-width: 1024px) {
        left: 2rem;
        transform: translateY(-50%);
    };
`;

export const InfoIcon = styled.img`

`;

export const InfoCardHeading = styled.h3`
    margin-bottom: 0.75rem;
    font-size: 1.375rem;
    line-height: 2rem;
    color: var(--text-dark);
`;

export const InfoCardCopy = styled.p`
    font-size: 0.9375rem;
    line-height: 1.625rem;
`;