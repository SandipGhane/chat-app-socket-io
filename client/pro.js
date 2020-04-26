const numbers = [1, 2, 3];

const moreNumbers = [...numbers, 4, 5];

console.log("numbers", numbers);
console.log("moreNumbers", moreNumbers);

const [first, second, ...others] = moreNumbers;

console.log("first", first);
console.log("second", second);
console.log("others", others);