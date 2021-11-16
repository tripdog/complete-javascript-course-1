const markMass = 78
const markHeight = 1.69
const johnMass = 92
const johnHeight = 1.95

let markBMI = markMass / markHeight ** 2
let johnBMI = johnMass / johnHeight ** 2

const higherBMI = markBMI > johnBMI

//Code Challenge 1
if (markBMI > johnBMI) {
    console.log(`Mark's BMI is ${markBMI - johnBMI}lbs. higher than John's.`)
}else{
    console.log(`John's BMI is ${johnBMI - markBMI}lbs. higher than Mark's.`)
}


console.log(markBMI, johnBMI, higherBMI)

//String interpolation////////////////////////////
const firstName = 'Jonas'
const job = 'teacher'
const birthYear = 1991
const year = 2037

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!'

console.log(jonas)

const jonasNew =`I'm ${firstName} a ${year - birthYear} year old ${job}!`

console.log(jonasNew)

console.log(`just a regular string`)

console.log(`String with
multiple
lines`)

//Conditionals-Control Structure///////////////////////
const age = 13

if(age >= 18){
    console.log('Sarah can start driving license 🚗')
}else{
    const yearsLeft = 18 - age
    console.log(`Error! You are too young. Wait ${yearsLeft} years more.`)
}

const continuationDate = 1968
 let century
 if (continuationDate <= 2000) {
     century = 20
 }else{
     century = 21
 }

 console.log(century)

 //Type Conversion  ////////////////////////////////////
const inputYear = '1991'
console.log(Number(inputYear), inputYear)
console.log(Number(inputYear) + 18)

console.log(Number('BigBopper'))
console.log(typeof NaN)
console.log(String(23))

//Type Coercion ////////////////////////////////////////
console.log('I am ' + 23 + ' years old')
console.log('23' - '10' - 3)
console.log('23' > '18')

let n = '1' + 1
n  = n - 1
console.log(n)

//Truthy and Falsey Values /////////////////////////////
//Falsey Values are: 0, '', undefined, null, NaN

console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean({}))
console.log(Boolean('Tom'))

const money = 0
if (money) {
    console.log("Don't spend it all.")
}else{
    console.log("You shouuld get a job.")
}

let height;
if (height) {
    console.log('Yay! Height is defined!')  
}else{
    console.log('Height is undefined :-(')
}

//Equality operators ////////////////////////////////////
//Avoid the loose (==) equality operator if at all possible 
let age = 18
if (age === 18) {
    console.log("You just became an adult.")
}

//When the user inputs this Number, it will become a String. 
//So we wrap the prompt in the Number conversion function.
const favNum = Number(prompt('Whats your favorite number'))

if (favNum == 23) {
    console.log("Cool, 23 is an amazing number.")
} else if (favNum === 7) {
    console.log("7 is also a cool number")
}else{
    console.log("The number is not 23 or 7.")
}

if (favNum !==23) {
    console.log("Why not 23?")
}

//Logical Operators /////////////////////////////////////////////
const hasDriverLic = true
const hasGoodVision = true

const shouldDrive = hasDriverLic && hasGoodVision

if (hasDriverLic && hasGoodVision) {
    console.log('Sarah is able to drive!')
} else {
    console.log('Someone else should drive')
}

const isTired = true
console.log(hasDriverLic || hasGoodVision || isTired)


console.log(!hasDriverLic)

//Code Challenge #3 ////////////////////////////////////////////

const dolphScore = (97 + 112 + 101) / 3
const koalaScore = (109 + 95 + 106) / 3
console.log(dolphScore)
console.log(koalaScore)

console.log(dolphScore, koalaScore)

winner = dolphScore > koalaScore
console.log(winner)

if (dolphScore === koalaScore && dolphScore >= 100 && koalaScore >= 100) {
    console.log('The match was a tie.')
} else if (dolphScore > koalaScore && dolphScore >= 100) {
    console.log("The Dolphin's win!")
} else if(koalaScore > dolphScore && koalaScore >= 100){
    console.log("The Koala's won!")
} else {
    "Nobody wins, insufficient points"
}

//The switch statement ///////////////////////////////////////////////
const day = 'berzerker'

switch(day){
    case 'monday':
        console.log("Plan course structure")
        console.log("Go to coding meetup")
        break;
        case 'tuesday':
            console.log("Prepare theory vids.")
            break;
        case 'wednesday':
        case 'thursday':
            console.log('Write code examples')
            break;
        case 'friday':
            console.log('Record Vids')
            break;
        case 'saturday':
        case 'sunday':
            console.log('Enjoy the weekend')
            break;
        default:
            console.log('You are not valid.')
}
//if else - else
if (day === 'monday') {
    console.log("Plan course structure.")
    console.log("Go to coding meetup.")
}else if (day === 'tuesday') {
    console.log("Prepare theory vids.")
}else if (day === 'wednesday' || day === 'thursday') {
    console.log("Write code examples.")
}else if (day === 'friday') {
    console.log("Record Vids")
}else if (day === 'saturday' || day === 'sunday') {
    console.log("Enjoy the weekend.")
}else{
    console.log("You're not valid.")
}

//Statements(such as in if statement) and Expressions(3+4 produces a value therefor it is an expression)
//Operators are expressions because they have values
const age = 23
age >= 18 ? console.log('You may drink booze.') : console.log('You may NOT booze it up!')

//Conditionally assigning values to a variable (see below, POWERFUL!)
const drink = age >= 18 ? 'Wine' : 'Water'
console.log(drink)

let drink2;
if (age >=18) {
    drink2 = 'wine'
}else{
    drink2 = 'water'
}
console.log(drink2)
//Use the ternary operator inside a template literal for quick decisions
console.log(`I like to drink ${age >= 18 ? 'Wine' : 'Water'}`)

//Code challenge #4 tip calculator
const bill = 430
let tip;

bill >= 50 && bill <= 300 ? tip = bill * .15 : tip = bill * .20;
console.log(`The bill was ${bill} , the tip was ${tip} and the total was ${bill + tip} .`)
