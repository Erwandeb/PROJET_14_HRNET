import React, {useState, useEffect} from "react";


export const DatePicker =(props) => {

  const [displayDatePicker, setDisplayDatePicker] = useState(true);
  const [displayDay, setDisplayDay] = useState();
  const [dateToDisplay, setDateToDisplay] = useState("");
  
 
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]

  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();

  let selectedDate = date;
  let selectedDay = day;
  let selectedMonth = month;
  let selectedYear = year;

  let creatingMonthAndYear;

 
  console.log("initialMonth", month)
  const [dateOfTheDay, setDateOfTheDay] = useState(months[month]+ ' ' + day + 'th  ' + year);

  const showDatePicker = () => {
    setDisplayDatePicker(false)
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
    month ++;
    
    
    if(month > 11){
      month = 0;
      year++
    }
    
    console.log(month)
    //creatingMonthAndYear = months[month] +' '+ year;
  
    setDateToDisplay( months[month] +' '+ year)

  };
  
 

  function goToPrevMonth (){
    setDateOfTheDay('');
    month --;

    if(month < 0){
      month = 11;
      year --;
    }

    console.log(month)
    //creatingMonthAndYear = months[month] +' '+ year;
 
    //return setDateToDisplay(creatingMonthAndYear)
 
  };


  /*
  function createDay(){
    
    let totalDaysInAMonth = 31;
    
    if (month === 1){
      totalDaysInAMonth = 28;
    }

    for(let i=0; i<totalDaysInAMonth; i++){
      const dayElement = document.createElement('div');
      dayElement.classList.add('day');

   

      dayElement.textContent = i+1;

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
        createDay();
      })
      
        //displayDay.appendChild(dayElement);


    }
  }
  */

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
                  <p className="date-text">{dateOfTheDay}{dateToDisplay}</p>
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