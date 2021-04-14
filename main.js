// What is a function FOR?
//   - a set of instructions put into a box for running later
//   - stores a piece of code for later use

function potatoGun(potato) {
    // expecting an "parameter" ("input variable")
    return potato
}

function add1(number) {
    // expects a parameter we're calling "number"
    return number + 1
}

function add(x, y) {
    // expects two parameters: x and y
    return x + y
}

let output1 = potatoGun("cat") // call the function with an "argument"
let output2 = potatoGun(123)
let output3 = potatoGun(true) // calling the function
let output4 = potatoGun([12312]) // running the function
let output5 = potatoGun(null) // executing the function
let output6 = potatoGun() // invoking the function
console.log({ output1, output2, output3, output4, output5, output6 })

let sum1 = add1(123)
let sum2 = add1("dog")
console.log({ sum1, sum2 })

let sum3 = add(1, 1)
let sum4 = add(5, 45)
console.log({ sum3, sum4 })

function getTimeOfDay(hourOftheDay) {
    // 2, 9, 13 (1pm), 17 (5pm)
    let timeOfDay
    if (hourOftheDay < 12) {
        timeOfDay = "morning"
    } else if (hourOftheDay >= 12 && hourOftheDay < 17) {
        timeOfDay = "afternoon"
    } else if (hourOftheDay >= 17 && hourOftheDay < 24) {
        timeOfDay = "evening"
    } else {
        timeOfDay = null
    }

    return timeOfDay
}

let timeOfDay = getTimeOfDay(26)
let timeOfDay1 = getTimeOfDay(4)
let timeOfDay2 = getTimeOfDay(11)
let timeOfDay3 = getTimeOfDay(12)
let timeOfDay4 = getTimeOfDay(13)
let timeOfDay5 = getTimeOfDay(16)
let timeOfDay6 = getTimeOfDay(19)
console.log({
    timeOfDay,
    timeOfDay1,
    timeOfDay2,
    timeOfDay3,
    timeOfDay4,
    timeOfDay5,
    timeOfDay6,
})

function multipleOf (x, y) {
    return x % y === 0
}
console.log(multipleOf(4, 2) === true)
console.log(multipleOf(3, 2) === false)
console.log(multipleOf(10, 5) === true)
console.log(multipleOf(15, 5) === true)
console.log(multipleOf(17, 5) === false)

function fiver (number) {
    if (isNaN(number)) {
        return "Not a Number!"
    }

    let result = ""
    let numberIsEven = multipleOf(number, 2)
    if (numberIsEven) {
        result = "even"
    } else {
        result = "odd"
    }

    // if it is evenly divisible by five,
    // we know it is a multiple of five
    let isMultipleOf5 = multipleOf(number, 5)
    if (isMultipleOf5) {
        result += "fiver"
    }

    return result
}

console.log(fiver(1) === "odd")
console.log(fiver(2) === "even")
console.log(fiver(5) === "oddfiver")
console.log(fiver(10) === "evenfiver")
console.log(fiver(100005) === "oddfiver")
console.log(fiver(0) === "evenfiver")
console.log(fiver("cat") === "Not a Number!")
console.log(fiver(NaN) === "Not a Number!")
console.log(fiver(-1) === "odd")
console.log(fiver(-15) === "oddfiver")
console.log(fiver(2.0) === "even")
console.log(fiver(5.0) === "oddfiver")
console.log(fiver(5.3) === "odd")
console.log(fiver(5.5) === "odd")
console.log(fiver(5.2) === "odd")



// Validate the array to confirm it has no empty strings
function validateArray (array) {
    for (let index = 0; index < array.length; index += 1) {
        let string = array[index]
        if (string === "") {
            return false
        }
    }

    return true
}

let strings1 = ["2", "acs", "howdy"]
let strings2 = ["2", "", "acs", "howdy", ""]
console.log(validateArray(strings1) === true)
console.log(validateArray(strings2) === false)
