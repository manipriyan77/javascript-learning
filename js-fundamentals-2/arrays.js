const friends = ["Mani", "Nishanth", "Rajan", "Karthi"]
const years = new Array(1991, 1992, 1993)

// To get value from an array

console.log(friends[0])
console.log(friends.length)
console.log(friends[friends.length - 1])// to get last element from an array

friends[2] = "NishanthRaj"
console.log(friends)

const favGame = "Kabbadi"

const myInfo = ["Manipriyan", "Gopalan", 1998, 2022 - 1998, favGame, friends]
console.log(myInfo, myInfo.length)


const calcAge2 = function (birthYeah) {
    return 2037 - birthYeah;
}

const year = [1990, 1967, 1947, 1998, 2022]


// console.log(year + 10)

const age1 = calcAge2(year[0])
const age2 = calcAge2(year[1])
const age3 = calcAge2(year[2])

// console.log(age1)
const ages = [calcAge2(year[0]), calcAge2(year[1]), calcAge2(year[2])]
console.log(ages)