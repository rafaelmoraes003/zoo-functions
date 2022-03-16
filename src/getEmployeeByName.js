const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (typeof employeeName === 'undefined') {
    return {};
  }

  const { employees } = data;

  const firstName = employees.find((elemento) => elemento.firstName === employeeName);
  const lastName = employees.find((elemento) => elemento.lastName === employeeName);

  if (firstName) {
    return firstName;
  }
  return lastName;
}
//  console.log(getEmployeeByName('Nelson'))

module.exports = getEmployeeByName;
