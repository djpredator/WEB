// function sum(...args) {
//     let total = 0;
//     for (const a of args) {
//         total += a;
//     }
//     return total;
// }
const mSum = (...args) => {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i]
    }

    console.log(sum);

}
mSum(1, 2, 3, 4, 5);