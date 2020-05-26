import React, { useState } from 'react';
import {
    SideMenu,
    ButtonExpand,
    ArrowIcon,
    Account
} from './styles';
import avatar from '../../assets/avatar.jpg';

function Menu () {
    const [expanded, setExpanded] = useState(true);
    const [rotate, setRotate] = useState(true);

    function expandedMenu() {
        let xd = !expanded; 
        let rt = !rotate;
        setExpanded(xd);
        setRotate(true);
    }

    return (
        <SideMenu isExpanded={expanded}>
            <ButtonExpand onClick={expandedMenu} >
                <ArrowIcon isExpanded={expanded} size={18}/>
            </ButtonExpand>
            <Account>
                <img src={avatar} />
            </Account>
        </SideMenu>
    );
}

export default Menu;