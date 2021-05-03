import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: inherit;
    }

    body {
        min-height: 100vh;
        font-family: 'Poppins', sans-serif;
        font-size: 1.125rem;
        font-weight: 500;

        --heading-dark: #34313D;
        --heading-light: #fff;
        --copy: #9E9AA8;

        --errorRed: #f46262;

        --button-primary: #28BD0D0;
        --button-hover: #9AE3E3;
        --button-active: #3A3054;

        --background-dark: #3A3054;
        --background-light: #EFF1F7;

        --navLink-darkText: #9E09AA8;
        --navLink-lightText: #fff;

        --footer-bg: #232127;

        --long-link: #34313D;
        --shortly-link: #28D0D0;
    }

    h1 {
        font-size: 2.625rem;
        font-weight: 700;
        line-height: 3rem;
        color: var(--heading-dark);

        @media screen and (min-width: 1040px) {
            font-size: 5rem;
            line-height: 5.625rem;
        }
    }

    h2 {
        font-size: 1.75rem;
        font-weight: 700;
        line-height: 3rem;

        @media screen and (min-width: 1040px) {
            font-size: 2.5rem;
        }
    }



`;

export default GlobalStyle;