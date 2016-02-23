'use strict';
import React, { Component,PropTypes } from 'react';

export default class NewsBar extends Component{
  render(){
    return (
      <div>新闻 <button onClick={ e =>{this.props.onRefrashClick()}}>刷新</button></div>
    );
  }
}