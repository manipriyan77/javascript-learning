const arr = [7, 8, 9];

const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

// Creating a new array based on another using spread operator
const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);
