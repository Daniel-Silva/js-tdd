const currency = new Promise((resolve) => {
	setTimeout(() => {
		resolve({ currency: 'euro', value: '4,52' });
	}, 2000);
});

const countries = new Promise((resolve) => {
	setTimeout(() => {
		resolve([ 'Ireland', 'England', 'Scotland' ]);
	}, 600);
});

// O método all() pega todas as promises passadas por parâmetro e após resolver todas
// elas ele permite mandar resposta
Promise.all([ currency, countries ]).then((responses) => console.log(responses));

// O método race() pega todas as promises passadas por parâmetro mas retorna a
// resposta da primeira executada e ignora todas as outras
Promise.race([ currency, countries ]).then((responses) => console.log(responses));
