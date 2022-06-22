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

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3

// const koalasAverage = calcAverage(65, 54, 49)
// const dolphinsAverage = calcAverage(44, 23, 71)
// // const koalasAverage = calcAverage(23, 34, 27)
// // const dolphinsAverage = calcAverage(85, 54, 41)

// function checkWinner(avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log('Dolphins Win')
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         console.log('Koalas Win')
//     } else {
//         console.log('No team wins...')
//     }
// }

// checkWinner(dolphinsAverage, koalasAverage)

// const friend1 = 'Michael'
// const friend2 = 'Steven'
// const friend3 = 'Peter'

// const friends = ['Michael', 'Steven', 'Peter']
// console.log(friends)

// const y = new Array(1991, 1984, 2008, 2020)

// console.log(friends[0])
// console.log(friends[2])

// console.log(friends.length)
// console.log(friends[friends.length - 1])

// friends[2] = 'Jay'
// console.log(friends)

// const firstName = 'Jonas'
// const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends]
// console.log(jonas)
// console.log(jonas.length)

// const calcAge = function (birthYeah) {
//     return 2037 - birthYeah
// }

// const years = [1990, 1967, 2002, 2010, 2018]
// const age1 = calcAge(years[0])
// const age2 = calcAge(years[1])
// const age3 = calcAge(years[years.length - 1])
// console.log(age1, age2, age3)

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]
// console.log(ages)

// Add Elements
// const friends = ['Michael', 'Steven', 'Peter']
// friends.push('Jay')
// console.log(friends)

// friends.unshift('John')
// console.log(friends)

// // Remove elements 
// friends.pop() // last
// const popped = friends.pop()
// console.log(popped)
// console.log(friends)

// friends.shift() //first
// console.log(friends)

// console.log(friends.indexOf('Steven'))
// console.log(friends.indexOf('Bob'))

// friends.push(23)
// console.log(friends.includes('Steven'))
// console.log(friends.includes('Bob'))
// console.log(friends.includes(23))

// if (friends.includes('Steven')) {
//     console.log('You have a friend named Steven')
// }

// Coding Challenge #2
// Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
// Your tasks:
// 1. Writeafunction'calcTip'thattakesanybillvalueasaninputandreturns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100
// 2. Andnowlet'susearrays!Socreateanarray'bills'containingthetestdata below
// 3. Createanarray'tips'containingthetipvalueforeachbill,calculatedfrom the function you created before
// 4. Bonus:Createanarray'total'containingthetotalvalues,sothebill+tip Test data: 125, 555 and 44
// Hint: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉
// GOOD LUCK 😀

// const calcTip = (bill) => bill >= 50 && bill <= 300 ? bill * .15 : bill * .2

// const bills = new Array(125, 555, 44)
// const tips = new Array(calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]))
// const totals = new Array(bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2])
// console.log(bills)
// console.log(tips)
// console.log(totals)

// const jonasArray = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
// ]

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// }
// console.log(jonas)

// console.log(jonas.lastName)
// console.log(jonas['lastName'])
// const nameKey = 'Name'
// console.log(jonas['first' + nameKey])
// console.log(jonas['last' + nameKey])

// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, friends')
// console.log(jonas[interestedIn])

// if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn])
// } else {
//     console.log('Wrong request! Choose between firstName, lastName, age, job, friends')
// }

// jonas.location = 'Portugal'
// jonas['twitter'] = '@jonasschemdtmann'
// console.log(jonas)

// //Challenge
// // Jonas has 3 friends, and his best friend is Michael

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`)

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schedtmann',
    birthYeah: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,
    // calcAge: function (birthYeah) {
    //     return 2037 - birthYeah
    // }
    calcAge: function () {
        this.age = 2037 - this.birthYeah
        return this.age
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} year old teacher, and ${jonas.hasDriversLicense ? 'he has a drivers license' : 'he does not have a drivers license'}`
    }
}

console.log(jonas.calcAge())

console.log(jonas.age)
console.log(jonas.age)
console.log(jonas.age)

// Challenge
// Jonas is a 46 year old teacher, and he has a driver's license"

console.log(jonas.getSummary())
