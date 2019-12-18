//ArrowFunction

const ireland = ['Dublin', 'Galway', 'Cork']

const love = ireland.map(function(name) {
    return `I love ${name}`
})
console.log(love)

// arrow function
const loveArrow = ireland.map((name) => {
    return `I love ${name}`
})
console.log(loveArrow)

//OR

const loveArrowSingle = ireland.map(name => `I love ${name}`)
console.log(loveArrowSingle)

const loveChain = ireland.filter(name => name === 'Dublin').map(name => `I love ${name}`)
console.log(loveChain)
