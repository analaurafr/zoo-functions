const data = require('../data/zoo_data');

const getEmployeeById = (id) => data.employees.find((employee) => employee.id === id);

const getOldestFromFirstSpecies = (employeeId) => {
  const employee = getEmployeeById(employeeId);

  if (!employee || !employee.responsibleFor.length) return [];

  const firstSpeciesId = employee.responsibleFor[0];
  const species = data.species.find((specie) => specie.id === firstSpeciesId);

  if (!species || !species.residents.length) return [];

  const oldestAnimal = species.residents.reduce((oldest, animal) => (
    animal.age > oldest.age ? animal : oldest
  ));

  return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
};

module.exports = getOldestFromFirstSpecies;
