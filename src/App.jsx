import axios from 'axios';
import { useState, useEffect } from 'react';
import SearchInput from './components/SearchInput';
import Weather from './components/Weather';
import Footer from './components/Footer';

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
					console.log(data);
				}, 800);
			})
			.catch((err) => {
				setLoading(false);
				console.log(err);
			});
	}, [location]);

	return (
		<main className="h-screen w-full relative bg-gradient-to-tr from-violet-500 to-orange-300">
			<div className="flex flex-col gap-5  items-center  container mx-auto">
				<SearchInput
					handleInput={handleInput}
					handleSubmit={handleSubmit}
					input={input}
				/>
				<Weather data={data} loading={loading} icon={icon} />
			</div>
			<Footer />
		</main>
	);
}

export default App;
