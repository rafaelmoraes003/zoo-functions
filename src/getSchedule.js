const data = require('../data/zoo_data');

const { hours, species } = data; // CHAVES 'HOURS' E 'SPECIES' DE DATA;
const days = Object.keys(hours); // DIAS
const schedule = Object.values(hours); // HORÁRIOS (ABERTURA E FECHAMENTO)

const daysSchedule = () => {
  const mySchedule = days.reduce((acc, currentValue, index) => {
    const animals = species.filter((elemento) => elemento.availability.includes(currentValue));
    const animaisByName = animals.map((elemento) => elemento.name);
    if (currentValue !== 'Monday') {
      acc[currentValue] = {
        officeHour: `Open from ${schedule[index].open}am until ${schedule[index].close}pm`,
        exhibition: animaisByName,
      };
    } else {
      acc[currentValue] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    }
    return acc;
  }, {});

  return mySchedule;
};

const myDays = (parameter) => {
  let myDay;
  days.forEach((day) => {
    if (parameter === day) myDay = { [day]: daysSchedule()[day] };
  });
  return myDay;
};

const animalAvailabre = (arg) => {
  let animal;
  species.forEach(((elemento) => {
    animal = species.map((specie) => specie.name);
  }));
  if (animal.includes(arg)) {
    const findAnimal = species.find((elemento) => elemento.name === arg);
    return findAnimal.availability;
  }
};

// console.log(animalAvailabre('penguins'))

function getSchedule(scheduleTarget) {
  if (!scheduleTarget) {
    return daysSchedule();
  }
  if (myDays(scheduleTarget)) {
    return myDays(scheduleTarget);
  }
  if (animalAvailabre(scheduleTarget)) {
    const myAnimal = species.find((elemento) => elemento.name === scheduleTarget);
    return myAnimal.availability;
  }
  return daysSchedule();
}

// console.log(getSchedule('Monday'));

module.exports = getSchedule;
