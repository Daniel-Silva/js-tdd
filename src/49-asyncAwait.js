// const fetchs = require('node-fetch');
async function getMovies() {
	// return fetchs('https://api.cartolafc.globo.com/mercado/destaques')
	// 	.then((data) => data.json())
	// 	.then((data) => console.log(data))
	// 	.catch((error) => console.log(error));

	const response = await fetch('https://api.cartolafc.globo.com/mercado/destaques');
	const data = await response.json();

	console.log(data);
}
getMovies();
