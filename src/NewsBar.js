'use strict';
import React, { Component,PropTypes } from 'react';

export default class NewsBar extends Component{
  render(){
  	if(this.props.loading){
  		console.log('show loading..');
	  	return (
	      <div>新闻 ..</div>
	    );	
  	}
    return (
      <div>新闻 <button onClick={ e =>{this.props.onRefrashClick()}}>刷新</button></div>
    );
  }
}