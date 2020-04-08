async function getZipCode(ceps) {
	try {
		const fetchs = require('node-fetch');
		const promises = ceps.map((cep) => fetchs(`https://viacep.com.br/ws/${cep}/json/`).then((r) => r.json()));
		const adresess = await Promise.all(promises);
		console.log(adresess);
	} catch (err) {
		console.log('NOOOOOOOOO, we got an error!', err);
	}
}
getZipCode([ '08690015', '08690045', '08690000' ]);
