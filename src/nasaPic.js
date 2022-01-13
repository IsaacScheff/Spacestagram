import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPics } from "./redux/pics";
import {  useParams  } from "react-router-dom";

export function SinglePic () {
    
    const dispatch = useDispatch();
    const pic = useSelector((state) => state.pics);

    //let { worldId } = useParams();

    useEffect(()=>{
        dispatch(fetchPics())
    }, [])
    console.log(pic);
    return(
        <div>
            <p>{pic.title}</p>
            <img src={pic.hdurl}/>
            <p>{pic.explanation}</p> 
            {/*like button?*/}
        </div>
        )

}

export default SinglePic;