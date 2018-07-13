import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AngleDown from 'react-icons/lib/fa/angle-down';

import cactus from '../img/logo.png';
import '../App.css';

import ClockComponent from './clock-component';
import PromptComponent from './prompt-component';
import NavComponent from './nav-component';

class HeaderComponent extends Component {

	render() {
		return (
			<header className="App-header">
				<NavComponent />
        <br />
        <br />
				<br />
        <ClockComponent />
				<br />
				<p className="App-intro">
					welcome to creative prompts. feel free to post your own response to the prompt or just browse thru others’ posts.
				</p>

        <PromptComponent />

				<br />
				<div className={"hvr-sink"}>
				<h6 className={"viewMoreLabel"}>view posts</h6>
				<h1 className={"viewMore"} ><Link to='/#main'><AngleDown /></Link></h1>
				</div>
      </header>
		)
	}
}

export default HeaderComponent;
