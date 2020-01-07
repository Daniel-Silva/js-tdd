const data = [
	{
		name: 'Daniel',
		age: 32,
		city: 'Suzano'
	},
	{
		name: 'Matheus',
		age: 4,
		city: 'Suzano'
	}
];

const sampleArray = [ 4, -5, 0, -1, -1 ];

// find()
const underZero = sampleArray.find((x) => x < 0); // Retorna o primeiro elemento encontrado no array
console.log(underZero);

const daniel = data.find((person) => person.name === 'Daniel');
console.log(daniel);

//findIndex()
const underZeroIdex = sampleArray.findIndex((x) => x == -1); // Retorna o indice do primeiro elemento encontrado no array
console.log(underZeroIdex);

const matheus = data.findIndex((person) => person.name === 'Matheus');
console.log(matheus);
