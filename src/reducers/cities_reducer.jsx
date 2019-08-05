import { SET_CITIES } from '../actions/index.js';

const cityReducer = (state, action) => {
    if (state === undefined){
        return []
    }

    if (action.type === 'SET_CITIES'){
        return action.payload;
    } else {
        return state
    }
}

export default cityReducer