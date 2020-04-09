const obj = {
	name: 'Daniel',
	age: 26
};

let proxy = new Proxy(obj, {
	get(target, name) {
		console.log('Alguém está pedindo o nome =D');
		return target[name];
	},
	set(target, name, value) {
		console.log('Alguém está mudando o nome!');
		target[name] = value;
	}
});

console.log(proxy.name);
proxy.name = 'Matheus';
console.log(proxy.name);

const handler = {
	get(target, name) {
		return name in target ? target[name] : 37;
	}
};

var p = new Proxy({}, handler);
p.a = 1;
p.b = undefined;
console.log(p.a, p.b);
console.log('c' in p, p.c);

// Validação

const validator = {
	set(obj, prop, value) {
		if (prop === 'age') {
			if (!Number.isInteger(value)) {
				throw new TypeError(`${value}: is not an integer!`);
			}
		}
		if (value > 110) {
			throw new RangeError(`The age ${value} seems invalid!`);
		}

		// Comportamento padrão
		obj[prop] = value;

		// Indica o sucesso
		return true;
	}
};

let person = new Proxy({}, validator);
person.age = 100;
console.log(person.age);
person.age = 'young';
person.age = 300;
