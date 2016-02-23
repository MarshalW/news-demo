'use strict';
import React, { Component,PropTypes } from 'react';

export default class NewsList extends Component{
  render(){
    let news=this.props.news.map(function(item){
    	return (
    		<li key={item.id}>{item.title}</li>
    	);
    });
    return (
      <ul>{news}</ul>
    );
  }
}