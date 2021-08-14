'use strict' //makes it easier to introduce bugs

// const appleJuice = fruitProcessor(5, 0)
// console.log(appleJuice)
// console.log(fruitProcessor(5, 0))
// const appleOrangeJuice = fruitProcessor(2, 4)
// console.log(appleOrangeJuice)

// const num = Number("23")
// console.log(num)

// const calcAge1 = (birthYear) => {
//     return 2021 - birthYear
// }
// const calcAge2 = (birthYear) => {
//     return 2021 - birthYear
// }

// const calcAge3 = (birthYear) => 2021 - birthYear

// const age1 = calcAge1(1978)
// const age2 = calcAge2(1991)
// const age3 = calcAge3(1986)

// console.log(age1, age2, age3)

const calcAge = function (birthYear) {
    return 2021 - birthYear
}

const yearsUntilRetirement = (birthYear, name) => {
    const age = calcAge(birthYear)
    const retirement = 65 - age

    if (retirement > 0) {
        console.log(`Hi ${name}, you have ${retirement} years until you can retire.`)
        return retirement
    } else {
        console.log(`${name} has already retired`)
        return -1
    }
    // return `Hi ${name}, you have ${retirement} years until you can retire.`
}

console.log(yearsUntilRetirement(1945, "Tom"))


// const cutFruitPieces = function (fruit) {
//     return fruit * 4
// }

// const fruitProcessor = function (apples, oranges) {
//     const applePieces = cutFruitPieces(apples)
//     const orangePieces = cutFruitPieces(oranges)
//     const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`
//     return juice
// }

// console.log(fruitProcessor(2, 3))