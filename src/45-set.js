let mySet = new Set([ 'Daniel', 'Matheus', 'Flávia' ]);
console.log(mySet, mySet.size);

mySet.add('Fabiana'); // Adiciona um novo valor ao set
console.log(mySet, mySet.size);
mySet.delete('Fabiana'); // Deleta um valor do set
console.log(mySet, mySet.size);
console.log(mySet.has('Daniel')); // Verificar se set contem o valor passado por parâmetro

let it = mySet.values();

for (let name of it) {
	console.log(`My name is ${name}`);
}

// Removendo elementos duplicados em um array

const numbers = [ 2, 3, 4, 4, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 5, 32, 3, 4, 5 ];

console.log([ ...new Set(numbers) ]);
