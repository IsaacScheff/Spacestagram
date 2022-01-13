import React from "react";
import SinglePic from "./nasaPic";
import './App.css';

const getRandomDay = () => Math.floor(Math.random() * 27) + 1;

const getRandomMonth = () => Math.floor(Math.random() * 11) + 1;

const getRandomYear = () => Math.floor(Math.random() * 24) + 1996;

function App() {
  return (
    <div className="App">
      <header> Earth Pics</header>
      <SinglePic date={`${getRandomYear()}-${getRandomMonth()}-${getRandomDay()}`}/>
      <SinglePic date={`${getRandomYear()}-${getRandomMonth()}-${getRandomDay()}`}/>
      <SinglePic date={`${getRandomYear()}-${getRandomMonth()}-${getRandomDay()}`}/>
      <SinglePic date={`${getRandomYear()}-${getRandomMonth()}-${getRandomDay()}`}/>
    </div>
  );
}

export default App;

