import React from "react";


/***
 * Dropdown list plugin, also available on NPM
 * 
 */

export const DropdownList = (props) => {
    if(!props.options) {
        return null
    }
    
    return (
        <select className="dropdown-list" onChange={(e)=>props.onChange(e.target.value)}>
            {
            props.options.map(element => 
            <option key={element.id} value={element.id}>{element.value}</option>)
            }
        </select>
    );
};
