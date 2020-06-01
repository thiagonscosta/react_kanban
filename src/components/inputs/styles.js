import styled, { css } from 'styled-components';

export const FormInput = styled.input`
    width: 100%;
    margin-top: 22px;
    padding: 10px 14px;
    border-radius: 4px;
    border: 2px solid #b3bac5;
    font-size: 15px;
    color: #444;
    transition: border-color 0.2s;

    /* background-color: #F4F7F9; */

    ${props => props.error && css`
        border: 2px solid #de350b;
        margin-top: 8px;
    `}
`

// #de350b
// #e14a24