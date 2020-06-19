const photosReducer = (state = [], action) => {
    if(action.type === 'PUSH_PHOTOS') {
        return [...state, ...action.payload]
    }
    return state;
}

export default photosReducer