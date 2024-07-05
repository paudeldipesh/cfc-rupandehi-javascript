// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   makeSound() {
//     return `${this.name} makes sound.`;
//   }
// }

// const newAnimal = new Animal("Bob"); // instance
// console.log(newAnimal.makeSound()); // Bob makes sound. // Abstraction

// // Inheritance
// class Dog extends Animal {
//   constructor(name, color) {
//     super(name);
//     this.color = color;
//   }

//   // Polymorphism
//   makeSound() {
//     return `${this.color} ${this.name} is barking!`;
//   }
// }

// const newDog = new Dog("Tom", "Black");
// console.log(newDog.makeSound());

// class Cat extends Animal {
//   constructor(name, habbit) {
//     super(name);
//     this.habbit = habbit;
//   }

//   // private method
//   #angry() {
//     return `${this.name} is angry!`;
//   }

//   // Encapsulation
//   makePublicAngry() {
//     return this.#angry();
//   }

//   // public method
//   makeSound() {
//     return `${this.habbit} ${this.name} saying meow meow!`;
//   }
// }

// const newCat = new Cat("July", "Good");
// console.log(newCat.makeSound());
// // console.log(newCat.angry()); // private method
// console.log(newCat.makePublicAngry());

// const obj = {
//   name: "Prachanda",
//   role: "Prime Minister",
//   print: function () {
//     return `${this.name} is ${this.role}.`;
//   },
//   // print: () => obj.name + " is " + obj.role + ".",
//   // print: () => `${obj.name} is ${obj.role}.`,
// };
// console.log(obj.print());

// const arrayOfNumbers = [2, 4, 6, 8, 10, 12, 13, 89];
// console.log(arrayOfNumbers); // [2, 4, 6, 8, 10, 12, 13, 89]
// console.log(arrayOfNumbers[0]); // 2

// // Slice
// console.log(arrayOfNumbers.slice(1, 5)); // [4, 6, 8, 10] 4 inclusive 12 exclusive
// console.log(arrayOfNumbers.slice(2)); // [6, 8, 10, 12, 13, 89]

// // Splice
// console.log(arrayOfNumbers.splice(1, 1)); // [4]
