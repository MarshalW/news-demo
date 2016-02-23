'use strict';
import React, { Component,PropTypes } from 'react';
import { connect } from 'react-redux';

function refreshNewsList(){
  return {
    type:'refreshNewsList'
  };
}

class NewsBar extends Component{
  render(){
    console.log('===>render news bar');
    return (
      <div>新闻 <button onClick={ e =>{this.props.onRefrashClick()}}>刷新</button></div>
    );
  }
}

// NewsBar.propTypes={
//   onRefrashClick: PropTypes.func.isRequired
// }

class NewsList extends Component{
  render(){
    console.log('>>>render news list: ');
    return (
      <div>新闻列表..{this.props.message}</div>
    );
  }
}

function select(state) {
  return {
    message: state.message
  };
}

class App extends Component {
  render(){
    const {dispatch,message}=this.props;
    return (
        <div>
          <NewsBar onRefrashClick={()=>dispatch(refreshNewsList())} />
          <NewsList message={message}/>
        </div>
    );
  }
}

export default connect(select)(App);




