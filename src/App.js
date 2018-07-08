import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as postActions from './actions/postActions';

import cactus from './logo.png';
import './App.css';

import GridPostContainer from './components/gridpost-container';
import ClockComponent from './components/clock-component';

class App extends Component {
//TODO: later- change the time into a module that automatically updates
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={cactus} className="App-logo" alt="logo" />
          <br />
          <br />
          <ClockComponent />

          <div className="App-title">
          <h1>
          Succulents</h1>
          </div>
          <p className="App-intro">
            Welcome to Creative Prompts! Post your own response to the prompt above or find some inspiration from others{"'"} posts.
          </p>
        </header>
        <br />
        <br />
        <GridPostContainer posts={this.props.postStore} key={1}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    postStore: state.postReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    postActions: bindActionCreators(postActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
