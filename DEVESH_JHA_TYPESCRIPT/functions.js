// function Sum(x: number, y: number) : number {
//     return x + y;
// }
// Sum(2,3); // returns 5
// console.log(sum(2,3));
function Greet(greeting, name) {
    if (greeting === void 0) { greeting = "Hello"; }
    return greeting + ' ' + name + '!';
}
Greet(undefined, 'Bill'); //returns "Hello Bill!"
console.log(Greet(undefined, 'Steve'));
console.log(Greet("Hi", 'Steve'));
console.log(Greet(undefined, 'Bill'));
var Employee = /** @class */ (function () {
    function Employee(code, name) {
        var _this = this;
        this.display = function () { return console.log(_this.empCode + ' ' + _this.empName); };
        this.empName = name;
        this.empCode = code;
    }
    return Employee;
}());
var emp = new Employee(1, 'Ram');
emp.display();
function add(a, b) {
    return a + b;
}
add("Hello ", "Steve"); // returns "Hello Steve" 
add(10, 20); // returns 30 
// Rest parameter
function Greet1(greeting) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    return greeting + " " + names.join(", ") + "!";
}
console.log(Greet1("Hello", "Steve", "Bill")); // returns "Hello Steve, Bill!"
console.log(Greet1("Hello")); // returns "Hello !"
var kv1 = { key: 1, value: "Steve" }; // OK
console.log(kv1);
;
function addKeyValue(key, value) {
    console.log('addKeyValue: key = ' + key + ', value = ' + value);
}
function updateKeyValue(key, value) {
    console.log('updateKeyValue: key = ' + key + ', value = ' + value);
}
var kvp = addKeyValue;
kvp(1, 'Bill'); //Output: addKeyValue: key = 1, value = Bill 
kvp = updateKeyValue;
kvp(2, 'Steve'); //Output: updateKeyValue: key = 2, value = Steve 
