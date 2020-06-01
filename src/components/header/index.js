import React from 'react';
import { Head } from './styles';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <Head>
            <h1>Kanban</h1>
            <ul>
                <li>
                    <NavLink to="/board">
                        <span>Workspace</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard">
                        <span>Dashboard</span>
                    </NavLink>
                </li>
            </ul>
        </Head>
    );
}

export default Header;