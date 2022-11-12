const maximum_Fitness = 10;
const fitness_Increase = 4;
const fitness_Decrease = 3;
const minimum_Fitness = 0;

const maximum_Hunger = 10;
const hunger_Increase = 5;
const hunger_Decrease = 3;
const minimum_Hunger = 0;

const maximum_Age = 30;

const death_Error_Message = "Your pet is no longer alive :(";

class Pet {
  constructor(name) {
    this.name = name;
    this.age = 0;
    this.hunger = minimum_Hunger;
    this.fitness = maximum_Fitness;
    this.children = [];
  };

  get isAlive() {
    return (
      this.age < maximum_Age &&
      this.hunger < maximum_Hunger &&
      this.fitness > minimum_Fitness
    );
  };

  growUp() {
    if (!this.isAlive) {
      throw new Error(death_Error_Message);
    }

    this.age += 1;
    this.hunger += hunger_Increase;
    this.fitness -= fitness_Decrease;
  };

  walk() {
    if (!this.isAlive) {
      throw new Error(death_Error_Message);
    }

    this.fitness += fitness_Increase;
    if (this.fitness > maximum_Fitness) {
      this.fitness = maximum_Fitness;
    }
  };

  feed() {
    if (!this.isAlive) {
      throw new Error(death_Error_Message);
    }

    this.hunger -= hunger_Decrease;
    if (this.hunger < minimum_Hunger) {
      this.hunger = minimum_Hunger;
    }
  };

  checkUp() {
    if (!this.isAlive) {
      throw new Error(death_Error_Message);
    }

    if (
      this.hunger >= maximum_Hunger - hunger_Increase &&
      this.fitness <= minimum_Fitness + fitness_Decrease
    ) {
      return "I am hungry AND I need a walk";
    } else if (this.hunger >= maximum_Hunger - hunger_Increase) {
      return "I am hungry";
    } else if (this.fitness <= minimum_Fitness + fitness_Decrease) {
      return "I need a walk";
    } else {
      return "I feel great!";
    }
  };
  adoptChild(child) {
    this.children.push(child);
  };

  giveBirth(child) {
    this.children.push(new Pet(child));
  };
};

module.exports = Pet;
