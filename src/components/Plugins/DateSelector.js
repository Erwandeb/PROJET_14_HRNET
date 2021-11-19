import React, { useState } from "react";
import DatePicker from "react-datepicker";

export const DateSelector = () => {

    const [date, setDate] = useState(new Date())


    const dateSelected = (date) =>{
        setDate ({
            date
        })
    }

    /*date.toLocaleDateString*/
    return(
        <div>
            hello
        </div>
    );
};