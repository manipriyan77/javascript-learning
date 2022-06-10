// console.log("Lifiting weights reps 1 🦾")
// console.log("Lifiting weights reps 1 🦾")
// console.log("Lifiting weights reps 1 🦾")
// console.log("Lifiting weights reps 1 🦾")
// console.log("Lifiting weights reps 1 🦾")
// console.log("Lifiting weights reps 1 🦾")
// console.log("Lifiting weights reps 1 🦾")
// console.log("Lifiting weights reps 1 🦾")
// console.log("Lifiting weights reps 1 🦾")
// console.log("Lifiting weights reps 1 🦾")
// console.log("Lifiting weights reps 1 🦾")
// console.log("Lifiting weights reps 1 🦾")

/*
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifiting weights reps ${rep} 🦾`)

}

const myInfo = ["Manipriyan", "Gopalan", 23, "Developer", ["Nishanth", "Karthi", "Maha"]]

const types = []

console.log(myInfo.length)
for (let i = 0; i < myInfo.length; i++) {
    // reading an array
    console.log(myInfo[i], typeof myInfo[i])
    // Filling the types of array
    // types[i] = typeof myInfo[i]
    types.push(typeof myInfo[i])
}

console.log(types)

const years = [1991, 1999, 1996, 2007]
const ages = []
// Using loop
for (let i = 0; i < years.length; i++) {
    // ages[i] = 2022 - years[i]
    ages.push(2022 - years[i])
}
console.log(ages)

// Continue and break
// continue- to break current iteration of the loop and continue to the next one
// break is used to completely terminate the loop
console.log("continue statement")
for (let i = 0; i < myInfo.length; i++) {
    if (typeof myInfo[i] !== "string") continue;
    console.log(myInfo[i], typeof myInfo[i])
}
console.log("Break statement")
for (let i = 0; i < myInfo.length; i++) {
    if (typeof myInfo[i] === "number") break;
    console.log(myInfo[i], typeof myInfo[i])
}
*/
const myInfo = ["Manipriyan", "Gopalan", 23, "Developer", ["Nishanth", "Karthi", "Maha"], true]

for (let i = myInfo.length - 1; i >= 0; i--) {
    console.log(i, myInfo[i])
}

for (let exercise = 1; exercise <= 3; exercise++) {
    console.log(`----Strating Exersie ${exercise}`)
    for (let reps = 1; reps <= 5; reps++) {
        console.log(`Rep number ${reps}`)
    }
}