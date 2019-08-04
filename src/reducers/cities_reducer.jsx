const CityReducer = (state, action) => {
    if (state === undefined){
        return []
    }

    if (action.type === 'SET _CITIES'){
        return action.payload;
    } else {
        return state
    }
}

export default CityReducer