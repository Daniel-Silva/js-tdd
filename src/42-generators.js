function genNames() {
	console.log('Daniel');
	console.log('Flávia');
	console.log('Mathues');
}

genNames();

//Generators
function* generatorName() {
	yield 'Daniel';
	yield 'Flávia';
	yield 'Matheus';
}

const names = generatorName();
console.log(names.next());

function* generator() {
	yield 'f';
	yield 'o';
	yield 'o';
}

const g = generator(); // Um objeto g é construído usando a função construtora generator
console.log(typeof g[Symbol.iterator] === 'function');

while (true) {
	let item = g.next();
	if (item.done) {
		break;
	}
	console.log(`Iterator: ${item.value}`);
}

const foo = generator();
for (let letter of foo) {
	console.log(letter);
}
// OU
console.log([ ...foo ]);

function* gen() {
	yield* 'Daniel';
}
console.log([ ...gen() ]);

const fooG = {
	[Symbol.iterator]: () => ({
		items: [ 'p', 'o', 'n', 'y', 'f', 'o', 'o' ],
		next: function next() {
			return {
				done: this.items.length === 0,
				value: this.items.shift()
			};
		}
	})
};

function* multiplier(value) {
	yield value * 2;
	yield value * 3;
	yield value * 4;
	yield value * 5;
}

function* trailmix() {
	yield 0;
	yield* [ 1, 2 ];
	yield* [ ...multiplier(2) ];
	yield* multiplier(3);
	yield* fooG;
}

console.log([ ...trailmix() ]);
