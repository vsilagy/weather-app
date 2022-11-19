import React from 'react';
import { MdOutlineGpsFixed } from 'react-icons/md';
const Nav = ({ handleGeolocation }) => {
	return (
		<>
			<div className="w-80 md:w-[36rem] flex pt-4 justify-between text-white">
				<h2 className="text-3xl">Meteo</h2>
				<button onClick={handleGeolocation}>
					<MdOutlineGpsFixed className="text-2xl hover:scale-125  hover:text-sky-500" />
				</button>
			</div>
		</>
	);
};

export default Nav;
