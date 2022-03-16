const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) {
    return [];
  }

  const myAnimal = [];
  ids.forEach((id) => {
    const animal = species.find((specie) => specie.id === id);
    myAnimal.push(animal);
  });

  return myAnimal;
}

// console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce', '533bebf3-6bbe-41d8-9cdf-46f7d13b62ae'));

module.exports = getSpeciesByIds;
