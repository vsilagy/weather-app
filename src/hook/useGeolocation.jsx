import React, { useState, useEffect } from 'react';

const useGeolocation = () => {
	const [location, setLocation] = useState({
		load: false,
		lat: 0,
		lon: 0,
	});

	const onSuccess = (location) => {
		setLocation({
			load: true,
			lat: location.coords.latitude,
			lon: location.coords.longitude,
		});
	};

	const onError = (error) => {
		setLocation({
			load: true,
			error,
		});
	};

	useEffect(() => {
		if (!('geolocation' in navigator)) {
			onError({
				code: 0,
				message: 'Geolocation not supported',
			});
		}
		navigator.geolocation.getCurrentPosition(onSuccess, onError);
	}, []);

	return location;
};

export default useGeolocation;
