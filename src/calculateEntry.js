const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const childCount = entrants.filter((child) => child.age < 18).length;
  const adultCount = entrants.filter((adult) => adult.age >= 18 && adult.age < 50).length;
  const seniorCount = entrants.filter((senior) => senior.age >= 50).length;
  const entrantsList = {
    child: childCount,
    adult: adultCount,
    senior: seniorCount,
  };
  return entrantsList;
};

const calculateEntry = (entrants) => {
  if (!entrants || entrants.length === 0) {
    return 0;
  }

  const entrantsList = countEntrants(entrants);
  const childCost = entrantsList.child * data.prices.child;
  const adultCost = entrantsList.adult * data.prices.adult;
  const seniorCost = entrantsList.senior * data.prices.senior;
  const total = childCost + adultCost + seniorCost;

  return parseFloat(total.toFixed(2));
};

module.exports = { calculateEntry, countEntrants };
