/*
let js = 'amazing';
console.log(40 + 8 + 24 - 10)

console.log('Jonas')
console.log(23)

let firstName = 'Matilda'

console.log(firstName)
console.log(firstName)
console.log(firstName)

let jonas_matilda = 'JM'
let $function = 27

let person = 'jonas'
let PI = 3.1415

let myFirstJob = 'Coder'
let myCurrentJob = 'Teacher'

let job1 = 'programmer'
let job2 = 'teacher'

console.log(myFirstJob)
*/

/*
let javascriptIsFun = true
console.log(javascriptIsFun)

// console.log(typeof true)
console.log(typeof javascriptIsFun)
// console.log(typeof 23)
// console.log(typeof 'Jonas')

javascriptIsFun = 'YES!'
console.log(javascriptIsFun)

let year
console.log(year)
console.log(typeof year)

year = 1991
console.log(typeof year)

console.log(typeof null)
*/

/*
let age = 30
age = 31

const birthyear = 1991
// birthyear =  1990

// const job; 

var job = 'programmer'
job = 'teacher'

lastName = 'Schmedtmann'
console.log(lastName)
*/

/*
const now = 2037
const ageJonas = now - 1991
const ageSarah = now - 2020
console.log(ageJonas, ageSarah)

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3)


const firstName = 'Jonas'
const lastName = 'Schedtmann'
console.log(firstName + ' ' + lastName)

let x = 10 + 5 //15
x += 10
x *= 4
x++
x--
x--
console.log(x)

console.log(ageJonas > ageSarah)
console.log(ageSarah >= 18)

const isFullAge = ageSarah >= 18

console.log(now - 1991 > now - 2018)
*/

// const now = 2037
// const ageJonas = now - 1991
// const ageSarah = now - 2018

// console.log(now - 1991 > now - 2018)

// let x, y;
// x = y = 25 - 10 - 5
// console.log(x, y)

// const averageAge = (ageJonas + ageSarah) / 2
// console.log(ageJonas, ageSarah, averageAge)

// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.
// GOOD LUCK � 

// const massMark = 78
// const heightMark = 1.69
// const massJohn = 92
// const heightJohn = 1.95

// const bmiMark = massMark / heightMark ** 2;
// const bmiJohn = massJohn / heightJohn ** 2;

// const markHigherBMI = bmiMark > bmiJohn;
// console.log(markHigherBMI)

// const massMark = 95
// const heightMark = 1.88
// const massJohn = 85
// const heightJohn = 1.76

// const bmiMark = massMark / heightMark ** 2;
// const bmiJohn = massJohn / heightJohn ** 2;

// const markHigherBMI = bmiMark > bmiJohn;
// console.log(markHigherBMI)

// const firstName = 'Jonas'
// const job = 'teacher'
// const birthYear = 1991
// const year = 2037

// const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!'
// console.log(jonas)

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`
// console.log(jonasNew)

// console.log(`Just a regular string...`)

// console.log(`String with \n\
// multiple \n\
// lines`)

// console.log(`String with 
// multiple 
// lines`)

// const age = 15
// const isOldEnough = age >= 18

// if (isOldEnough) {
//     console.log('Sarah start driving license 🚗')
// } else {
//     const yearsLeft = 18 - 15
//     console.log(`Sarah is too young. Wait another ${yearsLeft} years`)
// }

// const birthYear = 2012

// let century
// if (birthYear <= 2000) {
//     century = 20
// } else {
//     century = 21
// }
// console.log(century)

// const massMark = 78
// const heightMark = 1.69
// const massJohn = 92
// const heightJohn = 1.95

// const bmiMark = massMark / heightMark ** 2;
// const bmiJohn = massJohn / heightJohn ** 2;

// if (bmiMark > bmiJohn) {
//     console.log(`Mark's BMI (${bmiMark.toFixed(1)}) is higher than John's (${bmiJohn.toFixed(1)})!`)
// } else {
//     console.log(`John's BMI (${bmiJohn.toFixed(1)}) is higher than Mark's (${bmiMark.toFixed(1)})!`)
// }

// type conversion
// const inputYear = '1991'
// console.log(Number(inputYear), inputYear)
// console.log(Number(inputYear) + 18)

// console.log(Number('Jonas'))
// console.log(typeof NaN)

// console.log(String(23), 23)

// //type coersion
// console.log('I am ' + 23 + ' years old')
// console.log('23' - '10' - 3)
// console.log('23' / '2')

// let n = '1' + 1
// console.log(n)
// n = n - 1
// console.log(n)

// console.log(Boolean(0))
// console.log(Boolean(undefined))
// console.log(Boolean('Jonas'))
// console.log(Boolean({}))
// console.log(Boolean(''))

// const money = 100
// if (money) {
//     console.log(`Don't spend it all ;)`)
// } else {
//     console.log('You should get a job!')
// }

// let height = 68
// if (height) {
//     console.log('YAY! Height is defined')
// } else {
//     console.log('Height is UNDEFINED')
// }

const age = '18';
if (age === 18) console.log('You became an adult :D (strict)')

if (age == 18) console.log('You became an adult :D (loose)')

const favorite = Number(prompt(`What's your favorite number?`))
console.log(favorite)
console.log(typeof favorite)

if (favorite === 23) {
    console.log('Cool! 23 is an amazing number!')
} else if (favorite === 7) {
    console.log('7 is also a cool number')
} else if (favorite === 9) {
    console.log('9 is also a cool number')
} else {
    console.log('Number is not 23 or 7')
}

if (favorite !== 23) console.log('Why not 23?')