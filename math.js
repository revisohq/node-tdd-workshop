// ORIGINAL IMPLEMENTATION
// const curriedSum = (number1) => {
//     return (number2) => {
//         return number1 + number2
//     }
// }

// AFTER REFACTORING
const curriedSum = (a) => (b) => a + b

module.exports = {
    curriedSum
}