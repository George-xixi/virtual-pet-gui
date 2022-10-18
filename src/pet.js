
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
  }
}

module.exports = Pet;