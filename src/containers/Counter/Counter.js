import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actionCreators  from '../../store/actions/index';

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
       onIncrementCounter: () => dispatch(actionCreators.increment()),
       onDecrementCounter: () => dispatch(actionCreators.decrement()), 
       onAddValueToCounter: () => dispatch(actionCreators.add(10)), 
       onSubstValueFromCounter: () => dispatch(actionCreators.substract(15)), 
       onStoreResult: (result) => dispatch(actionCreators.storeResult(result)),
       onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);