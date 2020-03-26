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

// const fetchs = require('node-fetch');

var clubs = fetch('https://jsonmock.hackerrank.com/api/movies/search/?Title=substr');

clubs.then((data) => data.json()).then((data) => console.log(data)).catch((error) => console.log(error));
