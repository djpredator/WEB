console.clear();
const firstName = 'Devesh'
const lastName = 'Jha'

function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

const mGreetings = `Hello ${getFullName(firstName, lastName)}`;
console.log(mGreetings);


let red = 200;
let green = 155;
let blue = 100;
let alpha = 0.8;
//rgba(red, green, blue, alpha)
//const rgbaExp = 'rgba(' + red + ',' + green + ',' + blue + ',' + alpha + ')';

const rgbaExp = `rgba(${red},${green},${blue},${alpha})`;

console.log(rgbaExp);