import React from 'react';
import { RiGithubFill } from 'react-icons/ri';

const Footer = () => {
	return (
		<footer className="relative">
			<div className="flex justify-center items-center gap-2 p-4 text-white">
				<p>Made by vsilagy</p>
				<a
					href="https://github.com/vsilagy"
					target={'_blank'}
					rel={'noreferrer'}>
					<RiGithubFill className="text-2xl hover:scale-125 hover:text-sky-500 duration-500" />
				</a>
			</div>
		</footer>
	);
};

export default Footer;
