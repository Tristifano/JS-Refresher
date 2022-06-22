'use strict'

// let hasDriversLicense = false
// const passTest = true
// if (passTest) hasDriverLicense = true
// if (hasDriversLicense) console.log('I can drive :D')

// const interface = 'Audio'
// const private = 534
// function logger() {
//     console.log('My name is Jonas')
// }

// logger()
// logger()
// logger()

// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`
//     return juice
// }

// const appleJuice = fruitProcessor(5, 0)
// console.log(appleJuice)

// const appleOrangeJuice = fruitProcessor(2, 4)
// console.log(appleOrangeJuice)

// const num = Number('23')

// function calcAge1(birthYear) {
//     return 2037 - birthYear
// }

// const age1 = calcAge1(1991)
// console.log(age1)

// const calcAge2 = function (birthYeah) {
//     return 2037 - birthYeah
// }

// const age2 = calcAge2(1991)
// console.log(age1, age2)

// const calcAge3 = birthYeah => 2037 - birthYeah
// const age3 = calcAge3(1991)
// console.log(age3)

// const yearsUntilRetirement = (birthYeah, firstName) => {
//     const age = 2037 - birthYeah
//     const retirement = 65 - age
//     return `${firstName} retires in ${retirement} years`
// }

// console.log(yearsUntilRetirement(1991, 'Jonas'))
// console.log(yearsUntilRetirement(1980, 'Bob'))

// function cutFruitPieces(fruit) {
//     return fruit * 4
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples)
//     const orangePieces = cutFruitPieces(oranges)

//     const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`
//     return juice
// }

// console.log(fruitProcessor(2, 3))

// const calcAge = function (birthYeah) {
//     return 2037 - birthYeah
// }

// const yearsUntilRetirement = function (birthYeah, firstName) {
//     const age = calcAge(birthYeah)
//     const retirement = 65 - age

//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years`)
//         return retirement
//     } else {
//         console.log(`${firstName} has already retired 🎉`)
//         return -1
//     }
// }

// console.log(yearsUntilRetirement(1991, 'Jonas'))
// console.log(yearsUntilRetirement(1950, 'Mike'))
/*
Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!
Your tasks:
1. Createanarrowfunction'calcAverage'tocalculatetheaverageof3scores
2. Usethefunctiontocalculatetheaverageforbothteams
3. Createafunction'checkWinner'thattakestheaveragescoreofeachteam
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)"
4. Usethe'checkWinner'functiontodeterminethewinnerforbothData1and Data 2
5. Ignoredrawsthistime
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49 § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores 😉 GOOD LUCK 😀
*/

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3

const koalasAverage = calcAverage(65, 54, 49)
const dolphinsAverage = calcAverage(44, 23, 71)
// const koalasAverage = calcAverage(23, 34, 27)
// const dolphinsAverage = calcAverage(85, 54, 41)

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log('Dolphins Win')
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log('Koalas Win')
    } else {
        console.log('No team wins...')
    }
}

checkWinner(dolphinsAverage, koalasAverage)
