const Pet = require('../src/pet');

describe('constructor', () => {

  it('returns an object', () => {
    expect(new Pet('Fido')).toBeInstanceOf(Object);
  });

  it('returns an object with a property of name', () => {
    const pet = new Pet('Fido');

    expect(pet.name).toEqual('Fido');
  });

  it('pet has an initial age of 0', () => {
    const pet = new Pet('Fido');

    expect(pet.age).toEqual(0);
  });

  it('pet has an intial hunger of 0', () => {
    const pet = new Pet('Fido');
    
    expect(pet.hunger).toEqual(0);
  });

  it('pet has an intial fitness of 10', () => {
    const pet = new Pet('Fido');
    
    expect(pet.fitness).toEqual(10);
  });
});

describe('growUp', () => {

  it('increases pet age by 1', () => {
    const pet = new Pet('Fido');

    pet.growUp();
    
    expect(pet.age).toEqual(1);
  });

  it('increases pet hunger by 5', () => {
    const pet = new Pet('Fido');

    pet.growUp();
    
    expect(pet.hunger).toEqual(5);
  });

  it('decreases pet fitness by 3', () => {
    const pet = new Pet('Fido');

    pet.growUp();
    
    expect(pet.fitness).toEqual(7);
  });
});

describe('walk', () => {

  it('increases fitness by 4', () => {
    const pet =new Pet('Fido');
    pet.growUp();
    pet.growUp();
    pet.walk();

    expect(pet.fitness).toEqual(8);
  });

  it('increases fitness by 4 to a maximum value of 10', () => {
    const pet =new Pet('Fido');
    const anotherPet =new Pet('Spot')
    pet.growUp();
    pet.walk();
    anotherPet.walk();

    expect(pet.fitness).toEqual(10);
    expect(anotherPet.fitness).toEqual(10);
  });
});