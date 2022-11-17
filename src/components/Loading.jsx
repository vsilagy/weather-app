import React from 'react';
import rain from '../assets/rain.svg';

const Loading = () => {
	return (
		<>
			<img src={rain} alt="loading" className="w-48 md:w-64 m-auto" />
		</>
	);
};

export default Loading;
