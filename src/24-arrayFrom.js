const text = 'Daniel'

const person = {
    name: 'Daniel',
    surname: 'Silva',
    age: 32,
    address: {
        publicPlace: 'Rua R. A. D. L.',
        number: 100,
        zipCode: '08690-750',
        city: 'Suzano'
    }
}

console.log(Array.from(text)) // Converte elementos similares a um array em um array
console.log(Array.from(person))
