import axios from 'axios';
import { useState, useEffect, ChangeEvent } from 'react';
import useGeolocation from './hook/useGeolocation';
import VITE_API_KEY from './components/ApiKey';
import WeatherInput from './components/WeatherInput';
import Weather from './components/Weather';
import Footer from './components/Footer';
function App(): JSX.Element {
	const [location, setLocation] = useState('New York');
	const [data, setData] = useState({});
	const [input, setInput] = useState('');
	const [icon, setIcon] = useState('');
	const [loading, setLoading] = useState(false);

	const coord = useGeolocation();
	const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
		setInput(event.target.value);
	};

	const handleSubmit = (event: ChangeEvent<HTMLInputElement>) => {
		event.preventDefault();
		if (input !== '') {
			setLocation(input);
			setInput('');
		}
	};
	const handleGeolocation = () => {
		if (coord.load) {
			setLoading(true);
			axios
				.get(
					`https://api.openweathermap.org/data/2.5/weather?lat=${coord.lat}&lon=${coord.lon}&units=metric&appid=${VITE_API_KEY}`,
				)
				.then((res) => {
					setTimeout(() => {
						setData(res.data);
						setIcon(res.data.weather[0].main);
						setLoading(false);
					}, 500);
				})
				.catch((err) => {
					setLoading(false);
					console.log(err);
				});
		}
	};

	useEffect(() => {
		setLoading(true);
		axios
			.get(
				`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${VITE_API_KEY}`,
			)
			.then((res) => {
				setTimeout(() => {
					setData(res.data);
					setIcon(res.data.weather[0].main);
					setLoading(false);
				}, 500);
			})
			.catch((err) => {
				setLoading(false);
				console.log(err);
			});
	}, [location]);

	return (
		<main className="h-screen w-screen flex flex-col bg-gradient-to-tr from-violet-500 to-orange-300">
			<div className="flex flex-col gap-4 md:gap-8 items-center justify-start container mx-auto">
				<nav>
					<div className="w-80 md:w-[36rem] flex pt-4  text-white">
						<h2 className="text-3xl md:text-4xl">Meteo</h2>
					</div>
				</nav>
				<WeatherInput
					handleInput={handleInput}
					handleSubmit={handleSubmit}
					input={input}
					handleGeolocation={handleGeolocation}
				/>
				{data.main && (
					<Weather data={data} loading={loading} icon={icon} />
				)}
			</div>
			<Footer />
		</main>
	);
}

export default App;
