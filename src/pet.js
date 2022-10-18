

function Pet(name) {
  this.name = name
  this.age = 0
  this.hunger = 0
  this.fitness = 10
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
  const increaseInFitnessPerWalk = 4;
  this.fitness += increaseInFitnessPerWalk;
  if (this.fitness > 10) {
    this.fitness = 10;
  };
};

module.exports = Pet;