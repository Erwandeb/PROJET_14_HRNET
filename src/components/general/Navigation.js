import React from 'react';
import { NavLink } from 'react-router-dom';


const NavPortail = (props) => {
    return (
        <div className="navigation">
            <NavLink 
            className="button-redirection" 
            exact to = {props.navContent.urlPath}
            activeClassName="nav-active"
            >
            {props.navContent.currentNavName}
            </NavLink>
        </div>
    );
};

export default NavPortail;