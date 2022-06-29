const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (startedIndex, mainIndex) {
    return [this.starterMenu[startedIndex], this.mainMenu[mainIndex]];
  },
  orderPasta: function (inc1, inc2, inc3) {
    console.log(`Here is your delicious pasta ${inc1} ${inc2} ${inc3}`);
  },
  orderPizza: function (mainIncredient, ...otherIncredients) {
    console.log(mainIncredient, otherIncredients);
  },
};
// DESTUCTURING
// spread bcz on right sign of the assignment operator
const arr = [1, 2, ...[3, 4]];

// syntax for rest bcz on left side of the equal sign
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , Risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, Risotto, otherFood); //Resst elemrnt must be the last element and it can contain only one rest operators

// objects
const { sat, ...otherDays } = restaurant.openingHours;
console.log(otherDays);

//FUNCTIONS
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  console.log(sum);
};
add(1, 2, 3);
add(1, 2, 23);
add(1, 2, 3, 7, 8);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza("mushrooms", "olives", "chicken", "tomatos");
