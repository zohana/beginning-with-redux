//this is a demo file of how redux works. IT IS A REFERNCE
//we will be working with Nodejs here for the sake of the demo

const redux = require('redux');
const createStore = redux.createStore; //cs is a function

const initialState = {
    counter: 0
}

// ------ **Reducer** --------//
//reducer works very closely to the store. so first we need to create the reducer.
//es6 feature of initialising the argument
const rootReducer = (state = initialState, action) => { //returns the state ALWAYS
    if(type === 'INC_COUNTER'){
        //dont do: state.counter++;
        //return state;   --> you are mutating the original state
        //instead do---
        return{
            ...state,
            counter: state.counter + 1
        }
    }
    if(type === 'ADD_COUNTER'){
        //dont do: state.counter++;
        //return state;   --> you are mutating the original state
        //instead do---
        return{
            ...state,
            counter: state.counter + action.value
        }
    }
    return state;
};

//----- **Store** -----//
const store = createStore(rootReducer);   
console.log(store.getState()); //will give undefined since rootReducer returns old state.

// ----- **Subsription** -------//
store.subscribe(() =>{
    console.log('[Subscription]', store.getState());
});

//-----** Dispatching an action ** -------//
//which 'type' of action was dispatched and what we should do in the reducer
//'type' is a unique identifier of your choice
//convention is to use all uppercase string
//we have to pass this action 'ADD_COUNTER & INC_COUNTER' to the REDUCER 
//which takes ACTION as an ARGUMENT
store.dispatch({ type: 'INC_COUNTER'});
store.dispatch({ type: 'ADD_COUNTER', value: 10});
console.log(store.getState()); 



