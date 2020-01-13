function ajax(url) {
	//const fetchs = require('node-fetch');
	fetch(url).then((data) => data.json()).then((data) => dados.next(data));
}

function* ajaxGen() {
	console.log('Buscando atletas...');
	const atletas = yield ajax('https://api.cartolafc.globo.com/mercado/destaques');
	console.log(atletas);

	console.log('Buscando clubes...');
	const clubes = yield ajax('https://api.cartolafc.globo.com/clubes');
	console.log(clubes);
}

const dados = ajaxGen();
dados.next();
