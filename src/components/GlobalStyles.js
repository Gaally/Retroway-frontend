import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
    padding: 0;
	margin: 0;
	box-sizing: border-box;
    }

    html {
        &::-webkit-scrollbar {
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb {
            background-color: #283c5e;
        }
    }

    body {
        background: linear-gradient(#09101c, #141f31);
        font-family: 'IBM Plex Sans', sans-serif;
        width: 100%;
        color: #F5F5FA;
    }
    h2 {
        font-size: 3rem;
        font-weight: medium;
    }
    h3 {
        font-size: 1.3rem;
        color: #C0C0C0;
        padding: 1.5rem;
    }
    p {
        font-size: 1.2rem;
        line-height: 200%;
    }
    a {
        text-decoration: none;
    }
    input {
        font-family: 'IBM Plex Sans', sans-serif;
        font-weight: bold;
    }


`;

export default GlobalStyles;
