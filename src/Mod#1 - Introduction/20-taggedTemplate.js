const city = 'Dublin';
const something = 'Guinness';
const otherthing = 'Leprechaums';

function green(template, ...values) {
	return template.reduce((previous, current, i) => {
		return `${previous} ${values[i - 1].toUpperCase()} ${current}`;
	});
}

const ireland = green`I live in ${city} the city of ${something} and ${otherthing}!`;

console.log(ireland);
