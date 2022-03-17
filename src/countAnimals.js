const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  if (!animal) {
    return species.reduce((acc, curreteValue) => {
      acc[curreteValue.name] = curreteValue.residents.length; // UNDEFINED parameters
      return acc;
    }, {});
  }

  if (animal.sex) {
    const animalName = species.find((elemento) => elemento.name === animal.specie);
    const animalSex = animalName.residents.filter((elemento) => (elemento.sex === animal.sex)); // SPECIE and SEX
    return animalSex.length;
  }

  const myAnimal = species.find((elemento) => elemento.name === animal.specie); // ONLY specie
  return myAnimal.residents.length;
}

console.log(countAnimals({ specie: 'elephants', sex: 'male' }));

module.exports = countAnimals;
