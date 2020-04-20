import React, { Component } from 'react';
import {connect} from 'react-redux';

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
            </div>
        );
    }
}

// always after class things...
const mapStateToProps = state => {
    return {
        ctr: state.counter
    };
};

const mapDispatchToProps = dispatch => {
    return {
       onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
       onDecrementCounter: () => dispatch({type:'DECREMENT'}), 
       onAddValueToCounter: () => dispatch({type:'ADD_VALUE',value: 10, name: 'Thomas'}), 
       onSubstValueFromCounter: () => dispatch({type:'SUB_VALUE', value: 15}), 
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);