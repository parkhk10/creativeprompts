import React, { Component } from 'react';

class ClockComponent extends Component {

  state = {
    time: new Date()
  };

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: new Date()
    });
  }

	render() {
		return (
			<div className="clock-component">
				<h1 className="date">{this.state.time.toLocaleDateString('en-US', {
          weekday: 'long',
          month: 'long',
          day: 'numeric',
          year: 'numeric'
        })}</h1>
        <h1 className="time">{this.state.time.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          timeZoneName: 'short'
        })}</h1>
			</div>
		);
	}
}

export default ClockComponent;
