const pageReduser = (state = 1, action) => {
    if (action.type === 'PAGE') {
        return state+1
    }
    return state
}

export default pageReduser