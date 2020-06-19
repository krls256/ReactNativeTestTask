const pickPicReducer = (state = null, action) => {
    if (action.type === 'PICK_PIC') {
        return action.payload
    }
    return state
} 

export default pickPicReducer;