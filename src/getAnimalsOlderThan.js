const data = require('../data/zoo_data');

const getAnimalsOlderThan = (species, age) => {
  const foundAnimal = data.species.find((animal) => animal.name === species);

  if (!foundAnimal) {
    return false;
  }

  const animals = foundAnimal.residents;

  if (!animals) {
    return false;
  }

  return animals.every((animal) => animal.age >= age);
};

module.exports = getAnimalsOlderThan;
