import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import reducer from './store/reducer';
import {Provider} from 'react-redux';

const store = createStore(reducer);
//providers are the helper component which allows us to inject our store into the react component
//provider has a specia in-built property store which has the value of the 'createStore(reducer)'
//in our case we have saved it in const store
//this is how the store is connected to our react application
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
