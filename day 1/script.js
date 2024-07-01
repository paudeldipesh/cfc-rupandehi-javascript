/*
 This is multiple line comment
 Code for change
 Rupandehi
*/
// Single line comment

console.log("Hello World");

let person = "KP Oli";
const profession = "Politician";
var role = "Nothing";

console.log(person);
console.log(profession);
console.log(role);

console.log(5 + 7);
console.log(8 - 7);
console.log(14 / 7);
console.log(2 * 7);
console.log(2 ** 3); // 2 Power 3
console.log(3 ** 3); // 3 Power 3
console.log(3 % 2);
console.log(17 % 7);

let number = 8;
number++;
console.log(number);

let secondNumber = 18;
secondNumber--;
console.log(secondNumber);

sum = 18;
sum += 2; // equals to sum = sum + 2;
console.log(sum);

// Data types in JavaScript (Primitive and Objects)
let a = 1; // number
let b = "1"; // string
let bool = false; // boolean
let c = null; // null
let d; // undefined
let e = 975938759275393857n; // BigInt
let sym = Symbol("description"); // Symbol

console.log(typeof a, typeof b, typeof bool, typeof c, typeof d);

let first_number = "4",
  second_number = 3;

sum = first_number + second_number;
console.log(sum, typeof sum);

console.log(5 > 7);
console.log(8 > 7);
console.log(10 >= 10);

// Boolean
// OR
console.log("true || false ", true || false);
console.log("false || false", false || false);
console.log("true || true", true || true);
console.log("false || true", false || true);
// AND
console.log("true && false ", true && false);
console.log("false && false", false && false);
console.log("true && true", true && true);
console.log("false && true", false && true);

// let credentials = confirm("Do you want to login?");
// if (credentials) {
//   console.log("He want to login");
// } else {
//   console.log("Not intrested");
// }

// let input = prompt("What is your name?");
// alert(input);
// console.log(input, typeof input);

let user_input = prompt("Give any number?");
user_input = Number.parseInt(user_input);

switch (user_input) {
  case 1:
    console.log("Number is 1");
    break;

  case 2:
    console.log("Number is 2");
    break;

  case 3:
    console.log("Number is 3");
    break;

  default:
    console.log("Number is different");
}

// Task: while and do while loop
let organization = "Code for change";
console.log(organization[0]);
console.log(organization[1]);
console.log(organization[2]);
console.log(organization[3]);

for (let i = 0; i < organization.length; i++) {
  console.log(organization[i]);
}

// Key value pair
let obj = {
  country: "Nepal",
  capital: "Kathmandu",
  population: 7923742,
  isGood: true,
};

console.log(obj.country);
console.log(obj["country"]);

let { country, capital, population, isGood } = obj; // destructuring
console.log(country);

let arr = [1, "Nepal", true];
console.log(arr);
console.log(arr.length);
let [first, second, third] = arr; // destructuring
console.log(first);
console.log(second);
console.log(third);

let students_one = ["Ram", "Shyam", "Jiwan", "Samir", "Dipesh", "Ganesh"];
console.log(students_one[0]);
console.log(students_one[1]);
console.log(students_one[2]);
console.log(students_one[3]);
console.log(students_one[4]);
console.log(students_one[5]);
for (let index = 0; index < students_one.length; index++) {
  console.log(students_one[index]);
}

let students_two = ["Ram", "Shyam", "Jiwan", "Samir", "Dipesh", "Ganesh"];
console.log(students_two);
console.log(students_two.length);
students_two.pop();
console.log(students_two);
students_two.push("Rabi");
console.log(students_two);
// Task: shift and unshift
console.log(students_two.join(" "));

let number_array = [9, 8, 2, 1, 4, 3];

let sorted_array = number_array.sort(function (a, b) {
  return a - b;
});

console.log(sorted_array);
console.log(number_array); // array is mutable

// Normal Function
function sayHi() {
  console.log("Hi, Learners!");
}

// sayHi();

// arguments
function sumPlusOne(a, b) {
  return a + b + 1;
}

// Arrow function
// const sumPlusOne = (a, b) => a + b + 1;

// parameters
console.log(sumPlusOne(2, 8));
