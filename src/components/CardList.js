import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
	const cardArray = robots.map((user, index) => {
		return (
			<Card  key={robots[index].id} 
					name={robots[index].name} 
					id={robots[index].id} 
					email={robots[index].email}
					sets={robots[index].sets}
			/>
		);
	});
	return (
			<div>
				{cardArray}
			</div>
	);
}

export default CardList;

// key must be specified to keep track of the changes that we make in the webpage. It is better to give to key a variable that does not change like index which can change. Better to give it a value like index in this case as the value remains the same.