import React, { Component } from 'react';
import logo from './logo.svg';
import cactus from './logo.png';
import './App.css';
import StackGrid, { transitions, easings } from "react-stack-grid";

import ExampleComponent from './components/example-component'
import Center from 'react-center';

const { scaleDown } = transitions;

class App extends Component {
  exampleComponents = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  render() {
    var exampleComponents = this.exampleComponents.map(function(exampleNum) {
    return <ExampleComponent useThisToPassDataBetweenComponentsExample={exampleNum} key={exampleNum}/>
  })

    return (
      <div className="App">
        <header className="App-header">
          <img src={cactus} className="App-logo" alt="logo" />
          <h1 className="App-title">Succulents</h1>
        </header>
        <p className="App-intro">
          Welcome to Creative Prompts! Post your own response to the prompt above or find some inspiration from others{"\'"} posts.
        </p>
        <br />

        <StackGrid
          columnWidth={350}
          gutterWidth={35}
          gutterHeight={35}
          duration={1000}
          appear={scaleDown.appear}
          appeared={scaleDown.appeared}
          enter={scaleDown.enter}
          entered={scaleDown.entered}
          leaved={scaleDown.leaved}
          //monitorImagesLoaded={true}
        >
        {exampleComponents}
        </StackGrid>
      </div>
    );
  }
}

export default App;
