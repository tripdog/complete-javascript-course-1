const markMass = 78
const markHeight = 1.69
const johnMass = 92
const johnHeight = 1.95

let markBMI = markMass / markHeight ** 2
let johnBMI = johnMass / johnHeight ** 2

const higherBMI = markBMI > johnBMI

console.log(markBMI, johnBMI, higherBMI)

//String interpolation
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

//Conditionals-Control Structure
const age = 13

if(age >= 18){
    console.log('Sarah can start driving license 🚗')
}else{
    const yearsLeft = 18 - age
    console.log(`Error! You are too young. Wait ${yearsLeft} years more.`)
}

const continuationDate = 1968
