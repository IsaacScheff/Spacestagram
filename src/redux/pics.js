import Axios from "axios";

const SET_PICS = 'SET_PICS';
const apiKey = 'XkLxnoj1vglMVZed66K6qLvvR2scRzxrIcGgt4Fl';

export const setPics = (pics) => ({
  type: SET_PICS,
  pics
});


export const fetchPics = () => async (dispatch) => {
  try{
    const {data} = await Axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=1995-06-16`);
    dispatch(setPics(data));
  }catch(error){
    console.log(error); 
  }
}


const initialState = []

export default function picsReducer(state = initialState, action) {
  switch(action.type){
    case SET_PICS:
      return action.pics;
    default:
      return state;
  };
}

