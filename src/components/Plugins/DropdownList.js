import React from "react";


export const DropdownList = (props) => {

    console.log("vu props", props?.options?.states)
    const states = props?.options?.states;
    


    console.log("states", states)
    /*
 {
                states.map(option => 
                <options key={states?.name}>{states?.name}</options>
                )
            }
    */

    return (
        <select className="dropdow-list"  >
           
        </select>
    );
};