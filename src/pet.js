
const maximumFitness = 10;

function Pet(name) {
  this.name = name
  this.age = 0
  this.hunger = 0
  this.fitness = maximumFitness
};

Pet.prototype.growUp = function() {
  const numberOfYears = 1;
  const increaseInHungerPerYear = 5;
  const decreaseInFitnessPerYear = 3;
  this.age += numberOfYears;
  this.hunger += increaseInHungerPerYear * numberOfYears;
  this.fitness -= decreaseInFitnessPerYear * numberOfYears;
};

Pet.prototype.walk = function() {
  this.fitness += 4;
  if (this.fitness > maximumFitness) {
    this.fitness = maximumFitness;
  };
};

Pet.prototype.feed = function() {
  this.hunger -= 3;
  if (this.hunger < 0) {
    this.hunger = 0;
  };
};

Pet.prototype.checkUp = function() {
  if (this.hunger >= 5 && this.fitness <= 3) {
    return "I am hungry AND I need a walk";
  }
    else if ( this.hunger >= 5 ) {
    return "I am hungry";
  }
    else if ( this.fitness <= 3) {
    return "I need a walk";
  }
    else {
    return "I feel great!";
  };
};

Pet.prototype.isALive = function() {
  if (this.fitness <= 0 || this.hunger >= 10 || this.age >= 30) {
    return false;
  } else {
    return true;
  };
};

module.exports = Pet;