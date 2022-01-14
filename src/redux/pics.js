const SET_PICS = 'SET_PICS';

export const setPics = (pics) => ({
  type: SET_PICS,
  pics
});

const initialState = []

export default function picsReducer(state = initialState, action) {
  switch(action.type){
    case SET_PICS:
      return action.pics;
    default:
      return state;
  };
}

