import React from "react";



export const DropdownList = (props) => {
    if(!props.options) {
        return null
    }
    return (
        <select className="dropdown-list"  >
            {
            props.options.map(element => 
            <option key={element}>{element}</option>)
            }
        </select>
    );
};

