import React, { useState } from "react";


export const DatePicker = () => {

    const date_picker_element = document.querySelector('.date-picker');
    const selected_date_element = document.querySelector('.date-picker .selected-date');
    const dates_element = document.querySelector('.date-picker .dates')


    //date_picker_element.addEventListener('click',toggleDatePicker);

    /*
    const toggleDatePicker =(e)=>{
        dates_element.classList.toggle('active');
    }
    */
    
    return(
        <div className="date-picker">
            <div className="selected-date"></div>
            <div className="dates">
                <div className="month">
                    <div className="arrows prev-mth"></div>
                    <div className="mth"></div>
                    <div className="arrows next-mth"></div>
                </div>
                <div className="days"></div>
            </div>
        </div>
    );
};