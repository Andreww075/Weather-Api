const formSearchCity = document.getElementById('form-search-city');
const nameCity = document.getElementById('input-search-city');
const h3NameCity = document.getElementById('name-city');
const h2CloudType = document.getElementById('cloud-type');
const pDate = document.getElementById('p-date');
const pHour = document.getElementById('p-hour');
const h2Temperature = document.getElementById('first-temperature');
const cloudSymbol = document.getElementById('cloud-symbol');

const h5Temperature = document.getElementById('h5-temperature');
const h5Humidity = document.getElementById('h5-humidity');
const h5WindSpeed = document.getElementById('h5-wind-speed');

const displayF = document.getElementById('display-f');
const displayC = document.getElementById('display-c');

let tempF = false;
let tempC = false;

/*


const img = document.querySelector('img');

const getCats = async () => {
	try {
		const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=BAxIbU3sknIL8KKnwQD07bYQuBrK1pXy&s=cats', {mode: 'cors'})
		const catData = await response.json();
		img.src = catData.data.images.original.url;
	} catch (error) {
		console.log(error)
	}
*/
	/*
	response.json().then( (response) => {
		img.src = response.data.images.original.url;
	})
	*/

		/*.then(function(response) {
			return response.json();
		})
		.then(function(response) {
			console.log(response);
			//img.src = response.data.images.preview_webp.url
		});
}

getCats();
*/
/*
const server = {
  people: [
    {
      name: "Odin",
      age: 20,
    },
    {
      name: "Thor",
      age: 35,
    },
    {
      name: "Freyja",
      age: 29,
    },
  ],

  getPeople() {
    return new Promise((resolve, reject) => {
      // Simulating a delayed network call to the server
      setTimeout(() => {
        resolve(this.people);
      }, 2000);
    });
  },
};
*/
/*
const getPersonInfo = async name => {
	return server.getPeople().then( people => {
		return people.find( person => {
			console.log(person.name === name);
		});
	});
}
*/

/*
const getPersonInfo = async name => {
	try {
		const people = await server.getPeople();
		const person = people.find( person => {
			console.log(person.name === name);
		});
		return person;
	} catch (error) {
		console.log('eror');
	}
}

//console.log(server.people[0].name)
getPersonInfo(server.people[1].name);
*/
/*
async function f() {
  return Promise.resolve(1);
}
*/
//f().then(alert);
/*
(async () => {
	let promise = new Promise( (resolve, reject) => {
		setTimeout( () => resolve('done!'), 1000);
	});

	let result = await promise;

	console.log(result);
})();

class Thenable {
	constructor (num) {
		this.num = num
	}
	then (resolve, reject) {
		setTimeout( () => resolve(this.num * 2), 500)
	}
}

(async () => {
	let result = await new Thenable(20);
	console.log(result);
})();*/
/*
class Waiter {
	async wait() {
		return await Promise.resolve(1)
	}
}

new Waiter()
	.wait()
	.then(alert);
*/
/*

const loadJson = async url => {
	try {
		const response = await fetch(url);
		if (response.status == 200) {
			const dataResponse = await response.json();
			return dataResponse
		}
		throw new Error(response.status);
	} catch (error) {
		console.log(error);
	}
};

loadJson('https://javascript.info/no-such-user.json')
  .catch(alert);*/