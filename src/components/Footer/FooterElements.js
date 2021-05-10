import styled from 'styled-components';

export const FooterContainer = styled.footer`
    padding: 3.5rem 1.5rem;
    background-color: var(--background-dark);

    @media screen and (min-width: 768px) {
        padding: 3.5rem 2.5rem; 
    }

`;

export const FooterWrap = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
    max-width: 1100px;
    margin: 0 auto;
    align-items: start;


    @media screen and (min-width: 1024px) {
        display: grid;
        grid-template-columns: 1fr 2fr;
    }
`;

export const FooterLogoWrap = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 3rem;

    @media screen and (min-width: 1024px) {
        justify-content: flex-start;
    }
`;

export const FooterNav = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 3rem;

    @media screen and (min-width: 1024px) {
        flex-direction: row;
        gap: 6rem;
    }
`;

export const FooterNavWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 2.5rem;
    text-align: center;

@media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    gap: 5rem;
    text-align: left;
}
`

export const FooterNavSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
`;

export const FooterNavHeading = styled.h3`
    margin-bottom: 0.75rem;
    font-size: 1rem;
    line-height: 1.5rem;
    color: var(--text-light);
    
`;

export const LinkWrap = styled.div`

`
export const FooterSocialsWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 1.5rem;
`;