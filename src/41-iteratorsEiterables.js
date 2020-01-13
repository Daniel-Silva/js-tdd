let txt = 'Ireland'; // Iterable
let it = txt[Symbol.iterator](); // Iterator

console.log(it.next());

for (let letter of txt) {
	console.log(letter);
	if (letter === 'a') break;
}
