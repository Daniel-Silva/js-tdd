// const fetchs = require('node-fetch');
async function getZipCode() {
	// return fetchs('https://api.cartolafc.globo.com/mercado/destaques')
	// 	.then((data) => data.json())
	// 	.then((data) => console.log(data))
	// 	.catch((error) => console.log(error));

	const fetchs = require('node-fetch');
	const response = await fetchs('https://viacep.com.br/ws/08690015/json/');
	const data = await response.json();

	console.log(data);	
}
getZipCode();
