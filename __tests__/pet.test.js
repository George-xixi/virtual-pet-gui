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
    const pet = new Pet('Fido');
    pet.growUp();
    pet.growUp();
    pet.walk();

    expect(pet.fitness).toEqual(8);
  });

  it('increases fitness by 4 to a maximum value of 10', () => {
    const pet = new Pet('Fido');
    const anotherPet = new Pet('Spot')
    pet.growUp();
    pet.walk();
    anotherPet.walk();

    expect(pet.fitness).toEqual(10);
    expect(anotherPet.fitness).toEqual(10);
  });
});

describe('feed', () => {

  it('decreases the hunger level by 3', () => {

    const pet = new Pet('Fido');
    pet.growUp();
    pet.feed();

    expect(pet.hunger).toEqual(2);
  });

  it('decreases the hunger level by 3 to a minimum value of 0', () => {

    const pet = new Pet('Fido')
    const otherPet = new Pet('mr meow')

    pet.growUp();
    otherPet.growUp();
    otherPet.walk();

    pet.feed();
    pet.feed();
    otherPet.feed();
    otherPet.feed();
    otherPet.feed();
    otherPet.feed();

    expect(pet.hunger).toEqual(0);
    expect(otherPet.hunger).toEqual(0);
  });
});

describe('checkUp', () => {

  it('tells us if the pet is hungry', () => {
    const pet = new Pet('mr meow');

    pet.growUp();

    expect(pet.checkUp()).toEqual('I am hungry');
  });

  it('tells us if the pet needs a walk', () => {

    const pet = new Pet("mr meow");

    pet.growUp();
    pet.growUp();
    pet.growUp();

    pet.feed();
    pet.feed();
    pet.feed();
    pet.feed();
    pet.feed();

    expect(pet.checkUp()).toEqual("I need a walk");
  });

  it("tells us if the pet is both hungry AND needs a walk", () => {

    const pet = new Pet("mr meow");
    pet.growUp();
    pet.growUp();
    pet.growUp();

    expect(pet.checkUp()).toEqual("I am hungry AND I need a walk");
  });

  it("tells us if the pet does not need feeding nor walking", () => {

    const pet = new Pet("mr meow");

    expect(pet.checkUp()).toEqual("I feel great!")
  })
});