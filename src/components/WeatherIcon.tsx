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

let content: FunctionComponent<SVGAttributes<SVGElement>>;
const WeatherIcon = ({ icon }): any => {
	const renderIcon = (content: string) => {
		return (
			<img
				src={content}
				className="w-32 md:w-48 h-auto m-2 mb-0"
				alt="weather conditions"
			/>
		);
	};

	switch (icon) {
		case 'Clear':
			content = clear;
			break;
		case 'Clouds':
			content = clouds;
			break;
		case 'Rain':
			content = rain;
			break;
		case 'Snow':
			content = snow;
			break;
		case 'Mist':
			content = mist;
			break;
		case 'Haze':
			content = haze;
			break;
		case 'Thunderstorm':
			content = thunderstorm;
			break;
		case 'Tornado':
			content = tornado;
			break;
		case 'Drizzle':
			content = drizzle;
			break;
		case 'Dust':
			content = dust;
			break;
		case 'Fog':
			content = fog;
			break;
	}

	return <>{renderIcon(content)}</>;
};

export default WeatherIcon;
