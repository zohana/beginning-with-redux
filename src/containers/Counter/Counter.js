import React, { Component } from 'react';
import {connect} from 'react-redux' 
//CONNECT is a function -which returns a function, which takes then component as input.
//so CONNECT is not a higher order component, but returns the higher order component 
//--we CONNECT use on export (at the bottom)

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
//import counterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
            default: 
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onIncrementCounterByFive}  />
                <CounterControl label="Subtract 5" clicked={this.props.onDecrementCounterByFive}  />
                <hr />
                <button onClick={this.props.onStoreResults}>Store Results</button>
                <ul>
                    {this.props.storedResults.map(strResult =>(
                        <li key={strResult.id} onClick={this.props.onRemoveResult}>{strResult.value}</li>
                    ))}                       
                </ul>
            </div>
        );
    }
}

//**State which we want to get**//
//store instructions about how the state managed by redux should be mapped to 
//the props to be used in this container.
//what 'mapStateToProps' does? it stores the state in redux as input
//returns a js object which is a map of prop names and slices of the states stored in redux
//this function gets execued by r-redux pakage since we are passing to it.

//state here will reach out to ur redux state in reducer.js
//and say, give me the state-->counter, and assign it to property name ctr, 
//which i can use it in my container
const mapStateToProps = state =>{
    return {
        ctr: state.counter,
        storedResults: state.results
    }
}

//dispatchToProps: what it does? --> which kind actions i need to dispatch from this continer
//this helper fuction which will call dispatch funtion in the store behind the scenes 
//returns js object which holds reference to a function which will get eventually executed to dispatch an action
const mapDispatchToProps = dispatch =>{
    return {
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),  //this anonymous function will be available through the property 'onIncrementCounter'
        onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
        onIncrementCounterByFive: () => dispatch({type:'ADD_FIVE', value: 5}),
        onDecrementCounterByFive: () => dispatch({type:'SUBTRACT_FIVE', value: 5}),
        onStoreResults: () => dispatch({type:'STORE_RESULTS'}),
        onRemoveResult: () => dispatch({type:'REMOVE_RESULT'})
    }
    //in reducer.js, we need to adjust the type as we did in redux-basics.js
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);

//we pass 2 pieces of information to connect -
//1) which part of the whole application state is important to us
//2) which actions do i want to dispatch 