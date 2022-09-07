import { Component } from 'react';

import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';
import './components/card-list/card-list.component';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			monsters: [],
			searchFiled: '',
		};
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(response => {
				this.setState(
					() => {
						return { monsters: response };
					},
					() => console.log(this.state)
				);
			});
	}

	onChangeHandler = event => {
		this.setState({ searchFiled: event.target.value });
	};

	filterMoster = () => {
		const { monsters, searchFiled } = this.state;
		const filterArray = monsters.filter(monster => monster.name.toLowerCase().includes(searchFiled.toLowerCase()));
		return filterArray;
	};

	render() {
		return (
			<div className="App">
				<h1 className="title">Monster Rolodex</h1>
				<SearchBox onChangeHandler={this.onChangeHandler} />
				<CardList monsters={this.filterMoster()} />
			</div>
		);
	}
}

export default App;
