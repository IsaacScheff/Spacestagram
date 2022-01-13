import React, { useEffect, useState } from "react";

export function SinglePic (props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [pic, setPic] = useState([]);
    const apiKey = 'XkLxnoj1vglMVZed66K6qLvvR2scRzxrIcGgt4Fl';
  

    useEffect(() => {
      fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${props.date}`)
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setPic(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
        console.log(pic);
      return (
        <div>
            <p>{pic.title}</p>
            <img src={pic.hdurl}/>
            <p>Taken on Earth Date: {pic.date}</p>
            <p>{pic.explanation}</p> 
        </div>
      );
    }
  }
   

export default SinglePic;

// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchPics } from "./redux/pics";
// import {  useParams  } from "react-router-dom";

// export function SinglePic (props) {
    
//     const dispatch = useDispatch();
//     const pic = useSelector((state) => state.pics);

//     //let { worldId } = useParams();
//     console.log(props.date);
//     useEffect(()=>{
//         dispatch(fetchPics(props.date))
//     }, [])
//     //console.log(pic);
//     return(
//         <div>
//             <p>{pic.title}</p>
//             <img src={pic.hdurl}/>
//             <p>Taken on Earth Date: {pic.date}</p>
//             <p>{pic.explanation}</p> 
            
//             {/*like button?*/}
//         </div>
//         )

// }

// export default SinglePic;