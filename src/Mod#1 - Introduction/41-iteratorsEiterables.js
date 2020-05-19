let txt = 'Ireland'; // Iterable
let it = txt[Symbol.iterator](); // Iterator

console.log(it.next());

for (let letter of txt) {
	console.log(letter);
	if (letter === 'a') break;
}

Number.prototype[Symbol.iterator] = function*() {
	for (let i = 0; i <= this; i++) {
		yield i;
	}
};

console.log([ ...10 ]);
