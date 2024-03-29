import { Component } from 'react';

import Card from '../card/card.component';
import './card-list.style.scss';
class CardList extends Component {
	render() {
		const { monsters } = this.props;
		return (
			<div className="card-list">
				{monsters.map(monster => {
					return <Card key={monster.id} monster={monster} />;
				})}
			</div>
		);
	}
}

export default CardList;
