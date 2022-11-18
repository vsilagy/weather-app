import React from 'react';
import WeatherIcon from './WeatherIcon';
import Loading from './Loading';
import { MdOutlineGpsFixed } from 'react-icons/md';
import {
	TbTemperatureFahrenheit,
	TbTemperatureCelsius,
} from 'react-icons/tb';
import thermometer from '../assets/thermometer.svg';
import humidity from '../assets/humidity.svg';
import wind from '../assets/wind.svg';
import sunrise from '../assets/sunrise.svg';
import sunset from '../assets/sunset.svg';

const Weather = ({ data, loading, icon }) => {
	return (
		<section className="w-80 md:w-[32rem] h-[34rem] md:h-[32rem] p-4 grid grid-cols-2 gap-1 place-items-center place-content-evenly  justify-center text-white text-lg rounded outline-none shadow-md bg-transparent/30">
			{loading ? (
				<div className="col-span-2 row-span-3">
					<Loading />
				</div>
			) : (
				<>
					<div>
						<h2 className="text-xl md:text-3xl">
							<span>{data.name}</span>,{' '}
							<span>{data?.sys?.country}</span>
						</h2>
					</div>
					<div className="px-4 space-x-4 place-self-end md:mr-6">
						<button>
							<MdOutlineGpsFixed className="text-2xl  hover:text-amber-500" />
						</button>
						<button>
							<TbTemperatureCelsius className="text-2xl  hover:text-amber-500" />
						</button>
					</div>
					<div className="row-span-2 flex flex-col items-center">
						<WeatherIcon icon={icon} />
					</div>
					<div className="p-4 row-span-2 flex flex-col gap-4 font-medium">
						<h1 className="text-4xl py-4 md:text-[4.5rem]">
							{data.main.temp.toFixed(0)} °C{' '}
						</h1>

						<div className="">
							<p className="text-sm md:text-lg">
								Feels Like {data.main.feels_like.toFixed(0)}°C{' '}
							</p>

							<p className="text-sm md:text-lg">
								{data?.weather[0].description}
							</p>
						</div>
					</div>
					<div>
						<img src={wind} alt="wind" className="w-20 h-20" />

						<p className="text-sm md:text-base">
							Wind speed: {data.wind.speed.toFixed(0)} kph{' '}
						</p>
					</div>
					<div>
						<img
							src={humidity}
							alt="humidity"
							className="w-20 h-20"
						/>

						<p className="text-sm md:text-base">
							Humidity {data.main.humidity}%
						</p>
					</div>
					<div>
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
					<div>
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
