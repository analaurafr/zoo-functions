const data = require('../data/zoo_data');

const countAnimals = ({ species, sex } = {}) => {
  const residentsBySpecies = data.species.reduce((result, { name, residents }) => {
    const filteredResidents = residents.filter(({ sex: residentSex }) => {
      if (sex) {
        return residentSex === sex;
      }
      return true;
    });

    return { ...result, [name]: filteredResidents.length };
  }, {});

  if (species) {
    return residentsBySpecies[species] || 0;
  }

  return residentsBySpecies;
};

module.exports = countAnimals;
