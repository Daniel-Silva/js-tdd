const person = {
	[Symbol('name')]: 'Daniel',
	[Symbol('surname')]: 'Silva',
	age: 32
};

console.log(Object.keys(person));

const symbols = Object.getOwnPropertySymbols(person);
const data = symbols.map((sym) => person[sym]);

console.log(data);
