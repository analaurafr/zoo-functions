const data = require('../data/zoo_data');

const getEmployeeByName = (name) => {
  if (!name) {
    return {};
  }

  return data.employees.find(
    ({ firstName, lastName }) => firstName === name || lastName === name,
  ) || {};
};

module.exports = getEmployeeByName;
