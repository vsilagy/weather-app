import axios from 'axios';
import { useState, useEffect } from 'react';
import Loading from './components/Loading';
import celsius from '../src/assets/celsius.svg';
const API_KEY = 'd3b5cd690817fe32be11dd566e32f1ca';

function App() {
	const [data, setData] = useState({});
	const [location, setLocation] = useState('Stamford');
	const [input, setInput] = useState('');
	const [loading, setLoading] = useState(false);
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`;

	const handleInput = (e) => {
		setInput(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setLocation(input);
		setInput('');
	};

	useEffect(() => {
		setLoading(true);
		axios.get(url).then((res) => {
			setData(res.data);
			setLoading(false);
		});
	}, [location]);

	return (
		<div className="h-screen flex flex-col gap-5 justify-center items-center bg-slate-400">
			<form onSubmit={handleSubmit}>
				<div className="w-80 md:w-[32rem]">
					<input
						className="w-full py-4 px-2 text-white text-lg rounded outline-none shadow-md bg-slate-600 placeholder:text-gray-400"
						type="text"
						value={input}
						onChange={(e) => handleInput(e)}
						placeholder="Search your city"
					/>
				</div>
			</form>
			{loading ? (
				<Loading />
			) : (
				<section className="w-80 md:w-[32rem] py-4 px-2 grid grid-cols-2 text-white text-lg rounded outline-none shadow-md bg-slate-600">
					<div>
						{data.weather ? <p>{data.weather[0].main}</p> : null}
					</div>
					<div>
						<h1 className="text-3xl ">{data.name}</h1>
					</div>

					<div>
						{data.main ? (
							<h1>{data.main.temp.toFixed()} °C</h1>
						) : null}
					</div>
					<div>
						{data.main ? <p>{data.weather[0].description}</p> : null}
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
							<p className="bold">{data.wind.speed.toFixed()} MPH</p>
						) : null}
						<p>Wind Speed</p>
					</div>
				</section>
			)}
		</div>
	);
}

export default App;
