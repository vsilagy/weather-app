import axios from 'axios';
import { useState, useEffect } from 'react';
import { BsSearch } from 'react-icons/bs';
import Loading from './components/Loading';
function App() {
	const [weather, setWeather] = useState('');
	const [location, setLocation] = useState('Stamford');
	const [loading, setLoading] = useState(false);

	const key = 'd3b5cd690817fe32be11dd566e32f1ca';

	useEffect(() => {
		setLoading(true);

		const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}`;

		axios.get(url).then((response) => {
			console.log(response.data);
			setWeather(response.data);
		});
		setLoading(false);
	}, [location]);
	console.log(weather);
	return (
		<div>
			<h1 className="text-red-500">{loading && <Loading />}</h1>
		</div>
	);
}

export default App;
