// potion test requires potion module
const Potion = require('../lib/Potion.js');

test('creates a health potion object', () => {
    // potion will take the passed string and assign as new potion's name
    const potion = new Potion('health');

    expect(potion.name).toBe('health');
    // 'expect.any' takes a constructor as an argument, in this case a Number() constructor
    expect(potion.value).toEqual(expect.any(Number));
});

test('creates a random potion object', () => {
    const potion = new Potion();

    expect(potion.name).toEqual(expect.any(String));
    expect(potion.name.length).toBeGreaterThan(0);
    expect(potion.value).toEqual(expect.any(Number));
});