'use strict';
import React from 'react';
import { render } from 'react-dom';
import { createStore,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import App from './App';

let reducers=function(state={news:[],loading:false},action){
	if(action.type=='refreshNewsList'){
		return action.state;	
	}
	if(action.type=='loadingNewsList'){
		return action.state;	
	}
	return state;
};

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware
)(createStore);
let store=createStoreWithMiddleware(reducers);

render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root')
);

