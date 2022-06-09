/*const friends = ["Mani", "Nishanth", "Rajan", "Karthi"];
const years = new Array(1991, 1992, 1993);

// To get value from an array

console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length - 1]); // to get last element from an array

friends[2] = "NishanthRaj";
console.log(friends);

const favGame = "Kabbadi";

const myInfo = ["Manipriyan", "Gopalan", 1998, 2022 - 1998, favGame, friends];
console.log(myInfo, myInfo.length);

const calcAge2 = function (birthYeah) {
  return 2037 - birthYeah;
};

const year = [1990, 1967, 1947, 1998, 2022];

// console.log(year + 10)

const age1 = calcAge2(year[0]);
const age2 = calcAge2(year[1]);
const age3 = calcAge2(year[2]);

// console.log(age1)
const ages = [calcAge2(year[0]), calcAge2(year[1]), calcAge2(year[2])];
console.log(ages);
*/

// Array methods

// Add elements
const friends = ["Mani", "Nishanth", "Rajan", "Karthi"];
const newFriendsLength = friends.push("Selvi");
console.log(friends);
console.log(newFriendsLength);
// By default push method return the length of the string

// add elemts to beginning of the array
friends.unshift("Raji");
console.log(friends);

// Remove elements
friends.pop(); //remove the last element of the array
console.log(friends); //pop element return the removed element

friends.shift(); //remove 1st element from an array
console.log(friends);
console.log(friends.indexOf("Mani"));
console.log(friends.indexOf("Selvi"));
friends.push(23);

console.log(friends.includes("Mani"));
console.log(friends.includes("23")); // 23 !== "23"
console.log(friends.includes(23)); // 23 !== "23"

console.log(friends.includes("Selvi")); //includess method uses strict equality

if (friends.includes("Mani")) {
  console.log("You have a friend name mani");
}
