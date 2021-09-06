console.clear();

var num1 = 10;
var num2 = 15;
var num3 = 20;

//Addition
console.log(num1 + num2)
console.log(num1 + num2 + num3)

//Subtraction
console.log(num2 - num1)
console.log(num3 - num2 - num1)

//Multiplication
console.log(num1 * num2)

//Division
console.log(num2 / num1)

// Modulus
console.log(num2 % num1)

// Increment - Post and Pre
console.log(num1++)
console.log(num1++)
console.log(num1)

console.log(++num1)
console.log(num1)

// Decrement - Post and Pre
console.log(num1--)
console.log(num1)

console.log(--num1)
console.log(num1)





// assignment operators
var num1 = 15;
var num2 = 30;

// =
num1 = 20;

// +=
num1 += 10; // num1 = num1 + 10
num1 += num2 // num1 = num1 + num2
console.log(num1)

// -=
num1 -= 10; //num1 = num1 - 10
num1 -= num2 //num1 = num1 - num2
console.log(num1)

// *=
num1 *= 20 //num1 = num1 * 20
console.log(num1)

// /=
num1 /= 10 //num1 = num1 / 10
console.log(num1)

// %=
num1 %= 10 //num1 = num1 % 10
console.log(num1)






// Comparison OPERATORS

if (5 == '5') { console.log(true) }
if (5 === 5) { console.log(true) } else { console.log(false) }
if (5 != '5') { console.log(true) } else { console.log(false) }
if (5 !== '5') { console.log(true) } else { console.log(false) }
if (15 < 15) { console.log(true) } else { console.log(false) }
if (15 <= 15) { console.log(true) } else { console.log(false) }
if (15 > 15) { console.log(true) } else { console.log(false) }
if (15 >= 15) { console.log(true) } else { console.log(false) }

//Logical Operators &&, ||, !
if (5 > 10 && 10 > 15) { console.log(true) } else { console.log(false) }
console.log(5 < 10 || 10 < 15)
console.log(!(5 < 10))

//Ternary Operator (expression) ? a : b
20 < 3 ? console.log(true) : console.log(false)