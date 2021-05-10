import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    :root {
        --text-dark: #34313D;
        --text-med: #9E9AA8;
        --text-light: #fff;

        --primary: #2BD0D0;
        --secondary: #3A3054;
        --primary-light: #9AE3E3;
        --secondary-light: #5E4A90;

        --grey: #B6B4BC;

        --background-dark: #232127;
        --background-med: #EFF1F7;
        --background-light: #fff;

        --warningRed: #f46262;
        --warningRed-light: #E28080;
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
        color: var(--text-med);
        overflow-x: hidden;
    }

    section {
        overflow-x: hidden;
    }

    h1 {
        font-size: 2.625rem;
        font-weight: 700;
        line-height: 3rem;
        color: var(--text-dark);

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