var myName = "Muhammad Umair Ahmad"
var firstName = "Muhammad Umair"
var lastName = "Ahmad"

var userName = "Muhammad Ali"

var thanksMessage = "Thank you for order."

// alert("My name is " + firstName + " " + lastName)
console.log("My name is " + firstName + " " + lastName)
// alert(thanksMessage + " " + userName)

// Variables for Numbers

var num1 = 5
var num2 = 6
var num3 = 7

var sum = (num1 + num2) * num3

var originalPrice = 500
originalPrice = 600
originalPrice = 700
var discount = 10
var discount = 5
var discountedPrice = (discount * originalPrice) / 100

var netPrice = originalPrice - discountedPrice

console.log(sum)
console.log(netPrice)


// Variable Names
var rose = "Rose"
console.log(rose)

var one = "2"
var two = 2

var result = one % two

console.log("result =>", result)

var num = 1
var newNum = num++

var calc = (2 * 4) * (4 + 2)

console.log("num =>", newNum)
console.log("calc =>", calc)

// var newName = prompt("What is your name?", "")

// var adminName = prompt("Please enter your user name.")
// var password = prompt("Please enter your password")

// console.log("adminName =>", adminName, "password =>", password)
// console.log("adminName =>", adminName)
// console.log("password =>", password)

// var first = prompt("Enter number 1", "6");
// var second = prompt("Enter number 2", "2");
function get2Numbers(){
    var first = +prompt("Enter number 1");
var second = +prompt("Enter number 2");

// first = Number(first)
// second = Number(second)

var newSum = first + second;

document.getElementById("output").innerHTML = newSum
console.log(newSum)
}