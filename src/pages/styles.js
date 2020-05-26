import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const FormContainer = styled.div`
    max-width: 480px;
    padding: 30px 50px 50px 50px;
    border-radius: 3px;
    
    background: #FFF;

    -webkit-box-shadow: 1px 1px 20px 0px rgba(0,0,0,0.15);
    -moz-box-shadow: 1px 1px 20px 0px rgba(0,0,0,0.15);
    box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.15);

    h3 {
        text-align: center;
        padding: 0 0 40px 0;
        font-size: 20px;
        color: #5E6C84;
    }

    div {
        display: flex;
        justify-content: space-between;

        margin-top: 18px;
    }

    a {
        text-decoration: none;
    }
`
