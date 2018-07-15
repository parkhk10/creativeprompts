import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import GridPostContainer from './gridpost-container';
import CreatePostComponent from './createpost-component';

class MainContainer extends Component {
	render() {
		return (
			<main>
				<Switch>
					<Route exact path='/' component={GridPostContainer}/>
					<Route path='/createpost' component={CreatePostComponent}/>
				</Switch>
			</main>
		)
	}
}

export default MainContainer;
