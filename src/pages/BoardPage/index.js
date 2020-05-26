import React from 'react';
import Board from '../../components/board';
import Header from '../../components/header';
import SideMenu from '../../components/sideMenu';

import { Container } from './styles';

function BoardPage () {
    return (
        <>
            <Header />
            <Container>
                <SideMenu />
                <Board />
            </Container>
        </>
    )
}

export default BoardPage;