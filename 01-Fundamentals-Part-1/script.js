/*
let firstName = 'Ulises';
let js = 'amazing';
let PI = 3.1415;

if (js === 'amazing') alert('JS is fun!');

console.log(40 + 8 + 23 - 10);
console.log('Ulises');
console.log(23);
console.log(firstName);

// variable name conventions
let Ulises_Magana = 'UM';
let $fuction = 23;

let myFirstJob = 'programmer';
let MyCurrentJob = 'Developer';


let javascriptIsFun = true;

//console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);
//console.log(typeof 23);
//console.log(typeof 'Ulises');

javascriptIsFun = 'yes!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1998;
console.log(year);
console.log(typeof year);

let age = 23;
age = 24;

const birthYear = 1998;
// birthYear = 1999;
// const job;

var job = 'programmer';
job = 'developer';

lastName = 'Magaña';
console.log(lastName);

const currentYear = 2022;
const ageUlises = currentYear - 1998;
const ageSarah = currentYear - 2018;

console.log(ageUlises, ageSarah);
console.log(ageUlises * 2, ageUlises /2, 2 ** 3);

const firstName = 'Ulises';
const lastName = 'Magaña';

console.log(firstName + ' ' + lastName);

let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;

console.log(x);

console.log(ageUlises > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >18;

console.log(currentYear - 1991 > currentYear - 1998);

const currentYear = 2022;
const ageUlises = currentYear - 1998;
const ageSarah = currentYear - 2018;

console.log(currentYear - 1991 > currentYear - 1998);

let x, y;
x = y = 25 -10 - 5;
console.log(x,y);

const averageAge = (ageUlises + ageSarah) / 2;
console.log(ageUlises, ageSarah, averageAge);

const firstName = 'Ulises';
const job = 'teacher';
const birthYear = 1998;
const year = 2037;

const ulises = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job;
const ulisesNew = `I'm ${firstName}, a ${(year - birthYear)} years old ${job}`;

console.log(`just a regular string...`);
console.log('String with \n\ multiple \n\ lines');
console.log(`String with
multiple
lines`);

const age = 15;

if (age >= 18) {
    console.log(`Ulises can start driving license`);
} else {
    const yearsLeft = 18 - age;
    console.log(`Ulises is too young, wait another ${yearsLeft} years.`);
}

const birthYear = 1998;
let century;
if(birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);

// Type conversion
const inputYear = '1991';

console.log(Number(inputYear));
console.log(Number(inputYear)+18);

console.log(Number('Ulises'));
console.log(typeof(NaN));

console.log(String(23));

// Type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' * 2);

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Ulises'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if(money) {
    console.log("don't spend it all");
} else {
    console.log('you should get a job!');
}

let height;
if(height) {
    console.log('height is defined');
} else {
    console.log('height is not defined');
}

const age = '18';

if(age === 18) console.log('you just became an adult (strict)');
if(age == 18) console.log('you just became an adult (loose)');

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { // 22 === 23 -> FALSE
  console.log('Cool! 23 is an amzaing number!')
} else if (favourite === 7) {
  console.log('7 is also a cool number')
} else if (favourite === 9) {
  console.log('9 is also a cool number')
} else {
  console.log('Number is not 23 or 7 or 9')
}

if (favourite !== 23) console.log('Why not 23?');

////////////////////////////////////
// Logical Operators
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
}

////////////////////////////////////
// The switch Statement
const day = 'friday';

switch (day) {
  case 'monday': // day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend :D');
    break;
  default:
    console.log('Not a valid day!');
}

if (day === 'monday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');
} else if (day === 'tuesday') {
  console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if (day === 'friday') {
  console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend :D');
} else {
  console.log('Not a valid day!');
}

////////////////////////////////////
// Statements and Expressions
3 + 4
1991
true && false && !false

if (23 > 10) {
  const str = '23 is bigger';
}

const me = 'Jonas';
console.log(`I'm ${2037 - 1991} years old ${me}`);

////////////////////////////////////
// The Conditional (Ternary) Operator
const age = 23;
// age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = 'wine 🍷';
} else {
  drink2 = 'water 💧';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);
*/
