import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        min-width: 375px;
        margin: 0;
        font-family: "Nunito", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        background-color: ${theme.colors.primaryBg};
        color: ${theme.colors.primaryFont};
        font-size: 14px;
        font-weight: 400;
        line-height: 1.2;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
        cursor: pointer;
        color: ${theme.colors.primaryFont};
    }

    button {
        background-color: unset;
        border: none;
        cursor: pointer;
    }

    section {
        margin-bottom: 145px;

        @media ${theme.media.mobile} {
            margin-bottom: 80px;
        }
        
    }

`

