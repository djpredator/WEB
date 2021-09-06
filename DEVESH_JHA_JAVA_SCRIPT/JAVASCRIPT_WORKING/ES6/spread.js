console.clear();


let mArr1 = [1, 2, 3, 4, 5];
let mArr2 = [6, 7, 8];
// mArr1.push(6);

// let mArr3 = mArr1.concat(mArr2);

// let mArr3 = [...mArr1, ...mArr2, 9];

// console.log([...mArr3]);

// console.log([...mArr1]);
// console.log([...mArr2]);


let mObj1 = {
    name: 'John',
    lastName: 'LarkS'
}

let mObj2 = {
    age: 28
}


let mObj3 = {...mObj1, ...mObj2 }

console.log(mObj3);