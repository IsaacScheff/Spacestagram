import { combineReducers } from 'redux'
import picsReducer from './pics';

const appReducer = combineReducers({
    pics: picsReducer
});

export default appReducer