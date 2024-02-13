document.addEventListener('DOMContentLoaded', () => {
	const newURL = JSON.parse(localStorage.getItem('urlCity'));
	if (newURL) {
		loadAPI (newURL);
	} else {
		loadAPI ('https://api.weatherapi.com/v1/current.json?key=d17f5957516b4882aac223624241001&q=$zipaquirá');
		console.log('Not Defined');
	}
});

formSearchCity.addEventListener('submit', (e) => {
	e.preventDefault();

	if (nameCity.value !== '') {
		const newCity = nameCity.value;
		formSearchCity.reset();

		const newURL = `https://api.weatherapi.com/v1/current.json?key=d17f5957516b4882aac223624241001&q=${newCity}`;
		loadAPI (newURL);

		localStorage.setItem('urlCity', JSON.stringify(newURL));
	}
});

displayF.addEventListener('click', () => {
	const newURL = JSON.parse(localStorage.getItem('urlCity'));

	tempF = true;
	tempC = false;

	console.log(tempF);
	console.log(tempC);

	loadAPI (newURL);

	localStorage.setItem('tempF', JSON.stringify(tempF));
	localStorage.setItem('tempC', JSON.stringify(tempC));
});

displayC.addEventListener('click', () => {
	const newURL = JSON.parse(localStorage.getItem('urlCity'));

	tempF = false;
	tempC = true;

	console.log(tempF);
	console.log(tempC);

	loadAPI (newURL);

	localStorage.setItem('tempF', JSON.stringify(tempF));
	localStorage.setItem('tempC', JSON.stringify(tempC));
});

//'https://api.openweathermap.org/data/2.5/weather?q=zipaquir%C3%A1&APPID=bf3c3c7860148a88443e292531caaba8'
//'https://api.openweathermap.org/data/2.5/weather?q=${newCity}%C3%A1&APPID=bf3c3c7860148a88443e292531caaba8'

/*
const promesa1 = new Promise((resolve, reject) => {
  resolve("Hola, mundo!");
});

const promesa2 = new Promise((resolve, reject) => {
  resolve("Adiós, mundo!");
});

promesa1
  .then(valor => {
    console.log(valor);
    return promesa2;
  })
  .then(valor => {
    console.log(valor);
  });*/
//api.giphy.com/v1/gifs/translate?api_key=BAxIbU3sknIL8KKnwQD07bYQuBrK1pXy&s=cats