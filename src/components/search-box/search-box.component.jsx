import { Component } from 'react';

import './search-box.style.scss';
class SearchBox extends Component {
	render() {
		const { onChangeHandler } = this.props;
		return (
			<div className="search-box">
				<input type="search" placeholder="Search Monster" onChange={onChangeHandler} />
			</div>
		);
	}
}

export default SearchBox;
