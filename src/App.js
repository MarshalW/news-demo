'use strict';
import React, { Component,PropTypes } from 'react';
import { connect } from 'react-redux';
import NewsBar from './NewsBar';
import NewsList from './NewsList';

function refreshNewsList(){
  return {
    type:'refreshNewsList'
  };
}

function select(state) {
  return {
    news: state.news
  };
}

class App extends Component {
  render(){
    const {dispatch,news}=this.props;
    return (
        <div>
          <NewsBar onRefrashClick={()=>dispatch(refreshNewsList())} />
          <NewsList news={news}/>
        </div>
    );
  }
}

export default connect(select)(App);




