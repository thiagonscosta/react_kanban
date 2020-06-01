import styled from 'styled-components';

export const Container = styled.div`
    height: calc(100%);
    width: 100%;

    /* display: grid;
    grid-template-areas: 
        "header header"
        "asideRight main"; */
    display: flex;
    flex-direction: row;
`

export const Head = styled.header`
    grid-area: header;
`
export const AsideRight = styled.aside `
    grid-area: asideRight;
`
export const Main = styled.main`
    grid-area: main;
`