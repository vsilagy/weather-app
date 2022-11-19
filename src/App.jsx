import axios from 'axios';
import { useState, useEffect } from 'react';
import useGeolocation from './hook/useGeolocation';
import Nav from './components/Nav';
import SearchInput from './components/SearchInput';
import Weather from './components/Weather';
import Footer from './components/Footer';

function App() {
	const [location, setLocation] = useState('New York');
	const [data, setData] = useState({});
	const [input, setInput] = useState('');
	const [icon, setIcon] = useState('');
	const [unit, setUnit] = useState('metric');
	const [loading, setLoading] = useState(false);

	const coord = useGeolocation();
	const API_KEY = 'a4e5f989f6883fe9d0a0483294699526';

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
	const handleGeolocation = () => {
		if (coord.load) {
			setLoading(true);
			axios
				.get(
					`https://api.openweathermap.org/data/2.5/weather?lat=${coord.lat}&lon=${coord.lon}&units=${unit}&appid=${API_KEY}`,
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
				`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${unit}&appid=${API_KEY}`,
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
		<main className="h-screen w-full flex flex-col justify-between bg-gradient-to-tr from-violet-500 to-orange-300">
			<div className="flex flex-col gap-4 md:gap-8 items-center justify-start container mx-auto">
				<Nav handleGeolocation={handleGeolocation} />
				<SearchInput
					handleInput={handleInput}
					handleSubmit={handleSubmit}
					input={input}
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
