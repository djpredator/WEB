// Inference in TypeScript
var arr = [0, 1, "test"];
console.log(arr);
arr.push("str");
console.log(arr);
function sum(a, b) {
    return a + b;
}
var total = sum(10, 20); // OK
// var str: string = sum(11,21); // Compiler Error 
// Inference in TypeScript competed
var code = 123;
var employeeCode = code;
console.log(typeof (code));
console.log(typeof (employeeCode));
// if Statement
var x = 10, y = 20;
if (x > y) {
    console.log('x is greater than y.');
}
else if (x < y) {
    console.log('x is less than y.'); //This will be executed
}
else if (x == y) {
    console.log('x is equal to y');
}
// switch case
// let day: number  = window.Number("Enter the number of day from 0 to 6 ");
// switch (day) {
//     case 0:
//         console.log("It is a Sunday.");
//         break;
//     case 1:
//         console.log("It is a Monday.");
//         break;
//     case 2:
//         console.log("It is a Tuesday.");
//         break;
//     case 3:
//         console.log("It is a Wednesday.");
//         break;
//     case 4:
//         console.log("It is a Thursday.");
//         break;
//     case 5:
//         console.log("It is a Friday.");
//         break;
//     case 6:
//         console.log("It is a Saturday.");
//         break;
//     default:
//         console.log("No such day exists!");
//         break;
// }
for (var i_1 = 0; i_1 < 3; i_1++) {
    console.log("Block statement execution no." + i_1);
}
// for .....of..
//   let str = "Hello World";
// for (var char of str) {
//   console.log(char); // prints chars: H e l l o  W o r l d
// }
// for .... in.....
var arr1 = [10, 20, 30, 40];
for (var index in arr1) {
    console.log(index); // prints indexes: 0, 1, 2, 3
    console.log(arr[index]); // prints elements: 10, 20, 30, 40
}
// do.....while...
var i = 2;
do {
    console.log("Block statement execution no." + i);
    i++;
} while (i < 4);
