//Swap de variáveis com destructuring
let a = 42;
let b = 21;

console.log(`a: ${a}, b: ${b}`);

[ a, b ] = [ b, a ]; // Trocando os valores das variáveis a e b

console.log(`a: ${a}, b: ${b}`);
