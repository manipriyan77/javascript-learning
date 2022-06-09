/*// Object literal syntax
const myInfo = {
    firstName: "Manipriyan",
    lastName: "Goaplan",
    job: "Developer",
    friends: ["Nishath", "Karthi", "Maha"],
    age: 23
}
console.log(myInfo)
// dot and bracket notation

console.log(myInfo.lastName)
console.log(myInfo["lastName"])

const nameKey = "Name"
console.log(myInfo["first" + nameKey])
console.log(myInfo["last" + nameKey])

// console.log(myInfo."last" + nameKey)

// const interestedIn = prompt("What do you want to know about jonas? Choose between firstName,lastName,age,job and friends")

// if (myInfo[interestedIn]) {
//     console.log(myInfo[`${interestedIn}`])
// }
// else {
//     console.log("You have entered an ivalid value!!Choose between firstName,lastName,age,job and friends")
// }

// To add values in existing objects
myInfo.native = "Kaniyakumari"
myInfo["hobbies"] = "Workout"

console.log(myInfo.friends[0])

console.log(`${myInfo.firstName} has ${myInfo.friends.length} friends, and his bestfriend is called ${myInfo.friends[0]} `)
*/
// Object Methods

const myInfo = {
    firstName: "Manipriyan",
    lastName: "Goaplan",
    job: "Developer",
    birthYeah: 1998,
    friends: ["Nishath", "Karthi", "Maha"],
    age: 23,
    hasDriversLicense: true,

    // calcAge: function (birthYeah) {
    //     return 2022 - birthYeah
    // }//Any function attached to an object is called method

    calcAge: function () {
        // console.log(this)
        this.age = 2022 - this.birthYeah;
        return this.age;
    },

    getSummary: function () {
        // if (myInfo.hasDriversLicense === true) {
        //     console.log(`${myInfo.firstName} is a ${myInfo.age}-year old ${myInfo.job}, and he has a driver's license`)
        // } else {
        //     console.log(`${myInfo.firstName} is a ${myInfo.age}-year old ${myInfo.job}, and don't have a driver's license`)
        // }
        return `${myInfo.firstName} is a ${myInfo.age}-year old ${myInfo.job}, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`
    }


}

console.log(myInfo.calcAge(), myInfo)
// console.log(myInfo["calcAge"](1998))

// Challenge
console.log(myInfo.getSummary())