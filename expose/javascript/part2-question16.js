let statistics = {
  redCars: 21,
  blueCars: 45,
  greenCars: 12,
  raceCars: 5,
  blackCars: 40,
  rareCars: 2
};

for (let prop in statistics) {
  if (prop.charAt(0) === 'r' || statistcs[prop] % 2 === 1) {
    console.log(statistics[prop]);
  }
}
