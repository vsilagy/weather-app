import React from 'react';
import WeatherIcon from './WeatherIcon';
import Loading from './Loading';
import thermometer from '../assets/thermometer.svg';
import humidity from '../assets/humidity.svg';
import wind from '../assets/wind.svg';
import sunrise from '../assets/sunrise.svg';
import sunset from '../assets/sunset.svg';

const Weather = ({
	data,
	loading,
	icon,
}: {
	data: string;
	loading: boolean;
	icon: string;
}) => {
	return (
		<section className="w-80 md:w-[36rem] h-full grid grid-cols-2 p-1 gap-2 md:p-4 md:gap-4 place-items-center place-content-evenly  justify-center text-white md:text-lg rounded outline-none shadow-md bg-transparent/30">
			{loading ? (
				<div className="col-span-2 row-span-3">
					<Loading />
				</div>
			) : (
				<>
					<div className="flex row-span-2 flex-col items-center justify-between p-4">
						<p>
							<WeatherIcon icon={icon} />
						</p>
					</div>
					<div className="flex row-span-2 flex-col items-start">
						<h2 className="text-xl md:text-3xl">
							{data.name}, <span>{data?.sys?.country}</span>
						</h2>
						<p className="text-sm md:text-lg">
							{data?.weather[0].description}
						</p>
						<div className="flex items-center">
							<h1 className="text-4xl md:text-[3.5rem]">
								{data.main.temp.toFixed(0)}°C
							</h1>
							<img
								src={thermometer}
								alt="thermometer"
								className="w-12 h-auto md:w-20"
							/>
						</div>
						<p className="text-sm md:text-lg">
							Feels Like {data.main.feels_like.toFixed(0)}°C{' '}
						</p>
					</div>
					<div className="flex flex-col items-center p-4">
						<img src={wind} alt="wind" className="w-20 h-20" />

						<p className="text-sm md:text-base">
							Wind speed: {data.wind.speed.toFixed(0)} m/s{' '}
						</p>
					</div>
					<div className="flex flex-col items-center">
						<img
							src={humidity}
							alt="humidity"
							className="w-20 h-20"
						/>

						<p className="text-sm md:text-base">
							Humidity: {data.main.humidity}%
						</p>
					</div>
					<div className="flex flex-col items-center">
						<img
							src={sunrise}
							alt="sunrise"
							className="w-20 h-auto"
						/>
						<p>Sunrise:</p>
						<p>
							{new Date(
								data?.sys?.sunrise * 1000,
							).toLocaleTimeString()}
						</p>
					</div>
					<div className="flex flex-col items-center p-4">
						<img src={sunset} alt="sunset" className="w-20 h-auto" />
						<p>Sunset:</p>
						<p>
							{new Date(
								data?.sys?.sunset * 1000,
							).toLocaleTimeString()}
						</p>
					</div>
				</>
			)}
		</section>
	);
};

export default Weather;
