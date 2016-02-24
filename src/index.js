'use strict';
import React from 'react';
import { render } from 'react-dom';
import { createStore,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import App from './App';

let reducers=function(state={news:[]},action){
	if(action.type=='refreshNewsList'){
		return {news:action.state.news};	
	}else{
		return state;
	}
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

