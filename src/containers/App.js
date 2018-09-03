import React, { Component } from 'react';
import CardList from '../components/CardList';
//import { robots } from './robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
	constructor() {
		super();
		//state must be inside the constructor
		//and it remains in the parent component
		this.state = {
			robots: [],
			searchfield: ''
		}
	}
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState( {robots: users}));
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value});			
	}

	render() {
		const { robots, searchfield } = this.state;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		});	
		return (!robots.length)
		 ?
			(<h2 className='f1 tc'> Loading... </h2>)
		 :  
		 	(
				<div className='tc'>
					<h2 className='f1'> RoboFriends </h2>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
						<CardList robots={ filteredRobots } />
					</Scroll>
				</div>
			);	
	}	
}

export default App;