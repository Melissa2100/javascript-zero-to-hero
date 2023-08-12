const country = "Nigeria";
// let continent = "Africa";
let population = 400000000;
let isIsLand = "false";
// let language;
console.log(country);
// console.log(continent);
console.log(population);
console.log(isIsLand);
// console.log(language);

let language = "ibibio";
const continent = "Africa";
isIsLand = "true";
console.log(population);
console.log(isIsLand);
console.log(language);
console.log(country);

console.log(population / 2);
population++;
console.log(population);
console.log(population > 6);
console.log(population < 33);
const description1 =
  "Nigeria" +
  " is in " +
  "Africa" +
  ", and its " +
  40 +
  " million people speaks " +
  "ibibio";
console.log(description1);

console.log("9" - "5");
console.log("19" - "13" + "17");
console.log("19" - "13" + 17);
console.log("123" < 57);
console.log(5 + 6 + "4" + 9 - 4 - 2);

// const numNeighbours = prompt(
//   "How many Neighbour countries does your country have?"
// );

// if (numNeighbours == 1) {
//   console.log("Only 1 neighbour");
// } else if (numNeighbours > 1) {
//   console.log("More than 1 border");
// } else {
//   console.log("No border");
// }

// const numNeighbours = Number(prompt(
//   "How many Neighbour countries does your country have?"
// ));

// if (numNeighbours === 1) {
//   console.log("Only 1 neighbour");
// } else if (numNeighbours > 1) {
//   console.log("More than 1 border");
// } else {
//   console.log("No border");
// }

if (language === "english" && population < 50 && !isIsLand) {
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet you cateria :(`);
}

switch (language) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers");
    break;
  case "spanish":
    console.log("2nd plce in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default: {
    console.log("Great language too :D");
  }
}

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const descNigeria = describeCountry("Nigeria", 40, "Abuja");
const descPortugal = describeCountry("Portugal", 10, "Lisbon");
const descFinland = describeCountry("Finland", 6, "Helsinki");
console.log(descNigeria, descPortugal, descFinland);
