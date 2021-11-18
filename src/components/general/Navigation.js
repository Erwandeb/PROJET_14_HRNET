import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


const NavPortail = () => {

    const [navigationDisplay, setNavigationDisplay] = useState(true);
    
 
  function  handleNavigationDisplay(){
    setNavigationDisplay(true)
    }

  function  handleNavigationDisplayReturn(){
        setNavigationDisplay(false)
    }
    
    return (
        <div className="navigation">
            {
                navigationDisplay ?(
                    <NavLink 
                    className="button-redirection" 
                    exact to ="/Employees"
                    activeClassName="nav-active"
                    onClick={handleNavigationDisplayReturn}
                    >
                      CURRENT VIEW EMPLOYEES
                    </NavLink>
                ):(
                    <NavLink 
                    className="button-redirection" 
                    exact to ="/" 
                    activeClassName="nav-active"
                    onClick={handleNavigationDisplay}
                    >
                     HOME
                    </NavLink>
                )
            }
          
        </div>
    );
};

export default NavPortail;