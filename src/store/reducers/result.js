import * as actionTypes from '../actions/actionTypes';

const initialState = {
    results: []
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), val: action.result }) // concat returns new array. push adds to exisiting array!
/*                 results: state.results.concat({id: new Date(), val: action.result * 2 }) // concat returns new array. push adds to exisiting array!
 */            }
        case actionTypes.DELETE_RESULT:
            // const id = 2;
            // const newArray = [...state.results];
            // newArray.splice(id, 1);  // removes one elemtn at index id
            const updatedArray = state.results.filter(result => result.id !== action.resultElementId); // filter always returns new array!
            // this removes all elements that doesn´t fullfill the filter: all elements that are not the deleted one.
            return {
                ...state,
                results: updatedArray
            }
    }
    return state;
};

export default reducer;