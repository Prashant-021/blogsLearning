"use strict";
/*
const animal = new Animal();

switch(animal.getType()) {
    case IS_DOG:
        console.log("Woof!");
    case IS_CAT:
        console.log("Meow!");
        
}
*/
// const IS_DOG = "dog"
// const IS_CAT = "cat"
// class Animal {
//     constructor(
//         private type: string
//     ){}
//     getType(): string {
//         return this.type
//     }
//     bark() {
//         console.log("Woof!")
//     }
//     meow() {
//         console.log("Meow!!!")
//     }
// }
// function speak(animal: Animal) {
//     const theIndex = {
//         [IS_DOG]: animal.bark.bind(animal),
//         [IS_CAT]: animal.meow.bind(animal)
//     }
//     theIndex[animal.getType()]()
// }
// //...
// const animal = new Animal(IS_DOG);
// speak(animal)
// view rawobject-literal.js hosted with ❤ by GitHub
// First Alternative: Boolean Literal
const IS_DOG = "dog";
const IS_CAT = "cat";
class Animal {
    constructor(type) {
        this.type = type;
    }
    getType() {
        return this.type;
    }
    bark() {
        console.log("Woof!");
    }
    meow() {
        console.log("Meow!");
    }
}
function speak(animal) {
    const theIndex = {
        [IS_DOG]: animal.bark.bind(animal),
        [IS_CAT]: animal.meow.bind(animal)
    };
    theIndex[animal.getType()]();
}
const animal = new Animal(IS_CAT);
speak(animal);
