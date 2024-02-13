const loadAPI = async (url) => {
	try {
		const response = await fetch(url, {mode: 'cors'});
		const dataResponse = await response.json();

		const dateLocation = dataResponse.location.localtime.slice(0, 10);
		const hourLocation = dataResponse.location.localtime.slice(11, 16);
		console.log(dataResponse);

		let tempF = JSON.parse(localStorage.getItem('tempF'));
		let tempC = JSON.parse(localStorage.getItem('tempC'));

		h3NameCity.innerHTML = `${dataResponse.location.name}, ${dataResponse.location.country}.`;
		h2CloudType.innerHTML = `${dataResponse.current.condition.text}.`;
		pDate.innerHTML = `${dateLocation}`;
		pHour.innerHTML = `${hourLocation}`;

		if (tempF) {
			h2Temperature.innerHTML = `${dataResponse.current.temp_f} °F`;
		} else {
			h2Temperature.innerHTML = `${dataResponse.current.temp_c} °C`;
		}

		if (dataResponse.current.condition.text === "Overcast") {
			cloudSymbol.innerHTML = `<span class="material-symbols-outlined">foggy</span>`
		} else if (dataResponse.current.condition.text === "Light rain") {
			cloudSymbol.innerHTML = `<span class="material-symbols-outlined">weather_hail</span>`
		} else if (dataResponse.current.condition.text === "Sunny") {
			cloudSymbol.innerHTML = `<span class="material-symbols-outlined">sunny</span>`
		}

		////

		if (tempF) {
			h5Temperature.innerHTML = `${dataResponse.current.feelslike_f} °F`;
		} else {
			h5Temperature.innerHTML = `${dataResponse.current.feelslike_c} °C`;
		}	
		
		h5Humidity.innerHTML = `${dataResponse.current.humidity} %`;
		h5WindSpeed.innerHTML = `${dataResponse.current.wind_kph} K/H`
	} catch (error) {
		console.log(error);
	}
}