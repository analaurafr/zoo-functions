const data = require('../data/zoo_data');

const getWeekDays = (...weekDaysList) =>
  weekDaysList.flat().reduce((objDays, weekDay) => ({
    ...objDays,
    [weekDay]: weekDay !== 'Monday'
      ? {
        officeHour: `Open from ${data.hours[weekDay].open}am until ${data.hours[weekDay].close}pm`,
        exhibition: data.species
          .filter((species) => species.availability.includes(weekDay))
          .map((animal) => animal.name),
      }
      : { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
  }), {});

const getAvailabilityByAnimal = (animalName) => {
  const animal = data.species.find((species) => species.name === animalName);
  return animal ? animal.availability : 'Animal not found.';
};

const getSchedule = (target) => {
  if (data.species.some((species) => species.name === target)) {
    return getAvailabilityByAnimal(target);
  }

  if (Object.keys(data.hours).includes(target)) {
    return getWeekDays(target);
  }

  return getWeekDays(...Object.keys(data.hours));
};

module.exports = getSchedule;
