import React from 'react';
import { GoSearch } from 'react-icons/go';
import { MdOutlineGpsFixed } from 'react-icons/md';

const WeatherInput = ({
	input,
	handleInput,
	handleSubmit,
	handleGeolocation,
}) => {
	return (
		<div>
			<form className="w-80 md:w-[36rem]">
				<div className="relative ">
					<input
						className="w-full p-4 text-white text-xl rounded outline-none shadow-md bg-transparent/30 placeholder:text-gray-300 focus:ring focus:ring-sky-500"
						type="text"
						value={input}
						onChange={handleInput}
						placeholder="Search location"
					/>
					<div className="absolute right-5 top-5 flex gap-4 text-white ">
						<button onClick={(e) => handleSubmit(e)}>
							<GoSearch className="  text-2xl hover:scale-110  hover:text-sky-500" />
						</button>
						<button onClick={handleGeolocation}>
							<MdOutlineGpsFixed className="text-2xl hover:scale-110  hover:text-sky-500" />
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default WeatherInput;
