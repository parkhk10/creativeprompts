import React, { Component } from 'react';

var promptList = ["flower", "hot chocolate", "drawing", "fireman", "lord of the rings", "sound of music", "mila kunis", "ducks", "cleanliness", "mother's day", "scenery", "park hyo shin", "lights", "hairstyles", "baseball", "paintbrush", "anime", "food", "kyrie irving",
"flat earth", "facebook", "being rich", "imagination", "sailing", "horoscope", "school", "piano", "Christmas presents", "monopoly", "kirby", "blue", "computer science", "maintenance", "eiffel tower", "kyoto nights", "golden state" ]

class PromptComponent extends Component {

  state = {
    title: "succulents"
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
    this.setState({
      title: promptList.pop()
    });
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
