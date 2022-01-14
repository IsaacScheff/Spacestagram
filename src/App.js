import React, { useEffect, useState } from "react";
import SinglePic from "./nasaPic";
import './App.css';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const getRandomDay = () => Math.floor(Math.random() * 27) + 1;
const getRandomMonth = () => Math.floor(Math.random() * 11) + 1;
const getRandomYear = () => Math.floor(Math.random() * 24) + 1996;
const getRandomDate = () => `${getRandomYear()}-${getRandomMonth()}-${getRandomDay()}`;
const refresh = () => window.location.reload();

function App() {

  const [date, setDate] = useState(new Date());
  const handleChange = date => setDate(date);
  const [dateSelected, Selection] = useState(false);
  const select = () => Selection(true);

  if(!dateSelected){
    return (
      <div className="App">
        <header className='Title'>Spacestagram</header>
        <p className='tagline'>Brought to you by NASA's Astronomy Photo of the Day API</p>
        <SinglePic date={getRandomDate()}/>
        <SinglePic date={getRandomDate()}/>
        <SinglePic date={getRandomDate()}/>
        <SinglePic date={getRandomDate()}/>
        <SinglePic date={getRandomDate()}/>
        <button className="morePics" onClick={refresh}> Get me 5 others!</button>
        <p>Or select a date:</p>
        <DatePicker 
          selected={date} 
          minDate={new Date("01-01-1996")}
          maxDate={new Date("01-13-2022")}
          onChange={handleChange} 
        />
        <button onClick={select}>Select Date</button>
      </div>
    );
  }else{
    return (
      <div className="App">
        <header className='Title'>Spacestagram</header>
        <p className='tagline'>Brought to you by NASA's Astronomy Photo of the Day API</p>
        <SinglePic date={date}/>
        <button className="morePics" onClick={refresh}> Get me 5 others!</button>
      </div>
    );
  }
}

export default App;
