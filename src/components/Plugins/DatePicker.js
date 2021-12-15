import React, {useState, useEffect} from "react";


export const DatePicker = (props) => {

  let date = new Date();
  
  const [displayDatePicker, setDisplayDatePicker] = useState(true);
  const [displayDay, setDisplayDay] = useState();
  const [dateToDisplay, setDateToDisplay] = useState("");
  const [month, setMonth] = useState(date.getMonth());
  const [day, setDay] = useState(date.getUTCDate());
  const [year, setYear] = useState(date.getFullYear());
  const [chooseDay, setChooseDay] = useState(false)
  const [isDaySelected, setIsDaySelected] = useState(false);

  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
  const dateText = document.querySelector('.date-text');
  const dayDiv = document.querySelector(".day");

  let selectedDate = date;
  let selectedDay = day;
  let selectedMonth = month;
  let selectedYear = year;

  let creatingMonthAndYear;

 
  const [dateOfTheDay, setDateOfTheDay] = useState(months[month]+ ' ' + day + 'th  ' + year);

  const showDatePicker = () => {
    setDisplayDatePicker(false);
    setDateToDisplay(dateOfTheDay);
  }
  const closeDatePicker = () => {
    setDisplayDatePicker(true);
  }

 
  function formatDate (d) {
    let day = d.getUTCDate();
    if (day < 10) {
      day = '0' + day;
    }
    console.log("daySSS", day)
  
    let month = d.getMonth()+1;
    if (month < 10) {
      month = '0' + month;
    }
    console.log("monthSSS", month)


    let year = d.getFullYear();
    console.log("yearsSSS", year)
  
    return day + '/' + month + '/' + year;
  }


  function goToNextMonth(){
    setDateOfTheDay('');
    setMonth(month+1)
   
    if(month >= 11){
      setMonth(month-11)
      setYear(year+1)
    }
    if(month === -1){
      setMonth(0)
      setYear(year-1)
    }
    
    setDateToDisplay(months[month] +' '+ year);
    setChooseDay(true);
    createDay();
  };
  
 
  function goToPrevMonth (){
    setDateOfTheDay('');
    setMonth(month-1)

    if(month === 0){
      setMonth(month + 11)
      setYear(year-1)
    }
    if(month === -1){
      setMonth(0)
      setYear(year-1)
    }

   setDateToDisplay(months[month] +' '+ year);
   setChooseDay(true);
    createDay();
  };


  function dateValue(){
    selectedDate = new Date(year+'-'+(month+1)+'-'+(day));
    selectedDay = day;
    selectedMonth = month;
    selectedYear = year;

    console.log("day")
    setIsDaySelected(true);


    console.log("pololo",selectedDate)
    const dateTransformed = formatDate(selectedDate)

    const selectedDay = document.querySelector(".day-selected");

    selectedDay.dataset.value = dateTransformed;
  }


  
  function createDay(){
    let totalDaysInMonth = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
    if (month === 1){
      totalDaysInMonth = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28];
    }
    
    
    if (selectedDay === (day) && selectedYear === year && selectedMonth === month) {
      //day.classList.add('selected');
      setIsDaySelected(true);
    }


    setDisplayDay(totalDaysInMonth.map((day) =>
      <div key={day} onClick={dateValue} value="" className={`${isDaySelected ? "day-selected" : "day"}`}>
        {day}
      </div>)
    );


    return(displayDay)
  
  }
  



    return( 
      <>
        {
          displayDatePicker ? (
            <div className="button-display-datePicker" onClick={showDatePicker} >
                <p>choose a date</p>
            </div>
            ):(
              <div className="date-picker">
                <div className="banner">
                  <i className="fas fa-arrow-left" onClick={goToPrevMonth}></i>
                    <p className="date-text">{dateToDisplay}</p>
                  <i className="fas fa-arrow-right" onClick={goToNextMonth}></i>
                </div>
              </div>
            )
        }
          {
            chooseDay ? 
            (     
              <div className="pick-a-day">
                <div className="displayDay">{displayDay}</div>
              </div>
            )
              :
            ( 
              <div></div>
            )   
          }
           
      </>  
    );
};