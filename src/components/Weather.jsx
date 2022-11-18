import React from 'react';
import WeatherIcon from './WeatherIcon';
import Loading from './Loading';
import { MdOutlineGpsFixed } from 'react-icons/md';
import humidity from '../assets/humidity.svg';
import wind from '../assets/wind.svg';
import sunrise from '../assets/sunrise.svg';
import sunset from '../assets/sunset.svg';

const Weather = ({ data, loading, icon }) => {
	return (
		<section className="w-80 md:w-[32rem] h-[34rem] md:h-[32rem] p-4 grid grid-cols-2 items-center justify-center text-white text-lg rounded outline-none shadow-md bg-transparent/30">
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
					<div>
						<button className="focus:text-amber-500">
							<MdOutlineGpsFixed className="text-2xl hover:text-amber-500" />
						</button>
					</div>
					<div className="row-span-2 ">
						<WeatherIcon icon={icon} />
						{data.main ? <p>{data?.weather[0].description}</p> : null}
					</div>
					<div className="p-4  row-span-2  font-medium">
						{data.main ? (
							<h1 className="text-4xl p-4 md:text-[4rem]">
								{data.main.temp.toFixed(0)} °C
							</h1>
						) : null}
						{data.main ? (
							<p className="md:text-lg">
								Feels Like {data.main.feels_like.toFixed(0)}°C
							</p>
						) : null}
					</div>
					<div>
						<img src={wind} alt="wind" className="w-16" />
						{data.main ? (
							<p className="bold">{data.wind.speed.toFixed(0)}</p>
						) : null}
						<p>Wind Speed</p>
					</div>
					<div>
						<img src={humidity} alt="humidity" className="w-16" />
						{data.main ? (
							<p className="bold">{data.main.humidity}%</p>
						) : null}
						<p>Humidity</p>
					</div>
					<div>
						<img src={sunrise} alt="sunrise" className="w-16" />
						<p>
							{new Date(data?.sys?.sunrise * 1000).toLocaleTimeString(
								'en-US',
							)}
						</p>
					</div>
					<div>
						<img src={sunset} alt="sunset" className="w-16" />
						<p>
							{new Date(data?.sys?.sunset * 1000).toLocaleTimeString(
								'en-US',
							)}
						</p>
					</div>
				</>
			)}
		</section>
	);
};

export default Weather;
