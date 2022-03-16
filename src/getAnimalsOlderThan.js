const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const { species } = data;

  const myrray = [];

  species.find((elemento) => elemento.name === animal).residents.forEach((idades) => {
    myrray.push(idades.age);
  });

  return myrray.every((elementos) => elementos >= age);
}

//  console.log(getAnimalsOlderThan('otters', 7))

module.exports = getAnimalsOlderThan;
