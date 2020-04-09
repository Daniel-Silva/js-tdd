//Shorthand Properties

let firstName = 'Daniel';
let surname = 'Silva';
let age = 32;

const person = {
	firstName,
	surname,
	age,

	hello() {
		console.log('Hello');
	}
};

console.log(person, person.hello());
