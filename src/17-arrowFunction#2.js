const sandwich = {
    bread: 'white',
    cheese: 'cheddar',
    prepare: function() {
        return `I want a sandwich with ${this.bread} bread and ${this.cheese}`
    },
    make: function(){
        setTimeout(() => {
            console.log(this.prepare())
        }, 500)
    }
}
console.log(sandwich.make())