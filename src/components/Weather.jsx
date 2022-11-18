import React from 'react';
import WeatherIcon from './WeatherIcon';
import Loading from './Loading';
import thermometer from '../assets/thermometer.svg';
import humidity from '../assets/humidity.svg';
import wind from '../assets/wind.svg';
import sunrise from '../assets/sunrise.svg';
import sunset from '../assets/sunset.svg';

const Weather = ({ data, loading, icon }) => {
	let today = new Date().toLocaleTimeString();

	return (
		<section className="w-80 md:w-[36rem] h-[34rem] md:h-[32rem] p-4 grid grid-cols-2 gap-1 place-items-center place-content-evenly  justify-center text-white md:text-lg rounded outline-none shadow-md bg-transparent/30">
			{loading ? (
				<div className="col-span-2 row-span-3">
					<Loading />
				</div>
			) : (
				<>
					<div className="col-span-2 flex flex-col items-center gap-2">
						<h2 className="text-2xl md:text-4xl">
							{data.name}, <span>{data?.sys?.country}</span>
						</h2>
						<p className="md:text-xl">{today}</p>
					</div>
					<div className="flex flex-col items-center">
						<p>
							<WeatherIcon icon={icon} />
						</p>
					</div>

					<div className="flex flex-col items-center">
						<div className="flex items-center">
							<img
								src={thermometer}
								alt="thermometer"
								className="w-12 h-auto md:w-20"
							/>
							<h1 className="text-4xl md:text-[3.5rem]">
								{data.main.temp.toFixed(0)}°C
							</h1>
						</div>
					</div>
					<div>
						<p className="text-sm md:text-lg">
							{data?.weather[0].description}
						</p>
					</div>
					<div>
						<p className="text-sm md:text-lg">
							Feels Like {data.main.feels_like.toFixed(0)}°C{' '}
						</p>
					</div>
					<div className="flex flex-col items-center">
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
					<div className="flex flex-col items-center">
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
