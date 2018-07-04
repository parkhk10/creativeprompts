import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ExampleComponent from './components/example-component'
import Grid from './components/grid'
import Center from 'react-center';

class App extends Component {
  //exampleComponents = [1, 2, 3, 4, 5]

  render() {
    // var exampleComponents = this.exampleComponents.map(function(exampleNum) {
    //   return <ExampleComponent useThisToPassDataBetweenComponentsExample={exampleNum}/>
    // })
    // var grid = this.function(){
    //   return <Grid/>
    // }s
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Succulents</h1>
        </header>
        <p className="App-intro">
          Welcome to Creative Prompts! Post your own response to the prompt above or find some inspiration from others{"\'"} posts.
        </p>
        <Grid/>
      </div>
    );
  }
}

export default App;
