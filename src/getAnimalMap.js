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

const names = (sorted, sex) => {
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
  const sla = regions.reduce((acc, currentValue) => {
    acc[currentValue] = noNameIncluded()[currentValue].map((elemento) => {
      const key = species.find((elemento1) => elemento1.name === elemento);
      if (sorted && sex) {
        return { [key.name]: key.residents.filter((elementoSx) => elementoSx.sex === sex)
          .map((elementoSxName) => elementoSxName.name).sort(),
        };
      }
      if (sorted) return { [key.name]: key.residents.map((elemento2) => elemento2.name).sort() };
      return { [key.name]: key.residents.filter((elementoSx) => elementoSx.sex === sex)
        .map((elementoSxName) => elementoSxName.name),
      };
    });
    return acc;
  }, {});
  return sla;
};

function getAnimalMap(options) {
  if (!options || !options.includeNames) return noNameIncluded();
  if (options.sorted || options.sex) return sortedOrSex(options.sorted, options.sex);
  return names();
}

console.log(getAnimalMap({ includeNames: true }));

module.exports = getAnimalMap;
