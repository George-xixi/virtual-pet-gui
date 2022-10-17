const Pet = require('../src/pet');

describe('constructor', () => {
  it('returns an object', () => {
    expect(new Pet('Fido')).toBeInstanceOf(Object);
  });
  it('returns an object with a property of name', () => {
    const pet = new Pet('Fido');

    expect(pet.name).toEqual('Fido');
  });
});