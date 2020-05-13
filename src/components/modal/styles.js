import styled from 'styled-components';

export const ModalContainer = styled.div `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
`;

export const ModalBody = styled.div `
    position: fixed;
    background: #ffffff;
    width: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`