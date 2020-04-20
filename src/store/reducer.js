const initialState = {
    counter :  0
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                counter: state.counter + 1
            }
        case 'DECREMENT':
            return {
                counter: state.counter -1
            }
        case 'ADD_VALUE':
            return {
                counter: state.counter + action.value
            }
        case 'SUB_VALUE':
            return {
                counter: state.counter - action.value
            }
    }
    return state;
}

export default reducer;