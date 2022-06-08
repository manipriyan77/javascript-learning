

const calcAverage = (score1, score2, score3) => {
    let averageScore = score1 + score2 + score3 / 3;
    return averageScore
}

const scoreDolphins = calcAverage(44, 23, 71)
const scoreKolalas = calcAverage(65, 54, 49)

const checkWinner = function (avgDolphins, avgKolalas) {
    if (avgDolphins >= 2 * avgKolalas) {
        console.log(`Dolphins win the  ( ${avgDolphins} vs ${avgKolalas})`)
    } else if (avgKolalas >= 2 * avgDolphins) {
        console.log(`Kolala win the  ( ${avgKolalas} vs ${avgDolphins})`)
    } else {
        console.log(`Nobody wins`)
    }
}


checkWinner(scoreDolphins, scoreKolalas)