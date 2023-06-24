const data = require('../data/zoo_data');

const isManager = (id) => data.employees.some((employee) => employee.managers.includes(id));

const getRelatedEmployees = (managerId) => {
  const managers = data.employees.filter((employee) => employee.managers.includes(managerId));

  if (managers.length === 0) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return managers.map((manager) => `${manager.firstName} ${manager.lastName}`);
};

module.exports = { isManager, getRelatedEmployees };
