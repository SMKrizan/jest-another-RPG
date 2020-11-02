function Potion(name) {
    this.types = ['strength', 'agility', 'health'];
    // if 'name' is truthy (can be coerced to true) than this.name=name and if not, this.name = random potion
    this.name = name || this.types[Math.floor(Math.random() * this.types.length)];
    
    if (this.name === 'health') {
        this.value = Math.floor(Math.random() * 10 + 30);
    } else {
        this.value = Math.floor(Math.random() * 5 + 7);
    }
}

module.exports = Potion;