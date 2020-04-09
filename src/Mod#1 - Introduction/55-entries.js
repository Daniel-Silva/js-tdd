const animals = {
	camel: 3,
	llama: 2,
	alpaca: 5
};

const animalsMap = new Map(Object.entries(animals));
console.log(animalsMap);
console.log(animalsMap.has('llama')); // Retorna um booleano se o valor é associado ao key do Map
console.log(animalsMap.get('alpaca')); // Retorna o valor associado ao key do Map ou undefined se não houver nenhum
console.log(animalsMap.size); // Retorna o número de pares chave/valor no Map
