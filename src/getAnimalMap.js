const data = require('../data/zoo_data');

const { species } = data;
const regions = ['NE', 'NW', 'SE', 'SW'];

const noNameIncluded = () => {
  const animalsByRegion = regions.reduce((acc, currentValue) => {
    acc[currentValue] = species.filter((elemento) => elemento.location === currentValue)
      .map((elemento1) => elemento1.name);
    return acc;
  }, {});
  return animalsByRegion;
};

const names = () => {
  const myNames = regions.reduce((acc, currentValue) => {
    acc[currentValue] = noNameIncluded()[currentValue].map((elemento) => {
      const key = species.find((elemento1) => elemento1.name === elemento);
      return { [key.name]: key.residents.map((elemento2) => elemento2.name) }; // SE SOMENTE INCLUDEDNAMES FOR PASSADO
    });
    return acc;
  }, {});
  return myNames;
};

const sortedOrSex = (sorted, sex) => {
  const sortedSex = regions.reduce((acc, currentValue) => {
    acc[currentValue] = noNameIncluded()[currentValue].map((elemento) => {
      const key = species.find((elemento1) => elemento1.name === elemento);
      if (sorted && sex) { // SE FOR PASSADO SORTED & SEX
        return { [key.name]: key.residents.filter((elementoSx) => elementoSx.sex === sex)
          .map((elementoSxName) => elementoSxName.name).sort(),
        };
      }

      if (sorted) return { [key.name]: key.residents.map((elemento2) => elemento2.name).sort() }; // SE FOR PASSADO SOMENTE SORTED

      return { [key.name]: key.residents.filter((elementoSx) => elementoSx.sex === sex)
        .map((elementoSxName) => elementoSxName.name),
      }; // SE FOR PASSADO SOMENTE SEX
    });
    return acc;
  }, {});
  return sortedSex;
};

function getAnimalMap(options) {
  if (!options || !options.includeNames) return noNameIncluded();
  if (options.sorted || options.sex) return sortedOrSex(options.sorted, options.sex);
  return names();
}

// console.log(getAnimalMap({ includeNames: true }));

module.exports = getAnimalMap;
