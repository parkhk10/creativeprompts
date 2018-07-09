import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import cactus from '../img/logo.png';
import '../App.css';

import ClockComponent from './clock-component';
import PromptComponent from './prompt-component';

class HeaderComponent extends Component {
	render() {
		return (
			<header className="App-header">
        <img src={cactus} className="App-logo" alt="logo" />
        <br />
        <br />
        <ClockComponent />
        <PromptComponent />
        <p className="App-intro">
          Welcome to Creative Prompts! Post your own response to the prompt above or find some inspiration from others{"'"} posts.
        </p>
        <nav>
		      <ul>
		        <li><Link to='/'>Home</Link></li>
		        <li><Link to='/createpost'>Create Post</Link></li>
		      </ul>
		    </nav>
      </header>
		)
	}
}

export default HeaderComponent;