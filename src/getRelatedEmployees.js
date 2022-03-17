const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  return employees.some((elemento) => elemento.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const managers = employees.filter((elemento) => elemento.managers.includes(managerId));
    return managers.map((elemento) => `${elemento.firstName} ${elemento.lastName}`);
  }

  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
