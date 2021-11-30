import React from "react";


export const DatePicker = (props) => {

    return(
      <input className="date-picker" type="date" onChange={(e)=>props.handleDate(e.target.value)} >
        
      </input>
    );
};