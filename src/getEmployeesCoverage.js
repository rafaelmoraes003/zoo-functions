const data = require('../data/zoo_data');

const { species } = data;
const { employees } = data;

const getSpecies = (specieId) => { // RESGATA O NOME DO ANIMAL
  const specieIdentification = species.find((elemento) => elemento.id === specieId);
  return specieIdentification.name;
};

const getLocation = (locationId) => { // RESGATA A LOCALIZAÇÃO DO ANIMAL
  const specieLocation = species.find((elemento) => elemento.id === locationId);
  return specieLocation.location;
};

function getEmployeesCoverage(person) {
  if (!person) { // SE NÃO PASSAR >>NENHUM<< PARÂMETRO
    const mapEmployees = employees.map((elemento1) => ({
      id: elemento1.id,
      fullName: `${elemento1.firstName} ${elemento1.lastName}`,
      species: elemento1.responsibleFor.map((elemento) => getSpecies(elemento)),
      locations: elemento1.responsibleFor.map((elemento) => getLocation(elemento)),
    }));
    return mapEmployees;
  }
  const mapEmployee = employees.find((elemento) => (elemento.firstName === person.name
    || elemento.lastName === person.name || elemento.id === person.id));
  if (!mapEmployee) throw new Error('Informações inválidas'); // SE O NOME OU ID FOREM INVÁLIDOS

  return { // SE PASSAR >>ALGUM<< PARÂMETRO
    id: mapEmployee.id,
    fullName: `${mapEmployee.firstName} ${mapEmployee.lastName}`,
    species: mapEmployee.responsibleFor.map((elemento) => getSpecies(elemento)),
    locations: mapEmployee.responsibleFor.map((elemento) => getLocation(elemento)) };
}

console.log(getEmployeesCoverage({ name: 'Ardith' }));

module.exports = getEmployeesCoverage;
