const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (employeeId) => {
  const { employees, species } = data;
  const findEmployee = (id) => employees.find((emp) => emp.id === id);
  const findSpeciesById = (id) => species.find((spec) => spec.id === id);

  const employee = findEmployee(employeeId);
  if (!employee) {
    return [];
  }
  const firstSpeciesId = employee.responsibleFor[0];
  const speciesData = findSpeciesById(firstSpeciesId);
  if (!speciesData || speciesData.residents.length === 0) {
    return [];
  }
  const oldestAnimal = speciesData.residents.reduce((oldest, animal) =>
    (animal.age > oldest.age ? animal : oldest));
  const { name, sex, age } = oldestAnimal;
  return [name, sex, age];
};

module.exports = getOldestFromFirstSpecies;
