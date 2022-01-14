import React, { useState } from "react";
import SinglePic from "./nasaPic";
import './App.css';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function dateFormat(selectedDate){
  if(selectedDate !== null){
    let sDate = selectedDate.toLocaleDateString("en-US");
    let formattedDate = ''
    formattedDate += sDate.slice(sDate.length - 4) + '-';
    let slashCount = 0;
    for(let i = 0; slashCount < 1; i++){
      if(sDate[i] === '/'){
        slashCount++;
      }else{
        formattedDate += sDate[i]
      }
    }
    formattedDate += '-';
    slashCount = 0;
    for(let i = 1; slashCount < 2; i++){
      if(sDate[i] === '/'){
        slashCount++;
      }else if(slashCount === 1){
        formattedDate += sDate[i]
      }
    }
    return formattedDate;
  }else{
    return dateFormat(new Date());
  }
}

function App() {

  const [date, setDate] = useState(new Date());

  const handleChange = newDate => setDate(newDate);

  return (
    <div className="App">
      <header className='Title'>Spacestagram</header>
      <p className='tagline'>Brought to you by NASA's Astronomy Photo of the Day API</p>
      <SinglePic date={dateFormat(date)}/>
      <p>Select a date</p>
      <DatePicker 
        selected={date} 
        minDate={new Date("01-01-1996")}
        maxDate={new Date()}
        onChange={handleChange} 
      />
    </div>
  );
}

export default App;
