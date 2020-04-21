import * as actionTypes from './actions';

const initialState = {
    counter: 0,
    results: []
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            return newState;
        case  actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case  actionTypes.ADD_VALUE:
            return {
                ...state,
                counter: state.counter + action.value
            }
        case  actionTypes.SUB_VALUE:
            return {
                ...state,
                counter: state.counter - action.value
            }
        case  actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({ id: new Date(), val: state.counter }) // not push!
            }
        case  actionTypes.DELETE_RESULT:
            // const id= 2;
            // const newArray = [...state.results];
            // newArray.splice(id,1);
            // return {
            //     ...state,
            //     results: newArray
            // }
            const id= 2;
            const updatedArray = state.results.filter(result => result.id !== action.resultElementId); // filter reurns new array!
            updatedArray.splice(id ,1);
            return {
                ...state,
                results: updatedArray
            }            
    }
    return state;
}

export default reducer;