'use strict' //makes it easier to find bugs and more difficult to introduce new bugs

//The advantages of using strict mode //////////////////////////////
// let hasDriversLicense = false
// const passTest = true
// if (passTest) hasDrveric = true
// if (hasDriversLicense) console.log("Yes, I can drive.")

//Functions /////////////////////////////////////////////////////

//build and call a regular function
function logger() {
  console.log('My name is Tomas')
}
logger()

//calling / running / invoking functions 
function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`
  return juice
}

//By running this function without saving it to a variable you just get 5 0. Only by assigning the result to a variable can you access the result of the function.

//Even though this is assigned to a variable, the fn is still being called
const appleJuice = fruitProcessor(5, 0) 
console.log(appleJuice)

//Same idea here assigning the value of the output to a variable and calling the fn
const appleOrangeJuice = fruitProcessor(2, 4)

//Keep Your Code DRY (Don't Repeat Yourself)

//Function Declaration vs. Expressions ///////////////////////////////////////
function calcAge1(birthYear) {
  return 2037 - birthYear 
}
const age1 = calcAge1(1991)
console.log(age1)

//Function Expression (has no name aka anonymous function)
const calcAge2 = function (birthYear){
  return 2037 - birthYear 
}
age2 = calcAge2(1991)
console.log(age2)

//Arrow Functions //////////////////////////////////////////////////////////
//Arrow functions are function expressions in short form//
//Return is implicit and not necessary in the (one line) arrow function//
const calcAge3 = birthYear => 2037 - birthYear
const age3 = calcAge3(1991)
console.log(age3)

const yearsUntilRetirement = (birthYear,firstName) => {
  const age = 2037 - birthYear
  const retirement = 65 - age
  return `${firstName} retires in ${retirement} years`
}
console.log(yearsUntilRetirement(1991, "Jonas")) 
console.log(yearsUntilRetirement(1980, "Bob")) 

//Arrow Functions don't work with the 'this' keyword.

//Functions calling other functions ///////////////////////////////////////
const cutPieces = function(fruit) {
  return fruit * 4
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutPieces(apples)
  const orangePieces = cutPieces(oranges)
  const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`
  return juice
}
console.log(fruitProcessor(2, 3))

const language = 'JavaScript'
const str = language.toUpperCase();
console.log(str) // output: ‘JavaScript’

//Code Challenge /////////////////////////////////////////////////////////
let calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3

let scoreDolphins = calcAverage(44, 23, 71)
let scoreKoalas = calcAverage(65, 54, 49)

// The above is okay BUT could be written better like this
// ** const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3
// since the arrow function can be expressed in a single line.

const avgDolphs = calcAverage(44, 23, 71)
const avgKoalas = calcAverage(85, 54, 41)
console.log(avgDolphs,avgKoalas)

function checkWinner(avgDolphs, avgKoalas){
if(avgDolphs >= 2 * avgKoalas){
    console.log(`The Dolphins won! (${avgDolphs} vs ${avgKoalas})`)
}else if(avgKoalas >= 2 * avgDolphs){
  console.log(`The Koalas won! (${avgKoalas} vs. ${avgDolphs})`)
} else {
  console.log("There was no clear winner")
}
}

checkWinner(scoreDolphins, scoreKoalas)
checkWinner(576, 111)

//Test data 2
scoreDolphins = calcAverage(85, 54, 41)
scoreKoalas = calcAverage(23, 34, 27)
console.log(scoreDolphins, scoreKoalas)
checkWinner(scoreDolphins, scoreKoalas)


//Arrays!
const friend1 = 'Michael'
const friend2 = 'Steven'
const friend3 = 'Peter'

//array literal
const friends = ['Michael', 'Steven', 'Peter']
console.log(friends[0])
console.log(friends[2])
//length property
console.log(friends.length)
console.log(friends[friends.length - 1])

friends[2] = "Jay"

//array constructor
const years = new Array(1991, 1984, 2008, 2020)

const firstName = "Jonas";
const jonas = [firstName, 'Shmedtmann', 2037-1986, 'teacher', friends];
console.log(jonas)

//Exercise 
const calculateAges = function (birthYear) {
  return 2037 - birthYear
}

const years = [1990, 1967, 2002, 2010, 2018]
calculateAges(years)

const age1 = calculateAges(years[years.length -1])
console.log(age1)

const ages = [calculateAges(years[0]), calculateAges(years[1]), calculateAges(years[2])]

console.log(ages)

//add elements
const friends = ['Michael', 'Steven', 'Peter']
friends.push('Jay')

const newFriends = friends.push('Tom')
friends.unshift('John')
console.log(friends)

//Remove elements
friends.pop()
const popped = friends.pop()
friends.unshift()
console.log(popped)
console.log(friends)



//IndexOf && Includes
console.log(friends.indexOf('Clark'))
console.log(friends.includes('Bob'))
console.log(friends.includes("Steven"))
console.log(friends.includes(23))

if(friends.includes('Steven')) {
  console.log('YOu have a friend named Steven.')
}

////////////////////////////////////
// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/



const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
} 
const bills = [ 125, 555, 44]
const tips = [ calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]) ]

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]

console.log(bills, tips, totals)


//OR USE AN ARROW FUNCTION

const calcTip = bill => bill >= 50 && bill <= 300 ? bill * .15 : ball * .2 ;



// const bill = 430;
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// console.log(`The bill was ${bill}, and the tip was ${tip}, and the total value ${bill + tip}`)


const jonasArray = [
  'jonas',
  'tom',
  2037-1999,
  'student',
  ['ratan', 'bruno', 'Orion']
];


console.log(tom.friends[1])
console.log(tom['lastName'])

const tom = {
  firstName: 'Tom',
  lastName: 'Phillips',
  age: 2037-1999,
  job: 'developer',
  friends: ['Bruno', 'George', 'Josh']
}
//This works because the key is the same as the last half of the variable name
// we are building a string with the value of the key
const nameKey = 'Name'

// const interestedIn = prompt('What do you want to know about Tom? Choose between firstName, lastName, age, job and friends.')

// if(tom) {
//   console.log(tom[interestedIn])
// } else {
//   console.log('Wrong request')
// }

tom.location = 'San Diego, CA, USA';
console.log(tom)

//Challenge #1
//Tom has 3 friends, and his best friend is called Bruno.
console.log(`${tom.firstName} has ${tom.friends.length} friends and his best friend is called ${tom.friends[0]}.`)