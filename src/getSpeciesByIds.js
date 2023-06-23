const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  if (ids.length === 0) {
    return [];
  }

  const { species } = data;
  return species.filter((animal) => ids.includes(animal.id));
};

module.exports = getSpeciesByIds;
