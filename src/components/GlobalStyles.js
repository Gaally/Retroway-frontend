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
        background: rgb(12,21,34);
        background: linear-gradient(90deg, rgba(12,21,34,1) 20%, rgba(20,31,49,1) 50%, rgba(12,21,34,1) 80%);        
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
        padding: 0 1.5rem;
        line-height: 200%;
        color: #F5F5FA;
    }
    a {
        text-decoration: none;
    }
    input {
        font-family: 'IBM Plex Sans', sans-serif;
        font-weight: bold;
    }

    button {
        font-family: 'IBM Plex Sans', sans-serif;
        font-size: 1rem;
        margin: 1rem;
		font-weight: bold;
		letter-spacing: 0.1rem;
		border: none;
        outline: none;
		padding: 0.5rem 2rem;
		cursor: pointer;
		background: #283c5e;
		color: #f5f5fa;

        @media (max-width: 768px) {
		    input {
			    width: 30vw;
	    	}
	    	button {
			    padding: 0.5rem 1rem;
		    }
	    }

	    @media (min-width: 769px) and (max-width: 800px) {
		    input {
	    		width: 25vw;
	    	}
    	}
    }
`;

export default GlobalStyles;
