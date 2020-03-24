const data = {
	firstName: 'Daniel',
	surname: 'Silva',
	age: 32,
	blog: 'https://danielsilva.com.br',
	social: {
		linkedin: 'https://www.linkedin.com/in/daniel-silva-dxp/',
		instagram: '@daniel.dxp'
	}
};

//Destructuring
const { firstName, surname, age } = data;
console.log(firstName, surname, age);

// OU

const { instagram: insta } = data.social;

console.log(insta);
