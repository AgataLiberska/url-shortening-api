import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    :root {
        --heading-dark: #34313D;
        --heading-light: #fff;
        --copy: #9E9AA8;
        
        --formPlaceholder: #B6B4BC;
        --formPlaceholder-error: rgba(244, 99, 99, 0.5);

        --errorRed: #f46262;

        --button-primary: #2BD0D0;
        --button-hover: #9AE3E3;
        --button-active: #3A3054;
        --buttonText: #fff;

        --background-dark: #3A3054;
        --background-light: #EFF1F7;

        --navLink-darkText: #9E9AA8;
        --navLink-lightText: #fff;
        --navLink-hover: #34313D;

        --footer-bg: #232127;
        --footerLink: #fff;
        --footerLink-hover: #2BD0D0;

        --longLink: #34313D;
        --shortlyLink: #28D0D0;
    }

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
        line-height: 1.75rem;
        color: var(--copy);
        overflow-x: hidden;
    }

    #root {
        overflow-x: hidden;
    }

    main {
        width: 100%;
        overflow-x: hidden;
    }

    h1 {
        font-size: 2.625rem;
        font-weight: 700;
        line-height: 3rem;
        color: var(--heading-dark);

        @media screen and (min-width: 768px) {
            font-size: 4rem;
            line-height: 5rem;
        }

        @media screen and (min-width: 1280px) {
            font-size: 5rem;
            line-height: 5.625rem;
        }
    }

    h2 {
        font-size: 1.75rem;
        font-weight: 700;
        line-height: 3rem;

        @media screen and (min-width: 1024px) {
            font-size: 2.5rem;
        }
    }


    ul {
        list-style-type: none;
    }
`;

export default GlobalStyle;