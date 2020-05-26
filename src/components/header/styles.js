import styled from 'styled-components';

export const Head = styled.header`
    background: #FFFFFF;
    width: 100%;
    height: 60px;
    padding: 0 30px;

    display: flex;
    align-items: center;

    box-shadow: 0 1px 4px 0 rgba(209, 212, 225, 1);

    ul {
        list-style-type: none;
        margin: 0 0 0 80px;
        padding: 0;
        overflow: hidden;
    }

    li {
        float: left;
    }

    li a {
        display: block;
        padding: 14px;

        text-align: center;
        text-decoration: none;
        font-weight: bold;        
        
    }
`;