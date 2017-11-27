const initialState={
    counter:0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        //immutibly change the state.
        //use 'spread' (...) operator of es6
        //or use: Object.assign({},state);
        //eg: const newState = Object.assign({},state);
        //newState.counter = state.counter + 1;
        //return newState
        case 'INCREMENT':
            return{
                ...state,
                counter: state.counter + 1
            }
        case 'DECREMENT':
            return{
                ...state,
                counter: state.counter - 1
            }
        case 'ADD_FIVE':
            return{
                ...state,
                counter: state.counter + action.value            
            }
        case 'SUBTRACT_FIVE':
            return{
                ...state,
                counter: state.counter - action.value            
            }
        case 'STORE_RESULTS':
            return{
                ...state,
                results: state.results.concat({id: new Date(), value:state.counter}) //dont use push, since it will change the original state
            }
        default:
            return state;

    }
    

};

export default reducer;