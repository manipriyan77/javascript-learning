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

  restaurant.numGuests = 0;
  const guests = restaurant.numGuests || 10;
  console.log(guests);

//   nullish values are null and undefined it doesnt include 0 and empty string
  const guestsCorrect = restaurant.numGuests??10;
  console.log(guestsCorrect);