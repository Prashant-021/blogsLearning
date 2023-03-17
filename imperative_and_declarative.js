let pets = [
    { name: 'fluffy', color: 'white', age: 6, type: 'dog' },
    { name: 'molly', color: 'brown', age: 9, type: 'cat' },
    { name: 'buster', color: 'black', age: 3, type: 'dog' },
    { name: 'grant', color: 'black', age: 6, type: 'cat' },
    { name: 'pepsi', color: 'grey', age: 4, type: 'dog' },
    { name: 'winston', color: 'brown', age: 8, type: 'dog' },
    { name: 'sprite', color: 'white', age: 10, type: 'cat' },
    { name: 'oscar', color: 'grey', age: 2, type: 'dog' },
    { name: 'bumper', color: 'black', age: 12, type: 'dog' },
    { name: 'happy', color: 'white', age: 11, type: 'dog' },
    { name: 'speedy', color: 'black', age: 9, type: 'cat' }
];

// imperative programming
console.log('imperative programming')
for (const iterator of pets) {
    if (iterator.color === 'black' && iterator.age > 7) {
        console.log(`${iterator.name} is ${iterator.age} years old and is ${iterator.color} in color.`);
    }
}

//Declarative programming
console.log('Declarative programming')
let filterApproach = pets.filter(p => (p.color === 'black' && p.age >7)).map(p => `${p.name} is ${p.age} years old and is ${p.color} in color.`)
console.log(filterApproach);


// further refactoring the code
console.log("Refactoring above code");
let petColor = pet => (pet.color === 'black');
let petAge = pet => (pet.age > 7);
let makeString = pet => `${pet.name} is ${pet.age} years old and is ${pet.color} in color`; 

console.table(pets.filter(petColor).filter(petAge).map(makeString));