const Potion = require('../lib/Potion');
// const player = new Player('Jane');

// player.getStats();
// player.getInventory();

function Player(name = '') {
    this.name = name;
    
    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);

    this.inventory = [new Potion('health'), new Potion()];
};

// returns an object with various player properties using 'prototype' method, which creates the method for the constructor itself, whereas 'methodName', for example, would create the method for each player.
Player.prototype.getStats = function() {
    return {
        potions: this.inventory.length,
        health: this.health,
        strength: this.strength,
        agility: this.agility,
    };
};

// returns the inventory array or false if empty; note the use of 'prototype' here, as well.
Player.prototype.getInventory = function() {
    if (this.inventory.length) {
        return this.inventory;
    }
    return false;
};

module.exports = Player;