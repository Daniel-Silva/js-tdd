let defer = new Promise((resolve, reject) => {
	setTimeout(() => {
		let state = true;
		if (state) {
			resolve('Hello! It works');
		} else {
			reject('Error!');
		}
	}, 1000);
});

defer.then((data) => console.log(data));

//const fetchs = require('node-fetch');

var clubs = fetch('https://api.cartolafc.globo.com/mercado/destaques');

clubs
	.then((data) => data.json())
	.then((data) =>
		data.map((atleta) => {
			console.log(`Nome: ${atleta.Atleta.nome} | Escalações: ${atleta.escalacoes} | Clube: ${atleta.clube}`);
		})
	)
	.catch((error) => console.log(error));
