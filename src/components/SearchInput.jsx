import React from 'react';
import { GoSearch } from 'react-icons/go';

const SearchInput = ({ handleInput, handleSubmit, input }) => {
	return (
		<div>
			<form className="w-80 md:w-[32rem] mt-24">
				<div className="relative">
					<input
						className="w-full p-4 text-white text-xl rounded outline-none shadow-md bg-transparent/30 placeholder:text-slate-400 focus:ring focus:ring-white"
						type="text"
						value={input}
						onChange={handleInput}
						placeholder="Search location"
					/>
					<button onClick={(e) => handleSubmit(e)}>
						<GoSearch className="absolute right-5 top-5 text-white text-2xl hover:scale-110 hover:text-amber-500" />
					</button>
				</div>
			</form>
		</div>
	);
};

export default SearchInput;
