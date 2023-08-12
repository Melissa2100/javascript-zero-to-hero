// coding challenge #1

// test data 1
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// // coding challenge #2
// if (BMIMark > BMIJohn) {
//   console.log(`Mark's BMI (${BMIMark}) is higher than John's(${BMIJohn})!`);
// } else {
//   console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
// }

// coding challenge #3

const scoreDolphins = (101 + 108 + 89) / 3;
const scoreKoalas = (88 + 100 + 110) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas) {
  console.log("Dolphin wins the trophy 🏆");
} else if (scoreKoalas > scoreDolphins) {
  console.log("Koala wins the trophy 🏆");
} else if (scoreDolphins === scoreKoalas) {
  console.log("They both won!");
}

