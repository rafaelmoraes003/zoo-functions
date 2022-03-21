const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const { species } = data;
  const { employees } = data;

  const myEmployee = employees.find((elemento) => elemento.id === id);
  const firtsResponsible = myEmployee.responsibleFor[0];
  const myResidents = species.find((elemento) => elemento.id === firtsResponsible).residents;
  const oldestAnimal = myResidents.filter((elemento) => elemento).sort((a, b) => b.age - a.age)[0];
  return Object.values(oldestAnimal);
}

// console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;
