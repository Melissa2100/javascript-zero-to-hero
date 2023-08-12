/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Blessing");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1998;
console.log(year);
console.log(typeof year); 

const now = 2037;
const ageBlessing = now - 1998;
const ageSarah = now - 2018;
console.log(ageBlessing, ageSarah);

const firstName = "Blessing";
const lastName = "Awak";
console.log(firstName + " " + lastName);

console.log(ageSarah > ageBlessing);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

const now = 2037;
const ageBlessing = now - 1998;
const ageSarah = now - 2018;

console.log(now - 1998 > now - 2018);

// strings
const firstName = "Melissa";
const job = "engineer";
const birthYear = 1998;
const year = 2037;

const Melissa =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(Melissa);

// template literals
const melissaNew = `I'm ${firstName}, a ${ year - birthYear} years old ${job}!`;
console.log(melissaNew);

// if/esle statement
const age = 15;

if (age >= 18) {
  console.log("You are old enough to drive!😊"); //emoji (on windows 10 = windows + .)
} else {
  const yearsLeft = 18 - age;
  console.log(`You are still young. Wait another ${yearsLeft} years :`);
} // if/else statement is called a controlled structure because it allows us to have more control over the way our code is executed.

const birthYear = 1991;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

// type conversion - is manually converting from one type to another
const inputYear = "1998";
console.log(Number(inputYear), inputYear); // strings can be converted to number using this function "Number()"
console.log(Number(inputYear) + 18);

// type coercion - is when Javascript automatically convert types behind the scene for us.
console.log("I am " + 23 + " years old");
console.log("I am " + String(23) + " years old");

// equality operator
const age = "18";
if (age === 18) console.log("you just became an adult :D"); //strict equality

if (age == 18) console.log("you just became an adult :D"); //loose equality

const favorite = Number(prompt("what's your favorite number"));
console.log(favorite);

if (favorite === 8) {
  //the string needs to change to Number using "Number()"
  console.log("cool, 8 is an amazing number");
} else if (favorite === 22) {
  console.log("22 is a cool number");
} else {
  console.log("Number is not 8 or 22");
}

if (favorite == 8) {
  // '8' == 8
  console.log("cool, 8 is an amazing number");
} else if (favorite == 22) {
  console.log("22 is a cool number");
} else {
  console.log("Number is not 8 or 22");
}

// Logical Operator
const hasDriversLisense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLisense && hasGoodVision);
console.log(hasDriversLisense || hasGoodVision);
console.log(!hasDriversLisense && hasGoodVision);
console.log(hasDriversLisense || !hasGoodVision);

// if (hasDriversLisense && hasGoodVision) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive!");
// }

const isTired = false; // C
console.log(hasDriversLisense && hasGoodVision && isTired);

if (hasDriversLisense || hasGoodVision || !isTired) { // '!isTired' is true when 'isTired' remain false
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}
*/

// the conditional (tenary) operator
const age = 23;
const drink = age >= 18 ? "wine🍷" : "water 💧";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "water 💧";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine🍷" : "water 💧"}`);
