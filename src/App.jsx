import axios from 'axios';
import { useState, useEffect } from 'react';
import SearchInput from './components/SearchInput';
import WeatherIcon from './components/WeatherIcon';
import Loading from './components/Loading';
import { MdOutlineGpsFixed } from 'react-icons/md';
import { RiGithubFill } from 'react-icons/ri';

function App() {
	const [location, setLocation] = useState('Greenwich');
	const [input, setInput] = useState('');
	const [data, setData] = useState({});
	const [icon, setIcon] = useState('');
	const [loading, setLoading] = useState(false);

	const API_KEY = 'a4e5f989f6883fe9d0a0483294699526';
	const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`;

	const handleInput = (e) => {
		setInput(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (input !== '') {
			setLocation(input);
			setInput('');
		}
	};

	useEffect(() => {
		setLoading(true);
		axios
			.get(URL)
			.then((res) => {
				setTimeout(() => {
					setData(res.data);
					setIcon(res.data.weather[0].main);
					setLoading(false);
				}, 1500);
			})
			.catch((err) => {
				setLoading(false);
				console.log(err);
			});
	}, [location]);

	return (
		<main className="h-screen w-full relative bg-gradient-to-tr from-violet-500 to-orange-300">
			<div className="max-w-screen-lg mx-auto ">
				<div className=" flex flex-col gap-5  items-center">
					<SearchInput
						handleInput={handleInput}
						handleSubmit={handleSubmit}
						input={input}
					/>
					<section className="w-80 md:w-[32rem] h-96 md:h-[32rem] p-4 grid grid-cols-2 items-center justify-center text-white text-lg rounded outline-none shadow-md bg-transparent/30">
						{loading ? (
							<div className="col-span-2 row-span-3">
								<Loading />
							</div>
						) : (
							<>
								<div>
									<h2 className="text-3xl">
										<span>{data.name}</span>,{' '}
										<span>{data?.sys?.country}</span>
									</h2>
								</div>
								<div>
									<button className="focus:text-amber-500">
										<MdOutlineGpsFixed className="text-2xl" />
									</button>
								</div>
								<div className="row-span-2 ">
									<WeatherIcon icon={icon} />
								</div>
								<div className="row-span-2 text-[5rem] p-4 font-medium">
									{data.main ? (
										<h1>{data.main.temp.toFixed()} °C</h1>
									) : null}
								</div>
								<div>
									{data.main ? (
										<p>{data?.weather[0].description}</p>
									) : null}
								</div>
								<div>
									<p className="ml-2">{data.visibility / 1000} km</p>
									<p>Visibility</p>
								</div>
								<div>
									{data.main ? (
										<p className="bold">
											{data.main.feels_like.toFixed()}°C
										</p>
									) : null}
									<p>Feels Like</p>
								</div>
								<div>
									{data.main ? (
										<p className="bold">{data.main.humidity}%</p>
									) : null}
									<p>Humidity</p>
								</div>
								<div>
									{data.wind ? (
										<p className="bold">
											{data.wind.speed.toFixed()} MPH
										</p>
									) : null}
									<p>Wind Speed</p>
								</div>
							</>
						)}
					</section>
				</div>
			</div>
			<footer className="absolute w-full left-0 bottom-0">
				<div className="flex justify-center items-center gap-2 p-4 text-white">
					<p>Made by vsilagy</p>
					<a
						href="https://github.com/vsilagy"
						target={'_blank'}
						rel={'noreferrer'}>
						<RiGithubFill className="text-2xl hover:scale-125 hover:text-amber-500 duration-500" />
					</a>
				</div>
			</footer>
		</main>
	);
}

export default App;
