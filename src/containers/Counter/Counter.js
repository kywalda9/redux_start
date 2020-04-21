import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 10" clicked={this.props.onAddValueToCounter}  />
                <CounterControl label="Subtract 15" clicked={this.props.onSubstValueFromCounter}  />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>   
                    {
                        this.props.storedResults.map(
                            strResult => (
                                <li style={{padding: '10px' }} key={strResult.id} onClick={() =>this.props.onDeleteResult(strResult.id)}>{strResult.val}</li>
                            )
                        )
                    }
                    
                </ul>
            </div>
        );
    }
}

// always after class things...
const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
       onIncrementCounter: () => dispatch({type:  actionTypes.INCREMENT}),
       onDecrementCounter: () => dispatch({type:  actionTypes.DECREMENT}), 
       onAddValueToCounter: () => dispatch({type:  actionTypes.ADD_VALUE,value: 10, name: 'Thomas'}), 
       onSubstValueFromCounter: () => dispatch({type:  actionTypes.SUB_VALUE, value: 15}), 
       onStoreResult: (result) => dispatch({type:  actionTypes.STORE_RESULT, result: result}),
       onDeleteResult: (id) => dispatch({type:  actionTypes.DELETE_RESULT, resultElementId: id}),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);