const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (typeof employeeName === 'undefined') {
    return {};
  }

  const { employees } = data;

  return employees.find((elemento) => elemento.firstName === employeeName
  || elemento.lastName === employeeName);
}
//  console.log(getEmployeeByName('Nelson'))

module.exports = getEmployeeByName;
