import React from 'react';
import { MdOutlineGpsFixed } from 'react-icons/md';
const Nav = ({ handleGeolocation, setUnit, unit }) => {
	return (
		<>
			<div className="w-80 md:w-[36rem] flex pt-4 justify-between text-white">
				<h2 className="text-3xl md:text-4xl">Meteo</h2>
				<div className="flex items-center justify-center gap-2">
					{/* <label
						for="units-toggle"
						className="inline-flex items-center p-2 rounded cursor-pointer text-white">
						<input
							id="units-toggle"
							type="checkbox"
							className="hidden peer"
						/>
						<span className="text-sm px-2 py-1 rounded-l bg-sky-500 peer-checked:bg-gray-400 peer-checked:text-gray-200 ">
							°C
						</span>
						<span className="text-sm px-2 py-1 rounded-r bg-gray-400 text-gray-200 peer-checked:bg-sky-500 peer-checked:text-white">
							°F
						</span>
					</label> */}
					<button onClick={handleGeolocation}>
						<MdOutlineGpsFixed className="text-2xl hover:scale-125  hover:text-sky-500" />
					</button>
				</div>
			</div>
		</>
	);
};

export default Nav;
