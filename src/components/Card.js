import React from 'react';

const Card = ({ name, email, id, sets }) => {
	return (
		<div className ='tc bg-light-blue dib br3 grow pa3 ma2 bw2 shadow-5'> 			
			<img src={`https://robohash.org/${id}?set=set${sets}&size=200x200`} alt='robots' />			
			<div>
				<h3>{name}</h3>
				<p> {email} </p>
			</div>
		</div>
	);
}

export default Card; //we are exporting only one component, hence default