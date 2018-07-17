import React, { Component } from 'react';
import {DataService} from '../services/data-service';

class PromptComponent extends Component {

  state = {
    title: new DataService().getPromptsFromDB(this),
  };

  componentDidMount() {
    var now = new Date();
    var millisTill4 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 4, 0, 0, 0) - now;
    if (millisTill4 < 0) {
       millisTill4 += 86400000; // it's after 4am, try 4am tomorrow.
     }
    this.timerID = setInterval(() => this.tick(), millisTill4);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    var dataService = new DataService();
    //delete the old title from the DB and sets state to new one
    dataService.updatePromptsFromDB(this, this.state.title); 
  }

  render() {
    return (
      <div className="App-title">
        <h3>prompt of the day:</h3>
        <h1>{this.state.title}</h1>
      </div>
    );
  }
}

export default PromptComponent;
