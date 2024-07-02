let first_array = [1, 2, 3, 4];
console.log(first_array);
first_array[0] = "Code for change";
console.log(first_array); // Mutable

let person = "RABI";
console.log(person);
person[0] = "C";
console.log(person); // Immutable

const pi = 3.14;
console.log(pi);

let countryOne;
countryOne = "Nepal";
console.log(countryOne);

// let and const are local scope and var is global scoped
var countryTwo = "Nepal";
console.log(countryTwo);

{
  var countryTwo = "China";
  console.log(countryTwo);
}

console.log(countryTwo);

function sayHelloWorld() {
  var person = "GB Rai";
  console.log(person);
}
sayHelloWorld();
console.log(person);

let sum = 7 + 2;
console.log(sum);
sum = 8 + 2;
console.log(sum);

let paraTag = document.getElementById("paragraph-tag");
console.log(paraTag);
paraTag.style.fontFamily = "sans-serif";
paraTag.style.fontSize = "50px";
paraTag.style.padding = "20px";
paraTag.style.margin = "10px";
paraTag.style.backgroundColor = "green";

let divTags = document.getElementsByClassName("div-tag");
console.log(divTags);

let divTagsArray = Array.from(divTags);
console.log(divTagsArray);

for (let index = 0; index < divTagsArray.length; index++) {
  divTags[index].style.backgroundColor = "orange";
  divTags[index].style.margin = "10px";
}

console.log(document.title);
document.title = "JavaScript Series";
console.log(document.documentElement);

let animal = "Tiger";
let bird = " Parrot";

let animalArray = Array.from(animal);
console.log(animalArray);

console.log("The wild animal is " + animal + " and the bird is " + bird + ".");
console.log(`The wild animal is ${animal} and the bird is ${bird}.`);

let numberArray = [1, 2, 3, 4, 5, 6, 7];
console.log(numberArray);
// map
let mapArray = numberArray.map((number) => number + 1);
console.log(mapArray);
// filter
let filterArray = numberArray.filter((number) => number > 5);
console.log(filterArray);
// reduce
let reduceMethod = numberArray.reduce((num1, num2) => num1 + num2, 1);
console.log(reduceMethod);

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

function operation(a, b, callback) {
  return callback(a, b);
}

console.log(operation(4, 5, add));
console.log(operation(9, 5, sub));
console.log(operation(4, 5, mul));
console.log(operation(15, 5, div));

let addition = add(2, 3);
console.log(addition);

let subtraction = sub(4, 1);
console.log(subtraction);

let multiplication = mul(4, 4);
console.log(multiplication);

let division = div(8, 2);
console.log(division);

let btnEl = document.getElementById("btn");
let headingOneEl = document.getElementById("nepal");

function task() {
  headingOneEl.style.color = "orange";
  let yourName = prompt("What is your name?");
  console.log(yourName);
}
btnEl.addEventListener("click", task);
