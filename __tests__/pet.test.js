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

  it('throws an error if the pet is not alive', () => {
    const pet = new Pet('ghost pet');

    pet.age = 30;

    expect(pet.isAlive).toEqual(false);
    expect(() => pet.growUp()).toThrow('Your pet is no longer alive :(');
  });
});

describe('walk', () => {

  it('increases fitness by 4', () => {
    const pet = new Pet('Fido');
    
    pet.fitness = 4;

    pet.walk();

    expect(pet.fitness).toEqual(8);
  });

  it('increases fitness by 4 to a maximum value of 10', () => {
    const pet = new Pet('Fido');
    const anotherPet = new Pet('Spot')
    
    anotherPet.fitness = 7;

    pet.walk();
    pet.walk();

    anotherPet.walk();
    

    expect(pet.fitness).toEqual(10);
    expect(anotherPet.fitness).toEqual(10);
  });

  it('throws an error if the pet is not alive', () => {

    const pet = new Pet('Fido');

    pet.fitness = 0;

    expect(() => pet.walk()).toThrow('Your pet is no longer alive :(');
  });
});

describe('feed', () => {

  it('decreases the hunger level by 3', () => {

    const pet = new Pet('Fido');
    pet.hunger = 5;
    pet.feed();

    expect(pet.hunger).toEqual(2);
  });

  it('decreases the hunger level by 3 to a minimum value of 0', () => {

    const pet = new Pet('Fido')
    const otherPet = new Pet('mr meow')

    pet.feed();
    pet.feed();
    otherPet.feed();
    otherPet.feed();
    otherPet.feed();
    otherPet.feed();

    expect(pet.hunger).toEqual(0);
    expect(otherPet.hunger).toEqual(0);
  });

  it('throws an error if the pet is not alive', () => {

    const pet = new Pet('Fido');

    pet.hunger = 10;

    expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
  });
});

describe('checkUp', () => {

  it('tells us if the pet is hungry', () => {
    const pet = new Pet('mr meow');

    pet.hunger = 7;

    expect(pet.checkUp()).toEqual('I am hungry');
  });

  it('tells us if the pet needs a walk', () => {

    const pet = new Pet("mr meow");

    pet.fitness = 2;

    expect(pet.checkUp()).toEqual("I need a walk");
  });

  it("tells us if the pet is both hungry AND needs a walk", () => {

    const pet = new Pet("mr meow");
    
    pet.hunger = 6;
    pet.fitness = 3;
    expect(pet.checkUp()).toEqual("I am hungry AND I need a walk");
  });

  it("tells us if the pet does not need feeding nor walking", () => {

    const pet = new Pet("mr meow");

    expect(pet.checkUp()).toEqual("I feel great!")
  });

  it("throws an error if the pet is not alive", () => {

    const pet = new Pet('mr meow');

    pet.age = 30;

    expect(() => pet.checkUp()).toThrow("Your pet is no longer alive :(")
  })
});

describe("isALive", () => {

  it("tells us if the pet is dead due to not being walked", () => {

    const pet = new Pet("miss paws");

    pet.fitness = 0

    expect(pet.isAlive).toEqual(false)
  });

    it("tells us if the pet is dead due to hunger", () => {
      const pet = new Pet("miss paws");

      pet.hunger = 10

      expect(pet.isAlive).toEqual(false);
        });

    it("tells us if the pet has reached 30 and died of old age", () => {
      
      const pet = new Pet('old dog');
      
      pet.age = 30;

      expect(pet.isAlive).toEqual(false);
      
    });

    it("tells us if the pet is still alive, given that its needs have been met and it is not too old", () => {

      const pet = new Pet('young dog');
      const otherpet = new Pet('middle aged dog');

      pet.age = 10
      pet.hunger = 5
      pet.fitness = 6

      expect(pet.isAlive).toEqual(true);
      expect(otherpet.isAlive).toEqual(true);
    });
});