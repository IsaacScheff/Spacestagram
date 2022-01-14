import React, { useEffect, useState } from "react";

export function SinglePic (props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isLiked, setLikeStatus] = useState(0);
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
        let buttonText = isLiked ? 'Unlike' : 'Like';
        const buttonColor = isLiked ? 'gray' : 'lightblue';
      return (
        <figure className='nasaImage'>
            <img className='picture' src={pic.url} alt='Image detailed below'/>
            <figcaption className='picTitle'>{pic.title}</figcaption>
            <time className='date'>Uploaded: {pic.date}</time>
            <details>
                <summary>Click here for information</summary>
                {pic.explanation}
            </details> 
            <button className="likeButton" style={{background: buttonColor}}onClick={() => setLikeStatus(!isLiked)}> {buttonText} </button>
        </figure>
      );
    }
  }
   

export default SinglePic;