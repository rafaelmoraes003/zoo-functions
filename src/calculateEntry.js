const data = require('../data/zoo_data');

const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

function countEntrants(entrada) {
  const childCount = entrada.filter((elemento) => elemento.age < 18);
  const adultCount = entrada.filter((elemento) => elemento.age >= 18 && elemento.age < 50);
  const seniorCount = entrada.filter((elemento) => elemento.age >= 50);

  return {
    child: childCount.length,
    adult: adultCount.length,
    senior: seniorCount.length,
  };
}

function calculateEntry(finalPrice) {
  const { prices } = data;
  if (!finalPrice) {
    return 0;
  }

  if (Object.keys(finalPrice).length === 0) {
    return 0;
  }

  const adultPrice = Object.values(prices)[0]; // ------------------ preço que adulto paga
  const seniorPrice = Object.values(prices)[1]; // ----------------- preço que idoso paga
  const childPrice = Object.values(prices)[2]; // ------------------ preço que criança paga
  const childCount = finalPrice.filter((elemento) => elemento.age < 18); // --------------------------------- CRIANÇAS
  const adultCount = finalPrice.filter((elemento) => elemento.age >= 18 && elemento.age < 50); // ----------- ADULTOS
  const seniorCount = finalPrice.filter((elemento) => elemento.age >= 50); // ------------------------------- IDOSOS

  return ((childCount.length * childPrice) + (adultCount.length * adultPrice)
  + (seniorCount.length * seniorPrice));
}

console.log(calculateEntry(entrants));

module.exports = { calculateEntry, countEntrants };
