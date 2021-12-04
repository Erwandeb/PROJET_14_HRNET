import React, {useState, useEffect} from "react";


export const DatePicker = (props) => {

  const [displayDatePicker, setDisplayDatePicker] = useState(true);

  const dateText = document.querySelector('.date-text');
  const displayDay = document.querySelector('.displayDay');


  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]

  const showDatePicker = () => {
    setDisplayDatePicker(false)
    createDay()
  }

  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();

  let selectedDate = date;
  let selectedDay = day;
  let selectedMonth = month;
  let selectedYear = year;

  let dateToDisplay ;


  function formatDate (d) {
    let day = d.getDate();
    if (day < 10) {
      day = '0' + day;
    }
  
    let month = d.getMonth() + 1;
    if (month < 10) {
      month = '0' + month;
    }
  
    let year = d.getFullYear();
  
    return day + ' / ' + month + ' / ' + year;
  }



  async function goToNextMonth(){
    month++;
    if(month > 11){
      month = 0;
      year++
    }
    dateToDisplay = months[month] +' '+ year;
    dateText.innerHTML=`${dateToDisplay}`
    createDay()
  };
  

  async function goToPrevMonth (){
    month --;
    if(month < 0){
      month = 11;
      year --;
    }
    dateToDisplay = months[month] +' '+ year;
    dateText.innerHTML=`${dateToDisplay}`
    createDay()
  };

  function createDay(){
    displayDay.innerHTML="";
    let totalDaysInAMonth = 31;
    
    if (month === 1){
      totalDaysInAMonth = 28;
    }

    for(let i=0; i<totalDaysInAMonth; i++){
      const dayElement = document.createElement('div');
      dayElement.classList.add('day');
      dayElement.textContent = i+1;

      dayElement.addEventListener('click', function () {
        selectedDate = new Date(year+'-'+(month+1)+'-'+(i+1));
        selectedDay = (i+1);
        selectedMonth = month;
        selectedYear = year;
       
        dateText.textContent = formatDate(selectedDate);
        dateText.dataset.value = selectedDate;
        createDay();
      })
      
      displayDay.appendChild(dayElement);
        
    }
  }



    return( 
    <>
      {
        displayDatePicker ? (
          <div className="button-display-datePicker" onClick={showDatePicker} >
              <p>Choose a date</p>
          </div>
          ):(
            <div className="date-picker">
              <div className="banner">
                <i className="fas fa-arrow-left" onClick={goToPrevMonth}></i>
                  <p className="date-text"></p>
                <i className="fas fa-arrow-right" onClick={goToNextMonth}></i>
              </div>
            <div className="pick-a-day">
                <div className="displayDay"></div>
            </div>
          </div>
          )
        }
      </>  
    );
};