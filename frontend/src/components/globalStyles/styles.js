import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body {
        font-family: 'Segoe UI';
        font-size: 16px;
        color: #444444;
        background-color: white;
    }

    fieldset {
        border: 0;
    }

    legend {
        font-size: 25px;
        text-align: center;
    }
`