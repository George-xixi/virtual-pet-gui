const Pet = require('../src/pet');

let pet;

describe("constructor", () => {

  beforeEach(() => {
    pet = new Pet("Fido");
  });

  it("returns an object", () => {
    expect(new Pet("Fido")).toBeInstanceOf(Object);
  });

  it("returns an object with a property of name", () => {

    expect(pet.name).toEqual("Fido");
  });

  it("pet has an initial age of 0", () => {

    expect(pet.age).toEqual(0);
  });

  it("pet has an intial hunger of 0", () => {
    
    expect(pet.hunger).toEqual(0);
  });

  it("pet has an intial fitness of 10", () => {

    expect(pet.fitness).toEqual(10);
  });
});

describe("growUp", () => {

  beforeEach(() => {
    pet = new Pet('Fido');
    pet.growUp();
  });

  it("increases pet age by 1", () => {

    expect(pet.age).toEqual(1);
  });

  it("increases pet hunger by 5", () => {

    expect(pet.hunger).toEqual(5);
  });

  it("decreases pet fitness by 3", () => {
    
    expect(pet.fitness).toEqual(7);
  });

  it("throws an error if the pet is not alive", () => {


    pet.age = 30;

    expect(pet.isAlive).toEqual(false);
    expect(() => pet.growUp()).toThrow("Your pet is no longer alive :(");
  });
});

describe("walk", () => {

  beforeEach(() => {
    pet = new Pet('Fido');
    pet.fitness = 5;
  });

  it("increases fitness by 4", () => {

    pet.walk();

    expect(pet.fitness).toEqual(9);
  });

  it("increases fitness by 4 to a maximum value of 10", () => {

    pet.walk();
    pet.walk();

    expect(pet.fitness).toEqual(10);

    pet.walk();

    expect(pet.fitness).toEqual(10);
  });

  it("throws an error if the pet is not alive", () => {

    pet.fitness = 0;

    expect(() => pet.walk()).toThrow("Your pet is no longer alive :(");
  });
});

describe("feed", () => {

  beforeEach(() => {
    pet = new Pet('Fido');
    pet.hunger = 5;
  });

  it("decreases the hunger level by 3", () => {

    pet.feed();

    expect(pet.hunger).toEqual(2);
  });

  it("decreases the hunger level by 3 to a minimum value of 0", () => {

    pet.feed();
    pet.feed();

    expect(pet.hunger).toEqual(0);

    pet.feed();

    expect(pet.hunger).toEqual(0);
  });

  it("throws an error if the pet is not alive", () => {

    pet.hunger = 10;

    expect(() => pet.feed()).toThrow("Your pet is no longer alive :(");
  });
});

describe("checkUp", () => {

  beforeEach(() => {
    pet = new Pet('Fido');
  });

  it("tells us if the pet is hungry", () => {

    pet.hunger = 7;

    expect(pet.checkUp()).toEqual("I am hungry");
  });

  it("tells us if the pet needs a walk", () => {

    pet.fitness = 2;

    expect(pet.checkUp()).toEqual("I need a walk");
  });

  it("tells us if the pet is both hungry AND needs a walk", () => {

    pet.hunger = 6;
    pet.fitness = 3;

    expect(pet.checkUp()).toEqual("I am hungry AND I need a walk");
  });

  it("tells us if the pet does not need feeding nor walking", () => {

    expect(pet.checkUp()).toEqual("I feel great!")
  });

  it("throws an error if the pet is not alive", () => {

    pet.age = 30;

    expect(() => pet.checkUp()).toThrow("Your pet is no longer alive :(")
  });
});

describe("isALive", () => {

  beforeEach(() => {
    pet = new Pet('Fido');
  });

  it("tells us if the pet is dead due to not being walked", () => {

    pet.fitness = 0

    expect(pet.isAlive).toEqual(false)
  });

  it("tells us if the pet is dead due to hunger", () => {

    pet.hunger = 10

    expect(pet.isAlive).toEqual(false);
  });

  it("tells us if the pet has reached 30 and died of old age", () => {

    pet.age = 30;

    expect(pet.isAlive).toEqual(false);
  });

  it("tells us if the pet is still alive, given that its needs have been met and it is not too old", () => {

    pet.age = 5
    pet.hunger = 5
    pet.fitness = 6

    expect(pet.isAlive).toEqual(true);
  });
});

describe("adoptChild", () => {

  beforeEach(() => {
    pet = new Pet("Fido");
    babyPet = new Pet("lil Fido");
    secondBabyPet = new Pet("Fido Jr.");
    youngestBabyPet = new Pet("lil lil Fido");
    pet.adoptChild(babyPet);
  });

  it("allows a pet to adopt another as its child", () => {

    expect(pet.children[0]).toEqual({ name: "lil Fido", age: 0, hunger: 0, fitness: 10, children: [] });
  });

  it("allows a pet to adopt multiple children", () => {

    pet.adoptChild(secondBabyPet);

    expect(pet.children[1]).toEqual({ name: "Fido Jr.", age: 0, hunger: 0, fitness: 10, children: [] });

  });

  it("allows a child to adopt its own child", () => {

    babyPet.adoptChild(youngestBabyPet);

    expect(babyPet.children[0]).toEqual({ name: "lil lil Fido", age: 0, hunger: 0, fitness: 10, children: [] });
    expect(pet.children[0].children[0]).toEqual({ name: "lil lil Fido", age: 0, hunger: 0, fitness: 10, children: [] })
  })
});

describe("giveBirth", () => {

  beforeEach(() => {
    pet = new Pet("Fido");
    pet.giveBirth("lil Fido");
  });

  it ("allows a pet to give birth to a child pet", () => {

    expect(pet.children[0]).toEqual({ name: "lil Fido", age: 0, hunger: 0, fitness: 10, children: [] });

  });

  it("allows a pet to give birth to multiple children", () => {

    pet.giveBirth("Fido Jr.");

    expect(pet.children[1]).toEqual({ name: "Fido Jr.", age: 0, hunger: 0, fitness: 10, children: [] })
  });

  it("allows a child to give birth to its own child", () => {

    pet.children[0].giveBirth("lil lil Fido");

    expect(pet.children[0].children[0]).toEqual({ name: "lil lil Fido", age: 0, hunger: 0, fitness: 10, children: [] });
  });
});