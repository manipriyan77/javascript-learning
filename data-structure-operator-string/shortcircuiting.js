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
console.log("--------------OR----------");
// Logical operator can use any datatype and return any datatype and also can do short circuting
console.log(3||"Manipriyan");
console.log(""||"Mani");
console.log(true||0);
console.log(undefined||null);
console.log(undefined||0||""||"Hello"||23);
restaurant.numGuests=23;
const guests= restaurant.numGuests?restaurant.numGuests:10;
console.log(guests);

const guests2=restaurant.numGuests ||10;
console.log(guests2);

console.log("--------------AND----------");
console.log(0 && "Manipriyan");
console.log(7 && "Manipriyan");
console.log(7 && "Manipriyan" && 23 && null);
if(restaurant.orderPizza){
    restaurant.orderPizza("Mushrooms","spinach");
}

restaurant.orderPizza && restaurant.orderPizza("mushrooms","spinach");


