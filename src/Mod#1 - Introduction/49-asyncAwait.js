// const fetchs = require('node-fetch');
async function getZipCode() {
	// return fetchs('https://api.cartolafc.globo.com/mercado/destaques')
	// 	.then((data) => data.json())
	// 	.then((data) => console.log(data))
	// 	.catch((error) => console.log(error));

	try {
		//const fetchs = require('node-fetch');
		const response = await fetch('https://viacep.com.br/ws/08690015/json/');
		const data = await response.json();

		console.log(data);
	} catch (err) {
		console.log('NOOOOOOOOO, we got an error!', err);
	}
}
getZipCode();
