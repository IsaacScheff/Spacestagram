import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { fetchPics } from "./redux/pics";
import SinglePic from "./nasaPic";
import logo from './logo.svg';
import './App.css';

function App() {

  //   const dispatch = useDispatch();
  //   const pic = useSelector((state) => state.pics);

  //   useEffect(()=>{
  //     dispatch(fetchPics())
  // }, [])

  // console.log(pic);

  return (
    <div className="App">
      <header> Earth Pics</header>
      <SinglePic date='1996-06-21'/>
      <SinglePic date='1995-08-22'/>
      <SinglePic date='2004-01-11'/>
      <SinglePic date='2014-12-25'/>
    </div>
  );
}

export default App;

// API key 
//  XkLxnoj1vglMVZed66K6qLvvR2scRzxrIcGgt4Fl
