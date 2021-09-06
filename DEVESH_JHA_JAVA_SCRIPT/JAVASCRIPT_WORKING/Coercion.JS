console.clear();

var mStr = 'Hello'
var mNum = 5
var mSum = mStr + mNum

console.log(mSum);
console.log(typeof(mSum));

console.log('hola' + true);
console.log(typeof('hola' + true))

console.log(null + 'hola');
console.log(typeof(null + 'hola'))

console.log(50 + 'hola');
console.log(typeof(50 + 'hola'))


if ('Rocket' + 10) {
    console.log('True')
} else {
    console.log('False')
}




// Expliocit type Coercion

var mNum = 15
console.log(typeof(String(mNum)))
console.log(typeof(String(true)))
console.log(typeof(String(-98.10)))
console.log(typeof(String(null)))
console.log(typeof(String(undefined)))

// To Number
console.log(typeof(Number('2')))
console.log(Number(true), typeof(Number(true)))
console.log(Number(false), typeof(Number(true)))
console.log(Number('-90.234'), typeof(Number('-90.234')))
console.log(Number('apple'), typeof(Number('apple')))

//To Boolean
console.log(Boolean(1), typeof(Boolean(1)))
console.log(Boolean(0), typeof(Boolean(0)))
console.log(Boolean('Apple'), typeof(Boolean('Apple')))
console.log(Boolean(null), typeof(Boolean(null)))
console.log(Boolean(undefined), typeof(Boolean(undefined)))
console.log(Boolean(''), typeof(Boolean('')))