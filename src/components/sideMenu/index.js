import React, { useState } from 'react';
import {
    SideMenu,
    ButtonExpand,
    ArrowIcon,
    Account,
    ExitIcon
} from './styles';
import avatar from '../../assets/avatar.jpg';

function Menu () {
    const [expanded, setExpanded] = useState(true);
    
    function expandedMenu() {
        let xd = !expanded; 
        setExpanded(xd);
    }

    return (
        <SideMenu isExpanded={expanded}>
            <ButtonExpand onClick={expandedMenu} >
                <ArrowIcon isExpanded={expanded} size={18}/>
            </ButtonExpand>
            <Account isExpanded={expanded}>
                <img src={avatar} alt="user avatar" />
                <span>userteste@email.com</span>
                <button>
                    <ExitIcon size={18}/>
                </button>
            </Account>
        </SideMenu>
    );
}

export default Menu;