"use strict";

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const descNigeria = describeCountry("Nigeria", 40, "Abuja");
const descPeru = describeCountry("    Peru", 20, "Lima");
const descGermany = describeCountry(
  "                        Germany",
  80,
  "Berlin"
);
console.log(descNigeria, descPeru, descGermany);

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

const percChina = percentageOfWorld1(15800);
const percAlgeria = percentageOfWorld1(23700);
const percPortugal = percentageOfWorld1(31600);

console.log(percChina, percAlgeria, percPortugal);
