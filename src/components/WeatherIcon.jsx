import React from 'react';
import clear from '../assets/clear.svg';
import rain from '../assets/rain.svg';
import clouds from '../assets/cloudy.svg';
import snow from '../assets/snow.svg';
import mist from '../assets/mist.svg';
import haze from '../assets/haze.svg';
import drizzle from '../assets/drizzle.svg';
import fog from '../assets/fog.svg';
import dust from '../assets/dust.svg';
import tornado from '../assets/tornado.svg';
import thunderstorm from '../assets/thunderstorms.svg';

let src;
const WeatherIcon = ({ icon }) => {
	const renderIcon = (src) => {
		return (
			<img src={src} className="w-48 h-48" alt="weather conditions" />
		);
	};

	console.log(icon);
	switch (icon) {
		case 'Clear':
			src = clear;
			break;
		case 'Clouds':
			src = clouds;
			break;
		case 'Rain':
			src = rain;
			break;
		case 'Snow':
			src = snow;
			break;
		case 'Mist':
			src = mist;
			break;
		case 'Haze':
			src = haze;
			break;
		case 'Thunderstorm':
			src = thunderstorm;
			break;
		case 'Tornado':
			src = tornado;
			break;
		case 'Drizzle':
			src = drizzle;
			break;
		case 'Dust':
			src = dust;
			break;
		case 'Fog':
			src = fog;
			break;
	}

	return <>{renderIcon(src)}</>;
};

export default WeatherIcon;
