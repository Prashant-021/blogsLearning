console.log("Find Method:");

const numbers = [12, -23, 42, -21, 32];
const findResult = numbers.find(num => num < 0)
console.log(findResult);

const filterResult = numbers.filter(num => num < 0);
console.log(filterResult);