import {
    createGlobalStyle,
} from 'styled-components';

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
    }

    body {
        font: 14px 'Roboto', sans-serif;
        background: #F4F7F9; 
        color: #333;
        -webkit-font-smoothing: antialiased !important;
        text-rendering: optimizeLegibility !important;
        font-family: sans-serif;
    }

    ul {
        list-style: none;
    }

`;

// export const Container = styled.div`
//     max-width: 1380px;
//     margin-left: auto;
//     margin-right: auto;
//     padding-left: 15px;
//     padding-right: 15px;

//     &:before,
//     &:after {
//         content: " ";
//         display: table;
//     }
//     &:after {
//         clear: both
//     }
// `;
