import React, {useState} from "react";


export const DatePicker = (props) => {

  let date = new Date();
  
  const [displayDatePicker, setDisplayDatePicker] = useState(true);
  const [displayDay, setDisplayDay] = useState();
  const [dateToDisplay, setDateToDisplay] = useState("");
  const [month, setMonth] = useState(date.getMonth());
  const [day, setDay] = useState(date.getUTCDate());
  const [year, setYear] = useState(date.getFullYear());
  const [chooseDay, setChooseDay] = useState(false)
  const [daySelected, setDaySelected] = useState(new Date());
  const [dayChoosed, setDayChoosed] = useState(false);
  const [textInput, SetTextInput] = useState("");

  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]

  let selectedDate = date;
  let selectedDay = day;
  let selectedMonth = month;
  let selectedYear = year;


 
  const [dateOfTheDay, setDateOfTheDay] = useState(months[month]+ ' ' + day + 'th  ' + year);

  const showDatePicker = () => {
    setDisplayDatePicker(false);
    setDateToDisplay(dateOfTheDay);
  }
  const closeDatePicker = () => {
    setDisplayDatePicker(true);
    setChooseDay(false)
  }

 
  function formatDate (d) {
    let day = d.getUTCDate();
    if (day < 10) {
      day = '0' + day;
    }
    let month = d.getMonth()+1;
    if (month < 10) {
      month = '0' + month;
    }
    let year = d.getFullYear();
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


  function dateValue(day){
    selectedDate = new Date(year,month,day,10,0,0,0);
    selectedDay = day;
    selectedMonth = month;
    selectedYear = year;

    setDaySelected(selectedDate);
    props.handleDate(selectedDate);
    const dateTransformed = formatDate(selectedDate)
    setDateToDisplay(dateTransformed);

    closeDatePicker()
    setDayChoosed(true);
    SetTextInput(dateTransformed)
  }


 
  function createDay(){
    let totalDaysInMonth = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
    if (month === 1){
      totalDaysInMonth = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28];
    }
    
    const isDaySelected =(day)=>{
      const date = new Date(year,month,day-1,10,0,0,0);
      return formatDate(date) === formatDate(daySelected)
    }

    setDisplayDay(totalDaysInMonth.map((day) =>
      <div key={day} onClick={()=>dateValue(day)} className={`${isDaySelected(day) ? "day-selected" : "day"}`}>
        {day}
      </div>)
    );

    return(displayDay)
  }


  let totalDaysInMonth = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
  if (month === 1){
    totalDaysInMonth = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28];
  }
  
  const isDaySelected =(day)=>{
    const date = new Date(year,month,day);
    return formatDate(date) === formatDate(daySelected)
  }


    return( 
      <>
        {
          displayDatePicker ? (
            <div className="button-display-datePicker" onClick={showDatePicker} >
                {
                  dayChoosed ? 
                  (
                    <div>
                      <p>{textInput}</p>
                    </div>
                  )
                  :
                  (
                    <div>
                      <p>choose a date</p>
                    </div>
                  )
                }
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
                <div className="displayDay">{totalDaysInMonth.map((day) =>
                <div key={day} onClick={()=>dateValue(day)} className={`${isDaySelected(day+1) ? "day-selected" : "day"}`}>
                  {day}
                </div>)}</div>
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