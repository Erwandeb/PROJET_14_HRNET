import React, {useState, useEffect} from "react";


export const DatePicker =(props) => {

  let date = new Date();
  const [displayDatePicker, setDisplayDatePicker] = useState(true);
  const [displayDay, setDisplayDay] = useState();
  const [dateToDisplay, setDateToDisplay] = useState("");
  const [month, setMonth] = useState(date.getMonth())
  const [day, setDay] = useState(date.getDay())
  const [year, setYear] = useState(date.getFullYear())
  
 
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]

 
  //let day = date.getDate();
  //let month = date.getMonth();
  //let year = date.getFullYear();

  let selectedDate = date;
  let selectedDay = day;
  let selectedMonth = month;
  let selectedYear = year;

  let creatingMonthAndYear;

 
  const [dateOfTheDay, setDateOfTheDay] = useState(months[month]+ ' ' + day + 'th  ' + year);

  const showDatePicker = () => {
    setDisplayDatePicker(false);
  }
  const closeDatePicker = () => {
    setDisplayDatePicker(true);
  }
  /*
  // Gestion du format
  function formatDate (d) {
    let day = d.getDate();
    if (day < 10) {
      day = '0' + day;
    }
  
    let month = d.getMonth()+1 ;
    if (month < 10) {
      month = '0' + month;
    }

    let year = d.getFullYear();

    return day + ' / ' + month + ' / ' + year;
  }
*/


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
    
    setDateToDisplay(months[month] +' '+ year)
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

   setDateToDisplay(months[month] +' '+ year)
    createDay();
  };


  
  function createDay(){
    
    let totalDaysInAMonth = 31;
    
    
    if (month === 1){
      totalDaysInAMonth = 28;
    }
    

    
    for(let i=0; i<totalDaysInAMonth; i++){
      return <div key={i} className="day">{i+1}</div>
    }
    
      /*
      let dayDisplay = totalDaysInAMonth.map((day)=><div className="day">{day}</div>);
      
      return (dayDisplay);
      */
     /*
      if (selectedDay === (i + 1) && selectedYear === year && selectedMonth === month) {
        dayElement.classList.add('selected');
      }

      // eslint-disable-next-line no-loop-func
      dayElement.addEventListener('click', function () {
        selectedDate = new Date(year+'-'+(month+1)+'-'+(i+1));
        selectedDay = (i+1);
        selectedMonth = month;
        selectedYear = year;
       
        //dateText.textContent = formatDate(selectedDate);
        //dateText.dataset.value = selectedDate;
        //createDay();
        closeDatePicker();
      })
      */
        //displayDay.appendChild(dayElement);
    
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
                  <p className="date-text">{dateToDisplay}</p>
                <i className="fas fa-arrow-right" onClick={goToNextMonth}></i>
              </div>
            <div className="pick-a-day">
                <div className="displayDay" onClick={createDay}>{}</div>
            </div>
          </div>
          )
        }
      </>  
    );
};