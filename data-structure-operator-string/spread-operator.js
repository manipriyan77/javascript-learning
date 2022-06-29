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
};

const arr = [7, 8, 9];

const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

// Creating a new array based on another using spread operator
const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, "Dosa"];
console.log(newMenu);
// Copy array
const mainMenuCopy = [...restaurant.mainMenu];
// join 2 arrays or more
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// Iterables are arrays,strings,maps,set except object
const str = "Manipriyan";
const letters = [...str, "", "s"];
console.log(letters);

// const incredients = [
//   prompt("Let's make pasta   Incredient 1? "),
//   prompt("Let's make pasta   Incredient 2? "),
//   prompt("Let's make pasta   Incredient 3? "),
// ];
// console.log(incredients);

// restaurant.orderPasta(incredients[0], incredients[1], incredients[2]);
// restaurant.orderPasta(...incredients);

// spread also works on objects
const newRestaurant = { ...restaurant, founder: "Manipriyan" };
console.log(newRestaurant);
